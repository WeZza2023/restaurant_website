import React from 'react';
import { Utensils } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Utensils className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">La Belle Cuisine</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;