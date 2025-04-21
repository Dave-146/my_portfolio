export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    imageUrl: "/projects/portfolio.gif",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/portfolio"
  },
  // Add more projects here as needed
]; 