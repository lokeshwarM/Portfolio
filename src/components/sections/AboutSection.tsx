"use client";

import { motion } from "framer-motion";

const interests = [
  "Backend Engineering",
  "Distributed Systems",
  "AI Infrastructure",
  "System Design",
  "Scalable Architecture",
  "Cloud Engineering",
  "Real-Time Applications"
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
          <span className="text-muted-foreground text-xl font-mono font-normal">01.</span>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>
              I am a passionate software engineer with strong experience building backend systems using Java, Spring Boot, PostgreSQL, Next.js, AI APIs, and cloud deployment.
            </p>
            <p>
              I specialize in designing resilient architectures and integrating AI capabilities into production-grade applications, constantly striving for performance and clean code.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Core Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-medium hover:bg-foreground/10 transition-colors"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
