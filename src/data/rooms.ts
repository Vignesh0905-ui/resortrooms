import type { Room } from '../types';

export const rooms: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    shortDescription: 'Classic comfort with modern elegance in a tranquil resort setting.',
    description: 'Our Deluxe Rooms offer a seamless blend of contemporary comforts and warm Kerala hospitality. Appointed with premium furnishings, a plush king-size bed, and large windows framing the resort gardens, every moment here is pure indulgence. The en-suite marble bathroom features a rain shower and luxury bath amenities.',
    price: 6500,
    image: '/images/room-deluxe.png',
    gallery: ['/images/room-deluxe.png', '/images/resort-intro.png', '/images/pool-area.png'],
    capacity: 2,
    bedType: 'King Bed',
    size: 320,
    amenities: ['Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Mini Bar', 'Room Service', 'Marble Bathroom', 'Rain Shower', 'Safe Deposit Box', 'Daily Housekeeping', 'Complimentary Breakfast'],
    category: 'deluxe',
    tag: 'Most Popular'
  },
  {
    id: 'garden-view-room',
    name: 'Premium Garden View Room',
    shortDescription: 'Wake up to the lush serenity of tropical gardens every morning.',
    description: 'Immerse yourself in nature with our Premium Garden View Rooms. Featuring floor-to-ceiling windows overlooking the resort\'s manicured tropical gardens, these rooms offer a truly peaceful retreat. The space is elegantly furnished with handcrafted teak accents, a plush king bed, and a private balcony perfect for morning coffee.',
    price: 8500,
    image: '/images/room-garden.png',
    gallery: ['/images/room-garden.png', '/images/resort-intro.png', '/images/spa-wellness.png'],
    capacity: 2,
    bedType: 'King Bed',
    size: 380,
    amenities: ['Private Balcony', 'Garden View', 'Air Conditioning', 'Free Wi-Fi', 'Flat-Screen TV', 'Mini Bar', 'Room Service', 'Bathtub & Shower', 'Safe Deposit Box', 'Evening Turndown', 'Complimentary Breakfast'],
    category: 'garden',
  },
  {
    id: 'pool-view-suite',
    name: 'Luxury Pool View Suite',
    shortDescription: 'Expansive suite with mesmerizing views of the resort\'s infinity pool.',
    description: 'The Luxury Pool View Suite is an oasis of refined elegance. From your private furnished terrace, gaze upon the shimmering infinity pool set against a backdrop of swaying palms. The suite features a spacious sitting area, a king bedroom with premium linens, and a lavish bathroom with both a standalone soaking tub and a rain shower.',
    price: 12500,
    image: '/images/room-pool-suite.png',
    gallery: ['/images/room-pool-suite.png', '/images/pool-area.png', '/images/room-deluxe.png'],
    capacity: 3,
    bedType: 'King Bed',
    size: 520,
    amenities: ['Pool View Terrace', 'Sitting Area', 'Air Conditioning', 'Free Wi-Fi', '55" Smart TV', 'Full Mini Bar', '24hr Room Service', 'Soaking Tub', 'Rain Shower', 'Pillow Menu', 'Evening Turndown', 'Butler Service', 'Complimentary Breakfast'],
    category: 'pool',
    tag: 'Bestseller'
  },
  {
    id: 'private-villa',
    name: 'Private Luxury Villa',
    shortDescription: 'Your own private paradise — a secluded villa with a personal pool.',
    description: 'The pinnacle of our resort experience, the Private Luxury Villa offers unparalleled seclusion and grandeur. Nestled within its own lush garden, the villa features an open-plan living and dining area, a master bedroom with a four-poster bed, and your very own private plunge pool. Dedicated butler service ensures every wish is fulfilled.',
    price: 22000,
    image: '/images/room-villa.png',
    gallery: ['/images/room-villa.png', '/images/pool-area.png', '/images/spa-wellness.png', '/images/dining-restaurant.png'],
    capacity: 4,
    bedType: 'King Bed + 2 Singles',
    size: 1200,
    amenities: ['Private Plunge Pool', 'Dedicated Butler', 'Open-Plan Living', 'Outdoor Dining', 'Full Kitchen', 'Air Conditioning', 'Free Wi-Fi', '65" Smart TV', 'Full Bar', '24hr Room Service', 'Soaking Tub', 'Rain Shower', 'Steam Room', 'Pillow Menu', 'Daily Breakfast & Evening Snacks', 'Airport Transfer'],
    category: 'villa',
    tag: 'Ultimate Luxury'
  }
];
