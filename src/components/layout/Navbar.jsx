import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/new_logo-removebg-preview.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Conferences', to: '/conferences' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const navClassName = `navbar${isScrolled ? ' navbar--scrolled' : ''}${
    isMenuOpen ? ' navbar--menu-open' : ''
  }`;

  return (
    <header className={navClassName}>
      <div className="navbar__container">
        <Link className="navbar__brand" to="/" aria-label="King Club home">
          <img src={logo} alt="King Club Hotel & Resort" className="navbar__logo" />
        </Link>

        <nav className="navbar__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`navbar__link${activePath === item.to ? ' is-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="navbar__book-button" to="/contact">
          Book Now
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="navbar__mobile-panel" id="mobile-navigation">
        <nav className="navbar__mobile-links" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={activePath === item.to ? 'is-active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="navbar__mobile-book" to="/contact" onClick={() => setIsMenuOpen(false)}>
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;