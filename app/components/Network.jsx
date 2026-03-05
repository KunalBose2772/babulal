'use client';

import './Network.css';
import { motion } from 'framer-motion';

const stats = [
    { val: '2000+', lbl: 'Retail Partners' },
    { val: '6', lbl: 'States Served' },
    { val: '100+', lbl: 'Years of Trade' },
];

// City markers on the map [cx, cy, label, isHQ]
const markers = [
    { cx: 108, cy: 62, label: 'Lucknow', isHQ: false },
    { cx: 272, cy: 78, label: 'Patna', isHQ: false },
    { cx: 258, cy: 198, label: 'Ranchi', isHQ: true },
    { cx: 418, cy: 228, label: 'Kolkata', isHQ: false },
    { cx: 112, cy: 272, label: 'Raipur', isHQ: false },
    { cx: 282, cy: 378, label: 'Bhubaneswar', isHQ: false },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Network() {
    return (
        <section className="network" id="wholesale">
            <div className="network__inner">

                {/* ════════ LEFT — CONTENT ════════ */}
                <div className="network__content">

                    <motion.div className="network__label" {...fadeUp(0.0)}>
                        <span className="network__label-bar" />
                        Our Network
                        <span className="network__label-bar" />
                    </motion.div>

                    <motion.h2 className="network__h2" {...fadeUp(0.1)}>
                        Powering the Textile Trade<br />Across Eastern India
                    </motion.h2>

                    <motion.div
                        className="network__divider"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.18 }}
                    />

                    <motion.p className="network__para" {...fadeUp(0.22)}>
                        For over a century, Babulal Premkumar has built a powerful distribution network
                        connecting textile manufacturers with retailers across Eastern India. Today, our
                        operations support thousands of partners who rely on us for quality fabrics
                        and dependable supply.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="network__stats"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {stats.map((s) => (
                            <div className="network__stat" key={s.lbl}>
                                <span className="network__stat-val">{s.val}</span>
                                <span className="network__stat-lbl">{s.lbl}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.a
                        href="#contact"
                        className="network__cta"
                        {...fadeUp(0.44)}
                    >
                        Become a Retail Partner
                    </motion.a>

                </div>

                {/* ════════ RIGHT — MAP ════════ */}
                <motion.div
                    className="network__map-wrap"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <svg
                        className="network__map-svg"
                        viewBox="0 0 520 500"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* ── Dark map background ── */}
                        <rect width="520" height="500" fill="#111111" rx="16" />

                        {/* ── Grid lines (subtle) ── */}
                        {[100, 200, 300, 400].map(x => (
                            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500"
                                stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                        ))}
                        {[100, 200, 300, 400].map(y => (
                            <line key={`h${y}`} x1="0" y1={y} x2="520" y2={y}
                                stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                        ))}

                        {/* ──── State polygons ──── */}
                        {/* Uttar Pradesh */}
                        <polygon
                            points="20,10 220,10 225,90 185,130 90,130 20,80"
                            fill="#1F5E8C"
                            fillOpacity="0.55"
                            stroke="#2a7ab8"
                            strokeWidth="1.5"
                        />
                        <text x="105" y="72" textAnchor="middle"
                            fontSize="11" fill="rgba(255,255,255,0.6)"
                            fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="0.5">
                            UTTAR PRADESH
                        </text>

                        {/* Bihar */}
                        <polygon
                            points="220,10 360,20 370,50 345,130 225,130 225,90"
                            fill="#1F5E8C"
                            fillOpacity="0.60"
                            stroke="#2a7ab8"
                            strokeWidth="1.5"
                        />
                        <text x="285" y="82" textAnchor="middle"
                            fontSize="11" fill="rgba(255,255,255,0.6)"
                            fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="0.5">
                            BIHAR
                        </text>

                        {/* Jharkhand — Primary state (brighter) */}
                        <polygon
                            points="185,130 345,130 355,250 290,280 200,285 160,250"
                            fill="#1F5E8C"
                            fillOpacity="0.85"
                            stroke="#4a9fd4"
                            strokeWidth="2"
                        />
                        <text x="262" y="210" textAnchor="middle"
                            fontSize="12" fill="rgba(255,255,255,0.85)"
                            fontFamily="Montserrat, sans-serif" fontWeight="700" letterSpacing="0.5">
                            JHARKHAND
                        </text>

                        {/* West Bengal */}
                        <polygon
                            points="345,130 370,50 448,62 462,210 415,330 368,352 290,280 355,250"
                            fill="#1F5E8C"
                            fillOpacity="0.55"
                            stroke="#2a7ab8"
                            strokeWidth="1.5"
                        />
                        <text x="408" y="175" textAnchor="middle"
                            fontSize="10" fill="rgba(255,255,255,0.55)"
                            fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="0.5">
                            WEST
                        </text>
                        <text x="408" y="190" textAnchor="middle"
                            fontSize="10" fill="rgba(255,255,255,0.55)"
                            fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="0.5">
                            BENGAL
                        </text>

                        {/* Chhattisgarh */}
                        <polygon
                            points="90,130 185,130 160,250 152,385 82,380 26,302 20,200"
                            fill="#1F5E8C"
                            fillOpacity="0.50"
                            stroke="#2a7ab8"
                            strokeWidth="1.5"
                        />
                        <text x="98" y="272" textAnchor="middle"
                            fontSize="10" fill="rgba(255,255,255,0.5)"
                            fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="0.5">
                            CHHATTISGARH
                        </text>

                        {/* Odisha */}
                        <polygon
                            points="200,285 290,280 368,352 382,432 288,460 202,450 155,395 152,385 160,250"
                            fill="#1F5E8C"
                            fillOpacity="0.60"
                            stroke="#2a7ab8"
                            strokeWidth="1.5"
                        />
                        <text x="278" y="390" textAnchor="middle"
                            fontSize="11" fill="rgba(255,255,255,0.6)"
                            fontFamily="Montserrat, sans-serif" fontWeight="600" letterSpacing="0.5">
                            ODISHA
                        </text>

                        {/* ──── City markers ──── */}
                        {markers.map((m, i) => (
                            <g key={m.label}>
                                {/* Animated pulse ring */}
                                <circle cx={m.cx} cy={m.cy} r="4" fill="none"
                                    stroke={m.isHQ ? '#E21E26' : '#C6A75C'}
                                    strokeWidth="1.5"
                                    opacity="0"
                                >
                                    <animate
                                        attributeName="r"
                                        from="6" to="22"
                                        dur="2s"
                                        begin={`${i * 0.4}s`}
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from="0.7" to="0"
                                        dur="2s"
                                        begin={`${i * 0.4}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>

                                {/* Dot */}
                                <circle
                                    cx={m.cx} cy={m.cy}
                                    r={m.isHQ ? 6 : 4}
                                    fill={m.isHQ ? '#E21E26' : '#C6A75C'}
                                    opacity="0.9"
                                />

                                {/* Label */}
                                <text
                                    x={m.cx} y={m.cy + (m.isHQ ? 18 : 15)}
                                    textAnchor="middle"
                                    fontSize={m.isHQ ? '10' : '9'}
                                    fontFamily="Montserrat, sans-serif"
                                    fontWeight={m.isHQ ? '700' : '500'}
                                    fill={m.isHQ ? '#E21E26' : 'rgba(255,255,255,0.7)'}
                                    letterSpacing="0.3"
                                >
                                    {m.label}
                                </text>
                            </g>
                        ))}

                        {/* ── Legend ── */}
                        <g transform="translate(18, 462)">
                            <circle cx="6" cy="6" r="5" fill="#E21E26" />
                            <text x="16" y="10" fontSize="9" fill="rgba(255,255,255,0.5)"
                                fontFamily="Montserrat, sans-serif">HQ — Ranchi</text>
                            <circle cx="110" cy="6" r="4" fill="#C6A75C" />
                            <text x="120" y="10" fontSize="9" fill="rgba(255,255,255,0.5)"
                                fontFamily="Montserrat, sans-serif">Partner City</text>
                        </g>
                    </svg>
                </motion.div>

            </div>
        </section>
    );
}
