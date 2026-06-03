'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/services-data';
import type { ServiceGroup } from '@/lib/services-data';
import { useScrollReveal } from '@/lib/useScrollReveal';

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = use(params);
  const cat = CATEGORIES[category];
  useScrollReveal();

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF7]">
        <div className="text-center">
          <p className="font-playfair text-2xl text-[#1A1410] mb-4 font-light">Category not found</p>
          <Link href="/" className="text-[0.72rem] tracking-[0.14em] uppercase text-[#B5485A]">← Back</Link>
        </div>
      </div>
    );
  }

  const totalServices = cat.groups.reduce((acc, g) => acc + g.services.length, 0);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">

      {/* Page header */}
      <div className="pt-28 md:pt-36 pb-10 md:pb-12 px-6 md:px-14 border-b border-[#E8E2D9]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.18em] uppercase text-[#6B5F58] hover:text-[#B5485A] transition-colors mb-10 no-underline font-medium"
        >
          <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Services
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#B5485A] inline-block" />
              Rise &amp; Shine
            </div>
            <h1 className="font-playfair text-[clamp(3rem,7vw,6rem)] font-light text-[#1A1410] leading-[0.95]">
              {cat.title}
            </h1>
            <p className="text-[0.82rem] text-[#6B5F58] mt-4 font-light tracking-wide">{cat.sub}</p>
          </div>
          <div className="md:text-right pb-1">
            <div className="font-playfair text-[3.5rem] font-light text-[#1A1410] leading-none">{totalServices}</div>
            <div className="text-[0.62rem] tracking-[0.16em] uppercase text-[#6B5F58] mt-1 font-medium">services</div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="px-6 md:px-14 py-10 md:py-14 space-y-10 md:space-y-14">
        {cat.groups.map((group, i) => (
          <GroupSection key={group.id} group={group} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="mx-6 md:mx-14 mb-20 bg-[#1A1410] px-8 md:px-16 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-[0.62rem] tracking-[0.22em] uppercase text-[rgba(250,246,240,0.35)] mb-2 font-medium">Ready when you are</p>
          <h2 className="font-playfair text-[clamp(1.6rem,2.5vw,2.2rem)] font-light text-[#FAF6F0]">
            Book your <em className="italic text-[#EDD9A3]">appointment</em>
          </h2>
        </div>
        <Link
          href="/book"
          className="flex-shrink-0 inline-block px-8 py-3.5 bg-[#B5485A] text-white text-[0.68rem] tracking-[0.18em] uppercase font-medium hover:bg-[#9A3048] transition-colors no-underline"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

/* ─── Group Section ─── */
function GroupSection({ group, index }: { group: ServiceGroup; index: number }) {
  const hasChocolate = group.services.some(s => s.chocolate);

  return (
    <div className={`sr d${Math.min(index + 1, 4)}`}>
      {/* Group label */}
      <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-[#E8E2D9]">
        <h2 className="font-playfair text-[1.5rem] md:text-[1.8rem] font-light text-[#1A1410]">{group.name}</h2>
        {hasChocolate && (
          <span className="text-[0.58rem] tracking-[0.12em] uppercase bg-[#EDD9A3] text-[#856A3A] px-2 py-0.5 font-semibold">
            Chocolate available
          </span>
        )}
        <span className="ml-auto text-[0.65rem] tracking-[0.12em] uppercase text-[#B8965A] font-medium">
          {group.services.length} services
        </span>
      </div>

      {/* Service cards — zoom in on scroll, staggered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {group.services.map((svc, si) => (
          <div
            key={svc.name}
            className={`sr-zoom d${Math.min((si % 6) + 1, 6)} group/card bg-white border border-[#E8E2D9] hover:border-[#B5485A] hover:shadow-[0_12px_40px_rgba(181,72,90,0.1)] hover:-translate-y-0.5 transition-all duration-300 p-6 flex flex-col justify-between min-h-[180px]`}
          >
            <div>
              <div className="flex items-start gap-2 mb-3">
                <h3 className="font-playfair text-[1rem] font-light text-[#1A1410] leading-snug flex-1">{svc.name}</h3>
                {svc.chocolate && (
                  <span className="flex-shrink-0 text-[0.52rem] tracking-[0.1em] uppercase bg-[#EDD9A3] text-[#856A3A] px-1.5 py-0.5 font-semibold mt-0.5">
                    Choc
                  </span>
                )}
              </div>
              <p className="text-[0.73rem] text-[#6B5F58] font-light leading-[1.7]">{svc.desc}</p>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="font-playfair text-[1.15rem] font-light text-[#1A1410]">{svc.price}</span>
              <Link
                href="/book"
                className="text-[0.6rem] tracking-[0.16em] uppercase font-semibold px-4 py-2 border border-[#E8E2D9] text-[#6B5F58] no-underline opacity-0 group-hover/card:opacity-100 group-hover/card:border-[#1A1410] group-hover/card:text-[#1A1410] hover:!bg-[#B5485A] hover:!border-[#B5485A] hover:!text-white transition-all duration-200"
              >
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
