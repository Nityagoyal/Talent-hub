import React from "react";

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Live Dance",
      price: "150₹",
      image: "/images/pexels-sebastian-ervi-866902-1763067.jpg",
      isAvailable: true
    },
    {
      id: 2, 
      name: "Live Music",
      price: "70₹",
      image: "/images/pexels-pixabay-210887.jpg",
      isAvailable: true
    },
    {
      id: 3,
      name: "Live Singing", 
      price: "50₹",
      image: "/images/pexels-faruktokluoglu-10063045.jpg",
      isSoldOut: true
    }
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-gray-800">Featured</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Artists You'll Love
              </p>
              <p className="text-sm text-gray-500">
                Browse profiles of performers looking for their next gig.
              </p>
            </div>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors duration-300">
              View More Talent
            </button>
          </div>

          {/* Right Section - Featured Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {item.isSoldOut && (
                    <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-xs rounded">
                      Sold Out
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-1">Artist {item.id}</p>
                  <h3 className="font-medium text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-lg font-light text-gray-700">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;