import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      width: '100vw',
      background: '#f3f4f6'
    }}>
      <h1 style={{ fontSize: '72px', margin: 0 }}>404</h1>
      <h2 style={{ marginTop: '20px' }}>Page Not Found</h2>
      <p style={{ marginTop: '10px', color: '#6b7280' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/login" 
        style={{ 
          marginTop: '30px', 
          padding: '12px 24px',
          background: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Go to Login
      </Link>
    </div>
  );
}