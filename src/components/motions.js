import posed from 'react-pose';

export const IntroBox = posed.div({
  enter: {
    x: '0%',
    beforeChildren: true,
    staggerChildren: 100,
  },
  exit: {
    x: '-100%',
    staggerChildren: 20, 
    staggerDirection: -1,
  },
})

export const IconsDrag = posed.div({
  hoverable: true,
  draggable: true,
  init: { scale: 1 },
  hover: { scale: 1.5 },
  drag: { scale: 1.2 },
});

export const IntroChild = posed.div({
  enter: {
    y: '0',
  },
  exit: {
    y: '-15',
  },
})

export const AboutBox = posed.div({
  enter: {
    x: '0%',
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 100,
  },
  exit: {
    x: '100%',
    opacity: 0,
    staggerChildren: 20, 
    staggerDirection: -1,
  },
})

export const AboutChild = posed.div({
  enter: {
    scale: '1',
  },
  exit: {
    scale: '0',
  },
})

export const RouteContainer = posed.div({
  enter: { 
    opacity: '1',
    delay: 200, 
    beforeChildren: true 
  },
  exit: { 
    opacity: '0',
    afterChildren: true,
  }
});