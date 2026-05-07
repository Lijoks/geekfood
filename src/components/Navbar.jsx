import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand – Updated with Logo Icon */}
        <Link to="/" className="navbar-brand">
          <div className="brand-content">
            <img src="https://flowbite.com/docs/images/logo.svg" className="logo-icon" alt="Logo" />
            <span className="navbar-title">GeekFoods</span>
          </div>
        </Link>

        {/* Desktop menu – centered */}
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
            <li><Link to="/quote" className={`nav-link ${isActive('/quote')}`}>Quote</Link></li>
            <li><Link to="/restaurant" className={`nav-link ${isActive('/restaurant')}`}>Restaurants</Link></li>
            <li><Link to="/foods" className={`nav-link ${isActive('/foods')}`}>Foods</Link></li>
            <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
          </ul>
        </div>

        {/* Actions – far right */}
        <div className="navbar-actions">
          <button className="btn-get-started">Get started</button>
          <button
            className="btn-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <ul className="navbar-links-mobile">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/quote" onClick={() => setMenuOpen(false)}>Quote</Link></li>
            <li><Link to="/restaurant" onClick={() => setMenuOpen(false)}>Restaurants</Link></li>
            <li><Link to="/foods" onClick={() => setMenuOpen(false)}>Foods</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar