/* =========================================================
   PORTFOLIO DATA
   Edit the text below to update the website.
   ========================================================= */
window.PORTFOLIO_DATA = {

  /* -------------------------------------------------------
     1. NAVIGATION
     ------------------------------------------------------- */
  nav: {
    logo: "CJBR",
    links: [
      { label: "Education",    href: "#education" },
      { label: "Certifications", href: "#certifications" },
      { label: "Work",         href: "#work" },
      { label: "Skills",       href: "#skills" },
      { label: "Contact",      href: "#contact" }
    ]
  },

  /* -------------------------------------------------------
     2. PERSONAL INFO & HERO
     ------------------------------------------------------- */
  personal: {
    masthead: "Portfolio",
    eyebrow: "Portfolio · 2026",
    greeting: "Hello, I'm",
    firstName: "Carl Joseph",
    lastName: "B. Roman",
    headline: "3rd Year BSIT Student & Technical Researcher / Community Administrator",
    intro: "I build clear technical documentation, organized networks, and well-run online communities. My focus is on research, systems, and helping people work together.",
    photo: "profile.png",
    badge: {
      title: "BulSU · CICT",
      text: "BSIT Student, Main Campus"
    },
    footerName: "Carl Joseph B. Roman",
    footerSchool: "Bulacan State University · CICT"
  },

  /* -------------------------------------------------------
     Contact Links (Click-to-Copy)
     ------------------------------------------------------- */
  contactLinks: [
    { label: "Gmail", icon: "gmail", copyText: "crljsphromn@gmail.com", text: "crljsphromn@gmail.com (Copy)" },
    { label: "Outlook", icon: "outlook", copyText: "crljsphromn@outlook.com", text: "crljsphromn@outlook.com (Copy)" },
    { label: "GitHub", icon: "github", href: "https://github.com/tmptingg", text: "GitHub Profile" }
  ],

  /* -------------------------------------------------------
     3. QUICK FACTS STRIP
     ------------------------------------------------------- */
  facts: [
    { label: "Degree",       value: "BS Information Technology" },
    { label: "Year Level",   value: "3rd Year Student" },
    { label: "Cisco Badges", value: "6 Earned Badges" },
    { label: "TESDA",        value: "5 Certifications" }
  ],

  /* -------------------------------------------------------
     4. EDUCATION
     ------------------------------------------------------- */
  education: {
    eyebrow: "Education",
    title: "Academic\nBackground",
    lead: "A foundation built in senior high school and refined through a degree in information technology.",
    items: [
      {
        index: "01 — College",
        level: "Current Institution",
        title: "Bachelor of Science in Information Technology",
        description: "Bulacan State University, Main Campus · College of Information and Communications Technology (CICT)",
        meta: [
          { label: "Program", value: "BSIT" },
          { label: "Status",  value: "3rd Year" }
        ]
      },
      {
        index: "02 — Senior High",
        level: "Secondary Education & Work Immersion",
        title: "Colegio De Calumpit Inc.",
description: "Completed Senior High School alongside practical industry work immersion experience.",
        meta: [
          { label: "Immersion Site", value: "Luna PC" },
          { label: "Role / Tasks",   value: "Handled computer maintenance, assisted in setting up a new branch, and managed sales for refurbished PCs and components like LAN cables and storage." }
        ]
      }
    ]
  },

  /* -------------------------------------------------------
     5. CERTIFICATIONS & BADGES (Dates removed as requested)
     ------------------------------------------------------- */
  certifications: {
    eyebrow: "Credentials",
    title: "Badges &\nCertificates",
    lead: "Industry-recognized credentials validating practical competence in networking, security, and systems administration.",
    ciscoBadges: [
      { name: "Introduction to Cybersecurity", issuer: "Cisco NetAcad" },
      { name: "Network Addressing and Basic Troubleshooting", issuer: "Cisco NetAcad" },
      { name: "Networking Devices and Initial Configuration", issuer: "Cisco NetAcad" },
      { name: "Networking Basics", issuer: "Cisco NetAcad" },
      { name: "Linux Essentials", issuer: "Cisco NetAcad" },
      { name: "Linux Unhatched", issuer: "Cisco NetAcad" }
    ],
    tesdaCerts: [
      { name: "Setting Up Computer Servers", issuer: "TESDA" },
      { name: "Maintaining Computer Systems and Networks", issuer: "TESDA" },
      { name: "Setting Up Computer Networks", issuer: "TESDA" },
      { name: "Installing and Configuring Computer Systems", issuer: "TESDA" },
      { name: "Introduction to Computer Systems Servicing", issuer: "TESDA" }
    ]
  },

  /* -------------------------------------------------------
     6. SELECTED WORK (BSIT Student Projects & Academic Work)
     ------------------------------------------------------- */
  work: {
    eyebrow: "Selected Work",
    title: "Projects &\nDocuments",
    lead: "Practical software development, system analysis, and network configurations from coursework.",
    items: [
      { 
        title: "Driver Queue Mangement System (DQMS)", 
        type: "Prototype (HTML, CSS, Javascript)", 
        color: "#1a1a1a", 
        textColor: "#F4F0EA",
        desc: "Terminal queue management system prototype for jeepney cooperatives."

      },
      { 
        title: "Network Topology Lab", 
        type: "Cisco Packet Tracer", 
        color: "#B9522E", 
        textColor: "#F4F0EA",
        desc: "Configured static routing, VLANs, and DHCPv4 pools across multi-router enterprise topologies."
      },
      { 
        title: "Bank Management Java Program", 
        type: "Java OOP Console Program", 
        color: "#55524c", 
        textColor: "#F4F0EA",
        desc: "Object-oriented terminal application managing secure deposits, withdrawals, and account ledgers."
      },
      { 
        title: "Research Documentation", 
        type: "Technical Writing", 
        color: "#D9CDBB", 
        textColor: "#1a1a1a",
        desc: "Structured systems analysis reports and technical documentation formatted professionally in Microsoft Word."
      }
    ]
  },

  /* -------------------------------------------------------
     7. CORE COMPETENCIES
     ------------------------------------------------------- */
  skills: {
    eyebrow: "Core Competencies",
    title: "Skills &\nExpertise",
    lead: "Four areas where technical rigor meets hands-on practice, from documentation and research to network design and community leadership.",
    items: [
      {
        title: "Technical Documentation & Research",
        description: "Advanced Microsoft Word proficiency with a strong background in academic and technical research writing.",
        tags: ["Microsoft Word", "Academic Research", "Technical Writing"],
        icon: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>'
      },
      {
        title: "Network Administration",
        description: "Industry-aligned networking fundamentals validated through Cisco Networking Academy certified badges.",
        tags: ["Cisco NetAcad", "Networking", "Routing"],
        icon: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5 6M12 11l5 6"/>'
      },
      {
        title: "Professional Certifications",
        description: "Five technical certifications from TESDA covering computer systems servicing, configuration, and servers.",
        tags: ["TESDA", "Computer Systems", "Servers"],
        icon: '<circle cx="12" cy="9" r="5"/><path d="M9 13.5 7 21l5-2.5L17 21l-2-7.5"/>'
      },
      {
        title: "Community & Server Management",
        description: "Discord server setup, role permission layouts, and active community moderation to keep communities organized.",
        tags: ["Discord", "Role Permissions", "Moderation"],
        icon: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>'
      }
    ]
  },

  /* -------------------------------------------------------
     8. CONTACT / FOOTER
     ------------------------------------------------------- */
  contact: {
    eyebrow: "Let's connect",
    title: "Say hello",
    lead: "Open for internships, research collaborations, and academic projects. Send a message and I'll get back to you."
  }
};
