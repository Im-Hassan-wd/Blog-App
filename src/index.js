import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// COMPONENTS

class App extends Component {

  state = {
    news:JSON
  }

  render() {
    return (
      <div className="hello">
        
        <PlaylistHeader/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('#root'));
