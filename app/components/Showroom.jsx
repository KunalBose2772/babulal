'use client';

import './Showroom.css';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Showroom() {
    return (
        <section className="showroom" id="contact">
            <div className="showroom__inner">

                {/* ── Left: Showroom Image ── */}
                <div className="showroom__img-outer">
                    <div className="showroom__img-border" />
                    <motion.div
                        className="showroom__img-wrap"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img src="/showroom.png" alt="Babulal Premkumar showroom interior" />
                        <p className="showroom__img-stamp">Upper Bazar, Ranchi · Est. 1920</p>
                    </motion.div>
                </div>

                {/* ── Right: Content ── */}
                <div className="showroom__content">

                    <motion.div className="showroom__label" {...fadeUp(0.1)}>
                        <span className="showroom__label-bar" />
                        The Showroom Experience
                    </motion.div>

                    <motion.h2 className="showroom__h2" {...fadeUp(0.18)}>
                        Step Into a Century<br />of Textile Excellence
                    </motion.h2>

                    <motion.div
                        className="showroom__divider"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.26 }}
                    />

                    <motion.p className="showroom__para" {...fadeUp(0.3)}>
                        For over a hundred years, our showroom in the heart of Ranchi has been a
                        destination for families, retailers, and textile enthusiasts seeking quality
                        fabrics and trusted, personalised service.
                    </motion.p>

                    {/* Address */}
                    <motion.div className="showroom__address" {...fadeUp(0.38)}>
                        <svg className="showroom__address-icon" width="18" height="18" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <div className="showroom__address-text">
                            <strong>Babulal Premkumar</strong>
                            Gandhi Chowk, Upper Bazar<br />
                            Ranchi, Jharkhand — 834 001
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div className="showroom__ctas" {...fadeUp(0.46)}>
                        <a
                            href="https://maps.google.com/?q=Gandhi+Chowk+Upper+Bazar+Ranchi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="showroom__btn-primary"
                        >
                            Visit Our Showroom
                        </a>
                        <a
                            href="https://maps.google.com/?q=Gandhi+Chowk+Upper+Bazar+Ranchi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="showroom__btn-secondary"
                        >
                            Get Directions
                        </a>
                    </motion.div>

                    {/* Quick info */}
                    <motion.div className="showroom__info" {...fadeUp(0.54)}>
                        <div className="showroom__info-row">
                            {/* Clock icon */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            Open Daily &nbsp;·&nbsp; 10:00 AM – 9:00 PM
                        </div>
                        <div className="showroom__info-row">
                            {/* Phone icon */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.16 12 19.79 19.79 0 0 1 1.11 3.42 2 2 0 0 1 3.09 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
                            </svg>
                            +91 651 220 7555
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
