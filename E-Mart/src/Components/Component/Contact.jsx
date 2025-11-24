const Contact = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 text-lg">
          Have questions? Feel free to reach out anytime — we're here to help!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-black shadow-lg rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#58f0ee] text-black py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-[#58f0ee] text-black rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

          <p>
            We’re always available to assist with product inquiries, order help, or anything else you need.
          </p>

          <ul className="space-y-4 mt-6">
            <li>
              <strong>📍 Address:</strong> Dhaka, Bangladesh
            </li>
            <li>
              <strong>📞 Phone:</strong> +880 1234-567890
            </li>
            <li>
              <strong>✉️ Email:</strong> support@yourshop.com
            </li>
            <li>
              <strong>⏰ Working Hours:</strong> Sat–Thu: 10 AM – 10 PM
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact;
