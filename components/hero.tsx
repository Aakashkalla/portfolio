import { DATA } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <header className="flex flex-col gap-6">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Hi, I'm {DATA.name} - <span className="text-gray-400">{DATA.role}</span>
      </h1>
      
      <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
        {DATA.bio}
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill) => (
          <span 
            key={skill} 
            className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-foreground border border-border"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-2">
        <Link 
          href="/resume.pdf"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-foreground text-background h-10 px-4 hover:bg-white/90 transition-colors"
        >
          Resume / CV
        </Link>
        <Link 
          href="mailto:aakashpradeepkalla@gmail.com"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-border bg-background h-10 px-4 hover:bg-muted transition-colors"
        >
          Get in touch
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 text-muted-foreground">
        {DATA.links.map((social, idx) => (
          <Link key={idx} href={social.href} target="_blank" className="hover:text-foreground transition-colors">
            <social.icon size={20} />
          </Link>
        ))}
      </div>
    </header>
  );
}