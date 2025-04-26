import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <div>
      {/* Fix 4: Remove self-reference to Layout, add Navbar */}
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}
