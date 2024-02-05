import React from 'react'
import './Hero.css'
import Nav from '../Nav/Nav'

import img1 from '../Hero/images/profile.svg'

const Hero = () => {
  return (
  <>
  <Nav />
    <div className="hero">
 <div className="hero-img">
  <img src={img1} alt="hero" />
 </div>
  <div className="hero-text">
    <h1>Hi, I'm <span>Yasir Ali</span></h1>
    <p>Frontend Developer</p>
  </div>
    </div>

    <div className="hero-social">

      <a href="https://www.facebook.com/yasir.ali.315865" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.linkedin.com/in/yasir-ali-7b0b6b1b7/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.linkedin.com/in/yasir-ali-7b0b6b1b7/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.linkedin.com/in/yasir-ali-7b0b6b1b7/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      
    </div>


  </>
  )
}

export default Hero
