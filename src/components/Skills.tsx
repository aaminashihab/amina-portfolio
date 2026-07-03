import React, { useState } from "react";
import { skillsData } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Search, Brain, Database, Layout, Cloud, Sparkles, CheckCircle } from "lucide-react";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Return appropriate Lucide icons based on category key strings
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "ai & ml engine":
        return <Brain className="w-5 h-5 text-accent-secondary" />;
      case "backend & systems":
        return <Database className="w-5 h-5 text-accent-secondary" />;
      case "frontend & ui":
        return <Layout className="w-5 h-5 text-accent-secondary" />;
      case "cloud & devops":
        return <Cloud className="w-5 h-5 text-accent-secondary" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent-secondary" />;
    }
  };

  const categories = skillsData.map((group) => group.category);

  // Filter skills by search query and category selector
  const processedSkillsData = skillsData
    .map((group) => {
      const filteredSkills = group.skills.filter((skill) => {
        const matchesSearch =
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          skill.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
      });

      return {
        ...group,
        skills: filteredSkills
      };
    })
    .filter((group) => {
      // Filter out whole group if we selected a specific category
      if (selectedCategory && group.category !== selectedCategory) return false;
      return group.skills.length > 0;
    });

  return (
    <section id="skills" className="py-24 px-6 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-[30%] left-[-5%] w-[250px] h-[250px] rounded-full bg-teal-400/5 blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Segment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[2px] text-accent-secondary uppercase font-sans mb-3 block">
              Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Core Competencies
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
              An active toolkit spanning from predictive model math to cloud hosting logic.
            </p>
          </div>

          {/* Interactive Search Field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Query tech stack (e.g. Gemini, FastAPI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-bg-card border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-xs font-sans text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent-primary/60 focus:border-accent-primary/50 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono hover:text-white text-neutral-500"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              selectedCategory === null
                ? "bg-white/8 text-white border border-white/10"
                : "bg-transparent text-neutral-400 hover:text-white border border-transparent"
            }`}
          >
            All Areas
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-white/8 text-white border border-white/10"
                  : "bg-transparent text-neutral-400 hover:text-white border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {processedSkillsData.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-bg-card border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                {/* Section Header */}
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-white/5">
                  <div className="p-2 bg-white/3 rounded-lg">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-display text-sm font-bold text-white tracking-tight uppercase">
                    {group.category}
                  </h3>
                </div>

                {/* Skill List Container */}
                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group/skill relative">
                      {/* Name & Percent Row */}
                      <div className="flex justify-between items-center text-xs font-sans mb-1.5">
                        <span className="font-semibold text-neutral-200 group-hover/skill:text-accent-secondary transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-neutral-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Micro Bar */}
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-primary to-teal-400"
                        />
                      </div>

                      {/* Tooltip detail shown on focus/hover */}
                      <p className="text-[11px] text-neutral-400 leading-snug mt-2 opacity-50 group-hover/skill:opacity-100 transition-opacity duration-200 font-sans">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {processedSkillsData.length === 0 && (
          <div className="text-center py-16 bg-bg-card border border-white/5 rounded-2xl">
            <p className="text-neutral-500 text-xs font-mono">
              Unresolved technology name. Try searching "Python", "Gemini", "FastAPI" or "Cloud Run".
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
