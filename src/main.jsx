import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'typeface-montserrat';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from '../pages/shop.jsx';
import Checkout from '../pages/checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/shop",
    element: <Shop/>
  },
  {
    path:"/checkout",
    element: <Checkout/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
