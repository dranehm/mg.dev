"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ChipBadgeProps extends HTMLMotionProps<"div"> {
  icon?: React.ReactNode;
  label: string;
}

export function ChipBadge({ icon, label, className = "", ...props }: ChipBadgeProps) {
  const baseClasses = "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-surface text-on-surface hover:border-primary hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-shadow duration-300";

  return (
    <motion.div 
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {icon && <span className="text-primary text-lg">{icon}</span>}
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </motion.div>
  );
}
