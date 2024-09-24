import { useParams, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
const BookDetails = () => {
    const handleAddToWishlist = () => {
    toast.success(`${book.bookId} ${book.bookName} has been successfully added to the Wishlist`);
  };

  const handleAddToCart = () => {
    toast.success(`${book.bookId} ${book.bookName} has been successfully added to the Cart`);
  };
  const { bookId } = useParams(); // Get bookId from the URL
  const {books} = useLoaderData(); // Load the books data passed by the loader

  
 console.log("Demo Fetched book details page:", books);
 console.log("Demo Fetched book ID:", bookId);
 const book = books.find(book => book.bookId ===  Number(bookId)); // Find the specific book by bookId

  if (!book) {
    return <p className="text-center text-red-500">Book not found</p>; // Show error if book is not found
  }



  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-6">
        <img src={book.image} alt={book.bookName} className="w-full md:w-64 h-80 object-cover" />
        <div className="mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">{book.bookName}</h2>
          <p className="mt-2">Author: {book.author}</p>
          <p>Category: {book.category}</p>
          <p>Rating: {book.rating}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Year of Publishing: {book.yearOfPublishing}</p>
          <p>Total Pages: {book.totalPages}</p>
          <p className="mt-2">Tags: {book.tags?.join(', ')}</p>
          <div className="mt-4">
            <button onClick={handleAddToWishlist} className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600 transition-colors">
              Wish to Read
            </button>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;




// // BookDetails.jsx
// import { useParams, useLoaderData } from 'react-router-dom';
// import { toast } from 'react-toastify';
// const { bookId } = useParams();
// const {books} = useLoaderData();



//   // Find the book by bookId
//   const book = books.find(b => b.bookId === Number(bookId));

//   if (!book) {
//     return <div>Book not found</div>;
//   }

// const BookDetails = () => {
//   const handleAddToWishlist = () => {
//     toast.success(`${book.bookId} ${book.bookName} has been successfully added to the Wishlist`);
//   };

//   const handleAddToCart = () => {
//     toast.success(`${book.bookId} ${book.bookName} has been successfully added to the Cart`);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <img src={book.image} alt={book.bookName} />
//       <h2>{book.bookName}</h2>
//       <p>Author: {book.author}</p>
//       <p>Category: {book.category}</p>
//       <p>Review: {book.review}</p>
//       <p>Tags: {book.tags.join(', ')}</p>
//       <p>Total Pages: {book.totalPages}</p>
//       <p>Publisher: {book.publisher}</p>
//       <p>Year of Publishing: {book.yearOfPublishing}</p>
//       <p>Rating: {book.rating}</p>
//       <button onClick={handleAddToWishlist} className="btn">Wish to Read</button>
//       <button onClick={handleAddToCart} className="btn">Add to Cart</button>
//     </div>
//   );
// };

// export default BookDetails;
