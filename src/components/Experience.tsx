import { useState } from "react";
import { Camera, Megaphone, Laptop, Brain, Users, Film, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"camera" | "marketing" | "classroom">("camera");

  const experiences = {
    camera: {
      title: "Camera & Cinematic Editing Setup",
      subtitle: "Professional Videography & Production Lab",
      img: "/src/assets/images/cyberwise_video_1782063841548.jpg",
      bullets: [
        "Cinema-grade cameras (Sony FX series, Blackmagic)",
        "Motorized gimbals, follow-focus rigs, and professional audio",
        "Dual-monitor editing consoles equipped with DaVinci Resolve & Premiere Pro",
        "Sleek color-accurate grading workspaces",
      ]
    },
    marketing: {
      title: "Digital Marketing Command Center",
      subtitle: "AI-Driven Marketing & Branding Hub",
      img: "/src/assets/images/cyberwise_marketing_1782063861065.jpg",
      bullets: [
        "Live campaign management on Google Ads & Meta Ads Manager",
        "AI-powered copy engineering & conversion funnel simulators",
        "SEO analytical suites (SEMrush, Ahrefs dashboards)",
        "Real metrics tracking & analytics projection setups",
      ]
    },
    classroom: {
      title: "Interactive AI Knowledge Labs",
      subtitle: "Creative Collaborations & Business Incubator",
      img: "https://picsum.photos/seed/cyberclass/800/600?blur=1",
      bullets: [
        "Holographic overlays & high-tech collaborative desks",
        "Entrepreneurial incubator for E-Commerce mock launches",
        "Presentation theater for spoken-English fluency coaching",
        "Direct linkages with senior mentors online & offline",
      ]
    }
  };

  return (
    <section id="learning-experience" className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Glow circles */}
      <div className="absolute top-1/3 left-[-10%] w-[35vw] h-[35vw] bg-purple-900/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Narrative and Tab Selectors */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-mono block mb-2">
              Our Methodology
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Learn. Create. Innovate. Succeed.
            </h2>
            
            <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              At CyberWise Skillversity, education goes beyond textbooks. Our practical approach ensures every student gains the skills, confidence, and experience needed to succeed in the modern professional landscape.
            </p>

            {/* Interactive Tab Selectors */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() => setActiveTab("camera")}
                className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 border transition-all duration-300 ${
                  activeTab === "camera"
                    ? "bg-brand-purple/20 border-brand-purple shadow-lg shadow-brand-purple/5"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === "camera" ? "bg-brand-purple text-white" : "bg-white/5 text-slate-300"}`}>
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Videography & Storytelling Suite</h4>
                  <p className="text-xs text-slate-400 mt-0.5">High-end cameras, DaVinci panels, lighting nodes</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("marketing")}
                className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 border transition-all duration-300 ${
                  activeTab === "marketing"
                    ? "bg-brand-purple/20 border-brand-purple shadow-lg shadow-brand-purple/5"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === "marketing" ? "bg-brand-purple text-white" : "bg-white/5 text-slate-300"}`}>
                  <Megaphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Dynamic Digital Marketing Desk</h4>
                  <p className="text-xs text-slate-400 mt-0.5">SEO setups, live meta ads dashboards, AI copy aids</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("classroom")}
                className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 border transition-all duration-300 ${
                  activeTab === "classroom"
                    ? "bg-brand-purple/20 border-brand-purple shadow-lg shadow-brand-purple/5"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === "classroom" ? "bg-brand-purple text-white" : "bg-white/5 text-slate-300"}`}>
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Collaborative Smart Classrooms</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Modern presentation zones, AI incubation centers</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Block: Dynamic Interactive Workspace Showcase Content */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl relative border border-brand-purple/20">
              
              {/* Inner active graphics display */}
              <div className="h-64 sm:h-72 relative">
                <img
                  src={experiences[activeTab].img}
                  alt={experiences[activeTab].title}
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
                
                {/* Floating focus chip */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1 bg-brand-purple/85 backdrop-blur-md rounded-full border border-brand-purple/30">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  <span className="text-[10px] font-mono uppercase font-semibold text-white tracking-widest">Active Setup</span>
                </div>
              </div>

              {/* Text content card details */}
              <div className="p-6 sm:p-8 bg-brand-dark/95">
                <span className="text-xs uppercase font-mono tracking-widest text-brand-accent font-bold">
                  {experiences[activeTab].subtitle}
                </span>
                
                <h3 className="font-display font-bold text-xl text-white mt-2 mb-4">
                  {experiences[activeTab].title}
                </h3>
                
                <ul className="space-y-3">
                  {experiences[activeTab].bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-300 font-sans">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
