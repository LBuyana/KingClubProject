import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/logos/new_logo-removebg-preview.png';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Conferences', to: '/conferences' },
  { label: 'Gallery', to: '/gallery' },
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
            <a href="https://www.facebook.com/kc.kingclub/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} color="#1877F2" />
            </a>
            <a href="https://www.instagram.com/kingclub1882/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#E1306C" />
            </a>
            <a href="mailto:info@kingclub.co.za" target="_blank" rel="noopener noreferrer">
              <MdEmail size={30} color="#0070f3" />
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