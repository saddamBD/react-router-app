// components/Banner.jsx
const Banner = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-blue-200">
      <div>
        <h1 className="text-4xl font-bold">Unlock a World of Stories</h1>
        <p className="mt-2">Find Your Next Favorite Book at BookShop</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Buy Book
        </button>
      </div>
      <img src="banners/banner.jpg" alt="Banner" className="h-64" />
    </div>
  );
};

export default Banner;
