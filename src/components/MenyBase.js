import React, { Component } from "react";

class MenyBase extends Component {
    
    handleClick(base){
      
        this.props.selectedBase(base)
    }
  render() {
     
      
      const {menuBase} = this.props
      
      
      let menuList = menuBase.map((meny, i) => {
          return <div key={i} index={i}
          className=" size"
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
                <h1>Välj Bas</h1>
            </div>
      <div className="menuSize">
        {menuList}
      </div>
        </div>
    );
  }
}

export default MenyBase;
