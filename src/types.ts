export interface ApiCategory {
  id: number;
  categoryName: string;
  categoryImageURL: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Meal {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  image: string;
}