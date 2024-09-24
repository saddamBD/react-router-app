// components/StarRating.jsx
import React from 'react';
import PropTypes from 'prop-types';

// StarRating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars count
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex">
      {/* Full Stars */}
      {Array(fullStars).fill('★').map((star, index) => (
        <span key={`full-star-${index}`} className="text-yellow-500">{star}</span>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <span className="text-yellow-500">★<span className="text-gray-300">★</span></span>
      )}

      {/* Empty Stars */}
      {Array(emptyStars).fill('☆').map((star, index) => (
        <span key={`empty-star-${index}`} className="text-gray-300">{star}</span>
      ))}
    </div>
  );
};

// Prop validation for the rating prop
StarRating.propTypes = {
  rating: PropTypes.number.isRequired, // Ensures rating is passed as a number
};

export default StarRating;
