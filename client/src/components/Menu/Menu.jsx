import React from "react";
import './Menu.css';

function Menu({navOpen, setNavOpen}) {
  return (
    <div className={"menu " + (navOpen && 'active')}>
      <ul className="side-menu">
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
  );
}

export default Menu;
