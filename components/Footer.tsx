"use client";

import React from "react";
import { SiGithub as Github } from 'react-icons/si';
import { BsLinkedin as Linkedin } from 'react-icons/bs';
import { HiMail as Mail } from 'react-icons/hi';
import { PROFILE } from "../lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-high py-12 border-t border-outline/10 text-on-surface-variant flex flex-col items-center gap-6">
      <div className="flex gap-6">
        <a 
          href={PROFILE.socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href={PROFILE.socials.email} 
          className="hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container"
        >
          <Mail size={20} />
        </a>
        <a 
          href="https://github.com/dranehm" // Placeholder since no github provided
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-container"
        >
          <Github size={20} />
        </a>
      </div>
      
      <p className="font-mono text-sm tracking-wide text-center px-4">
        &copy; dranehm.dev &middot; {PROFILE.fullName} &middot; All rights reserved.
      </p>
    </footer>
  );
}
