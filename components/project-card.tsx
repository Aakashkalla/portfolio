"use client";

import Link from "next/link";
import Image from "next/image"; 
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Types for the component props
interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    status: string;
    image: string;
  };
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link 
        href={project.link}
        className="group flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-gray-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      >
        <div className="relative aspect-video w-full overflow-hidden border-b border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-5 flex flex-col gap-4 grow">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl tracking-tight text-foreground">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          
          {/* Tech Icons/Tags */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {project.tech.map((t) => (
              <span key={t} className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 bg-muted/50 px-2 py-0.5 rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 mt-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-green-500 font-medium">{project.status}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}