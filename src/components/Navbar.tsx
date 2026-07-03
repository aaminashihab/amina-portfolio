import React, { useState, useEffect } from "react";
import { Mail, Menu, X, Globe, BrainCircuit } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "AI Consultant", href: "#ai-assistant" }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-dark/85 backdrop-blur-md border-b border-white/8 py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-white tracking-tight flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <BrainCircuit className="w-5 h-5 text-accent-secondary" />
          <span>Amina<span className="text-accent-secondary">.</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="flex items-center gap-1.5 bg-accent-primary hover:bg-accent-secondary text-white font-semibold text-[13px] px-4 py-2 rounded-lg transition-all duration-200 shadow-md shadow-accent-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire me</span>
          </a>
        </div>

        {/* Mobile Hamburger Key */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-neutral-300 transition-colors p-1"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[57px] left-0 right-0 bottom-0 bg-bg-dark/98 backdrop-blur-lg flex flex-col px-6 py-8 border-t border-white/5 z-40 animate-fade-in shadow-2xl">
          <ul className="flex flex-col gap-6 list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`text-lg font-display tracking-wide flex items-center justify-between pb-3 border-b border-white/5 ${
                    activeSection === item.href.slice(1)
                      ? "text-white font-bold border-accent-secondary/50"
                      : "text-neutral-400"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-accent-secondary opacity-50 font-mono">
                    {item.href === "#ai-assistant" ? "Agent" : item.label.substring(0, 3)}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contact");
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-accent-primary hover:bg-accent-secondary text-white font-bold py-3.5 rounded-xl transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </li>
          </ul>

          <div className="mt-auto flex justify-between items-center text-xs text-neutral-500 font-mono border-t border-white/5 pt-6">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-teal-400 animate-pulse" /> Available global / UAE
            </span>
            <span>Amina S. Portfolio</span>
          </div>
        </div>
      )}
    </nav>
  );
}
