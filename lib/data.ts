import React from "react";
import { 
  SiNodedotjs, SiPhp, SiPython, SiDotnet, 
  SiMysql, SiMicrosoftsqlserver, 
  SiWindows, SiLinux, SiPostman, 
  SiJavascript, SiJquery, SiCss3, SiBootstrap 
} from "react-icons/si";
import { FaNetworkWired, FaTools } from "react-icons/fa";
import { MdOutlineApi, MdHardware } from "react-icons/md";

export const PROFILE = {
  name: "Mhenard",
  fullName: "Mhenard Djoe U. Galapate",
  subtitles: ["Full-Stack Developer", "IT Support Specialist", "API Engineer"],
  bio: "I'm an IT professional based in Pangasinan, Philippines with experience spanning full-stack PHP/Node.js development, REST API engineering, and hands-on technical support. I build systems that are reliable, documented, and maintainable.",
  quickFacts: [
    { label: "Education", value: "BS Information Technology — PSU Bayambang (GPA 1.71)", icon: "🎓" },
    { label: "Location", value: "Pangasinan, Philippines", icon: "📍" },
    { label: "Email", value: "mdgalapate@gmail.com", icon: "📧" },
    { label: "Phone", value: "(+63) 9368214529", icon: "📞" }
  ],
  socials: {
    linkedin: "https://linkedin.com/in/drnhmg",
    email: "mailto:mdgalapate@gmail.com",
    phone: "tel:+639368214529"
  }
};

export const SKILL_CATEGORIES = [
  {
    title: "Core Stack",
    skills: [
      { name: "Node.js", icon: React.createElement(SiNodedotjs) },
      { name: "PHP", icon: React.createElement(SiPhp) },
      { name: "Python", icon: React.createElement(SiPython) },
      { name: ".NET Framework", icon: React.createElement(SiDotnet) }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: React.createElement(SiMysql) },
      { name: "MS SQL Server", icon: React.createElement(SiMicrosoftsqlserver) }
    ]
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Windows", icon: React.createElement(SiWindows) },
      { name: "Linux", icon: React.createElement(SiLinux) },
      { name: "Hardware", icon: React.createElement(MdHardware) },
      { name: "Network Troubleshooting", icon: React.createElement(FaNetworkWired) }
    ]
  },
  {
    title: "Tools & APIs",
    skills: [
      { name: "RESTful API", icon: React.createElement(MdOutlineApi) },
      { name: "Appian", icon: React.createElement(FaTools) }, // Appian icon not in standard set, using fallback
      { name: "Postman", icon: React.createElement(SiPostman) },
      { name: "JavaScript", icon: React.createElement(SiJavascript) },
      { name: "jQuery", icon: React.createElement(SiJquery) },
      { name: "CSS3", icon: React.createElement(SiCss3) },
      { name: "Bootstrap", icon: React.createElement(SiBootstrap) }
    ]
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    title: "Technical Support",
    company: "Vertex Technologies Corporation",
    location: "Dagupan, Pangasinan",
    date: "Dec 2025 – Present",
    description: "Diagnosed hardware/software/network issues; system installation, configuration, maintenance; reduced downtime through preventive maintenance."
  },
  {
    id: 2,
    title: "Custodian",
    company: "Bingo Plus SM City Rosales",
    location: "Rosales, Pangasinan",
    date: "Jun 2024 – Jan 2025",
    description: "Daily/monthly sales and inventory reporting; coordinating operations for gaming sessions."
  },
  {
    id: 3,
    title: "PHP Developer (Freelance)",
    company: "Remote",
    location: "Remote",
    date: "Apr 2021 – Mar 2024",
    description: "PHP web apps, MySQL integration, backend logic, third-party API integrations, efficient DB design."
  },
  {
    id: 4,
    title: "IT Support Technician",
    company: "Self-Employed",
    location: "Pangasinan",
    date: "Nov 2020 – Mar 2021",
    description: "Hardware/software repairs, OS installation, system config and maintenance."
  },
  {
    id: 5,
    title: "Jr. Technical Consultant",
    company: "Via Appia Philippines Inc.",
    location: "Taguig City",
    date: "Aug 2019 – Dec 2019",
    description: "Scalable RESTful API architecture with MySQL; API documentation; error-handling for complex data workflows."
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Data Privacy Awareness",
    issuer: "DICT Region 3, Aurora Province",
    date: "Aug 2025",
    icon: "🔐"
  },
  {
    id: 2,
    name: "Data Analytics Fundamentals Bootcamp",
    issuer: "One Code Camp Academy",
    date: "Feb 2025",
    icon: "📊"
  },
  {
    id: 3,
    name: "Learn Python Programming with ChatGPT",
    issuer: "Udemy",
    date: "Jan 2025",
    icon: "🐍"
  },
  {
    id: 4,
    name: "Civil Service Professional Eligibility",
    issuer: "Civil Service Commission",
    date: "Feb 2024",
    icon: "🏛️"
  },
  {
    id: 5,
    name: "Frontend Fundamentals Bootcamp",
    issuer: "One Code Camp Academy",
    date: "May 2024",
    icon: "💻"
  },
  {
    id: 6,
    name: "Academic Distinction",
    issuer: "PSU Bayambang",
    date: "Jun 2019",
    icon: "🏅"
  }
];
