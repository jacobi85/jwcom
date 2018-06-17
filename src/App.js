import React, { Component } from 'react';
import Header from './components/common/Header';
import Cards from './components/common/Cards';
import ContentJSON from './data/content.json';
import scrollToElement from 'scroll-to-element';
import { browserHistory } from 'react-router';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.jumpToHash();
  }
  componentDidUpdate() {
    this.jumpToHash();
  }
  jumpToHash = () => {
    const hash = browserHistory.getCurrentLocation().hash;
    if (hash) {
      scrollToElement(hash, { offset: 0 });
    }
  };

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
