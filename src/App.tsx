import { useState, useEffect, useCallback } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResortIntro from './components/ResortIntro';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import DiningExperiences from './components/DiningExperiences';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

import type { CartItem, MenuItem, Room } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [toast, setToast] = useState<string | null>(null);

  // Intersection Observer for active nav section
  useEffect(() => {
    const sections = ['home', 'about', 'rooms', 'dining', 'experiences', 'gallery', 'booking'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    }).filter(Boolean);
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  // Show toast
  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  }, []);

  // Cart handlers
  const handleAddToCart = useCallback((item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { ...item, quantity: 1 }];
    });
    showToast(`${item.name} added to order`);
  }, [showToast]);

  const handleUpdateQty = useCallback((id: string, qty: number) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(c => c.id !== id));
    } else {
      setCartItems(prev => prev.map(c => c.id === id ? { ...c, quantity: qty } : c));
    }
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setCartItems(prev => prev.filter(c => c.id !== id));
  }, []);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleBookRoom = useCallback((room: Room) => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
    showToast(`${room.name} selected. Please fill your booking details.`);
  }, [showToast]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        activeSection={activeSection}
      />

      <main>
        <Hero />
        <ResortIntro />
        <Rooms onBook={handleBookRoom} />
        <Dining
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onUpdateQty={handleUpdateQty}
        />
        <DiningExperiences />
        <Experiences />
        <Gallery />
        <Reviews />
        <Booking />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            background: '#1C1C1C',
            color: '#FAFAF7',
            padding: '14px 20px',
            borderLeft: '3px solid #B8922A',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8125rem',
            minWidth: '260px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            animation: 'slideIn 0.3s ease',
          }}
        >
          {toast}
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        #root { min-height: 100vh; }
      `}</style>
    </>
  );
}

export default App;
