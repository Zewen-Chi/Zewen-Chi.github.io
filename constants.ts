
import { EnhancedProfile } from './types';

export const PROFILE: EnhancedProfile = {
  name: "Zewen Chi 迟泽闻",
  role: "Researcher",
  affiliation: "Microsoft Research",
  mission: "Exploring new paradigms for LLMs with a focus on inference-time scaling and agentic organizations.",
  missionStatements: [
    "Scale intelligence to infinitely parallel.",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/12969670?v=4", 
  bio: "I am a Researcher at Microsoft Research, advised by Furu Wei and Li Dong. Currently, I am exploring new paradigms for LLMs, with a primary focus on inference-time scaling. Previously, I worked on pre-training multilingual LMs and cross-lingual representation learning.",
  socials: {
    github: "https://github.com/CZWin32768",
    scholar: "https://scholar.google.com/citations?user=MP1GX_0AAAAJ",
    twitter: "https://twitter.com/CZWin32768",
    linkedin: "https://www.linkedin.com/in/zewen-chi-781534171"
  }
};

export const EDUCATION = [
  {
    institution: "Beijing Institute of Technology",
    degree: "Ph.D. in Computer Science",
    period: "2018 – 2024",
  },
  {
    institution: "Beijing Institute of Technology",
    degree: "B.S. in Computer Science",
    period: "2014 – 2018",
  }
];

export const EXPERIENCE = [
  {
    company: "Microsoft Research",
    role: "Researcher",
    period: "2024 – PRESENT",
    advisor: "Advised by Furu Wei, Li Dong",
    details: [
      "Exploring new paradigms for LLMs with a focus on inference-time scaling.",
    ]
  },
  {
    company: "Mila - Quebec AI Institute",
    role: "Research Intern",
    period: "2023 – 2024",
    advisor: "Advised by Jian Tang",
    details: [
      "Built ProtLLM that models protein sequences as a 'foreign language' in an LLM.",
    ]
  },
  {
    company: "Microsoft Research",
    role: "Research Intern",
    period: "2019 – 2022",
    advisor: "Advised by Furu Wei, Li Dong",
    details: [
      "Breaking language barriers in AI by advancing cross-lingual representation learning.",
    ]
  },
  {
    company: "ByteDance AI Lab",
    role: "Intern",
    period: "2018",
    advisor: "Advised by Shenjian Zhao, Lei Li",
    details: [
      "Building machine translation systems.",
    ]
  }
];

export const SELECTED_PUBLICATIONS = [
  {
    title: "The Era of Agentic Organization: Learning to Organize with Language Models",
    venue: "arXiv preprint 2025",
    link: "https://arxiv.org/abs/2510.26658",
    videoUrl: "res/asyncthink/demo.mp4",
    description: "We introduce asynchronous thinking (AsyncThink) as a new paradigm of reasoning with large language models. Through RL, AsyncThink learns to organize the internal thinking process into concurrently executable structures.",
  },
  {
    title: "Optimizing Prompts for Text-to-Image Generation",
    venue: "NeurIPS 2023",
    link: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/d346d91999074dd8d6073d4c3b13733b-Abstract-Conference.html",
    coverImage: "res/promptist.png",
    description: "We propose prompt adaptation, a framework that automatically adapts original user input to model-preferred prompts with RL.",
  },
  {
    title: "InfoXLM: An Information-Theoretic Framework for Cross-Lingual Language Model Pre-Training",
    venue: "NAACL 2021",
    link: "https://huggingface.co/microsoft/infoxlm-large",
    coverImage: "https://www.microsoft.com/en-us/research/wp-content/uploads/2020/10/Tuirng_Extreme_Leaderboard-Graphic-1024x638.jpg",
    description: "InfoXLM formulates pre-training as maximizing mutual information across languages. As the core modeling behind T-ULRv2, it achieved #1 at Google's the XTREME leaderboard.",
  }
];
