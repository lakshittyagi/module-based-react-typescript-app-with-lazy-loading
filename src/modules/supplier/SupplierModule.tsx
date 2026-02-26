import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SupplierLayout } from './SupplierLayout';

// Lazy load supplier components
const SupplierDashboard = lazy(() => import('./pages/SupplierDashbaord'));
const Inventory = lazy(() => import('./pages/Inventory'));
const PurchaseOrders = lazy(() => import('./pages/PurchaseOrders'));
const Suppliers = lazy(() => import('./pages/Suppliers'));

export default function SupplierModule() {
  return (
    <SupplierLayout>
      <Routes>
        <Route path="/" element={<SupplierDashboard />} />
        <Route path="/dashboard" element={<SupplierDashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/purchase-orders" element={<PurchaseOrders />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </SupplierLayout>
  );
}