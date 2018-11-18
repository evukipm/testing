import React from 'react';

import {AboutBox, AboutChild} from '../components/motions'

import '../stylesheets/about.css'

const About = props => (
  <AboutBox className="container about">
    <AboutChild>
      <h1>About me:</h1>
    </AboutChild>
    <AboutChild>
      <p className="about-p">
        In a village of La Mancha, the name of which I have... 
        Nah, being serious...
        <br/><br/>
        I'm passionate about reading and writing, but I 
        <span>♥</span> 
        coding too, cause,and don't laught about it, 
        it's kinda creative and it's in creativity where 
        I find happiness. 
        <br/><br/>
        Like a crazy scientist: I like to experiment with the technologies that I use to expand my knowledge about them, 
        so if you are interested in my progress you can see the result of that here, in my personal lab.
      </p>
    </AboutChild>
  </AboutBox>
);

export default About;