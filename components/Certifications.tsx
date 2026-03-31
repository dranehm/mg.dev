"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { CERTIFICATIONS } from "../lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-surface-container/30 relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] font-bold text-primary mb-2 uppercase">Achievements</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-on-surface">Certifications</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <Card hoverable className="h-full flex flex-col items-start gap-4 p-8 relative overflow-hidden group border-outline/20 bg-surface-container">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-12 h-12 bg-surface flex justify-center items-center rounded-2xl shadow-elevation-1 border border-outline/30 text-2xl z-10 transition-transform group-hover:scale-110 duration-300">
                  {cert.icon}
                </div>
                
                <div className="z-10 mt-2">
                  <h4 className="text-lg font-bold text-on-surface leading-snug mb-2 group-hover:text-primary transition-colors">{cert.name}</h4>
                  <div className="text-sm font-medium text-on-surface-variant flex flex-col gap-1">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-xs text-primary">{cert.date}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
