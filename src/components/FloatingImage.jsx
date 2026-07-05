import React from "react";
import { motion } from "framer-motion";

const FloatingImage = ({
  src,
  alt = "Manasaaa",
  className = "",
  rotation = "rotate-0",
  delay = 0,
  duration = 6,
  aspectRatio = "aspect-[3/4]"
}) => {
  const handleImageError = (e) => {
    // If we've already tried the fallback extension, load the placeholder
    if (e.target.dataset.triedFallback === "true") {
      e.target.onerror = null; // Prevent infinite loop
      e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
      return;
    }
    
    const currentSrc = e.target.src;
    e.target.dataset.triedFallback = "true";
    
    // Swap extension from .jpg to .jpeg or vice versa
    if (/\.jpg$/i.test(currentSrc)) {
      e.target.src = currentSrc.replace(/\.jpg$/i, ".jpeg");
    } else if (/\.jpeg$/i.test(currentSrc)) {
      e.target.src = currentSrc.replace(/\.jpeg$/i, ".jpg");
    } else {
      e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
    }
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-12, 12, -12] }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
      className={`relative group pointer-events-auto ${className}`}
    >
      {/* Outer Golden Glow Border */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-softgold/20 via-transparent to-white/5 opacity-60 blur-[3px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[6px]" />

      {/* Frame Container */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-white/10 glass-card p-2 md:p-3 transition-all duration-500 ${rotation} group-hover:rotate-0 group-hover:scale-105 shadow-xl`}
      >
        <div className={`overflow-hidden rounded-xl bg-deepnavy ${aspectRatio}`}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={handleImageError}
          />
        </div>
        {/* Visual glass reflection highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default FloatingImage;
