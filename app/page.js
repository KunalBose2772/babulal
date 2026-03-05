import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MobileBar from './components/MobileBar';

export default function Home() {
  return (
    <main style={{ background: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <MobileBar />
    </main>
  );
}
