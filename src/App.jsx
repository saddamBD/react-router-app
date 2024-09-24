import { Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to="/" className="hover:text-gray-300">
            BookShop
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <NavLink to="/" className="text-white hover:text-gray-300" activeClassName="text-yellow-400">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300" activeClassName="text-yellow-400">
            About
          </NavLink>
          <NavLink to="/blog" className="text-white hover:text-gray-300" activeClassName="text-yellow-400">
            Blog
          </NavLink>
          <NavLink to="/faq" className="text-white hover:text-gray-300" activeClassName="text-yellow-400">
            FAQ
          </NavLink>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Buy Book
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center py-4 mt-8">
    &copy; 2024 BookShoh,saddam.doict@gmail.com, All rights reserved.
  </footer>
);

export default App;
