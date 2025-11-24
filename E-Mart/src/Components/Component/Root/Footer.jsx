const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-gri font-bold text-[#58f0ee] mb-4">E-Mart</h2>
          <p className="text-gray-400">
            Quality products, fast delivery, and trusted service.  
            Your satisfaction is our priority!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer"><a href="/">Home</a> </li>
            <li className="hover:text-white cursor-pointer"> <a href="/about">About Us</a></li>
            <li className="hover:text-white cursor-pointer"><a href="/more"></a>Products</li>
            <li className="hover:text-white cursor-pointer"><a href="/blogs">Blogs</a></li>
            <li className="hover:text-white cursor-pointer"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Support Center</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>📞 +880 1234-567890</p>
          <p>✉️ support@yourshop.com</p>
          <p>📍 Dhaka, Bangladesh</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">👍</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center border-t border-gray-700 mt-10 pt-5 text-gray-400">
        © {new Date().getFullYear()} E-Mart — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
