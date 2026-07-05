import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import FloatingImage from "./FloatingImage";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden z-10">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-softgold/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-germany-red/5 filter blur-[120px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-softgold" />
            <span>To Someone Truly Special</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-cinematic font-bold text-white tracking-tight"
          >
            Wishing You the Best
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glass Card Description */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-gold p-8 md:p-10 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-softgold/5 rounded-full filter blur-xl pointer-events-none" />

              <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base sm:text-lg">
                <div className="font-semibold text-white font-luxury border-b border-white/5 pb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-softgold fill-softgold/20 animate-pulse" />
                  <span>Chasing Dreams in Germany</span>
                </div>

                <p className="font-luxury">
                  Seeing you begin this new journey makes me truly happy.
                </p>

                <p className="font-luxury">
                  Germany is waiting with new opportunities, new people, and beautiful experiences.
                </p>

                <p className="font-luxury text-softgold/90 font-medium italic border-l-2 border-softgold/50 pl-4 py-1">
                  "I hope every step brings you closer to your dreams."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Images Side-by-Side */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[300px] w-full">
            
            {/* Image 4 */}
            <FloatingImage
              src="/images/her4.jpg"
              alt="Manasaaa Focused"
              className="w-full max-w-[220px]"
              rotation="rotate-[-4deg]"
              duration={7}
              delay={0.5}
            />

            {/* Image 5 */}
            <FloatingImage
              src="/images/her5.jpg"
              alt="Manasaaa Sunset"
              className="w-full max-w-[200px] mt-6 sm:mt-12"
              rotation="rotate-[3deg]"
              duration={6.5}
              delay={2}
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
