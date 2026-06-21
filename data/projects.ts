export const projects = [
  {
    title: "Kinyark Ingredients",
    period: "Year 3",
    role: "Backend Developer",

    // image: [
    //   "/projects/kinyark/home.png",
    //   "/projects/kinyark/search.png",
    //   "/projects/kinyark/recipe.png",
    // ],

    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Playwright",
    ],

    modules: [
      "Ingredient-based recipe search",
      "Recipe publishing",
      "Favorites and reviews",
      "Authentication",
      "Image upload",
      "AI recipe generation",
    ],

    description: [
      "ออกแบบฐานข้อมูล PostgreSQL จำนวน 10 ตาราง รองรับสูตรอาหาร วัตถุดิบ รีวิว และข้อมูลผู้ใช้งาน",
      "พัฒนา Backend Service ด้วย Prisma ORM และ Supabase สำหรับจัดการข้อมูลภายในระบบ",
      "พัฒนาระบบยืนยันตัวตนด้วย Supabase Auth และ JWT",
      "พัฒนาระบบค้นหาและกรองสูตรอาหารจากวัตถุดิบที่ผู้ใช้มี",
      "พัฒนาระบบอัปโหลดรูปภาพ ตรวจสอบข้อมูลด้วย Zod และจัดเก็บผ่าน Supabase Storage",
      "พัฒนา End-to-End Testing ด้วย Playwright และร่วมจัดทำ CI/CD ด้วย GitHub Actions และ Vercel",
    ],

    links: {
      github: " https://github.com/Arachaphon/kinyark-ingredients.git",
      demo: "https://kinyark-ingredients.vercel.app",
    },
  },
  {
    title: "The Nexus — Dormitory Management System",
    period: "Year 2, Sem 2",
    role: "Full-Stack Developer",
    image: [
      "/projects/thenexus/login.png",
      "/projects/thenexus/home.png",
      "/projects/thenexus/create.png",
      "/projects/thenexus/manage.png",
    ],
    techStack: ["React", "TypeScript", "Hono", "Cloudflare D1"],
    modules: [
      "Dormitory management",
      "Room and occupancy tracking",
      "Tenant and contract management",
      "Utility billing from meter readings",
      "Maintenance request tracking",
    ],
    description: [
      "Designed a normalized relational schema (10+ tables) modeling dormitory operations, tenants, contracts, and billing workflows",
      "Built RESTful APIs using Hono with JWT authentication and role-based access control",
      "Implemented a rule-driven billing engine converting meter readings into monthly invoices",
      "Developed automated due-date validation, late fee calculation, and overdue tracking",
      "Modeled tenant–contract relationships supporting multiple occupants per room",
      "Integrated Cloudflare D1 (SQLite) for serverless database persistence",
    ],
    links: {
      github_frontend: "https://github.com/Arachaphon/frontend-nexus.git",
      github_backend: "https://github.com/Arachaphon/backend-nexus.git",
      demo: "https://thenexus-chi.vercel.app",
    },
  },
  {
    title: "Gravity Plan — To-Do List Website",
    period: "Year 2, Sem 1",
    role: "Frontend Developer (Database Contributor)",
    image: [
      "/projects/gravity/todolist.png",
      "/projects/gravity/pomo.png",
      "/projects/gravity/watch.png",
      "/projects/gravity/trash.png",
    ],
    techStack: ["Vue", "Tailwind CSS", "JavaScript", "Supabase"],
    modules: [
      "Task management",
      "Pomodoro productivity timer",
      "Time tracking dashboard",
      "Task tagging and prioritization",
    ],
    description: [
      "Designed task data structure supporting tagging, prioritization, and soft deletion",
      "Implemented session-based time tracking aligned with productivity workflows",
      "Integrated Supabase for persistent storage and real-time synchronization",
      "Developed responsive UI using Vue and Tailwind CSS",
    ],
    links: {
      github: "https://github.com/kirin58/TO_DO_LIST.git",
      demo: "https://gravityplan.vercel.app",
    },
  },
  {
    title: "Magic Nails — Nail Booking Web Application",
    period: "Year 1, Sem 2",
    role: "Frontend Developer",
    image: ["/projects/magic/login.png", "/projects/magic/nail.png"],
    techStack: ["HTML", "CSS", "JavaScript"],
    modules: [
      "Service browsing",
      "Appointment booking",
      "Responsive service catalog",
    ],
    description: [
      "Developed responsive booking interface using semantic HTML, CSS, and vanilla JavaScript",
      "Implemented client-side interaction logic for service selection and appointment flow",
      "Created system documentation and Use Case Diagram during software design phase",
    ],
    links: {
      github: "https://github.com/kirin58/UNDER_THE_SEA.git",
      demo: "https://under-the-sea.onrender.com",
    },
  },
];
