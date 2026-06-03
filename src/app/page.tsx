'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollExpandHero from '@/components/ui/scroll-expansion-hero';
import { CATEGORIES, CATEGORY_ORDER } from '@/lib/services-data';
import { useScrollReveal } from '@/lib/useScrollReveal';

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
        <span className="absolute bottom-8 left-8 text-[0.62rem] tracking-[0.2em] uppercase text-white/45 font-light z-10">
          Rise &amp; Shine — Houston, TX
        </span>
      </div>
      <div className="bg-[#F5F0E8] px-10 md:px-20 py-24 flex flex-col justify-center">
        <div className="sr text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-7 flex items-center gap-3">
          <span className="w-6 h-px bg-[#B5485A] inline-block" />
          Our Story
        </div>
        <h2 className="sr d1 font-playfair text-[clamp(2.2rem,3.5vw,3.2rem)] font-light leading-[1.12] text-[#1A1410]">
          Houston deserved<br /><em className="italic">something better.</em>
        </h2>
        <p className="sr d2 text-[0.88rem] text-[#6B5F58] leading-[2] mt-8 max-w-[400px] font-light">
          Rise &amp; Shine was built for women who care about the details. Every brow shaped with skill. Every treatment done with intention. You leave feeling like yourself — just more so.
        </p>
        <p className="sr d3 text-[0.88rem] text-[#6B5F58] leading-[2] mt-3 max-w-[400px] font-light">
          Rooted in South Asian beauty traditions. Refined for the modern woman.
        </p>
        <div className="sr d4 grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#E8E2D9]">
          {[['84+','Services'],['5K+','Clients'],['8+','Years']].map(([n, l]) => (
            <div key={l}>
              <div className="font-playfair text-[2.8rem] font-light text-[#1A1410] leading-none">{n}</div>
              <div className="text-[0.65rem] tracking-[0.14em] uppercase text-[#6B5F58] mt-2 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Categories ─── */
const CAT_DESCRIPTIONS: Record<string, string> = {
  threading: 'Brows, lip, chin & full face',
  waxing:    'Face, arms, legs & bikini',
  hair:      'Cuts, color & smoothing treatments',
  facials:   'Classic, advanced & bridal',
  wellness:  'Massage, reiki, makeup & henna',
};

const CAT_NUMBERS: Record<string, string> = {
  threading: '01',
  waxing:    '02',
  hair:      '03',
  facials:   '04',
  wellness:  '05',
};

function CategoriesSection() {
  return (
    <section className="bg-[#FAFAF7] border-t border-[#E8E2D9]">
      <div className="px-6 md:px-14 pt-20 pb-6">
        <div className="sr text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-5 flex items-center gap-3">
          <span className="w-6 h-px bg-[#B5485A] inline-block" />
          Services
        </div>
        <h2 className="sr d1 font-playfair text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1A1410] leading-[1.05]">
          What we do
        </h2>
      </div>

      {/* Clean card grid */}
      <div className="px-6 md:px-14 pb-20 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E2D9]">
        {CATEGORY_ORDER.map((key, i) => {
          const cat = CATEGORIES[key];
          return (
            <Link
              key={key}
              href={`/services/${key}`}
              className={`sr-zoom d${i + 1} group relative bg-[#FAFAF7] hover:bg-white p-8 md:p-10 flex flex-col justify-between min-h-[190px] md:min-h-[240px] no-underline transition-colors duration-300 overflow-hidden`}
            >
              {/* Hover reveal — "View all services" bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-10 bg-[#B5485A] flex items-center justify-center gap-2 overflow-hidden transition-all duration-300">
                <span className="text-[0.6rem] tracking-[0.18em] uppercase text-white font-medium whitespace-nowrap">View all {cat.count} services</span>
                <svg className="w-3 h-3 stroke-white fill-none flex-shrink-0" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <div className="flex items-start justify-between">
                <span className="font-playfair text-[0.72rem] text-[#B8965A] font-light italic">{CAT_NUMBERS[key]}</span>
              </div>

              <div className="pb-2">
                <h3 className="font-playfair text-[1.7rem] md:text-[2rem] font-light text-[#1A1410] group-hover:text-[#B5485A] transition-colors duration-300 leading-tight mb-3">
                  {cat.title}
                </h3>
                <p className="text-[0.78rem] text-[#6B5F58] font-light leading-relaxed mb-4">
                  {CAT_DESCRIPTIONS[key]}
                </p>
                <span className="text-[0.62rem] tracking-[0.14em] uppercase text-[#B8965A] font-medium">
                  {cat.count} services
                </span>
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
        <div className="sr text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-7 flex items-center gap-3">
          <span className="w-6 h-px bg-[#B5485A] inline-block" />
          Book an Appointment
        </div>
        <h2 className="sr d1 font-playfair text-[clamp(2rem,3.2vw,3rem)] font-light leading-[1.15] text-[#1A1410]">
          Ready when<br /><em className="italic">you are.</em>
        </h2>
        <p className="sr d2 text-[0.88rem] text-[#6B5F58] leading-[2] mt-7 max-w-[360px] font-light">
          Pick your service, choose a time, and leave the rest to us.
        </p>
        <div className="sr d3 grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-[#E8E2D9]">
          {[['Mon–Sat','9am – 7pm'],['Sunday','10am – 5pm'],['Houston','Texas']].map(([n, l]) => (
            <div key={n}>
              <div className="font-playfair text-[1.3rem] font-light text-[#1A1410] leading-snug">{n}</div>
              <div className="text-[0.65rem] tracking-[0.12em] uppercase text-[#6B5F58] mt-1 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 flex flex-col sr d1">
        <h3 className="font-playfair text-[1.1rem] font-light text-[#1A1410] mb-6 pb-5 border-b border-[#E8E2D9]">
          Select a Date &amp; Time
        </h3>
        {/* Replace with: <iframe className="flex-1 border-none min-h-[580px]" src="https://calendly.com/YOUR-LINK" /> */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white border border-dashed border-[#E8E2D9] min-h-[540px] gap-4 text-center p-8">
          <svg className="w-10 h-10 stroke-[#D4CDC6] fill-none" strokeWidth={1} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <p className="text-[0.8rem] text-[#B0A89E] leading-[1.8] font-light">
            Add your Calendly link here
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  { text: 'The best threading I\'ve had in Houston. My brows have never looked this defined.', author: 'Priya M.' },
  { text: 'My keratin completely transformed my hair. So silky, so manageable. Worth every penny.', author: 'Sarah K.' },
  { text: 'Did my bridal makeup and hair here. The team made me feel like royalty on my wedding day.', author: 'Aisha R.' },
];

function TestimonialsSection() {
  return (
    <section className="px-6 md:px-14 py-24 bg-[#FAFAF7] border-t border-[#E8E2D9]">
      <div className="mb-14">
        <div className="sr text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-5 flex items-center gap-3">
          <span className="w-6 h-px bg-[#B5485A] inline-block" />
          Reviews
        </div>
        <h2 className="sr d1 font-playfair text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1A1410] leading-[1.05]">
          In their words
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={`sr d${i + 1} border border-[#E8E2D9] p-8 bg-white`}>
            <div className="text-[#B8965A] text-[0.7rem] tracking-widest mb-6">★★★★★</div>
            <p className="font-playfair text-[1.1rem] font-light text-[#1A1410] leading-[1.7] italic mb-8">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="text-[0.72rem] tracking-[0.12em] uppercase text-[#6B5F58] font-medium">{t.author}</div>
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
    { title: 'Salon', links: [{ label: 'About Us', href: '#' },{ label: 'Gallery', href: '#' },{ label: 'Gift Cards', href: '#' }] },
    { title: 'Visit', links: [{ label: 'Houston, TX', href: '#' },{ label: 'Mon–Sat 9am–7pm', href: '#' },{ label: 'Sun 10am–5pm', href: '#' },{ label: 'Book Online', href: '#booking' }] },
  ];
  return (
    <footer className="bg-[#1A1410] px-6 md:px-14 pt-20 pb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pb-14 border-b border-white/[0.07]">
        <div>
          <span className="font-playfair text-[1.3rem] font-light text-[rgba(250,246,240,0.85)] mb-4 block">Rise &amp; Shine</span>
          <p className="text-[0.78rem] text-[rgba(250,246,240,0.3)] leading-[1.8] max-w-[200px] font-light">
            Houston&apos;s salon for people who care about the details.
          </p>
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <div className="text-[0.6rem] tracking-[0.22em] uppercase text-[#B8965A] font-semibold mb-5">{col.title}</div>
            <ul className="flex flex-col gap-3 list-none">
              {col.links.map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.78rem] text-[rgba(250,246,240,0.3)] no-underline hover:text-[rgba(250,246,240,0.75)] transition-colors font-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 flex justify-between items-center">
        <span className="text-[0.68rem] text-[rgba(250,246,240,0.18)] tracking-[0.06em] font-light">© 2026 Rise &amp; Shine Salon</span>
        <div className="flex gap-3">
          {['Instagram','Facebook'].map(s => (
            <a key={s} href="#" aria-label={s} className="w-[28px] h-[28px] border border-white/10 flex items-center justify-center hover:border-[#B5485A] hover:bg-[#B5485A] transition-all group">
              <svg className="w-3 h-3 fill-[rgba(250,246,240,0.35)] group-hover:fill-white" viewBox="0 0 24 24">
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
      <ScrollExpandHero
        mediaSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=85"
        bgImageSrc="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
        titleLine1="Rise &"
        titleLine2="Shine."
        subtitle="Houston's Premier Beauty Studio"
      />
      <main className="bg-[#FAFAF7]">
        <AboutSection />
        <CategoriesSection />
        <BookingSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
