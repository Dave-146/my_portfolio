import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectPlaceholder = () => (
  <svg
    className="w-full h-64 bg-gray-100"
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="600" height="400" fill="#F3F4F6" />
    <path
      d="M280 175 L320 175 L300 225 Z"
      fill="#D1D5DB"
    />
    <circle cx="300" cy="150" r="20" fill="#D1D5DB" />
    <rect x="250" y="250" width="100" height="10" rx="2" fill="#D1D5DB" />
    <rect x="270" y="270" width="60" height="10" rx="2" fill="#E5E7EB" />
  </svg>
);

const ProjectCard = ({ 
  title, 
  description, 
  gifUrl, 
  tags, 
  timeline, 
  link 
}: {
  title: string;
  description: string;
  gifUrl: string;
  tags: string[];
  timeline: string;
  link: string;
}) => {
  return (
    <Link href={link} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      >
        <div className="relative aspect-video">
          <Image
            src={gifUrl}
            alt={`${title} demonstration`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            unoptimized
          />
          <span className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-montserrat text-primary">
            Case Study
          </span>
        </div>
        
        <div className="p-6 space-y-4">
          <h3 className="font-comfortaa text-2xl font-bold text-gray-900">{title}</h3>
          <p className="font-montserrat text-gray-600">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm font-montserrat text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="font-montserrat text-sm text-gray-500">{timeline}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A comprehensive UX/UI design project focusing on user-centered design principles.",
      gifUrl: "/project1.gif", // Replace with your actual GIF path
      tags: ["UX/UI", "Product Design", "Research"],
      timeline: "3 months, May–July 2020",
      link: "/work/project-1"
    },
    {
      title: "Project 2",
      description: "Redesigning the user experience for a major e-commerce platform.",
      gifUrl: "/project2.gif", // Replace with your actual GIF path
      tags: ["UX/UI", "E-commerce", "Research"],
      timeline: "4 months, August–November 2020",
      link: "/work/project-2"
    },
    {
      title: "Project 3",
      description: "Creating an intuitive mobile app interface for a healthcare startup.",
      gifUrl: "/project3.gif", // Replace with your actual GIF path
      tags: ["Mobile Design", "Healthcare", "UX Research"],
      timeline: "3 months, January–March 2021",
      link: "/work/project-3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-comfortaa text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Highlighted Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 