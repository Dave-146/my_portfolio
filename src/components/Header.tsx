'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-comfortaa font-bold text-lg">DC</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
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
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header; 