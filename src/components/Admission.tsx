import { GraduationCap, Award, BookOpen, Clock, CheckCircle } from "lucide-react";

interface AdmissionProps {
  onOpenApplyModal: () => void;
}

export default function Admission({ onOpenApplyModal }: AdmissionProps) {
  return (
    <section id="admissions" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-[10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Highlighted Banner Shape */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1b033a] via-[#100124] to-[#1d0042] border border-brand-purple/30 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-accent/20 border border-brand-accent/30 rounded-full mb-6 backdrop-blur-md">
                <GraduationCap className="w-4 h-4 text-brand-accent animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                  Academic Accreditation
                </span>
              </div>

              {/* Standard Headline */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
                Build Your Career While Earning <span className="text-gradient">Recognized Qualifications</span>
              </h2>

              {/* Standard Content Paragraph */}
              <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                Explore career-focused programs integrated with UGC-accredited degree opportunities, allowing students to gain both academic credentials and practical industry expertise.
              </p>

              {/* Accreditations checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-2.5 items-center text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>UGC-Accredited Degree Pathways</span>
                </div>
                <div className="flex gap-2.5 items-center text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Dual Academic & Skill Certifications</span>
                </div>
                <div className="flex gap-2.5 items-center text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Recognized Corporate Equivalencies</span>
                </div>
                <div className="flex gap-2.5 items-center text-sm text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Credits Transferable System Access</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenApplyModal}
                id="admission-start-journey-btn"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-800 hover:from-purple-600 hover:to-brand-purple text-white font-semibold rounded-full flex items-center justify-center gap-2 group transition-all hover:scale-103 shadow-lg shadow-brand-purple/20 cursor-pointer"
              >
                Start Your Journey
                <Award className="w-5 h-5 text-brand-accent" />
              </button>
            </div>

            {/* Right Graphics Column */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-brand-dark/40 border border-brand-purple/20 p-6 flex flex-col justify-between shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 to-transparent pointer-events-none" />
                
                {/* Visual Stamp */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-brand-accent" />
                  </div>
                  <span className="px-3 py-1 bg-brand-purple/10 border border-brand-purple/30 rounded-full text-[10px] font-mono text-purple-300">
                    Academics
                  </span>
                </div>

                <div className="my-6">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Accredited Streams</span>
                  <p className="font-display font-bold text-lg text-white mt-1 leading-snug">
                    BBA, BCA, B.Voc, & Executive Career Degrees
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Direct academic counseling integrated seamlessly into core practical schedules at CyberWise.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>Regular & Distance Options</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Fall Admissions</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
