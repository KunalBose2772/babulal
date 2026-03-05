'use client';

import './Trust.css';
import { motion } from 'framer-motion';

const stories = [
    {
        archetype: 'Family Customer',
        initial: 'R',
        name: 'Rajesh Agarwal',
        role: 'Customer since 1982 · Ranchi',
        stars: '★★★★★',
        quote: 'Every wedding in our family has started with fabrics from Babulal Premkumar. Three generations have walked through their doors, and the quality has never wavered. This is not just a store — it is part of our family\'s story.',
        reversed: false,
    },
    {
        archetype: 'Retail Partner',
        initial: 'S',
        name: 'Suresh Gupta',
        role: 'Textile Retailer · Jamshedpur · 15 years',
        stars: '★★★★★',
        quote: 'As a retailer, I have sourced fabrics from many suppliers across the country. None match the reliability and range that Babulal Premkumar offers. They are not just a supplier — they are the backbone of my business.',
        reversed: true,
    },
    {
        archetype: 'Special Occasions',
        initial: 'N',
        name: 'Neha Sharma',
        role: 'Customer · Dhanbad',
        stars: '★★★★★',
        quote: 'Whenever there is a special occasion — a wedding, a puja, a festival — this is the first place our family visits. The staff remembers us, guides us, and always finds something perfect. That personal touch is rare today.',
        reversed: false,
    },
];

const stripStats = [
    { val: '11,700+', lbl: 'Customer Reviews' },
    { val: '2000+', lbl: 'Retail Partners' },
    { val: '100+', lbl: 'Years of Legacy' },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Trust() {
    return (
        <section className="trust" id="testimonials">
            <div className="trust__inner">

                {/* ── Left-aligned header ── */}
                <motion.div className="trust__header" {...fadeUp(0)}>
                    <div className="trust__label">
                        <span className="trust__label-bar" />
                        Voices of Trust
                    </div>

                    <h2 className="trust__h2">Stories from Those<br />Who Know Us Best</h2>

                    <motion.div
                        className="trust__divider"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.12 }}
                    />

                    <p className="trust__sub">
                        Generations of families, retailers, and occasion shoppers — each with their
                        own story of trust built with Babulal Premkumar over decades.
                    </p>
                </motion.div>

                {/* ── Story Panels ── */}
                <div className="trust__stories">
                    {stories.map((s, i) => {
                        const quoteBlock = (
                            <motion.div
                                className="trust__quote-block"
                                initial={{ opacity: 0, x: s.reversed ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className="trust__quote-bg">&ldquo;</span>
                                <p className="trust__quote-text">&ldquo;{s.quote}&rdquo;</p>
                                <div className="trust__quote-author">
                                    <div className="trust__author-name">— {s.name}</div>
                                    <div className="trust__author-role">{s.role}</div>
                                </div>
                            </motion.div>
                        );

                        const identityBlock = (
                            <motion.div
                                className="trust__identity"
                                initial={{ opacity: 0, x: s.reversed ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="trust__avatar-wrap">
                                    <div className="trust__avatar">{s.initial}</div>
                                    <div className="trust__stars">{s.stars}</div>
                                    <div className="trust__archetype">{s.archetype}</div>
                                </div>
                            </motion.div>
                        );

                        return (
                            <div key={s.name} className={`trust__story ${s.reversed ? 'reversed' : ''}`}>
                                {s.reversed ? (
                                    <>{identityBlock}{quoteBlock}</>
                                ) : (
                                    <>{quoteBlock}{identityBlock}</>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ── Trust Stats Strip ── */}
                <motion.div
                    className="trust__strip"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    {/* Google Rating Badge */}
                    <div className="trust__google">
                        <div className="trust__google-stars">★★★★★</div>
                        <div className="trust__google-rating">4.9</div>
                        <div className="trust__google-text">Google Rating</div>
                    </div>

                    {stripStats.map((s) => (
                        <div className="trust__strip-stat" key={s.lbl}>
                            <span className="trust__strip-val">{s.val}</span>
                            <span className="trust__strip-lbl">{s.lbl}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
