import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoutes';

// Lazy load module entry points
const AdminModule = lazy(() => import('../modules/admin/AdminModule'));
const ManufacturerModule = lazy(() => import('../modules/manufacturer/ManufacturerModule'));
const SupplierModule = lazy(() => import('../modules/supplier/SupplierModule'));

// Public pages
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin/*',
    element: (
      <ProtectedRoute allowedRoles={['admin']}>
        <AdminModule />
      </ProtectedRoute>
    ),
  },
  {
    path: '/manufacturer/*',
    element: (
      <ProtectedRoute allowedRoles={['manufacturer']}>
        <ManufacturerModule />
      </ProtectedRoute>
    ),
  },
  {
    path: '/supplier/*',
    element: (
      <ProtectedRoute allowedRoles={['supplier']}>
        <SupplierModule />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];