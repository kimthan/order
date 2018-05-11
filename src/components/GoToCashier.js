import React, { Component } from 'react';

class GoToCashier extends Component {
    render() {
        console.log(this.props.ordernr)
        let ordernr = this.props.ordernr.size.length+this.props.ordernr.base.length+this.props.ordernr.dish.length
        
        return (
            <div style={{textAlign:'center', marginTop:-10}}>
                <h2   >Ange:</h2>
                <h2   style={{fontSize:80, marginBottom:30, marginTop:-10}}>#{ordernr}</h2>
                
                <h2   >QR KOD:</h2>
                <img style={{marginTop:-20}} src="/bilder/qrcode.png" alt="qrcode" />
                </div>
           
        );
    }
}

export default GoToCashier;