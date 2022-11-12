import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='landing' id='home'>
      <div className="left">
    <div className="wrapper">
        <h2>Hi! I'm</h2>
        <h1>Lauren Burke</h1>
        <h3>Freelance <span></span></h3>
    </div>
      </div>
      <div className="right">
      <div className="img-container">
            <img src="assets/icelandv.png" alt="" />
        </div>
    
      </div>
    </div>
  )
}

export default Home
