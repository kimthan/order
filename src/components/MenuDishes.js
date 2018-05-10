import React, { Component } from "react";

class MenyDishes extends Component {
    
    handleClick(dish){
    
        this.props.selectedDish(dish) 
    }
  render() {
     
   

      
      const {menuDish} = this.props
      
      
      let menuList = menuDish.map((meny, i) => {
          return <div key={i} index={i}
           className="card1"
          onClick={this.handleClick.bind(this, meny.Id)}
          style={{ backgroundColor: "#53615f" }}
        >
          <img className="card-img-top" src={meny.image} alt={meny.imgAlt} />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p >{meny.imgText}</p>
          </div>
        </div>
      })
      
      
    return (
        <div>
            <div style={{textAlign:'center', marginTop:20, marginBottom:10}}>
                <h1>Välj Rätt</h1>
            </div>
      <div className="dish">
        {menuList}
      </div>
        </div>
    );
  }
}

export default MenyDishes;
