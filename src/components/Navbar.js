import React from 'react'
import { Link } from 'react-router-dom'

import '../stylesheets/navbar.css'

const Navbar = props => {
  return <div className="navbar">
    <Link to={'/'}>Home</Link>
    <Link to={'/about'}>About</Link>
  </div>
}

export default Navbar;