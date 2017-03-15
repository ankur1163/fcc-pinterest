import React, { Component } from 'react';
import {Link} from 'react-router'; 


class Allpins extends Component {
     constructor(){
        super()
        this.state={
            Allpins:[]
        }
     }
    
    render() {
        
    
        
        //const zoneStyle = styles.zone; // needs to be inside the render func!
        
        return(<div>
               <Link to= "/">Home</Link>
                <h2> All pins are here </h2>
                </div>);
    }
}

export default Allpins