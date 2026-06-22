import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, DollarSign, Calendar, ShieldCheck } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export default function ApplyModal({ isOpen, onClose, preselectedCourse }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "digital-marketing",
    academicPass: "plus-two",
    address: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (preselectedCourse) {
      const match = preselectedCourse.toLowerCase();
      if (match.includes("marketing")) {
        setFormData((prev) => ({ ...prev, course: "digital-marketing" }));
      } else if (match.includes("videography")) {
        setFormData((prev) => ({ ...prev, course: "videography" }));
      } else if (match.includes("commerce")) {
        setFormData((prev) => ({ ...prev, course: "ecommerce" }));
      } else if (match.includes("english") || match.includes("spoken")) {
        setFormData((prev) => ({ ...prev, course: "spoken-english" }));
      }
    }
  }, [preselectedCourse, isOpen]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const handleCloseSuccess = () => {
    setStatus("idle");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "digital-marketing",
      academicPass: "plus-two",
      address: ""
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="apply-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop screen filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg bg-brand-dark/95 border border-brand-purple/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Grid background styling */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-purple/20 rounded-full filter blur-[40px] pointer-events-none" />

            {/* Header Close triggers */}
            <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6 relative">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">Admissions Application</h3>
                <p className="text-xs text-slate-400 mt-1">Book your seat at CyberWise, Perinthalmanna</p>
              </div>
              <button
                onClick={onClose}
                id="modal-close-trigger"
                className="p-1 px-2.5 py-2 hover:bg-white/5 border border-white/5 hover:border-white/15 rounded-xl text-slate-300 transition-colors"
                aria-label="Close Modal Dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inner dynamic content check */}
            {status === "success" ? (
              <div className="text-center py-10 px-4 relative">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display font-bold text-2xl text-white">Application Recorded!</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-300 mt-3 max-w-sm mx-auto leading-relaxed">
                  Your details have been successfully locked into our Perinthalmanna admissions registry. An academic advisor will reach out to you via call/email to verify credentials and process schedules.
                </p>
                <button
                  onClick={handleCloseSuccess}
                  className="mt-8 px-6 py-2.5 bg-brand-purple hover:bg-brand-purple/80 text-white font-semibold text-xs rounded-full transition-all"
                >
                  Return to Website
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                
                <div>
                  <label htmlFor="modal-name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                    Applicant Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="e.g. Anand Krishna"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-brand-dark/95 border border-brand-purple/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-phone" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Contact Cell / WhatsApp *
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 9845X XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-dark/95 border border-brand-purple/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      placeholder="e.g. anand@outlook.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-dark/95 border border-brand-purple/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-course" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                    Target Skill Module
                  </label>
                  <select
                    id="modal-course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-brand-dark/95 border border-brand-purple/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  >
                    <option value="digital-marketing">AI-Driven Digital Marketing</option>
                    <option value="videography">Professional Videography</option>
                    <option value="ecommerce">E-Commerce & Business Growth</option>
                    <option value="spoken-english">Spoken English & Communication</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-academic" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                    Highest General Qualification
                  </label>
                  <select
                    id="modal-academic"
                    value={formData.academicPass}
                    onChange={(e) => setFormData({ ...formData, academicPass: e.target.value })}
                    className="w-full bg-brand-dark/95 border border-brand-purple/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  >
                    <option value="sslc">SSLC / Class X</option>
                    <option value="plus-two">Higher Secondary (+2) / Equivalent</option>
                    <option value="degree">Undergraduate Degree Stream</option>
                    <option value="post-graduate">Post Graduate Degree Stream</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-address" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                    Home Address (Town/City)
                  </label>
                  <input
                    id="modal-address"
                    type="text"
                    placeholder="e.g. Perinthalmanna, Kerala"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-brand-dark/95 border border-brand-purple/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  />
                </div>

                {status === "error" && (
                  <p className="text-[11px] text-rose-400 font-sans font-medium">
                    Please provide all required core information field coordinates (*).
                  </p>
                )}

                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>UGC Accreditation pathway support</span>
                  </div>
                  
                  <button
                    id="modal-submit-btn"
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-brand-purple to-purple-800 hover:from-purple-600 hover:to-brand-purple text-white hover:scale-103 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-purple/20"
                  >
                    {status === "submitting" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Admission Code</span>
                        <Send className="w-3.5 h-3.5 text-brand-accent" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
