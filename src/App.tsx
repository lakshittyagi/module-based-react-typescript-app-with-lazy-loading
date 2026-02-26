import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './shared/hooks/useAuth';
import { routes } from './routes/app.routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;