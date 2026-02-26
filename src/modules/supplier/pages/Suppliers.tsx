import { useState } from 'react';

export default function Suppliers() {
  const [suppliers] = useState([
    { id: 1, name: 'ABC Suppliers', contact: 'John Smith', email: 'john@abcsuppliers.com', phone: '+1-555-0123', rating: 4.8, activeOrders: 5 },
    { id: 2, name: 'XYZ Materials', contact: 'Sarah Johnson', email: 'sarah@xyzmaterials.com', phone: '+1-555-0124', rating: 4.6, activeOrders: 3 },
    { id: 3, name: 'Global Parts', contact: 'Mike Davis', email: 'mike@globalparts.com', phone: '+1-555-0125', rating: 4.9, activeOrders: 8 },
    { id: 4, name: 'Tech Components', contact: 'Emily Brown', email: 'emily@techcomponents.com', phone: '+1-555-0126', rating: 4.5, activeOrders: 2 },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '8px' }}>Supplier Network</h2>
          <p style={{ color: '#64748b' }}>Manage your supplier relationships</p>
        </div>
        <button
          style={{
            padding: '12px 24px',
            background: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#047857'}
          onMouseOut={(e) => e.currentTarget.style.background = '#059669'}
        >
          + Add New Supplier
        </button>
      </div>

      {/* Supplier Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
        gap: '16px', 
        marginBottom: '30px' 
      }}>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Total Suppliers</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>23</p>
        </div>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Active Suppliers</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>18</p>
        </div>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Avg. Rating</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>4.7 ⭐</p>
        </div>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Active Orders</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0ea5e9' }}>18</p>
        </div>
      </div>

      {/* Suppliers Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '20px' 
      }}>
        {suppliers.map((supplier) => (
          <div 
            key={supplier.id}
            style={{ 
              background: 'white', 
              borderRadius: '8px', 
              border: '1px solid #e2e8f0',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>
                  {supplier.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#f59e0b' }}>
                    {supplier.rating} ⭐
                  </span>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>
                    ({supplier.activeOrders} active orders)
                  </span>
                </div>
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#059669',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                fontSize: '18px'
              }}>
                {supplier.name.charAt(0)}
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ marginBottom: '8px' }}>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Contact Person</p>
                <p style={{ fontSize: '14px', fontWeight: '500', color: '#0f172a' }}>{supplier.contact}</p>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Email</p>
                <p style={{ fontSize: '14px', color: '#059669' }}>{supplier.email}</p>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '2px' }}>Phone</p>
                <p style={{ fontSize: '14px', color: '#0f172a' }}>{supplier.phone}</p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '8px', 
              paddingTop: '16px', 
              borderTop: '1px solid #e2e8f0' 
            }}>
              <button style={{
                flex: 1,
                padding: '8px 16px',
                background: '#059669',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}>
                View Details
              </button>
              <button style={{
                flex: 1,
                padding: '8px 16px',
                background: 'transparent',
                color: '#059669',
                border: '1px solid #059669',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}>
                Create PO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}