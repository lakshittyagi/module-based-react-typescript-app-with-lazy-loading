export default function SupplierDashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px', fontSize: '28px', color: '#0f172a' }}>
        Supplier Dashboard
      </h2>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>
        Manage your supply chain, inventory, and purchase orders.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            Total Inventory Items
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            342
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            Across 5 warehouses
          </p>
        </div>
        
        <div style={{ 
          padding: '24px', 
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', opacity: 0.9 }}>
            Active POs
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            45
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            $125,430 total value
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
            Pending Deliveries
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            18
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            Expected this week
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
            Active Suppliers
          </h3>
          <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
            23
          </p>
          <p style={{ fontSize: '12px', opacity: 0.8 }}>
            3 new this month
          </p>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#0f172a' }}>
          Low Stock Alerts
        </h3>
        <div style={{ 
          background: '#fef3c7', 
          borderRadius: '8px', 
          padding: '20px',
          border: '1px solid #fde68a'
        }}>
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #fde68a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500', color: '#854d0e' }}>Raw Material A</span>
              <span style={{ fontSize: '14px', color: '#a16207' }}>Stock: 45 units</span>
            </div>
            <p style={{ fontSize: '14px', color: '#a16207', margin: '5px 0 0 0' }}>
              Below minimum threshold of 100 units
            </p>
          </div>
          <div style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #fde68a' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500', color: '#854d0e' }}>Component B</span>
              <span style={{ fontSize: '14px', color: '#a16207' }}>Stock: 23 units</span>
            </div>
            <p style={{ fontSize: '14px', color: '#a16207', margin: '5px 0 0 0' }}>
              Below minimum threshold of 50 units
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '500', color: '#854d0e' }}>Packaging Material</span>
              <span style={{ fontSize: '14px', color: '#a16207' }}>Stock: 156 units</span>
            </div>
            <p style={{ fontSize: '14px', color: '#a16207', margin: '5px 0 0 0' }}>
              Below minimum threshold of 200 units
            </p>
          </div>
        </div>
      </div>

      {/* Recent Purchase Orders */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#0f172a' }}>
          Recent Purchase Orders
        </h3>
        <div style={{ 
          background: 'white', 
          borderRadius: '8px', 
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          {[
            { po: 'PO-2024-0345', supplier: 'ABC Suppliers', date: '2024-02-20', amount: '$5,240', status: 'Pending' },
            { po: 'PO-2024-0344', supplier: 'XYZ Materials', date: '2024-02-19', amount: '$3,890', status: 'Shipped' },
            { po: 'PO-2024-0343', supplier: 'Global Parts', date: '2024-02-18', amount: '$7,120', status: 'Delivered' },
          ].map((order, index) => (
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
                <p style={{ fontWeight: '600', color: '#059669', marginBottom: '4px' }}>{order.po}</p>
                <p style={{ fontSize: '14px', color: '#64748b' }}>{order.supplier} • {order.date}</p>
              </div>
              <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <p style={{ fontWeight: '600', color: '#0f172a' }}>{order.amount}</p>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500',
                  background: order.status === 'Delivered' 
                    ? '#dcfce7' 
                    : order.status === 'Shipped'
                    ? '#dbeafe'
                    : '#fef3c7',
                  color: order.status === 'Delivered' 
                    ? '#166534' 
                    : order.status === 'Shipped'
                    ? '#1e40af'
                    : '#854d0e'
                }}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}