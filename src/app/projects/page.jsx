"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Tile Canvas",
    image: "https://i.ibb.co.com/MDzwCChK/Tile-Canvas.png",
    tags: ["HTML", "CSS", "JS", "Next.js", "Tailwind", "Framer Motion", "GSAP", "MongoDB"],
    tagColor: "text-secondary-fixed",
    liveLink: "https://tile-canvas.vercel.app/",
    github: "https://github.com/arRahat129/tile-canvas",
    description: "A creative canvas for tile-based designs and patterns."
  },
  {
    title: "KeenKeeper",
    image: "https://i.ibb.co.com/Tq7wKMPY/Screenshot-2026-05-02-132333.png",
    tags: ["HTML", "CSS", "JS", "Next.js", "Tailwind", "MongoDB"],
    tagColor: "text-primary",
    liveLink: "https://assignment07-arrahat-kohl.vercel.app/",
    github: "https://github.com/arRahat129/assignment07-ar_rahat",
    description: "A smart task and note management application."
  },
  {
    title: "Dragon News",
    image: "https://i.ibb.co.com/j9n3QYcM/Screenshot-2026-05-02-132615.png",
    tags: ["HTML", "CSS", "JS", "Next.js", "Tailwind", "MongoDB"],
    tagColor: "text-tertiary",
    liveLink: "https://dragon-news-orpin-eight.vercel.app/category/01",
    github: "https://github.com/arRahat129/dragon-news",
    description: "A dynamic news portal with categorized content."
  }
  // Add more projects here if needed
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen relative hero-glow"
      >
        <div className="mb-16">
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">All My Projects</h1>
          <p className="text-outline text-lg max-w-2xl">
            A comprehensive collection of my work, ranging from web applications to creative experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass group rounded-2xl overflow-hidden flex flex-col h-full border border-black/10 dark:border-white/10"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  src={project.image}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{project.title}</h3>
                <p className="text-outline text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-wider ${project.tagColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <Link href={project.github} target="_blank" className="flex-1">
                    <button className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 py-2 rounded font-label-caps text-[12px] hover:bg-black/10 dark:hover:bg-white/10 text-slate-900 dark:text-white transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-sm">code</span>
                      GitHub
                    </button>
                  </Link>

                  <Link href={project.liveLink} target="_blank" className="flex-1">
                    <button className="w-full bg-secondary text-on-secondary-container py-2 rounded font-label-caps text-[12px] font-bold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn">
                      <span className="absolute inset-0 bg-black/10 dark:bg-white/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform"></span>
                      <span className="relative z-10 material-symbols-outlined text-sm">open_in_new</span>
                      <span className="relative z-10">Live</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>
      <Footer />
    </>
  );
}
