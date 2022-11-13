import React from 'react'
import './Home.css';
import {FaGithub, FaLinkedin} from 'react-icons/fa'


function Home() {
  return (
    
    <div className='landing' id='home'>
      
      <div className="left">
        <div className="soc-med-wrapper">
        <div className="soc-med">
          <a className='git' href="https://github.com/lib1001" target='_blank'>
        <FaGithub size={42} />
        </a>
        </div>
        <div className="soc-med">
          <a href="https://www.linkedin.com/in/lauren-i-burke-/" target='_blank'>
<FaLinkedin size={42} color={'#0073B1'} />
</a>
        </div>
        </div>
    <div className="wrapper">

        <h2>Hi! I'm</h2>
        <h1>Lauren Burke</h1>
        <h3>Freelance Developer with a knack for React<span></span></h3>
       <div className="hero-options">

        <a href="Resume.pdf" download='Lauren I. Burke Resume.pdf'>
                        <button className='btn highlighted-btn'>Download My Resume</button>
                    </a>
                    <a href="#contact">
                    <button className='btn primary-btn'>
          {" "}
          Hire Me
          {" "}
        </button>
        </a>
       </div>
    </div>
    
      </div>
      <div className="right">
      <div className="img-container">
            <img className='hero-img' src="assets/icelandv.png" alt="" />
            <div className="glow"></div>
        </div>
    
      </div>
    </div>
  )
}

export default Home
