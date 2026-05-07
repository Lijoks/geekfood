import React from 'react'

function StarRating({ rating }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        stroke="currentColor"
        fill={i < rating ? 'currentColor' : 'none'}
        strokeWidth="0"
        viewBox="0 0 576 512"
        className={`star-icon ${i < rating ? 'filled' : 'empty'}`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
      </svg>
    )
  }
  return <div className="star-rating">{stars}</div>
}

function CuisineIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 416 512"
      className="cuisine-icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 384 512"
      className="location-icon"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
    </svg>
  )
}

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="card-body">
        <div className="card-header">
          <h2 className="restaurant-name">{restaurant.name}</h2>
          <StarRating rating={restaurant.rating} />
        </div>
        <p className="restaurant-address">
          <LocationIcon />
          {restaurant.address}
        </p>
        <p className="restaurant-postcode">{restaurant.postcode}</p>
      </div>
      <div className="card-footer">
        <div className="cuisine-type">
          <CuisineIcon />
          {restaurant.cuisine}
        </div>
        <a
          href={restaurant.menuUrl}
          className="menu-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Menu
        </a>
      </div>
    </div>
  )
}

export default RestaurantCard