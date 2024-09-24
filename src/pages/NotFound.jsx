// pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Oops! Something went wrong.</p>
      <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Back to Home</Link>
    </div>
  );
};

export default NotFound;
