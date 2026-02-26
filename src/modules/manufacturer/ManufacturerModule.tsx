import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ManufacturerLayout } from './ManufacturerLayout';
import NotFoundPage from '../../pages/NotFoundPage';

// Lazy load manufacturer components
const ManufacturerDashboard = lazy(() => import('./pages/ManufacturerDashboard'));
const Products = lazy(() => import('./pages/Products'));
const Orders = lazy(() => import('./pages/Orders'));
const Analytics = lazy(() => import('./pages/Analytics'));

export default function ManufacturerModule() {
  return (
    <ManufacturerLayout>
      <Routes>
        <Route path="/" element={<ManufacturerDashboard />} />
        <Route path="/dashboard" element={<ManufacturerDashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </ManufacturerLayout>
  );
}