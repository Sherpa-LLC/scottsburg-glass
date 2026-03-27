export const config = {
  business: {
    name: 'Scottsburg Glass Inc.',
    slug: 'scottsburg-glass',
    tagline: 'Expert Glass Services in Southern Indiana',
    description: 'Scottsburg Glass Inc. has served Southern Indiana for over 40 years, specializing in residential and commercial window replacement, door installation, and new construction glass services.',
    yearFounded: 1984,
    owner: 'Melanie & Joe',
  },

  contact: {
    phone: '(812) 752-4007',
    phoneRaw: '+18127524007',
    email: 'scottsburgglass@gmail.com',
    address: {
      street: '250 S. Railroad St.',
      city: 'Scottsburg',
      state: 'IN',
      zip: '47170',
      country: 'US',
    },
    coordinates: { lat: 38.6856, lng: -85.7722 },
  },

  hours: {
    monday: '8:00 AM - 5:00 PM',
    tuesday: '8:00 AM - 5:00 PM',
    wednesday: '8:00 AM - 5:00 PM',
    thursday: '8:00 AM - 5:00 PM',
    friday: '8:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },

  services: [
    {
      name: 'Window Replacement',
      slug: 'window-replacement',
      shortDescription: 'Fast, reliable residential and commercial window replacements to improve energy efficiency, security, and curb appeal.',
    },
    {
      name: 'Door Replacement',
      slug: 'door-replacement',
      shortDescription: 'Professional commercial and residential door installations including steel, aluminum storefront, and automatic sliding doors.',
    },
    {
      name: 'New Construction Glass',
      slug: 'new-construction-glass',
      shortDescription: 'Comprehensive glass solutions for new construction projects, from curtain walls to custom storefront systems.',
    },
    {
      name: 'Storefront Glass',
      slug: 'storefront-glass',
      shortDescription: 'Custom storefront glass installations and replacements for commercial businesses throughout Southern Indiana.',
    },
    {
      name: 'Mirrors & Specialty Glass',
      slug: 'mirrors-specialty-glass',
      shortDescription: 'Custom mirrors, gym mirror walls, interior glass features, and specialty glazing for residential and commercial applications.',
    },
  ],

  serviceAreas: {
    primary: ['Scottsburg', 'Seymour', 'Columbus', 'Madison'],
    secondary: ['Salem', 'Charlestown', 'New Albany', 'Jeffersonville', 'Sellersburg', 'Paoli', 'Austin', 'Crothersville'],
  },

  seo: {
    siteUrl: 'https://scottsburg-glass.pages.dev',
    titleTemplate: '%s | Scottsburg Glass Inc.',
    defaultTitle: 'Scottsburg Glass Inc. — Expert Glass Services in Southern Indiana',
    defaultDescription: 'Scottsburg Glass Inc. has served Southern Indiana for over 40 years. Window replacement, door installation, new construction glass, storefront systems, and mirrors. Call (812) 752-4007.',
    defaultImage: '/images/logo.svg',
  },

  schema: {
    type: 'HomeAndConstructionBusiness' as const,
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card'],
    sameAs: [
      'https://www.facebook.com/Scottsburgglass/',
      'https://www.instagram.com/',
    ] as string[],
    aggregateRating: { value: 5.0, count: 47, best: 5 },
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  cta: {
    primary: {
      label: 'Request an Estimate',
      href: '/contact',
    },
    phone: {
      label: 'Call (812) 752-4007',
      href: 'tel:+18127524007',
    },
  },

  testimonials: [
    {
      quote: 'I got a very good deal on replacement glass compared to Madison Indiana. The staff are friendly and knowledgeable.',
      author: 'Juanita Combs',
      location: 'Scottsburg, IN',
    },
    {
      quote: 'Love our new windows from Scottsburg Glass! Solid product, good value and fantastic service. Give Melanie and Joe a call!',
      author: 'Bob Ward',
      location: 'Southern Indiana',
    },
    {
      quote: 'We at Lyons Roofing have used Scottsburg Glass for sometime... They do great work! Thanks so much for all you do.',
      author: 'Deedee Lyons',
      location: 'Memphis, IN',
    },
  ],
} as const;

export type Config = typeof config;
