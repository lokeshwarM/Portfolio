"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-muted-foreground font-mono mb-4">07. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          I am currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <Card className="p-8 glass-card border-foreground/10 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="mailto:lokeshwar@example.com" className={buttonVariants({ size: "lg", className: "rounded-full gap-2 w-full md:w-auto" })}>
            <Mail size={18} /> Say Hello
          </Link>
          <Link href="https://github.com" target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "glass rounded-full gap-2 w-full md:w-auto" })}>
            <FaGithub size={18} /> GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className={buttonVariants({ size: "lg", variant: "outline", className: "glass rounded-full gap-2 w-full md:w-auto" })}>
            <FaLinkedin size={18} /> LinkedIn
          </Link>
        </Card>
      </motion.div>
    </section>
  );
};
