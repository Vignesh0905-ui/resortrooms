import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface NavProps {
  cartCount: number;
  onCartOpen: () => void;
  activeSection: string;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Stay', href: '#rooms' },
  { label: 'Dining', href: '#dining' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ cartCount, onCartOpen, activeSection }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          background: scrolled ? 'rgba(28,28,28,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.375rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                lineHeight: 1
              }}>
                Palmshore
              </span>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.5625rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#B8922A',
              }}>
                Luxury Resort & Spa
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: activeSection === link.href.slice(1) ? '#B8922A' : 'rgba(255,255,255,0.8)',
                  transition: 'color 0.2s',
                  padding: '4px 0',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B8922A')}
                onMouseLeave={e => (e.currentTarget.style.color = activeSection === link.href.slice(1) ? '#B8922A' : 'rgba(255,255,255,0.8)')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Cart */}
            <button
              id="cart-btn"
              onClick={onCartOpen}
              style={{
                position: 'relative',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.8)',
                transition: 'color 0.2s',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: '#B8922A',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '17px',
                  height: '17px',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </button>

            {/* Book CTA */}
            <button
              className="btn btn-gold desktop-nav"
              onClick={() => handleNavClick('#booking')}
            >
              Book Your Stay
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-btn"
              className="mobile-nav"
              onClick={() => setMobileOpen(v => !v)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#fff',
                padding: '6px',
                display: 'flex',
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              right: 0,
              background: 'rgba(20,20,20,0.98)',
              zIndex: 499,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="container" style={{ paddingTop: '20px', paddingBottom: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    textAlign: 'left',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                className="btn btn-gold"
                onClick={() => handleNavClick('#booking')}
                style={{ marginTop: '16px', width: '100%' }}
              >
                Book Your Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } }
        @media (min-width: 901px) { .mobile-nav { display: none !important; } }
      `}</style>
    </>
  );
}
