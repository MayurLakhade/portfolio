/* =========================================================================
   PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE ANYTHING ON YOUR SITE
   -------------------------------------------------------------------------
   Everything the website shows comes from this single object.
   Change text here, save, and refresh the page. No other file needs editing.
   ========================================================================= */

const PORTFOLIO = {

  /* ---- Basic identity / hero ---- */
  profile: {
    name: "Mayur Lakhade",
    role: "Software Engineer · Backend Developer",
    // Short punchy line shown under your name
    tagline: "I build scalable, production-ready backend systems that power live mobile & web apps.",
    photo: "assets/profile.jpg",            // replace this file to change your photo
    resume: "assets/Mayur_Lakhade_Resume.pdf", // replace this file to update your resume
    location: "Nagpur, Maharashtra, India",
    availability: "Open to new opportunities",
    // Animated words that rotate in the hero
    rotatingTitles: [
      "Node.js & Express.js",
      "Spring Boot & Java",
      "REST API Design",
      "Payment Integrations",
      "Database Optimization",
      "Real-time Systems",
    ],
  },

  /* ---- Contact + social links ---- */
  contact: {
    email: "lakhademayur@gmail.com",
    phone: "+91 81808 49272",
    phoneAlt: "+91 95189 24998",
    github: "https://github.com/MayurLakhade",
    linkedin: "https://www.linkedin.com/in/mayur-lakhade-68b952220",
  },

  /* ---- Quick stats shown in hero / about ---- */
  stats: [
    { value: "1.8+",  label: "Years Experience" },
    { value: "10+",  label: "Live Apps & Sites" },
    { value: "5+",  label: "Production Backends" },
    { value: "∞",   label: "APIs Shipped" },
  ],

  /* ---- About / professional summary ---- */
  about: {
    heading: "About Me",
    paragraphs: [
      "Software Engineer with 1+ year of hands-on experience designing, developing, and maintaining scalable systems using Node.js, Express.js, Spring Boot, and MySQL.",
      "I specialize in building production-ready REST APIs, authentication systems, payment integrations, automated cron workflows, and real-time services — the backend backbone behind live mobile and web applications.",
      "I care deeply about backend architecture, database optimization, and API performance tuning, and I've shipped the systems that keep multiple production apps running smoothly every day.",
    ],
  },

  /* ---- Skills (grouped). Add/remove categories or items freely. ---- */
  skills: [
    { group: "Backend Development", items: ["JavaScript", "Node.js", "Express.js", "Java", "Spring Boot", "Spring Framework"] },
    { group: "Frontend",            items: ["HTML", "CSS", "JavaScript", "React.js"] },
    { group: "API Development",     items: ["REST APIs", "JWT Auth & Authorization", "API Optimization"] },
    { group: "Databases",          items: ["MySQL", "Stored Procedures", "Query Optimization"] },
    { group: "Realtime & Integrations", items: ["Socket.io", "Firebase Cloud Messaging", "Razorpay", "Redis"] },
    { group: "Automation & Tools",  items: ["Cron Jobs", "Nodemailer", "Multer", "Postman"] },
    { group: "DevOps & Version Control", items: ["Git", "GitHub", "CI/CD Pipelines", "GitHub Actions"] },
    { group: "Tools",               items: ["VS Code", "IntelliJ IDEA", "Eclipse"] },
  ],

  /* ---- Work experience timeline ---- */
  experience: [
    {
      role: "Software Engineer",
      company: "Wertone IT Services",
      location: "Nagpur, Maharashtra, India",
      period: "Aug 2024 – Present",
      current: true,
      points: [
        "Designed, developed and maintained backend services for multiple live production applications across Play Store and web.",
        "Built invoice generation and integrated Multer for file uploads (Excel, JPG, PNG, JPEG, GIF).",
        "Designed and optimized search APIs for faster, more reliable data retrieval.",
        "Created Node.js cron jobs for scheduled notifications, automated daily backups, and payment refunds.",
        "Configured Nodemailer for email services and implemented JWT authentication for secure user verification.",
        "Integrated Firebase for push notifications and optimized MySQL queries & stored procedures for performance.",
        "Integrated Razorpay payment gateway — payment handling, webhook processing, and refund workflows.",
        "Implemented real-time updates with Socket.io for instant transaction and data reflection.",
        "Built Redis-based OTP verification with temporary storage, TTL expiry, and secure validation.",
        "Designed role-based authentication & authorization to enforce secure access control across modules and APIs.",
      ],
    },
  ],

  /* ---- Featured projects. Add objects to add projects. ----
     Each link: { label, url, type }  where type styles the icon:
     "playstore" | "web" | "github" | "link"                              */
  projects: [
    {
      name: "DailySabji",
      type: "Food Delivery Platform",
      role: "Backend Developer",
      description: "Order management and backend APIs serving live users, with notification workflows, payment integration, and automation jobs for operational maintenance.",
      tags: ["Node.js", "Express.js", "MySQL", "Razorpay", "Socket.io", "Cron"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wertone.dailysabji&pcampaignid=web_share", type: "playstore" },
        { label: "App Store", url: "https://apps.apple.com/in/app/daily-sabji/id6756043023", type: "appstore" },
        { label: "Website", url: "https://dailysabji.com", type: "web" },
      ],
    },
    {
      name: "F2G Finance",
      type: "Finance Platform",
      role: "Backend Developer",
      description: "Scalable REST APIs and backend logic supporting financial operations and user management. Optimized DB queries and hardened security with authentication, secure data handling, and production support.",
      tags: ["Node.js", "REST APIs", "MySQL", "JWT", "Security"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wertone.ftog&hl=en_IN", type: "playstore" },
        { label: "Website", url: "https://www.f2gfinance.com", type: "web" },
      ],
    },
    {
      name: "Gymnix",
      type: "Gym & Fitness Management",
      role: "Backend Developer",
      description: "Backend systems powering a complete gym & fitness management product across mobile and web, with member management, scheduling, and notification workflows.",
      tags: ["Node.js", "Express.js", "MySQL", "Firebase", "Redis"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wertone.gymfitness&hl=en_IN", type: "playstore" },
        { label: "App Store", url: "https://apps.apple.com/in/app/gymnix/id6759082865", type: "appstore" },
        { label: "Website", url: "https://gymnix.in/LandingPage", type: "web" },
      ],
    },
    {
      name: "QwikBill",
      type: "Billing Management System",
      role: "Backend Developer",
      description: "Backend logic for invoice generation and transaction handling, with secure authentication and database optimization for reliable billing operations.",
      tags: ["Node.js", "MySQL", "Stored Procedures", "JWT"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wertone.qwikbill&hl=en_IN", type: "playstore" },
      ],
    },
    {
      name: "ServiceDiary",
      type: "Service Management Platform",
      role: "Backend Developer",
      description: "Search APIs and backend workflows for service provider management, with a scalable backend architecture supporting mobile applications.",
      tags: ["Node.js", "Express.js", "MySQL", "Search APIs"],
      links: [
        { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.wertone.servicediaryy&pcampaignid=web_share", type: "playstore" },
        { label: "App Store", url: "https://apps.apple.com/in/app/service-diary/id6759966223", type: "appstore" },
      ],
    },
    {
      name: "NexStay Hospitality",
      type: "Hospitality Platform",
      role: "Backend Developer",
      description: "Backend services for a hospitality management web platform, covering core operations, secure access, and reliable data handling.",
      tags: ["Node.js", "Express.js", "MySQL", "REST APIs"],
      links: [
        { label: "Website", url: "https://mapqualitysolutions.com/happ", type: "web" },
      ],
    },
  ],

  /* ---- Education ---- */
  education: [
    {
      degree: "B.E. — Electrical Engineering",
      school: "K.D.K. College of Engineering (RTMNU)",
      period: "2023",
      detail: "CGPA: 6.86",
    },
  ],

  /* ---- Certifications ---- */
  certifications: [
    {
      name: "Java Full Stack with Angular",
      issuer: "Anudip Foundation",
      detail: "5-month certification course · Completed 2024",
    },
  ],

  /* ---- Achievements ---- */
  achievements: [
    "Built complete backend architectures for multiple client and in-house applications.",
    "Awarded 2nd Prize at the Spark Project Competition.",
    "Ranked 1131 in TCS CodeVita Season 10.",
  ],

  /* ---- Footer ---- */
  footer: {
    note: "Designed & built with care.",
  },
};

// Makes the content above available to the page. Leave this line in place.
window.PORTFOLIO = PORTFOLIO;
