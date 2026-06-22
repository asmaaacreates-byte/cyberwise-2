import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, Globe, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "digital-marketing",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      // Reset form variables
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "digital-marketing",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0016] border-t border-brand-purple/10 relative overflow-hidden">
      {/* Background visual gradient */}
      <div className="absolute bottom-0 right-[10%] w-96 h-96 bg-brand-purple/5 rounded-full filter blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-mono block mb-2">
            Establish Contact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Connect With Our Counselors
          </h2>
          <p className="font-sans text-slate-300 mt-4 text-base sm:text-lg font-light">
            Plan your campus visit, clear your accreditation doubts, or book a free trial lecture session today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Block: Contact coordinates & Social handles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-brand-purple/20">
              <h3 className="font-display font-bold text-xl text-white">Campus Information</h3>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Our Coordinates</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                    CyberWise Skillversity, Near Bypass Road Junction,<br />
                    Perinthalmanna, Malappuram, Kerala - 679322
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Call/WhatsApp Admissions</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                    <a href="tel:+917558026894" className="hover:text-brand-accent transition-colors block">+91 75580 26894</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Electronic Mail</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-normal text-slate-300">
                    <a href="mailto:info@cyberwiseskillversity.com" className="hover:text-brand-accent transition-colors block">info@cyberwiseskillversity.com</a>
                    <a href="mailto:admissions@cyberwiseskillversity.com" className="hover:text-brand-accent transition-colors block">admissions@cyberwiseskillversity.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Google map iframe wrapper */}
            <div className="rounded-2xl overflow-hidden glass-panel border border-brand-purple/20 h-64 relative shadow-lg">
              <iframe
                title="Google Maps Location Cyberwise Skillversity Perinthalmanna"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.618683533816!2d76.21639149454378!3d10.957597116744828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ccd7cfff5555%3A0xc3676767575fa8b3!2sPerinthalmanna%2C%20Kerala!5e0!3m2!1sen!2sin!4v1703216892431!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter invert grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social linkages block */}
            <div className="space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold block">
                Connect on Social Networks
              </span>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "https://instagram.com/cyberwise", color: "hover:bg-pink-600 hover:text-white" },
                  { icon: Facebook, href: "https://facebook.com/cyberwise", color: "hover:bg-blue-600 hover:text-white" },
                  { icon: Linkedin, href: "https://linkedin.com/company/cyberwise", color: "hover:bg-blue-700 hover:text-white" },
                  { icon: Youtube, href: "https://youtube.com/cyberwise", color: "hover:bg-red-600 hover:text-white" }
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl bg-brand-dark/95 border border-brand-purple/20 flex items-center justify-center text-slate-300 transition-all hover:scale-105 hover:-translate-y-1 ${s.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Admission Inquiries form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-purple/20 shadow-2xl relative">
              <h3 className="font-display font-bold text-center sm:text-left text-xl text-white mb-6">
                Admission Inquiry Form
              </h3>

              {status === "success" ? (
                <div className="flex flex-col items-center text-center py-12 px-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">Inquiry Transmitted!</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2 max-w-md">
                    Thank you. Our Perinthalmanna academic counselor will reach out via contact details provided within 24 hours to schedule your free demo workstation session.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs text-brand-accent border-b border-brand-accent hover:text-white pb-0.5"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        Full Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-dark/90 border border-brand-purple/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                        Contact Number *
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="e.g. +91 95678 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-dark/90 border border-brand-purple/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-dark/90 border border-brand-purple/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-course" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Target Program Selection
                    </label>
                    <select
                      id="form-course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-brand-dark/90 border border-brand-purple/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    >
                      <option value="digital-marketing">AI-Driven Digital Marketing</option>
                      <option value="videography">Professional Videography</option>
                      <option value="ecommerce">E-Commerce & Business Growth</option>
                      <option value="spoken-english">Spoken English & Communication</option>
                      <option value="ugc-degree">UGC Degree Pathway Integration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="form-message" className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">
                      Optional Message
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Tell us about your educational background or career plans..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-brand-dark/90 border border-brand-purple/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-rose-400 font-medium font-sans">
                      Please enter all required asterisk indicators (*).
                    </p>
                  )}

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-gradient-to-r from-brand-purple to-purple-800 hover:from-purple-600 hover:to-brand-purple disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-md shadow-brand-purple/20"
                  >
                    {status === "submitting" ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
