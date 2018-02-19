import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button, Collapse } from 'react-bootstrap';
import './App.css';
import profileImg from './placeholder-profile.jpg';
import logo from './jacobwestman_logo@x2.gif';
import Fade from 'react-reveal/Fade';
import Responsive from 'react-responsive';

import supImageHW from './assets/sceens/sup/sup-heavy-water-tn.jpg';
import supImageRS from './assets/sceens/sup/sup-racing-sweden-tn.jpg';
/* import supImageHW from './assets/sceens/entrepreneur/entrepreneur-play-network.jpeg';
import supImageRS from './assets/sceens/entrepreneur/people-coffee-tea-meeting.jpg'; */
/* import supImageHW from './assets/sceens/programming/programming-desk.jpeg';
import supImageRS from './assets/sceens/programming/programming-computer-screen-tn.jpg'; */

/** Responsive tools */
/* const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />; */
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

function Tag({ label }) {
  return (
    <li>
      <a>{label}</a>
    </li>
  );
}

function Tags({ labels }) {
  return (
    <ul className="tags">
      {labels.map((label, index) => {
        return <Tag key={index} label={label} />;
      })};
    </ul>
  );
}

function Colrightside({
  data,
  handleToggleContentClick,
  isTogglableContentOpen
}) {
  const renderButton = data.website && (
    <td>
      <Button bsStyle="primary" href={data.website.url} target="_blank">
        {data.website.label}
      </Button>
    </td>
  );
  const renderButton2 = data.website2 && (
    <td>
      <Button
        bsStyle="primary"
        href={data.website2.url}
        target="_blank"
        className="ml-10"
      >
        {data.website2.label}
      </Button>
    </td>
  );
  const renderCaret = isTogglableContentOpen ? (
    <span className="glyphicon glyphicon-menu-up" />
  ) : (
    <span className="glyphicon glyphicon-menu-down" />
  );
  const togglableContent = data.rightContent2 && (
    <div className="App-maincontent__col__collapsible-area">
      <Button bsStyle="link" onClick={handleToggleContentClick}>
        {renderCaret} Show more
      </Button>
      <Collapse in={isTogglableContentOpen} unmountOnExit={false}>
        <p>{data.rightContent2}</p>
      </Collapse>
    </div>
  );
  const jumbotron = (
    <Jumbotron>
      <h2>{data.title}</h2>
      <p>{data.rightContent}</p>
      {togglableContent}
      <br />
      <table>
        <tbody>
          <tr>
            {renderButton}
            {renderButton2}
          </tr>
        </tbody>
      </table>
    </Jumbotron>
  );

  return <React.Fragment>{jumbotron}</React.Fragment>;
}

function Colleftside({ data }) {
  return (
    <div>
      <Tags
        labels={['Programming', 'Reactjs', 'Css', 'Javascript', 'Es6', 'Html5']}
      />
    </div>
  );
}

function Maincontent({
  activeContent,
  isActive,
  handleToggleContentClick,
  isTogglableContentOpen
}) {
  const componentClass = 'App-maincontent ' + activeContent.colorClass;
  const gridInstance = (
    <div className={componentClass}>
      <Row className="show-grid">
        <Col md={6} className="App-maincontent__col App-maincontent__col-1">
          <figure>
            <img src={supImageRS} alt="Stand up paddle - racing in Sweden" />
          </figure>
        </Col>
        <Col md={6} className="App-maincontent__col App-maincontent__col-2">
          <Colrightside
            data={activeContent}
            handleToggleContentClick={handleToggleContentClick}
            isTogglableContentOpen={isTogglableContentOpen}
          />
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={6} className="App-maincontent__col App-maincontent__col-3">
          <Colleftside data={activeContent.tags} />
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
          <Fade when={isActive} duration={1000} distance="20px" collapse top>
            {gridInstance}
          </Fade>
        </Col>
      </Row>
    </Grid>
  );
}

function Card(props) {
  const { title, description } = props.data;
  const { bg, isActive } = props;
  const cardcontainer = (
    <React.Fragment>
      <div
        className="card-body"
        onClick={() => props.handleOnClickCard(props.data)}
      >
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
      </div>
    </React.Fragment>
  );

  let isActiveClass = isActive ? ' active' : '';
  let componentStyles = `card text-white ${bg} mb-3${isActiveClass}`;
  const componentStylesDefault = componentStyles + (isActive ? '' : ' grow');

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
        {props.data.map((card, index) => {
          return (
            <Col md={4} key={card.id}>
              <Card
                data={card}
                bg={card.colorClass}
                isActive={index === props.activeIndex}
                handleOnClickCard={props.handleOnClick}
              />
            </Col>
          );
        })}
      </Row>
    </Grid>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      isContentVisible: false,
      activeIndex: props.activeIndex || -1,
      activeContent: {},
      isTogglableContentOpen: false
    };

    this.handleOnCardClick = this.handleOnCardClick.bind(this);
    this.handleToggleContentClick = this.handleToggleContentClick.bind(this);
  }

  componentDidMount() {
    this.setState({ content: this.props.data });
  }

  handleOnCardClick(data, index) {
    this.setState({
      isContentVisible: true,
      activeContent: data,
      activeIndex: index
    });
  }

  handleToggleContentClick() {
    this.setState(prevState => ({
      isTogglableContentOpen: !prevState.isTogglableContentOpen
    }));
  }

  render() {
    const { content, isContentVisible, activeContent } = this.state;
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
        <Cards
          data={content}
          handleOnClick={this.handleOnCardClick}
          activeIndex={this.state.activeIndex}
        />
        <Maincontent
          isActive={isContentVisible}
          activeContent={activeContent}
          isTogglableContentOpen={this.state.isTogglableContentOpen}
          handleToggleContentClick={this.handleToggleContentClick}
        />
        <footer className="App-footer" />
      </div>
    );
  }
}

export default App;
