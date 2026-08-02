import { Link } from 'react-router-dom';

function PlaceholderPage({ title, description }) {
  return (
    <section style={{ padding: '6rem 1.5rem', minHeight: '60vh', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: '#b8925a' }}>
          Coming soon
        </p>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{title}</h1>
        <p style={{ lineHeight: 1.7, color: '#555' }}>{description}</p>
        <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#b8925a' }}>
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default PlaceholderPage;
