
import React from "react";
import { motion } from "framer-motion";

export default function Preloader({ onFinish }) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      onAnimationComplete={onFinish}
    >
      <motion.h1
        className="text-white text-4xl md:text-6xl font-bold tracking-widest"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        STARK
      </motion.h1>
    </motion.div>
  );
}
