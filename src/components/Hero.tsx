'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m Dave
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A passionate developer creating beautiful web experiences
            </p>
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              View My Work
            </a>
          </div>
          <div className="relative hidden md:block">
            <div className="w-full h-full relative">
              <Image
                src="/profile.webp"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 