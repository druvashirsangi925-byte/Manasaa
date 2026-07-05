import React from "react";
import { motion } from "framer-motion";

const bgImages = [
  { src: "/images/her6.jpg", top: "15%", left: "1%", size: "w-28 sm:w-48 md:w-64", delay: 0, duration: 25, rotation: -6 },
  { src: "/images/her7.jpg", top: "35%", right: "1%", size: "w-24 sm:w-40 md:w-56", delay: 5, duration: 29, rotation: 8 },
  { src: "/images/her8.jpg", top: "55%", left: "2%", size: "w-28 sm:w-44 md:w-60", delay: 10, duration: 27, rotation: -5 },
  { src: "/images/her9.jpg", top: "75%", right: "2%", size: "w-32 sm:w-48 md:w-64", delay: 15, duration: 33, rotation: 7 }
];

const BackgroundPhotos = () => {
  const handleImageError = (e) => {
    if (e.target.dataset.triedFallback === "true") {
      e.target.onerror = null;
      e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
      return;
    }
    
    const currentSrc = e.target.src;
    e.target.dataset.triedFallback = "true";
    
    if (/\.jpg$/i.test(currentSrc)) {
      e.target.src = currentSrc.replace(/\.jpg$/i, ".jpeg");
    } else if (/\.jpeg$/i.test(currentSrc)) {
      e.target.src = currentSrc.replace(/\.jpeg$/i, ".jpg");
    } else {
      e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {bgImages.map((img, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: img.top,
            left: img.left || "auto",
            right: img.right || "auto",
          }}
          initial={{ y: 0, rotate: img.rotation }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: img.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: img.delay
          }}
          className={`${img.size} p-1.5 sm:p-3 rounded-xl sm:rounded-2xl border border-white/5 sm:border-white/10 glass-card shadow-[0_10px_25px_rgba(0,0,0,0.5)] opacity-25 sm:opacity-60 md:opacity-75`}
        >
          {/* Polaroid Image Container */}
          <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-deepnavy">
            <img
              src={img.src}
              alt="floating memory background"
              className="w-full h-full object-cover select-none opacity-15 sm:opacity-25 md:opacity-30 grayscale-[15%] contrast-[105%]"
              onError={handleImageError}
            />
            {/* Visual Glass Overlay reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-transparent pointer-events-none" />
          </div>
          
          {/* Mini elegant caption watermark */}
          <div className="text-[7px] sm:text-[9px] font-mono text-white/5 sm:text-white/10 mt-1 sm:mt-2 text-center select-none uppercase tracking-widest">
            Manasaaa
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundPhotos;
