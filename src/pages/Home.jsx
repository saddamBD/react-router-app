
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BookCard from '../components/BookCard';
const Home = () => {
  const { books } = useLoaderData();

  // Safely check if books is an array
  if (!Array.isArray(books)) {
    return <div>Error: Book data is not available</div>;
  }

  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-bold text-center my-8">Books Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
