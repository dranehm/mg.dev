"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "icon" | "ghost";
  children: React.ReactNode;
  magnetic?: boolean;
}

export function Button({ 
  variant = "filled", 
  children, 
  magnetic = false,
  className = "", 
  ...props 
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const maxTranslate = 10;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (-1 to 1)
    const distanceX = (clientX - centerX) / (width / 2);
    const distanceY = (clientY - centerY) / (height / 2);

    x.set(distanceX * maxTranslate);
    y.set(distanceY * maxTranslate);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (magnetic) {
      x.set(0);
      y.set(0);
    }
  };

  const baseClasses = "ripple relative inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-full whitespace-nowrap";
  
  const variants = {
    filled: "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-6 py-3 shadow-elevation-1 hover:shadow-elevation-2 shadow-primary/20",
    outlined: "border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3",
    icon: "p-4 bg-surface-container hover:bg-surface-container-high border border-outline/30 text-primary shadow-elevation-1 rounded-2xl hover:shadow-elevation-2",
    ghost: "px-4 py-2 text-on-surface hover:bg-surface-container hover:text-primary rounded-full"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={magnetic ? { x: springX, y: springY } : {}}
      whileTap={{ scale: 0.96 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
