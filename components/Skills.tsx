"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChipBadge } from "./ui/ChipBadge";
import { SKILL_CATEGORIES } from "../lib/data";

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section id="skills" className="py-24 bg-surface-container/30 relative">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] font-bold text-primary mb-2 uppercase">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-on-surface">Tech Stack</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-surface border border-outline/10 shadow-elevation-1"
            >
              <h4 className="text-xl font-bold mb-6 text-on-surface border-b border-outline/20 pb-4 inline-block pr-12">
                {category.title}
              </h4>
              
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div key={sIdx} variants={itemVariants}>
                    <ChipBadge 
                      label={skill.name} 
                      icon={skill.icon} 
                      className="bg-surface-container"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
