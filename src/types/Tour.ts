type Difficulty = 'easy' | 'medium' | 'difficult';

export interface ITour {
  _id: number;
  name: string;
  price: number;
  rating: number;
  slug?: string;
  duration: number;
  maxGroupSize: number;
  difficulty: Difficulty;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  priceDiscount?: number;
  summary: string;
  description?: string;
  imageCover: string;
  images?: string[];
  createdAt: Date;
  startDates: Date[];
  secretTour?: boolean;
}
