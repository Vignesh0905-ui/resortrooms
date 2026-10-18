import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, BedDouble, Maximize2, Check } from 'lucide-react';
import { rooms } from '../data/rooms';
import type { Room } from '../types';

interface RoomsProps {
  onBook: (room: Room) => void;
}

function RoomModal({ room, onClose, onBook }: { room: Room; onClose: () => void; onBook: () => void }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 600,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.4,0,0.2,1] }}
        style={{
          background: '#FAFAF7',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <X size={18} />
        </button>

        {/* Main Image */}
        <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={room.gallery[activeImg] || room.image}
            alt={room.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Thumbnail Row */}
        {room.gallery.length > 1 && (
          <div style={{ display: 'flex', gap: '8px', padding: '12px 24px', background: '#F5F3EE' }}>
            {room.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  width: '72px',
                  height: '52px',
                  overflow: 'hidden',
                  border: i === activeImg ? '2px solid #B8922A' : '2px solid transparent',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}

        {/* Details */}
        <div style={{ padding: '32px 36px' }}>
          {room.tag && (
            <span className="badge badge-gold" style={{ marginBottom: '12px', display: 'inline-block' }}>
              {room.tag}
            </span>
          )}
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 400, color: '#1C1C1C', marginBottom: '8px' }}>
            {room.name}
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', color: '#6B6B6B', lineHeight: 1.75, marginBottom: '24px' }}>
            {room.description}
          </p>

          {/* Quick facts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px', marginBottom: '28px' }}>
            {[
              { icon: <Users size={15} />, label: 'Capacity', value: `${room.capacity} Guests` },
              { icon: <BedDouble size={15} />, label: 'Bed Type', value: room.bedType },
              { icon: <Maximize2 size={15} />, label: 'Room Size', value: `${room.size} sq ft` },
            ].map(f => (
              <div key={f.label} style={{ background: '#F5F3EE', padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#B8922A', marginBottom: '4px' }}>
                  {f.icon}
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9A9A9A' }}>
                    {f.label}
                  </span>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#1C1C1C' }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>

          {/* Amenities */}
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6B6B', marginBottom: '14px' }}>
            Amenities & Services
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
            {room.amenities.map(a => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#F5F3EE', padding: '7px 12px' }}>
                <Check size={12} color="#B8922A" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8125rem', color: '#4A4A4A' }}>{a}</span>
              </div>
            ))}
          </div>

          {/* Price & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid #E8DFD0', paddingTop: '24px' }}>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: '#1C1C1C' }}>
                ₹{room.price.toLocaleString('en-IN')}
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 400, color: '#9A9A9A', marginLeft: '6px' }}>
                  per night
                </span>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9A9A9A', marginTop: '2px' }}>
                *Illustrative pricing. Taxes & charges extra.
              </div>
            </div>
            <button className="btn btn-gold" onClick={onBook}>
              Book This Room
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Rooms({ onBook }: RoomsProps) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="rooms" style={{ background: '#F5F3EE', padding: '100px 0' }} ref={sectionRef}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">Accommodation</span>
          <h2 className="section-title">Luxury Rooms & Suites</h2>
          <div className="gold-line" style={{ margin: '16px auto' }} />
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Each of our spaces is thoughtfully designed to offer a sanctuary of comfort, elegance, and authentic Kerala warmth.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {rooms.map((room) => (
            <div key={room.id} className="reveal card" style={{ background: '#fff' }}>
              {/* Image */}
              <div style={{ overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="img-cover"
                  style={{ transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {room.tag && (
                  <span className="badge badge-gold" style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                  }}>
                    {room.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.375rem',
                  fontWeight: 500,
                  color: '#1C1C1C',
                  marginBottom: '8px',
                }}>
                  {room.name}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8125rem',
                  color: '#6B6B6B',
                  lineHeight: 1.65,
                  marginBottom: '16px',
                }}>
                  {room.shortDescription}
                </p>

                {/* Quick Info */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Users size={13} color="#B8922A" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B6B6B' }}>{room.capacity} Guests</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <BedDouble size={13} color="#B8922A" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B6B6B' }}>{room.bedType}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Maximize2 size={13} color="#B8922A" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B6B6B' }}>{room.size} sq ft</span>
                  </div>
                </div>

                {/* Top Amenities */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {room.amenities.slice(0, 4).map(a => (
                    <span key={a} className="amenity-tag">{a}</span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="amenity-tag">+{room.amenities.length - 4} more</span>
                  )}
                </div>

                {/* Price & Actions */}
                <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 600, color: '#1C1C1C' }}>
                      ₹{room.price.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: '#9A9A9A', marginLeft: '4px' }}>/ night</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="btn btn-outline"
                      style={{ padding: '9px 16px', fontSize: '0.7rem' }}
                      onClick={() => setSelectedRoom(room)}
                    >
                      View Details
                    </button>
                    <button
                      className="btn btn-gold"
                      style={{ padding: '9px 16px', fontSize: '0.7rem' }}
                      onClick={() => onBook(room)}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <RoomModal
            room={selectedRoom}
            onClose={() => setSelectedRoom(null)}
            onBook={() => {
              onBook(selectedRoom);
              setSelectedRoom(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
