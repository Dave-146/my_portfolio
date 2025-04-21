import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <h1 className="font-comfortaa text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Project Not Found
        </h1>
        <p className="font-montserrat text-gray-600 mb-8 text-center max-w-md">
          Sorry, the project you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="bg-primary text-white px-6 py-3 rounded-full font-montserrat hover:bg-blue-600 transition-colors"
        >
          Return Home
        </Link>
      </main>

      <Footer />
    </div>
  );
} 