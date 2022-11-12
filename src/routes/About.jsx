import { Component } from 'react'
import img from '/src/assets/images/profile.png';
import './About.css'


const About = () => {
  return (
    <>
      <div className="about-container">
        <div>
        <img src={img} alt='User-image' className="img-responsive" />
        <p className="user-name">Ibrahim Sulemana </p>
        </div>
      <div>
        <h2 className='about-header'>About Me</h2>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipis. Cum sociis natoque penatibus et justo euism. Lorem ipsum d Lorem ipsum dolor sit amet, consectetur adip. Cum sociis natoque penat.</p>
      </div>
      </div>
    </>
  )

}

export default About
