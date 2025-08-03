export const personalData = {
  name: 'Chellaboina Yesu Raju',
  title: 'B.Tech Student in AI & ML | Full-Stack Developer',
  email: 'chellaboinayesuraju@gmail.com',
  phone: '+91 9392234389',
  location: 'Tadepalligudem, India',
  resumeUrl: '/Chellaboina_Yesu_Raju_Resume.pdf', // Assumes resume is in /public folder
  about: 'I am a dedicated B.Tech student with a specialization in AI & ML, possessing a strong foundation in both backend and frontend development. My passion lies in solving complex problems and building robust, user-friendly applications from the ground up. I am eager to apply my skills to real-world challenges and contribute to innovative projects.',
  socials: {
    github: 'https://github.com/raj-chellaboina',
    linkedin: 'https://www.linkedin.com/in/chellaboinayesuraju/', // Replace with actual LinkedIn profile
    leetcode: 'https://leetcode.com/u/RajChellaboina/',
    gfg: 'https://www.geeksforgeeks.org/user/chellaboin15yx/',
  },
};

export const navigationLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export const projects = [
  {
    title: 'Tourism Management System',
    description: 'A full-stack web application with dedicated admin and user dashboards, built with Spring Security for authentication, REST APIs for data management, and MVC design principles.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Spring Security'],
    repoUrl: 'https://github.com/raj-chellaboina/Tourism-Management-System',
    liveUrl: '',
  },
  {
    title: 'FlixTrailer (Netflix Clone)',
    description: 'A responsive Netflix clone that integrates with the TMDB API for movie data and allows users to watch trailers directly. Features include Firebase authentication and a personal watchlist.',
    stack: ['ReactJS', 'TMDB API', 'Firebase Auth', 'Responsive Design'],
    repoUrl: 'https://github.com/raj-chellaboina/flixtrailer',
    liveUrl: 'https://flixtrailer.netlify.app/',
  },
  {
    title: 'Crypto Tracker Web App',
    description: 'A web application for tracking live cryptocurrency prices using the CoinGecko API. Features include interactive candlestick charts powered by Google Charts and a responsive, component-driven architecture.',
    stack: ['ReactJS', 'CoinGecko API', 'Google Charts', 'Component-driven'],
    repoUrl: 'https://github.com/raj-chellaboina/crypto-tracker',
    liveUrl: '',
  },
];

export const skills = {
  Frontend: [
    { name: 'ReactJS', icon: 'ReactJS' },
    { name: 'JavaScript', icon: 'Code' },
    { name: 'HTML5', icon: 'Code' },
    { name: 'CSS3', icon: 'Code' },
    { name: 'Tailwind CSS', icon: 'Code' },
  ],
  Backend: [
    { name: 'Java', icon: 'Java' },
    { name: 'Spring Boot', icon: 'Spring Boot' },
    { name: 'REST APIs', icon: 'Server' },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: 'PostgreSQL' },
    { name: 'Firebase', icon: 'Firebase' },
  ],
  Tools: [
    { name: 'Git', icon: 'GitBranch' },
    { name: 'GitHub', icon: 'GitBranch' },
    { name: 'VS Code', icon: 'Code' },
    { name: 'Postman', icon: 'Server' },
  ],
  Deployment: [
    { name: 'Firebase', icon: 'Firebase' },
    { name: 'Netlify', icon: 'Cloud' },
    { name: 'AWS', icon: 'AWS' },
  ],
};

export const achievements = [
  {
    icon: 'Code',
    title: '400+ Problems Solved',
    description: 'Across LeetCode and GeeksforGeeks, honing my problem-solving and algorithmic skills.',
  },
  {
    icon: 'Award',
    title: 'Microsoft Certified: AI-900',
    description: 'Certified in Azure AI Fundamentals, demonstrating foundational knowledge of machine learning and AI concepts on Azure.',
  },
  {
    icon: 'Award',
    title: 'AWS Academy Cloud Foundations',
    description: 'Completed AWS training, gaining a solid understanding of cloud concepts and AWS core services.',
  },
  {
    icon: 'BrainCircuit',
    title: 'Gen-AI Coordinator (MLSC)',
    description: 'Coordinated Generative AI initiatives and workshops for the Microsoft Learn Student Club.',
  },
  {
    icon: 'Users',
    title: 'Tech Survey Lead',
    description: 'Led a team in a technology survey for organic farming, covering over 200 households.',
  },
];

export const education = [
  {
    degree: 'B.Tech in AI & Machine Learning',
    institution: 'Sri Vasavi Engineering College',
    duration: '2021 - 2025',
    result: 'CGPA: 8.94',
  },
  {
    degree: 'Intermediate Education',
    institution: 'Board of Intermediate Education, AP',
    duration: '2019 - 2021',
    result: 'Percentage: 86.9%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Board of Secondary Education, AP',
    duration: '2019',
    result: 'GPA: 10.0',
  },
];
