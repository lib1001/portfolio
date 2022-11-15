import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav({navOpen, setNavOpen}) {
  return (
    <div className={'navbar ' + (navOpen && 'active')}>
      <div className="logo">
      <a href="#home">BurkeInAction.</a>
      </div>
      <ul className="nav-menu">
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
      <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        <span className='lineOne'></span>
        <span className='lineTwo'></span>
        <span className='lineThree'></span>
      </div>
    </div>
  )
}

export default Nav