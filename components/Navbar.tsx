"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Clear active section when on hero page (top of page)
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 100) {
      setActiveSection("");
    }
  });

  useEffect(() => {
    const observers = new Map();
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const opt = { root: null, rootMargin: "-40% 0px -60% 0px", threshold: 0 };
    const observer = new IntersectionObserver(handleIntersect, opt);

    NAV_LINKS.forEach(link => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surface-container shadow-elevation-1 py-4"
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a 
          href="#top" 
          onClick={(e) => handleClick(e, "#top")}
          className="text-xl font-mono font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">dranehm</span>.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-on-surface hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1, visibility: "visible" },
          closed: { height: 0, opacity: 0, visibility: "hidden" }
        }}
        className="md:hidden overflow-hidden bg-surface-container border-b border-outline/20"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-lg py-2 font-medium ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-on-surface"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
