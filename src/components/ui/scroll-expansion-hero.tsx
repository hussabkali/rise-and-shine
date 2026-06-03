'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  bgImageSrc: string;
  titleLine1: string;
  titleLine2: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function ScrollExpandHero({
  mediaSrc,
  bgImageSrc,
  titleLine1,
  titleLine2,
  subtitle,
  children,
}: ScrollExpandHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const progressRef = useRef(0);
  const expandedRef = useRef(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // If navigated here with #booking hash, skip hero and jump to booking
  useEffect(() => {
    if (window.location.hash === '#booking') {
      progressRef.current = 1;
      expandedRef.current = true;
      setScrollProgress(1);
      setMediaFullyExpanded(true);
      setShowContent(true);
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (expandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        expandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
        return;
      }
      if (!expandedRef.current) {
        e.preventDefault();
        const next = Math.min(Math.max(progressRef.current + e.deltaY * 0.0009, 0), 1);
        progressRef.current = next;
        setScrollProgress(next);
        if (next >= 1) {
          expandedRef.current = true;
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        expandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
        return;
      }
      if (!expandedRef.current) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(Math.max(progressRef.current + deltaY * factor, 0), 1);
        progressRef.current = next;
        setScrollProgress(next);
        if (next >= 1) { expandedRef.current = true; setMediaFullyExpanded(true); setShowContent(true); }
        else if (next < 0.75) setShowContent(false);
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const lockScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', lockScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', lockScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartY]);

  const mediaW = (isMobile ? 260 : 340) + scrollProgress * (isMobile ? 500 : 1100);
  const mediaH = (isMobile ? 360 : 440) + scrollProgress * (isMobile ? 200 : 380);
  const tx = scrollProgress * (isMobile ? 20 : 17);
  const borderR = 16 * (1 - scrollProgress);

  return (
    <div className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background image fades out */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            animate={{ opacity: Math.max(0, 1 - scrollProgress * 1.5) }}
            transition={{ duration: 0 }}
          >
            <Image
              src={bgImageSrc}
              alt="Salon background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          <div className="relative z-10 w-full flex flex-col items-center min-h-[100dvh]">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding media card */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                style={{
                  width: Math.min(mediaW, typeof window !== 'undefined' ? window.innerWidth : 1440),
                  height: Math.min(mediaH, typeof window !== 'undefined' ? window.innerHeight : 900),
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  borderRadius: borderR,
                  boxShadow: scrollProgress < 1 ? '0 30px 80px rgba(0,0,0,0.45)' : 'none',
                  transition: 'box-shadow 0.3s',
                }}
              >
                <Image
                  src={mediaSrc}
                  alt="Salon"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Overlay darkens slightly then fades */}
                <div
                  className="absolute inset-0"
                  style={{ background: `rgba(0,0,0,${0.35 - scrollProgress * 0.2})` }}
                />
              </div>

              {/* Title — splits left / right */}
              <div className="relative z-10 flex flex-col items-center gap-2 pointer-events-none">
                <h1
                  className="font-playfair text-[clamp(3rem,6.5vw,6rem)] font-normal text-[#FAF6F0] italic leading-tight will-change-transform"
                  style={{ transform: `translateX(-${tx}vw)`, opacity: Math.max(0, 1 - scrollProgress * 1.6) }}
                >
                  {titleLine1}
                </h1>
                <h1
                  className="font-playfair text-[clamp(3rem,6.5vw,6rem)] font-normal text-[#FAF6F0] leading-tight will-change-transform"
                  style={{ transform: `translateX(${tx}vw)`, opacity: Math.max(0, 1 - scrollProgress * 1.6) }}
                >
                  {titleLine2}
                </h1>
              </div>

              {/* Scroll hint */}
              <div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                style={{ opacity: Math.max(0, 1 - scrollProgress * 6) }}
              >
                <div className="w-[18px] h-[28px] border border-white/30 rounded-[9px] relative">
                  <span className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[3px] h-[5px] bg-[#B8965A] rounded-full animate-bob" />
                </div>
                <span className="text-[0.62rem] tracking-[0.2em] uppercase text-white/45">Scroll to reveal</span>
              </div>

              {/* CTA after full expansion */}
              {subtitle && (
                <motion.div
                  className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 text-center whitespace-nowrap z-20"
                  animate={{ opacity: showContent ? 1 : 0 }}
                  transition={{ duration: 0.7 }}
                  style={{ pointerEvents: showContent ? 'all' : 'none' }}
                >
                  <p className="text-[0.8rem] tracking-[0.2em] uppercase text-[rgba(250,246,240,0.6)] mb-6">{subtitle}</p>
                  <a
                    href="#booking"
                    className="inline-block px-10 py-4 bg-[#B5485A] text-white text-[0.72rem] tracking-[0.15em] uppercase font-medium hover:bg-[#9A3048] transition-colors"
                  >
                    Reserve Your Visit
                  </a>
                </motion.div>
              )}
            </div>

            {/* Children fade in below hero */}
            <motion.div
              className="w-full"
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
