import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './assets/component/About/About';
import Parent from './assets/component/Parent/Parent';
import Navbar from './assets/component/Navbar/Navbar';
import Layout from './assets/component/Layout/Layout';
import Home from './assets/component/Home/Home';
import NotFound from './assets/component/NotFound/NotFound';

function App() {
  // Commented useState hooks can stay commented

  // Fix 1: Correct the children syntax with proper brackets and proper element references
  let routers = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />, 
      children: [
        // Fix 2: Use React components, not strings
        { path: 'about', element: <About /> },
        { index: true, element: <Home /> },    // Fix 3: 'true' as boolean, not string
        { path: 'parent', element: <Parent /> },
        { path: 'navbar', element: <Navbar /> },
        { path: '*' , element: <NotFound />}
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;