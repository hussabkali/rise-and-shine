export interface Service {
  name: string;
  price: string;
  desc: string;
  img: string;
  chocolate?: boolean;
}

export interface ServiceGroup {
  id: string;
  name: string;
  img: string;
  services: Service[];
}

export interface CategoryData {
  title: string;
  titleItalic: string;
  sub: string;
  heroImg: string;
  cardImg: string;
  count: number;
  groups: ServiceGroup[];
}

export const CATEGORIES: Record<string, CategoryData> = {
  threading: {
    title: 'Threading',
    titleItalic: 'Threading',
    sub: 'Precision eyebrow & facial hair removal',
    heroImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=85',
    cardImg: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    count: 12,
    groups: [
      {
        id: 'brows',
        name: 'Eyebrows',
        img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
        services: [
          { name: 'Eyebrows Threading', price: '$10', desc: 'Classic precision thread shaping for perfectly defined brows.', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
          { name: "Men's Eyebrow Threading", price: '$12', desc: 'Clean-up and shaping for men — subtle, natural, defined.', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80' },
          { name: 'Eyebrow Thread & Tint', price: '$22', desc: 'Thread + tint combo for defined, colored brows that last weeks.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
          { name: 'Eyebrow Tint', price: '$15', desc: 'Professional brow tinting for deeper, bolder, long-lasting color.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
        ],
      },
      {
        id: 'face',
        name: 'Face Threading',
        img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        services: [
          { name: 'Full Face Threading', price: '$25', desc: 'Complete facial thread hair removal including brows, upper lip, chin & sides.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
          { name: 'Upper Lip Threading', price: '$5', desc: 'Quick and gentle upper lip hair removal using cotton thread.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
          { name: 'Chin Threading', price: '$6', desc: 'Precise chin hair removal — smooth, clean results in minutes.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
          { name: 'Sides Threading', price: '$8', desc: 'Side face & sideburn threading for a polished, clean look.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
          { name: 'Neck & Cheeks Threading', price: '$10', desc: 'Removes fine hair from neck and cheek areas for flawless skin.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
          { name: 'Nose Threading', price: '$8', desc: 'Removes unwanted nose hair quickly and cleanly.', img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80' },
          { name: 'Back of Neck', price: '$20', desc: 'Neck line cleanup and hair removal for a neat finish.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
        ],
      },
      {
        id: 'combos',
        name: 'Combo Packages',
        img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
        services: [
          { name: 'Eyebrow + Chin + Upper Lip', price: '$18', desc: 'Popular combo — brows, chin, and upper lip in one visit.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
        ],
      },
    ],
  },

  waxing: {
    title: 'Waxing',
    titleItalic: 'Waxing',
    sub: 'Smooth, long-lasting hair removal',
    heroImg: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=85',
    cardImg: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    count: 18,
    groups: [
      {
        id: 'face',
        name: 'Face Waxing',
        img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        services: [
          { name: 'Eyebrow Waxing', price: '$12', desc: 'Wax shaping and definition for clean, arched brows.', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
          { name: 'Upper Lip Waxing', price: '$8', desc: 'Quick and effective upper lip waxing for smooth skin.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
          { name: 'Chin Wax', price: '$7', desc: 'Precise chin waxing for clean, smooth results.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
          { name: 'Chin and Neck Waxing', price: '$16', desc: 'Thorough chin and neck waxing for long-lasting smoothness.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
          { name: 'Sideburns Waxing', price: '$10', desc: 'Clean sideburn removal for a polished facial profile.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
          { name: 'Full Face Waxing', price: '$35', desc: 'Complete facial wax for smooth, hair-free skin.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
        ],
      },
      {
        id: 'arms',
        name: 'Arms & Underarms',
        img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
        services: [
          { name: 'Underarms Waxing', price: '$15', desc: 'Smooth underarm waxing for up to 4–6 weeks of hair-free skin.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
          { name: 'Half Arms Waxing', price: '$25', desc: 'Half arm waxing from elbow down for silky smooth skin.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
          { name: 'Full Arms Waxing', price: '$40', desc: 'Complete arm waxing from wrist to shoulder.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
        ],
      },
      {
        id: 'legs',
        name: 'Legs',
        img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        services: [
          { name: 'Half Legs Waxing', price: '$35', desc: 'Smooth half-leg waxing from knee down.', img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80' },
          { name: 'Full Legs Waxing', price: '$55', desc: 'Full leg waxing from ankle to hip — silky, long-lasting results.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
          { name: 'Chocolate Wax Half Leg', price: '$35', desc: 'Nourishing chocolate wax for the lower leg — smooth and moisturized.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80', chocolate: true },
          { name: 'Chocolate Wax Full Leg', price: '$45', desc: 'Premium chocolate wax treatment for silky full-leg results.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', chocolate: true },
        ],
      },
      {
        id: 'bikini',
        name: 'Bikini',
        img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        services: [
          { name: 'Bikini Line Waxing', price: '$25', desc: 'Gentle bikini line waxing for a clean, smooth finish.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
          { name: 'Brazilian Wax', price: '$40', desc: 'Complete bikini area waxing for up to 6 weeks of smoothness.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
          { name: 'Chocolate Brazilian Wax', price: '$45', desc: 'Luxurious chocolate wax bikini removal — gentler on sensitive skin.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', chocolate: true },
        ],
      },
      {
        id: 'back-body',
        name: 'Back & Full Body',
        img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
        services: [
          { name: 'Full Back Waxing', price: '$50', desc: 'Complete back hair removal — professional, thorough, effective.', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80' },
          { name: 'Full Body Wax', price: '$130', desc: 'Head-to-toe waxing for completely smooth, hair-free skin.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
        ],
      },
    ],
  },

  hair: {
    title: 'Hair & Color',
    titleItalic: 'Hair',
    sub: 'Transformative cuts, color & treatments',
    heroImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=85',
    cardImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    count: 22,
    groups: [
      {
        id: 'color',
        name: 'Color & Highlights',
        img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
        services: [
          { name: 'Hair Color', price: 'From $60', desc: 'Rich, vibrant single-process color applied by expert colorists.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
          { name: 'Full Hair Color', price: 'From $80', desc: 'Full head color application for a complete, even tone transformation.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
          { name: 'Hair Retouch', price: 'From $45', desc: 'Root touch-up to refresh color and cover new growth seamlessly.', img: 'https://images.unsplash.com/photo-1603132809971-b1db99d7a0fb?w=600&q=80' },
          { name: 'Highlights', price: 'From $70', desc: 'Sun-kissed, dimensional highlights for depth and movement.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
        ],
      },
      {
        id: 'treatments',
        name: 'Smoothing & Treatments',
        img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80',
        services: [
          { name: 'Keratin Treatment', price: 'From $150', desc: 'Smoothing keratin treatment for frizz-free, glossy, manageable hair.', img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80' },
          { name: 'Brazilian Blowout', price: '$375', desc: 'Premium smoothing treatment for straighter, shinier, healthier hair.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
          { name: 'Hair Botox', price: 'From $120', desc: 'Deep conditioning treatment that rebuilds hair structure from within.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
          { name: 'Hair Smoothening', price: '$100', desc: 'Semi-permanent smoothing for frizz control and manageability.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
          { name: 'Hair Spa (45 min)', price: 'From $60', desc: 'Relaxing spa treatment with deep conditioning and scalp massage.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
          { name: 'Hair Deep Conditioning', price: 'From $35', desc: 'Intensive moisture treatment to repair damage and restore softness.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
        ],
      },
      {
        id: 'cuts',
        name: 'Cuts & Styling',
        img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
        services: [
          { name: 'Hair Cut — Straight', price: 'From $40', desc: 'Clean, precise straight cut with detailed finish and blowout.', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80' },
          { name: 'Hair Cut — Layers', price: 'From $50', desc: 'Dynamic layered cut for volume, movement and dimension.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
          { name: 'Hair Cut — U-Cut', price: 'From $45', desc: 'Classic U-shape cut for a soft, rounded feminine silhouette.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
          { name: 'Hair Cut — Step Cut', price: 'From $50', desc: 'Modern step cut for structured layers and defined texture.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
          { name: "Men's Haircut", price: 'From $25', desc: 'Clean, styled men\'s cut — classic or contemporary finish.', img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80' },
          { name: "Kid's Haircut (Under 12)", price: 'From $20', desc: 'Gentle, patient haircuts for little ones — fun and stress-free.', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
          { name: 'Hair Wash & Blow Dry', price: 'From $30', desc: 'Luxurious wash, condition, and professional blowout finish.', img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80' },
          { name: 'Hair Straightening', price: 'From $40', desc: 'Sleek, smooth straightening service for silky, frizz-free results.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
          { name: 'Hair Curls', price: 'From $45', desc: 'Beautiful curls and waves styled to perfection for any occasion.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
        ],
      },
      {
        id: 'scalp',
        name: 'Scalp & Lash',
        img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        services: [
          { name: 'Scalp Treatment w/ Massage', price: 'From $50', desc: 'Targeted scalp treatment with nourishing oils and relaxing massage.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
          { name: 'Hair Oil Massage', price: 'From $35', desc: 'Traditional hot oil massage to strengthen roots and boost shine.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
          { name: 'Eyelash Lifting', price: 'From $65', desc: 'Lash lift treatment for naturally curled, lifted lashes without extensions.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
        ],
      },
    ],
  },

  facials: {
    title: 'Facials',
    titleItalic: 'Facials',
    sub: 'Glow-inducing skin treatments',
    heroImg: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1600&q=85',
    cardImg: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    count: 10,
    groups: [
      {
        id: 'classic',
        name: 'Classic Facials',
        img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
        services: [
          { name: 'Facial (20 mins)', price: 'From $30', desc: 'Express facial with cleanse, tone, and moisturize for an instant glow.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
          { name: 'Facial (40 mins)', price: 'From $50', desc: 'Extended facial using advanced techniques for deep cleanse and nourishment.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
          { name: 'Facial Clean-Up', price: 'From $40', desc: 'Deep cleansing facial to remove impurities and refresh your complexion.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
          { name: 'Facial Bleach', price: 'From $25', desc: 'Gentle brightening treatment to lighten and unify skin tone.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
        ],
      },
      {
        id: 'advanced',
        name: 'Advanced Treatments',
        img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
        services: [
          { name: 'D-Tan Golden Facial', price: '$75', desc: 'De-tanning facial with golden ingredients to restore natural radiance.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
          { name: 'Hydro Facial', price: 'From $80', desc: 'Hydradermabrasion facial for deep cleansing, exfoliation, and hydration.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
          { name: 'Derma Planning Facial', price: '$75', desc: 'Dermaplaning to remove dead skin and fine vellus hair for silky smooth skin.', img: 'https://images.unsplash.com/photo-1603132809971-b1db99d7a0fb?w=600&q=80' },
          { name: 'Micro Derma Machine Facial', price: 'From $85', desc: 'Microdermabrasion facial using advanced equipment for skin renewal.', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80' },
          { name: 'Machine Facial', price: 'From $65', desc: 'Technology-assisted facial treatment for targeted skin concerns.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
        ],
      },
      {
        id: 'bridal-facial',
        name: 'Bridal',
        img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
        services: [
          { name: 'Bridal Facial Clean-Up', price: '$100', desc: 'Special pre-wedding facial for a radiant, camera-ready glow on your big day.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
        ],
      },
    ],
  },

  wellness: {
    title: 'Wellness & More',
    titleItalic: 'Wellness',
    sub: 'Massage, reiki, makeup & henna',
    heroImg: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=85',
    cardImg: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    count: 15,
    groups: [
      {
        id: 'massage',
        name: 'Massage',
        img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
        services: [
          { name: 'Full Body Massage', price: 'From $80', desc: 'Relaxing full body massage to melt away tension and restore balance.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
          { name: 'Face Massage', price: 'From $35', desc: 'Revitalizing facial massage to improve circulation and reduce puffiness.', img: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80' },
          { name: 'Massage — Hands', price: 'From $25', desc: 'Relaxing hand and wrist massage for stress relief and softening.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
        ],
      },
      {
        id: 'reiki',
        name: 'Reiki',
        img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=800&q=80',
        services: [
          { name: 'Reiki (30 mins)', price: 'From $50', desc: '30-minute energy healing session to restore inner harmony and calm.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
          { name: 'Reiki (45 mins)', price: 'From $70', desc: 'Extended reiki session for deeper energy balancing and restoration.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
          { name: 'Reiki (60 mins)', price: 'From $90', desc: 'Full one-hour reiki treatment — the ultimate energy healing experience.', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80' },
        ],
      },
      {
        id: 'scrubs',
        name: 'Body Scrubs',
        img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80',
        services: [
          { name: 'Body Scrub', price: '$125', desc: 'Full body exfoliation scrub leaving skin radiant, soft, and refreshed.', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80' },
          { name: 'Scrub — Legs', price: 'From $45', desc: 'Deep exfoliating leg scrub for silky smooth, glowing skin.', img: 'https://images.unsplash.com/photo-1603132809971-b1db99d7a0fb?w=600&q=80' },
          { name: 'Scrub — Stomach', price: 'From $40', desc: 'Toning stomach scrub treatment to smooth and brighten skin.', img: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&q=80' },
          { name: 'Scrub — Full Back', price: 'From $50', desc: 'Back scrub to exfoliate, cleanse, and leave skin smooth and clear.', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80' },
        ],
      },
      {
        id: 'beauty',
        name: 'Makeup, Lashes & Henna',
        img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
        services: [
          { name: 'Bridal Make-Up', price: '$170', desc: 'Flawless bridal makeup by expert artists — long-lasting, luminous perfection.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80' },
          { name: 'Party Make-Up & Hairstyle', price: 'From $120', desc: 'Full glam look — makeup and hairstyle combo for any special occasion.', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80' },
          { name: 'Henna Tattoos', price: 'From $30', desc: 'Intricate traditional and contemporary henna designs by skilled artists.', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80' },
          { name: 'Cluster Eyelashes', price: '$50', desc: 'Fuller, dramatic lash clusters for a glamorous, enhanced eye look.', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80' },
          { name: 'Eyelash Lifting', price: 'From $65', desc: 'Natural lash lift for beautifully curled lashes without extensions.', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80' },
        ],
      },
    ],
  },
};

export const CATEGORY_ORDER = ['threading', 'waxing', 'hair', 'facials', 'wellness'];
