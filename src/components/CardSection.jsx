import React from 'react'
import Card from './Card'

const CardSection = () => {
  const foodItems = [
    {
      id: 1,
      name: 'Sushi',
      desc: 'Finest fish and veggies',
      price: '$22.99',
      emoji: '🍣'
    },
    {
      id: 2,
      name: 'Schnitzel',
      desc: 'A german specialty!',
      price: '$16.50',
      emoji: '🥩'
    },
    {
      id: 3,
      name: 'Barbecue Burger',
      desc: 'American, raw, meaty',
      price: '$12.99',
      emoji: '🍔'
    },
    {
      id: 4,
      name: 'Green Bowl',
      desc: 'Healthy...and green...',
      price: '$18.99',
      emoji: '🥗'
    }
  ]

  return (
    <section className="cards-container">
      <h2 style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' }}>
        Our Most Popular Dishes
      </h2>
      <div className="cards-grid">
        {foodItems.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default CardSection