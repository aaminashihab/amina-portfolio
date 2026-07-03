export interface ProjectType {
  id: string;
  title: string;
  emoji: string;
  description: string;
  detailedDescription: string;
  architecture: {
    overview: string;
    flow: string[];
    challenges: string[];
    metrics: { label: string; value: string }[];
  };
  tags: string[];
  githubUrl: string;
  articleUrl?: string;
  category: "AI Agent" | "Machine Learning" | "Predictive Analytics" | "Full Stack AI";
  isFlagship?: boolean;
}

export interface TimelineItemType {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  details: string[];
}

export interface SkillGroupType {
  category: string;
  icon: string;
  skills: { name: string; level: number; description: string }[];
}
