'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CATEGORIES = [
  { key: 'threading', label: 'Threading' },
  { key: 'waxing', label: 'Waxing' },
  { key: 'hair', label: 'Hair' },
  { key: 'facials', label: 'Facials' },
  { key: 'wellness', label: 'Wellness' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overHero = isHome && !solid;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between transition-all duration-500 ${
        solid || !isHome
          ? 'bg-[rgba(250,250,247,0.95)] backdrop-blur-md py-4 px-12 border-b border-[#E8E2D9]'
          : 'bg-transparent py-6 px-12 border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <Link href="/" className={`font-playfair text-[1.35rem] font-medium flex items-center gap-3 no-underline transition-colors duration-400 ${overHero ? 'text-white' : 'text-[#1A1410]'}`}>
        <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.7">
            <line x1="30" y1="4" x2="30" y2="11" /><line x1="30" y1="49" x2="30" y2="56" />
            <line x1="4" y1="30" x2="11" y2="30" /><line x1="49" y1="30" x2="56" y2="30" />
            <line x1="11" y1="11" x2="16" y2="16" /><line x1="44" y1="44" x2="49" y2="49" />
            <line x1="49" y1="11" x2="44" y2="16" /><line x1="16" y1="44" x2="11" y2="49" />
          </g>
          <path d="M24 18 C21 26,27 31,24 40 C22 46,18 48,19 54" stroke="#B5485A" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 15 C27 23,33 29,30 38 C28 45,24 47,26 53" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
          <path d="M36 18 C33 26,39 31,36 40 C34 46,30 48,31 54" stroke="#B8965A" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="30" cy="20" r="2.5" fill="#B5485A" />
        </svg>
        Rise &amp; Shine
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-9 list-none">
        {CATEGORIES.map(({ key, label }) => (
          <li key={key}>
            <Link
              href={`/services/${key}`}
              className={`text-[0.72rem] tracking-[0.14em] uppercase font-medium no-underline transition-colors duration-300 relative pb-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#B5485A] after:w-0 hover:after:w-full after:transition-all after:duration-300
                ${overHero ? 'text-white/75 hover:text-[#B5485A]' : 'text-[#6B5F58] hover:text-[#B5485A]'}
              `}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#booking"
        className={`text-[0.7rem] tracking-[0.14em] uppercase font-medium px-6 py-2.5 transition-all duration-300 no-underline
          ${overHero
            ? 'border border-white/50 text-white hover:bg-[#B5485A] hover:border-[#B5485A]'
            : 'border border-[#B5485A] text-[#B5485A] hover:bg-[#B5485A] hover:text-white'
          }
        `}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Book Now
      </a>
    </nav>
  );
}
