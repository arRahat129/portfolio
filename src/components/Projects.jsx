"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Tile Canvas",
    image: "https://i.ibb.co.com/MDzwCChK/Tile-Canvas.png",
    tags: ["HTML", "CSS", "JS", "Next.js", "Tailwind", "Framer Motion", "GSAP", "MongoDB"],
    tagColor: "text-secondary-fixed",
    liveLink: "https://tile-canvas.vercel.app/",
    github: "https://github.com/arRahat129/tile-canvas",
  },
  {
    title: "KeenKeeper",
    image: "https://i.ibb.co.com/Tq7wKMPY/Screenshot-2026-05-02-132333.png",
    tags: ["HTML", "CSS", "JS", "Next.js", "Tailwind", "MongoDB"],
    tagColor: "text-primary",
    liveLink: "https://assignment07-arrahat-kohl.vercel.app/",
    github: "https://github.com/arRahat129/assignment07-ar_rahat",
  },
  {
    title: "Dragon News",
    image: "https://i.ibb.co.com/j9n3QYcM/Screenshot-2026-05-02-132615.png",
    tags: ["HTML", "CSS", "JS", "Next.js", "Tailwind", "MongoDB"],
    tagColor: "text-tertiary",
    liveLink: "https://dragon-news-orpin-eight.vercel.app/category/01",
    github: "https://github.com/arRahat129/dragon-news",
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    // Header reveal
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        }
      });
    }

    // Grid items staggered entrance
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden" id="projects">
      <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Featured Projects</h2>
          <p className="text-outline">Crafted with precision and performance in mind.</p>
        </div>
        <Link href={'https://github.com/arRahat129'}>
          <button className="font-label-caps text-label-caps text-secondary flex items-center gap-2 group hover:text-secondary-fixed transition-colors">
            VIEW ALL WORK <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </Link>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="h-full">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">{project.title}</h3>

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
          </div>
        ))}
      </div>
    </section>
  );
}
