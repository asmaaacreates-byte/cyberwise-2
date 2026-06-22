import { CheckCircle, ShieldCheck, HeartHandshake, Laptop } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "UGC Degree Pathways",
      desc: "Gain recognized certifications and degrees integrated within programs."
    },
    {
      icon: Laptop,
      title: "80% Practice / 20% Theory",
      desc: "Immersive lab workstations setup with no outdated textbook memorization."
    },
    {
      icon: HeartHandshake,
      title: "Real Placement Synergy",
      desc: "Strong ties with digital production studios and agencies globally."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0016] border-y border-brand-purple/10 relative overflow-hidden">
      {/* Light glow pattern inside about section */}
      <div className="absolute top-[10%] right-[-10%] w-72 h-72 bg-brand-purple/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Graphic elements, key indicators */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 glass-panel rounded-3xl p-8 border border-white/5 shadow-2xl overflow-hidden group">
              {/* Grid-lines overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs uppercase font-mono tracking-widest text-purple-400 font-bold">FOUNDATIONAL METRICS</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-slate-300 font-medium mb-1">
                    <span>Practical Lab Execution</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full h-2 bg-purple-950/50 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-brand-purple to-purple-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-slate-300 font-medium mb-1">
                    <span>Industry Mentorship Rate</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-2 bg-purple-950/50 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-brand-purple to-purple-400 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-slate-300 font-medium mb-1">
                    <span>Student Success Increment</span>
                    <span>94%</span>
                  </div>
                  <div className="w-full h-2 bg-purple-950/50 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-brand-purple to-purple-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative graphic: Perinthalmanna Badge */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-brand-purple/20 flex items-center justify-center text-lg font-bold text-brand-accent">
                  KL
                </div>
                <div>
                  <span className="block font-medium text-sm text-white">Perinthalmanna Campus</span>
                  <span className="block text-xs text-slate-400">Hub of Digital Transformation, Kerala</span>
                </div>
              </div>
            </div>

            {/* Glowing Accent Ring Behind Left Card */}
            <div className="absolute inset-[-10px] bg-gradient-to-tr from-brand-purple to-purple-900 rounded-[40px] opacity-20 blur-xl z-0" />
          </div>

          {/* Right Block: Content area */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-mono block mb-2">
              Our Vision & Philosophy
            </span>
            
            {/* Standard Headline */}
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-6">
              Where Education <span className="text-gradient">Meets Industry</span>
            </h2>

            {/* Standard Content paragraphs */}
            <div className="font-sans text-slate-300 space-y-4 text-base sm:text-lg font-light leading-relaxed mb-8">
              <p>
                CyberWise Skillversity is a next-generation skill development institution dedicated to closing the gap between traditional education and modern career requirements. Our programs combine academic excellence with practical, industry-focused training, helping students become confident professionals ready for the digital world.
              </p>
              <p>
                Through hands-on projects, expert guidance, and real-world learning experiences, we prepare students to thrive in fast-growing industries.
              </p>
            </div>

            {/* Key benefits list checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-3 items-start p-3 rounded-2xl hover:bg-brand-purple/5 transition-all duration-300">
                    <div className="p-2.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
