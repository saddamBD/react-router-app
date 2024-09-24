// components/BookCard.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <img src={book.image} alt={book.bookName} className="h-40 w-full object-cover mb-4" />
      <h2 className="text-xl font-semibold">{book.bookName}</h2>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.bookId}`}>
        <button className="mt-2 p-2 bg-blue-500 text-white rounded-lg">Book Details</button>
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
