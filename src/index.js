import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// COMPONENTS
import Header from './components/header';
import PlaylistHeader from './components/playlist-header';
import NewsList from './components/news-list';

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
