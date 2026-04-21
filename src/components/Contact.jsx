import React from 'react'
import contactImage from '../assets/geekfood.jpg'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-image-container">
        <img 
          src={contactImage} 
          alt="Delicious food" 
          className="contact-food-image"
        />
      </div>
      <div className="contact-content">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! 
          Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat 
          totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
        </p>
        <button className="contact-btn">Get in Touch</button>
      </div>
    </section>
  )
}

export default Contact