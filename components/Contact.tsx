"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuMail as Mail, LuLinkedin as Linkedin, LuPhoneCall as PhoneCall, LuSend as Send } from 'react-icons/lu';
import { Button } from "./ui/Button";
import { PROFILE } from "../lib/data";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate UI-only form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for reaching out! This is a UI demo, but you can email me directly at " + PROFILE.socials.email);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 bg-surface relative">
      <div className="container px-6 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono tracking-[0.2em] font-bold text-primary mb-2 uppercase">Contact</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-on-surface mb-8">Let's Work Together</h3>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
            Whether you have a question, a project proposal, or just want to connect, feel free to reach out. I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 justify-center items-center lg:items-start text-left">
          {/* Social Links */}
          <motion.div 
            className="flex lg:flex-col gap-6 w-full lg:w-auto shrink-0 justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href={PROFILE.socials.email} className="group relative">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container/50 border border-outline/20 hover:bg-surface-container-high transition-colors shadow-elevation-1 hover:shadow-elevation-2">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex justify-center items-center group-hover:scale-110 transition-transform">
                  <Mail />
                </div>
                <div className="hidden lg:block">
                  <span className="block text-sm text-on-surface-variant font-mono">Email</span>
                  <span className="text-on-surface font-medium block">mdgalapate@gmail.com</span>
                </div>
              </div>
            </a>
            
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container/50 border border-outline/20 hover:bg-surface-container-high transition-colors shadow-elevation-1 hover:shadow-elevation-2">
                <div className="w-12 h-12 bg-[#0077b5]/10 text-[#0077b5] rounded-xl flex justify-center items-center group-hover:scale-110 transition-transform">
                  <Linkedin />
                </div>
                <div className="hidden lg:block">
                  <span className="block text-sm text-on-surface-variant font-mono">LinkedIn</span>
                  <span className="text-on-surface font-medium block">in/drnhmg</span>
                </div>
              </div>
            </a>

            <a href={PROFILE.socials.phone} className="group relative">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container/50 border border-outline/20 hover:bg-surface-container-high transition-colors shadow-elevation-1 hover:shadow-elevation-2">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex justify-center items-center group-hover:scale-110 transition-transform">
                  <PhoneCall />
                </div>
                <div className="hidden lg:block">
                  <span className="block text-sm text-on-surface-variant font-mono">Phone</span>
                  <span className="text-on-surface font-medium block">(+63) 9368214529</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full max-w-md p-8 bg-surface-container rounded-3xl border border-outline/20 shadow-elevation-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="name" className="text-sm font-mono text-on-surface-variant shrink-0 relative bg-surface-container px-2 w-max -mb-5 ml-4 z-10 transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-surface border border-outline/50 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full relative z-0" 
                />
              </div>
              <div className="flex flex-col gap-2 relative mt-4">
                <label htmlFor="email" className="text-sm font-mono text-on-surface-variant shrink-0 relative bg-surface-container px-2 w-max -mb-5 ml-4 z-10">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-surface border border-outline/50 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full relative z-0" 
                />
              </div>
              <div className="flex flex-col gap-2 relative mt-4">
                <label htmlFor="message" className="text-sm font-mono text-on-surface-variant shrink-0 relative bg-surface-container px-2 w-max -mb-5 ml-4 z-10">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="bg-surface border border-outline/50 rounded-xl px-4 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full relative z-0 resize-none pt-6" 
                ></textarea>
              </div>
              
              <Button type="submit" variant="filled" className="mt-4 gap-2 w-full flex justify-center py-4" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"} 
                {!isSubmitting && <Send size={18} />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
