import React, { Component } from 'react';
import Header from './components/common/Header';
import Cards from './components/common/Cards';
import ContentJSON from './data/content.json';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards data={ContentJSON} />
        {this.props.children}
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
