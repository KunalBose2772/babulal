'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Collections', href: '#collections' },
    { label: 'Brand Partners', href: '#brands' },
    { label: 'Wholesale', href: '#wholesale' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.45s ease, backdrop-filter 0.45s ease, border-color 0.45s ease;
        }
        .navbar.scrolled {
          background: #ffffff;
          backdrop-filter: none;
          border-bottom: 1px solid rgba(198,167,92,0.25);
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .navbar.top {
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nav-logo img {
          height: 56px;
          width: auto;
          object-fit: contain;
          display: block;
          transition: filter 0.45s ease;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .nav-links a {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245,245,245,0.80);
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .navbar.scrolled .nav-links a {
          color: rgba(30,20,10,0.75);
        }
        .navbar.scrolled .nav-links a:hover {
          color: #C6A75C !important;
        }
        .nav-links a:hover { color: #C6A75C; }
        .nav-cta {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          background: #1F5E8C;
          padding: 11px 24px;
          border-radius: 3px;
          border: 1px solid #1F5E8C;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .nav-cta:hover {
          background: #174d76;
          transform: translateY(-1px);
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #ffffff;
          transition: all 0.3s ease;
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 0; right: 0;
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(198,167,92,0.15);
          z-index: 999;
          padding: 24px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mobile-menu a {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245,245,245,0.75);
          transition: color 0.25s ease;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-menu a:hover { color: #C6A75C; }
        .mobile-menu .mobile-cta {
          display: inline-block;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          background: #1F5E8C;
          padding: 14px 24px;
          border-radius: 3px;
          margin-top: 8px;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
          .navbar-inner { padding: 0 20px; height: 64px; }
        }
      `}</style>

            <header className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
                <div className="navbar-inner">

                    {/* Logo — white when transparent, original colors when scrolled */}
                    <a href="/" className="nav-logo">
                        <img
                            src="/babulal_logo.png"
                            alt="Babulal Premkumar"
                            style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav>
                        <ul className="nav-links">
                            {navLinks.map(l => (
                                <li key={l.label}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </nav>

                    {/* Desktop CTA */}
                    <a href="#contact" className="nav-cta">Visit Showroom</a>

                    {/* Mobile Hamburger */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
                        <span style={{ opacity: menuOpen ? 0 : 1 }} />
                        <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
                    </button>

                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        {navLinks.map(l => (
                            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
                        ))}
                        <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Visit Showroom</a>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}
