export const DATA = {
  home: {
    hero: {
      name: "Abishek S.K",
      title: "Aspiring Software Engineer | Fullstack Developer",
      subtitle:
        "I build responsive, AI-native web apps with React, Next.js, Django, and TypeScript.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in creating modern digital experiences with AI-powered workflows and fullstack development.",
      overview: [
        {
          name: "Frontend Development",
          level: 90,
          icon: "lucide:code",
          color: "primary",
        },
        {
          name: "Backend Development",
          level: 85,
          icon: "lucide:server",
          color: "secondary",
        },
        {
          name: "UI/UX Design",
          level: 80,
          icon: "lucide:layout-dashboard",
          color: "success",
        },
        {
          name: "Problem Solving (DSA)",
          level: 88,
          icon: "lucide:brain",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Achievements",
      sectionDescription: "Highlights from my journey so far",
      items: [
        {
          id: 1,
          name: "LeetCode",
          role: "Competitive Programming",
          content:
            "Solved 300+ problems with a 1560+ contest rating, building strong problem-solving and algorithmic skills.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
        {
          id: 2,
          name: "GitHub",
          role: "Open Source & Projects",
          content:
            "Published 12+ academic and personal projects, ranging from AI-powered apps to fullstack platforms.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Abishek S.K",
      title: "Frontend-focused Fullstack Developer",
      image:
        "https://res.cloudinary.com/devq06psf/image/upload/v1750626859/chic_soba_apc1ht.png", // replace with your own photo if available
      description: [
        "I’m a passionate developer skilled in React, Next.js, TypeScript, and Django. I enjoy building responsive UIs, interactive dashboards, and scalable web applications.",
        "During my 6-month internship, I developed admin panels, integrated APIs, and designed accessible, production-ready applications.",
        "I leverage AI tools like GitHub Copilot and ChatGPT to speed up development and debugging, making me an AI-native builder.",
      ],
    },
    education: [
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        date: "2024 – 2028",
        icon: "mdi:school",
        description:
          "Sri Eshwar College of Engineering | CGPA: 7.93 (till 2nd semester)",
      },
    ],
    experience: [
      {
        title: "Python Fullstack Development Intern",
        date: "Feb 2025 – Aug 2025",
        icon: "mdi:briefcase",
        description:
          "Worked at Altrusity Innovation Pvt. Ltd. (Remote). Built responsive UIs, integrated REST APIs, and developed dashboards for business and gaming applications.",
      },
    ],
    technologies: {
      frontend: {
        description:
          "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description:
          "I build APIs and scalable backends using Django and relational databases.",
        tools: [
          { name: "Django", icon: "logos:django-icon" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "Python", icon: "logos:python" },
        ],
      },
      problemSolving: {
        description:
          "Strong problem-solving foundation with Data Structures and Algorithms.",
        tools: [
          { name: "C++", icon: "logos:cplusplus" },
          { name: "LeetCode", icon: "simple-icons:leetcode" },
          { name: "GeeksforGeeks", icon: "simple-icons:geeksforgeeks" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription:
      "A selection of my recent projects showcasing fullstack and AI-native development",
    work: [
      {
        id: 1,
        title: "AI-Powered Website Builder",
        description:
          "An AI-powered website builder with real-time preview, authentication, and scalable workflows.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1", // replace with screenshots
        gallery: [],
        category: "Web Development",
        details:
          "Built with Next.js, TypeScript, Tailwind, Prisma, and Clerk. Deployed on Vercel with shadcn/ui design system.",
        github: "https://github.com/Abishek-sk46/AIMI",
        live: "https://ai-mi-ten.vercel.app/",
        tech: [
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "Prisma", icon: "simple-icons:prisma" },
        ],
      },
      {
        id: 2,
        title: "Digital Work Log Platform",
        description:
          "Responsive work log management system with interactive dashboards.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
        gallery: [],
        category: "Web Development",
        details:
          "Built with Django, MySQL, Tailwind, and Chart.js. Features session-based authentication, reporting, and data export.",
        github: "https://github.com/Abishek-sk46/digital-worklog",
        tech: [
          { name: "Django", icon: "logos:django-icon" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "Chart.js", icon: "simple-icons:chartdotjs" },
        ],
      },

      {
        id: 3,
        title: "Multi-Agent AI System",
        description:
          "Prototype multi-agent system with supervisor-coordinated agents for document management and intelligent movie discovery.",
        image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3", // replace with screenshot if available
        gallery: [],
        category: "AI & Backend",
        details:
          "Developed with Django, LangChain, LangGraph, and SQLite. Features CRUD operations, AI-powered querying, TMDB API integration for smart recommendations, and role-based access control with Permit.io. Autonomous orchestration of tasks handled by LangGraph workflows. Backend logic and workflows were validated in Jupyter notebooks before UI integration.",
        github: "https://github.com/Abishek-sk46/multi-agent-ai-system", // update with your actual repo
        tech: [
          { name: "Django", icon: "logos:django-icon" },
          { name: "LangChain", icon: "simple-icons:langchain" },
          { name: "LangGraph", icon: "simple-icons:python" },
          { name: "SQLite", icon: "logos:sqlite" },
          { name: "TMDB API", icon: "simple-icons:themoviedatabase" },
        ],
      },
    ],
  },
  contact: {
    heading: "Want to collaborate or hire me? Let’s connect.",
    location: {
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.017947223557!2d77.001!3d11.017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b4c9a1b7f9%3A0x1a30a20fdfbcd!2sCoimbatore%2C%20India!5e0!3m2!1sen!2sin!4v1715701234567!5m2!1sen!2sin",
      address: "Coimbatore, India",
    },
  },
  morphingTexts: {
    about: ["AI-native", "Problem Solver", "Fullstack Developer"] as const,
    projects: ["My Work", "Creations", "AI Projects", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Abishek S.K",
    description: "Aspiring Software Engineer passionate about fullstack and AI-native development.",
    contact: {
      email: "abisheksk.techie@gmail.com",
      phone: "+91-9578985175",
      location: "Coimbatore, India",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Abishek-sk", icon: "mdi:github" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/abishek-sk", icon: "mdi:linkedin" },
      { platform: "LeetCode", url: "https://leetcode.com/u/SilentCoder46/", icon: "simple-icons:leetcode" },
    ],
    services: ["Fullstack Development", "UI/UX Design", "Problem Solving", "AI Projects"],
  },
} as const;
