'use client';

import { useState } from 'react';

const items = [
    {
        label: 'Collections',
        href: '#collections',
        color: '#C6A75C',
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        label: 'Showroom',
        href: 'https://maps.google.com/?q=Babulal+Premkumar+Gandhi+Chowk+Ranchi',
        external: true,
        color: '#C6A75C',
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 21s-7-6.686-7-11a7 7 0 0 1 14 0c0 4.314-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
            </svg>
        ),
    },
    {
        label: 'Call',
        href: 'tel:06512207555',
        color: '#C6A75C',
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: 'Wholesale',
        href: '#wholesale',
        color: '#C6A75C',
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 9l1.5-6h15L21 9" />
                <path d="M3 9h18v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
                <path d="M9 9v4a3 3 0 0 0 6 0V9" />
            </svg>
        ),
    },
];

export default function MobileBar() {
    const [pressed, setPressed] = useState(null);

    return (
        <>
            <style>{`
        .mob-bar-wrap {
          display: none;
        }

        @media (max-width: 768px) {
          .mob-bar-wrap {
            display: block;
            position: fixed;
            bottom: 18px;
            left: 50%;
            transform: translateX(-50%);
            width: 92%;
            z-index: 9000;
            /* Soft float animation */
            animation: barFloat 3.5s ease-in-out infinite;
          }

          @keyframes barFloat {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50%       { transform: translateX(-50%) translateY(-3px); }
          }

          .mob-bar {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: rgba(12, 12, 12, 0.55);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 1px 0 rgba(255,255,255,0.05) inset;
            padding: 10px 6px;
          }

          .mob-bar-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5px;
            padding: 6px 4px;
            border-radius: 12px;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.2s ease, transform 0.15s ease;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
          }

          .mob-bar-item:active,
          .mob-bar-item.pressed {
            transform: scale(0.92);
            background: rgba(255, 255, 255, 0.06);
          }

          .mob-bar-item:hover .mob-bar-icon {
            filter: brightness(1.2);
          }

          .mob-bar-icon {
            transition: color 0.2s ease, filter 0.2s ease;
          }

          .mob-bar-label {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.5rem;
            font-weight: 600;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.65);
            white-space: nowrap;
            transition: color 0.2s ease;
          }

          .mob-bar-item:hover .mob-bar-label,
          .mob-bar-item:active .mob-bar-label {
            color: rgba(255, 255, 255, 0.95);
          }

          /* Thin vertical divider between items */
          .mob-bar-divider {
            width: 1px;
            height: 28px;
            background: rgba(255, 255, 255, 0.08);
            flex-shrink: 0;
          }
        }
      `}</style>

            <div className="mob-bar-wrap">
                <div className="mob-bar">
                    {items.map((item, i) => (
                        <>
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                className={`mob-bar-item ${pressed === i ? 'pressed' : ''}`}
                                onPointerDown={() => setPressed(i)}
                                onPointerUp={() => setPressed(null)}
                                onPointerLeave={() => setPressed(null)}
                            >
                                <span
                                    className="mob-bar-icon"
                                    style={{ color: item.color }}
                                >
                                    {item.icon}
                                </span>
                                <span className="mob-bar-label">{item.label}</span>
                            </a>
                            {i < items.length - 1 && (
                                <div key={`div-${i}`} className="mob-bar-divider" />
                            )}
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
