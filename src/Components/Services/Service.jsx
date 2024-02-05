import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <>
        <div className="service">
            <h1>Services</h1>
            <div className="service-container">
            <div className="service-card">
                <i className="fas fa-laptop-code"></i>
                <h2>Web Development</h2>
                <p>Frontend and Backend Development</p>
            </div>
            <div className="service-card">
                <i className="fas fa-mobile-alt"></i>
                <h2>Mobile Development</h2>
                <p>Android and iOS Development</p>
            </div>
            <div className="service-card">
                <i className="fas fa-palette"></i>
                <h2>UI/UX Design</h2>
                <p>Designing User Interface and User Experience</p>
            </div>
            </div>
        </div>

    </>
  )
}

export default Service
