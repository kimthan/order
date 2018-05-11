import React, { Component } from "react";

class YourOrder extends Component {
    handleClick(){
        this.props.endOrder()
       
        
        
    }
  render() {
     
     
      let {order} = this.props
      let yourSize = this.props.size.filter(x => x.size == order.size)
      let yourBase =  this.props.base.filter(x => x.Id == order.base)
      let yourDish =  this.props.dish.filter(x => x.Id == order.dish)
      let yourOrder = [...yourSize, ...yourBase, ...yourDish,]
  
      
      
      
      let menuList =  yourOrder.map((meny, i) => {
          return <div key={i} index={i}
          className=" size"
        
          style={{ backgroundColor: "#53615f" }}
        >
          <img className="card-img-top" src={meny.image} alt={meny.imgAlt} />
          <div className="card-body" style={{ textAlign: "center" }}>
            <p >{meny.imgText}</p>
          </div>
        </div>
      }) 
      
      
    return (
        <div style={{position:'relative'}}>
            <div style={{textAlign:'center' }}>
                <h1>Din Order</h1>
            </div>
      <div className="menuSize" style={{marginBottom:0, paddingBottom:0}}>
        {menuList}
        
      </div><br/><div style={{textAlign:'center'}}>

      <h1 style={{textAlign:'center', display:'inline'}}>Att betala i kassan: {yourOrder[0].price}kr </h1>
      <button 
      onClick={this.handleClick.bind(this)}
      style={{textAlign:'center', width:200, height:100, fontSize:30, marginBottom:20}} className="btn btn-success">Bekräfta</button>
      </div>
        </div>
    );
  }
}

export default YourOrder;
