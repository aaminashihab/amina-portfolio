import { ProjectType, TimelineItemType, SkillGroupType } from "./types";

export const projectsData: ProjectType[] = [
  {
    id: "dubai-expat-agent",
    title: "Dubai Expat Advisor",
    emoji: "🇦🇪",
    description: "AI-powered relocation assistant that helps prospective Dubai residents plan housing, schooling, visas, and living costs through a multi-agent workflow.",
    detailedDescription: "A full-stack agentic application that uses Gemini to orchestrate tools autonomously. It queries live real estate APIs, computes accurate local costs, and employs an LLM-as-a-Judge pattern to evaluate its own relocation plans before serving them to the user.",
    architecture: {
      overview: "A React SPA communicating with a FastAPI backend that orchestrates a Gemini model using custom tools and self-evaluation loops.",
      flow: [
        "Ingestion: Receives user profile (budget, family size, preferences) via a structured UI.",
        "Tool Orchestration: The Gemini agent calls tools like housing_search (Bayut API), visa_advisor, and cost_calculator.",
        "Self-Evaluation: A secondary Gemini judge grades the drafted plan against the user's initial constraints and outputs a quality score.",
        "Delivery: The final validated plan is streamed to the frontend."
      ],
      challenges: [
        "Challenge: Ensuring the agent provides accurate real-time rent data.",
        "Solution: Integrated the RapidAPI Bayut endpoints directly into the agent's toolset.",
        "Challenge: Measuring if the generated plan actually satisfied the user's complex constraints.",
        "Solution: Implemented a secondary evaluation pass (LLM-as-Judge) to grade its own output before final delivery."
      ],
      metrics: [
        { label: "Architecture", value: "Agentic Loop" },
        { label: "External APIs", value: "RapidAPI (Bayut)" },
        { label: "Deployment", value: "Docker / Render" }
      ]
    },
    tags: ["FastAPI", "React", "Gemini AI", "Agentic Architecture", "Python", "Docker"],
    githubUrl: "https://github.com/aaminashihab/dubai-expat-agent",
    articleUrl: "https://dubai-expat-agent.onrender.com",
    category: "Full Stack AI",
    isFlagship: true
  },
  {
    id: "motivate-ai",
    title: "MotivateAI",
    emoji: "🧠",
    description: "AI learning coach designed to help students stay focused by organizing study sessions and reducing distractions using an agent-based workflow.",
    detailedDescription: "Designed and built MotivateAI to tackle the core psychological and behavioral issues of digital distraction. Instead of simply blocking websites, the AI agent monitors the user's focus state, translates educational content relative to their goals, and injects motivation context when it intercepts redirection attempts.",
    architecture: {
      overview: "A highly resilient multi-agent system built to act as an active mentor. Uses a shadow controller loop that interacts with a Model Context Protocol (MCP) server representing the user's workspace.",
      flow: [
        "Inception: User inputs their high-level study goals (e.g., Learn Transformers).",
        "Interception: Browser extension/agent detects YouTube navigation and queries the context engine.",
        "Evaluation: The LLM controller classifies the page relevance against the user's target goals.",
        "Redirection/Intervention: If non-relevant, the agent generates custom micro-lessons linking the topic to transformers, prompting an active learning puzzle."
      ],
      challenges: [
        "Challenge: High-latency from synchronous prompt evaluations.",
        "Solution: Implemented stream caching & token-level classification filters to make interception decisions in less than 150ms.",
        "Challenge: Safe handling of prompt injections inside user questions.",
        "Solution: Implemented dual-guard sanitization layers that filter instructions from target learning materials."
      ],
      metrics: [
        { label: "Focus Retention", value: "+84% Avg Session" },
        { label: "Interception Latency", value: "<150ms" },
        { label: "Evaluation Match", value: "96.4% Precision" }
      ]
    },
    tags: ["Gemini 2.0 Flash", "Agentic AI", "Next.js", "MongoDB", "Cloud Run"],
    githubUrl: "https://github.com/aaminashihab/MotivateAI",
    articleUrl: "https://motivateai.hashnode.dev",
    category: "AI Agent",
    isFlagship: true
  },
  {
    id: "dubai-property",
    title: "Dubai Property AI",
    emoji: "🏘️",
    description: "Machine learning application for estimating Dubai residential property prices with interactive market analytics and a Gemini-powered data exploration assistant.",
    detailedDescription: "A robust machine learning pipeline engineered to predict transaction valuations across Dubai's highly segmented property market. Solved major data preprocessing challenges related to extremely high-cardinality neighborhood categorical columns.",
    architecture: {
      overview: "A serialized machine learning service powered by a trained XGBoost Regressor, containerized with FastAPI and accessed via an interactive Streamlit dashboard.",
      flow: [
        "Ingestion: Cleaned and structured 100K+ historical transactional records from open registry sources.",
        "Feature Engineering: Utilized target encoding with custom prior smoothing (SafeTargetEncoder) on neighborhood variables to prevent direct label leakage.",
        "Validation: Applied a strict 5-Fold Stratified K-Fold cross-validation strategy.",
        "Deployment: Serialized the model payload with joblib and hosted on Cloud Run with FastAPI endpoints."
      ],
      challenges: [
        "Challenge: Extreme cardinality in sub-community IDs causing dimensionality explosion in One-Hot Encodings.",
        "Solution: Created custom Target Encoding with additive noise and smoothing factors.",
        "Challenge: High variance in luxury villa sales skewing model performance metrics.",
        "Solution: Applied log1p translation on the target label and optimized absolute error using Huber loss constraints."
      ],
      metrics: [
        { label: "R² Accuracy Scale", value: "94.2%" },
        { label: "Mean Absolute Error", value: "±4.6%" },
        { label: "Inference Latency", value: "40ms" }
      ]
    },
    tags: ["XGBoost", "FastAPI", "Streamlit", "Firebase", "GridSearchCV", "Python"],
    githubUrl: "https://github.com/aaminashihab",
    category: "Machine Learning"
  },
  {
    id: "customer-churn",
    title: "Customer Churn Dashboard",
    emoji: "📊",
    description: "Customer churn analytics dashboard featuring interactive risk simulation, batch prediction, and AI-generated customer retention recommendations.",
    detailedDescription: "Bridged the gap between quantitative classification probabilities and practical business decisions. The dashboard predicts which client accounts are at risk, translates the underlying statistical feature weights, and outputs actionable human-readable intervention plans through Gemini.",
    architecture: {
      overview: "An analytical dashboard leveraging Scikit-Learn prediction probability engines and an integrated LLM parser to turn coefficients into interactive client playbooks.",
      flow: [
        "Analytics: Runs subscriber metrics through structured feature normalization pipeline.",
        "Inference: Scikit-learn Logistic Regression calculates raw churn probability scores.",
        "Explainer: Uses local perturbation metrics to identify the top three churn factors for a specific client.",
        "Synthesis: Supplies coefficients and business context to Gemini to construct high-impact email outlines."
      ],
      challenges: [
        "Challenge: Raw probability scores left account managers confused about exact physical levers.",
        "Solution: Designed individual risk-attribution charts and a dynamic text plan explaining the 'Why' behind every customer score.",
        "Challenge: High imbalance in subscription ratios.",
        "Solution: Optimized the model threshold using Precision-Recall curve analysis instead of standard ROC AUC."
      ],
      metrics: [
        { label: "Cohort Recall", value: "89.0%" },
        { label: "Prescriptive Speed", value: "<1.2s" },
        { label: "Action Plan Rating", value: "4.8/5.0" }
      ]
    },
    tags: ["Gemini Partner API", "Streamlit", "Scikit-learn", "Python", "Data Visualization"],
    githubUrl: "https://github.com/aaminashihab",
    category: "Predictive Analytics"
  }
];

