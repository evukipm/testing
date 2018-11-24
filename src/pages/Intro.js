import React, { Component } from 'react';

import { IntroBox, IntroChild } from '../components/motions';
import '../stylesheets/intro.css';

import thunderUrl from '../images/thunderbolt.svg';

class Intro extends Component {

  state = {
    visitor: '',
  }

  componentDidMount () {
    document.body.className="intro"
  }

  handleInput = e => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { visitor } = this.state
    this.props.history.push({
      pathname: '/intentions',
      state: { visitor },
    });
  }

  render() {
    return (
      <div>
        <IntroBox className="container">
          <IntroChild>
            <h1>Hi, visitor!</h1>
          </IntroChild>
          <IntroChild>
            <form onSubmit={this.handleSubmit}>
              <input name="visitor" onChange={this.handleInput} type="text" placeholder="Who are you?" />
              <label>
                <input type="submit" className="invisible" />
                <img className="block-image icon" src={thunderUrl} alt="thunderbolt" />
              </label>
            </form>
          </IntroChild>
        </IntroBox>
      </div>
    );
  }
}

export default Intro;
