import { FEATURES } from "../data";
import { FileText, TrendingUp, Layers, Users, GraduationCap, Target, Briefcase, Cpu } from "lucide-react";

export default function WhyChoose() {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-6 h-6 text-brand-accent" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-violet-400" />;
      case "Users":
        return <Users className="w-6 h-6 text-amber-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case "Target":
        return <Target className="w-6 h-6 text-pink-400" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-rose-400" />;
      default:
        return <Cpu className="w-6 h-6 text-brand-accent" />;
    }
  };

  return (
    <section id="why-choose" className="py-24 bg-[#0a0016] border-y border-brand-purple/10 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-purple/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-mono block mb-2">
            Institutional Advantages
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Why Choose CyberWise?
          </h2>
          <p className="font-sans text-slate-300 mt-4 text-base sm:text-lg font-light">
            We deliver the ideal alchemy of academic credentials, state-of-the-art tooling access, and intensive project labs tailored for rapid progression.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-brand-purple/10 hover:-translate-y-1 border border-brand-purple/10 hover:border-brand-purple/30 group"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-brand-dark/80 border border-brand-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-purple/40 transition-all duration-300">
                  {getFeatureIcon(feat.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-slate-300 text-sm font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bottom detail arrow hint */}
              <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-slate-400">Hub Excellence</span>
                <span className="text-brand-accent text-sm">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
