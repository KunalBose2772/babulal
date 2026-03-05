'use client';

import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Our Heritage', href: '#heritage' },
    { label: 'Collections', href: '#collections' },
    { label: 'Brand Partners', href: '#brands' },
    { label: 'Distribution Network', href: '#wholesale' },
];

const collectLinks = [
    { label: 'Menswear Fabrics', href: '#menswear' },
    { label: "Women's Fabrics", href: '#womens' },
    { label: 'Home Furnishing', href: '#home' },
    { label: 'Institutional Textile', href: '#institutional' },
    { label: 'Wholesale Enquiry', href: '#contact' },
];

// Inline SVG icons
const PinIcon = () => (
    <svg className="footer__contact-icon" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="footer__contact-icon" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.16 12 19.79 19.79 0 0 1 1.11 3.42 2 2 0 0 1 3.09 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
    </svg>
);

const MailIcon = () => (
    <svg className="footer__contact-icon" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const ClockIcon = () => (
    <svg className="footer__contact-icon" width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer" id="footer">
            <div className="footer__inner">

                {/* ── Top grid ── */}
                <div className="footer__grid">

                    {/* Brand */}
                    <div>
                        <img src="/logo.png" alt="Babulal Premkumar" className="footer__brand-logo" />
                        <p className="footer__brand-desc">
                            Eastern India&apos;s most trusted textile destination since 1920. Serving families,
                            retailers, and institutions with quality fabrics and unmatched expertise across six states.
                        </p>
                        <p className="footer__brand-tagline">
                            &ldquo;Where tradition meets textile excellence.&rdquo;
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className="footer__col-title">Quick Links</p>
                        <ul className="footer__links">
                            {quickLinks.map(l => (
                                <li key={l.label}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Collections */}
                    <div>
                        <p className="footer__col-title">Collections</p>
                        <ul className="footer__links">
                            {collectLinks.map(l => (
                                <li key={l.label}><a href={l.href}>{l.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="footer__col-title">Contact Us</p>

                        <div className="footer__contact-row">
                            <PinIcon />
                            <span className="footer__contact-text">
                                Gandhi Chowk, Upper Bazar<br />
                                Ranchi, Jharkhand — 834 001
                            </span>
                        </div>

                        <div className="footer__contact-row">
                            <PhoneIcon />
                            <a href="tel:+916512207555" className="footer__contact-text">
                                +91 651 220 7555
                            </a>
                        </div>

                        <div className="footer__contact-row">
                            <MailIcon />
                            <a href="mailto:info@babulalpremkumar.com" className="footer__contact-text">
                                info@babulalpremkumar.com
                            </a>
                        </div>

                        <div className="footer__contact-row">
                            <ClockIcon />
                            <span className="footer__contact-text">
                                Open Daily: 10:00 AM – 9:00 PM
                            </span>
                        </div>
                    </div>

                </div>

                {/* ── Divider ── */}
                <div className="footer__divider" />

                {/* ── Bottom bar ── */}
                <div className="footer__bottom">
                    <p className="footer__copy">
                        © {year} <span>Babulal Premkumar</span>. All rights reserved. Est. 1920, Ranchi.
                    </p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
