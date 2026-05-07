import React, { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import RestaurantCard from './RestaurantCard';
import restaurantsData from '../data/restaurants';
import './RestaurantPage.css';

function RestaurantPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [minRating, setMinRating] = useState(0);

  const filteredRestaurants = useMemo(() => {
    return restaurantsData.filter((restaurant) => {
      const matchesSearch = restaurant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRating = restaurant.rating >= minRating;
      return matchesSearch && matchesRating;
    });
  }, [searchQuery, minRating]);

  return (
    <div className="restaurant-page">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        minRating={minRating}
        onRatingChange={setMinRating}
      />

      {filteredRestaurants.length === 0 ? (
        <div className="no-results">
          <p>No restaurants found matching your criteria.</p>
        </div>
      ) : (
        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantPage;