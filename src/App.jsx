import { useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ContactPage from './components/sections/ContactPage.jsx';
import heroImage from './assets/images/King club outside.jpg';
import Footer from './components/layout/Footer.jsx';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import NotFound from './pages/NotFound.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.toggle('home-page', location.pathname === '/');

    return () => {
      document.body.classList.remove('home-page');
    };
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* HOME ROUTE: Contains the hero section only */}
          <Route
            path="/"
            element={
              <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero__overlay" />
                <div className="hero__content">
                  <h1>Dine, Stay, Connect, and Play at King William's Town's Premier Venue.</h1>
                  <div className="hero__lines" aria-hidden="true">
                    <span />
                  </div>
                  <p className="hero__feature">
                    <strong>Taste the Magic at Friar's Grill</strong>
                    <span>
                      Whether you are joining us for a family dinner or an important business lunch,
                      the Friar's Grill Restaurant is fully equipped to meet your every need
                    </span>
                  </p>
                  <Link className="hero__button" to="/about">
                    Discover more
                    <span aria-hidden="true">&gt;</span>
                  </Link>
                </div>
              </section>
            }
          />

          {/* SEPARATE PAGE ROUTES */}
          <Route path="/about" element={<AboutSection />} />
          <Route
            path="/accommodation"
            element={
              <PlaceholderPage
                title="Accommodation"
                description="A dedicated accommodation experience page will be added here soon."
              />
            }
          />
          <Route
            path="/restaurant"
            element={<PlaceholderPage title="Restaurant" description="Our restaurant experience page will be added here soon." />}
          />
          <Route
            path="/conferences"
            element={<PlaceholderPage title="Conferences" description="The conferences and events page will be added here soon." />}
          />
          <Route path="/gallery" element={<PlaceholderPage title="Gallery" description="The gallery page will be added here soon." />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
