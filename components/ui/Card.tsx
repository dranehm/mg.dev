"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export function Card({ children, hoverable = false, className = "", ...props }: CardProps) {
  const baseClasses = "bg-surface-container rounded-2xl p-6 border border-outline/10 shadow-elevation-1";
  
  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hoverable ? { y: -6, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
