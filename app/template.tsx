"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: "-100vw", rotateY: 45, scaleY: 0.01 }} // Start off-screen left, quarter view, no scale
        animate={{ x: 0, rotateY: 0, scaleY: 1 }} // Move to center, normal view, then scale Y-axis
        exit={{ x: "100vw", rotateY: 45, scaleY: 0 }} // Optional exit (moves out to the right)
        transition={{
          x: { duration: 2, ease: "easeInOut" }, // First, slow slide from left to center (2 seconds)
          rotateY: { duration: 2, ease: "easeInOut" }, // Rotate together with X-axis animation
          scaleY: { duration: 2, ease: "easeOut", delay: 2 }, 
        }}
        style={{
         
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", 
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;
