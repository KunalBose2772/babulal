import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Collections from './components/Collections';
import Brands from './components/Brands';
import Network from './components/Network';
import Trust from './components/Trust';
import Showroom from './components/Showroom';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';

export default function Home() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Heritage />
      <Collections />
      <Brands />
      <Network />
      <Trust />
      <Showroom />
      <FinalCTA />
      <Footer />
      <MobileBar />
    </main>
  );
}
