"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const achievements = [
  "LaserHacks Finalist",
  "IBM Generative AI Certification",
  "AWS Cloud Badges",
  "LeetCode Progress"
];

const education = {
  degree: "B.Tech Computer Science Engineering",
  school: "VIT-AP University",
  gpa: "CGPA: 8.10"
};

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-12">
            <span className="text-muted-foreground text-xl font-mono font-normal">05.</span>
            Education
          </h2>
          <Card className="p-6 glass-card border-foreground/10">
            <GraduationCap className="text-foreground/70 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
            <p className="text-muted-foreground text-lg mb-2">{education.school}</p>
            <p className="text-foreground/80 font-mono">{education.gpa}</p>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-12">
            <span className="text-muted-foreground text-xl font-mono font-normal">06.</span>
            Achievements
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-foreground/5 border border-foreground/5"
              >
                <Award className="text-foreground/70" size={20} />
                <span className="text-foreground/90 font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
