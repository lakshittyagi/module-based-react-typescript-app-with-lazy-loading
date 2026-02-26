export default function AdminDashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', fontSize: '28px', color: '#0f172a' }}>
        Admin Dashboard
      </h2>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>
        Welcome to the admin panel. Monitor system health and manage users.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            Total Users
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            1,234
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            +48 this month
          </p>
        </div>
        
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            Active Sessions
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            456
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            Currently online
          </p>
        </div>
        
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            System Health
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            98.7%
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            All systems operational
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#0f172a' }}>
          Recent Activity
        </h3>
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          {[
            { action: 'New user registration', user: 'john.doe@example.com', time: '5 minutes ago', type: 'success' },
            { action: 'User role updated', user: 'jane.smith@example.com', time: '23 minutes ago', type: 'info' },
            { action: 'Security alert resolved', user: 'System', time: '1 hour ago', type: 'warning' },
            { action: 'Database backup completed', user: 'System', time: '2 hours ago', type: 'success' },
          ].map((activity, index) => (
            <div 
              key={index}
              style={{ 
                padding: '16px 20px', 
                borderBottom: index < 3 ? '1px solid #e2e8f0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: activity.type === 'success' 
                    ? '#10b981' 
                    : activity.type === 'warning'
                    ? '#f59e0b'
                    : '#3b82f6'
                }} />
                <div>
                  <p style={{ fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>
                    {activity.action}
                  </p>
                  <p style={{ fontSize: '14px', color: '#64748b' }}>
                    {activity.user}
                  </p>
                </div>
              </div>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* System Stats */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#0f172a' }}>
          System Statistics
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px' 
        }}>
          <div style={{ 
            padding: '16px', 
            background: 'white', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>CPU Usage</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>42%</p>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              background: '#e2e8f0', 
              borderRadius: '2px',
              marginTop: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '42%', height: '100%', background: '#3b82f6' }} />
            </div>
          </div>
          
          <div style={{ 
            padding: '16px', 
            background: 'white', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Memory</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>68%</p>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              background: '#e2e8f0', 
              borderRadius: '2px',
              marginTop: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '68%', height: '100%', background: '#8b5cf6' }} />
            </div>
          </div>
          
          <div style={{ 
            padding: '16px', 
            background: 'white', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Storage</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>54%</p>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              background: '#e2e8f0', 
              borderRadius: '2px',
              marginTop: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '54%', height: '100%', background: '#10b981' }} />
            </div>
          </div>
          
          <div style={{ 
            padding: '16px', 
            background: 'white', 
            borderRadius: '8px',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Network</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>23%</p>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              background: '#e2e8f0', 
              borderRadius: '2px',
              marginTop: '8px',
              overflow: 'hidden'
            }}>
              <div style={{ width: '23%', height: '100%', background: '#f59e0b' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}