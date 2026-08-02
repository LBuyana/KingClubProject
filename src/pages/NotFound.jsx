import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page" style={{ padding: '160px 2rem 100px', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p style={{ margin: '1.5rem 0 2rem', fontSize: '1.1rem', color: '#666' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="hero__button" style={{ display: 'inline-block' }}>
        Return to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
