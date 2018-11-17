import React, { Component } from 'react'
import {Icon} from './icon'
import { PoseGroup } from 'react-pose';
import {Bounce, IntroBox, AboutBox, ChildBox, ChildBox2} from './motions'

import './stylesheets/intro.css'

import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import twitterIcon from '../images/twitter.svg'
import devIcon from '../images/dev-to.svg'

class Intro extends Component{
  state = {
    intro: false,
    about: false,
  }

  componentDidMount(){
    this.setState({
      intro: true,
    })
  }

  showIntro = () => {
    this.setState({
      intro: true,
      about: false,
    })
  }

  showAbout = () => {
    this.setState({
      intro: false,
      about: true,
    })
  }

  render() {
    const {intro, about} = this.state
    return <div>
      <PoseGroup>
            <IntroBox key={1} className="container intro" pose={intro ? 'visible' : 'hidden'}>
              <ChildBox><h1>Hi, I'm Eva!</h1></ChildBox>
              <ChildBox2><h2>Fullstack webdev / React-lover</h2></ChildBox2>
              <ChildBox><p>U can find me in:</p></ChildBox>
              <ChildBox2><div className="icon-list">
                <Bounce><Icon url={"https://github.com/evukipm"} iconUrl={githubIcon} alt={"github icon"} /></Bounce>
                <Bounce><Icon url={"https://www.linkedin.com/in/eva-p%C3%A9rez/"} iconUrl={linkedinIcon} alt={"linkedin icon"} /></Bounce>
                <Bounce><Icon url={"https://twitter.com/evukipm"} iconUrl={twitterIcon} alt={"twitter icon"} /></Bounce>
                <Bounce><Icon url={"https://dev.to/evukipm"} iconUrl={devIcon} alt={"dev.to icon"} /></Bounce>
              </div></ChildBox2>
              <ChildBox2><button onClick={this.showAbout}>About me</button></ChildBox2>
            </IntroBox>
            <AboutBox key={2} className="container about" pose={about ? 'visible' : 'hidden'}>
              <ChildBox><h1>About me:</h1></ChildBox>
              <ChildBox><p>Lorem ipsum dolor sit amet consectetur adipiscing elit rutrum interdum, a lacus vitae tincidunt magna commodo pretium duis. Vitae tempus curabitur nostra pharetra litora placerat fringilla habitant a, euismod suscipit facilisis penatibus luctus sagittis fermentum egestas duis eros, diam varius cursus nec blandit quisque congue senectus. Tellus fames blandit arcu commodo iaculis aliquam facilisi cras magnis, dictumst pellentesque congue nisi etiam quisque et morbi, pretium netus pulvinar luctus suspendisse venenatis dui quam.

Ante rhoncus nisl habitant hendrerit accumsan mi massa, ut parturient nibh viverra tristique primis elementum senectus, lacinia commodo taciti phasellus lectus odio. In dictumst sollicitudin tempor eleifend aliquam venenatis quisque parturient id vivamus, faucibus etiam dis erat duis placerat lacus quam orci tincidunt, pharetra purus quis primis inceptos habitant ullamcorper sed per. Urna congue dictum potenti velit egestas laoreet taciti praesent nullam cras leo, nec fames elementum massa erat sagittis senectus facilisis cubilia magna etiam vel, dictumst interdum scelerisque ante nibh lacus tristique magnis varius placerat.</p></ChildBox>
              <ChildBox2><button onClick={this.showIntro}>Contact</button></ChildBox2>
            </AboutBox>
      </PoseGroup>
          </div>
  }
}

export default Intro;