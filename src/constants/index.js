import { div } from "three/examples/jsm/nodes/Nodes.js";
import {
  database,
  machinelearning,
  virtualreality,
  reactjs,
  uvic,
  sd42,
  selfemployed,
  starangels,
  prototype,
  vrviewpointprediction,
  recipefinder,
  aws,
  bootstrap,
  C,
  css,
  docker,
  html,
  java,
  javascript,
  laravel,
  mongodb,
  mysql,
  nodejs,
  php,
  postgresql,
  python,
  pytorch,
  R,
  react,
  selenium,
  spring,
  tailwind,
  tensorflow
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "App Development",
    icon: reactjs,
  },
  {
    title: "Database Management",
    icon: database,
  },
  {
    title: "Machine Learning",
    icon: machinelearning,
  },
  {
    title: "VR Research",
    icon: virtualreality,
  },
];

const experiences = [
  /*
  {
    title: "Computer Science & Physics",
    company_name: "University of Victoria",
    icon: uvic,
    iconBg: "#383E56",
    date: "2014 - Graduated 2020",
    points: [
      "Implemented various Java library algorithms, data structures, and Design Patterns",
      "Employed C programming for low level embedded systems",
      "Constructed a new statically typed language compiler and interpreter (C, Java)",
      "Built servers, studied network packet design, REST APIs, IoT, IaaS PaaS SaaS (Python Sockets, PHP, Postman, AWS, Docker)",
      "Studied operating system design (UNIX), artificial intelligence, cryptography, data mining, and security engineering",
      "Studied radioactivity, electricity, magnetism, thermodynamics, and various quantum phenomena",
    ],
  },
  */
  {
    title: "Web Engineer",
    company_name: "",
    icon: selfemployed,
    iconBg: "#383E56",
    date: "Jul 2020 - Present",
    points: [
      "Servicing clients for web development, app creation, server database management, and API integration",
      "Designing front end interfaces",
      "Deploying back end applications with API integration",
      "Organizing and optimizing large scale server databases",
      "Comprehensive unit testing, integration testing, and end-to-end testing",
    ],
  },
  {
    title: "Tech Support Teaching Assistant",
    company_name: "Pitt Meadows Secondary",
    icon: sd42,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Developed District approved classroom sign-in application and database accessible by teachers",
      "Provided technical support and software troubleshooting for teachers and students",
      "Instructed entry-level programming and database management to students",
    ],
  },
  {
    title: "Research Project Lead",
    company_name: "University Of Victoria",
    icon: uvic,
    iconBg: "#383E56",
    date: "Sep 2019 - Aug 2020",
    points: [
      "Researched Virtual Reality software optimizations",
      "Performed data analysis on a large dataset of user head movements to identify common user habits ",
      "Reduced 360° video render computation by 56% via a machine learning model ",
      "Demonstrated leadership to efficiently direct workflow",
    ],
  },
  {
    title: "Research Assistant (Intern)",
    company_name: "University Of Victoria",
    icon: uvic,
    iconBg: "#383E56",
    date: "May 2019 - Aug 2019",
    points: [
      "Assisted research on trend/graph correlations and predictions performed via data analysis ",
      "Found correlation evidence of over 90% within large datasets: programming languages, stock markets, cryptocurrencies, etc",
      "Co-Produced a paper on Time Series Graph Correlations",
    ],
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
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "PYTHON",
    icon: python,
  },
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "REACT",
    icon: react,
  },
  {
    name: "TAILWIND",
    icon: tailwind,
  },
  {
    name: "BOOTSTRAP",
    icon: bootstrap,
  },
  {
    name: "NODE",
    icon: nodejs,
  },
  {
    name: "SPRING",
    icon: spring,
  },
  {
    name: "DOCKER",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MYSQL",
    icon: mysql,
  },
  {
    name: "POSTGRESQL",
    icon: postgresql,
  },
  {
    name: "MONGODB",
    icon: mongodb,
  },
  {
    name: "LARAVEL",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "TENSORFLOW",
    icon: tensorflow,
  },
  {
    name: "PYTORCH",
    icon: pytorch,
  },

  
  
];

const projects = [
  {
    name: "3D Website",
    description:
      "Website example utilizing Three.js to animate a revolving star background. More lightweight version of this portfolio's background.",
    tags: [
    ],
    image: starangels,
    source_code_link: "https://github.com/nkarmac/Star-Angels",
    web_link: "https://nkarmac.github.io/Star-Angels/",
  },
  {
    name: "Recipe Finder",
    description:
      "React/Node Full Stack app for searching recipes based on listed ingredients. Deployed with backend api database.",
    tags: [
    ],
    image: recipefinder,
    source_code_link: "https://github.com/nkarmac/Recipe-Finder",
    web_link: "https://nkarmac.github.io/Recipe-Finder/",
  },
  {
    name: "Hiring App",
    description:
      "In-progress Android application for restaurants hiring local contract waiters & waitresses. Linked is a high-fidelity prototype.",
    tags: [
    ],
    image: prototype,
    source_code_link: "https://github.com/nkarmac/Prototype",
    web_link: "https://nkarmac.github.io/Prototype/",
  },
  {
    name: "Virtual Reality Research",
    description:
      "VR research project website detailing many varying approaches to reduce computation of 360\u00B0 video.",
    tags: [
      // {
      //   name: "python",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "tensorflow",
      //   color: "green-text-gradient",
      // },
    ],
    image: vrviewpointprediction,
    source_code_link: "https://github.com/nkarmac/VRViewpointPrediction",
    web_link: "https://nkarmac.github.io/VRViewpointPrediction/",
  },
];

export { services, experiences, technologies, projects };
