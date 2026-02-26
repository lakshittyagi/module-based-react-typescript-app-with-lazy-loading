import { useState } from 'react';

export default function Inventory() {
  const [items] = useState([
    { id: 1, name: 'Raw Material A', sku: 'RM-001', stock: 450, location: 'Warehouse 1', status: 'In Stock' },
    { id: 2, name: 'Component B', sku: 'CP-002', stock: 230, location: 'Warehouse 2', status: 'In Stock' },
    { id: 3, name: 'Packaging Material', sku: 'PK-003', stock: 156, location: 'Warehouse 1', status: 'Low Stock' },
    { id: 4, name: 'Raw Material C', sku: 'RM-004', stock: 45, location: 'Warehouse 3', status: 'Low Stock' },
    { id: 5, name: 'Component D', sku: 'CP-005', stock: 0, location: 'Warehouse 2', status: 'Out of Stock' },
    // { id: 6, name: 'Component E', sku: 'CP-0011', stock: 0, location: 'Warehouse 2', status: 'Out of Stock' },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '8px' }}>Inventory</h2>
          <p style={{ color: '#64748b' }}>Manage your inventory across all warehouses</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              padding: '12px 24px',
              background: 'white',
              color: '#059669',
              border: '1px solid #059669',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Export Data
          </button>
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
            + Add Item
          </button>
        </div>
      </div>

      {/* Inventory Summary Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        marginBottom: '30px' 
      }}>
        <div style={{ padding: '16px', background: '#dcfce7', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
          <p style={{ fontSize: '13px', color: '#166534', marginBottom: '4px' }}>In Stock</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#166534' }}>680 items</p>
        </div>
        <div style={{ padding: '16px', background: '#fef3c7', borderRadius: '8px', border: '1px solid #fde68a' }}>
          <p style={{ fontSize: '13px', color: '#854d0e', marginBottom: '4px' }}>Low Stock</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#854d0e' }}>201 items</p>
        </div>
        <div style={{ padding: '16px', background: '#fee2e2', borderRadius: '8px', border: '1px solid #fecaca' }}>
          <p style={{ fontSize: '13px', color: '#991b1b', marginBottom: '4px' }}>Out of Stock</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#991b1b' }}>12 items</p>
        </div>
        <div style={{ padding: '16px', background: '#dbeafe', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
          <p style={{ fontSize: '13px', color: '#1e40af', marginBottom: '4px' }}>Total Value</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e40af' }}>$234,567</p>
        </div>
      </div>

      {/* Inventory Table */}
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
                Item Name
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                SKU
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Stock
              </th>
              <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                Location
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
            {items.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '16px', color: '#0f172a', fontWeight: '500' }}>
                  {item.name}
                </td>
                <td style={{ padding: '16px', color: '#64748b' }}>
                  {item.sku}
                </td>
                <td style={{ padding: '16px', color: '#64748b', fontWeight: '600' }}>
                  {item.stock}
                </td>
                <td style={{ padding: '16px', color: '#64748b' }}>
                  {item.location}
                </td>
                <td style={{ padding: '16px' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    background: item.status === 'In Stock' 
                      ? '#dcfce7' 
                      : item.status === 'Low Stock'
                      ? '#fef3c7'
                      : '#fee2e2',
                    color: item.status === 'In Stock' 
                      ? '#166534' 
                      : item.status === 'Low Stock'
                      ? '#854d0e'
                      : '#991b1b'
                  }}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <button style={{
                    padding: '6px 12px',
                    marginRight: '8px',
                    background: 'transparent',
                    color: '#059669',
                    border: '1px solid #059669',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}>
                    Edit
                  </button>
                  <button style={{
                    padding: '6px 12px',
                    background: '#059669',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '13px'
                  }}>
                    Reorder
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