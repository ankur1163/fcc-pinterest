import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/layout/Home.js'

import Allpins from './components/layout/Allpins'
import Lp from './components/layout/Lp'


import Waste from './Login/Waste.js'

//import    Polldetail from './components/layout/Polldetail.js'; // testing different Poll details


import Container from './components/containers/Container.js';


import {Route,Router,browserHistory,hashHistory,IndexRoute} from 'react-router'
//import makeMainRoutes from './components/routes'
import AuthService from './utils/AuthService'

//this cause error
//<Route path="allmemberbooks" component={Allmemberbooks}  />
//end

//<Route path="allbooks" component={Allmemberbooks} />
//<Route path="mybooks" component={Mybooks} />
//<Route path="allbooks" component={Allmemberbooks} />
//<Route path="allmemberbooks" component={Allmemberbooks}  />
//<Route path="totalbooks" component={Totalbooks} />

const mountNode = document.getElementById('root');
const auth = new AuthService('HNfg5DdOA7ZlawVWyGoFZX8qM2lpZQGV', 'app1163.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}


ReactDOM.render( <Router history={browserHistory}>
    <Route path="/" component={Container} auth={auth}>
    
    <IndexRoute component={Lp} />
    <Route path="Allpins" component={Allpins} />
   
     </Route>
    
    
    
  </Router>,mountNode);