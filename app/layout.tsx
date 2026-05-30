import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Catalina Pools AZ — Pool Build, Remodel & Service in Gilbert, AZ',
  description:
    'Family-owned pool contractor in Gilbert, AZ. New builds, remodels, weekly service, and equipment repair across the East Valley. Licensed, bonded, insured.',
  metadataBase: new URL('https://catalina-pools.aydenbuilds.com'),
  openGraph: {
    title: 'Catalina Pools AZ — Pool Build, Remodel & Service in Gilbert',
    description:
      'New builds, remodels, weekly service, and equipment repair across the East Valley. Licensed, bonded, and locally owned.',
    images: ['/og.jpg'],
    type: 'website',
  },
  icons: {
    icon: 'https://catalinapoolsaz.com/wp-content/uploads/2021/05/Logo.png',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SwimmingPoolContractor',
  name: 'Catalina Pools AZ, LLC',
  image: 'https://catalinapoolsaz.com/wp-content/uploads/2021/05/Logo.png',
  url: 'https://catalina-pools.aydenbuilds.com',
  telephone: '+14803614462',
  email: 'info@catalinapoolsaz.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '70 S Val Vista Dr., Ste. A3-218',
    addressLocality: 'Gilbert',
    addressRegion: 'AZ',
    postalCode: '85296',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.353,
    longitude: -111.738,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '00:00',
      closes: '00:00',
      description: 'By appointment',
    },
  ],
  areaServed: ['Gilbert', 'Mesa', 'Chandler', 'Queen Creek', 'Scottsdale', 'San Tan Valley', 'Tempe'],
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/catalinapoolsazllc/',
    'https://www.instagram.com/catalinapoolsaz/',
    'https://www.youtube.com/channel/UCMts6hm1D-tSjmwQpqFdgrA',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
