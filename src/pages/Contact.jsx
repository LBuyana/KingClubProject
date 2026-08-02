import ContactPage from '../components/sections/ContactPage.jsx';
import heroImage from '../assets/images/King club outside.jpg';

function Contact() {
  return (
    <div className="contact-route-page">
      <div className="page-header" style={{ backgroundImage: `url("${heroImage}")` }}>
        <div className="page-header__overlay" />
        <div className="page-header__content">
          <h1>Contact Us</h1>
          <p>We'd Love to Hear From You</p>
        </div>
      </div>

      <ContactPage />
    </div>
  );
}

export default Contact;
