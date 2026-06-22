import { motion } from "motion/react";
import { COURSES } from "../data";
import { Megaphone, Camera, ShoppingBag, Sparkles, Clock, Compass, ChevronRight, Check } from "lucide-react";

interface ProgramsProps {
  onSelectCourse: (courseTitle: string) => void;
}

export default function Programs({ onSelectCourse }: ProgramsProps) {
  // Mapping dynamic string icon labels to actual Lucide component instances
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Megaphone":
        return <Megaphone className="w-6 h-6 text-brand-accent" />;
      case "Camera":
        return <Camera className="w-6 h-6 text-violet-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      default:
        return <Compass className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="programs" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Dynamic graphic particles */}
      <div className="absolute top-[30%] left-[5%] w-96 h-96 bg-purple-900/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-brand-purple/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-mono block mb-2">
            Professional Qualifications
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Comprehensive Skill Mastery
          </h2>
          <p className="font-sans text-slate-300 mt-4 text-base sm:text-lg font-light">
            Our modules are curated based on intensive industry demands. Master modern tactics under mentored, project-centered tracks with direct certification linkages.
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-brand-purple/10 border border-brand-purple/10 hover:border-brand-purple/30"
            >
              {/* Image & Header Overlay block */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Visual rich filter gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/50 to-transparent" />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-brand-dark/85 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-accent" />
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-brand-purple/85 backdrop-blur-md border border-brand-purple/20 rounded-full text-[10px] font-mono font-medium text-brand-accent">
                    {course.level}
                  </span>
                </div>

                {/* Overlaid Title and Icon */}
                <div className="absolute bottom-4 left-6 right-6 flex items-end gap-4">
                  <div className="p-3 bg-brand-dark/90 backdrop-blur-md rounded-2xl border border-brand-purple/30 group-hover:rotate-6 transition-transform">
                    {getIcon(course.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-brand-accent transition-colors">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Course details & features block */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="font-sans text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Highlights section */}
                  <div className="border-t border-brand-purple/10 pt-5 mb-8">
                    <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold block mb-4 font-mono">
                      What you will master:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs text-slate-300 font-sans">
                          <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card footer trigger */}
                <div className="pt-4 border-t border-brand-purple/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCourse(course.title)}
                    className="flex items-center gap-1.5 font-display text-sm font-semibold text-brand-accent hover:text-white transition-colors group/link cursor-pointer"
                  >
                    Select Program & Apply
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] uppercase font-mono text-slate-500">
                    KL Admission Open
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
