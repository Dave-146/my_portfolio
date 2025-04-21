import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../../lib/projects';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Record<string, Project> = {
  'project-1': {
    title: 'Project 1',
    description: 'Description for Project 1',
    image: '/project1.gif',
    technologies: ['Next.js', 'React', 'TypeScript'],
    link: 'https://example.com/project1'
  },
  'project-2': {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: '/project2.gif',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://example.com/project2'
  },
  'project-3': {
    title: 'Project 3',
    description: 'Description for Project 3',
    image: '/project3.gif',
    technologies: ['React Native', 'Firebase'],
    link: 'https://example.com/project3'
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects[params.slug];

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.'
    };
  }

  return {
    title: project.title,
    description: project.description
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <div className="relative w-full h-96 mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <p className="text-lg mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Project
        </a>
      </div>
    </main>
  );
} 