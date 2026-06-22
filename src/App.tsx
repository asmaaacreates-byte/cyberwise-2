import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhyChoose from "./components/WhyChoose";
import Experience from "./components/Experience";
import Success from "./components/Success";
import Admission from "./components/Admission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ApplyModal from "./components/ApplyModal";
import { MessageCircle } from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleOpenGeneralApply = () => {
    setSelectedCourse("");
    setIsModalOpen(true);
  };

  const handleOpenCourseApply = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  // WhatsApp helper URL with a prefilled message
  const whatsappUrl = "https://wa.me/917558026894?text=" + encodeURIComponent("Hello CyberWise Skillversity, I am interested in seeking admission and career guidance.");

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden font-sans antialiased text-slate-100 selection:bg-brand-purple selection:text-white">
      {/* Decorative Global Grid Overlay for technological atmosphere */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Floating Ambient Glow Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div id="glow-sphere-global-1" className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-brand-purple/5 filter blur-[150px] animate-pulseGlow" />
        <div id="glow-sphere-global-2" className="absolute bottom-[20%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-purple-900/5 filter blur-[130px] animate-pulseGlow [animation-delay:4s]" />
      </div>

      <div className="relative z-10">
        {/* Navigation bar header */}
        <Navbar onOpenApplyModal={handleOpenGeneralApply} />

        <main id="main-content-flow">
          {/* Hero segment */}
          <Hero onOpenApplyModal={handleOpenGeneralApply} />

          {/* About segment */}
          <About />

          {/* Programs segment */}
          <Programs onSelectCourse={handleOpenCourseApply} />

          {/* Why choose factors segment */}
          <WhyChoose />

          {/* Learning workshops experience segment */}
          <Experience />

          {/* Testimonial slider segment */}
          <Success />

          {/* Admission accredits segment */}
          <Admission onOpenApplyModal={handleOpenGeneralApply} />

          {/* Contact segment with form & map */}
          <Contact />
        </main>

        {/* Global Footer component */}
        <Footer />
      </div>

      {/* Pop-up Overlay modal for course applications */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedCourse={selectedCourse}
      />

      {/* WhatsApp Floating Integration */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-floating-trigger"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-900/40 hover:bg-[#20ba59] transition-all duration-300 hover:scale-108 active:scale-95 cursor-pointer"
        title="Chat with Admissions Helpline on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 -z-10 animate-ping" />
        
        {/* Tooltip Label alongside button */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-36 transition-all duration-500 ease-out whitespace-nowrap text-xs font-semibold tracking-wide uppercase select-none">
          Admissions Chat
        </span>
        
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      </a>
    </div>
  );
}

