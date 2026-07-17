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
      className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4 w-full"
    >
      <nav className="glass px-4 md:px-8 py-3 rounded-full flex items-center gap-3 md:gap-8 text-xs md:text-sm font-medium text-black/70 dark:text-white/70 max-w-full overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <MagneticButton><Link href="#about" className="hover:text-black dark:hover:text-white transition-colors shrink-0">About</Link></MagneticButton>
        <MagneticButton><Link href="#stack" className="hover:text-black dark:hover:text-white transition-colors shrink-0">Stack</Link></MagneticButton>
        <MagneticButton><Link href="#projects" className="hover:text-black dark:hover:text-white transition-colors shrink-0">Projects</Link></MagneticButton>
        <MagneticButton><Link href="#design" className="hover:text-black dark:hover:text-white transition-colors shrink-0">System Design</Link></MagneticButton>
        <MagneticButton><Link href="#contact" className="hover:text-black dark:hover:text-white/70 transition-colors shrink-0">Contact</Link></MagneticButton>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
};
