import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Users, BedDouble, Volume2, VolumeX, Play, Pause } from 'lucide-react';

export default function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleBooking = () => {
    const el = document.querySelector('#booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Video & Fallback Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          backgroundColor: '#0A0A0A',
        }}
      >
        {/* Poster / Fallback Image */}
        <img
          src="/images/resort-hero.png"
          alt="Palmshore Luxury Resort"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            transition: 'opacity 0.6s ease',
            opacity: hasVideoError || !isVideoLoaded ? 1 : 0.85,
          }}
        />

        {/* Full-width Cinematic Video Background */}
        {!hasVideoError && (
          <video
            ref={videoRef}
            src="/videos/resort-room.mp4"
            poster="/images/resort-hero.png"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setHasVideoError(true)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }}
          />
        )}

        {/* Subtle Cinematic Dark Overlay for Maximum Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.38) 40%, rgba(10,10,10,0.78) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#B8922A',
            display: 'block',
            marginBottom: '20px',
          }}>
            Kerala's Premier Luxury Retreat
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 300,
            color: '#FFFFFF',
            lineHeight: 1.1,
            maxWidth: '820px',
            letterSpacing: '-0.01em',
            marginBottom: '24px',
          }}
        >
          A Private Escape<br />
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Into Paradise</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.82)',
            maxWidth: '520px',
            lineHeight: 1.75,
            marginBottom: '40px',
          }}
        >
          Nestled on the tranquil shores of Kerala, Palmshore Resort is a sanctuary of natural beauty, 
          personalized luxury, and authentic South Indian hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}
        >
          <button
            className="btn btn-gold"
            onClick={() => document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Rooms
          </button>
          <button
            className="btn btn-outline-white"
            onClick={() => document.querySelector('#dining')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Dining
          </button>
        </motion.div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(20px)',
            padding: '28px 32px',
            width: '100%',
            maxWidth: '900px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(200,190,175,0.3)',
          }}
        >
          {/* Check In */}
          <div style={{ background: 'rgba(255,255,255,0.98)', padding: '16px 20px' }}>
            <label className="form-label">Check In</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={14} color="#B8922A" />
              <input
                id="hero-checkin"
                type="date"
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#1C1C1C',
                  background: 'transparent',
                  width: '100%',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Check Out */}
          <div style={{ background: 'rgba(255,255,255,0.98)', padding: '16px 20px' }}>
            <label className="form-label">Check Out</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={14} color="#B8922A" />
              <input
                id="hero-checkout"
                type="date"
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#1C1C1C',
                  background: 'transparent',
                  width: '100%',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>

          {/* Adults */}
          <div style={{ background: 'rgba(255,255,255,0.98)', padding: '16px 20px' }}>
            <label className="form-label">Adults</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={14} color="#B8922A" />
              <select
                id="hero-adults"
                value={adults}
                onChange={e => setAdults(Number(e.target.value))}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#1C1C1C',
                  background: 'transparent',
                  width: '100%',
                  cursor: 'pointer',
                  appearance: 'none',
                }}
              >
                {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
          </div>

          {/* Children */}
          <div style={{ background: 'rgba(255,255,255,0.98)', padding: '16px 20px' }}>
            <label className="form-label">Children</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={14} color="#B8922A" />
              <select
                id="hero-children"
                value={children}
                onChange={e => setChildren(Number(e.target.value))}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#1C1C1C',
                  background: 'transparent',
                  width: '100%',
                  cursor: 'pointer',
                  appearance: 'none',
                }}
              >
                {[0,1,2,3,4].map(n => <option key={n} value={n}>{n === 0 ? 'None' : `${n} Child${n > 1 ? 'ren' : ''}`}</option>)}
              </select>
            </div>
          </div>

          {/* Rooms */}
          <div style={{ background: 'rgba(255,255,255,0.98)', padding: '16px 20px' }}>
            <label className="form-label">Rooms</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BedDouble size={14} color="#B8922A" />
              <select
                id="hero-rooms"
                value={rooms}
                onChange={e => setRooms(Number(e.target.value))}
                style={{
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#1C1C1C',
                  background: 'transparent',
                  width: '100%',
                  cursor: 'pointer',
                  appearance: 'none',
                }}
              >
                {[1,2,3,4].map(n => <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div style={{ background: 'rgba(255,255,255,0.98)', padding: '12px 8px', display: 'flex', alignItems: 'flex-end' }}>
            <button
              className="btn btn-gold"
              onClick={handleBooking}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Check Availability
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Video Controls (Mute & Play/Pause) */}
      {!hasVideoError && (
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            title={isPlaying ? 'Pause video tour' : 'Play video tour'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(15,15,15,0.5)',
              backdropFilter: 'blur(8px)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(184,146,42,0.85)';
              e.currentTarget.style.borderColor = '#B8922A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(15,15,15,0.5)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute audio' : 'Mute audio'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(15,15,15,0.5)',
              backdropFilter: 'blur(8px)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(184,146,42,0.85)';
              e.currentTarget.style.borderColor = '#B8922A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(15,15,15,0.5)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.625rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
        }}>
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <ChevronDown size={18} color="rgba(255,255,255,0.6)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
