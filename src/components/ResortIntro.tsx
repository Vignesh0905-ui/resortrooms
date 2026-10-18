import { useEffect, useRef } from 'react';

export default function ResortIntro() {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{ background: '#FAFAF7', padding: '100px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Image */}
          <div
            ref={imgRef}
            className="reveal-left"
            style={{ position: 'relative' }}
          >
            <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
              <img
                src="/images/resort-intro.png"
                alt="Palmshore Resort"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Floating stat card */}
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              right: '-24px',
              background: '#1C1C1C',
              color: '#FAFAF7',
              padding: '28px 32px',
              minWidth: '200px',
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: '#B8922A', lineHeight: 1 }}>
                15+
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,250,247,0.7)', marginTop: '6px' }}>
                Years of Excellence
              </div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, color: '#B8922A', lineHeight: 1, marginTop: '20px' }}>
                4.9★
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,250,247,0.7)', marginTop: '6px' }}>
                Guest Rating
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className="reveal-right"
            style={{ paddingRight: '20px' }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              Where Kerala's Soul<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Meets Timeless Luxury</em>
            </h2>
            <div className="gold-line" />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#6B6B6B',
              lineHeight: 1.8,
              marginBottom: '20px',
            }}>
              Palmshore Resort & Spa stands on the edge of a pristine Kerala backwater, where ancient coconut groves meet the gentle rhythm of the sea. We believe that true luxury is not merely opulence, but a deeply personal experience — one that leaves you transformed.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              color: '#6B6B6B',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              From our handpicked team of hospitality professionals to our Ayurvedic spa treatments and farm-to-table dining, every detail at Palmshore is crafted to honor the rich cultural heritage of Kerala while delivering world-class comfort.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '36px' }}>
              {[
                { num: '48', label: 'Luxury Rooms' },
                { num: '5', label: 'Dining Venues' },
                { num: '3', label: 'Pool Areas' },
              ].map(stat => (
                <div key={stat.num} style={{ textAlign: 'center', padding: '16px', background: '#F5F3EE' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: '#1C1C1C' }}>
                    {stat.num}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A9A9A', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn btn-primary"
              onClick={() => document.querySelector('#experiences')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Experiences
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
