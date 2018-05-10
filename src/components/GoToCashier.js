import React, { Component } from 'react';

class GoToCashier extends Component {
    render() {
        console.log(this.props.ordernr)
        let ordernr = this.props.ordernr.size.length+this.props.ordernr.base.length+this.props.ordernr.dish.length
        
        return (
            <div style={{textAlign:'center', marginTop:50}}>
                <h1   >Ange:</h1>
                <h1   style={{fontSize:180}}>#{ordernr}</h1>
            </div>
        );
    }
}

export default GoToCashier;