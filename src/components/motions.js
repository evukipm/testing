import posed from 'react-pose';

export const Bounce = posed.div({
  hoverable: true,
  draggable: true,
  init: { scale: 1 },
  hover: { scale: 1.5 },
  drag: { scale: 1.2 },
});

export const IntroBox = posed.div({
  visible: {
    x: '0%',
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 100,
    transition: { duration: 200 },
  },
  hidden: {
    x: '-100%',
    opacity: 0,
    afterChildren: false,
    transition: { duration: 200 },
  },
})

export const AboutBox = posed.div({
  visible: {
    x: '0%',
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 100,
    transition: { duration: 200 },
  },
  hidden: {
    x: '100%',
    opacity: 0,
    afterChildren: false,
    transition: { duration: 200 },
  },
})

export const ChildBox = posed.div({
  visible: {
    y: '0',
  },
  hidden: {
    y: '-15',
  },
})

export const ChildBox2 = posed.div({
  visible: {
    y: '0',
  },
  hidden: {
    y: '15',
  },
})