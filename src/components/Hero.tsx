import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, Monitor, Camera, Brain, Award, GraduationCap } from "lucide-react";

interface HeroProps {
  onOpenApplyModal: () => void;
}

export default function Hero({ onOpenApplyModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background Image with Rich Deep Purple Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/cyberwise_hero_1782063821990.jpg"
          alt="CyberWise Skillversity Students Working"
          className="w-full h-full object-cover object-center opacity-45 scale-102 filter brightness-[0.7] saturate-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-purple/20 rounded-full filter blur-[120px] animate-pulseGlow" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-purple-900/15 rounded-full filter blur-[100px] animate-pulseGlow [animation-delay:3s]" />
      </div>

      {/* Floating Interactive Elements / Tech Ornaments */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] hidden xl:flex items-center gap-2 px-3 py-2 bg-brand-dark/60 backdrop-blur-md rounded-xl border border-brand-purple/30 animate-bounce [animation-duration:6s]">
          <Brain className="w-4 h-4 text-brand-accent" />
          <span className="text-xs text-slate-300 font-medium font-mono">AI-Augmented Learning</span>
        </div>
        <div className="absolute bottom-[20%] left-[5%] hidden xl:flex items-center gap-2 px-3 py-2 bg-brand-dark/60 backdrop-blur-md rounded-xl border border-brand-purple/30 animate-bounce [animation-duration:8s] [animation-delay:1s]">
          <Camera className="w-4 h-4 text-violet-400" />
          <span className="text-xs text-slate-300 font-medium font-mono">Studio Production Lab</span>
        </div>
        <div className="absolute top-[25%] right-[8%] hidden xl:flex items-center gap-2 px-3 py-2 bg-brand-dark/60 backdrop-blur-md rounded-xl border border-brand-purple/30 animate-bounce [animation-duration:7s] [animation-delay:2s]">
          <Monitor className="w-4 h-4 text-purple-400" />
          <span className="text-xs text-slate-300 font-medium font-mono">Modern Workstations</span>
        </div>
        <div className="absolute bottom-[25%] right-[5%] hidden xl:flex items-center gap-2 px-3 py-2 bg-brand-dark/60 backdrop-blur-md rounded-xl border border-brand-purple/30 animate-bounce [animation-duration:9s] [animation-delay:3.5s]">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="text-xs text-slate-300 font-medium font-mono">UGC-Accredited Path</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/15 border border-brand-purple/30 rounded-full w-fit mx-auto lg:mx-0 mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-accent animate-spin [animation-duration:4s]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent/90">
                Next-Gen Skill Development
              </span>
            </div>

            {/* Standard Headline & Subheading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6">
              MAKE YOUR CAREER <span className="block text-gradient-purple">WITH US</span>
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-8">
              CyberWise Skillversity, Perinthalmanna bridges academic learning with real-world industry expertise.
              Master future-ready skills through practical training, expert mentorship, and UGC-accredited degree pathways.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#programs"
                id="hero-explore-btn"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-800 hover:from-purple-600 hover:to-brand-purple text-white rounded-full font-semibold flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg shadow-brand-purple/30 hover:scale-103"
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenApplyModal}
                id="hero-apply-btn"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-103 shadow-inner"
              >
                Apply Now
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
              </button>
            </div>

            {/* Microstats banner */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-12 mt-12 border-t border-white/5 max-w-xl mx-auto lg:mx-0">
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white">100%</span>
                <span className="block text-xs sm:text-sm text-slate-400 mt-1">Practical Focus</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white">4+</span>
                <span className="block text-xs sm:text-sm text-slate-400 mt-1">Global Sectors</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white">UGC</span>
                <span className="block text-xs sm:text-sm text-slate-400 mt-1">Degree Paths</span>
              </div>
            </div>
          </div>

          {/* Graphical/Creative Accent Widget */}
          <div className="hidden lg:col-span-4 lg:flex flex-col items-center justify-center relative">
            <div className="relative w-72 h-72">
              {/* Outer rotating concentric ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-purple/40 animate-spin [animation-duration:24s]" />
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin [animation-duration:12s] [animation-direction:reverse]" />
              
              {/* Core branding shape with glassmorphism */}
              <div className="absolute inset-8 rounded-full bg-brand-purple/10 backdrop-blur-xl border border-brand-purple/30 flex flex-col items-center justify-center p-6 text-center">
                <GraduationCap className="w-12 h-12 text-brand-accent mb-3 animate-pulse" />
                <span className="font-display font-black text-xl text-white block">CYBERWISE</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-purple-400">SKILLVERSITY</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] mt-2 animate-ping" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
