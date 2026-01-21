import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}