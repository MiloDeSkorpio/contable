import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Hero from './components/Hero';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Testimonials from './components/Testimonials';
import Feature3 from './components/Feature3';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  },
  {
    path: '/mision',
    element: <Feature1 />
  },
  {
    path: '/vision',
    element: <Feature2 />
  },
  {
    path: '/servicios',
    element: <Feature3 />
  },
  {
    path: '/contacto',
    element: <Testimonials />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
  </React.StrictMode>
);
