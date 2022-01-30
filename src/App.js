import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route,  Switch} from "react-router-dom";


const App = () => {
    return ( 
        <Router>
            <div className="app">
                <Navbar />
                <div className="content">
                    <Switch>
                      <Route path="/">
                        
                      </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
 
export default App;
