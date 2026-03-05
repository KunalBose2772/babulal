'use client';

import './Brands.css';
import { motion } from 'framer-motion';

const brandData = [
    { name: 'Raymond', font: 'Playfair Display, serif', size: '36px', ls: '1px', weight: 600, y: '58%' },
    { name: "Siyaram's", font: 'Montserrat, sans-serif', size: '30px', ls: '0px', weight: 700, y: '55%' },
    { name: 'DONEAR', font: 'Montserrat, sans-serif', size: '28px', ls: '4px', weight: 800, y: '55%' },
    { name: 'LINEN CLUB', font: 'Montserrat, sans-serif', size: '24px', ls: '3px', weight: 500, y: '55%' },
    { name: 'SÖKTAS', font: 'Playfair Display, serif', size: '32px', ls: '2px', weight: 600, y: '58%' },
    { name: 'icon', font: 'Montserrat, sans-serif', size: '36px', ls: '-2px', weight: 800, y: '55%' },
    { name: 'ALVEENO', font: 'Montserrat, sans-serif', size: '24px', ls: '4px', weight: 400, y: '55%' },
];

// Stagger delays: Raymond 0.1s → Alveeno 0.7s
const logoDelays = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Brands() {
    return (
        <section className="brands" id="brands">
            <div className="brands__inner">

                {/* Label */}
                <motion.div className="brands__label" {...fadeUp(0.0)}>
                    <span className="brands__label-bar" />
                    Our Brand Partners
                    <span className="brands__label-bar" />
                </motion.div>

                {/* Headline */}
                <motion.h2 className="brands__h2" {...fadeUp(0.1)}>
                    Trusted by the World&apos;s Finest<br />Textile Brands
                </motion.h2>

                {/* Description */}
                <motion.p className="brands__sub" {...fadeUp(0.2)}>
                    For decades, Babulal Premkumar has partnered with India&apos;s most respected textile
                    manufacturers to deliver quality fabrics to customers and retailers across Eastern India.
                </motion.p>

                {/* Gold divider — expands from centre */}
                <motion.div
                    className="brands__divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'center' }}
                />

                {/* Logo Grid */}
                <div className="brands__grid">
                    {brandData.map((brand, i) => (
                        <motion.div
                            key={brand.name}
                            className="brand-logo"
                            /* entrance: fade-up + unblur */
                            initial={{ opacity: 0, y: 14, filter: 'blur(3px) grayscale(100%)' }}
                            whileInView={{ opacity: 0.6, y: 0, filter: 'blur(0px) grayscale(100%)' }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.55, delay: logoDelays[i], ease: [0.22, 1, 0.36, 1] }}
                            /* hover: override opacity / filter / translate */
                            whileHover={{
                                opacity: 1,
                                filter: 'blur(0px) grayscale(0%)',
                                y: -3,
                                transition: { duration: 0.3, delay: 0 },
                            }}
                        >
                            <svg viewBox="0 0 240 60" style={{ width: '100%', height: '100%' }}>
                                <text
                                    x="50%"
                                    y={brand.y}
                                    textAnchor="middle"
                                    fontFamily={brand.font}
                                    fontSize={brand.size}
                                    fontWeight={brand.weight}
                                    letterSpacing={brand.ls}
                                    fill="currentColor"
                                >
                                    {brand.name}
                                </text>
                            </svg>
                        </motion.div>
                    ))}
                </div>

                {/* Closing prestige line */}
                <motion.p className="brands__closing" {...fadeUp(0.85)}>
                    &ldquo;For generations, the finest textile manufacturers have trusted us
                    to represent their craft.&rdquo;
                </motion.p>

            </div>
        </section>
    );
}
