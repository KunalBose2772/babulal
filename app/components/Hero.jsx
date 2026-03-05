'use client';

import { motion } from 'framer-motion';

const metrics = [
    { value: '100+', label: 'Years', sub: 'of Legacy' },
    { value: '2000+', label: 'Partners', sub: 'Retail Network' },
    { value: '6', label: 'States', sub: 'Served' },
    { value: '4.9★', label: 'Rating', sub: 'Customer Score' },
];

const fade = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
    return (
        <>
            <style>{`
        /* ─────────────────────────────────────────
           HERO WRAPPER
        ───────────────────────────────────────── */
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ─── Video ─── */
        .hero__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        /* ─── Cinematic overlay ─── */
        .hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            rgba(10,10,10,0.90) 0%,
            rgba(10,10,10,0.68) 40%,
            rgba(10,10,10,0.28) 100%
          );
        }

        /* ─── Subtle fabric texture ─── */
        .hero__texture {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.035;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px);
          background-size: 6px 6px;
          pointer-events: none;
        }

        /* ─── Warm gold flare top-right ─── */
        .hero__flare {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 55%;
          height: 80%;
          z-index: 2;
          background: radial-gradient(ellipse at 80% 30%, rgba(198,167,92,0.10) 0%, transparent 65%);
          pointer-events: none;
        }

        /* ─── Body fills height, vertically centers ─── */
        .hero__body {
          position: relative;
          z-index: 3;
          flex: 1;
          display: flex;
          align-items: center;
          padding-top: 76px;
        }

        /* ─── Inner container ─── */
        .hero__inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 32px 64px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        /* ─────────────────────────────────────────
           TYPOGRAPHY
        ───────────────────────────────────────── */

        /* Gold label */
        .hero__label {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: #C6A75C;
        }
        .hero__label-bar {
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #C6A75C;
          flex-shrink: 0;
        }

        /* Headline line 1 – medium */
        .h1-line1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 2.8vw, 2.8rem);
          font-weight: 600;
          color: rgba(255,255,255,0.82);
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* Headline line 2 – hero line (largest) */
        .h1-line2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4.2vw, 4.4rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.05;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* Headline line 3 – italic */
        .h1-line3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 2.6vw, 2.6rem);
          font-weight: 400;
          font-style: italic;
          color: #EFE6D3;
          line-height: 1.15;
          margin: 0;
          letter-spacing: 0em;
        }

        /* Divider */
        .hero__divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #E21E26, #C6A75C);
          transform-origin: left;
        }

        /* Subtext */
        .hero__sub {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.8rem, 1vw, 0.9rem);
          font-weight: 300;
          color: rgba(245,245,245,0.60);
          line-height: 1.88;
          max-width: 520px;
          margin: 0;
          letter-spacing: 0.01em;
        }

        /* ─────────────────────────────────────────
           BUTTONS
        ───────────────────────────────────────── */
        .hero__ctas {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.64rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: #E21E26;
          padding: 14px 32px;
          border-radius: 5px;
          border: 1.5px solid #E21E26;
          cursor: pointer;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: #c11a20;
          border-color: #c11a20;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(226,30,38,0.35);
        }

        .btn-secondary {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.64rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: rgba(255,255,255,0.06);
          padding: 14px 32px;
          border-radius: 5px;
          border: 1px solid #1F5E8C;
          cursor: pointer;
          display: inline-block;
          white-space: nowrap;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .btn-secondary:hover {
          background: #1F5E8C;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(31,94,140,0.35);
        }

        /* ─────────────────────────────────────────
           METRICS
        ───────────────────────────────────────── */
        .hero__metrics {
          display: flex;
          align-items: stretch;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 22px;
          gap: 0;
        }
        .metric {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding-right: 28px;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .metric:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }
        .metric__val {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #C6A75C;
          line-height: 1;
          white-space: nowrap;
        }
        .metric__lbl {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.80);
        }
        .metric__sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.48rem;
          font-weight: 300;
          color: rgba(245,245,245,0.35);
          letter-spacing: 0.03em;
        }

        /* ─────────────────────────────────────────
           SCROLL INDICATOR
        ───────────────────────────────────────── */
        .hero__scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .hero__scroll p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.48rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(245,245,245,0.45);
          white-space: nowrap;
        }

        /* ═════════════════════════════════════════
           MOBILE  ≤ 767px
        ═════════════════════════════════════════ */
        @media (max-width: 767px) {
          .hero__body {
            padding-top: 64px;
            align-items: stretch;
          }

          .hero__inner {
            flex: 1;
            justify-content: center;
            min-height: calc(100svh - 64px);
            padding: 28px 22px 100px;
            gap: 14px;
          }

          /* Hide label on mobile */
          .hero__label { display: none; }

          .h1-line1 { font-size: clamp(1.2rem, 5vw, 1.5rem); }
          .h1-line2 { font-size: clamp(1.8rem, 7.5vw, 2.4rem); }
          .h1-line3 { font-size: clamp(1.1rem, 4.5vw, 1.4rem); }

          .hero__sub {
            font-size: 0.8rem;
            max-width: 100%;
            line-height: 1.72;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Stack buttons */
          .hero__ctas {
            flex-direction: column;
            gap: 9px;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
            padding: 13px 16px;
          }

          /* 2×2 grid – proper gaps */
          .hero__metrics {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px 0;
            padding-top: 18px;
          }
          .metric {
            border-right: none;
            padding-right: 0;
            margin-right: 0;
          }
          .metric__val { font-size: 1.1rem; }
          .metric__lbl { font-size: 0.55rem; }
          .metric__sub { font-size: 0.48rem; }

          .hero__scroll { display: none; }
          .hero__flare { display: none; }
        }
      `}</style>

            <section className="hero">

                {/* Video */}
                <video autoPlay muted loop playsInline className="hero__video">
                    <source src="/Babulal_hero.mp4" type="video/mp4" />
                </video>

                {/* Layers */}
                <div className="hero__overlay" />
                <div className="hero__texture" />
                <div className="hero__flare" />

                {/* Body */}
                <div className="hero__body">
                    <div className="hero__inner">

                        {/* Gold label */}
                        <motion.div className="hero__label" {...fade(0.1)}>
                            <span className="hero__label-bar" />
                            Established Over a Century Ago
                            <span className="hero__label-bar" />
                        </motion.div>

                        {/* 3-line headline */}
                        <div>
                            <div style={{ overflow: 'hidden' }}>
                                <motion.p className="h1-line1"
                                    initial={{ y: '100%' }} animate={{ y: '0%' }}
                                    transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    Weaving the Fabric of
                                </motion.p>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <motion.p className="h1-line2"
                                    initial={{ y: '100%' }} animate={{ y: '0%' }}
                                    transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    Eastern India
                                </motion.p>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <motion.p className="h1-line3"
                                    initial={{ y: '100%' }} animate={{ y: '0%' }}
                                    transition={{ duration: 0.65, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    For Over a Century.
                                </motion.p>
                            </div>
                        </div>

                        {/* Gold divider */}
                        <motion.div className="hero__divider"
                            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                        />

                        {/* Subtext */}
                        <motion.p className="hero__sub" {...fade(0.62)}>
                            Babulal Premkumar stands as one of Eastern India&apos;s most trusted textile
                            institutions — offering premium fabrics from the world&apos;s leading brands,
                            serving generations of families and over 2000 retail partners across multiple states.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div className="hero__ctas" {...fade(0.76)}>
                            <a href="#collections" className="btn-primary">Explore Our Collections</a>
                            <a href="#wholesale" className="btn-secondary">Wholesale Partnership</a>
                        </motion.div>

                        {/* Metrics */}
                        <motion.div className="hero__metrics" {...fade(0.9)}>
                            {metrics.map((m) => (
                                <div className="metric" key={m.value}>
                                    <div className="metric__val">{m.value}</div>
                                    <div className="metric__lbl">{m.label}</div>
                                    <div className="metric__sub">{m.sub}</div>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="hero__scroll">
                    <p>Discover Our Legacy</p>
                    <motion.div
                        animate={{ y: [0, 9, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: '1px', height: '42px',
                            background: 'linear-gradient(to bottom, rgba(198,167,92,0.75), transparent)',
                        }}
                    />
                </div>

            </section>
        </>
    );
}
