export interface Room {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  gallery: string[];
  capacity: number;
  bedType: string;
  size: number;
  amenities: string[];
  category: 'deluxe' | 'garden' | 'pool' | 'villa';
  tag?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderDetails {
  guestName: string;
  roomNumber: string;
  phone: string;
  specialInstructions: string;
  items: CartItem[];
  total: number;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  roomPreference: string;
  guestName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
  roomType: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'rooms' | 'dining' | 'pool' | 'landscape' | 'experiences';
}
