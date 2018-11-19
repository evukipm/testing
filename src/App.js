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
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path='/' component={Intro} key="homepage" />
                  <Route exact path='/about' component={About} key="aboutpage" />
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
