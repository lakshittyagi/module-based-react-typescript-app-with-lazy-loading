import { useState } from 'react';

export default function Orders() {
  const [orders] = useState([
    { id: '#12345', customer: 'ABC Corp', date: '2024-02-20', amount: '$1,250', status: 'Processing' },
    { id: '#12344', customer: 'XYZ Ltd', date: '2024-02-19', amount: '$3,400', status: 'Shipped' },
    { id: '#12343', customer: 'Tech Inc', date: '2024-02-18', amount: '$890', status: 'Delivered' },
    { id: '#12342', customer: 'Global Co', date: '2024-02-17', amount: '$2,150', status: 'Processing' },
  ]);

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '8px' }}>Orders</h2>
        <p style={{ color: '#64748b' }}>Track and manage your manufacturing orders</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginBottom: '24px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0'
      }}>
        {['All Orders', 'Processing', 'Shipped', 'Delivered'].map((tab, index) => (
          <button
            key={tab}
            style={{
              padding: '12px 20px',
              background: index === 0 ? '#0ea5e9' : 'transparent',
              color: index === 0 ? 'white' : '#64748b',
              border: 'none',
              borderBottom: index === 0 ? '2px solid #0ea5e9' : '2px solid transparent',
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
                Order ID
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Customer
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Date
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
                <td style={{ padding: '16px', color: '#0ea5e9', fontWeight: '500' }}>
                  {order.id}
                </td>
                <td style={{ padding: '16px', color: '#0f172a', fontWeight: '500' }}>
                  {order.customer}
                </td>
                <td style={{ padding: '16px', color: '#64748b' }}>
                  {order.date}
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
                      : '#fef3c7',
                    color: order.status === 'Delivered' 
                      ? '#166534' 
                      : order.status === 'Shipped'
                      ? '#1e40af'
                      : '#854d0e'
                  }}>
                    {order.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <button style={{
                    padding: '6px 12px',
                    background: 'transparent',
                    color: '#0ea5e9',
                    border: '1px solid #0ea5e9',
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