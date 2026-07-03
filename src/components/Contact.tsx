import React, { useState } from "react";
import { Mail, Linkedin, Github, Compass, ShoppingCart, Send, ArrowUp, CheckCircle, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "AI Agent Work", message: "" });
  const [loading, setLoading] = useState(false);
  const [submittedMessages, setSubmittedMessages] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactOptions = [
    { icon: <Mail className="w-5 h-5 text-accent-secondary" />, title: "Email", value: "aminashiha07@gmail.com", href: "mailto:aminashiha07@gmail.com" },
    { icon: <Linkedin className="w-5 h-5 text-accent-secondary" />, title: "LinkedIn", value: "linkedin.com/in/amina-shihabuddin", href: "https://www.linkedin.com/in/amina-shihabuddin", external: true },
    { icon: <Github className="w-5 h-5 text-accent-secondary" />, title: "GitHub", value: "github.com/aaminashihab", href: "https://github.com/aaminashihab", external: true },
    { icon: <ShoppingCart className="w-5 h-5 text-accent-secondary" />, title: "Fiverr Gigs", value: "fiverr.com/amina_shihab — AI apps & chatbots", href: "https://www.fiverr.com/amina_shihab", external: true },
    { icon: <Compass className="w-5 h-5 text-accent-secondary" />, title: "Hashnode Blog", value: "motivateai.hashnode.dev", href: "https://motivateai.hashnode.dev", external: true }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate sending time
    setTimeout(() => {
      const newMessage = {
        ...formData,
        id: "MSG-" + Math.floor(Math.random() * 90000 + 10000),
        timestamp: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setSubmittedMessages((prev) => [newMessage, ...prev]);
      setFormData({ name: "", email: "", project: "AI Agent Work", message: "" });
      setLoading(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-bg-dark relative overflow-hidden text-white">
      <div className="absolute bottom-[-10%] right-[-15%] w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col mb-12">
          <span className="text-[11px] font-bold tracking-[2px] text-accent-secondary uppercase font-sans mb-3">
            Inquiries
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
            Let's build intelligent products together. Reach out for full-time roles, consultancy setups, or projects.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contacts */}
          <div className="lg:col-span-6 space-y-4">
            {contactOptions.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/5 hover:border-accent-secondary/35 hover:bg-white/2 transition-all group"
              >
                <div className="p-3 bg-accent-primary/10 border border-accent-primary/20 rounded-xl group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
                <span className="ml-auto text-neutral-500 group-hover:text-accent-secondary transition-colors font-mono text-sm leading-none">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Right Column Interactive Message Form */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-bg-card border border-white/8 rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-lg font-bold mb-6">
                Send a Direct Query
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-bg-inner border border-white/5 rounded-xl py-3 px-4 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-accent-primary/70 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="w-full bg-bg-inner border border-white/5 rounded-xl py-3 px-4 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-accent-primary/70 transition-all placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                    Scope Category
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full bg-bg-inner border border-white/5 rounded-xl py-3 px-4 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-accent-primary/70 transition-all"
                  >
                    <option value="AI Agent Work">AI Agent Systems Integration</option>
                    <option value="ML Predictive Pipeline">ML Predictive Pipelines / XGBoost</option>
                    <option value="Freelance Job">Fiverr Partnership / Custom Gigs</option>
                    <option value="Full-Time Hiring">Full-Time Career Opportunities</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                    Message Notes
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your architecture requirements, roles details, or query..."
                    className="w-full bg-bg-inner border border-white/5 rounded-xl py-3 px-4 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-accent-primary/70 transition-all placeholder:text-neutral-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-primary hover:bg-accent-secondary disabled:bg-neutral-800 disabled:text-neutral-500 text-white font-bold py-3.5 rounded-xl text-xs transition-all shadow-lg shadow-accent-primary/10 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Send className="w-3.5 h-3.5 animate-pulse" />
                      <span>Transmitting secure session parameters...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message Parameters</span>
                    </>
                  )}
                </button>
              </form>

              {/* Show submission status banner */}
              {showSuccess && (
                <div className="mt-4 p-4 rounded-xl bg-teal-400/10 border border-teal-400/30 text-teal-300 text-xs flex gap-2 items-center animate-fade-in">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Transmission Success!</span>
                    <span>Your proposal has been logged to the local sandbox parameters stack. Amina will follow up shortly at her email.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Simulated inbox logs of sent messages during this visit */}
            {submittedMessages.length > 0 && (
              <div className="bg-bg-card border border-white/5 rounded-2xl p-4 space-y-3">
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
                  Telemetry Transmissions Stream ({submittedMessages.length})
                </span>
                <div className="space-y-2 max-h-[160px] overflow-y-auto">
                  {submittedMessages.map((msg) => (
                    <div key={msg.id} className="bg-bg-inner p-3 rounded-lg border border-white/5 text-[11px] font-mono space-y-1">
                      <div className="flex justify-between text-neutral-400">
                        <span className="font-bold text-accent-secondary">{msg.id}</span>
                        <span className="text-[10px]">{msg.timestamp}</span>
                      </div>
                      <div className="text-white font-sans mt-1">
                        <strong>Sender:</strong> {msg.name} ({msg.email})
                      </div>
                      <div className="text-neutral-500 font-sans text-[11px] leading-relaxed">
                        <strong>Subject:</strong> {msg.project} <br />
                        <strong>Body:</strong> "{msg.message}"
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Back to top hook buttons */}
        <div className="mt-16 flex justify-between items-center text-xs text-neutral-500 font-mono border-t border-white/5 pt-8">
          <span>© 2026 AMINA S — AI Systems Engineer Portfolio</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 hover:text-white transition-colors border border-white/5 hover:border-white/10 py-1.5 px-3 rounded-lg bg-bg-card"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </section>
  );
}
