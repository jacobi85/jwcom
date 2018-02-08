import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import teaserImage from './ontopofthemountain.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <header className="App-header">
          <img src={teaserImage} alt="teaserImage" width="100%" />
        </header>
        <section />
      </div>
    );
  }
}

export default App;
