import { Course, Feature, Testimonial } from "./types";

export const COURSES: Course[] = [
  {
    id: "digital-marketing",
    title: "AI-Driven Digital Marketing",
    description: "Learn SEO, social media marketing, performance marketing, content strategy, branding, analytics, and AI-powered marketing tools.",
    icon: "Megaphone",
    duration: "6 Months",
    level: "Beginner to Advanced",
    image: "/src/assets/images/cyberwise_marketing_1782063861065.jpg",
    features: [
      "AI Marketing Automations",
      "Advanced SEO & SEM Strategies",
      "Social Media Campaign Management",
      "Performance & Analytical Tracking",
      "UGC-Accredited Integration"
    ]
  },
  {
    id: "videography",
    title: "Professional Videography",
    description: "Master camera techniques, cinematic storytelling, video editing, color grading, and professional production workflows.",
    icon: "Camera",
    duration: "6 Months",
    level: "Practical Hands-on",
    image: "/src/assets/images/cyberwise_video_1782063841548.jpg",
    features: [
      "Cinematography & Camera Physics",
      "Lighting & Audio Recording Setups",
      "Adobe Premiere & DaVinci Resolve",
      "Cinematic Storytelling & Directing",
      "Real-World Production Projects"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Business Growth",
    description: "Learn online store management, product marketing, customer engagement, and strategies for building successful digital businesses.",
    icon: "ShoppingBag",
    duration: "4 Months",
    level: "Entrepreneurship Flow",
    image: "https://picsum.photos/seed/ecommerce-growth/800/600?blur=1",
    features: [
      "Store Setup & Inventory Management",
      "Payment Gateway Integrations",
      "Customer Acquisition Funnels",
      "Scaling & Logistics Automations",
      "Direct-to-Consumer (D2C) Tactics"
    ]
  },
  {
    id: "spoken-english",
    title: "Spoken English & Communication",
    description: "Develop fluent English speaking, professional communication, confidence, presentation, and interview skills.",
    icon: "Sparkles",
    duration: "3 Months",
    level: "Personality & Accent",
    image: "https://picsum.photos/seed/spoken-english/800/600?blur=1",
    features: [
      "Accent & Fluency Conditioning",
      "Public Speaking & Presentation Skills",
      "Professional Corporate Etiquette",
      "Mock Interviews & Resume Engineering",
      "Active Listening & Dialect Control"
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    id: "feat-1",
    title: "Industry-Relevant Curriculum",
    description: "Crafted directly with senior industry specialists to align with core practical requirements in today's workforce.",
    iconName: "FileText"
  },
  {
    id: "feat-2",
    title: "AI-Powered Learning",
    description: "Harness modern LLMs and generative intelligence tools to build campaigns, write copy, and script movies efficiently.",
    iconName: "TrendingUp"
  },
  {
    id: "feat-3",
    title: "Hands-on Practical Training",
    description: "Trade theories for tangible workflows, with over 80% practical workstation activity in professional labs.",
    iconName: "Layers"
  },
  {
    id: "feat-4",
    title: "Expert Trainers & Mentors",
    description: "Receive 1-on-1 focus and coaching from veterans active in global production houses and digital marketing corps.",
    iconName: "Users"
  },
  {
    id: "feat-5",
    title: "UGC Accredited Degree Pathways",
    description: "Synchronize your professional certifications with accredited university degrees to bolster your qualifications.",
    iconName: "GraduationCap"
  },
  {
    id: "feat-6",
    title: "Career-Oriented Learning",
    description: "Direct pathways with mock assessments, company references, placement drives, and high-impact guidance.",
    iconName: "Target"
  },
  {
    id: "feat-7",
    title: "Portfolio Development",
    description: "Exit with a robust portfolio illustrating real projects, live client ad runs, and finished cinematic films.",
    iconName: "Briefcase"
  },
  {
    id: "feat-8",
    title: "Real-World Projects",
    description: "Gain concrete experience managing real-world marketing budgets and producing client-ready video productions.",
    iconName: "Cpu"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan K. Joseph",
    role: "Freelance Cinematic Videographer",
    feedback: "CyberWise transformed my passion into a career. The practical training and expert guidance gave me the confidence to enter the digital industry.",
    image: "https://picsum.photos/seed/rohan/100/100",
    course: "Professional Videography",
    rating: 5
  },
  {
    id: "test-2",
    name: "Aparna Nair",
    role: "Growth Marketer & SEO Specialist",
    feedback: "The AI-Driven Digital Marketing curriculum is years ahead of college classes. I managed a real campaign budget and got hired straight from my portfolio!",
    image: "https://picsum.photos/seed/aparna/100/100",
    course: "AI-Driven Digital Marketing",
    rating: 5
  },
  {
    id: "test-3",
    name: "Muhammed Shafi",
    role: "E-Commerce Business Owner",
    feedback: "Within 4 months of learning e-commerce & business growth at CyberWise, I successfully launched my organic D2C brand and scaled sales. Highly recommended!",
    image: "https://picsum.photos/seed/shafi/100/100",
    course: "E-Commerce & Business Growth",
    rating: 5
  },
  {
    id: "test-4",
    name: "Fathima Riza",
    role: "International Client Associate",
    feedback: "The Spoken English & Communication course drastically shaped my presentation style and interview confidence. I cleared a tier-1 corporation interview on my debut.",
    image: "https://picsum.photos/seed/fathima/100/100",
    course: "Spoken English & Communication",
    rating: 5
  }
];
