import React, { Component } from 'react';

import Intro from './components/intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro name="Eva" />
      </div>
    );
  }
}

export default App;
