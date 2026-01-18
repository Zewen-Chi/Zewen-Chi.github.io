
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  tags: string[];
  featured: boolean;
  imagePlaceholder?: boolean;
  imageUrl?: string;
}

export interface EnhancedBlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string; // Markdown-like content
  tags: string[];
  coverImage?: string;
}

export interface EnhancedProfile {
  name: string;
  role: string;
  affiliation: string;
  bio: string;
  mission: string;
  missionStatements: string[];
  avatarUrl: string;
  socials: {
    twitter?: string;
    github?: string;
    scholar?: string;
    linkedin?: string;
  };
}

// ChatMessage interface for Gemini conversation history
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
