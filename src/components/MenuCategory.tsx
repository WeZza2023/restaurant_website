import React from 'react';
import type { Category } from '../types';

interface MenuCategoryProps {
  category: Category;
  onClick: () => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="relative h-64">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
          <p className="text-sm text-gray-200">{category.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;