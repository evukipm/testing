import React from 'react';

import { Icon } from '../components/icon'
import githubIcon from '../images/github.svg'
import linkedinIcon from '../images/linkedin.svg'
import twitterIcon from '../images/twitter.svg'
import devIcon from '../images/dev-to.svg'

import {IconsDrag, IntroBox, IntroChild } from '../components/motions'
import '../stylesheets/intro.css'

const Intro = props => (
  <div>
    <IntroBox className="container intro">
      <IntroChild>
        <h1>Hi, I'm Eva!</h1>
      </IntroChild>
      <IntroChild>
        <h2>Fullstack webdev / React-lover</h2>
      </IntroChild>
      <IntroChild>
        <p>U can find me in:</p>
      </IntroChild>
      <IntroChild>
        <div className="icon-list">
          <IconsDrag>
            <Icon url={"https://github.com/evukipm"} iconUrl={githubIcon} alt={"github icon"} />
          </IconsDrag>
          <IconsDrag>
            <Icon url={"https://www.linkedin.com/in/eva-p%C3%A9rez/"} iconUrl={linkedinIcon} alt={"linkedin icon"} />
          </IconsDrag>
          <IconsDrag>
            <Icon url={"https://twitter.com/evukipm"} iconUrl={twitterIcon} alt={"twitter icon"} />
          </IconsDrag>
          <IconsDrag>
            <Icon url={"https://dev.to/evukipm"} iconUrl={devIcon} alt={"dev.to icon"} />
          </IconsDrag>
        </div>
      </IntroChild>
    </IntroBox>
  </div>
);

export default Intro;
