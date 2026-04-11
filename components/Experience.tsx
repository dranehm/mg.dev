"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { EXPERIENCE } from "../lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden">
      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono tracking-[0.2em] font-bold text-primary mb-2 uppercase">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-on-surface">Experience</h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline/30 transform md:-translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden sm:flex z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-10%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,229,255,0.8)] ring-4 ring-surface"
                    />
                  </div>

                  {/* Desktop Layout Pattern */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`w-full sm:w-[calc(100%-5rem)] sm:ml-20 md:w-[calc(50%-3rem)] md:ml-0 ${
                      isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <Card hoverable className="h-full bg-surface-container/80 backdrop-blur-sm border-t-2 border-t-primary/50 relative overflow-hidden group">
                      
                      {/* Subtle hover background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold">{item.date}</span>
                        <h4 className="text-xl font-bold text-on-surface">{item.title}</h4>
                        <span className="text-sm font-medium text-on-surface-variant flex items-center md:items-start gap-1">
                          <span className={`hidden md:inline-block ${isEven ? "order-last ml-2" : "mr-2"}`}>•</span> 
                          {item.company} | {item.location}
                        </span>
                      </div>
                      <p className="text-on-surface-variant/90 leading-relaxed text-[15px]">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
