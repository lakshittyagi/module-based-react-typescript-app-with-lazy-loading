import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../shared/hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
      
      // Redirect based on user role
      if (email.includes('admin')) {
        navigate('/admin/dashboard');
      } else if (email.includes('manufacturer')) {
        navigate('/manufacturer/dashboard');
      } else if (email.includes('supplier')) {
        navigate('/supplier/dashboard');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '40px', 
        borderRadius: '12px', 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        width: '100%',
        maxWidth: '420px'
      }}>
        <h1 style={{ marginBottom: '8px', textAlign: 'center', fontSize: '28px', color: '#1f2937' }}>
          Welcome Back
        </h1>
        <p style={{ marginBottom: '30px', textAlign: 'center', color: '#6b7280', fontSize: '14px' }}>
          Sign in to your account
        </p>
        
        {error && (
          <div style={{ 
            padding: '12px', 
            marginBottom: '20px', 
            background: '#fee2e2', 
            color: '#991b1b',
            borderRadius: '6px',
            fontSize: '14px',
            border: '1px solid #fecaca'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#374151', fontSize: '14px' }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                transition: 'border-color 0.2s'
              }}
              placeholder="Enter your email"
              required
              onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#374151', fontSize: '14px' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '14px',
                transition: 'border-color 0.2s'
              }}
              placeholder="Enter your password"
              required
              onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
            />
          </div>

          <button
            type="submit"
            style={{ 
              width: '100%', 
              padding: '12px', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
          >
            Sign In
          </button>
        </form>

        <div style={{ marginTop: '24px', padding: '16px', background: '#f9fafb', borderRadius: '6px', border: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Test Accounts:
          </p>
          <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.6' }}>
            <div style={{ marginBottom: '4px' }}>
              <span style={{ color: '#059669', fontWeight: '500' }}>•</span> admin@example.com - Admin Portal
            </div>
            <div style={{ marginBottom: '4px' }}>
              <span style={{ color: '#0ea5e9', fontWeight: '500' }}>•</span> manufacturer@example.com - Manufacturer Portal
            </div>
            <div>
              <span style={{ color: '#10b981', fontWeight: '500' }}>•</span> supplier@example.com - Supplier Portal
            </div>
            <p style={{ marginTop: '8px', fontSize: '11px', color: '#9ca3af', fontStyle: 'italic' }}>
              (Use any password)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}