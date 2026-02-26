export default function ManufacturerDashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', fontSize: '28px', color: '#0f172a' }}>
        Manufacturer Dashboard
      </h2>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>
        Welcome to your manufacturer portal. Manage your products, orders, and view analytics.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            Total Products
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            156
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            +12 this month
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
            Active Orders
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            89
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            23 pending
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
            Revenue (Month)
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            $45,231
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            +18% from last month
          </p>
        </div>
        
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            Production Rate
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            94%
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            Target: 95%
          </p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#0f172a' }}>
          Recent Activity
        </h3>
        <div style={{ 
          background: '#f8fafc', 
          borderRadius: '8px', 
          padding: '20px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500', color: '#0f172a' }}>New order #12345</span>
              <span style={{ fontSize: '14px', color: '#64748b' }}>2 hours ago</span>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '5px 0 0 0' }}>
              Order for 50 units of Product A
            </p>
          </div>
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500', color: '#0f172a' }}>Product stock updated</span>
              <span style={{ fontSize: '14px', color: '#64748b' }}>5 hours ago</span>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '5px 0 0 0' }}>
              Product B stock increased by 200 units
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500', color: '#0f172a' }}>Quality check completed</span>
              <span style={{ fontSize: '14px', color: '#64748b' }}>1 day ago</span>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '5px 0 0 0' }}>
              Batch #789 passed quality inspection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}