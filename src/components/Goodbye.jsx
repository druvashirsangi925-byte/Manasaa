import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart, RefreshCw } from "lucide-react";

const Goodbye = () => {
  const triggerConfetti = () => {
    const colors = ["#EAB308", "#DC2626", "#FFFFFF"];
    
    // Left burst
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: colors
    });
    
    // Right burst
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: colors
    });
  };

  // Trigger confetti when section appears
  useEffect(() => {
    triggerConfetti();
  }, []);

  const handleReplay = () => {
    triggerConfetti();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <section id="goodbye" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden z-10">
      
      {/* Stars Twinkle background simulation */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-white rounded-full animate-ping" />
      <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300" />
      <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-white rounded-full animate-ping delay-700" />

      {/* Ambient background glows */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-softgold/5 to-germany-red/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-xl z-10 flex flex-col items-center space-y-8">
        
        {/* Animated Heart */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600/20 to-amber-500/20 border border-white/10 flex items-center justify-center text-red-500 shadow-xl"
        >
          <Heart className="w-10 h-10 fill-red-500 animate-pulse-slow" />
        </motion.div>

        {/* Headings */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-cinematic font-bold text-white tracking-tight"
          >
            Fly High, Manasaaa ❤️
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg font-luxury text-gray-300 max-w-md mx-auto leading-relaxed font-light"
          >
            May Germany give you everything you dreamed of.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-4"
          >
            Don't forget me.
          </motion.p>
        </div>

        {/* Trigger button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button
            onClick={handleReplay}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-softgold/50 text-white font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)] transition-all duration-300 active:scale-95 group font-luxury cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-gray-400 group-hover:text-softgold group-hover:rotate-180 transition-all duration-500" />
            Replay Journey
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Goodbye;
