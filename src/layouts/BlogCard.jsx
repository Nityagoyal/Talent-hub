import React from "react";

const BlogCard = ({ img, headlines, description }) => {
  return (
    <div className="w-full lg:w-1/4 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-white">
      <img
        className="h-48 w-full object-cover rounded-lg mb-3"
        src={img}
        alt="Blog"
      />
      <h2 className="text-lg font-semibold text-center text-backgroundColor">
        {headlines}
      </h2>
      <p className="text-sm text-gray-600 text-center">
  Stay informed with the latest insights on dental health, treatments, and innovations to keep your smile healthy and bright.
</p>
    </div>
  );
};

export default BlogCard;
