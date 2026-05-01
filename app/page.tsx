"use client";

import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 py-8">
      <Hero />
      
      <motion.section 
        className="flex flex-col gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <div className="h-px flex-1 bg-border/50"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}