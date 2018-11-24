import React, { Component } from 'react';
import { ScaredBox } from '../components/motions';
import '../stylesheets/scared.css'

class Scared extends Component {

  componentDidMount () {
    document.body.className="scared"
  }

  returnClick = () => {
    const { visitor } = this.props.location.state;
    this.props.history.push({
      pathname: '/intentions',
      state: { visitor },
    });
  };

  render() {
    const { visitor } = this.props.location.state;
    return (
      <ScaredBox className="container">
        <h2>{`What happens, ${visitor}?`}</h2>
        <h3>Are you Scared?</h3>
        <button onClick={this.returnClick}>Of course not.</button>
        <button>Well... maybe...</button>
      </ScaredBox>
    );
  }
}

export default Scared;
