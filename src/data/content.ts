import type { Review, Experience, GalleryItem } from '../types';

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Priya Krishnamurthy',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    review: 'An absolutely magical stay. The villa was breathtaking — our private pool surrounded by tropical gardens felt like a world of our own. The staff remembered our names and preferences from day one. The breakfast thali served on banana leaf was unforgettable. We\'ll be back every anniversary.',
    date: 'March 2025',
    avatar: 'PK',
    roomType: 'Private Luxury Villa'
  },
  {
    id: 'r2',
    name: 'Arjun & Meera Nair',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    review: 'We celebrated our honeymoon here and it was everything we dreamed of. The pool view suite was stunning, the room service was exceptional, and the candlelit dinner by the pool was the most romantic thing we\'ve ever experienced. The Malabar prawn curry is a must-try!',
    date: 'February 2025',
    avatar: 'AN',
    roomType: 'Luxury Pool View Suite'
  },
  {
    id: 'r3',
    name: 'Rajesh Menon',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    review: 'Came here for a corporate retreat and was blown away by the hospitality. The meeting facilities were top-notch, the food was extraordinary, and the evening by the pool with a fresh coconut water is a memory I\'ll cherish. The Ayurvedic spa sessions were therapeutic and rejuvenating.',
    date: 'January 2025',
    avatar: 'RM',
    roomType: 'Deluxe Room'
  },
  {
    id: 'r4',
    name: 'Sneha & Vikram Pillai',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review: 'Brought the whole family for a vacation and every member was thoroughly pampered. The kids loved the pool and the kids\' menu was delightful. The garden view room opened into such a serene landscape. Kerala filter coffee every morning was the perfect start to each day.',
    date: 'December 2024',
    avatar: 'SP',
    roomType: 'Premium Garden View Room'
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Infinity Pool',
    description: 'Float in our temperature-controlled infinity pool that seems to merge seamlessly with the tropical horizon. Lounge on premium sunbeds with poolside service available throughout the day.',
    image: '/images/pool-area.png',
    icon: 'waves',
    category: 'leisure'
  },
  {
    id: 'exp2',
    title: 'Ayurvedic Spa & Wellness',
    description: 'Reconnect with your inner self at our authentic Kerala Ayurvedic spa. Our certified therapists offer traditional Abhyanga massage, Shirodhara, and personalized wellness packages.',
    image: '/images/spa-wellness.png',
    icon: 'leaf',
    category: 'wellness'
  },
  {
    id: 'exp3',
    title: 'Fine Dining Experience',
    description: 'Savour the finest Kerala and international cuisine at our signature restaurant. Our executive chef crafts menus using locally sourced, seasonal ingredients for a truly authentic experience.',
    image: '/images/dining-restaurant.png',
    icon: 'utensils',
    category: 'dining'
  },
  {
    id: 'exp4',
    title: 'Nature & Garden Walks',
    description: 'Explore the lush tropical gardens and spice plantation that surround our resort. Our naturalist guides lead morning walks through fragrant cardamom, pepper and coconut groves.',
    image: '/images/resort-intro.png',
    icon: 'tree-pine',
    category: 'outdoor'
  },
  {
    id: 'exp5',
    title: 'Romantic Experiences',
    description: 'Create memories that last a lifetime with our curated romantic experiences — candlelit dinners under the stars, in-villa rose petal arrangements, and sunset boat rides.',
    image: '/images/room-villa.png',
    icon: 'heart',
    category: 'romance'
  },
  {
    id: 'exp6',
    title: 'Cultural Activities',
    description: 'Immerse yourself in the rich heritage of Kerala through Kathakali performances, cooking masterclasses with our chefs, and traditional art demonstrations.',
    image: '/images/resort-hero.png',
    icon: 'music',
    category: 'culture'
  },
];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', image: '/images/resort-hero.png', title: 'Resort Aerial View', category: 'landscape' },
  { id: 'g2', image: '/images/room-deluxe.png', title: 'Deluxe Room', category: 'rooms' },
  { id: 'g3', image: '/images/dining-restaurant.png', title: 'Fine Dining', category: 'dining' },
  { id: 'g4', image: '/images/pool-area.png', title: 'Infinity Pool', category: 'pool' },
  { id: 'g5', image: '/images/room-garden.png', title: 'Garden View Room', category: 'rooms' },
  { id: 'g6', image: '/images/spa-wellness.png', title: 'Ayurvedic Spa', category: 'experiences' },
  { id: 'g7', image: '/images/room-pool-suite.png', title: 'Pool View Suite', category: 'rooms' },
  { id: 'g8', image: '/images/food-breakfast.png', title: 'Breakfast Spread', category: 'dining' },
  { id: 'g9', image: '/images/resort-intro.png', title: 'Resort Gardens', category: 'landscape' },
  { id: 'g10', image: '/images/room-villa.png', title: 'Private Villa', category: 'rooms' },
  { id: 'g11', image: '/images/food-seafood.png', title: 'Seafood Specialties', category: 'dining' },
  { id: 'g12', image: '/images/food-south-indian.png', title: 'Kerala Thali', category: 'dining' },
];
