import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MessageSquare, ArrowRight, MapPin, Clock, Compass, Activity } from "lucide-react";

export default function Hero() {
  const [clocks, setClocks] = useState({ india: "", uae: "" });

  useEffect(() => {
    const updateTime = () => {
      const optionsIndia = { timeZone: "Asia/Kolkata", hour12: true, hour: "2-digit" as const, minute: "2-digit" as const, second: "2-digit" as const };
      const optionsUAE = { timeZone: "Asia/Dubai", hour12: true, hour: "2-digit" as const, minute: "2-digit" as const, second: "2-digit" as const };
      
      try {
        setClocks({
          india: new Intl.DateTimeFormat("en-US", optionsIndia).format(new Date()),
          uae: new Intl.DateTimeFormat("en-US", optionsUAE).format(new Date())
        });
      } catch (e) {
        // Fallback
        setClocks({
          india: new Date().toLocaleTimeString(),
          uae: new Date().toLocaleTimeString()
        });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { num: "3", label: "AI Products Shipped", desc: "Production agents & models" },
    { num: "1", label: "Hackathon Project", desc: "Google Cloud Agent 2026" },
    { num: "∞", label: "Problems to Solve", desc: "Always building & shipping" }
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden bg-bg-dark">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-teal-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center md:text-left flex flex-col items-center md:items-start z-10">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-primary/30 bg-accent-primary/8 text-xs font-semibold text-accent-secondary hover:border-accent-primary/60 transition-colors cursor-default mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>Available for global remote &amp; UAE roles</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
        >
          Hi, I'm <br className="hidden md:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-teal-300">
            AMINA S
          </span>
        </motion.h1>

        {/* Subtitle Role */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-lg sm:text-xl font-normal text-muted max-w-2xl mb-6 flex flex-wrap items-center justify-center md:justify-start gap-2"
        >
          <span className="text-white font-medium">AI Developer &amp; Product Builder</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-accent-secondary inline" /> Kerala, India / UAE Relocation
          </span>
        </motion.p>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-leading text-neutral-300 max-w-2xl leading-relaxed mb-10"
        >
          I design and engineer production-grade AI setups—autonomous agents, ML valuation pipelines, and cognitive server modules—using Gemini, Python, and cloud infrastructure. I don't just prompt; I ship systems that think.
        </motion.p>

        {/* Timezone Indicator Tools */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 p-4 rounded-xl bg-bg-card border border-white/5 w-full max-w-lg shadow-inner"
        >
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-accent-secondary" />
            <span>Active Timezones:</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-bg-inner border border-white/5 px-3 py-1 rounded-md flex flex-col">
              <span className="text-[10px] text-neutral-500 font-sans uppercase tracking-wider font-semibold">India IST</span>
              <span className="font-mono text-white text-[11px] font-bold">{clocks.india || "05:55 PM"}</span>
            </div>
            <div className="bg-bg-inner border border-white/5 px-3 py-1 rounded-md flex flex-col">
              <span className="text-[10px] text-teal-400 font-sans uppercase tracking-wider font-semibold">UAE GST</span>
              <span className="font-mono text-white text-[11px] font-bold">{clocks.uae || "04:25 PM"}</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 w-full justify-center md:justify-start mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-bg-dark font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl font-sans group hover:translate-y-[-2px]"
          >
            <span>View my work</span>
            <ArrowRight className="w-4 h-4 text-bg-dark transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center gap-2 border border-white/10 hover:border-accent-secondary/50 hover:bg-white/5 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition-all duration-200 group hover:translate-y-[-2px]"
          >
            <MessageSquare className="w-4 h-4 text-neutral-400 group-hover:text-accent-secondary transition-colors" />
            <span>Consulting &amp; Freelance</span>
          </a>
        </motion.div>

        {/* Dynamic Statistics Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 md:gap-10 border-t border-white/8 pt-8 w-full max-w-xl text-center md:text-left"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col group">
              <div className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-1">
                <span>{stat.num}</span>
                {stat.num === "3" && <span className="text-accent-secondary text-2xl font-sans">+</span>}
              </div>
              <div className="text-[12px] font-bold text-white tracking-wide mt-1 leading-tight uppercase font-sans">
                {stat.label}
              </div>
              <div className="text-[10px] text-neutral-500 font-mono mt-0.5 max-w-[120px] mx-auto md:mx-0">
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
