
const blogs = [
  {
    id: 1,
    title: "The Future of DDR4 & DDR5 RAM",
    image: "https://i.ibb.co.com/gFvqB5wJ/Whats-App-Image-2025-11-24-at-8-36-10-AM-2.jpg",
    category: "Hardware",
    description:
      "RAM technology is evolving fast. DDR5 offers better speed and efficiency. Here’s what you need to know.",
  },
  {
    id: 2,
    title: "Best Budget SSDs for 2025",
    image: "https://i.ibb.co.com/4w38B6Zz/Whats-App-Image-2025-11-24-at-8-36-10-AM-1.jpg",
    category: "Storage",
    description:
      "Finding a good SSD under budget is easier now. These are the top-rated affordable SSDs for 2025.",
  },
  {
    id: 3,
    title: "How to Choose a Perfect Gaming Processor",
    image: "https://i.ibb.co.com/35STMLgh/Whats-App-Image-2025-11-24-at-8-36-09-AM.jpg",
    category: "Processor",
    description:
      "Your CPU is the brain of your system. Learn how to choose the perfect gaming processor for smooth performance.",
  },
];

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-center text-4xl font-bold text-[#58f0ee] underline pb-8 py-30">
        Our Latest Blogs
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="shadow-lg hover:shadow-[#58f0ee] border rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5 space-y-3">
              <span className="px-3 py-1 bg-[#58f0ee] text-black text-sm rounded-lg">
                {blog.category}
              </span>

              <h2 className="text-xl font-semibold">{blog.title}</h2>

              <p className="text-gray-600 text-sm">{blog.description}</p>

              <button className="mt-3 w-full py-2 rounded-lg bg-[#58f0ee] hover:bg-[#073e3d] text-black hover:text-white font-semibold transition-all">
               <a href="https://www.startech.com.bd/desktops?srsltid=AfmBOoocoQLUFGyONG5JlB1iM2uwUC4N7IG0AcPJpW0cFyWV1kslt-IY"> Read More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
