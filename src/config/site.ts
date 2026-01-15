export const SITE = {
  name: 'Mumbai Swaad',
  title: 'Mumbai Swaad | Auténtica Comida India en Madrid',
  description:
    'Experimenta los auténticos sabores de la cocina callejera y tradicional de Mumbai en el corazón de Madrid.',
  url: 'https://mumbaiswaad.es',
  twitterHandle: '@mumbaiswaad',
  socials: {
    twitter: 'https://twitter.com/mumbaiswaad',
    instagram: 'https://instagram.com/mumbaiswaad',
    facebook: 'https://facebook.com/mumbaiswaad',
  },
  image: {
    src: '/favicon.svg',
    alt: 'Mumbai Swaad logo',
  },
} as const;

export type SiteConfig = typeof SITE;
