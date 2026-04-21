import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">GeekFood</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#quote">Quote</a></li>
        <li><a href="#restaurants">Restaurants</a></li>
        <li><a href="#foods">Foods</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
  )
}

export default Navbar