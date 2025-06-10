import React, { useState } from "react";
import Contact from "./Contact";

// Simple Link component to replace react-scroll
const Link = ({ to, children, className, onClick, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <a 
      href={`#${to}`} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-50 text-white bg-black bg-opacity-80 shadow-md">
      <div className="flex justify-between items-center p-5 md:px-20 px-6">
        <Link to="home">
          <h1 className="text-2xl font-bold cursor-pointer">TalentHub.</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-sm items-center font-medium">
          <Link
            to="home"
            className="cursor-pointer hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="categories"
            className="cursor-pointer hover:text-yellow-400"
          >
            Categories
          </Link>
          <Link
            to="faqs"
            className="cursor-pointer hover:text-yellow-400"
          >
            FAQs
          </Link>
          <Link
            to="contact"
            className="cursor-pointer hover:text-yellow-400"
          >
            Contact
          </Link>
          <Link
            to="search"
            className="cursor-pointer hover:text-yellow-400"
          >
            Search
          </Link>
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
            onClick={openForm}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {menu ? (
            <div className="text-2xl cursor-pointer" onClick={toggleMenu}>✕</div>
          ) : (
            <div className="text-2xl cursor-pointer" onClick={toggleMenu}>☰</div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-black bg-opacity-95 top-16 left-0 flex flex-col text-center text-xl font-semibold space-y-6 py-8 transition-transform ${
          menu ? "translate-x-0" : "-translate-x-full"
        } duration-300`}
      >
        <Link to="home" onClick={closeMenu}>
          Home
        </Link>
        <Link to="categories" onClick={closeMenu}>
          Categories
        </Link>
        <Link to="faqs" onClick={closeMenu}>
          FAQs
        </Link>
        <Link to="contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="search" onClick={closeMenu}>
          Search
        </Link>
        <button
          className="bg-yellow-500 text-black px-4 py-2 mx-auto rounded hover:bg-yellow-400 transition"
          onClick={openForm}
        >
          Contact Us
        </button>
      </div>

      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;