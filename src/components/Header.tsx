import React from 'react';
import { Utensils } from 'lucide-react';
import type { Restaurant } from '../types';

interface HeaderProps {
  restaurant: Restaurant;
}

const Header: React.FC<HeaderProps> = ({ restaurant }) => {
  return (
    <header className="relative h-[60vh] w-full">
      <div className="absolute inset-0">
        <img
          src={restaurant.coverImage}
          alt="Restaurant cover"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-white/90 p-6 rounded-lg shadow-xl flex items-center space-x-4">
          {restaurant.logo ? (
            <img src={restaurant.logo} alt="Logo" className="h-16 w-16 object-contain" />
          ) : (
            <Utensils className="h-16 w-16 text-amber-600" />
          )}
          <h1 className="text-4xl font-bold text-gray-900">{restaurant.name}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;