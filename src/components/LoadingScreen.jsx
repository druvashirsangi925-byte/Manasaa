import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Happy Journey Manasaaa Miss uhhhh!";

  // Typist effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Progress bar simulator
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(() => {
              if (onFinished) onFinished();
            }, 800); // Allow fade out animation to finish
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 5);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight text-white px-6"
        >
          {/* Glowing Background Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-softgold/5 filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-germany-red/5 filter blur-[120px] animate-pulse-slow" />

          {/* Letter / Quote Container */}
          <div className="text-center max-w-2xl z-10 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-2xl font-cinematic italic text-gray-300 min-h-[64px] typing-cursor"
            >
              {displayText}
            </motion.p>

            {/* Glowing Progress bar */}
            <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full mt-10 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full bg-gradient-to-r from-softgold via-germany-red to-softgold shadow-[0_0_8px_#EAB308]"
                transition={{ ease: "easeInOut", duration: 0.2 }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xs font-luxury text-softgold mt-3 tracking-widest uppercase font-semibold"
            >
              {Math.min(progress, 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
