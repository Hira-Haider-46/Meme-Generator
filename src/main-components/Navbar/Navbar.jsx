import React from 'react';
import logo from './logo.png';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <h1>
            <span>
                <img src={logo} />
            </span>
            Meme Generator
        </h1>
        <p>React Course - Project 3</p>
    </nav>
  )
}

export default Navbar;