export const skillsData: SkillGroupType[] = [
  {
    category: "AI & ML Engine",
    icon: "brain-circuit",
    skills: [
      { name: "Gemini 2.0 Flash / Pro", level: 95, description: "Structured outputs, multi-agent frameworks, tool calling, and structured prompt engineering." },
      { name: "Agentic Architectures", level: 90, description: "Multi-tool loops, control queues, context tracking systems, and workspace integrations." },
      { name: "MCP Servers & APIs", level: 85, description: "Connecting isolated filesystems, database proxies, and browser layers securely to LLMs." },
      { name: "XGBoost / Scikit-learn", level: 88, description: "Classical classification, cross-validation, hyperparameter grid search, and custom encoders." },
      { name: "RAG & Vector Pipelines", level: 82, description: "Context chunking, text embedding representations, and dense semantic search layouts." }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "database",
    skills: [
      { name: "Python", level: 92, description: "Advanced data manipulation, ML pipeline tooling, and API development with ASGI." },
      { name: "FastAPI", level: 90, description: "High-performance asynchronous endpoints, strict typing, and automated OpenAPI documentation." },
      { name: "Node.js / Express", level: 85, description: "Microservice construction, event hubs, middleware routing, and real-time sockets." },
      { name: "MongoDB / NoSQL", level: 80, description: "Flexible document stores, aggregation pipelines, and structural indexing strategies." },
      { name: "Firebase Firestore", level: 85, description: "Real-time client synchronization, granular security rules, and serverless querying." }
    ]
  },
  {
    category: "Frontend & UI",
    icon: "layout",
    skills: [
      { name: "React 18 / 19", level: 88, description: "Dynamic state manipulation, hooks lifecycle, modular layout, and performance optimization." },
      { name: "Next.js", level: 85, description: "App router configuration, static/server-side hybrid page caching layouts." },
      { name: "Streamlit", level: 95, description: "Rapid, interactive ML dashboards, inline charts, and immediate data-bound layout rendering." },
      { name: "Tailwind CSS", level: 90, description: "Utility styling, adaptive layouts, fluid custom grids, and sleek responsive variables." }
    ]
  },
  {
    category: "Cloud & Devops",
    icon: "cloud",
    skills: [
      { name: "GCP Cloud Run", level: 88, description: "Fast, serverless container orchestration, secure environment variable injections, and scaling." },
      { name: "Docker Containerization", level: 80, description: "Writing lightweight Dockerfiles, setting up isolated containers, and layer caching rules." },
      { name: "Vercel / Hosting", level: 90, description: "Continuous Git deployments, edge redirects, serverless triggers, and production domains." },
      { name: "GitHub Actions", level: 82, description: "CI/CD configurations, static checks, and automatic build step triggers." }
    ]
  }
];

export const timelineData: TimelineItemType[] = [
  {
    id: "college",
    icon: "🎓",
    title: "B.Tech Computer Science",
    subtitle: "Trivandrum, Kerala, India",
    period: "2018 - 2022",
    description: "Deep foundation in software engineering, object-oriented concepts, and computational algorithms.",
    details: [
      "Rigorous training in core algorithms, structural mathematics, and database management.",
      "Engineered group research projects using classic machine learning frameworks.",
      "Honed technical problem-solving capabilities within collaborative lab groups."
    ]
  },
  {
    id: "upsc",
    icon: "📚",
    title: "UPSC Civil Services Preparation",
    subtitle: "Focus: Systems & Public Administration",
    period: "2022 - 2024",
    description: "A two-year intensive preparation period for India's administrative exam, focusing on policy frameworks, societal dynamics, and complex analytical systems.",
    details: [
      "Absorbed extensive analytical skills, structural societal understanding, and research procedures.",
      "Developed high-velocity reading techniques and synthesis of large-body data (a crucial skill for LLM prompt structures).",
      "Cultivated a macro-perspective on behavioral public problems, enabling deep systemic solution reasoning."
    ]
  },
  {
    id: "hackathon",
    icon: "🚀",
    title: "MotivateAI — Launched in Hackathon",
    subtitle: "Google Cloud Rapid Agent Hackathon 2026",
    period: "Early 2026",
    description: "Designed, integrated, and scaled an agentic student coach in less than 48 hours, demonstrating high-velocity development and deployment skills.",
    details: [
      "Engineered robust control logic translating student browser indicators into actionable tutoring interjections.",
      "Demonstrated Gemini 2.0 Flash capability in the wild with multi-tool calling configurations.",
      "Deployed the final live backend to Google Cloud Run with structured validation testing."
    ]
  },
  {
    id: "freelance",
    icon: "🌍",
    title: "AI Consultant & Product builder",
    subtitle: "Fiverr Freelance & Team Builder",
    period: "Present",
    description: "Connecting businesses in the UAE, India, and globally with state-of-the-art AI tooling and predictions.",
    details: [
      "Building practical conversational solutions and agent architectures on Fiverr under client constraints.",
      "Developing accurate valuation frameworks for property investment groups (e.g., Dubai Property AI).",
      "Proactively pursuing a full-time engineering role within high-velocity tech hubs in the UAE or remotely."
    ]
  }
];

export const interviewQuestions = [
  {
    question: "Why did you pivot from UPSC civil services to AI Development?",
    answer: "Preparing for the Civil Services taught me to think in terms of complex national-scale systems, data synthesis, and societal bottlenecks. But I realized that instead of recommending policies, I wanted to build active tech assets that solve human behavior problems directly. Product building in AI gives immediate feedback: I can design an agent in the morning, deploy it by noon, and see users benefit from it by night. It connects my systems-thinking background with the ultimate active lever of our era: Generative AI."
  },
  {
    question: "What makes your MotivateAI agentic architecture unique?",
    answer: "MotivateAI goes beyond simple keyword blocking. It matches the user's micro-activities on distracting platforms against their explicit semantic learning state. When an intervention is triggered, instead of throwing an annoying alert, it creates a custom micro-lesson that connects the topic they are trying to learn (e.g., neural networks) directly to the specific video they tried to open. This relies on stable Model Context Protocol (MCP) integrations, custom vector-store embeddings keeping track of their syllabus, and extremely fast token-stream interception (<150ms) to ensure seamless performance."
  },
  {
    question: "How did you design Dubai Property AI to prevent target data leakage?",
    answer: "When mapping neighborhoods and community boundaries in property data, there is immense categorical cardinality. Traditional approaches like One-Hot encoding lead to feature explosions, while naive target encoding overfits the neighborhood average and leaks statistical target signals. I used a custom SafeTargetEncoder which estimates target averages on out-of-fold data with added Laplace smoothing. This ensures that the model learns the underlying sub-community valuation trends without memorizing specific expensive anomalies."
  },
  {
    question: "Are you open to relocating to the UAE or working in a hybrid setup?",
    answer: "Yes, absolutely! I am based in Kerala, which is in close geographical and economic proximity to the UAE (just a 4-hour flight with identical trading-partner alignments). I am structured to work fully remote with global teams, and am completely prepared to relocate to Dubai, Abu Dhabi, or work within hybrid structures across the GCC. I hold a valid passport and can adjust to international timezones instantly."
  }
];
