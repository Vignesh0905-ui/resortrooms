import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import type { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const SERVICE_CHARGE_RATE = 0.1;

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [guestName, setGuestName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [instructions, setInstructions] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ guestName?: string; roomNumber?: string; phone?: string }>({});

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceCharge = Math.round(subtotal * SERVICE_CHARGE_RATE);
  const total = subtotal + serviceCharge;

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!guestName.trim()) newErrors.guestName = 'Guest name is required';
    if (!roomNumber.trim()) newErrors.roomNumber = 'Room number is required';
    if (!phone.trim() || !/^\d{10}$/.test(phone.trim())) newErrors.phone = 'Valid 10-digit phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitted(true);
    setTimeout(() => {
      onClearCart();
      setSubmitted(false);
      setGuestName('');
      setRoomNumber('');
      setPhone('');
      setInstructions('');
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              zIndex: 700,
            }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 38 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '100%',
              maxWidth: '480px',
              background: '#FAFAF7',
              zIndex: 800,
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-20px 0 60px rgba(0,0,0,0.15)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '24px 28px',
              borderBottom: '1px solid #E8DFD0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}>
              <div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 500, color: '#1C1C1C' }}>
                  Your Order
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9A9A9A', marginTop: '2px' }}>
                  {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
                </p>
              </div>
              <button
                onClick={onClose}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B6B6B', padding: '6px' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 400, color: '#1C1C1C', marginBottom: '12px' }}>
                    Order Received!
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.7 }}>
                    Thank you, {guestName}. Your order has been placed. Our team will deliver to Room {roomNumber} within 30-45 minutes.
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9A9A9A', marginTop: '16px', fontStyle: 'italic' }}>
                    ⓘ This is a demo submission. In production, orders would be sent directly to hotel staff.
                  </p>
                </div>
              ) : cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 20px' }}>
                  <ShoppingBag size={40} color="#D6C9B4" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.375rem', fontWeight: 400, color: '#1C1C1C', marginBottom: '8px' }}>
                    Your cart is empty
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#9A9A9A' }}>
                    Browse our menu and add items to your order.
                  </p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div style={{ marginBottom: '28px' }}>
                    {cartItems.map(item => (
                      <div key={item.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '14px 0',
                        borderBottom: '1px solid #F0EBE3',
                      }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '56px', height: '56px', objectFit: 'cover', flexShrink: 0 }}
                        />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 500, color: '#1C1C1C', marginBottom: '3px', lineHeight: 1.3 }}>
                            {item.name}
                          </div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#B8922A', fontWeight: 600 }}>
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </div>
                        </div>
                        <div className="qty-control">
                          <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>−</button>
                          <span className="qty-num">{item.quantity}</span>
                          <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9A9A9A', padding: '4px', flexShrink: 0, transition: 'color 0.2s' }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#E53935')}
                          onMouseLeave={e => (e.currentTarget.style.color = '#9A9A9A')}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div style={{ background: '#F5F3EE', padding: '18px', marginBottom: '24px' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9A9A', marginBottom: '14px' }}>
                      Order Summary
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B6B6B' }}>Subtotal</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#1C1C1C' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B6B6B' }}>Service Charge (10%)</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#1C1C1C' }}>₹{serviceCharge.toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E8DFD0', paddingTop: '12px' }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem', fontWeight: 600, color: '#1C1C1C' }}>Total</span>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem', fontWeight: 700, color: '#B8922A' }}>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Order Form */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9A9A', marginBottom: '16px' }}>
                      Delivery Details
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label className="form-label">Guest Name *</label>
                      <input
                        id="cart-guest-name"
                        className="form-input"
                        value={guestName}
                        onChange={e => setGuestName(e.target.value)}
                        placeholder="Your full name"
                        style={errors.guestName ? { borderColor: '#E53935' } : {}}
                      />
                      {errors.guestName && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#E53935', marginTop: '4px' }}>{errors.guestName}</p>}
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label className="form-label">Room Number *</label>
                      <input
                        id="cart-room-number"
                        className="form-input"
                        value={roomNumber}
                        onChange={e => setRoomNumber(e.target.value)}
                        placeholder="e.g. 204"
                        style={errors.roomNumber ? { borderColor: '#E53935' } : {}}
                      />
                      {errors.roomNumber && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#E53935', marginTop: '4px' }}>{errors.roomNumber}</p>}
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label className="form-label">Phone Number *</label>
                      <input
                        id="cart-phone"
                        className="form-input"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        style={errors.phone ? { borderColor: '#E53935' } : {}}
                      />
                      {errors.phone && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#E53935', marginTop: '4px' }}>{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="form-label">Special Instructions</label>
                      <textarea
                        id="cart-instructions"
                        className="form-input"
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)}
                        placeholder="Allergies, preferences, timing..."
                        rows={3}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9A9A9A', fontStyle: 'italic', marginBottom: '16px', lineHeight: 1.6, background: '#FFF8EE', padding: '10px 14px', borderLeft: '3px solid #B8922A' }}>
                    ⓘ Demo Mode: Submitting this form will not send a real order. In production, this integrates with the hotel's order management system.
                  </p>
                </>
              )}
            </div>

            {/* Footer Actions */}
            {!submitted && cartItems.length > 0 && (
              <div style={{
                padding: '20px 28px',
                borderTop: '1px solid #E8DFD0',
                background: '#fff',
                flexShrink: 0,
              }}>
                <button
                  id="place-order-btn"
                  className="btn btn-gold"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '10px' }}
                  onClick={handleSubmit}
                >
                  Place Order — ₹{total.toLocaleString('en-IN')}
                </button>
                <button
                  onClick={onClearCart}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    color: '#9A9A9A',
                    cursor: 'pointer',
                    padding: '6px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E53935')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9A9A9A')}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
