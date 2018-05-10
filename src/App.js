import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MenuSize from "./components/MenuSize";
import MenyText from "./components/MenyText";
import MenyBase from "./components/MenyBase";
import menuSizes from '../src/data/menuSizes'
import menuBase from '../src/data/menuBase'
import menuDishes from '../src/data/menuDishes'
import MenyDishes from "./components/MenuDishes";
import YourOrder from "./components/YourOrder";
import GoToCashier from "./components/GoToCashier";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedMenuSize: '',
      selectedMenuBase: '',
      selectedMenuDish: '',
      goToCashier:'',
      yourOrder:'',
      menuSizes: menuSizes,
      menuBase: menuBase,
      MenyDishes:menuDishes,
      sizeIsEmpty: true,
      baseIsEmpty: true,
      dishIsEmpty: true,
    }
  }

  handleSelectedSize(size){
this.setState({selectedMenuSize:size, sizeIsEmpty:false})

  }

  handleSelectedBase(base){
    this.setState({selectedMenuBase:base, baseIsEmpty:false})
    
      }
      handleselectedDish(dish){
        this.setState({selectedMenuDish:dish, yourOrder:{size: this.state.selectedMenuSize, base: this.state.selectedMenuBase, dish: dish, }, dishIsEmpty:false})
        
          }

          handleEndOrder(){
            this.setState({goToCashier:this.state.yourOrder, yourOrder:'', dishIsEmpty:false})
            
          }

  render() {
console.log(this.state.dishIsEmpty)

    
    return (
      <div>
        <Nav />
        
        <br/>
        {this.state.sizeIsEmpty 
          
          ? <MenuSize menuSizes={this.state.menuSizes} selectedSize={this.handleSelectedSize.bind(this)}/>
          :''}
          {!this.state.sizeIsEmpty && this.state.baseIsEmpty 
        
          ? <MenyBase  menuBase={this.state.menuBase} selectedBase={this.handleSelectedBase.bind(this)}/>
          :''
        }
          {this.state.dishIsEmpty && !this.state.sizeIsEmpty && !this.state.baseIsEmpty
          
          ? <MenyDishes  menuDish={this.state.MenyDishes} selectedDish={this.handleselectedDish.bind(this)} />
          :''
        }

          {this.state.yourOrder
         
          ? <YourOrder  order={this.state.yourOrder} size={menuSizes} base={menuBase} dish={menuDishes} endOrder={this.handleEndOrder.bind(this)}/>
          :''
        }

          {!this.state.goToCashier
          ? ''
          : <GoToCashier ordernr={this.state.goToCashier}/>
          }
          
      </div>
    );
  }
}

export default App;
