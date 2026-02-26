import { useState } from 'react';

export default function PurchaseOrders() {
  const [orders] = useState([
    { id: 'PO-2024-0345', supplier: 'ABC Suppliers', date: '2024-02-20', amount: '$5,240', items: 23, status: 'Pending' },
    { id: 'PO-2024-0344', supplier: 'XYZ Materials', date: '2024-02-19', amount: '$3,890', items: 15, status: 'Shipped' },
    { id: 'PO-2024-0343', supplier: 'Global Parts', date: '2024-02-18', amount: '$7,120', items: 34, status: 'Delivered' },
    { id: 'PO-2024-0342', supplier: 'Tech Components', date: '2024-02-17', amount: '$2,450', items: 12, status: 'Processing' },
    { id: 'PO-2024-0341', supplier: 'ABC Suppliers', date: '2024-02-16', amount: '$4,890', items: 28, status: 'Delivered' },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '8px' }}>Purchase Orders</h2>
          <p style={{ color: '#64748b' }}>Track and manage all purchase orders</p>
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
          + Create New PO
        </button>
      </div>

      {/* Stats Cards */}
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
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Total POs</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0f172a' }}>145</p>
        </div>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Pending</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>23</p>
        </div>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>In Transit</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#0ea5e9' }}>18</p>
        </div>
        <div style={{ 
          padding: '16px', 
          background: 'white', 
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Total Value</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#059669' }}>$125K</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginBottom: '24px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0'
      }}>
        {['All Orders', 'Pending', 'Processing', 'Shipped', 'Delivered'].map((tab, index) => (
          <button
            key={tab}
            style={{
              padding: '12px 20px',
              background: index === 0 ? '#059669' : 'transparent',
              color: index === 0 ? 'white' : '#64748b',
              border: 'none',
              borderBottom: index === 0 ? '2px solid #059669' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s',
              marginBottom: '-2px'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                PO Number
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Supplier
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Date
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Items
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Amount
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Status
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '16px', color: '#059669', fontWeight: '600' }}>
                  {order.id}
                </td>
                <td style={{ padding: '16px', color: '#0f172a', fontWeight: '500' }}>
                  {order.supplier}
                </td>
                <td style={{ padding: '16px', color: '#64748b' }}>
                  {order.date}
                </td>
                <td style={{ padding: '16px', color: '#64748b' }}>
                  {order.items} items
                </td>
                <td style={{ padding: '16px', color: '#0f172a', fontWeight: '600' }}>
                  {order.amount}
                </td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    background: order.status === 'Delivered' 
                      ? '#dcfce7' 
                      : order.status === 'Shipped'
                      ? '#dbeafe'
                      : order.status === 'Processing'
                      ? '#e0e7ff'
                      : '#fef3c7',
                    color: order.status === 'Delivered' 
                      ? '#166534' 
                      : order.status === 'Shipped'
                      ? '#1e40af'
                      : order.status === 'Processing'
                      ? '#4338ca'
                      : '#854d0e'
                  }}>
                    {order.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <button style={{
                    padding: '6px 12px',
                    background: 'transparent',
                    color: '#059669',
                    border: '1px solid #059669',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}