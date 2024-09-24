// components/StarRating.jsx

import PropTypes from 'prop-types';

// StarRating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); 
  const emptyStars = 5 - fullStars; 

  return (
    <div className="flex">
      
      {Array(fullStars).fill('★').map((star, index) => (
        <span key={`full-star-${index}`} className="text-yellow-500">{star}</span>
      ))}

      
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
