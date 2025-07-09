import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium SRR Cow Ghee',
    size: '250ml',
    price: 500,
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    reviews: 127,
    badge: 'Bestseller',
    description: 'Pure A2 cow ghee made using traditional Bilona method. Rich in vitamins A, D, E, and K.',
    benefits: [
      '100% Pure A2 Cow Milk',
      'Traditional Bilona Method',
      'No Chemicals or Preservatives',
      'Rich in Essential Vitamins',
      'Boosts Immunity'
    ],
    inStock: true
  },
  {
    id: '2',
    name: 'Premium SRR Cow Ghee',
    size: '500ml',
    price: 1000,
    originalPrice: 1100,
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 98,
    badge: 'Value Pack',
    description: 'Perfect family size pack of our premium A2 cow ghee. Made with love and traditional methods.',
    benefits: [
      'Family Size Pack',
      'Better Value for Money',
      'Traditional Bilona Method',
      'Grass-Fed Cows',
      'Heart Healthy'
    ],
    inStock: true
  },
  {
    id: '3',
    name: 'Premium SRR Cow Ghee',
    size: '1000ml',
    price: 1500,
    originalPrice: 1700,
    image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    reviews: 56,
    badge: 'Family Pack',
    description: 'Large family pack perfect for regular cooking. Premium quality A2 cow ghee at the best value.',
    benefits: [
      'Large Family Pack',
      'Best Value for Money',
      'Premium Quality',
      'Long Shelf Life',
      'Authentic Taste'
    ],
    inStock: true
  }
];