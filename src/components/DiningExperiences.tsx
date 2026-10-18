import { useEffect, useRef } from 'react';

const diningExperiences = [
  {
    title: 'The Palmshore Restaurant',
    subtitle: 'All-Day Dining',
    description: 'Our signature restaurant features a vibrant open kitchen serving an extensive buffet breakfast and à la carte menus throughout the day — from Kerala classics to global favorites.',
    image: '/images/dining-restaurant.png',
    hours: '7:00 AM – 11:00 PM',
  },
  {
    title: 'The Spice Garden',
    subtitle: 'Fine Dining',
    description: 'An intimate fine dining experience showcasing the finest Kerala cuisine, elevated with modern technique. Reservations recommended. Dress code: Smart casual.',
    image: '/images/food-south-indian.png',
    hours: '7:00 PM – 11:00 PM',
  },
  {
    title: 'Lagoon Café',
    subtitle: 'Poolside Dining',
    description: 'Dine with your feet in the water. Our poolside café serves light bites, refreshing beverages, grilled snacks, and tropical cocktails throughout the day.',
    image: '/images/pool-area.png',
    hours: '10:00 AM – 8:00 PM',
  },
  {
    title: 'Private Romantic Dinner',
    subtitle: 'Special Occasions',
    description: 'A candlelit dinner crafted especially for you — in your villa garden, on the beach, or in our rooftop terrace under the stars. Perfect for anniversaries and proposals.',
    image: '/images/room-villa.png',
    hours: 'By Reservation',
  },
];

export default function DiningExperiences() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
        }
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: '#FAFAF7', padding: '100px 0' }} ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Dining Experiences</span>
          <h2 className="section-title">A World of Flavours</h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            From intimate fine dining to casual poolside bites — every meal at Palmshore is an experience in itself.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {diningExperiences.map((exp, i) => (
            <div
              key={exp.title}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '0',
                overflow: 'hidden',
                background: '#fff',
                direction: i % 2 === 0 ? 'ltr' : 'rtl',
              }}
            >
              {/* Image */}
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', direction: 'ltr' }}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                    display: 'block',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  direction: 'ltr',
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#B8922A',
                  display: 'block',
                  marginBottom: '10px',
                }}>
                  {exp.subtitle}
                </span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: '#1C1C1C',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}>
                  {exp.title}
                </h3>
                <div style={{ width: '36px', height: '1.5px', background: '#B8922A', marginBottom: '16px' }} />
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#6B6B6B',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                }}>
                  {exp.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  color: '#9A9A9A',
                  marginBottom: '28px',
                }}>
                  <span style={{ fontWeight: 600, color: '#B8922A' }}>Hours:</span>
                  {exp.hours}
                </div>
                <button
                  className="btn btn-outline"
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ alignSelf: 'flex-start' }}
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Fix */}
        <style>{`
          @media (max-width: 768px) {
            .reveal[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              direction: ltr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
