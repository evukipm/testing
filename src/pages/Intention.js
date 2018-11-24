import React, { Component } from 'react';

import { IntentionBox } from '../components/motions';
import '../stylesheets/intention.css';

class Intention extends Component {

  componentDidMount () {
    document.body.className="intention"
  }

  scared = () => {
    const { visitor } = this.props.location.state;
    this.props.history.push({
      pathname: '/scared',
      state: { visitor },
    });
  }

  intro = () => {
    this.props.history.push({
      pathname: '/',
    });
  }

  render() {
    const { visitor } = this.props.location.state;
    return (
      <IntentionBox className="container">
        <h2>{`I see, ${visitor}, and... what do you want?`}</h2>
        <button onClick={this.scared}>Uuh... nothing, I was going to...</button>
        <button>I come here to know you.</button>
        <button onClick={this.intro}>{`${visitor} is not my name`}</button>
      </IntentionBox>
    );
  }
}

export default Intention
