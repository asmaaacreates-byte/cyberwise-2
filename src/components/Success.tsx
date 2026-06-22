import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Success() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-24 bg-[#0a0016] border-y border-brand-purple/10 relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute top-1/2 right-[-5%] w-[40vw] h-[40vw] bg-brand-purple/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-mono block mb-2">
            Success & Validation
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Our Graduates Speak
          </h2>
          <p className="font-sans text-slate-300 mt-4 text-base sm:text-lg font-light">
            Real feedback from ambitious minds who translated CyberWise curriculum pathways directly into career milestones.
          </p>
        </div>

        {/* Carousel layout inside single screen card limits */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-brand-purple/20 shadow-2xl">
            {/* Ambient subtle background quote sign */}
            <Quote className="absolute right-8 top-8 w-24 h-24 text-brand-purple/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Left Side: Avatar & Core Tag */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-brand-purple p-1 mb-4 bg-brand-dark shadow-inner shadow-brand-purple">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-white">{current.name}</h3>
                    <p className="text-xs text-brand-accent font-mono mt-0.5">{current.role}</p>
                    <span className="inline-block mt-3 px-3 py-1 bg-brand-purple/10 border border-brand-purple/20 rounded-full text-[10px] font-sans font-medium text-slate-300">
                      {current.course}
                    </span>
                  </div>
                </div>

                {/* Right Side: Message & Star metrics */}
                <div className="md:col-span-8 flex flex-col justify-center">
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="font-sans text-slate-300 text-base sm:text-lg italic font-light leading-relaxed mb-6 text-center md:text-left">
                    “{current.feedback}”
                  </p>

                  <div className="h-0.5 w-12 bg-gradient-to-r from-brand-purple to-purple-400 mx-auto md:mx-0" />
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              id="slider-prev-btn"
              className="p-3 bg-brand-dark/80 hover:bg-brand-purple/20 rounded-full border border-brand-purple/30 text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === index ? "w-6 bg-brand-accent" : "w-2 bg-brand-purple/40"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              id="slider-next-btn"
              className="p-3 bg-brand-dark/80 hover:bg-brand-purple/20 rounded-full border border-brand-purple/30 text-white transition-all hover:scale-105 active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
