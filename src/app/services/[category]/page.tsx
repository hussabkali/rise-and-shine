'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/services-data';
import type { ServiceGroup } from '@/lib/services-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = use(params);
  const cat = CATEGORIES[category];

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAF7]">
        <div className="text-center">
          <p className="font-playfair text-2xl text-[#1A1410] mb-4">Category not found</p>
          <Link href="/" className="text-[#B5485A] text-sm tracking-widest uppercase">← Back</Link>
        </div>
      </div>
    );
  }

  const totalServices = cat.groups.reduce((acc, g) => acc + g.services.length, 0);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">

      {/* Page header — no image, pure typography */}
      <div className="pt-36 pb-16 px-6 md:px-14 border-b border-[#E8E2D9]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.18em] uppercase text-[#6B5F58] hover:text-[#B5485A] transition-colors mb-10 no-underline"
        >
          <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Services
        </Link>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[0.65rem] tracking-[0.22em] uppercase text-[#B5485A] font-medium mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#B5485A] inline-block" />
              Rise &amp; Shine
            </div>
            <h1 className="font-playfair text-[clamp(3rem,6vw,5.5rem)] font-normal text-[#1A1410] leading-[1]">
              {cat.title}
            </h1>
            <p className="text-[#6B5F58] text-[0.85rem] mt-3 tracking-[0.04em] font-light">{cat.sub}</p>
          </div>
          <div className="text-right">
            <div className="font-playfair text-[3rem] font-normal text-[#1A1410] leading-none">{totalServices}</div>
            <div className="text-[0.65rem] tracking-[0.14em] uppercase text-[#6B5F58] mt-1">services available</div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="px-6 md:px-14 py-14 space-y-0 divide-y divide-[#E8E2D9]">
        {cat.groups.map((group) => (
          <GroupSection key={group.id} group={group} />
        ))}
      </div>

      {/* Book CTA */}
      <div className="mx-6 md:mx-14 mb-20 bg-[#1A1410] px-10 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-[rgba(250,246,240,0.35)] mb-3">Ready when you are</p>
          <h2 className="font-playfair text-[clamp(1.6rem,2.5vw,2.4rem)] font-normal text-[#FAF6F0]">
            Reserve Your <em className="italic text-[#EDD9A3]">Visit</em>
          </h2>
        </div>
        <Link
          href="/#booking"
          className="flex-shrink-0 inline-block px-10 py-4 bg-[#B5485A] text-white text-[0.72rem] tracking-[0.15em] uppercase font-medium hover:bg-[#9A3048] transition-colors no-underline"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

/* ─── Accordion group section ─── */
function GroupSection({ group }: { group: ServiceGroup }) {
  const [open, setOpen] = useState(false);
  const hasChocolate = group.services.some(s => s.chocolate);
  const lowestPrice = [...group.services]
    .sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')))[0]?.price;

  return (
    <div>
      {/* Group header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-8 text-left cursor-pointer bg-transparent border-none group"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-playfair text-[1.6rem] md:text-[2rem] font-normal text-[#1A1410] group-hover:text-[#B5485A] transition-colors duration-300">
            {group.name}
          </span>
          {hasChocolate && (
            <span className="text-[0.58rem] tracking-[0.12em] uppercase bg-[#EDD9A3] text-[#856A3A] px-2 py-0.5 font-medium">
              Chocolate available
            </span>
          )}
        </div>

        <div className="flex items-center gap-6 flex-shrink-0 ml-8">
          <div className="text-right hidden md:block">
            <div className="text-[0.72rem] tracking-[0.08em] text-[#6B5F58]">
              {group.services.length} service{group.services.length !== 1 ? 's' : ''}
            </div>
            <div className="text-[0.7rem] text-[#B5485A] font-medium">from {lowestPrice}</div>
          </div>
          <div className={`w-8 h-8 border border-[#E8E2D9] flex items-center justify-center transition-all duration-300 flex-shrink-0 ${open ? 'bg-[#B5485A] border-[#B5485A]' : 'group-hover:border-[#B5485A]'}`}>
            <svg
              className={`w-3.5 h-3.5 fill-none transition-transform duration-300 ${open ? 'stroke-white rotate-180' : 'stroke-[#1A1410]'}`}
              strokeWidth={2} viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </button>

      {/* Expanded service list */}
      {open && (
        <div className="pb-10">
          {/* Service rows — no images, clean list */}
          <div className="divide-y divide-[#E8E2D9] border-t border-[#E8E2D9]">
            {group.services.map((svc) => (
              <div
                key={svc.name}
                className="flex items-center justify-between gap-6 py-5 group/row hover:bg-[#F5F0E8] transition-colors duration-200 px-4 -mx-4"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {svc.chocolate && (
                    <span className="flex-shrink-0 mt-0.5 text-[0.55rem] tracking-[0.1em] uppercase bg-[#EDD9A3] text-[#856A3A] px-1.5 py-0.5 font-medium">
                      Choc
                    </span>
                  )}
                  <div className="min-w-0">
                    <div className="font-playfair text-[1rem] font-normal text-[#1A1410]">{svc.name}</div>
                    <div className="text-[0.78rem] text-[#6B5F58] font-light mt-0.5 leading-relaxed">{svc.desc}</div>
                  </div>
                </div>

                <div className="flex items-center gap-5 flex-shrink-0">
                  <span className="font-playfair text-[1.1rem] font-normal text-[#1A1410]">{svc.price}</span>
                  <Link
                    href="/#booking"
                    className="text-[0.62rem] tracking-[0.14em] uppercase font-medium px-5 py-2.5 border border-[#1A1410] text-[#1A1410] no-underline hover:bg-[#B5485A] hover:border-[#B5485A] hover:text-white transition-all duration-200 opacity-0 group-hover/row:opacity-100"
                  >
                    Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
