import { useMemo, useState } from 'react';
import heroBackground from '../assets/images/Fine dining/Food 1.png';
import dishOne from '../assets/images/Fine dining/Food 3.png';
import dishTwo from '../assets/images/Fine dining/Food 1.png';
import dishThree from '../assets/images/Fine dining/Food 2.png';
import dishFour from '../assets/images/Fine dining/Food 3.png';

const categories = ['All', 'Starters', 'Main Courses', 'Desserts', 'Drinks'];

const features = [
  {
    title: 'Fresh Ingredients',
    description: 'Seasonal produce and local inspiration shape every plate.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 3c3 0 4 3 4 6 0 3-2 5-4 6" />
        <path d="M19 3c-3 0-4 3-4 6 0 3 2 5 4 6" />
        <path d="M12 9c2 0 3 2 3 4v7H9v-7c0-2 1-4 3-4Z" />
      </svg>
    ),
  },
  {
    title: 'Expert Chefs',
    description: 'A talented culinary team brings elegance and precision to every service.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3h8" />
        <path d="M7 7h10" />
        <path d="M10 7v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V7" />
      </svg>
    ),
  },
  {
    title: 'Fine Selection',
    description: 'A curated collection of wines, desserts, and signature cocktails.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 4h14" />
        <path d="M7 4v6a5 5 0 0 0 10 0V4" />
        <path d="M9 14h6" />
        <path d="M10 18h4" />
      </svg>
    ),
  },
  {
    title: 'Elegant Ambience',
    description: 'Warm lighting, refined interiors, and attentive service create the mood.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 18c0-3 2-5 6-5s6 2 6 5" />
        <path d="M8 12a4 4 0 1 0 8 0" />
      </svg>
    ),
  },
];

const dishes = [
  {
    name: 'Truffle Herb Tart',
    description: 'Crisp pastry layered with wild mushrooms, parmesan, and a fragrant truffle glaze.',
    price: 'R185',
    image: dishOne,
    category: 'Starters',
  },
  {
    name: 'Braised Beef Tenderloin',
    description: 'Slow-cooked and served with roasted vegetables, fondant potato, and red wine jus.',
    price: 'R320',
    image: dishTwo,
    category: 'Main Courses',
  },
  {
    name: 'Vanilla Bean Panna Cotta',
    description: 'Silken panna cotta finished with berry compote and a delicate caramel crunch.',
    price: 'R145',
    image: dishThree,
    category: 'Desserts',
  },
  {
    name: 'Signature Citrus Spritz',
    description: 'A bright citrus cocktail with elderflower, basil, and sparkling wine.',
    price: 'R120',
    image: dishFour,
    category: 'Drinks',
  },
];

const hours = [
  { label: 'Breakfast', value: '07:00 – 10:30' },
  { label: 'Lunch', value: '12:00 – 15:00' },
  { label: 'Dinner', value: '18:00 – 23:00' },
  { label: 'Room Service', value: '24 Hours' },
];

function HeroSection() {
  return (
    <section className="restaurant-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="restaurant-hero__overlay" />
      <div className="restaurant-hero__content">
        <p className="section-label">Exquisite Dining</p>
        <h1>A Culinary Experience Like No Other</h1>
        <p>
          Discover elegant interiors, warm hospitality, and a menu inspired by local flavours and
          timeless indulgence.
        </p>
        <button type="button" className="restaurant-hero__button" onClick={() => {}}>
          View Menu
        </button>
      </div>
    </section>
  );
}

function RestaurantIntro() {
  return (
    <section className="restaurant-intro">
      <div className="restaurant-intro__container">
        <div className="restaurant-intro__content">
          <p className="section-label">Our Restaurant</p>
          <h2>Where Fine Dining Meets Warm Hospitality</h2>
          <p>
            Our restaurant is shaped by fresh ingredients, thoughtful technique, and a dedication to
            creating memorable moments for every guest.
          </p>
          <button type="button" className="restaurant-intro__button" onClick={() => {}}>
            About Our Chef
          </button>
        </div>
        <div className="restaurant-feature-grid">
          {features.map((feature, index) => (
            <article className="restaurant-feature-card" key={feature.title} style={{ '--delay': index }}>
              <div className="restaurant-feature-card__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureDishes() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleDishes = useMemo(() => {
    if (activeCategory === 'All') {
      return dishes;
    }

    return dishes.filter((dish) => dish.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="restaurant-dishes">
      <div className="restaurant-dishes__container">
        <div className="restaurant-dishes__head">
          <p className="section-label">Menu Highlights</p>
          <h2>Discover Our Signature Dishes</h2>
        </div>
        <div className="restaurant-dishes__filters" aria-label="Dish categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`restaurant-dishes__filter${activeCategory === category ? ' is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="restaurant-dishes__grid">
          {visibleDishes.map((dish, index) => (
            <article className="dish-card" key={dish.name} style={{ '--delay': index }}>
              <div className="dish-card__image-wrap">
                <img src={dish.image} alt={dish.name} className="dish-card__image" />
              </div>
              <div className="dish-card__body">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span>{dish.price}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="restaurant-dishes__action">
          <button type="button" className="restaurant-dishes__button" onClick={() => {}}>
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}

function OpeningHours() {
  return (
    <section className="restaurant-hours">
      <div className="restaurant-hours__container">
        <div className="restaurant-hours__head">
          <p className="section-label">Opening Hours</p>
          <h2>When to Visit</h2>
        </div>
        <div className="restaurant-hours__list">
          {hours.map((item) => (
            <div className="hours-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReservationCTA() {
  return (
    <section className="restaurant-cta">
      <div className="restaurant-cta__container">
        <h2>Make a Reservation</h2>
        <p>Reserve your table and enjoy an unforgettable dining experience with us.</p>
        <button type="button" className="restaurant-cta__button" onClick={() => {}}>
          Reserve a Table
        </button>
      </div>
    </section>
  );
}

function RestaurantPage() {
  return (
    <div className="restaurant-page">
      <HeroSection />
      <RestaurantIntro />
      <SignatureDishes />
      <OpeningHours />
      <ReservationCTA />
    </div>
  );
}

export default RestaurantPage;
