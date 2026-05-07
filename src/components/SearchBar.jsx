import React from 'react';
import './SearchBar.css';

function SearchBar({ searchQuery, onSearchChange, minRating, onRatingChange }) {
  return (
    <div className="search-bar-container">
      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="rating-filter-group">
        <label htmlFor="minRating" className="rating-label">
          Minimum Rating:
        </label>
        <input
          type="number"
          id="minRating"
          min="0"
          max="5"
          step="1"
          className="rating-input"
          value={minRating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default SearchBar;