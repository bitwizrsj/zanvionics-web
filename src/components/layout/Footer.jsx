import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Make sure this path matches your project structure

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src={logo} alt="zanvionics logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white">zanvionics</span>
            </Link>
            <p className="text-sm text-gray-400">
              Transforming businesses through innovative technology solutions.
            </p>
            <Link to="/dashboard" className="flex items-center text-gray-400 hover:text-white space-x-2 mt-4">
              Admin Login 
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00B4A8] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'AI Solutions',
                'Cloud Services',
                'Digital Marketing'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-[#00B4A8] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:info@zanvionics.com" className="hover:text-[#00B4A8] transition-colors">
                  info@zanvionics.com
                </a>
              </li>
              <li>
                {/* <a href="tel:+15551234567" className="hover:text-[#00B4A8] transition-colors">
                  +1 (555) 123-4567
                </a> */}
              </li>
              <li>85 Great Portland Street, First Floor, London, United Kingdom, W1W 7LT</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Zanvionics Technologies Ltd | Registered in England & Wales | Company No. 16495400 | © 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
