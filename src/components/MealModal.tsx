import React from 'react';
import { X, View } from 'lucide-react';
import type { Category, Meal } from '../types';

interface MealModalProps {
  category: Category;
  meals: Meal[];
  onClose: () => void;
}

const MealModal: React.FC<MealModalProps> = ({ category, meals, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl m-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.categoryName}</h2>
          
          <div className="grid gap-6">
            {meals.map((meal) => (
              <div key={meal.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{meal.name}</h3>
                    <p className="text-gray-600">{meal.description}</p>
                    <p className="text-amber-600 font-semibold mt-1">${meal.price.toFixed(2)}</p>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  <View className="h-5 w-5" />
                  <span>AR View</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealModal;