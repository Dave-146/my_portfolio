import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, Project } from '@/lib/projects'; // Import projects data and interface

const ProjectCard = ({ 
  id, // Add id
  title, 
  description, 
  imageUrl, // Change gifUrl to imageUrl
  tags, 
}: Project & { id: string }) => {
  return (
    <Link href={`/work/${id}`} className="block"> // Use id for the link
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      >
        <div className="relative aspect-video">
          <Image
            src={imageUrl} // Use imageUrl
            alt={`${title} demonstration`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            unoptimized // Keep unoptimized based on previous changes
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
                key={index} // Keep index for tags as they might not be unique
                className="bg-gray-100 px-3 py-1 rounded-full text-sm font-montserrat text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  // Remove the hardcoded projects array
  /* 
  const projects = [
    ...
  ];
  */

  return (
    <section id="projects" className="py-20 bg-gray-50"> // Add id="projects"
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
          {/* Use imported projects data and project.id as key */}
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 