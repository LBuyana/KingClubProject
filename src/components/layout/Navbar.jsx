import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logos/new_logo-removebg-preview.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Accommodation', to: '/accommodation' },
  { label: 'Restaurant', to: '/restaurant' },
  { label: 'Contact', to: '/contact' },
];

const roomOptions = ['Deluxe Suite', 'Signature Suite', 'Family Residence'];
const tableAreas = ['Garden Terrace', "Chef's Table", 'Private Salon'];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('room');
  const [roomType, setRoomType] = useState(roomOptions[0]);
  const [tableArea, setTableArea] = useState(tableAreas[0]);
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('Celebration');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [time, setTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
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
    document.body.classList.toggle('booking-modal-open', isBookingOpen);
    document.body.style.overflow = isMenuOpen || isBookingOpen ? 'hidden' : '';

    return () => {
      document.body.classList.remove('menu-open');
      document.body.classList.remove('booking-modal-open');
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isBookingOpen]);

  const navClassName = `navbar${isScrolled ? ' navbar--scrolled' : ''}${
    isMenuOpen ? ' navbar--menu-open' : ''
  }`;

  const resetBookingForm = () => {
    setBookingType('room');
    setRoomType(roomOptions[0]);
    setTableArea(tableAreas[0]);
    setGuests('2');
    setOccasion('Celebration');
    setCheckInDate('');
    setCheckOutDate('');
    setTime('');
    setFullName('');
    setCellphone('');
    setEmail('');
    setCardName('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setSubmitted(false);
    setIsSubmitting(false);
    setFormError('');
  };

  const openBookingModal = () => {
    setIsMenuOpen(false);
    resetBookingForm();
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    resetBookingForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      setFormError('Please complete all required details before submitting your booking.');
      return;
    }

    if (bookingType === 'room' && (!checkInDate || !checkOutDate)) {
      setFormError('Please select both your check-in and check-out dates.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  const numberOfNights = bookingType === 'room' && checkInDate && checkOutDate
    ? Math.max(1, Math.round((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)))
    : 0;

  const estimatedPrice = bookingType === 'room'
    ? numberOfNights * 1850
    : 320 * Math.max(1, Number(guests));

  return (
    <>
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

        <button type="button" className="navbar__book-button" onClick={openBookingModal}>
          Book Now
        </button>

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
          <button
            type="button"
            className="navbar__mobile-book"
            onClick={() => {
              setIsMenuOpen(false);
              openBookingModal();
            }}
          >
            Book Now
          </button>
        </nav>
      </div>
    </header>

    {isBookingOpen && (
      <div className="booking-modal-backdrop" role="presentation" onClick={closeBookingModal}>
        <div
          className="booking-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(event) => event.stopPropagation()}
        >
          <button type="button" className="booking-modal__close" onClick={closeBookingModal} aria-label="Close booking form">
            ×
          </button>

          <div className="booking-modal__header">
            <p className="section-label">Plan your visit</p>
            <h2 id="booking-modal-title">Reserve a room or table</h2>
            <p>
              Choose the experience you want and we will prepare a refined stay or dinner plan for you.
            </p>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label className="booking-form__field">
              <span>I would like to</span>
              <select
                value={bookingType}
                onChange={(event) => {
                  setBookingType(event.target.value);
                  setSubmitted(false);
                  setFormError('');
                }}
              >
                <option value="room">Book a room</option>
                <option value="table">Make a table reservation</option>
              </select>
            </label>

            {bookingType === 'room' ? (
              <div className="booking-form__grid">
                <label className="booking-form__field">
                  <span>Check-in date</span>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(event) => {
                      setCheckInDate(event.target.value);
                      setFormError('');
                    }}
                    required
                  />
                </label>

                <label className="booking-form__field">
                  <span>Check-out date</span>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(event) => {
                      setCheckOutDate(event.target.value);
                      setFormError('');
                    }}
                    required
                  />
                </label>
              </div>
            ) : (
              <label className="booking-form__field">
                <span>Preferred date</span>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(event) => {
                    setCheckInDate(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>
            )}

            <label className="booking-form__field">
              <span>{bookingType === 'room' ? 'Preferred room type' : 'Preferred dining area'}</span>
              {bookingType === 'room' ? (
                <select value={roomType} onChange={(event) => setRoomType(event.target.value)}>
                  {roomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <select value={tableArea} onChange={(event) => setTableArea(event.target.value)}>
                  {tableAreas.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </label>

            <div className="booking-form__grid">
              <label className="booking-form__field">
                <span>{bookingType === 'room' ? 'Guests' : 'Party size'}</span>
                <select value={guests} onChange={(event) => setGuests(event.target.value)}>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="4">4 guests</option>
                  <option value="6">6 guests</option>
                  <option value="8">8+ guests</option>
                </select>
              </label>

              <label className="booking-form__field">
                <span>{bookingType === 'room' ? 'Reason for stay' : 'Occasion'}</span>
                <select value={occasion} onChange={(event) => setOccasion(event.target.value)}>
                  <option value="Celebration">Celebration</option>
                  <option value="Business">Business</option>
                  <option value="Weekend escape">Weekend escape</option>
                  <option value="Family stay">Family stay</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </label>
            </div>

            <label className="booking-form__field">
              <span>{bookingType === 'room' ? 'Arrival time' : 'Preferred time'}</span>
              <input type="time" value={time} onChange={(event) => setTime(event.target.value)} required />
            </label>

            <div className="booking-form__grid">
              <label className="booking-form__field">
                <span>Full name</span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(event) => {
                    setFullName(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>

              <label className="booking-form__field">
                <span>Cellphone number</span>
                <input
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{7,}"
                  value={cellphone}
                  onChange={(event) => {
                    setCellphone(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>
            </div>

            <label className="booking-form__field">
              <span>Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setFormError('');
                }}
                required
              />
            </label>

            <div className="booking-form__grid">
              <label className="booking-form__field">
                <span>Cardholder name</span>
                <input
                  type="text"
                  value={cardName}
                  onChange={(event) => {
                    setCardName(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>

              <label className="booking-form__field">
                <span>Card number</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9 ]{13,19}"
                  value={cardNumber}
                  placeholder="0000 0000 0000 0000"
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>
            </div>

            <div className="booking-form__grid">
              <label className="booking-form__field">
                <span>Expiry date</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                  value={expiry}
                  placeholder="MM/YY"
                  onChange={(event) => {
                    setExpiry(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>

              <label className="booking-form__field">
                <span>CVV</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{3,4}"
                  value={cvv}
                  placeholder="123"
                  onChange={(event) => {
                    setCvv(event.target.value);
                    setFormError('');
                  }}
                  required
                />
              </label>
            </div>

            <div className="booking-form__price">
              <span>{bookingType === 'room' ? 'Estimated stay cost' : 'Estimated table cost'}</span>
              <strong>R {estimatedPrice.toLocaleString()}</strong>
              {bookingType === 'room' && numberOfNights > 0 && (
                <small>{numberOfNights} night{numberOfNights > 1 ? 's' : ''} · R1,850 per night</small>
              )}
            </div>

            {!submitted ? (
              <>
                <button type="submit" className="booking-form__submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing request...' : bookingType === 'room' ? 'Request room booking' : 'Request table reservation'}
                </button>
                {formError && <p className="booking-form__error">{formError}</p>}
              </>
            ) : (
              <div className="booking-form__success-state">
                <p className="booking-form__success">
                  Thank you! Your reservation request has been received and is being prepared for you.
                </p>
                <button type="button" className="booking-form__submit" onClick={closeBookingModal}>
                  Done
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    )}
    </>
  );
}

export default Navbar;