;
const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
      <p className="text-lg mb-6">
        Welcome to our blog! Here you will find articles, reviews, and insights
        on a wide variety of books. We regularly update our blog with content
        that will help you stay informed about the latest book releases, author
        interviews, and reading tips.
      </p>
      <div className="space-y-6">
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2">5 Must-Read Books of 2024</h2>
          <p>
            Discover the top 5 books that are trending in 2024. From thrilling
            mysteries to heartwarming romances, these books will keep you
            engaged from cover to cover.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2">Interview with Best-Selling Author Jane Doe</h2>
          <p>
            We recently sat down with Jane Doe, the author of the best-selling
            series Adventures in Wonderland Read our exclusive interview to
            learn more about her inspirations and writing process.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-2">How to Build a Reading Habit</h2>
          <p>
            Struggling to find time to read? Check out our top tips on how to
            build a reading habit that fits into your busy schedule. You will be
            finishing books faster than ever before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
