import React, { Component } from 'react';
import '../stylesheets/background.css';

class Background extends Component {

  randomLetter = () => {
    let ulContainer = []
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const abc = string.split('') 

    for (let i = 0; i < 15; i++) {
      ulContainer.push(<li>{`${abc[Math.floor(Math.random() * 26)]}`}</li>)
    }
    return ulContainer
  }

  render() {
    return (
      <div className="area">
        <ul className="circles">
          {this.randomLetter()}
        </ul>
      </div>
    )
  }
}

export default Background
