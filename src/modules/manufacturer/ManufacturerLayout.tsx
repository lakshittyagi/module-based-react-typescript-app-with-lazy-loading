import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';

interface ManufacturerLayoutProps {
  children: ReactNode;
}

export const ManufacturerLayout = ({ children }: ManufacturerLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width:"100vw" }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#0ea5e9', color: 'white', padding: '20px' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '20px', fontWeight: 'bold' }}>
          Manufacturer Portal
        </h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <Link 
                to="/manufacturer/dashboard" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Dashboard
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link 
                to="/manufacturer/products" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Products
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link 
                to="/manufacturer/orders" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Orders
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link 
                to="/manufacturer/analytics" 
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Analytics
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{ 
          background: '#f0f9ff', 
          padding: '15px 30px', 
          borderBottom: '1px solid #bae6fd',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '24px', color: '#0369a1' }}>
              Manufacturer Dashboard
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ color: '#0369a1', fontSize: '14px' }}>
                Welcome, {user?.name}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  padding: '8px 16px',
                  background: '#0ea5e9',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#0284c7'}
                onMouseOut={(e) => e.currentTarget.style.background = '#0ea5e9'}
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '30px', background: '#ffffff' }}>
          {children}
        </main>
      </div>
    </div>
  );
};