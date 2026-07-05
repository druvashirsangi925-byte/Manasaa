import React from "react";
import { motion } from "framer-motion";

const BackgroundGlows = () => {
  return (
    <div className="fixed inset-0 -z-30 pointer-events-none overflow-hidden bg-midnight">
      {/* Orb 1: Gold - Desktop Only (More Vibrant) */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [-40, 40, -40],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-softgold/16 filter blur-[120px] opacity-85"
      />

      {/* Orb 2: Red/Gold Hybrid - Visible on Desktop & Mobile (Vibrant Nebula) */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
          scale: [1.05, 0.95, 1.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] rounded-full bg-gradient-to-tr from-red-600/18 via-softgold/12 to-blue-900/5 filter blur-[80px] md:blur-[160px] opacity-90"
      />

      {/* Orb 3: Space Navy Blue - Desktop Only (More Depth) */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [30, -30, 30],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-[25%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/28 filter blur-[150px] opacity-85"
      />
    </div>
  );
};

export default BackgroundGlows;
