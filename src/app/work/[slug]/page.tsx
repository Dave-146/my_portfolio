'use client';

import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This would typically come from a CMS or database
const projects = {
  'project-1': {
    title: 'Project 1',
    description: 'A comprehensive UX/UI design project focusing on user-centered design principles.',
    fullDescription: 'Detailed description of the project would go here...',
    image: '/project1.webp',
    tags: ['UX/UI', 'Product Design', 'Research'],
    timeline: '3 months, May–July 2020',
  },
  'project-2': {
    title: 'Project 2',
    description: 'Redesigning the user experience for a major e-commerce platform.',
    fullDescription: 'Detailed description of the project would go here...',
    image: '/project2.webp',
    tags: ['UX/UI', 'E-commerce', 'Research'],
    timeline: '4 months, August–November 2020',
  },
  'project-3': {
    title: 'Project 3',
    description: 'Creating an intuitive mobile app interface for a healthcare startup.',
    fullDescription: 'Detailed description of the project would go here...',
    image: '/project3.webp',
    tags: ['Mobile Design', 'Healthcare', 'UX Research'],
    timeline: '3 months, January–March 2021',
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary mb-8 hover:underline font-montserrat"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-comfortaa text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm font-montserrat text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 mb-8 font-montserrat"
            >
              {project.timeline}
            </motion.p>
          </div>
        </section>

        {/* Project Image */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="container mx-auto px-4 mb-16"
        >
          <div className="relative aspect-video max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>
        </motion.section>

        {/* Project Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="font-montserrat">{project.fullDescription}</p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
} 