import Link from 'next/link';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] pt-28 pb-20 px-6 md:px-14">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.18em] uppercase text-[#6B5F58] hover:text-[#B5485A] transition-colors mb-12 no-underline font-medium"
      >
        <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-[0.62rem] tracking-[0.24em] uppercase text-[#B5485A] font-semibold mb-5 flex items-center gap-3">
          <span className="w-6 h-px bg-[#B5485A] inline-block" />
          Rise &amp; Shine
        </div>
        <h1 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-light text-[#1A1410] leading-[1.05] mb-4">
          Book an <em className="italic">appointment</em>
        </h1>
        <p className="text-[0.88rem] text-[#6B5F58] font-light mb-12">
          Mon–Sat 9am–7pm &nbsp;·&nbsp; Sun 10am–5pm &nbsp;·&nbsp; Houston, TX
        </p>

        {/*
          ── CALENDLY EMBED ────────────────────────────────────────────────
          Replace the div below with your Calendly iframe once you have the link:

          <iframe
            src="https://calendly.com/YOUR-LINK"
            className="w-full border-none"
            style={{ minHeight: '700px' }}
          />
          ──────────────────────────────────────────────────────────────────
        */}
        <div className="w-full flex flex-col items-center justify-center bg-white border border-dashed border-[#E8E2D9] min-h-[600px] gap-4 text-center p-8">
          <svg className="w-10 h-10 stroke-[#D4CDC6] fill-none" strokeWidth={1} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <p className="text-[0.82rem] text-[#B0A89E] leading-[1.8] font-light max-w-sm">
            Add your Calendly link here.<br />
            Replace the placeholder div with the iframe above.
          </p>
        </div>
      </div>
    </div>
  );
}
