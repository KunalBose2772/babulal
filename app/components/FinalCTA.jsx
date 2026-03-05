'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function FinalCTA() {
    return (
        <section style={{ background: '#0D0D0D', position: 'relative', overflow: 'hidden' }} id="cta">
            {/* Textile grain */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
                opacity: 0.03,
                backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 3px,#C6A75C 3px,#C6A75C 4px),repeating-linear-gradient(90deg,transparent,transparent 3px,#C6A75C 3px,#C6A75C 4px)`,
                backgroundSize: '8px 8px',
            }} />

            <div style={{
                position: 'relative', zIndex: 1,
                maxWidth: '1400px', margin: '0 auto',
                padding: '120px 40px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            }}>

                {/* Gold divider */}
                <motion.div
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    style={{ width: 100, height: 2, background: '#C6A75C', marginBottom: 36, transformOrigin: 'center' }}
                />

                {/* Headline */}
                <motion.h2 {...fadeUp(0.15)} style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2rem, 3.5vw, 46px)',
                    fontWeight: 700, color: '#ffffff',
                    lineHeight: 1.2, letterSpacing: '-0.02em',
                    maxWidth: 720, margin: '0 0 22px',
                }}>
                    A Legacy That Continues<br />to Inspire Generations
                </motion.h2>

                {/* Sub */}
                <motion.p {...fadeUp(0.25)} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 'clamp(0.82rem, 1.1vw, 1rem)',
                    fontWeight: 300, color: 'rgba(245,245,245,0.55)',
                    lineHeight: 1.9, maxWidth: 560, margin: '0 0 44px',
                }}>
                    Discover the finest fabrics, trusted brand partnerships, and a century
                    of textile expertise — all at Babulal Premkumar, Ranchi.
                </motion.p>

                {/* Buttons */}
                <motion.div {...fadeUp(0.35)} style={{
                    display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
                }}>
                    <a href="#collections" style={{
                        fontFamily: "'Montserrat', sans-serif", fontSize: '0.63rem',
                        fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase',
                        color: '#fff', background: '#E21E26', padding: '14px 32px',
                        borderRadius: 5, border: '1.5px solid #E21E26',
                        textDecoration: 'none', transition: 'all 0.3s ease',
                        display: 'inline-block',
                    }}
                        onMouseEnter={e => { e.target.style.background = '#c51c23'; e.target.style.borderColor = '#c51c23'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 22px rgba(226,30,38,0.35)'; }}
                        onMouseLeave={e => { e.target.style.background = '#E21E26'; e.target.style.borderColor = '#E21E26'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                    >
                        Explore Our Collections
                    </a>
                    <a href="#contact" style={{
                        fontFamily: "'Montserrat', sans-serif", fontSize: '0.63rem',
                        fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase',
                        color: '#C6A75C', background: 'transparent', padding: '14px 32px',
                        borderRadius: 5, border: '1.5px solid #C6A75C',
                        textDecoration: 'none', transition: 'all 0.3s ease',
                        display: 'inline-block',
                    }}
                        onMouseEnter={e => { e.target.style.background = '#C6A75C'; e.target.style.color = '#0D0D0D'; e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 22px rgba(198,167,92,0.28)'; }}
                        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#C6A75C'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                    >
                        Visit Our Showroom
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
