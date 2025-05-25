"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className }) => {
  return (
    <motion.h1 
      className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#f9c900] text-glow ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedTitle;
