import React, { Component } from 'react';

class GoToCashier extends Component {
    render() {
        console.log(this.props.ordernr)
        let ordernr = this.props.ordernr.size.length+this.props.ordernr.base.length+this.props.ordernr.dish.length
        
        return (
            <div style={{textAlign:'center', marginTop:-20}}>
                <h2   >Ange:</h2>
                <h2   style={{fontSize:80, marginBottom:100, marginTop:-20}}>#{ordernr}</h2>
                
                <h2>QR CODE</h2>
                <img style={{marginTop:-20}} src="/bilder/qrcode.png" alt="qrcode" />
                </div>
           
        );
    }
}

export default GoToCashier;