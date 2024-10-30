import type { Meal } from '../types';

export const meals: Meal[] = [
  {
    id: 1,
    categoryId: 11,
    name: "Sample Dish 1",
    description: "A delicious sample dish description",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000"
  },
  {
    id: 2,
    categoryId: 11,
    name: "Sample Dish 2",
    description: "Another delicious sample dish description",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000"
  }
];