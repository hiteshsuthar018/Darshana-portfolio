export const profile = {
  name: "Darshana Soni",
  role: "UI/UX Designer",
  tagline: "Designing intuitive digital experiences that blend aesthetics with usability.",
  shortBio:
    "Creative and detail-oriented UI/UX Designer with hands-on experience designing responsive web and mobile applications. Passionate about creating user-centered digital products through research, wireframing, prototyping, and modern interface design using Figma.",
  email: "darshanasoni76@gmail.com",
  linkedin: "https://linkedin.com/in/darshana-soni-24757b279",
  github: "https://github.com/Darshanasoni23",
};

export const about = {
  paragraphs: [
    "I'm a UI/UX Designer passionate about transforming ideas into intuitive digital experiences.",
    "My design approach focuses on understanding users, simplifying complex workflows, and creating interfaces that are both visually appealing and highly functional. From user research and wireframing to interactive prototypes and polished UI systems, I enjoy designing products that users genuinely love.",
    "I have experience designing web applications, mobile apps, dashboards, landing pages, and e-commerce platforms while following modern design principles and accessibility standards.",
  ],
  highlights: [
    { label: "Focus", value: "Product & UI systems" },
    { label: "Core tool", value: "Figma" },
    { label: "Based in", value: "India" },
  ],
};

export const skillGroups = [
  {
    title: "UI Design",
    items: [
      "Figma",
      "Design Systems",
      "Visual Design",
      "Typography",
      "Color Theory",
      "Responsive Design",
      "Dashboard Design",
      "Mobile UI",
      "Web UI",
    ],
  },
  {
    title: "UX Design",
    items: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "Interaction Design",
      "UI Auditing",
      "Information Architecture",
      "Accessibility",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Canva", "GitHub", "VS Code"],
  },
];

export const experience = {
  role: "UI/UX Designer Intern",
  company: "Websenor",
  duration: "March 2026 – June 2026",
  responsibilities: [
    "Designed responsive web and mobile interfaces using Figma.",
    "Created wireframes and interactive prototypes.",
    "Built user flows for multiple digital products.",
    "Designed reusable UI components.",
    "Improved user experience through competitor research.",
    "Conducted UI audits.",
    "Designed dashboards, landing pages, and mobile applications.",
    "Worked on Jewellery Website, Food Delivery App, and Setlo App.",
  ],
};

