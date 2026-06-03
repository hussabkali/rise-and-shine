'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    // On mobile use threshold 0 — trigger as soon as 1px enters viewport
    const threshold = isMobile ? 0 : 0.07;

    const els = document.querySelectorAll('.sr, .sr-zoom');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold, rootMargin: isMobile ? '0px 0px -40px 0px' : '0px 0px -60px 0px' }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
