import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

const galleryImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/images/her${i + 1}.jpg`,
  title: `Moment ${i + 1}`,
  caption: `Chasing dreams, creating stories`
}));

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

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
    <section id="gallery" className="relative py-24 px-6 overflow-hidden z-10">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-softgold/5 filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-softgold text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frames of Manasaaa</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white tracking-tight"
          >
            Frames of Manasaaa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 text-sm max-w-md mx-auto font-luxury"
          >
            A visual showcase of memories. Click any image to view in full resolution.
          </motion.p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.4) }}
              onClick={() => setSelectedIdx(index)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden glass-card border border-white/10 p-2 group cursor-pointer shadow-lg hover:border-softgold/30 transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-xl bg-deepnavy">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1px]"
                  onError={handleImageError}
                />
                
                {/* Hover Text Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <Maximize2 className="absolute top-4 right-4 w-5 h-5 text-softgold opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <h4 className="text-base font-bold font-luxury text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                  </h4>
                  <p className="text-xs text-softgold font-luxury transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.caption}
                  </p>
                </div>
              </div>

              {/* Outer Glow Highlight */}
              <div className="absolute inset-0 rounded-2xl border border-softgold/0 group-hover:border-softgold/20 pointer-events-none transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-midnight/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Close trigger background */}
            <div className="absolute inset-0" onClick={() => setSelectedIdx(null)} />

            {/* Top Toolbar */}
            <div className="absolute top-6 left-6 text-left z-50 pointer-events-none">
              <span className="text-xs font-luxury text-gray-500 tracking-wider">
                IMAGE {selectedIdx + 1} OF {galleryImages.length}
              </span>
              <h3 className="text-lg font-cinematic font-bold text-white">
                {galleryImages[selectedIdx].title}
              </h3>
            </div>

            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:border-softgold/40 text-white hover:text-softgold transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 hover:border-softgold/40 text-white hover:text-softgold transition-all active:scale-95 shadow-md cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-[80vh] z-10 flex flex-col items-center justify-center pointer-events-none"
            >
              <img
                src={galleryImages[selectedIdx].src}
                alt={galleryImages[selectedIdx].title}
                className="max-w-full max-h-[72vh] rounded-lg border border-white/10 object-contain shadow-2xl"
                onError={handleImageError}
              />
              <p className="text-sm font-luxury text-gray-400 italic text-center mt-4">
                "{galleryImages[selectedIdx].caption}"
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
