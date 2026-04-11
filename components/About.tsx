"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { PROFILE } from "../lib/data";

export function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] font-bold text-primary mb-2 uppercase">Background</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-on-surface">About Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-on-surface-variant leading-relaxed"
          >
            <p className="mb-6">{PROFILE.bio}</p>
            <p>
              My expertise isn't just in writing code—it’s in understanding the infrastructure 
              where that code lives and ensuring seamless operations. Whether it's diagnosing a 
              critical network issue, optimizing database designs, or integrating third-party 
              APIs into a polished frontend, I handle problems across the full spectrum of IT.
            </p>
          </motion.div>

          {/* Quick Facts Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card hoverable className="h-full bg-surface-container/50 border-primary/20 backdrop-blur-sm shadow-primary/5">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-3 text-on-surface">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">⚡</span>
                Quick Facts
              </h4>
              <ul className="space-y-6">
                {PROFILE.quickFacts.map((fact, index) => (
                  <motion.li 
                    key={index} 
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-2xl pt-1 flex-shrink-0">{fact.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider font-mono text-on-surface-variant/70 mb-1">{fact.label}</span>
                      <span className="text-base text-on-surface font-medium leading-snug">{fact.value}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
