import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryItems } from '../data/content';

const categories = ['all', 'rooms', 'dining', 'pool', 'landscape', 'experiences'] as const;
type Category = typeof categories[number];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxItem, setLightboxItem] = useState<string | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" style={{ background: '#F5F3EE', padding: '100px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-label">Gallery</span>
          <h2 className="section-title">A Glimpse of Paradise</h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'capitalize',
                padding: '8px 20px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: activeCategory === cat ? '#1C1C1C' : '#fff',
                color: activeCategory === cat ? '#FAFAF7' : '#6B6B6B',
              }}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
        }}>
          <AnimatePresence>
            {filtered.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                style={{
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxItem(item.image)}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                  if (img) img.style.transform = 'scale(1.07)';
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  const overlay = e.currentTarget.querySelector('.gallery-overlay') as HTMLElement;
                  if (img) img.style.transform = 'scale(1)';
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)', display: 'block' }}
                />
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(28,28,28,0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px',
                  }}
                >
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.125rem',
                    fontWeight: 400,
                    color: '#FFFFFF',
                  }}>
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.92)',
              zIndex: 900,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setLightboxItem(null)}
          >
            <button
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                transition: 'background 0.2s',
              }}
              onClick={() => setLightboxItem(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={lightboxItem}
              alt="Gallery"
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
