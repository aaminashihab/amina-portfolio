import React, { useState } from "react";
import { timelineData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Award, GraduationCap, Compass, HelpCircle, ChevronRight, Check } from "lucide-react";

export default function About() {
  const [activeItem, setActiveItem] = useState<string>("upsc"); // Default active focus is the UPSC pivot

  const getTimelineIcon = (icon: string) => {
    switch (icon) {
      case "🎓":
        return <GraduationCap className="w-5 h-5 text-accent-secondary" />;
      case "📚":
        return <Compass className="w-5 h-5 text-teal-300" />;
      case "🚀":
        return <Award className="w-5 h-5 text-amber-400" />;
      case "🌍":
        return <Calendar className="w-5 h-5 text-purple-400" />;
      default:
        return <HelpCircle className="w-5 h-5 text-neutral-400" />;
    }
  };

  const selectedMilestone = timelineData.find((item) => item.id === activeItem);

  return (
    <section id="about" className="py-24 px-6 bg-bg-card border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Segment */}
        <div className="flex flex-col mb-12">
          <span className="text-[11px] font-bold tracking-[2px] text-accent-secondary uppercase font-sans mb-3">
            Origin Story &amp; Path
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
            From structures of public policy research to designing high-velocity generative agent loops.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column (lg: 6) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-bg-inner border border-white/5 rounded-2xl p-6 md:p-8 space-y-5">
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                I'm a B.Tech Computer Science graduate based in <strong>Kerala, India</strong>, geared toward building high-fidelity AI tools. I focus on actionable intelligence—systems that solve immediate customer blockages instead of flat statistical models.
              </p>
              
              <div className="border-l-2 border-accent-primary bg-accent-primary/5 p-4 rounded-r-xl">
                <h4 className="font-display text-xs font-bold text-accent-secondary tracking-wide uppercase mb-1">
                  The UPSC Prep Pivot
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Before entering full-stack AI engineering, I spent two years studying for the Indian Civil Services. This honed my capability to digest massive, highly unstructured text loads, analyze complex policy structures under constraints, and reason systematically. Today, I treat LLM context windows, system prompts, and multi-agent controllers exactly like macro-societal governance models.
                </p>
              </div>

              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                Currently, I engineer customized tools as an AI Engineer consultant. I am highly adaptable, hold active timezone compatibility with the UAE and EMEA markets, and can transition into remote or in-house team rosters instantly.
              </p>

              {/* Fiverr / Active indicator */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Passports status: Active</span>
                <span>Fiverr Gigs: amina_shihab</span>
              </div>
            </div>
          </div>

          {/* Interactive Timeline Column (lg: 7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Timeline Items Selector */}
            <div className="md:col-span-6 space-y-3 relative">
              {/* Invisible connecting vertical line */}
              <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-white/5 pointer-events-none" />

              {timelineData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all relative z-10 ${
                    activeItem === item.id
                      ? "bg-bg-inner border border-accent-secondary/30 shadow-lg"
                      : "bg-transparent border border-transparent hover:bg-bg-inner/40"
                  }`}
                >
                  {/* Round Dot Frame */}
                  <div className={`p-2.5 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                    activeItem === item.id
                      ? "bg-bg-card border-accent-secondary text-white scale-110"
                      : "bg-bg-inner border-white/5 text-neutral-500"
                  }`}>
                    {getTimelineIcon(item.icon)}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-neutral-500 block">
                      {item.period}
                    </span>
                    <h4 className={`font-display text-xs font-bold transition-colors ${
                      activeItem === item.id ? "text-white" : "text-neutral-300"
                    }`}>
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-neutral-500 block">
                      {item.subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Timeline Detail Plate */}
            <div className="md:col-span-6">
              <AnimatePresence mode="wait">
                {selectedMilestone && (
                  <motion.div
                    key={selectedMilestone.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-bg-inner border border-white/5 rounded-2xl p-6 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl p-1 bg-white/5 rounded">
                          {selectedMilestone.icon}
                        </span>
                        <div className="text-[10px] font-mono text-accent-secondary font-bold uppercase tracking-wider">
                          Key Milestones
                        </div>
                      </div>

                      <h3 className="font-display text-sm font-bold text-white mb-2">
                        {selectedMilestone.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                        {selectedMilestone.description}
                      </p>

                      <div className="border-t border-white/5 pt-4 space-y-2.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                          Achievements &amp; Focus:
                        </div>
                        <ul className="list-none p-0 m-0 space-y-2">
                          {selectedMilestone.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-2 text-xs text-neutral-300 items-start">
                              <Check className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-[10px] text-neutral-500 font-mono mt-6 flex justify-between items-center bg-white/2 p-2 rounded">
                      <span>Timeline Spec</span>
                      <span>ID: {selectedMilestone.id}</span>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
