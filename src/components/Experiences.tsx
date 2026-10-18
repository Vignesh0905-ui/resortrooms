import { useEffect, useRef } from 'react';
import { experiences } from '../data/content';

export default function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 100);
          });
        }
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiences" style={{ background: '#1C1C1C', padding: '100px 0' }} ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Resort Experiences</span>
          <h2 className="section-title section-title-light">
            Curated Moments
          </h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: 'rgba(250,250,247,0.65)', maxWidth: '520px', lineHeight: 1.75, margin: '0 auto' }}>
            From poolside serenity to jungle walks and authentic Ayurveda — every day at Palmshore is a new story worth telling.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '16px',
        }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="reveal"
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                minHeight: i < 2 ? '380px' : '280px',
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                const overlay = e.currentTarget.querySelector('.exp-overlay') as HTMLElement;
                if (img) img.style.transform = 'scale(1.06)';
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                const overlay = e.currentTarget.querySelector('.exp-overlay') as HTMLElement;
                if (img) img.style.transform = 'scale(1)';
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={exp.image}
                alt={exp.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)', display: 'block' }}
              />
              {/* Permanent dark gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
              }} />
              {/* Hover overlay */}
              <div
                className="exp-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(184,146,42,0.15)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              />
              {/* Text */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '28px',
              }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: i < 2 ? '1.75rem' : '1.25rem',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  marginBottom: '8px',
                }}>
                  {exp.title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.65,
                  maxWidth: '380px',
                  display: i >= 4 ? 'none' : undefined,
                }}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive fix for mobile */}
        <style>{`
          @media (max-width: 768px) {
            #experiences .reveal { grid-column: span 1 !important; min-height: 220px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
