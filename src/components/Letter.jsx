import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MailOpen, X } from "lucide-react";

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const letterText = `Dear Manasaaa,

Tonight, you are beginning a beautiful new chapter in your life.

Aram irra masta enjoy mad hatra haled past yalla yen madbek annkondi adna correct agi mad yar maat nu kel beda savra jana savra heltara yenu tali kedskobeda ninga nanna inda yene bejar agidru i am realy sorry monne alle temple holgiddu yene bejar agidru nu sorrry misss uhh Manasaaaaaaa.

I am truly happy to see you moving forward and chasing your goals.

I hope you stay happy, stay safe, keep smiling, and achieve everything you wish for.

And if someday you remember the people who silently wished the best for you,
I hope you remember me too.

Happy Journey, Manasaaa husharuuuu.

You will be missed.`;

  return (
    <section id="letter" className="relative py-24 px-6 overflow-hidden z-10">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-softgold/5 filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-softgold text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <span>A Personal Note</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white tracking-tight"
          >
            Letter to Manasaaa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 text-sm font-luxury"
          >
            Click the envelope below to open the private note.
          </motion.p>
        </div>

        {/* Interactive Envelope */}
        <div className="flex justify-center items-center py-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              // Closed Envelope Button
              <motion.div
                key="envelope"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(true)}
                className="w-72 h-48 rounded-2xl glass-card-gold border border-softgold/35 flex flex-col justify-center items-center cursor-pointer relative group transition-all duration-300"
              >
                {/* Glow rings */}
                <div className="absolute -inset-1 rounded-2xl bg-softgold/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-pulse-slow" />

                <Mail className="w-16 h-16 text-softgold mb-4 group-hover:rotate-12 transition-transform duration-500" />
                <span className="text-sm font-bold text-white font-luxury uppercase tracking-widest">
                  Open Letter ✉️
                </span>
                <span className="text-[10px] text-gray-500 font-luxury mt-1 group-hover:text-gray-300 transition-colors">
                  Written from the heart
                </span>
              </motion.div>
            ) : (
              // Open Letter Sheet
              <motion.div
                key="letter-sheet"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl paper-texture border border-amber-900/10 p-6 md:p-10 relative text-left"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-amber-900/5 text-amber-900/60 hover:text-amber-900 transition-colors cursor-pointer"
                  title="Close Letter"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Open mail icon watermark */}
                <MailOpen className="absolute bottom-6 right-6 w-16 h-16 text-amber-900/5 pointer-events-none" />

                {/* Letter Content */}
                <div className="text-amber-950 font-handwriting text-xl sm:text-2xl leading-loose font-normal whitespace-pre-wrap select-text max-h-[50vh] overflow-y-auto pr-2 custom-letter-scrollbar">
                  {letterText}
                </div>

                {/* Lined Paper Lines decoration */}
                <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none border border-amber-900/5 rounded-2xl m-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Letter;
