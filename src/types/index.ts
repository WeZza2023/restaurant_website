export interface Category {
  id: number;
  categoryName: string;
  categoryImageURL: string;
}

export interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
}

export interface Restaurant {
  name: string;
  logo: string;
  coverImage: string;
}