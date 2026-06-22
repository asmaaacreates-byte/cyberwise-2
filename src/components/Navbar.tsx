import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export default function Navbar({ onOpenApplyModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Why Us", href: "#why-choose" },
    { label: "Experience", href: "#learning-experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-dark/80 backdrop-blur-md border-b border-brand-purple/20 shadow-lg shadow-brand-dark/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <Logo showText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Apply CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenApplyModal}
              id="nav-apply-btn"
              className="glass-button text-white text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 text-brand-accent" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-nav-toggle"
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-brand-purple/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-gray-300 hover:text-white hover:bg-brand-purple/20 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-purple/10">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenApplyModal();
                  }}
                  className="w-full bg-gradient-to-r from-brand-purple to-purple-800 hover:from-purple-600 hover:to-brand-purple text-white text-center py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-purple/20"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 text-brand-accent" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
