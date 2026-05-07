import React from 'react'

const cuisines = [
  { name: 'Italian', emoji: '🇮🇹', description: 'Pasta, pizza, risotto and rich tomato sauces.' },
  { name: 'Chinese', emoji: '🇨🇳', description: 'Stir-fries, dim sum, noodles and bold soy flavours.' },
  { name: 'Mexican', emoji: '🇲🇽', description: 'Tacos, burritos, guacamole and spicy salsas.' },
  { name: 'Indian', emoji: '🇮🇳', description: 'Curries, biryani, naan and aromatic spices.' },
  { name: 'Japanese', emoji: '🇯🇵', description: 'Sushi, ramen, tempura and delicate presentation.' },
  { name: 'Thai', emoji: '🇹🇭', description: 'Pad Thai, green curry, tom yum and fresh herbs.' },
  { name: 'French', emoji: '🇫🇷', description: 'Croissants, coq au vin, cheese and fine pastries.' },
  { name: 'Greek', emoji: '🇬🇷', description: 'Moussaka, souvlaki, tzatziki and fresh salads.' },
  { name: 'Lebanese', emoji: '🇱🇧', description: 'Hummus, falafel, tabbouleh and grilled meats.' },
  { name: 'Korean', emoji: '🇰🇷', description: 'Kimchi, bulgogi, bibimbap and savoury pancakes.' },
  { name: 'Spanish', emoji: '🇪🇸', description: 'Paella, tapas, gazpacho and cured meats.' },
  { name: 'Turkish', emoji: '🇹🇷', description: 'Kebabs, baklava, mezes and strong coffee.' }
]

function Foods() {
  return (
    <section className="foods-page">
      <h2 className="foods-heading">Explore World Cuisines</h2>
      <div className="foods-grid">
        {cuisines.map((cuisine, index) => (
          <div key={index} className="cuisine-card">
            <span className="cuisine-emoji">{cuisine.emoji}</span>
            <h3 className="cuisine-name">{cuisine.name}</h3>
            <p className="cuisine-description">{cuisine.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Foods