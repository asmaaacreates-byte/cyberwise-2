import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-brand-purple/20 pt-16 pb-12 relative overflow-hidden">
      
      {/* Footer Inner Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Institutional Identifier */}
          <div className="md:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-2 group">
              <Logo showText={true} />
            </a>
            
            <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-slate-400">
              CyberWise Skillversity is Kerala's vanguard institution representing hybrid UGC academic pathways combined with 100% practical career tracks.
            </p>

            <blockquote className="font-sans italic text-xs text-brand-accent border-l-2 border-brand-purple pl-3.5 pt-0.5 leading-normal">
              “Where Knowledge Meets Industry and Dreams Become Careers.”
            </blockquote>
          </div>

          {/* Column 2: Quick Index Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-display font-semibold text-sm text-white tracking-wide">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {["Home", "About", "Why Us", "Testimonials", "Admissions"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0.5 h-2 bg-brand-accent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Active Courses Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm text-white tracking-wide">Accredited Programs</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                "AI Digital Marketing",
                "Professional Videography",
                "E-Commerce & D2C Growth",
                "Spoken English & Fluency"
              ].map((course) => (
                <li key={course}>
                  <a href="#programs" className="hover:text-white transition-colors flex items-center gap-1 group">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple group-hover:bg-brand-accent transition-colors shrink-0" />
                    <span>{course}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location parameters */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm text-white tracking-wide">Direct Coordinate contact</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>Perinthalmanna, Kerala - 679322</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                <a href="tel:+917558026894" className="hover:text-white transition-colors">+91 75580 26894</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                <a href="mailto:info@cyberwise.com" className="hover:text-white transition-colors">info@cyberwise.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal/Copyright bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} CyberWise Skillversity, Perinthalmanna, Kerala. All rights reserved.</p>
          <div className="flex gap-5 font-mono text-slate-500">
            <a href="#about" className="hover:text-white transition-colors">Licensing Terms</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Admissions Portal Code</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
