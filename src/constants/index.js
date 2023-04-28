import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  cvEnglish,
  cvSpanish,
  mongodb,
  git,
  figma,
  cSharp,
  aws,
  carrent,
  plsql,
  sql,
  azure,
  udemyLogo,
  cenfotec,
  scrum,
  java,
  net
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "knowledge",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Azure Devops",
    icon: azure,
  },
  {
    name: "PLSQL",
    icon: plsql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cSharp",
    icon: cSharp,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "CENFOTEC",
    company_name: "University",
    icon: cenfotec,
    iconBg: "#383E56",
    date: "January 2021 - Present",
    points: [
      "The university's focus on computing and informatics, through six specialized schools, covers all areas with current issues: information systems, information technologies, the Internet of Things, data sciences, cyber-physical systems, cybersecurity, computer engineering. software, artificial intelligence, web development, etc.",
    ],
  },
  {
    title: "React course",
    company_name: "Udemy",
    icon: udemyLogo,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "This course aims to take you from zero knowledge of React to a competitive level in today's work environment. This course is built 100% on Hooks and functional components.",
    ],
  },
  {
    title: "Scrum Fundamental Certification",
    company_name: "Shopify",
    icon: scrum,
    iconBg: "#383E56",
    date: "Setember 2022 - December 2022",
    points: [
      "'Scrum Fundamentals Certified' course is tailored to help anyone interested to know more about Scrum; learn about key concepts in Scrum as defined in the SBOK.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "English",
    name: "Dyned Certification ",
    designation: "Nivel Intermedio",
    company: "B1+",
    image: "http://web2.dyned.com/us/news/dynedbranding/images/newlogo.png",
  },
  {
    testimonial:
      "Spanish",
    name: " ",
    designation: "Native ",
    company: " ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/1200px-Flag_of_Costa_Rica.svg.png",
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
];
const curriculum = [
  {
    name: "Curriculum in Spanish",
    image: cvSpanish,
    source_code_link: "https://drive.google.com/file/d/1_NgIzqCW9A5utjnJSPfdNIiDnGz0dg45/view?usp=sharing",
  },
  {
    name: "Curriculum in English",
    image: cvEnglish,
    source_code_link: "https://drive.google.com/file/d/1YAMGvIwetJl5KhDfaxriy5_Y44ojJtLv/view?usp=sharing",
  },
  
];


export { services, technologies, experiences, testimonials, projects, curriculum };
