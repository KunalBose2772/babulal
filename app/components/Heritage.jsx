'use client';

import './Heritage.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Heritage() {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-60px' });

  return (
    <section className="heritage" id="heritage">
      <div className="heritage__inner">

        {/* ── Left: Image ── */}
        <div className="heritage__img-outer">
          <div className="heritage__img-shadow-border" />
          <motion.div
            ref={imgRef}
            className="heritage__img-wrap"
            initial={{ opacity: 0, x: -28 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/heritage_store.png" alt="Babulal Premkumar heritage store" />
            <p className="heritage__img-tag">Since Generations</p>
          </motion.div>
        </div>

        {/* ── Right: Content ── */}
        <div className="heritage__content">

          <motion.div className="heritage__label" {...fadeUp(0.05)}>
            <span className="heritage__label-bar" />
            Our Heritage
          </motion.div>

          <motion.div
            className="heritage__top-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{ transformOrigin: 'left' }}
          />

          <motion.div {...fadeUp(0.18)}>
            <span className="heritage__h2-line1">A Century of Trust</span>
            <span className="heritage__h2-line2">in Textile Excellence</span>
          </motion.div>

          <motion.p className="heritage__story" {...fadeUp(0.28)}>
            Babulal Premkumar was founded over a century ago with a simple vision — to bring
            the finest textiles to the people of Ranchi. What began as a humble cloth merchant
            soon grew into one of Eastern India&apos;s most trusted textile institutions.
          </motion.p>

          <motion.p className="heritage__story" {...fadeUp(0.36)}>
            Through five generations of dedication, the brand has built enduring relationships
            with families, retailers, and textile manufacturers across the region. Today,
            Babulal Premkumar stands as a symbol of quality, reliability, and timeless
            craftsmanship in the textile industry.
          </motion.p>

          <motion.p className="heritage__authority" {...fadeUp(0.44)}>
            Serving <strong>2000+ retail partners</strong> and generations of families
            across <strong>6 states</strong> of Eastern India.
          </motion.p>

          <motion.p className="heritage__signature" {...fadeUp(0.52)}>
            Where tradition, trust, and textile craftsmanship come together.
          </motion.p>

          <motion.p className="heritage__founder" {...fadeUp(0.56)}>
            — The Poddar Legacy, Est. 1920
          </motion.p>

          <motion.a href="#collections" className="heritage__cta" {...fadeUp(0.62)}>
            Discover Our Heritage
          </motion.a>

        </div>
      </div>
    </section>
  );
}
