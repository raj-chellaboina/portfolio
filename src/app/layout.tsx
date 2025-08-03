import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Rajfolio | Chellaboina Yesu Raju',
  description: "A personal portfolio for Chellaboina Yesu Raju, a B.Tech student in AI & ML showcasing skills in backend and frontend development.",
  openGraph: {
    title: 'Rajfolio | Chellaboina Yesu Raju',
    description: 'Developer portfolio showcasing projects and skills in AI, ML, and Full-Stack Development.',
    url: 'https://rajfolio.com', // Replace with actual domain
    siteName: 'Rajfolio',
    images: [
      {
        url: '/og-image.png', // Replace with an actual OG image path in /public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
