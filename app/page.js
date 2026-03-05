import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Collections from './components/Collections';
import MobileBar from './components/MobileBar';

export default function Home() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Heritage />
      <Collections />
      <MobileBar />
    </main>
  );
}
