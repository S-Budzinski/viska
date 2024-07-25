// Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default Layout;
