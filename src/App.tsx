import React, { useEffect, useState } from 'react';
import type { Category, Meal, Restaurant } from './types';
import { getCategories } from './services/api';
import Header from './components/Header';
import CategoryGrid from './components/CategoryGrid';
import MealModal from './components/MealModal';
import Navbar from './components/Navbar';

const MOCK_RESTAURANT: Restaurant = {
  name: "La Belle Cuisine",
  logo: "",
  coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070"
};

const MOCK_MEALS: Meal[] = [
  {
    id: 1,
    categoryId: 11,
    name: "Signature Dish",
    description: "Our chef's special creation with seasonal ingredients",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000"
  },
  {
    id: 2,
    categoryId: 11,
    name: "Gourmet Delight",
    description: "A perfect blend of flavors and textures",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000"
  }
];

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategories();
        if (data.length === 0) {
          throw new Error('No categories found');
        }
        setCategories(data);
      } catch (err) {
        setError('Failed to load menu categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-600 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header restaurant={MOCK_RESTAURANT} />
      
      <main className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Menu</h2>
        <CategoryGrid 
          categories={categories} 
          onCategoryClick={setSelectedCategory} 
        />
      </main>

      {selectedCategory && (
        <MealModal
          category={selectedCategory}
          meals={MOCK_MEALS}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}

export default App;