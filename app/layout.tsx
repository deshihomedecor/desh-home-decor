import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/components/react-query-provider';
import { CartProvider } from '@/lib/cart-context';
import { PWARegister } from '@/components/pwa-register';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const hindSiliguri = Hind_Siliguri({
  variable: '--font-hind-siliguri',
  subsets: ['latin', 'bengali'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'https://deshihomedecor.com',
  ),
  title: 'Deshi Home Decor - Premium Home Lighting & Decor',
  description:
    'Discover Deshi Home Decor’s curated collection of handcrafted Bengali-inspired lighting and home decor pieces that bring a warm, luxurious ambiance to your space.',
  keywords: [
    'Deshi Home Decor',
    'home decor',
    'lighting',
    'lamps',
    'Bangladeshi decor',
    'Bengali decor',
    'premium lighting',
  ],
  openGraph: {
    title: 'Deshi Home Decor - Premium Home Lighting & Decor',
    description:
      'Explore handcrafted lighting and decor inspired by Bengali craftsmanship to transform your home with warm, luxurious light.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Deshi Home Decor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deshi Home Decor - Premium Home Lighting & Decor',
    description:
      'Explore handcrafted lighting and decor inspired by Bengali craftsmanship to transform your home with warm, luxurious light.',
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#D4AF37',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Deshi Home Decor',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMQHMMMJ');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${hindSiliguri.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMQHMMMJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <PWARegister />
        <ReactQueryProvider>
          <CartProvider>
            {children}
            <Toaster position="top-center" richColors />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
