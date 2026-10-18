import { useState } from 'react';
import { Send } from 'lucide-react';

// Inline SVG social icons
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);


export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  const navSections = [
    {
      title: 'Explore',
      links: [
        { label: 'Our Story', href: '#about' },
        { label: 'Rooms & Suites', href: '#rooms' },
        { label: 'Dining', href: '#dining' },
        { label: 'Experiences', href: '#experiences' },
        { label: 'Gallery', href: '#gallery' },
      ]
    },
    {
      title: 'Guest Services',
      links: [
        { label: 'Book Your Stay', href: '#booking' },
        { label: 'Room Service', href: '#dining' },
        { label: 'Spa & Wellness', href: '#experiences' },
        { label: 'Special Occasions', href: '#booking' },
        { label: 'Airport Transfers', href: '#contact' },
      ]
    }
  ];

  return (
    <footer style={{ background: '#0F0F0F', color: 'rgba(250,250,247,0.75)' }}>
      {/* Main Footer */}
      <div className="container" style={{ padding: '72px 24px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                display: 'block',
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
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
              lineHeight: 1.75,
              color: 'rgba(250,250,247,0.55)',
              maxWidth: '280px',
              marginBottom: '24px',
            }}>
              A sanctuary of natural beauty, personalized luxury, and authentic South Indian hospitality on the shores of Kerala.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <FacebookIcon />, label: 'Facebook' },
                { icon: <TwitterIcon />, label: 'Twitter' },
                { icon: <YoutubeIcon />, label: 'YouTube' },
              ].map(s => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'transparent',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#B8922A';
                    e.currentTarget.style.borderColor = '#B8922A';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {navSections.map(section => (
            <div key={section.title}>
              <h4 style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#B8922A',
                marginBottom: '20px',
              }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.8125rem',
                        color: 'rgba(250,250,247,0.55)',
                        textAlign: 'left',
                        padding: 0,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#B8922A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,247,0.55)')}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8922A',
              marginBottom: '20px',
            }}>
              Stay Connected
            </h4>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8125rem',
              color: 'rgba(250,250,247,0.55)',
              lineHeight: 1.65,
              marginBottom: '20px',
            }}>
              Subscribe to receive exclusive offers, seasonal packages, and Kerala travel inspiration.
            </p>
            {subscribed ? (
              <div style={{
                background: 'rgba(184,146,42,0.1)',
                border: '1px solid rgba(184,146,42,0.3)',
                padding: '14px 16px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8125rem',
                color: '#B8922A',
              }}>
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0' }}>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  style={{
                    flex: 1,
                    padding: '12px 14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRight: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8125rem',
                    color: '#FAFAF7',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '12px 16px',
                    background: '#B8922A',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#fff',
                    transition: 'background 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#D4A849')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#B8922A')}
                >
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(250,250,247,0.35)' }}>
            © {new Date().getFullYear()} Palmshore Luxury Resort & Spa. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <button
                key={link}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(250,250,247,0.35)',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#B8922A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,247,0.35)')}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
