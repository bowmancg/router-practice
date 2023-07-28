import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import Root from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetail /> }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
