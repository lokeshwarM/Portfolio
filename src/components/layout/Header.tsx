"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "../ui/magnetic-button";
import { ThemeToggle } from "../ui/theme-toggle";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4"
    >
      <nav className="glass px-8 py-3 rounded-full flex items-center gap-8 text-sm font-medium text-black/70 dark:text-white/70">
        <MagneticButton><Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</Link></MagneticButton>
        <MagneticButton><Link href="#stack" className="hover:text-black dark:hover:text-white transition-colors">Stack</Link></MagneticButton>
        <MagneticButton><Link href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link></MagneticButton>
        <MagneticButton><Link href="#design" className="hover:text-black dark:hover:text-white transition-colors">System Design</Link></MagneticButton>
        <MagneticButton><Link href="#contact" className="hover:text-black dark:hover:text-white/70 transition-colors">Contact</Link></MagneticButton>
        <ThemeToggle />
      </nav>
    </motion.header>
  );
};
