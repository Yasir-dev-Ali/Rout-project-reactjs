import React from 'react'
import img from '../About/images/image1.svg';
import './About.css';
const About = () => {
  return (
    <>
    <div className='about-main'>
    <div>
      <img src={img} alt="about" />
    </div>
    
    <div className='text-part'>
    <h2>About Us </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit rem saepe quo! Exercitationem optio quidem laboriosam dolore molestias sequi eos voluptates autem quos. Ipsam nam asperiores dicta, consequuntur accusantium error aliquid voluptas vitae officiis iusto ipsa in ea laborum qui? Consequatur porro eveniet temporibus libero nihil, nemo velit nulla maxime voluptates amet eligendi aut non quia blanditiis laboriosam excepturi. Sit dolores tenetur eos, ex pariatur fugit nesciunt voluptatum repellendus neque veniam alias voluptates facilis corporis libero nemo! Quae in sed voluptatum animi ex nobis quam voluptatibus facere? Assumenda error unde a dolorum nam tempore molestias nemo hic? Incidunt, aut.</p>
    <button className='btn-1'>Read More </button>
    </div>
    </div>
    </>
  )
}

export default About
