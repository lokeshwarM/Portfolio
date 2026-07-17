"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const titles = [
  "Backend Engineer",
  "Spring Boot Developer",
  "AI Systems Developer",
  "Full Stack Engineer",
];

export const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          Hi, I&apos;m <span className="text-foreground">Lokeshwar.</span>
        </h1>
        
        <div className="h-12 md:h-16 mb-6 flex items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="text-3xl md:text-5xl font-semibold text-muted-foreground"
            >
              {titles[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
        >
          I build scalable backend architectures, AI-powered applications, real-time systems, and production-ready software.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg" className="rounded-full gap-2">
            <Download size={18} /> Resume
          </Button>
          <Link href="https://github.com" target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full gap-2 glass" })}>
            <FaGithub size={18} /> GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full gap-2 glass" })}>
            <FaLinkedin size={18} /> LinkedIn
          </Link>
          <Link href="#contact" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full gap-2 glass" })}>
            <Mail size={18} /> Contact
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
