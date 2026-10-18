import { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { rooms } from '../data/rooms';

export default function Booking() {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    rooms: '1',
    roomPreference: '',
    guestName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => { const n = { ...prev }; delete n[e.target.name]; return n; });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!form.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (form.checkIn && form.checkOut && form.checkIn >= form.checkOut) newErrors.checkOut = 'Check-out must be after check-in';
    if (!form.guestName.trim()) newErrors.guestName = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) newErrors.phone = 'Valid 10-digit phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello, I'd like to enquire about booking at Palmshore Resort.\n\nName: ${form.guestName || 'Guest'}\nCheck-in: ${form.checkIn || 'TBD'}\nCheck-out: ${form.checkOut || 'TBD'}\nGuests: ${form.adults} adults, ${form.children} children\nRoom Preference: ${form.roomPreference || 'Any'}`);
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <section id="booking" style={{ background: '#2D3B2D', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Reservations</span>
          <h2 className="section-title section-title-light">Book Your Stay</h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(250,250,247,0.65)', maxWidth: '480px', lineHeight: 1.75, margin: '0 auto' }}>
            Submit a booking request and our reservations team will confirm availability within 2 hours.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>
          {/* Booking Form */}
          <div style={{ background: '#FAFAF7', padding: '36px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#B8922A' }}>✓</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 400, color: '#1C1C1C', marginBottom: '12px' }}>
                  Request Received!
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '16px' }}>
                  Thank you, {form.guestName}. Our reservations team will contact you at {form.email} within 2 hours to confirm your booking.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9A9A9A', fontStyle: 'italic', background: '#F5F3EE', padding: '10px 14px', borderLeft: '3px solid #B8922A', textAlign: 'left', lineHeight: 1.6 }}>
                  ⓘ Demo Mode: This is a booking request form. No actual reservation is created. In production, this integrates with a property management system.
                </p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '20px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Make Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.375rem', fontWeight: 500, color: '#1C1C1C', marginBottom: '24px' }}>
                  Booking Request
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label className="form-label" htmlFor="checkIn">Check-in *</label>
                    <input id="checkIn" name="checkIn" type="date" className="form-input" value={form.checkIn} onChange={handleChange} style={errors.checkIn ? { borderColor: '#E53935' } : {}} />
                    {errors.checkIn && <p style={{ fontSize: '0.75rem', color: '#E53935', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>{errors.checkIn}</p>}
                  </div>
                  <div>
                    <label className="form-label" htmlFor="checkOut">Check-out *</label>
                    <input id="checkOut" name="checkOut" type="date" className="form-input" value={form.checkOut} onChange={handleChange} style={errors.checkOut ? { borderColor: '#E53935' } : {}} />
                    {errors.checkOut && <p style={{ fontSize: '0.75rem', color: '#E53935', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>{errors.checkOut}</p>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <label className="form-label" htmlFor="adults">Adults</label>
                    <select id="adults" name="adults" className="form-input" value={form.adults} onChange={handleChange}>
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="children">Children</label>
                    <select id="children" name="children" className="form-input" value={form.children} onChange={handleChange}>
                      {[0,1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="rooms">Rooms</label>
                    <select id="rooms" name="rooms" className="form-input" value={form.rooms} onChange={handleChange}>
                      {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="roomPreference">Room Preference</label>
                  <select id="roomPreference" name="roomPreference" className="form-input" value={form.roomPreference} onChange={handleChange}>
                    <option value="">No preference</option>
                    {rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                  </select>
                </div>

                <div style={{ borderTop: '1px solid #E8DFD0', margin: '20px 0' }} />

                <div style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="guestName">Full Name *</label>
                  <input id="guestName" name="guestName" type="text" className="form-input" value={form.guestName} onChange={handleChange} placeholder="Your full name" style={errors.guestName ? { borderColor: '#E53935' } : {}} />
                  {errors.guestName && <p style={{ fontSize: '0.75rem', color: '#E53935', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>{errors.guestName}</p>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" className="form-input" value={form.email} onChange={handleChange} placeholder="your@email.com" style={errors.email ? { borderColor: '#E53935' } : {}} />
                  {errors.email && <p style={{ fontSize: '0.75rem', color: '#E53935', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" style={errors.phone ? { borderColor: '#E53935' } : {}} />
                  {errors.phone && <p style={{ fontSize: '0.75rem', color: '#E53935', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>{errors.phone}</p>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label className="form-label" htmlFor="specialRequests">Special Requests</label>
                  <textarea id="specialRequests" name="specialRequests" className="form-input" value={form.specialRequests} onChange={handleChange} placeholder="Anniversary setup, dietary needs, early check-in..." rows={3} style={{ resize: 'vertical' }} />
                </div>

                <button type="submit" id="submit-booking-btn" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Booking Request
                </button>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', color: '#9A9A9A', textAlign: 'center', marginTop: '14px', lineHeight: 1.6 }}>
                  This submits a booking request, not a confirmed reservation. Our team will contact you to complete your booking.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: '36px', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.375rem', fontWeight: 400, color: '#FAFAF7', marginBottom: '24px' }}>
                Contact Us
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MapPin size={18} color="#B8922A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '4px' }}>Location</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,250,247,0.8)', lineHeight: 1.6 }}>
                      Palmshore Road, Near Kovalam Beach,<br />Thiruvananthapuram, Kerala 695527
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Phone size={18} color="#B8922A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '4px' }}>Phone</div>
                    <a href="tel:+919876543210" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,250,247,0.8)', textDecoration: 'none' }}>
                      +91 98765 43210
                    </a>
                    <br />
                    <a href="tel:+914712345678" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,250,247,0.8)', textDecoration: 'none' }}>
                      +91 471 234 5678
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <Mail size={18} color="#B8922A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:reservations@palmshoreresort.com" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(250,250,247,0.8)', textDecoration: 'none' }}>
                      reservations@palmshoreresort.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <MessageSquare size={18} color="#B8922A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8922A', marginBottom: '8px' }}>WhatsApp</div>
                    <button
                      id="whatsapp-btn"
                      onClick={handleWhatsApp}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#25D366',
                        color: '#fff',
                        border: 'none',
                        padding: '10px 18px',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        transition: 'background 0.2s',
                        borderRadius: '2px',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#1EBC58')}
                      onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Enquire on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              height: '220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <iframe
                title="Palmshore Resort Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8!2d76.9789!3d8.3893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjMnMjEuNSJOIDc2wrA1OCc0NC4wIkU!5e0!3m2!1sen!2sin!4v1697000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, filter: 'invert(0.1) sepia(0.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
