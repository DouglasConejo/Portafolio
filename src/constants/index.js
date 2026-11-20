import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  javascript,
  reactjs,
  typescript,
  mongodb,
  git,
  PETWARE,
  cSharp,
  aws,
  carrent,
  jobit,
  tripguide,
  sql,
  azure,
  cenfotec,
  scrum,
  java,
  net,
  Angular,
  Gpg,
  nodoHacker,
  tta,
  pfizer,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "summary",
    title: "Summary",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "experienceWork",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    icon: web,
  },
  {
    title: "Software Quality & Validation",
    icon: mobile,
  },
  {
    title: "Test Automation",
    icon: backend,
  },
  {
    title: "API & Backend Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "C#",
    icon: cSharp,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Bachelor's Degree in Software Engineering",
    company_name: "CENFOTEC University",
    icon: cenfotec,
    iconBg: "#383E56",
    date: "2021 - 2025",
    points: [
      "Completed a Bachelor's Degree in Software Engineering.",
    ],
  },
  {
    title: "Cybersecurity Studies",
    company_name: "El Nodo Hacker",
    icon: nodoHacker,
    iconBg: "#E6DEDD",
    date: "September 2026 - April 2027 · 7-month program, in progress",
    points: [
      "Expanding knowledge in cybersecurity, risk assessment, and security fundamentals.",
    ],
  },
  {
    title: "Advanced Automation Certificate",
    company_name: "AuraQuantic",
    icon: scrum,
    iconBg: "#E6DEDD",
    date: "Certification",
    points: [
      "Advanced automation certification.",
    ],
  },
  {
    title: "Scrum Fundamentals Certified",
    company_name: "Scrum",
    icon: scrum,
    iconBg: "#383E56",
    date: "Certification",
    points: [
      "Certification in Scrum fundamentals and the Scrum framework.",
    ],
  },
];

const experiencesWork = [
  {
    title: "Developer / QA",
    company_name: "TTA Tech Talent Alliance",
    icon: tta,
    iconBg: "#383E56",
    date: "May 2024 - April 2026",
    points: [
      "Developed and maintained applications and backend services, including REST APIs.",
      "Improved reliability, maintainability, and performance by analyzing system behavior.",
      "Supported CI/CD, deployments, and releases; contributed to automated validation with Playwright and Cypress.",
      "Performed end-to-end testing, API validation, and data consistency checks with QA and development teams.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "Global Professional Group",
    icon: Gpg,
    iconBg: "#383E56",
    date: "January 2024 - May 2024",
    points: [
      "Developed backend services using Java and Spring Boot.",
      "Automated existing processes, reducing manual workload by approximately 30%.",
      "Investigated technical issues and supported system maintenance and operational improvements.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "Pfizer",
    icon: pfizer,
    iconBg: "#383E56",
    date: "January 2022 - October 2022",
    points: [
      "Designed REST APIs with Spring Boot and C#/.NET and built full-stack applications with Angular and relational databases.",
      "Modernized legacy desktop applications using WPF.",
      "Integrated cloud-based solutions using Azure and AWS.",
    ],
  },
];

const languages = [
  {
    name: "Spanish",
    level: "Native",
  },
  {
    name: "English",
    level: "Intermediate (B2)",
  },
];

const projects = [
  {
    name: "Tracker App",
    description:
      "Application to keep track of the expenses and income of a person. To do this, the user can register to create an account in the app. Consequently, he will be able to login to it. Within the page, the user will observe the list of all the expenses and income that he has registered, of which he will be able to see the date, the title and the amount. In addition, from the above you will have several graphs in view that show you the saved information. The person will have the possibility to filter by income or expenses, year and month. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://master.d2btlx6fey7xvz.amplifyapp.com",
  },
  {
    name: "PETWARE",
    description:
      "Collaborative pet-management platform built with Angular and Spring Boot. Includes REST APIs, AWS Cognito authentication, and PayPal payment integration. The project was not completed.",
    tags: [
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "MySqL",
        color: "blue-text-gradient",
      },
      {
        name: "JAVA",
        color: "red-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "JMeter",
        color: "yellow-text-gradient",
      },
    ],
    image: PETWARE,
    source_code_link: "http://petware-application.s3-website-us-east-1.amazonaws.com/",
  },
  {
    name: "Legal Case Management System",
    description:
      "At Prieto & Asociados, supported application workflow validation, API response and frontend/backend data checks, and automated user-flow testing with Playwright and TypeScript.",
    tags: [
      {
        name: "Playwright",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "API Testing",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Enterprise System Simulation Support",
    description:
      "At Astrix Technology Group, validated UI behavior, API integrations, and data workflows; analyzed system architecture and integration points and automated scenarios with Playwright and Cypress.",
    tags: [
      {
        name: "Playwright",
        color: "green-text-gradient",
      },
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "Quality Engineering",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
  },
];
const profiles = [
  {
    name: "GitHub",
    description: "Source code and software projects",
    url: "https://github.com/DouglasConejo",
  },
  {
    name: "LinkedIn",
    description: "Professional profile",
    url: "https://www.linkedin.com/in/douglas-conejo-6234a4238",
  },
];


export { services, technologies, experiences, languages, projects, profiles, experiencesWork };
