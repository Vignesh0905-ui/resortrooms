import type { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Breakfast
  { id: 'b1', name: 'South Indian Breakfast Platter', description: 'Idli, vada, pongal with sambar and 3 chutneys, served with filter coffee', price: 380, image: '/images/food-breakfast.png', category: 'Breakfast', isVeg: true, isPopular: true },
  { id: 'b2', name: 'Continental Breakfast', description: 'Toasted bread, butter, jam, boiled eggs, grilled tomatoes, juice and coffee', price: 420, image: '/images/food-breakfast.png', category: 'Breakfast', isVeg: false },
  { id: 'b3', name: 'Appam & Stew', description: 'Soft Kerala appam with aromatic coconut milk vegetable stew', price: 280, image: '/images/food-breakfast.png', category: 'Breakfast', isVeg: true, isPopular: true },
  { id: 'b4', name: 'Puttu & Kadala Curry', description: 'Steamed rice flour puttu with black chickpea curry', price: 260, image: '/images/food-breakfast.png', category: 'Breakfast', isVeg: true },
  { id: 'b5', name: 'Poha & Upma Combo', description: 'Flattened rice poha with semolina upma, served with pickle and chutney', price: 220, image: '/images/food-breakfast.png', category: 'Breakfast', isVeg: true },

  // South Indian
  { id: 'si1', name: 'Kerala Thali', description: 'Traditional banana leaf meal with rice, sambar, rasam, avial, pickle, papad, payasam', price: 550, image: '/images/food-south-indian.png', category: 'South Indian', isVeg: true, isPopular: true },
  { id: 'si2', name: 'Malabar Prawn Curry', description: 'Tiger prawns in a rich coconut milk curry with Malabar spices', price: 680, image: '/images/food-seafood.png', category: 'South Indian', isVeg: false, isSpicy: true, isPopular: true },
  { id: 'si3', name: 'Fish Molee', description: 'Delicate Kerala fish curry in coconut milk with green chillies', price: 620, image: '/images/food-seafood.png', category: 'South Indian', isVeg: false },
  { id: 'si4', name: 'Ghee Rice with Chicken Curry', description: 'Fragrant ghee rice served with traditional Kerala chicken curry', price: 480, image: '/images/food-south-indian.png', category: 'South Indian', isVeg: false },
  { id: 'si5', name: 'Avial', description: 'Mixed vegetables in coconut-yogurt gravy, a Kerala classic', price: 280, image: '/images/food-south-indian.png', category: 'South Indian', isVeg: true },
  { id: 'si6', name: 'Dosa Varieties (3 pcs)', description: 'Masala / Ghee Roast / Paper Roast with sambar and chutneys', price: 240, image: '/images/food-south-indian.png', category: 'South Indian', isVeg: true },

  // North Indian
  { id: 'ni1', name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato-butter gravy, served with naan', price: 380, image: '/images/food-north-indian.png', category: 'North Indian', isVeg: true, isPopular: true },
  { id: 'ni2', name: 'Dal Makhani', description: 'Slow-cooked black lentils in creamy tomato gravy', price: 320, image: '/images/food-north-indian.png', category: 'North Indian', isVeg: true },
  { id: 'ni3', name: 'Chicken Tikka Masala', description: 'Grilled chicken tikka in a smoky, spiced tomato gravy', price: 480, image: '/images/food-north-indian.png', category: 'North Indian', isVeg: false, isSpicy: true },
  { id: 'ni4', name: 'Mutton Rogan Josh', description: 'Slow-braised mutton in Kashmiri aromatic spices', price: 580, image: '/images/food-north-indian.png', category: 'North Indian', isVeg: false, isSpicy: true },
  { id: 'ni5', name: 'Butter Naan (2 pcs)', description: 'Freshly baked tandoor naan brushed with butter', price: 120, image: '/images/food-north-indian.png', category: 'North Indian', isVeg: true },
  { id: 'ni6', name: 'Veg Biryani', description: 'Fragrant basmati rice layered with spiced vegetables and saffron', price: 380, image: '/images/food-north-indian.png', category: 'North Indian', isVeg: true },

  // Continental
  { id: 'co1', name: 'Grilled Chicken Steak', description: 'Herb-marinated chicken breast with mashed potatoes, seasonal vegetables and mushroom sauce', price: 620, image: '/images/food-north-indian.png', category: 'Continental', isVeg: false },
  { id: 'co2', name: 'Pasta Arrabiata', description: 'Penne pasta in spicy tomato sauce with fresh basil and parmesan', price: 380, image: '/images/food-north-indian.png', category: 'Continental', isVeg: true },
  { id: 'co3', name: 'Caesar Salad', description: 'Crisp romaine lettuce, croutons, parmesan, Caesar dressing', price: 280, image: '/images/food-breakfast.png', category: 'Continental', isVeg: true },
  { id: 'co4', name: 'Club Sandwich', description: 'Triple decker with chicken, egg, lettuce, tomato, served with fries', price: 420, image: '/images/food-breakfast.png', category: 'Continental', isVeg: false },

  // Seafood
  { id: 'sf1', name: 'Kerala Crab Masala', description: 'Fresh crab cooked in a fiery Kerala spice masala', price: 850, image: '/images/food-seafood.png', category: 'Seafood', isVeg: false, isSpicy: true, isPopular: true },
  { id: 'sf2', name: 'Grilled Karimeen (Pearl Spot)', description: 'Local fresh water fish marinated in Kerala spices and grilled to perfection', price: 780, image: '/images/food-seafood.png', category: 'Seafood', isVeg: false, isPopular: true },
  { id: 'sf3', name: 'Prawn Ghee Roast', description: 'Mangalorean style tiger prawns in ghee and aromatic spices', price: 720, image: '/images/food-seafood.png', category: 'Seafood', isVeg: false, isSpicy: true },
  { id: 'sf4', name: 'Fish Fry (2 pcs)', description: 'Fresh catch of the day marinated in Kerala masala and pan fried', price: 480, image: '/images/food-seafood.png', category: 'Seafood', isVeg: false },

  // Starters
  { id: 'st1', name: 'Chicken 65', description: 'Crispy deep-fried chicken with yogurt, curry leaves and chillies', price: 380, image: '/images/food-north-indian.png', category: 'Starters', isVeg: false, isSpicy: true, isPopular: true },
  { id: 'st2', name: 'Paneer Tikka', description: 'Cottage cheese marinated in tandoor spices, grilled in clay oven', price: 320, image: '/images/food-north-indian.png', category: 'Starters', isVeg: true },
  { id: 'st3', name: 'Mushroom Pepper Fry', description: 'Button mushrooms stir-fried in pepper and garlic', price: 280, image: '/images/food-north-indian.png', category: 'Starters', isVeg: true },
  { id: 'st4', name: 'Fish Cutlet (3 pcs)', description: 'Kerala style fish cutlets with tamarind chutney', price: 320, image: '/images/food-seafood.png', category: 'Starters', isVeg: false },

  // Desserts
  { id: 'd1', name: 'Payasam', description: 'Traditional Kerala rice payasam with cashews and raisins', price: 180, image: '/images/food-dessert.png', category: 'Desserts', isVeg: true, isPopular: true },
  { id: 'd2', name: 'Gulab Jamun (3 pcs)', description: 'Soft milk solid dumplings in rose-flavored sugar syrup', price: 160, image: '/images/food-dessert.png', category: 'Desserts', isVeg: true },
  { id: 'd3', name: 'Mango Kulfi', description: 'Traditional frozen dessert with fresh Alphonso mango', price: 200, image: '/images/food-dessert.png', category: 'Desserts', isVeg: true },
  { id: 'd4', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center, served with vanilla ice cream', price: 320, image: '/images/food-dessert.png', category: 'Desserts', isVeg: true, isPopular: true },

  // Beverages
  { id: 'bv1', name: 'Fresh Tender Coconut', description: 'Chilled fresh coconut water, straight from the tree', price: 120, image: '/images/food-beverage.png', category: 'Beverages', isVeg: true, isPopular: true },
  { id: 'bv2', name: 'Mango Lassi', description: 'Chilled yogurt drink blended with fresh Alphonso mangoes', price: 180, image: '/images/food-beverage.png', category: 'Beverages', isVeg: true },
  { id: 'bv3', name: 'Fresh Lime Soda', description: 'Sweet or salted, served chilled with fresh lime', price: 100, image: '/images/food-beverage.png', category: 'Beverages', isVeg: true },
  { id: 'bv4', name: 'Mixed Fruit Juice', description: 'Seasonal fresh fruits blended to order', price: 160, image: '/images/food-beverage.png', category: 'Beverages', isVeg: true },
  { id: 'bv5', name: 'Watermelon Juice', description: 'Chilled fresh watermelon juice with a hint of mint', price: 140, image: '/images/food-beverage.png', category: 'Beverages', isVeg: true },

  // Coffee & Tea
  { id: 'ct1', name: 'Kerala Filter Coffee', description: 'Traditional Kerala filter coffee, strong and aromatic with milk froth', price: 80, image: '/images/food-beverage.png', category: 'Coffee & Tea', isVeg: true, isPopular: true },
  { id: 'ct2', name: 'Masala Chai', description: 'Spiced Indian tea with ginger, cardamom and milk', price: 70, image: '/images/food-beverage.png', category: 'Coffee & Tea', isVeg: true },
  { id: 'ct3', name: 'Cold Coffee', description: 'Chilled coffee blended with ice cream and milk', price: 180, image: '/images/food-beverage.png', category: 'Coffee & Tea', isVeg: true },
  { id: 'ct4', name: 'Green Tea', description: 'Premium Japanese sencha green tea, served with honey', price: 120, image: '/images/food-beverage.png', category: 'Coffee & Tea', isVeg: true },

  // Chinese & Asian
  { id: 'ca1', name: 'Veg Fried Rice', description: 'Wok-tossed rice with seasonal vegetables and soy sauce', price: 280, image: '/images/food-north-indian.png', category: 'Chinese & Asian', isVeg: true },
  { id: 'ca2', name: 'Chicken Manchurian', description: 'Crispy chicken in tangy Manchurian sauce with spring onions', price: 380, image: '/images/food-north-indian.png', category: 'Chinese & Asian', isVeg: false, isSpicy: true },
  { id: 'ca3', name: 'Hakka Noodles', description: 'Stir-fried egg noodles with vegetables in Chinese sauces', price: 280, image: '/images/food-north-indian.png', category: 'Chinese & Asian', isVeg: true },
  { id: 'ca4', name: 'Schezwan Chicken', description: 'Spicy chicken with schezwan sauce, bell peppers and cashews', price: 420, image: '/images/food-north-indian.png', category: 'Chinese & Asian', isVeg: false, isSpicy: true },

  // Kids Menu
  { id: 'k1', name: 'Mini Pancakes with Syrup', description: 'Fluffy mini pancakes served with maple syrup and fresh berries', price: 220, image: '/images/food-breakfast.png', category: "Kids' Menu", isVeg: true },
  { id: 'k2', name: 'Cheese Pizza (6 inch)', description: 'Mini cheesy pizza with tomato sauce and mozzarella', price: 280, image: '/images/food-north-indian.png', category: "Kids' Menu", isVeg: true, isPopular: true },
  { id: 'k3', name: 'Chicken Nuggets & Fries', description: 'Crispy chicken nuggets with golden fries and ketchup', price: 320, image: '/images/food-north-indian.png', category: "Kids' Menu", isVeg: false },
  { id: 'k4', name: 'Choco Milkshake', description: 'Rich chocolate milkshake with whipped cream', price: 180, image: '/images/food-beverage.png', category: "Kids' Menu", isVeg: true },
];

export const menuCategories = [
  'Breakfast',
  'South Indian',
  'North Indian',
  'Continental',
  'Seafood',
  'Chinese & Asian',
  'Starters',
  'Desserts',
  'Beverages',
  'Coffee & Tea',
  "Kids' Menu",
];
