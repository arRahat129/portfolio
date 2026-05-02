"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.png";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide navbar on scroll down, show on scroll up
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-6 left-0 w-full z-50 px-6 transition-all duration-300`}
    >
      <nav className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-0' : ''}`}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center"
        >
          <div className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </div>
        </motion.div>

        {/* Centered Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex items-center gap-1 nav-glass px-4 py-2 rounded-full shadow-2xl"
        >
          <Link 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${pathname === '/' ? 'nav-active text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`} 
            href="/#home"
          >
            <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-500 scale-90" data-icon="home">home</span> Home
          </Link>
          <a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-all" href="/#qualification">
            <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 scale-90" data-icon="school">school</span> Qualification
          </a>
          <a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-all" href="/#projects">
            <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 scale-90" data-icon="work">work</span> Projects
          </a>
          <Link 
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${pathname === '/projects' ? 'nav-active text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`} 
            href="/projects"
          >
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 scale-90" data-icon="view_list">view_list</span> All Projects
          </Link>
          <a className="flex items-center gap-2 px-4 py-1.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 text-sm font-medium transition-all" href="/#contact">
            <span className="material-symbols-outlined text-pink-600 dark:text-pink-400 scale-90" data-icon="send">send</span> Say Hello
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <a href="https://www.linkedin.com/in/mohammad-ashikur-rahman-rahat/" className="w-9 h-9 flex items-center justify-center rounded-full nav-glass text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-lg active:scale-95 border border-black/5 dark:border-white/5" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/arRahat129" className="w-9 h-9 flex items-center justify-center rounded-full nav-glass text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-lg active:scale-95 border border-black/5 dark:border-white/5" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/A_R_Rahat" className="w-9 h-9 flex items-center justify-center rounded-full nav-glass text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-lg active:scale-95 border border-black/5 dark:border-white/5" target="_blank" rel="noopener noreferrer">
            <BsTwitterX />
          </a>
        </motion.div>
      </nav>
    </motion.header>
  );
}
