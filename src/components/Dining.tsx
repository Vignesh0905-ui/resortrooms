import { useState, useRef } from 'react';
import { Search, Flame } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menu';
import type { CartItem, MenuItem } from '../types';

interface DiningProps {
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQty: (id: string, qty: number) => void;
}

export default function Dining({ cartItems, onAddToCart, onUpdateQty }: DiningProps) {
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [search, setSearch] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = menuItems.filter(item => {
    const matchCat = item.category === activeCategory;
    const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const getCartQty = (id: string) => cartItems.find(c => c.id === id)?.quantity ?? 0;

  return (
    <section id="dining" style={{ background: '#FAFAF7', padding: '100px 0' }} ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-label">In-Room Dining & Room Service</span>
          <h2 className="section-title">Savour Every Moment</h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Order from our extensive menu and have it delivered to your room — fresh, hot, and beautifully presented.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '440px', margin: '0 auto 40px', position: 'relative' }}>
          <Search size={15} color="#B8922A" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            id="menu-search"
            className="form-input"
            placeholder="Search menu items..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: '38px' }}
          />
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          marginBottom: '40px',
          scrollbarWidth: 'none',
        }}>
          {menuCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setSearch(''); }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                padding: '9px 20px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                background: activeCategory === cat ? '#1C1C1C' : '#F5F3EE',
                color: activeCategory === cat ? '#FAFAF7' : '#6B6B6B',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#9A9A9A', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>
            No items found. Try a different search or category.
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {filtered.map(item => {
              const qty = getCartQty(item.id);
              return (
                <div
                  key={item.id}
                  style={{
                    background: '#fff',
                    border: '1px solid #EDE8E0',
                    transition: 'box-shadow 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {/* Food Image */}
                  <div style={{ aspectRatio: '3/2', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    {item.isPopular && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: '#B8922A',
                        color: '#fff',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.625rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                      }}>
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Veg/Non-veg + Spicy */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      {item.isVeg ? <div className="veg-badge" /> : <div className="nonveg-badge" />}
                      {item.isSpicy && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Flame size={11} color="#E53935" />
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', color: '#E53935', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Spicy</span>
                        </div>
                      )}
                    </div>

                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      color: '#1C1C1C',
                      marginBottom: '4px',
                      lineHeight: 1.3,
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.7813rem',
                      color: '#9A9A9A',
                      lineHeight: 1.6,
                      marginBottom: '14px',
                      flex: 1,
                    }}>
                      {item.description}
                    </p>

                    {/* Price + Cart */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1C1C1C' }}>
                        ₹{item.price}
                      </span>

                      {qty === 0 ? (
                        <button
                          className="btn btn-gold"
                          style={{ padding: '8px 18px', fontSize: '0.7rem' }}
                          onClick={() => onAddToCart(item)}
                        >
                          Add to Order
                        </button>
                      ) : (
                        <div className="qty-control">
                          <button className="qty-btn" onClick={() => onUpdateQty(item.id, qty - 1)}>−</button>
                          <span className="qty-num">{qty}</span>
                          <button className="qty-btn" onClick={() => onUpdateQty(item.id, qty + 1)}>+</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Disclaimer */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          color: '#9A9A9A',
          textAlign: 'center',
          marginTop: '40px',
          maxWidth: '480px',
          margin: '40px auto 0',
          lineHeight: 1.6,
        }}>
          Prices are illustrative. Availability and actual pricing may vary. 
          Service charge of 10% applies. View cart to place your order.
        </p>
      </div>
    </section>
  );
}
