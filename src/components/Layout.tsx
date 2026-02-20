import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DigitalRain from './DigitalRain';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative flex flex-col font-mono text-gray-100">
      <DigitalRain />
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
