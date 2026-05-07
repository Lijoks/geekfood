import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-wrapper">
          
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <span className="contact-label">Contact Us</span>
            <h1 className="contact-main-heading">GET IN TOUCH WITH US</h1>
            <p className="contact-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam 
              quis nostrud exercitation ullamco.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><MapPin size={24} strokeWidth={1.5} /></div>
                <div className="info-text">
                  <h4>Our Location</h4>
                  <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone size={24} strokeWidth={1.5} /></div>
                <div className="info-text">
                  <h4>Phone Number</h4>
                  <p>(+62)81 414 257 9980</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={24} strokeWidth={1.5} /></div>
                <div className="info-text">
                  <h4>Email Address</h4>
                  <p>info@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form Card */}
          <div className="contact-form-card">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6"></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact