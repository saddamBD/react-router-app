// components/BookCard.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-slate-300">
      <img src={book.image} alt={book.bookName} className="h-40 w-full object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold">{book.bookName}</h2>
      <p className='text-slate-950'>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Rating: <StarRating rating={book.rating} /></p>
      <Link to={`/book/${book.bookId}`}>
        <button className="mt-2 p-2 bg-blue-500 text-white rounded-lg mx-auto text-center">Book Details</button>
      </Link>
    </div>
  );
};
BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bookId: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookCard;
