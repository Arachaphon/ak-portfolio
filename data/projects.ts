export const projects = [
  {
    title: "The Nexus — Dormitory Management System",
    period: "Year 2, Sem 2",
    role: "Full-Stack Developer",
    image: ["/projects/thenexus/login.png","/projects/thenexus/home.png","/projects/thenexus/create.png","/projects/thenexus/manage.png"],
    techStack: ["React", "TypeScript", "Hono", "Cloudflare D1"],
    description: [
      "Designed a normalized relational schema (10 tables) modeling dormitory operations",
      "Developed REST APIs with JWT authentication and role-based access control",
      "Built a rule-driven billing workflow from meter readings to monthly invoices",
      "Implemented due-date validation, late fee calculation, and overdue tracking",
    ],
    links: { github_frontend: "https://github.com/Arachaphon/frontend-nexus.git" ,github_backend: "https://github.com/Arachaphon/backend-nexus.git", demo: "https://thenexus-chi.vercel.app" },
  },
  {
    title: "Gravity Plan — To-Do List Website",
    period: "Year 2, Sem 1",
    role: "Frontend Developer (Database Contributor)",
    techStack: ["Vue", "Tailwind CSS", "JavaScript", "Supabase"],
    description: [
      "Designed task data structure supporting tagging, prioritization, and soft deletion",
      "Implemented session-based time tracking aligned with productivity workflow",
      "Integrated Supabase for persistent storage and real-time synchronization",
    ],
    links: { github: "https://github.com/kirin58/TO_DO_LIST.git", demo: "https://gravityplan.vercel.app" },
  },
  {
    title: "Magic Nails — Nail Booking Web Application",
    period: "Year 1, Sem 2",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
    description: [
      "Developed frontend booking interface with responsive layouts",
      "Created Use Case Diagram and system documentation",
    ],
    links: { github: "https://github.com/kirin58/UNDER_THE_SEA.git", demo: "https://under-the-sea.onrender.com" },
  },
];