"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "TraceLM",
    description: "Production-grade AI Observability Platform built using Spring Boot, Next.js, PostgreSQL, Neon, Railway, and Vercel.",
    features: ["LLM Streaming", "Provider Abstraction", "RAG", "Document Intelligence", "Observability Dashboard", "Conversation Management", "Real-time Streaming", "Metrics", "Memory", "Model Comparison"],
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "Neon", "Railway", "Vercel", "OpenAI", "Gemini"],
    github: process.env.NEXT_PUBLIC_TRACELM_GITHUB || "https://github.com/lokeshwarM/TraceLM",
    live: process.env.NEXT_PUBLIC_TRACELM_LIVE || "https://github.com/lokeshwarM"
  },
  {
    title: "Express",
    description: "AI-powered real-time communication and billing platform featuring authentication, session management, WebRTC, OpenAI Whisper transcription, JWT security, and PostgreSQL.",
    features: ["WebRTC", "AI Transcription", "Session Billing", "Ledger", "Authentication", "REST APIs", "AWS Deployment"],
    tech: ["WebRTC", "OpenAI Whisper", "JWT", "PostgreSQL", "AWS"],
    githubLinks: [
      { label: "Frontend", url: process.env.NEXT_PUBLIC_EXPRESS_FRONTEND_GITHUB || "https://github.com/lokeshwarM/Express-Frontend" },
      { label: "Backend", url: process.env.NEXT_PUBLIC_EXPRESS_BACKEND_GITHUB || "https://github.com/lokeshwarM/Express-Backend" }
    ],
    live: process.env.NEXT_PUBLIC_EXPRESS_LIVE || "https://github.com/lokeshwarM"
  },
  {
    title: "Resume Screening Assistant",
    description: "Machine Learning based resume classification system.",
    features: ["NLP", "Classification", "Logistic Regression", "TF-IDF"],
    tech: ["Python", "Scikit-learn"],
    github: process.env.NEXT_PUBLIC_RESUME_GITHUB || "https://github.com/lokeshwarM/Resume-Screening",
    live: process.env.NEXT_PUBLIC_RESUME_LIVE || "https://github.com/lokeshwarM"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
          <span className="text-muted-foreground text-xl font-mono font-normal">03.</span>
          Featured Projects
        </h2>
      </div>

      <div className="space-y-24">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Project Info */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''} z-10`}>
                <p className="text-muted-foreground font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-foreground/80 transition-colors">{project.title}</h3>
                
                <Card className="p-6 glass-card border-foreground/10 mb-6 backdrop-blur-xl">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.features.map(f => (
                      <Badge key={f} variant="outline" className="bg-foreground/5 text-foreground/80 border-foreground/10">{f}</Badge>
                    ))}
                  </div>
                </Card>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="font-mono text-sm text-muted-foreground">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubLinks ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className={buttonVariants({ variant: "outline", className: "glass gap-2 rounded-full hover:bg-foreground/10 outline-none cursor-pointer" })}>
                        <FaGithub size={18} /> Code
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="glass border-foreground/10 bg-background/80">
                        {project.githubLinks.map(link => (
                          <DropdownMenuItem key={link.label} className="cursor-pointer" asChild>
                            <Link href={link.url} target="_blank">{link.label} Repo</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link href={project.github!} target="_blank" className={buttonVariants({ variant: "outline", className: "glass gap-2 rounded-full hover:bg-foreground/10" })}>
                      <FaGithub size={18} /> Code
                    </Link>
                  )}
                  <Link href={project.live} target="_blank" className={buttonVariants({ className: "gap-2 rounded-full" })}>
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                </div>
              </div>

              {/* Decorative visual placeholder for project */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''} hidden lg:block relative h-[400px] w-full rounded-2xl overflow-hidden glass-card border-foreground/10`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-foreground/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="w-full h-full flex items-center justify-center bg-foreground/5">
                  <span className="font-mono text-foreground/20 text-8xl font-bold">{project.title.substring(0,1).toUpperCase()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
