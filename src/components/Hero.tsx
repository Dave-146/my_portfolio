'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen flex items-center relative overflow-hidden">
      {/* Account for header height */}
      <div className="absolute inset-0 top-20" /> 
      
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-[1504px] mx-auto w-full">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center justify-center h-full w-full space-y-8 -mt-20">
            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-[280px] aspect-square relative"
            >
              <div className="rounded-full overflow-hidden h-full w-full">
                <Image
                  src="/profile.webp"
                  alt="Dave Crean"
                  fill
                  className="object-cover object-[30%_center]"
                  priority
                  sizes="280px"
                  quality={95}
                />
              </div>
            </motion.div>

            {/* Mobile Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-center max-w-lg px-4"
            >
              <h1 className="font-comfortaa text-4xl font-bold text-gray-900">
                Hey, I'm Dave Crean
              </h1>
              <p className="font-montserrat text-lg text-gray-600 leading-relaxed">
                With a background in civil engineering and experience at Apple, 
                I transitioned into UX/UI design to create intuitive and engaging 
                user experiences. My goal is to blend functionality with creativity, 
                ensuring that every design decision is purposeful.
              </p>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 items-center h-full -mt-20">
            {/* Desktop Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 lg:col-span-5 space-y-6 z-10"
            >
              <h1 className="font-comfortaa text-5xl lg:text-6xl font-bold text-gray-900">
                Hey, I'm Dave Crean
              </h1>
              <p className="font-montserrat text-lg text-gray-600 leading-relaxed">
                With a background in civil engineering and experience at Apple, 
                I transitioned into UX/UI design to create intuitive and engaging 
                user experiences. My goal is to blend functionality with creativity, 
                ensuring that every design decision is purposeful.
              </p>
            </motion.div>

            {/* Desktop Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-6 lg:col-span-7 md:col-start-7 relative"
            >
              <div className="relative max-w-[800px] mx-auto">
                <div className="aspect-square w-[140%] md:w-[150%] xl:w-[140%] 2xl:w-[130%] relative">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="relative h-full w-full">
                      <Image
                        src="/profile.webp"
                        alt="Dave Crean"
                        fill
                        className="object-cover object-[30%_center] xl:object-[40%_center] 2xl:object-[center_center]"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1600px) 80vw, 1504px"
                        quality={95}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 