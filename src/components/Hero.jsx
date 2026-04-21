import React from 'react'
import heroImage from '../assets/geekfood_hero.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src={heroImage} 
          alt="Delicious food spread" 
          className="hero-food-image"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Let us find your<br />
          <span className="highlight">Forever Food.</span>
        </h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="hero-buttons">
          <button className="search-btn">Search Now</button>
          <button className="know-more-btn">Know more</button>
        </div>
      </div>
    </section>
  )
}

export default Hero