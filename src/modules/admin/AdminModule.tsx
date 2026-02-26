import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { AdminLayout } from './AdminLayout';

// Lazy load admin components
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
// const UserManagement = lazy(() => import('./pages/UserManagement'));
// const Settings = lazy(() => import('./pages/Settings'));

export default function AdminModule() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/users" element={<UserManagement />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </AdminLayout>
  );
}