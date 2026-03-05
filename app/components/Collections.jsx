'use client';

import './Collections.css';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 'menswear',
        title: 'Menswear Fabrics',
        sub: 'Premium suiting and shirting from the world\'s finest textile mills.',
        img: '/menswear.png',
        href: '#menswear',
    },
    {
        id: 'womens',
        title: "Women's Fabrics",
        sub: 'Elegant sarees, dress materials, and embroidered ensembles.',
        img: '/womens.png',
        href: '#womens',
    },
    {
        id: 'home',
        title: 'Home Furnishing',
        sub: 'Beautiful fabrics that transform houses into warm, elegant homes.',
        img: '/home_furnishing.png',
        href: '#home',
    },
    {
        id: 'institutional',
        title: 'Institutional Textile',
        sub: 'Reliable supply solutions for retailers, institutions, and bulk buyers.',
        img: '/institutional.png',
        href: '#institutional',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            delay: (i + 1) * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Collections() {
    return (
        <section className="collections" id="collections">
            <div className="collections__inner">

                {/* ── Section Header ── */}
                <motion.div
                    className="collections__header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="collections__label">
                        <span className="collections__label-bar" />
                        Our Collections
                        <span className="collections__label-bar" />
                    </div>

                    <h2 className="collections__h2">
                        Explore Our Textile Universe
                    </h2>

                    <p className="collections__sub">
                        From premium suiting fabrics to elegant ethnic textiles and home furnishings,
                        our collections represent a century of craftsmanship and trusted partnerships
                        with the world&apos;s finest textile manufacturers.
                    </p>
                </motion.div>

                {/* ── Card Grid ── */}
                <div className="collections__grid">
                    {categories.map((cat, i) => (
                        <motion.a
                            key={cat.id}
                            href={cat.href}
                            className="coll-card"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={cardVariants}
                        >
                            <img
                                className="coll-card__img"
                                src={cat.img}
                                alt={cat.title}
                            />
                            <div className="coll-card__overlay" />
                            <div className="coll-card__content">
                                <p className="coll-card__title">{cat.title}</p>
                                <p className="coll-card__sub">{cat.sub}</p>
                                <span className="coll-card__link">
                                    Explore <span>→</span>
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
}
