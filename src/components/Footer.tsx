'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-comfortaa text-xl font-bold text-gray-900">
              Dave Crean
            </Link>
          </div>

          <nav className="flex space-x-6 mb-4 md:mb-0">
            <Link 
              href="/work" 
              className="font-montserrat text-gray-600 hover:text-primary transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className="font-montserrat text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="font-montserrat text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="text-sm font-montserrat text-gray-500">
            © {new Date().getFullYear()} Dave Crean. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 