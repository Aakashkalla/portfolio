import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Aakash",
  role: "A Full Stack web developer.",
  bio: "I build and ship full-stack web products using Next.js, TypeScript, and Supabase — from auth systems and real-time features to AI integrations. Available for full-time roles immediately.",
  links: [
    { icon: Github, href: "https://github.com/Aakashkalla" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aakash-kalla/" },
    { icon: Twitter, href: "https://x.com/aakash_kalla" },
    { icon: Mail, href: "mailto:aakashpradeepkalla@gmail.com" },
  ],
  skills: [
    "Typescript", "React", "Next.js", "PostgreSQL", "MongoDB", "Express", "TailwindCSS", "Prisma"
  ],
  projects: [
    {
      title : "n0track",
      description : "Real-time anonymous chat app with room codes, live presence, and instant messaging. Deployed with a Render backend and Vercel frontend for fast global access.",
      tech : ["React", "TypeScript", "Vite", "TailwindCSS", "Socket.IO", "Express", "Node.js"],
      link : "https://n0tracker.vercel.app",
      image : "/projects/NoTracker.png",
      status : "All Systems Operational"
    },
    {
      title : "Smart Complaint System",
      description : "Smart Complaint System is a full-stack platform that allows users to report civic issues, automatically categorizes them using AI, and enables real-time tracking and resolution through an admin dashboard.",
      tech : ["Next.js", "TypeScript", "TailwindCSS", "Supabase", "Prisma", "PostgreSQL"],
      link : "https://smart-complaint-system-indol.vercel.app",
      image :"/projects/SmartContract.png",
      status : "All systems Operational"
    },
    {
      title: "Worklog",
      description: "A full stack project and task management app with user authentication and authorization",
      tech: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "NextAuth"],
      link: "https://worklog-iota.vercel.app/",
      image:"/projects/Worklog.png",
      status: "All Systems Operational"
    },
    {
        title:"Budget Guardian",
        description : "A full stack expense tracking platform allowing users to set monthly budget, track expenses and see remaining balance instantly.",
        tech:["TypeScript", "Next.js", "TailwindCSS", "Prisma", "PostgreSQL"],
        link:"https://expense-tracker-seven-sepia-94.vercel.app/",
        image:"/projects/Budget-Guardian.png",
        status:"All Systems Operational"
    },
    {
      title: "RoomFinder",
      description: "A full stack rental room platform allowing users to find rooms and property owners to list and manage room listing.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
      link: "https://room-finder-one.vercel.app/landing",
      image:"/projects/Room-Finder.png",
      status: "All Systems Operational"
    }
  ]
};