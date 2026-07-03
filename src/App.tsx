import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import AIAssistant from "./components/AIAssistant";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section as user scrolls
  useEffect(() => {
    const sections = ["hero", "projects", "skills", "about", "ai-assistant", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for navbar highlights

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-bg-dark min-h-screen text-white font-sans selection:bg-accent-primary/30 antialiased overflow-x-hidden">
      
      {/* Dynamic Navigation Column */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Scroll Stage */}
      <main>
        
        {/* Stage 1: Display Intro */}
        <Hero />

        {/* Stage 2: Product Portfolios */}
        <Projects />

        {/* Stage 3: Technical Competencies */}
        <Skills />

        {/* Stage 4: Background Pivot Chronology */}
        <About />

        {/* Stage 5: Career Dialog Agent */}
        <AIAssistant />

        {/* Stage 6: Client Pitch Inquiries */}
        <Contact />

      </main>

    </div>
  );
}
