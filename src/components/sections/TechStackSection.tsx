"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const techStack = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C++"]
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Next.js", "React", "Node.js"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "Railway", "Vercel", "Neon", "Git", "Linux"]
  },
  {
    category: "AI",
    items: ["OpenAI", "Whisper", "RAG", "LLMs", "NLP", "IBM Generative AI"]
  },
  {
    category: "Real-time & Security",
    items: ["WebSockets", "WebRTC", "Server Sent Events", "JWT", "REST APIs"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const TechStackSection = () => {
  return (
    <section id="stack" className="py-24 relative">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
          <span className="text-muted-foreground text-xl font-mono font-normal">02.</span>
          Tech Stack
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {techStack.map((category) => (
          <motion.div key={category.category} variants={itemVariants}>
            <Card className="p-6 h-full glass-card hover:bg-foreground/5 transition-colors border-foreground/10 group">
              <h3 className="text-lg font-semibold mb-4 text-foreground/90 group-hover:text-foreground transition-colors">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-md text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
