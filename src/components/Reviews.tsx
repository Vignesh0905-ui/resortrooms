import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '../data/content';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill={i <= rating ? '#B8922A' : 'none'} stroke="#B8922A" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent(c => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section style={{ background: '#FAFAF7', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Guest Voices</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            color: '#9A9A9A',
            fontStyle: 'italic',
            maxWidth: '400px',
            margin: '0 auto',
          }}>
            ⓘ Sample testimonials for demonstration purposes. Not verified customer reviews.
          </p>
        </div>

        {/* Main Testimonial */}
        <div style={{
          maxWidth: '760px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          padding: '0 48px',
        }}>
          <Quote size={48} color="#F0E6CC" style={{ marginBottom: '24px' }} />

          <blockquote style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.625rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#1C1C1C',
            lineHeight: 1.65,
            marginBottom: '32px',
          }}>
            "{review.review}"
          </blockquote>

          <StarRating rating={review.rating} />

          <div style={{ marginTop: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#1C1C1C',
              color: '#B8922A',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.125rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '16px auto 12px',
            }}>
              {review.avatar}
            </div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem', fontWeight: 500, color: '#1C1C1C' }}>
              {review.name}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9A9A9A', marginTop: '3px' }}>
              {review.location} · {review.roomType} · {review.date}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '36px' }}>
            <button
              onClick={prev}
              style={{
                width: '44px',
                height: '44px',
                border: '1.5px solid #D6C9B4',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6B6B',
                transition: 'all 0.2s',
                borderRadius: '50%',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1C1C1C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1C1C1C'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B6B6B'; e.currentTarget.style.borderColor = '#D6C9B4'; }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              style={{
                width: '44px',
                height: '44px',
                border: '1.5px solid #D6C9B4',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B6B6B',
                transition: 'all 0.2s',
                borderRadius: '50%',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1C1C1C'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1C1C1C'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6B6B6B'; e.currentTarget.style.borderColor = '#D6C9B4'; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === current ? '#B8922A' : '#D6C9B4',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mini Review Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginTop: '64px',
          borderTop: '1px solid #E8DFD0',
          paddingTop: '48px',
        }}>
          {reviews.map((r, i) => (
            <div
              key={r.id}
              onClick={() => setCurrent(i)}
              style={{
                padding: '20px',
                background: current === i ? '#F5F3EE' : '#fff',
                border: current === i ? '1px solid #D6C9B4' : '1px solid #F0EBE3',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <StarRating rating={r.rating} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9375rem', fontStyle: 'italic', color: '#4A4A4A', marginTop: '10px', marginBottom: '12px', lineHeight: 1.5 }}>
                "{r.review.substring(0, 80)}..."
              </p>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#1C1C1C' }}>{r.name}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', color: '#9A9A9A', marginTop: '2px' }}>{r.roomType}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
