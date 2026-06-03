'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { CATEGORIES, CATEGORY_ORDER } from '@/lib/services-data';
import type { Service } from '@/lib/services-data';

interface SelectedService extends Service {
  category: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  threading: 'Threading',
  waxing: 'Waxing',
  hair: 'Hair & Color',
  facials: 'Facials',
  wellness: 'Wellness',
};

function parsePrice(price: string): number {
  const n = parseInt(price.replace(/[^0-9]/g, ''));
  return isNaN(n) ? 0 : n;
}

export default function BookPage() {
  const [activeCategory, setActiveCategory] = useState('threading');
  const [selected, setSelected] = useState<SelectedService[]>([]);
  const freshaRef = useRef<HTMLDivElement>(null);

  const cat = CATEGORIES[activeCategory];
  const allServices: (Service & { category: string })[] = cat.groups.flatMap(g =>
    g.services.map(s => ({ ...s, category: activeCategory }))
  );

  const toggle = (svc: Service) => {
    const key = svc.name;
    setSelected(prev =>
      prev.find(s => s.name === key)
        ? prev.filter(s => s.name !== key)
        : [...prev, { ...svc, category: activeCategory }]
    );
  };

  const isSelected = (name: string) => selected.some(s => s.name === name);

  const totalMin = selected.reduce((acc, s) => acc + parsePrice(s.price), 0);
  const totalMax = selected.reduce((acc, s) => {
    const p = s.price.includes('From') ? parsePrice(s.price) * 1.4 : parsePrice(s.price);
    return acc + p;
  }, 0);

  const scrollToFresha = () => {
    freshaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7]">

      {/* Header */}
      <div className="pt-28 md:pt-32 pb-10 px-6 md:px-14 border-b border-[#E8E2D9]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.62rem] tracking-[0.18em] uppercase text-[#6B5F58] hover:text-[#B5485A] transition-colors mb-8 no-underline font-medium"
        >
          <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#B5485A] inline-block" />
              Rise &amp; Shine
            </div>
            <h1 className="font-playfair text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#1A1410] leading-[1]">
              Book an <em className="italic">appointment</em>
            </h1>
            <p className="text-[0.82rem] text-[#6B5F58] font-light mt-3">
              Mon–Sat 9am–7pm &nbsp;·&nbsp; Sun 10am–5pm &nbsp;·&nbsp; Houston, TX
            </p>
          </div>
          <p className="text-[0.78rem] text-[#6B5F58] font-light max-w-[240px] leading-relaxed hidden md:block">
            Select as many services as you like, then continue to book your slot.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-14 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left — service picker */}
          <div className="flex-1 min-w-0">
            {/* Step label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#B5485A] flex items-center justify-center flex-shrink-0">
                <span className="text-[0.6rem] text-white font-semibold">1</span>
              </div>
              <span className="text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-[#1A1410]">Choose your services</span>
            </div>

            {/* Category tabs */}
            <div className="flex gap-0 mb-6 border border-[#E8E2D9] overflow-x-auto">
              {CATEGORY_ORDER.map(key => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex-shrink-0 px-4 py-3 text-[0.62rem] tracking-[0.12em] uppercase font-semibold transition-all duration-200 border-r border-[#E8E2D9] last:border-r-0 whitespace-nowrap
                    ${activeCategory === key
                      ? 'bg-[#1A1410] text-white'
                      : 'bg-white text-[#6B5F58] hover:bg-[#F5F0E8] hover:text-[#1A1410]'
                    }`}
                >
                  {CATEGORY_LABELS[key]}
                </button>
              ))}
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {allServices.map(svc => {
                const active = isSelected(svc.name);
                return (
                  <button
                    key={svc.name}
                    onClick={() => toggle(svc)}
                    className={`group text-left p-4 border transition-all duration-200 flex items-start justify-between gap-3
                      ${active
                        ? 'border-[#B5485A] bg-[#B5485A]/5'
                        : 'border-[#E8E2D9] bg-white hover:border-[#B5485A]/40 hover:bg-[#FAFAF7]'
                      }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className={`font-playfair text-[0.95rem] font-light leading-snug mb-1 ${active ? 'text-[#B5485A]' : 'text-[#1A1410]'}`}>
                        {svc.name}
                      </div>
                      <div className="text-[0.7rem] text-[#6B5F58] font-light">{svc.price}</div>
                    </div>
                    <div className={`w-5 h-5 flex-shrink-0 border flex items-center justify-center transition-all duration-200 mt-0.5
                      ${active ? 'bg-[#B5485A] border-[#B5485A]' : 'border-[#D4CDC6] group-hover:border-[#B5485A]'}`}
                    >
                      {active && (
                        <svg className="w-2.5 h-2.5 stroke-white fill-none" strokeWidth={3} viewBox="0 0 24 24">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — summary + continue */}
          <div className="w-full lg:w-80 lg:sticky lg:top-28 flex-shrink-0">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${selected.length > 0 ? 'bg-[#B5485A]' : 'bg-[#D4CDC6]'}`}>
                <span className="text-[0.6rem] text-white font-semibold">2</span>
              </div>
              <span className="text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-[#1A1410]">Your selection</span>
            </div>

            <div className="border border-[#E8E2D9] bg-white">
              {selected.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-8 h-8 border border-dashed border-[#D4CDC6] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-4 h-4 stroke-[#D4CDC6] fill-none" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                  <p className="text-[0.75rem] text-[#B0A89E] font-light leading-relaxed">
                    No services selected yet.<br />Pick from the list on the left.
                  </p>
                </div>
              ) : (
                <div>
                  {/* Selected list */}
                  <div className="divide-y divide-[#E8E2D9] max-h-[320px] overflow-y-auto">
                    {selected.map(svc => (
                      <div key={svc.name} className="flex items-center justify-between gap-3 px-4 py-3">
                        <div className="flex-1 min-w-0">
                          <div className="font-playfair text-[0.88rem] font-light text-[#1A1410] leading-snug truncate">{svc.name}</div>
                          <div className="text-[0.68rem] text-[#6B5F58] font-light">{CATEGORY_LABELS[svc.category]}</div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="font-playfair text-[0.88rem] font-light text-[#1A1410]">{svc.price}</span>
                          <button
                            onClick={() => toggle(svc)}
                            className="w-5 h-5 flex items-center justify-center text-[#B0A89E] hover:text-[#B5485A] transition-colors"
                          >
                            <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
                              <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="px-4 py-4 border-t border-[#E8E2D9] bg-[#FAFAF7]">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.68rem] tracking-[0.1em] uppercase text-[#6B5F58] font-medium">
                        {selected.length} service{selected.length !== 1 ? 's' : ''}
                      </span>
                      <span className="font-playfair text-[1rem] font-light text-[#1A1410]">
                        {totalMin === totalMax
                          ? `$${totalMin}`
                          : `$${totalMin}–$${Math.round(totalMax)}`}
                        <span className="text-[0.65rem] text-[#6B5F58] font-light ml-1">est.</span>
                      </span>
                    </div>
                    <p className="text-[0.65rem] text-[#B0A89E] font-light mt-1">"From" prices shown at minimum</p>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="p-4 border-t border-[#E8E2D9]">
                <button
                  onClick={scrollToFresha}
                  disabled={selected.length === 0}
                  className={`w-full py-3.5 text-[0.65rem] tracking-[0.18em] uppercase font-semibold transition-all duration-200
                    ${selected.length > 0
                      ? 'bg-[#B5485A] text-white hover:bg-[#9A3048]'
                      : 'bg-[#E8E2D9] text-[#B0A89E] cursor-not-allowed'
                    }`}
                >
                  {selected.length > 0 ? 'Continue to Book' : 'Select a service first'}
                </button>
                {selected.length > 0 && (
                  <button
                    onClick={() => setSelected([])}
                    className="w-full mt-2 py-2 text-[0.62rem] tracking-[0.12em] uppercase font-medium text-[#6B5F58] hover:text-[#B5485A] transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fresha embed */}
      <div ref={freshaRef} className="px-6 md:px-14 pb-20">
        <div className="border-t border-[#E8E2D9] pt-10 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${selected.length > 0 ? 'bg-[#B5485A]' : 'bg-[#D4CDC6]'}`}>
              <span className="text-[0.6rem] text-white font-semibold">3</span>
            </div>
            <span className="text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-[#1A1410]">Pick a date &amp; time</span>
          </div>
          {selected.length > 0 && (
            <p className="text-[0.78rem] text-[#6B5F58] font-light ml-9">
              You&apos;ve selected {selected.length} service{selected.length !== 1 ? 's' : ''}
              {' '}({selected.map(s => s.name).join(', ')}).
              Re-select them in the calendar below to confirm.
            </p>
          )}
        </div>

        {/*
          ── FRESHA EMBED ─────────────────────────────────────────────────────
          1. Go to fresha.com → set up your salon
          2. Go to Setup → Online Booking → Booking Widget
          3. Copy the iframe src and replace YOUR-FRESHA-LINK below:

          <iframe
            src="https://www.fresha.com/YOUR-SALON/booking"
            className="w-full border-none"
            style={{ minHeight: '700px' }}
            title="Book an appointment"
          />
          ─────────────────────────────────────────────────────────────────────
        */}
        <div className="w-full flex flex-col items-center justify-center bg-white border border-dashed border-[#E8E2D9] min-h-[500px] gap-4 text-center p-8">
          <svg className="w-10 h-10 stroke-[#D4CDC6] fill-none" strokeWidth={1} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <div className="max-w-sm">
            <p className="text-[0.85rem] text-[#1A1410] font-light mb-2">Fresha booking calendar goes here</p>
            <p className="text-[0.75rem] text-[#B0A89E] font-light leading-relaxed">
              Sign up at fresha.com → create your salon → go to Setup → Online Booking → copy the widget link and drop it in as an iframe here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
