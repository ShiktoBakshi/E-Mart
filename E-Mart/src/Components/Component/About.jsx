const About = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-gray-600 text-lg">
          We are dedicated to providing top-quality computer components and accessories at unbeatable prices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="About our shop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right text */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Who We Are</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple — to deliver reliable tech hardware with excellent customer service.
            From RAM, SSD, monitors, graphics cards, and accessories, we ensure each product matches
            the highest quality standards.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Why Choose Us?</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>High-quality, genuine products</li>
            <li>Fast shipping and easy returns</li>
            <li>Affordable prices and frequent discounts</li>
            <li>Dedicated support for all customers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
