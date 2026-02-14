import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Deshi Home Decor',
    short_name: 'Deshi Home',
    description:
      'Premium bamboo, rattan, seagrass, jute and imported home decor. Handcrafted and eco-friendly lighting and decor for your space.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0a0a0a',
    theme_color: '#D4AF37',
    categories: ['shopping', 'lifestyle'],
    icons: [
      { src: '/logo/favicon.ico', sizes: 'any', type: 'image/x-icon', purpose: 'any' },
      { src: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png', purpose: 'any' },
      { src: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png', purpose: 'any' },
      { src: '/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
      { src: '/logo/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/logo/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/logo/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/logo/logo.png', sizes: 'any', type: 'image/png', purpose: 'any' },
    ],
  };
}
