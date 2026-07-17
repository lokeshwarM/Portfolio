"use client";

import { motion } from "framer-motion";
import { Server, Database, Activity, Lock, Cloud, Workflow } from "lucide-react";

const topics = [
  { name: "REST API Design", icon: Server },
  { name: "Authentication & JWT", icon: Lock },
  { name: "Database Design", icon: Database },
  { name: "Caching", icon: Activity },
  { name: "Scalable Architecture", icon: Cloud },
  { name: "Event Streaming", icon: Workflow },
  { name: "Microservices", icon: Server },
  { name: "Distributed Systems", icon: Cloud },
  { name: "Real-time Communication", icon: Activity },
  { name: "API Integrations", icon: Workflow },
];

export const SystemDesignSection = () => {
  return (
    <section id="design" className="py-24 relative">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
          <span className="text-muted-foreground text-xl font-mono font-normal">04.</span>
          System Design
        </h2>
      </div>

      <div className="relative border-l border-foreground/10 ml-4 md:ml-6 pl-8 md:pl-12 py-4 space-y-12">
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[45px] md:-left-[61px] p-2 bg-background border border-foreground/10 rounded-full text-foreground/70">
              <topic.icon size={16} />
            </div>
            <h3 className="text-xl font-semibold text-foreground/90">{topic.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
