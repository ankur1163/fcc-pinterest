import React, { Component } from 'react';
import {Link} from 'react-router'; 


class Lp extends Component {
    
    render() {
        
        //const zoneStyle = styles.zone; // needs to be inside the render func!
        
        return(<div>
        <Link to= "/">Home</Link>
                <h2> Landing page is here </h2>
                <Link to="/Allpins">AllPins</Link>&emsp;&emsp;<Link to="/Mypins">MyPins</Link>&emsp;&emsp;<Link to="/SB">chat</Link>&emsp;&emsp;<Link to="/login">Login</Link>
                </div>)
    }
}

export default Lp