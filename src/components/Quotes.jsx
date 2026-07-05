import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  "Distance means so little when someone means so much.",
  "Every goodbye creates space for an even better hello.",
  "Friendship never needs a passport.",
  "Miles apart, always connected.",
  "Go where your dreams take you."
];

const Quotes = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 px-6 overflow-hidden z-10">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Glass Card Quote Container */}
        <div className="glass-card border border-white/5 rounded-2xl p-8 md:p-12 relative flex flex-col items-center shadow-lg">
          {/* Decorative quote mark */}
          <Quote className="w-10 h-10 text-softgold/30 mb-6 rotate-180" />

          {/* Animating Quotes */}
          <div className="min-h-[100px] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg sm:text-2xl font-cinematic italic text-gray-200 leading-relaxed"
              >
                "{quotes[index]}"
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-softgold w-6" : "bg-white/10"
                }`}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