export interface Project {
  slug: string;
  index: string;
  category: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  process: string[];
  tools: string[];
  features: string[];
  accent: string;
  gradient: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "shabbhi",
    index: "01",
    category: "Website · UI/UX",
    title: "Shabbhi — Herbal Wellness Website",
    description:
      "A modern website UI designed for a herbal wellness brand focused on natural and Ayurvedic products, emphasizing clean aesthetics, intuitive navigation, and responsive layouts.",
    problem:
      "Herbal wellness shoppers needed a calm, trustworthy space to browse Ayurvedic products, but conventional e-commerce templates felt clinical and undermined the brand's natural positioning.",
    solution:
      "A minimal, organic-toned interface with generous whitespace, warm product photography, and a simplified checkout path that keeps the shopping journey unhurried and reassuring.",
    process: ["UX Research", "Wireframing", "High-Fidelity UI", "Responsive Design", "Design System", "User Flow"],
    tools: ["Figma", "Design System", "Prototyping"],
    features: [
      "Minimal interface",
      "Product showcase",
      "Responsive layout",
      "Clean shopping experience",
      "Organic visual theme",
    ],
    accent: "#7C5CFC",
    gradient: "linear-gradient(135deg, #EFEBFF 0%, #E4F4EA 100%)",
  },
  {
    slug: "matrimonial-app",
    index: "02",
    category: "Mobile App · UI/UX",
    title: "Muslim Matrimonial Mobile App",
    description:
      "A complete UI/UX design for a matrimonial application covering the entire user journey — from onboarding to matchmaking, chat, and subscriptions.",
    problem:
      "Matrimonial apps often overwhelm new users with dense forms and unclear trust signals during onboarding, leading to drop-off before a single match is made.",
    solution:
      "A guided, screen-by-screen onboarding flow paired with a warm visual language and clear verification cues, carried through matchmaking, chat, and subscription screens.",
    process: ["User Research", "User Flow", "Mobile UI", "Prototyping", "Design System"],
    tools: ["Figma", "Prototyping", "User Flows"],
    features: [
      "Smooth onboarding",
      "Modern profile management",
      "Secure authentication",
      "Interactive messaging",
      "Premium subscription flow",
    ],
    accent: "#4C6FFF",
    gradient: "linear-gradient(135deg, #EAF0FF 0%, #F1ECFF 100%)",
    link: "https://www.figma.com/design/2dc4IJoONgp3PJcRnl37G0/Untitled?node-id=0-1&p=f",
  },
  {
    slug: "matrimonial-dashboard",
    index: "03",
    category: "Dashboard · UI/UX",
    title: "Muslim Matrimonial Admin Dashboard",
    description:
      "A modern admin dashboard for efficiently managing a matrimonial platform — monitoring users, subscriptions, analytics, and performance in one organized view.",
    problem:
      "Platform administrators needed a single, scalable view across users, subscriptions, and reports, without digging through disconnected panels for routine tasks.",
    solution:
      "A structured dashboard architecture with clear information hierarchy, modular data cards, and reusable table and chart components built for scale.",
    process: ["Dashboard Design", "UX Planning", "Information Architecture", "Component Design", "Data Visualization"],
    tools: ["Figma", "Design System", "Data Visualization"],
    features: [
      "Dashboard analytics",
      "User management",
      "Subscription management",
      "Reports",
      "Activity monitoring",
      "Admin settings",
    ],
    accent: "#FF7A59",
    gradient: "linear-gradient(135deg, #FFF1EC 0%, #EFEBFF 100%)",
    link: "https://www.figma.com/design/2dc4IJoONgp3PJcRnl37G0/Untitled?node-id=0-1&p=f",
  },
  {
    slug: "bitedash",
    index: "04",
    category: "Mobile App · UI/UX",
    title: "BiteDash — Food Delivery App",
    description:
      "A food delivery application focused on a fast, engaging ordering experience with personalized recommendations and intuitive navigation.",
    problem:
      "Ordering flows in food delivery apps frequently bury discovery and checkout behind extra taps, slowing down the moment users are most decisive: when they're hungry.",
    solution:
      "A discovery-first home screen, personalized recommendation modules, and a streamlined checkout with live order tracking to keep the whole path short and confident.",
    process: ["Mobile UI", "User Flow", "Wireframing", "Prototyping", "Interaction Design"],
    tools: ["Figma", "Prototyping", "Interaction Design"],
    features: [
      "Restaurant discovery",
      "Food categories",
      "Personalized recommendations",
      "Real-time order tracking",
      "Secure checkout",
      "Order history",
    ],
    accent: "#7C5CFC",
    gradient: "linear-gradient(135deg, #F1ECFF 0%, #EAF0FF 100%)",
  },
];

export const processSteps = [
  {
    title: "Discover",
    detail: "User research, competitor analysis, and problem definition to ground the design in real needs.",
    items: ["User Research", "Competitor Analysis", "Problem Definition"],
  },
  {
    title: "Define",
    detail: "Personas, user journeys, and information architecture that give the problem a clear shape.",
    items: ["Personas", "User Journey", "Information Architecture"],
  },
  {
    title: "Design",
    detail: "Wireframes evolve into a considered design system and high-fidelity interface.",
    items: ["Wireframes", "Design System", "High-Fidelity UI"],
  },
  {
    title: "Prototype",
    detail: "Interactive prototypes and micro-interactions tested with real users before handoff.",
    items: ["Interactive Prototype", "Micro-Interactions", "User Testing"],
  },
  {
    title: "Deliver",
    detail: "Clean developer handoff with documentation and responsive, production-ready assets.",
    items: ["Developer Handoff", "Design Documentation", "Responsive Assets"],
  },
];

export const whyWorkWithMe = [
  "User-centered design approach",
  "Pixel-perfect interfaces",
  "Responsive UI design",
  "Accessibility-first mindset",
  "Strong problem-solving skills",
  "Clean design systems",
  "Collaborative workflow",
  "Attention to detail",
];
