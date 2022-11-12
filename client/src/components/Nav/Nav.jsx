import React from 'react';
import './Nav.css';


function Nav() {
  return (
    <div className='navbar'>
      <div className="logo">
      <a href="#home">BurkeInAction.</a>
      </div>
      <ul className='nav-menu'>
      <li>
      <a href="#home">Home</a>
      </li>
        <li>
      <a href="#about">About Me</a>
      </li>
      <li>
      <a href="#resume">Resume</a>
      </li>
      <li>
      <a href="#projects">Projects</a>
      </li>
      <li>
      <a href="#contact">Contact Me</a>
      </li>
      </ul>
    </div>
  )
}

export default Nav
