'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollExpandHero from '@/components/ui/scroll-expansion-hero';
import { CATEGORIES, CATEGORY_ORDER } from '@/lib/services-data';

/* ─── Cursor ─── */
function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const curR = document.getElementById('cur-r');
    if (!cur || !curR) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMove);
    let raf: number;
    const tick = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
      curR.style.left = rx + 'px'; curR.style.top = ry + 'px';
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div id="cur" />
      <div id="cur-r" />
    </>
  );
}

/* ─── Scroll Reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.sr');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Marquee ─── */
const MARQUEE_ITEMS = ['Threading','Waxing','Hair Color','Facials','Keratin','Bridal','Reiki','Massage','Henna','Makeup','Brows','Highlights'];

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="bg-[#1A1410] overflow-hidden py-3 border-t border-b border-[#2a1f18]">
      <div className="flex w-max marquee-track">
        {items.map((t, i) => (
          <span key={i} className="text-[0.65rem] tracking-[0.22em] uppercase text-white/45 px-10 whitespace-nowrap font-light">
            {t}<span className="text-[#B8965A] ml-1 mr-3"> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── About ─── */
function AboutSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
      <div className="relative overflow-hidden group min-h-[50vh] md:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=900&q=80"
          alt="Salon interior"
          fill
          className="object-cover transition-transform duration-[8s] ease-linear group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-8 left-8 text-[0.65rem] tracking-[0.2em] uppercase text-white/55 font-light z-10">
          Rise &amp; Shine — Houston, TX
        </span>
      </div>
      <div className="bg-[#F5F0E8] px-10 md:px-20 py-24 flex flex-col justify-center">
        <div className="sr text-[0.65rem] tracking-[0.22em] uppercase text-[#B5485A] font-medium mb-6 flex items-center gap-4">
          <span className="w-7 h-px bg-[#B5485A] inline-block" />
          Our Story
        </div>
        <h2 className="sr d1 font-playfair text-[clamp(2rem,3.2vw,3rem)] font-normal leading-[1.15] text-[#1A1410]">
          Where <em className="italic text-[#B5485A]">precision</em><br />meets intention.
        </h2>
        <p className="sr d2 text-[0.92rem] text-[#6B5F58] leading-[1.9] mt-7 max-w-[400px] font-light">
          We started Rise &amp; Shine because Houston deserved better. A place where every brow is shaped with actual skill, every treatment is done with real care — and you leave feeling like yourself, but better.
        </p>
        <p className="sr d3 text-[0.92rem] text-[#6B5F58] leading-[1.9] mt-4 max-w-[400px] font-light">
          Rooted in South Asian beauty traditions. Refined for the modern woman.
        </p>
        <div className="sr d4 grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#E8E2D9]">
          {[['84+','Services'],['5K+','Clients'],['8+','Years']].map(([n, l]) => (
            <div key={l}>
              <div className="font-playfair text-[2.6rem] font-normal text-[#1A1410] leading-none">{n}</div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-[#6B5F58] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Categories ─── */
const CAT_DESCRIPTIONS: Record<string, string> = {
  threading: 'Brows, lip, face & more',
  waxing:    'Face, body & Brazilian',
  hair:      'Cuts, color & treatments',
  facials:   'Glow-inducing skin care',
  wellness:  'Massage, reiki & makeup',
};

function CategoriesSection() {
  return (
    <section className="bg-[#FAFAF7] border-t border-[#E8E2D9]">
      {/* Header */}
      <div className="px-6 md:px-14 pt-20 pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="sr text-[0.65rem] tracking-[0.22em] uppercase text-[#B5485A] font-medium mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#B5485A] inline-block" />
            Browse Our Services
          </div>
          <h2 className="sr d1 font-playfair text-[clamp(2.2rem,4vw,3.8rem)] font-normal text-[#1A1410] leading-[1.05]">
            Five categories.<br /><em className="italic text-[#B5485A]">Eighty-four</em> services.
          </h2>
        </div>
        <p className="sr d2 text-[0.82rem] text-[#6B5F58] font-light max-w-[260px] leading-relaxed">
          Click any category to browse the full menu and book your appointment.
        </p>
      </div>

      {/* Category rows — no images */}
      <div className="divide-y divide-[#E8E2D9] border-t border-[#E8E2D9]">
        {CATEGORY_ORDER.map((key, i) => {
          const cat = CATEGORIES[key];
          return (
            <Link
              key={key}
              href={`/services/${key}`}
              className={`group flex items-center justify-between px-6 md:px-14 py-7 hover:bg-[#F5F0E8] transition-colors duration-200 no-underline sr d${Math.min(i + 1, 4)}`}
            >
              <div className="flex items-baseline gap-5 md:gap-8">
                <span className="font-playfair text-[clamp(1.6rem,3vw,2.4rem)] font-normal text-[#1A1410] group-hover:text-[#B5485A] transition-colors duration-200">
                  {cat.title}
                </span>
                <span className="hidden md:block text-[0.78rem] text-[#6B5F58] font-light">
                  {CAT_DESCRIPTIONS[key]}
                </span>
              </div>
              <div className="flex items-center gap-5 flex-shrink-0">
                <span className="text-[0.7rem] tracking-[0.1em] uppercase text-[#6B5F58]">{cat.count} services</span>
                <div className="w-8 h-8 border border-[#E8E2D9] group-hover:border-[#B5485A] group-hover:bg-[#B5485A] flex items-center justify-center transition-all duration-200">
                  <svg className="w-3.5 h-3.5 stroke-[#6B5F58] group-hover:stroke-white fill-none transition-colors duration-200" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Booking ─── */
function BookingSection() {
  return (
    <section id="booking" className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] min-h-[80vh] bg-[#F5F0E8]">
      <div className="px-10 md:px-16 py-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#E8E2D9]">
        <div className="sr text-[0.65rem] tracking-[0.22em] uppercase text-[#B5485A] font-medium mb-6 flex items-center gap-4">
          <span className="w-7 h-px bg-[#B5485A] inline-block" />
          Reserve Your Spot
        </div>
        <h2 className="sr d1 font-playfair text-[clamp(2rem,3.2vw,3rem)] font-normal leading-[1.18] text-[#1A1410]">
          Ready for Your<br /><em className="italic text-[#B5485A]">Glow Up?</em>
        </h2>
        <p className="sr d2 text-[0.92rem] text-[#6B5F58] leading-[1.85] mt-6 max-w-[380px] font-light">
          Choose your service, pick a time that works for you, and we&apos;ll take care of the rest. Walk in. Leave radiant.
        </p>
        <div className="sr d3 grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#E8E2D9]">
          {[['Mon–Sat','9am – 7pm'],['Sunday','10am – 5pm'],['Houston','Texas']].map(([n, l]) => (
            <div key={n}>
              <div className="font-playfair text-[1.4rem] font-normal text-[#1A1410] leading-none">{n}</div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-[#6B5F58] mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 flex flex-col sr d1">
        <h3 className="font-playfair text-[1.1rem] font-normal text-[#1A1410] mb-6 pb-4 border-b border-[#E8E2D9]">
          Select a Date &amp; Time
        </h3>
        {/*
          ── CALENDLY PLACEHOLDER ──────────────────────────────────────────
          Replace this div with your Calendly iframe:
          <iframe
            className="flex-1 border-none min-h-[580px] rounded-sm"
            src="https://calendly.com/YOUR-LINK"
          />
          ──────────────────────────────────────────────────────────────────
        */}
        <div className="flex-1 flex flex-col items-center justify-center bg-[#FAFAF7] border border-dashed border-[#E8E2D9] rounded min-h-[580px] gap-4 text-center p-8">
          <svg className="w-12 h-12 stroke-[#E8E2D9] fill-none" strokeWidth={1.5} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <p className="text-[0.82rem] text-[#6B5F58] leading-[1.7]">
            Calendly booking widget goes here.<br />
            Replace this placeholder with your embed URL:<br /><br />
            <code className="text-[0.75rem] bg-[#F5F0E8] px-2 py-0.5 border border-[#E8E2D9] text-[#B5485A] rounded">
              https://calendly.com/YOUR-LINK
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  { stars: 5, text: '"The best threading experience I\'ve had in Houston. So precise, so quick — my brows have never looked more defined."', author: 'Priya M.', initial: 'P' },
  { stars: 5, text: '"My keratin treatment completely transformed my hair. So silky, so manageable. Genuinely the best in Houston."', author: 'Sarah K.', initial: 'S' },
  { stars: 5, text: '"Did my bridal makeup and hair here — absolutely stunning. The team made me feel like royalty on my wedding day."', author: 'Aisha R.', initial: 'A' },
];

function TestimonialsSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#FAFAF7]">
      <div className="flex justify-between items-end mb-14">
        <div>
          <div className="sr text-[0.65rem] tracking-[0.22em] uppercase text-[#B5485A] font-medium mb-3 flex items-center gap-4">
            <span className="w-7 h-px bg-[#B5485A] inline-block" />
            Client Love
          </div>
          <h2 className="sr d1 font-playfair text-[clamp(2rem,3.2vw,3rem)] font-normal text-[#1A1410]">
            What They <em className="italic text-[#B5485A]">Say</em>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={`sr d${i + 1} border border-[#E8E2D9] p-9 bg-white hover:border-[#B8965A] hover:-translate-y-1 transition-all duration-300`}>
            <div className="text-[#B8965A] text-[0.75rem] tracking-[0.08em] mb-4">{'★'.repeat(t.stars)}</div>
            <p className="text-[0.88rem] text-[#6B5F58] leading-[1.8] font-light italic">{t.text}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B5485A] to-[#B8965A] flex items-center justify-center font-playfair text-white text-[0.9rem]">
                {t.initial}
              </div>
              <div className="text-[0.78rem] font-medium text-[#1A1410] tracking-[0.04em]">{t.author}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  const cols = [
    { title: 'Services', links: CATEGORY_ORDER.map(k => ({ label: CATEGORIES[k].title, href: `/services/${k}` })) },
    { title: 'Salon', links: [{ label: 'About Us', href: '#' },{ label: 'Gallery', href: '#' },{ label: 'Gift Cards', href: '#' },{ label: 'Blog', href: '#' }] },
    { title: 'Visit', links: [{ label: 'Houston, TX', href: '#' },{ label: 'Mon–Sat 9am–7pm', href: '#' },{ label: 'Sun 10am–5pm', href: '#' },{ label: 'Book Online', href: '#booking' }] },
  ];
  return (
    <footer className="bg-[#1A1410] px-6 md:px-12 pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pb-14 border-b border-white/[0.07]">
        <div>
          <span className="font-playfair text-[1.2rem] text-[rgba(250,246,240,0.8)] mb-3 block">Rise &amp; Shine</span>
          <p className="text-[0.8rem] text-[rgba(250,246,240,0.3)] leading-[1.7] max-w-[220px]">
            Houston&apos;s premier destination for beauty, wellness, and transformation.
          </p>
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#B8965A] font-medium mb-5">{col.title}</div>
            <ul className="flex flex-col gap-2.5 list-none">
              {col.links.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.8rem] text-[rgba(250,246,240,0.35)] no-underline hover:text-[rgba(250,246,240,0.8)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 flex justify-between items-center">
        <span className="text-[0.7rem] text-[rgba(250,246,240,0.2)] tracking-[0.04em]">© 2026 Rise &amp; Shine Salon. All rights reserved.</span>
        <div className="flex gap-3">
          {['Instagram','Facebook'].map(s => (
            <a key={s} href="#" aria-label={s} className="w-[30px] h-[30px] border border-white/10 flex items-center justify-center hover:border-[#B5485A] hover:bg-[#B5485A] transition-all group">
              <svg className="w-3 h-3 fill-[rgba(250,246,240,0.4)] group-hover:fill-white" viewBox="0 0 24 24">
                {s === 'Instagram'
                  ? <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  : <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                }
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Cursor />
      <ScrollExpandHero
        mediaSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
        bgImageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
        titleLine1="Rise &"
        titleLine2="Shine."
        subtitle="Houston's Premier Beauty Studio"
      />
      <main className="bg-[#FAFAF7]">
        <MarqueeStrip />
        <AboutSection />
        <CategoriesSection />
        <BookingSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
