import React from 'react'

const Card = ({ name, desc, price, emoji }) => {
  return (
    <div className="card">
      <div className="card-emoji">{emoji}</div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="price">{price}</span>
    </div>
  )
}

export default Card