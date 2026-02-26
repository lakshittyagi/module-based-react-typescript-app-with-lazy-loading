import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width:"100vw" }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#1e293b', color: 'white', padding: '20px' }}>
        <h2 style={{ marginBottom: '30px' }}>Admin Panel</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <Link to="/admin/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
                Dashboard
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link to="/admin/users" style={{ color: 'white', textDecoration: 'none' }}>
                User Management
              </Link>
            </li>
            <li style={{ marginBottom: '15px' }}>
              <Link to="/admin/settings" style={{ color: 'white', textDecoration: 'none' }}>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background:"#DB3C1D" }}>
        {/* Header */}
        <header style={{ background: '#f1f5f9', padding: '15px 30px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ margin: 0, fontSize: '24px' }}>Admin Dashboard</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span>Welcome, {user?.name}</span>
              <button onClick={handleLogout} style={{ padding: '8px 16px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '30px', background: '#ffffff' }}>{children}</main>
      </div>
    </div>
  );
};