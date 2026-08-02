import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import hotelImage from '../../assets/images/King club outside.jpg';
import accomodationOne from '../../assets/images/Accomodation/accomodation 1.jpg';
import accomodationTwo from '../../assets/images/Accomodation/Accomodation 2.jpg';
import accomodationThree from '../../assets/images/Accomodation/Accomodation 3.jpg';
import foodOne from '../../assets/images/Fine dining/Food 1.png';
import foodTwo from '../../assets/images/Fine dining/Food 2.png';
import foodThree from '../../assets/images/Fine dining/Food 3.png';

const features = [
  {
    title: 'Comfortable Stays',
    description: 'Luxury rooms designed for relaxation.',
    images: [accomodationOne, accomodationTwo, accomodationThree],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11V5a2 2 0 0 1 2-2h5a3 3 0 0 1 3 3v5" />
        <path d="M13 8h6a2 2 0 0 1 2 2v7" />
        <path d="M3 17h18" />
        <path d="M3 21v-4" />
        <path d="M21 21v-4" />
      </svg>
    ),
  },
  {
    title: 'Fine Dining',
    description: 'Fresh cuisine prepared by experienced chefs.',
    images: [foodOne, foodTwo, foodThree],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 2v20" />
        <path d="M5 2v5a2 2 0 0 0 4 0V2" />
        <path d="M17 2v20" />
        <path d="M14 2h3a3 3 0 0 1 3 3v5h-6z" />
      </svg>
    ),
  },
  {
    title: 'Business Events',
    description: 'Professional conference and meeting facilities.',
    images: [hotelImage],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v11H4z" />
        <path d="M8 21h8" />
        <path d="M12 16v5" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </svg>
    ),
  },
];

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === 'left' ? <path d="M15 18 9 12l6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImages, setActiveImages] = useState({});

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const navigateImage = (title, direction, totalImages) => {
    setActiveImages((currentImages) => {
      const currentIndex = currentImages[title] || 0;
      const nextIndex =
        direction === 'next'
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return {
        ...currentImages,
        [title]: nextIndex,
      };
    });
  };

  return (
    <section
      className={`about-section${isVisible ? ' about-section--visible' : ''}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-section__container">
        <div className="about-section__content">
          <p className="section-label">About Us</p>
          <h2>
            Luxury Experience
            <span>Unlike Any Other</span>
          </h2>
          <p className="about-section__description">
            King Club brings together refined accommodation, warm dining, and flexible event spaces
            in one welcoming destination. Every detail is shaped for guests who want comfort,
            convenience, and a memorable stay in King William's Town.
          </p>
          <Link className="about-section__button" to="/contact">
            Learn More
          </Link>
        </div>

        <div className="feature-cards">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title} style={{ '--delay': index }}>
              <div className="feature-card__image-wrap">
                <img
                  src={feature.images[activeImages[feature.title] || 0]}
                  alt=""
                  className="feature-card__image"
                />
                {feature.images.length > 1 && (
                  <div className="feature-card__arrows">
                    <button
                      type="button"
                      aria-label={`Show previous ${feature.title} image`}
                      onClick={() => navigateImage(feature.title, 'previous', feature.images.length)}
                    >
                      <ArrowIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Show next ${feature.title} image`}
                      onClick={() => navigateImage(feature.title, 'next', feature.images.length)}
                    >
                      <ArrowIcon direction="right" />
                    </button>
                  </div>
                )}
                <div className="feature-card__icon">{feature.icon}</div>
              </div>
              <div className="feature-card__body">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
