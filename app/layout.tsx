import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-d12bc052.vercel.app'),
  title: {
    default: 'Iceem.tn ? Engineering Excellence',
    template: '%s ? Iceem.tn'
  },
  description:
    'Iceem delivers modern engineering and digital solutions with measurable impact. Consulting, design, development, and integration for forward-thinking organizations.',
  openGraph: {
    title: 'Iceem.tn ? Engineering Excellence',
    description:
      'Modern engineering and digital solutions. Consulting, design, development, and integration.',
    url: 'https://agentic-d12bc052.vercel.app',
    siteName: 'Iceem.tn',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Iceem.tn ? Modern Engineering'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@iceemtn'
  },
  alternates: {
    canonical: '/' 
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
