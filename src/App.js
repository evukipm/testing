import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose';

import './stylesheets/App.css';

import Navbar from './components/Navbar'
import Intro from './pages/Intro'
import About from './pages/About'

import { RouteContainer } from './components/motions'

class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
          <div>
            <Navbar />
            <PoseGroup>
              <RouteContainer key={location.key}>
                <Switch>
                  <Route exact path='/' component={Intro} key="home" />
                  <Route exact path='/about' component={About} key="about" />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </div>
        )}
      />
    )
  }
}

export default App;
