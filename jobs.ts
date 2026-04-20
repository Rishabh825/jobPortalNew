export interface Job {
  id: string;
  title: string;
  company: string;
  companyDescription?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  salary: string;
  description: string;
  requirements: string[];
  requiredQualification: string;
  posted: string;
  status: "active" | "closed" | "draft";
  category: string;
  applicants: number;
  created_by?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  qualification: string;
  phone: string;
  city: string;
  registeredAt: string;
  loginTime?: string;
  logoutTime?: string;
  lastActive?: string;
}

export interface Application {
  id: string;
  userId: string;
  jobId: string;
  cgpa?: string;
  resume?: string;
  otherQualifications?: string;
  appliedDate: string;
  status: "pending" | "accepted" | "rejected";
}

export const qualificationOptions = [
  "B.Tech in Computer Science",
  "B.Tech in Mechanical Engineering",
  "B.Tech in Electrical Engineering",
  "B.Tech in Civil Engineering",
  "BCA",
  "MCA",
  "MBA",
  "B.Com",
  "M.Com",
  "BBA",
  "B.Sc in Data Science",
  "M.Tech",
  "PhD",
  "12th Pass",
  "Diploma in Engineering",
  "Other",
];

export const sampleJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechVault Inc.",
    companyDescription: "TechVault Inc. is a leading technology firm specializing in modern web solutions and cloud infrastructure. We build products that empower millions of users worldwide.",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹ 12,00,000 - ₹ 18,00,000 per annum",
    description: "We're looking for a senior frontend developer to lead our UI team and build cutting-edge web applications.",
    requirements: ["5+ years React", "TypeScript", "System Design", "Team Leadership"],
    requiredQualification: "B.Tech in Computer Science",
    posted: "2 days ago",
    status: "active",
    category: "Engineering",
    applicants: 47,
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignFlow",
    companyDescription: "DesignFlow is a creative design studio focused on crafting beautiful user experiences for startups and enterprises. We combine research with pixel-perfect execution.",
    location: "Mumbai",
    type: "Remote",
    salary: "₹ 8,00,000 - ₹ 12,00,000 per annum",
    description: "Join our design team to create beautiful, intuitive interfaces for millions of users worldwide.",
    requirements: ["Figma", "User Research", "Prototyping", "Design Systems"],
    requiredQualification: "BCA",
    posted: "5 days ago",
    status: "active",
    category: "Design",
    applicants: 32,
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "CloudScale",
    companyDescription: "CloudScale provides enterprise-grade cloud infrastructure and backend services. We handle millions of API requests daily for Fortune 500 clients.",
    location: "Delhi",
    type: "Full-time",
    salary: "₹ 14,00,000 - ₹ 22,00,000 per annum",
    description: "Build scalable microservices architecture handling millions of requests per day.",
    requirements: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    requiredQualification: "B.Tech in Computer Science",
    posted: "1 day ago",
    status: "active",
    category: "Engineering",
    applicants: 28,
  },
  {
    id: "4",
    title: "Marketing Manager",
    company: "GrowthLab",
    companyDescription: "GrowthLab is a digital marketing agency helping brands scale through data-driven strategies, SEO, and performance marketing.",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹ 7,00,000 - ₹ 10,00,000 per annum",
    description: "Drive growth through innovative marketing strategies and data-driven campaigns.",
    requirements: ["SEO/SEM", "Content Strategy", "Analytics", "Team Management"],
    requiredQualification: "MBA",
    posted: "3 days ago",
    status: "active",
    category: "Marketing",
    applicants: 19,
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "AnalyticsPro",
    companyDescription: "AnalyticsPro is an AI-first data analytics company building machine learning solutions for healthcare, finance, and retail sectors.",
    location: "Pune",
    type: "Remote",
    salary: "₹ 10,00,000 - ₹ 16,00,000 per annum",
    description: "Apply machine learning and statistical analysis to solve complex business problems.",
    requirements: ["Python", "Machine Learning", "SQL", "Statistics"],
    requiredQualification: "B.Sc in Data Science",
    posted: "1 week ago",
    status: "active",
    category: "Data",
    applicants: 55,
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "TechVault Inc.",
    companyDescription: "TechVault Inc. is a leading technology firm specializing in modern web solutions and cloud infrastructure. We build products that empower millions of users worldwide.",
    location: "Bangalore",
    type: "Contract",
    salary: "₹ 5,000/hr",
    description: "Manage cloud infrastructure and CI/CD pipelines for enterprise clients.",
    requirements: ["Kubernetes", "Terraform", "CI/CD", "Linux"],
    requiredQualification: "B.Tech in Computer Science",
    posted: "4 days ago",
    status: "active",
    category: "Engineering",
    applicants: 14,
  },
  {
    id: "7",
    title: "Accountant",
    company: "FinCore Solutions",
    companyDescription: "FinCore Solutions is a financial services company offering accounting, tax advisory, and auditing solutions to SMEs across India.",
    location: "Chennai",
    type: "Full-time",
    salary: "₹ 4,50,000 - ₹ 6,50,000 per annum",
    description: "Handle daily accounting operations, tax filings, and financial reporting for clients.",
    requirements: ["Tally", "GST", "Excel", "Financial Reporting"],
    requiredQualification: "B.Com",
    posted: "2 days ago",
    status: "active",
    category: "Finance",
    applicants: 22,
  },
  {
    id: "8",
    title: "Junior Web Developer",
    company: "DesignFlow",
    companyDescription: "DesignFlow is a creative design studio focused on crafting beautiful user experiences for startups and enterprises.",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹ 3,50,000 - ₹ 5,00,000 per annum",
    description: "Assist in building responsive websites and web applications using modern frameworks.",
    requirements: ["HTML/CSS", "JavaScript", "React basics"],
    requiredQualification: "BCA",
    posted: "1 day ago",
    status: "active",
    category: "Engineering",
    applicants: 38,
  },
];
