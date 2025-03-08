import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-800">TTS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Portfolio</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Testimonials</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</Link>
              <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</Link>
              <Link to="/portfolio" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Portfolio</Link>
              <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</Link>
              <Link to="/testimonials" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Testimonials</Link>
              <Link to="/contact" onClick={closeMenu} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</Link>
              <Link to="/contact" onClick={closeMenu}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 w-full">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;