import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blue Peak Innovations',
  icons: {
    icon: '/favicon.png',
  },
  description:
    'Welcome to our High Performance Flat and Thin Wind Turbine product page! Our innovative wind turbine design addresses the major challenges facing the wind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextTopLoader />
        <main>{children}</main>
      </body>
    </html>
  );
}
