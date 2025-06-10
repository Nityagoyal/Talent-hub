import React from "react";

const heroItems = [
  { src: "/images/pexels-wlid-1450116.jpg", name: "Dance" },
  { src: "/images/pexels-jibarofoto-2091383.jpg", name: "Singing" },
  { src: "/images/pexels-monica-713149.jpg", name: "Stand up" },
  { src: "/images/pexels-andersonguerra-1625371.jpg", name: "Instrumental" },
];

export default function Hero() {
  return (
    <section className="pt-28 pb-12 px-4 md:px-16 bg-white" id="home">
      {/* Hero Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Headline and CTA */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Find the perfect artist <br /> for your venue
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Connecting performers with restaurants, schools, parties, and events.
            Whether you're an artist or a venue – you're in the right place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-300 transform hover:shadow-lg">
              Find Talent For Your Event
            </button>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 transform hover:shadow-lg border-2 border-yellow-500 hover:border-black">
              Join In As An Artist
            </button>
          </div>
        </div>
        {/* Right: Main Hero Image */}
        <div className="flex justify-center">
        <img
          src="/images/pexels-harrisonhaines-2921568.jpg"
          alt="Main Artist"
          className="rounded shadow-lg w-full max-w-xs md:max-w-sm border border-blue-100"
        />
        </div>
      </div>

      {/* Categories Section */}
      <div className="mt-20" id="categories">
        <h3 className="text-3xl font-light text-center mb-10">Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {heroItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg transition p-2"
            >
              <img
                src={item.src}
                alt={item.name}
                className="rounded-lg w-full h-48 object-cover mb-3"
              />
              <span className="text-lg font-medium text-gray-800">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
