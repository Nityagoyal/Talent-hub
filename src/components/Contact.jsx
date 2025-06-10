import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email, "Message:", message);
    // Reset form
    setEmail("");
    setMessage("");
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-light text-gray-800 mb-8">
          Need some help? Send us an Email
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="nitya.goyal@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          
          <button
            type="submit"
            className="bg-yellow-500 text-black px-8 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;