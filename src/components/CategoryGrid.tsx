import React from 'react';
import type { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => onCategoryClick(category)}
          className="group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <div className="relative h-64">
            <img
              src={category.categoryImageURL}
              alt={category.categoryName}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">{category.categoryName}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;