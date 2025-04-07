import React from 'react';
import { ExternalLink } from 'lucide-react';
import { IoLogoGithub } from "react-icons/io";
import Image from 'next/image';

interface ProjectsCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export function ProjectsCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          width={1600}
          height={900}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-slate-700 rounded-full dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <IoLogoGithub className="w-5 h-5" />
            Code
          </a>
          {liveUrl && (
            <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
                <ExternalLink className="w-5 h-5" />
                    Live Demo
          </a>
          )}
        </div>
      </div>
    </div>
  );
}