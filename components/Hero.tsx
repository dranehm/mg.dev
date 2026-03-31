"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/Button";
import { PROFILE } from "../lib/data";

export function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % PROFILE.subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const headingText = "Hi, I'm Mhenard.".split("");

  return (
    <section 
      id="top" 
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-surface"
    >
      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/5 rounded-full blur-3xl mix-blend-screen"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-blue-500/5 rounded-full blur-3xl mix-blend-screen"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Staggered Heading Reveal */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface">
            {headingText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className={char === " " ? "mr-3" : ""}
              >
                {char === "M" || char === "h" || char === "e" || char === "n" || char === "a" || char === "r" || char === "d" ? (
                  <span className="text-primary">{char}</span>
                ) : (
                  char
                )}
              </motion.span>
            ))}
          </h1>

          {/* Rotating Subtitle with Typing Cursor Effect base */}
          <div className="h-12 flex items-center justify-center text-xl md:text-3xl font-mono text-on-surface-variant font-medium">
            <span className="mr-2">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSubtitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {PROFILE.subtitles[currentSubtitle]}
              </motion.span>
            </AnimatePresence>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="ml-1 w-[2px] h-6 md:h-8 bg-primary inline-block"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mt-8 mb-12"
          >
            Building systems that are reliable, documented, and maintainable.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              magnetic 
              variant="filled" 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              magnetic 
              variant="outlined"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-outline/30 text-on-surface-variant hover:text-primary hover:border-primary transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
