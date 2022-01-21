import React from 'react';
import Navbar from './Navbar';
import Home from './Home';


const App = () => {
    return ( 
        <div className="app">
            <Navbar />
            <div className="content">
                <h1>App component</h1>
            </div>
        </div>
    );
}
 
export default App;