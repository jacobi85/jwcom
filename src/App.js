import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import profileImg from './placeholder-profile.jpg';
import logo from './jacobwestman_logo@x2.gif';
import Fade from 'react-reveal/Fade';
import Responsive from 'react-responsive';

import supImageHW from './assets/sceens/sup/sup-heavy-water-tn.jpg';
import supImageRS from './assets/sceens/sup/sup-racing-sweden-tn.jpg';

/** Responsive tools */
/* const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />; */
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

function Colrightside(props) {
  const jumbotron = (
    <Jumbotron>
      <h2>Hello, world!</h2>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Visit website</Button>
      </p>
    </Jumbotron>
  );

  return <React.Fragment>{jumbotron}</React.Fragment>;
}

function Colleftside(props) {
  return (
    <div>
      <p>Markup that will be revealed on scroll</p>
      <br />
      <p>Markup that will be revealed on scroll</p>
    </div>
  );
}

function Maincontent(props) {
  const gridInstance = (
    <div className="App-maincontent">
      <Row className="show-grid">
        <Col md={6} className="App-maincontent__col App-maincontent__col-1">
          <figure>
            <img src={supImageRS} alt="Stand up paddle - racing in Sweden" />
          </figure>
        </Col>
        <Col md={6} className="App-maincontent__col App-maincontent__col-2">
          <Colrightside />
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={6} className="App-maincontent__col App-maincontent__col-3">
          <Colleftside />
        </Col>
        <Col md={6} className="App-maincontent__col App-maincontent__col-4">
          <figure>
            <img src={supImageHW} alt="Stand up paddle - heavy water" />
          </figure>
        </Col>
      </Row>
    </div>
  );

  return (
    <Grid>
      <Row className="show-grid">
        <Col md={12}>
          <Fade
            when={props.isVisible}
            duration={1000}
            distance="20px"
            collapse
            top
          >
            {gridInstance}
          </Fade>
        </Col>
      </Row>
    </Grid>
  );
}

function Card(props) {
  const cardcontainer = (
    <React.Fragment>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h4 className="card-title">Secondary card title</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Button bsStyle="info" bsSize="large" onClick={props.handleOnClickCard}>
          Learn more
        </Button>
      </div>
    </React.Fragment>
  );

  let componentStyles = `card text-white ${props.bg} mb-3`;
  const componentStylesDefault = componentStyles + ' grow';

  return (
    <React.Fragment>
      <Mobile>
        <div className={componentStyles}>{cardcontainer}</div>
      </Mobile>
      <Default>
        <div className={componentStylesDefault}>{cardcontainer}</div>
      </Default>
    </React.Fragment>
  );
}

function Cards(props) {
  return (
    <Grid className="App-cards">
      <Row className="show-grid">
        <Col md={4}>
          <Card bg="bg-primary" handleOnClickCard={props.handleOnClick} />
        </Col>
        <Col md={4}>
          <Card bg="bg-success" handleOnClickCard={props.handleOnClick} />
        </Col>
        <Col md={4}>
          <Card bg="bg-info" handleOnClickCard={props.handleOnClick} />
        </Col>
      </Row>
    </Grid>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: { isVisible: false }
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(el) {
    this.setState({ content: { isVisible: true } });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div href="#" className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          <img
            className="App-header__profile-img"
            src={profileImg}
            alt="profile-placeholder"
          />
        </header>
        <Cards handleOnClick={this.handleOnClick} />
        <Maincontent isVisible={this.state.content.isVisible} />
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
