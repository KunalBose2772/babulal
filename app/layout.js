import './globals.css';

export const metadata = {
  title: 'Babulal Premkumar | Eastern India\'s Premier Textile & Garment Distributor',
  description:
    'For over a century, Babulal Premkumar has been the most trusted wholesale and retail textile destination in Eastern India — serving 2,000+ retail partners with 11,700+ verified reviews.',
  keywords: 'Babulal Premkumar, textile distributor, Eastern India, wholesale garments, Ranchi, Raymond, Siyaram, menswear, bridal collections',
  openGraph: {
    title: 'Babulal Premkumar | 100+ Years of Textile Legacy',
    description: 'Eastern India\'s most trusted textile & garment destination since over a century.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
