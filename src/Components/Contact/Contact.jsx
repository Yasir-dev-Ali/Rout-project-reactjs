import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <div className="contact">
        <h1>Contact Us </h1>
        <div className="form">
            <div className="input">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Phone" />
            </div>
            <div className="input">
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <button className='btn1'>Send</button>
        </div>
        </div>

                

    </>
  )
}

export default Contact
