import { useEffect, useRef, useState } from 'react';

const contactItems = [
  {
    title: 'Address',
    lines: ['27 Ayliff Street', "Qonce(King Williams Town)", '5600'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-5.3 7-12a7 7 0 0 0-14 0c0 6.7 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    lines: ['27 Ayliff Street, Qonce King Williams Town, 5600'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    lines: ['info@kingclub.co.za'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16v16H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    title: 'Working Hours',
    lines: ['Mon - Sun', '08:00 - 22:00'],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];


function ContactPage() {
  const pageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(page);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`contact-page${isVisible ? ' contact-page--visible' : ''}`}
      id="contact"
      ref={pageRef}
    >
      <div className="contact-section">
        <div className="contact-page__heading">
          <p className="section-label">Contact Us</p>
          <h2>
            We'd Love to
            <span>Hear From You</span>
          </h2>
        </div>
        <div className="contact-section__container">
          <aside className="contact-info">
            <p className="section-label">Get in Touch</p>
            {contactItems.map((item) => (
              <div className="contact-item" key={item.title}>
                <div className="contact-item__icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          <div className="contact-map">
            <p className="section-label">Find King Club</p>
            <h3>Located in the heart of King William's Town.</h3>
            <iframe
              className="location-map"
              title="King Club location map"
              src="https://www.google.com/maps?q=The%King%27s%20Club%20King%20Williams&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
