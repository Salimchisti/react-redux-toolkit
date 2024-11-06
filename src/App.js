import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
