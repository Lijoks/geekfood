import React from 'react'
import contactImage from '../assets/geekfood.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="about-image-container">
        <img 
          src={contactImage} 
          alt="Delicious food" 
          className="about-food-image"
        />
      </div>
      <div className="about-content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! 
          Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat 
          totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
        </p>
        <button className="about-btn">Get in Touch</button>
      </div>
    </section>
  )
}

export default About