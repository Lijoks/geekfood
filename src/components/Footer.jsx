import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>logoipsum</h3>
        </div>
        
        {/* Text logo */}
        <div className="footer-text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <p className="footer-small"> Incidunt consequuntur amet culpa cum itaque neque.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#history">History</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
        </div>
        
        {/* Social Icons */}
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer