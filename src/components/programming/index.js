import React, { Component } from 'react';
import Maincontent from '../common/Main';
import Content from '../../data/content.json';

class CodePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTogglableContentOpen: false
    };
    this.handleToggleContentClick = this.handleToggleContentClick.bind(this);
  }

  handleToggleContentClick() {
    this.setState(prevState => ({
      isTogglableContentOpen: !prevState.isTogglableContentOpen
    }));
  }

  render() {
    return (
      <Maincontent
        activeContent={Content[1]}
        isTogglableContentOpen={this.state.isTogglableContentOpen}
        handleToggleContentClick={this.handleToggleContentClick}
      />
    );
  }
}

export default CodePage;
