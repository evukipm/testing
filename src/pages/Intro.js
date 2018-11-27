import React, { Component } from 'react';

import { IntroBox, IntroChild } from '../components/motions';
import '../stylesheets/intro.css';

class Intro extends Component {
  state = {
    theme: true,
  }

  componentDidMount() {
    document.body.className = 'light-theme';
  }

  onDark = () => {
    document.body.className = 'dark-theme';
    this.setState({theme: false})
  }

  onLight = () => {
    document.body.className = 'light-theme';
    this.setState({theme: true})
  }

  render() {
    const {theme} = this.state
    return (
      <div>
        <IntroBox className="container">
          <div className="intro-box">
            <IntroChild>
              <p>Fullstack web developer, writer and punk lover</p>
            </IntroChild>
            <IntroChild>
              <h1>Eva Pérez</h1>
            </IntroChild>
            <IntroChild className="button-intro">
            {theme ? <button onClick={this.onDark}>Dark mode</button> : <button onClick={this.onLight}>Light mode</button>}
            </IntroChild>
          </div>
        </IntroBox>
      </div>
    );
  }
}

export default Intro;
