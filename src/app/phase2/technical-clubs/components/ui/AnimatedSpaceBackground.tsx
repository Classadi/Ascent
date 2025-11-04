"use client";

import { motion } from "framer-motion";

export default function AnimatedSpaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cosmic gradient base */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#0b132b] via-[#1c2541] to-[#3a506b]"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween",
        }}
      />

      {/* Stars layer */}
      <motion.div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-70"
        animate={{
          backgroundPositionX: ["0%", "100%"],
          backgroundPositionY: ["0%", "100%"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
          type: "tween",
        }}
      />

      {/* Nebula layer */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.25),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.25),transparent_70%)] mix-blend-screen"
        animate={{
          backgroundPositionX: ["0%", "50%", "0%"],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween",
        }}
      />

      {/* Fog/Aurora layer */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,255,209,0.2),transparent_70%)] mix-blend-overlay"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween",
        }}
      />
    </div>
  );
}
