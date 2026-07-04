import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Send, User, Bot, Sparkles, AlertCircle, RefreshCw } from "lucide-react";
import { interviewQuestions } from "../data";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "bot",
      text: "Hi! I'm Amina's Career Agent. I have absolute access to her project documentation, B.Tech curriculum, UPSC-preparation files, and work telemetry. What would you like to verify about her candidacy?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const presetPrompts = [
    { label: "Why the UPSC to AI pivot?", query: "Why did you pivot from UPSC civil services to AI Development?" },
    { label: "Tell me about MotivateAI specs", query: "What makes your MotivateAI agentic architecture unique?" },
    { label: "Preventing ML target leakage?", query: "How did you design Dubai Property AI to prevent target data leakage?" },
    { label: "Remote work availability?", query: "Are you open to full-time remote roles?" }
  ];

  const handleMessageSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsgId = Date.now().toString();
    const cleanQuery = text.trim();

    // Add user message to stack
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: "user",
        text: cleanQuery,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);

    setInputText("");
    setIsTyping(true);

    // Simulate Agent processing delay
    setTimeout(() => {
      // Direct Match Checks against presets mapping
      const exactMatch = interviewQuestions.find(
        (iq) => iq.question.toLowerCase() === cleanQuery.toLowerCase()
      );

      let responseText = "";

      if (exactMatch) {
        responseText = exactMatch.answer;
      } else {
        // Keyword-based matches
        const queryLower = cleanQuery.toLowerCase();
        
        if (queryLower.includes("upsc") || queryLower.includes("civil services") || queryLower.includes("pivot") || queryLower.includes("background")) {
          responseText = interviewQuestions[0].answer;
        } else if (queryLower.includes("motivateai") || queryLower.includes("agent") || queryLower.includes("mcp") || queryLower.includes("youtube")) {
          responseText = interviewQuestions[1].answer;
        } else if (queryLower.includes("dubai") || queryLower.includes("property") || queryLower.includes("ml") || queryLower.includes("xgboost") || queryLower.includes("leakage") || queryLower.includes("safe")) {
          responseText = interviewQuestions[2].answer;
        } else if (queryLower.includes("remote") || queryLower.includes("hire") || queryLower.includes("availability") || queryLower.includes("work")) {
          responseText = interviewQuestions[3].answer;
        } else if (queryLower.includes("skills") || queryLower.includes("tech") || queryLower.includes("experience") || queryLower.includes("build") || queryLower.includes("projects")) {
          responseText = "Amina specializes in modern GenAI (Gemini SDKs, agentic prompts, multi-tool loops, and Model Context Protocol integrations), Python (FastAPI, Scikit-learn, XGBoost), and full-stack rendering (React, Streamlit, MongoDB, Node.js). She builds robust backend APIs and deploys them securely inside Google Cloud Run. Click on the preset buttons above to inspect granular Spec architectures.";
        } else if (queryLower.includes("hello") || queryLower.includes("hi") || queryLower.includes("hey")) {
          responseText = "Hello! I am Amina's mock resume chatbot assistant. Feel free to probe her portfolio details or ask things like 'why did you pivot from UPSC?', 'what is MotivateAI?', or 'are you open to remote roles?'.";
        } else if (queryLower.includes("contact") || queryLower.includes("email") || queryLower.includes("phone") || queryLower.includes("hire")) {
          responseText = "You can get in touch with Amina directly by emailing aminashiha07@gmail.com, sending a message on LinkedIn, or booking her specialized AI workflow design gigs on Fiverr (Fiverr alias: amina_shihab). Scroll down to the Contact section for quick access links.";
        } else {
          // General Intelligent summary
          responseText = `That's a great question regarding her portfolio. Amina holds a B.Tech degree in Computer Science, combined with highly rigorous analytical disciplines from her civil services study period. She has shipped three core AI assets: MotivateAI (multi-agent workspace mentor), Dubai Property AI (ML price validation forecasting with out-of-fold target encoding), and Customer Churn Predictor. If you need details on specific architectures or her remote availability, please type 'remote' or 'UPSC' or use the quick access widgets above.`;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: responseText,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "initial",
        sender: "bot",
        text: "System cache reset. Hi! I'm Amina's Career Agent. What would you like to verify about her candidacy?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  return (
    <section id="ai-assistant" className="py-24 px-6 bg-bg-inner border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col mb-12 text-center md:text-left">
          <span className="text-[11px] font-bold tracking-[2px] text-accent-secondary uppercase font-sans mb-3">
            Interactive Playbook
          </span>
          <h2 className="font-display text-4xl font-extrabold text-white tracking-tight mb-4">
            Amina's Career Agent
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed mb-4">
            Probe Amina's systems engineering thinking, interview files, and relocation setups in real time.
          </p>
        </div>

        {/* Console Hub */}
        <div className="bg-bg-card border border-white/8 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px] hover:border-accent-secondary/30 transition-all">
          
          {/* Console Header */}
          <div className="p-4 bg-bg-dark border-b border-white/8 flex justify-between items-center text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 hs-2 ring-[4px] ring-emerald-500/20 rounded-full bg-emerald-400" />
              <span className="text-neutral-400 font-semibold uppercase tracking-wider">amina_agent_controller._v3 (Active)</span>
            </div>
            <button
              onClick={handleReset}
              className="text-neutral-500 hover:text-white flex items-center gap-1.5 hover:bg-white/5 py-1 px-2.5 rounded transition-all"
              title="Reset Chat Session"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Preset Prompts Panel */}
          <div className="p-3 bg-bg-inner/60 border-b border-white/5 flex flex-wrap gap-1.5 items-center">
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wide mr-1.5">Quick Checks:</span>
            {presetPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleMessageSend(p.query)}
                className="text-[10px] font-sans font-semibold bg-bg-inner hover:bg-white/5 text-neutral-300 hover:text-white border border-white/5 hover:border-white/10 px-2.5 py-1 rounded transition-all active:scale-95"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Transcript Panel */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-bg-card/40">
            {messages.map((message) => {
              const isBot = message.sender === "bot";
              return (
                <div
                  key={message.id}
                  className={`flex gap-3 max-w-[85%] ${isBot ? "mr-auto" : "ml-auto flex-row-reverse"}`}
                >
                  {/* Icon */}
                  <div className={`p-1.5 rounded-lg border h-8 w-8 flex-shrink-0 flex items-center justify-center ${
                    isBot ? "bg-accent-primary/10 border-accent-primary/30 text-accent-secondary" : "bg-white/5 border-white/10 text-white"
                  }`}>
                    {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  {/* Bubble content */}
                  <div className={`p-4 rounded-xl flex flex-col space-y-2 ${
                    isBot ? "bg-bg-inner border border-white/5 rounded-tl-none text-neutral-300" : "bg-accent-primary text-white rounded-tr-none"
                  }`}>
                    <p className="text-xs leading-relaxed font-sans whitespace-pre-line">{message.text}</p>
                    <span className="text-[8px] font-mono text-neutral-500 ml-auto block">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex gap-3 max-w-[85%] mr-auto">
                <div className="p-1.5 rounded-lg border h-8 w-8 bg-accent-primary/10 border-accent-primary/30 text-accent-secondary flex items-center justify-center animate-pulse">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-bg-inner border border-white/5 rounded-xl p-4 rounded-tl-none">
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Submission Control Panel */}
          <div className="p-4 bg-bg-dark border-t border-white/8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleMessageSend(inputText);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about AI stack, civil system prep, or workspace relocations..."
                className="flex-1 bg-bg-card border border-white/8 rounded-xl py-3 px-4 text-xs font-sans text-white focus:outline-none focus:ring-1 focus:ring-accent-primary/80 focus:border-accent-primary/60 transition-all placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="bg-accent-primary hover:bg-accent-secondary active:scale-95 text-white p-3 rounded-xl transition-all shadow-md shadow-accent-primary/10 flex items-center justify-center"
                title="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Hint banner */}
        <div className="mt-4 flex items-center gap-2 text-[10px] text-neutral-500 font-mono justify-center">
          <AlertCircle className="w-3.5 h-3.5 text-accent-secondary" />
          <span>This agent uses a local responsive dictionary compiled directly from Amina's resume and portfolio.</span>
        </div>

      </div>
    </section>
  );
}
