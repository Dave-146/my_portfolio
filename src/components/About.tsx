'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/profile.webp"
                alt="Dave Crean"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-comfortaa text-3xl md:text-4xl font-bold text-gray-900"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="font-montserrat text-gray-600 leading-relaxed">
                I am a dynamic UX/UI designer with a passion for crafting user-centric solutions, 
                I honed my skills at George Brown College's Interaction Design program.
              </p>
              
              <p className="font-montserrat text-gray-600 leading-relaxed">
                Specializing in design thinking and digital product development, I bring together 
                technical acumen and customer service insights to create intuitive and impactful 
                digital experiences.
              </p>
              
              <p className="font-montserrat text-gray-600 leading-relaxed">
                My design philosophy is rooted in close observation of customer interactions, 
                enabling me to engineer designs that are technically sound and deeply connect 
                with users' needs.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 