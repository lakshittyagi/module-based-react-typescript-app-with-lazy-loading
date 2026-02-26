export default function Analytics() {
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '8px' }}>Analytics</h2>
        <p style={{ color: '#64748b' }}>View your production and sales analytics</p>
      </div>

      {/* Key Metrics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginBottom: '40px' 
      }}>
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>Production Efficiency</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a' }}>94.2%</p>
          <p style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>↑ 2.4% from last month</p>
        </div>
        
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>Units Produced</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a' }}>12,458</p>
          <p style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>↑ 8.1% from last month</p>
        </div>
        
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>Quality Rate</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a' }}>98.7%</p>
          <p style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>↑ 0.3% from last month</p>
        </div>
        
        <div style={{ 
          padding: '20px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '8px' }}>Avg. Cycle Time</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#0f172a' }}>2.3h</p>
          <p style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>↓ 0.2h from last month</p>
        </div>
      </div>

      {/* Charts Placeholder */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '24px' 
      }}>
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          minHeight: '300px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0f172a', marginBottom: '20px' }}>
            Production Trend
          </h3>
          <div style={{ 
            height: '250px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#f8fafc',
            borderRadius: '4px',
            color: '#94a3b8'
          }}>
            Chart Component (Production over time)
          </div>
        </div>
        
        <div style={{ 
          padding: '24px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          minHeight: '300px'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#0f172a', marginBottom: '20px' }}>
            Revenue by Product
          </h3>
          <div style={{ 
            height: '250px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: '#f8fafc',
            borderRadius: '4px',
            color: '#94a3b8'
          }}>
            Chart Component (Revenue breakdown)
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '20px' }}>
          Top Performing Products
        </h3>
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          {[
            { name: 'Product A', units: 3420, revenue: '$45,231', growth: '+12%' },
            { name: 'Product B', units: 2890, revenue: '$38,450', growth: '+8%' },
            { name: 'Product C', units: 2150, revenue: '$28,950', growth: '+15%' },
          ].map((product, index) => (
            <div 
              key={index}
              style={{ 
                padding: '16px 20px', 
                borderBottom: index < 2 ? '1px solid #e2e8f0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <p style={{ fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>{product.name}</p>
                <p style={{ fontSize: '14px', color: '#64748b' }}>{product.units} units produced</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>{product.revenue}</p>
                <p style={{ fontSize: '14px', color: '#10b981' }}>{product.growth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}