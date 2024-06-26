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
    title: "Research Assistant (Intern)",
    company_name: "University Of Victoria",
    icon: uvic,
    iconBg: "#383E56",
    date: "May 2019 - Aug 2019",
    points: [
      "Assisted research on trend/graph correlations and predictions performed via data analysis (R, Python)",
      "Applied prediction model to programming language popularity, stock markets, cryptocurrencies, etc",
      "Co-Produced a paper on Time Series Graph Correlations",
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
      "Applied Machine Learning to reduce computation of 360° Video via user movement prediction (Python TensorFlow)",
      "Demonstrated leadership to efficiently direct workflow",
    ],
  },
  {
    title: "Tech Support & Volunteer Teaching Assistant",
    company_name: "Pitt Meadows Secondary",
    icon: sd42,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Developed District approved classroom sign-in applications accessible by teachers",
      "Instructed entry-level programming and database management to students (Python, SQL)",
      "Showcased game-development techniques to students (Unreal Engine 5)",
    ],
  },
  {
    title: "Application + Website Developer",
    company_name: "",
    icon: selfemployed,
    iconBg: "#383E56",
    date: "August 2020 - Present",
    points: [
      "Serviced clients for website development, app creation, server database management, and API integration",
      "Designed diverse mobile utility applications with Android Studio and Unity (Java, C#)",
      "Refactored/reorganized and set up large scale server databases (SQL, Postgresql)",
      "Written and conducted comprehensive tests utilizing test suites for a multitude of applications (jUnit, pytest)",
      "Managed client requests with confidentiality and professionalism",
    ],
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

export { services, experiences, projects };
