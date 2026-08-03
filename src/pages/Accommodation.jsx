import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { rooms } from '../data/rooms.js';
import experienceImage from '../assets/images/Accomodation/Accomodation 3.jpg';
import receptionImage from '../assets/images/King club outside.jpg';
import heroBackground from '../assets/images/Accomodation/accomodation 1.jpg';

const categories = ['All Rooms', 'Deluxe', 'Executive', 'Suites', 'Family'];

const amenities = [
  { name: 'Air Conditioning', icon: '❄' },
  { name: 'Free Wi-Fi', icon: '📶' },
  { name: 'Smart TV', icon: '📺' },
  { name: 'Mini Bar', icon: '🧊' },
  { name: 'In-room Safe', icon: '🔒' },
  { name: 'Tea & Coffee', icon: '☕' },
];

function HeroSection() {
  return (
    <section className="accommodation-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="accommodation-hero__overlay" />
      <div className="accommodation-hero__content">
        <p className="section-label">Stay in Comfort</p>
        <h1>Luxury Rooms &amp; Suites</h1>
        <p>
          Discover refined spaces designed for relaxation, business travel, and effortless
          celebration at King Club.
        </p>
        <Link className="accommodation-hero__button" to="/contact">
          Explore Rooms
        </Link>
      </div>
    </section>
  );
}

function RoomCategoryFilter({ activeCategory, onChange }) {
  return (
    <section className="accommodation-filter" aria-label="Room categories">
      <div className="accommodation-filter__container">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              className={`accommodation-filter__tab${isActive ? ' is-active' : ''}`}
              onClick={() => onChange(category)}
            >
              <span>{category}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function RoomGrid({ roomsToShow }) {
  return (
    <section className="accommodation-grid" aria-label="Available rooms">
      <div className="accommodation-grid__container">
        {roomsToShow.map((room, index) => (
          <article
            className="room-card"
            key={room.title}
            style={{ '--delay': index }}
          >
            <div className="room-card__image-wrap">
              <img src={room.image} alt={room.title} className="room-card__image" />
            </div>
            <div className="room-card__body">
              <h3>{room.title}</h3>
              <div className="room-card__meta">
                <span>{room.guests}</span>
                <span>{room.bed}</span>
                <span>{room.size}</span>
              </div>
              <p>{room.description}</p>
              <div className="room-card__footer">
                <div>
                  <span className="room-card__price">From {room.price}</span>
                </div>
                <div className="room-card__actions">
                  <Link className="room-card__link" to="/contact">
                    View Details
                  </Link>
                  <Link className="room-card__button" to="/contact">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeaturedExperience() {
  return (
    <section className="accommodation-experience">
      <div className="accommodation-experience__container">
        <div className="accommodation-experience__image-wrap">
          <img src={experienceImage} alt="Luxury suite interior" className="accommodation-experience__image" />
        </div>
        <div className="accommodation-experience__content">
          <p className="section-label">Premium Experience</p>
          <h2>Where Comfort Meets Elegance</h2>
          <p>
            From plush bedding and thoughtful interiors to seamless service, every room is crafted to
            offer a restful retreat with unmistakable luxury.
          </p>
          <ul>
            <li>Premium bedding</li>
            <li>Free Wi-Fi</li>
            <li>Smart TV</li>
            <li>Mini Bar</li>
            <li>Room Service</li>
          </ul>
          <Link className="accommodation-experience__button" to="/contact">
            Explore Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  return (
    <section className="accommodation-amenities">
      <div className="accommodation-amenities__container">
        <div className="accommodation-amenities__head">
          <p className="section-label">Everything You Need</p>
          <h2>Room Amenities</h2>
        </div>
        <div className="accommodation-amenities__grid">
          {amenities.map((item) => (
            <div className="amenity-card" key={item.name}>
              <span className="amenity-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  return (
    <section className="accommodation-cta">
      <div className="accommodation-cta__container">
        <div className="accommodation-cta__content">
          <p className="section-label">Need Assistance?</p>
          <h2>Our team is ready to help you choose the perfect room.</h2>
          <p>
            Let us help you plan a stay inspired by comfort, convenience, and memorable hospitality.
          </p>
          <Link className="accommodation-cta__button" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="accommodation-cta__image-wrap">
          <img src={receptionImage} alt="Hotel reception" className="accommodation-cta__image" />
        </div>
      </div>
    </section>
  );
}

function AccommodationPage() {
  const [activeCategory, setActiveCategory] = useState('All Rooms');

  const visibleRooms = useMemo(() => {
    if (activeCategory === 'All Rooms') {
      return rooms;
    }

    return rooms.filter((room) => room.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="accommodation-page">
      <HeroSection />
      <RoomCategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
      <RoomGrid roomsToShow={visibleRooms} />
      <FeaturedExperience />
      <AmenitiesSection />
      <BookingCTA />
    </div>
  );
}

export default AccommodationPage;
