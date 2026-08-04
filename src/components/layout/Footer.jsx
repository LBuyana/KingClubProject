import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/new_logo-removebg-preview.png';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand">
          <img src={logo} alt="King Club Hotel & Resort" />
          <p>Dine, stay, connect, and play at King William's Town's premier venue.</p>
        </div>

        <div className="site-footer__column">
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="site-footer__column">
          <h3>Contact Details</h3>
          <p>27 Ayliff Street, Qonce (King William's Town), 5600</p>
          <p>+27 43 642 6117</p>
          <p>info@kingclub.co.za</p>
        </div>

        <div className="site-footer__column">
          <h3>Social Media</h3>
          <div className="site-footer__socials">
            <a href="https://www.facebook.com/kc.kingclub/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H8v3h3v7h3v-7h2l1-3h-3V8Z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.instagram.com/kingclub1882/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a href="mailto:info@kingclub.co.za" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="site-footer__copyright">
        Copyright 2026 King Club Hotel & Resort. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;