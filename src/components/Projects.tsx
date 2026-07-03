import React, { useState } from "react";
import { projectsData } from "../data";
import { ProjectType } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Cpu, HardDrive, CheckCircle2, ChevronRight, X } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "AI Agent" | "Machine Learning" | "Predictive Analytics" | "Full Stack AI">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  const filterTabs = [
    { label: "All Work", value: "all" as const },
    { label: "Full Stack AI", value: "Full Stack AI" as const },
    { label: "AI Agents", value: "AI Agent" as const },
    { label: "Machine Learning", value: "Machine Learning" as const },
    { label: "Predictive Analytics", value: "Predictive Analytics" as const }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-bg-card relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Segment */}
        <div className="flex flex-col mb-12">
          <span className="text-[11px] font-bold tracking-[2px] text-accent-secondary uppercase font-sans mb-3">
            Featured Projects
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Things I've Built
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
            A selection of production-oriented AI and machine learning projects.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/5">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                filter === tab.value
                  ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/20"
                  : "bg-bg-inner text-neutral-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with entry animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className={`bg-bg-inner border rounded-2xl p-6 flex flex-col justify-between transition-all group relative overflow-hidden ${
                  project.isFlagship 
                    ? "border-accent-primary/40 hover:border-accent-primary/80 shadow-lg shadow-accent-primary/10" 
                    : "border-white/5 hover:border-accent-secondary/35"
                }`}
              >
                {/* Horizontal Gradient Hover Effect Indicator */}
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-primary to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2 bg-white/5 rounded-xl border border-white/5">
                      {project.emoji}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-accent-secondary/15 text-accent-secondary font-bold px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-medium font-sans px-2.5 py-0.5 rounded border ${
                          idx === 0
                            ? "border-accent-primary/30 text-accent-secondary bg-accent-primary/5"
                            : "border-white/5 text-neutral-500 bg-white/2"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-semibold"
                        title="Read Architectural Case Study"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs text-accent-secondary hover:text-white transition-colors font-semibold group/btn"
                  >
                    <span>Spec Walkthrough</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Deep Dive Technical Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-bg-inner border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 text-white flex flex-col max-h-[90vh]"
              >
                {/* Header Row */}
                <div className="p-6 border-b border-white/8 flex justify-between items-center bg-bg-card">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 bg-white/5 rounded-xl border border-white/5">
                      {selectedProject.emoji}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {selectedProject.title} Specs
                      </h3>
                      <p className="text-[10px] text-accent-secondary font-mono tracking-wide uppercase mt-0.5">
                        Technical Architecture Workflow
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content Area - Scrollable */}
                <div className="p-6 overflow-y-auto space-y-6">
                  {/* Detailed Intro text */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 font-sans">
                      Overview Goal
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* System Flow Diagram Mockup */}
                  <div className="bg-bg-dark border border-white/5 rounded-xl p-4">
                    <h4 className="text-[11px] font-semibold uppercase tracking-widest text-teal-400 mb-3 flex items-center gap-1.5 font-mono">
                      <Cpu className="w-3.5 h-3.5" /> Pipeline Pipeline Stages
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.architecture.flow.map((step, idx) => (
                        <div key={idx} className="flex gap-3 text-xs font-mono items-start">
                          <span className="text-accent-secondary font-bold select-none">
                            [0{idx + 1}]
                          </span>
                          <span className="text-neutral-300 leading-snug">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Challenges */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-sans">
                      Key Technical Friction &amp; Workarounds
                    </h4>
                    <div className="space-y-3">
                      {/* Formatted in pairs of challenges */}
                      {(() => {
                        const challenges = selectedProject.architecture.challenges;
                        const pairs = [];
                        for (let i = 0; i < challenges.length; i += 2) {
                          if (challenges[i] && challenges[i + 1]) {
                            pairs.push({
                              prob: challenges[i],
                              sol: challenges[i + 1]
                            });
                          }
                        }
                        return pairs.map((pair, idx) => (
                          <div key={idx} className="border-l-2 border-accent-primary/40 pl-3 py-0.5">
                            <div className="text-[11px] text-neutral-500 font-mono font-bold uppercase">{pair.prob.split(":")[0]}:</div>
                            <div className="text-xs text-neutral-400 font-sans mt-0.5 mb-1">{pair.prob.split(":")[1]?.trim()}</div>
                            <div className="text-[11px] text-teal-400 font-mono font-bold uppercase">{pair.sol.split(":")[0]}:</div>
                            <div className="text-xs text-neutral-300 font-sans mt-0.5">{pair.sol.split(":")[1]?.trim()}</div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="border-t border-white/8 pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 font-sans">
                      Performance Outcomes
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.architecture.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-bg-card p-3 rounded-lg border border-white/5 text-center">
                          <div className="font-mono text-base md:text-lg font-bold text-white">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-neutral-500 font-sans tracking-wide mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer Controls */}
                <div className="p-4 border-t border-white/8 bg-bg-card flex justify-between items-center">
                  <div className="flex gap-2">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-semibold text-white transition-all border border-white/5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repo</span>
                    </a>
                    {selectedProject.articleUrl && (
                      <a
                        href={selectedProject.articleUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-primary/20 hover:bg-accent-primary/30 rounded-lg text-xs font-semibold text-accent-secondary transition-all border border-accent-primary/10"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Read Abstract</span>
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-1.5 bg-white hover:bg-neutral-200 text-bg-dark font-sans rounded-lg text-xs font-bold transition-all"
                  >
                    Done
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
