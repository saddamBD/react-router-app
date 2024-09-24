// components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BookShop</h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
        <div className="space-x-2">
          <button className="bg-blue-500 px-4 py-2 rounded">Buy Book</button>
          <button className="bg-gray-500 px-4 py-2 rounded">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
