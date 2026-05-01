"use client";

import { DATA } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <header className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Hi, I'm {DATA.name} - <span className="text-gray-400">{DATA.role}</span>
        </h1>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          {DATA.bio}
        </p>
      </motion.div>

      {/* Tech Stack Badges */}
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {DATA.skills.map((skill) => (
          <span 
            key={skill} 
            className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-foreground border border-border"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.div 
        className="flex gap-4 pt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
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
      </motion.div>

      {/* Social Icons */}
      <motion.div 
        className="flex gap-4 text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {DATA.links.map((social, idx) => (
          <Link key={idx} href={social.href} target="_blank" className="hover:text-foreground transition-colors">
            <social.icon size={20} />
          </Link>
        ))}
      </motion.div>
    </header>
  );
}