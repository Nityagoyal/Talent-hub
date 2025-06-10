import React, { useState } from "react";

const Footer = () => {
  const [currency, setCurrency] = useState("INR");

  return (
    <footer className="bg-white py-12 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Website Name */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 mb-4">TalentHub</h3>
          </div>

          {/* Social Media Links */}
          <div>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Track An Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Currency Selector */}
          <div className="md:col-span-1 md:text-right">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Designed by TalentHub Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;