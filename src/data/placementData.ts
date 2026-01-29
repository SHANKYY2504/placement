export interface SeniorExperience {
  id: string;
  name: string;
  batch: string;
  branch: string;
  experience: string;
}

export interface OADetails {
  rounds: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  sampleQuestions: string[];
}

export interface InterviewRound {
  type: 'Technical' | 'HR' | 'Managerial';
  topics: string[];
  commonQuestions: string[];
}

export interface QuestionBankItem {
  category: 'DSA' | 'Core' | 'Aptitude';
  question: string;
}

export interface Suggestion {
  title: string;
  description: string;
}

export interface Company {
  id: string;
  name: string;
  domain: string;
  role: string;
  package?: string;
  yearOfVisit: number;
  logo?: string;
  seniorExperiences: SeniorExperience[];
  oaDetails: OADetails;
  interviewRounds: InterviewRound[];
  questionBank: QuestionBankItem[];
  suggestions: Suggestion[];
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
  companyCount: number;
}

export const domains: Domain[] = [
  {
    id: 'fintech',
    name: 'FinTech',
    description: 'Financial technology companies including trading firms, payment systems, and banking solutions.',
    icon: 'TrendingUp',
    companyCount: 12,
  },
  {
    id: 'sde',
    name: 'Software Development (SDE)',
    description: 'Software engineering roles in product companies, service companies, and startups.',
    icon: 'Code',
    companyCount: 28,
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    description: 'Construction, infrastructure, and real estate companies.',
    icon: 'Building',
    companyCount: 8,
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'Manufacturing, automotive, and heavy machinery industries.',
    icon: 'Cog',
    companyCount: 15,
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    description: 'Power systems, renewable energy, and electrical equipment manufacturers.',
    icon: 'Zap',
    companyCount: 11,
  },
  {
    id: 'ece',
    name: 'Electronics & Communication (ECE)',
    description: 'Semiconductor, VLSI, embedded systems, and communication companies.',
    icon: 'Cpu',
    companyCount: 14,
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    description: 'Business intelligence, data science, and analytics consulting firms.',
    icon: 'BarChart3',
    companyCount: 9,
  },
];

export const companies: Company[] = [
  {
    id: 'goldman-sachs',
    name: 'Goldman Sachs',
    domain: 'fintech',
    role: 'Analyst - Engineering',
    package: '₹32 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '1',
        name: 'Rahul Sharma',
        batch: '2024',
        branch: 'Computer Science',
        experience: 'The Goldman Sachs placement process was rigorous but well-structured. I prepared extensively for 3 months, focusing on DSA, system design basics, and financial concepts. The key was consistent practice and understanding the company culture.',
      },
    ],
    oaDetails: {
      rounds: 2,
      difficulty: 'Hard',
      topics: ['Data Structures', 'Algorithms', 'Mathematics', 'SQL'],
      sampleQuestions: [
        'Design an LRU Cache with O(1) operations',
        'Find the median of two sorted arrays',
        'Optimize a trading algorithm for minimum latency',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['DSA', 'System Design', 'Database Design', 'Problem Solving'],
        commonQuestions: [
          'Explain how you would design a trading system',
          'What is eventual consistency?',
          'How would you handle race conditions in a multi-threaded environment?',
        ],
      },
      {
        type: 'Technical',
        topics: ['CS Fundamentals', 'OOPS', 'Projects Discussion'],
        commonQuestions: [
          'Explain your most challenging project',
          'What are SOLID principles?',
          'Difference between process and thread',
        ],
      },
      {
        type: 'HR',
        topics: ['Behavioral', 'Situational', 'Company Fit'],
        commonQuestions: [
          'Why Goldman Sachs?',
          'Tell me about a time you faced failure',
          'Where do you see yourself in 5 years?',
        ],
      },
    ],
    questionBank: [
      { category: 'DSA', question: 'Implement a min-heap from scratch' },
      { category: 'DSA', question: 'Find all cycles in a directed graph' },
      { category: 'Core', question: 'Explain CAP theorem with examples' },
      { category: 'Aptitude', question: 'Probability problems involving cards and dice' },
    ],
    suggestions: [
      {
        title: 'Master DSA Fundamentals',
        description: 'Focus on graphs, dynamic programming, and trees. Practice at least 300 LeetCode problems.',
      },
      {
        title: 'Understand Financial Concepts',
        description: 'Learn basics of trading, stocks, bonds, and financial markets. Read about market microstructure.',
      },
      {
        title: 'System Design Basics',
        description: 'Study distributed systems, caching, load balancing, and database sharding.',
      },
    ],
  },
  {
    id: 'google',
    name: 'Google',
    domain: 'sde',
    role: 'Software Engineer L3',
    package: '₹45 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '2',
        name: 'Priya Patel',
        batch: '2024',
        branch: 'Computer Science',
        experience: 'Google interviews focus heavily on problem-solving ability and code quality. I spent 4 months preparing, with emphasis on competitive programming and understanding Google\'s engineering culture through YouTube videos and blog posts.',
      },
    ],
    oaDetails: {
      rounds: 2,
      difficulty: 'Hard',
      topics: ['Algorithms', 'Data Structures', 'Dynamic Programming', 'Graph Theory'],
      sampleQuestions: [
        'Design a system to detect plagiarism in documents',
        'Optimize search results ranking algorithm',
        'Implement auto-complete feature efficiently',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['DSA', 'Problem Solving', 'Code Quality'],
        commonQuestions: [
          'Solve a graph-based problem with optimal complexity',
          'Design data structures for a specific use case',
          'Debug and optimize given code',
        ],
      },
      {
        type: 'Technical',
        topics: ['System Design', 'Scalability', 'Trade-offs'],
        commonQuestions: [
          'Design Google Maps routing system',
          'How would you build YouTube recommendation system?',
          'Design a URL shortener at scale',
        ],
      },
      {
        type: 'HR',
        topics: ['Googliness', 'Leadership', 'Collaboration'],
        commonQuestions: [
          'Tell me about a time you disagreed with a team member',
          'How do you handle ambiguous requirements?',
          'Describe your biggest technical achievement',
        ],
      },
    ],
    questionBank: [
      { category: 'DSA', question: 'Implement Dijkstra with priority queue' },
      { category: 'DSA', question: 'Solve word ladder problem' },
      { category: 'Core', question: 'Design patterns and their use cases' },
      { category: 'Aptitude', question: 'Logic puzzles and estimation problems' },
    ],
    suggestions: [
      {
        title: 'Competitive Programming',
        description: 'Participate in Codeforces, LeetCode contests. Aim for 1600+ rating on Codeforces.',
      },
      {
        title: 'Code Quality Matters',
        description: 'Write clean, readable code. Practice explaining your thought process while coding.',
      },
      {
        title: 'Mock Interviews',
        description: 'Do at least 10-15 mock interviews. Use platforms like Pramp or interview with seniors.',
      },
    ],
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    domain: 'sde',
    role: 'Software Engineer',
    package: '₹42 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '3',
        name: 'Amit Kumar',
        batch: '2024',
        branch: 'Computer Science',
        experience: 'Microsoft values both technical skills and cultural fit. The interviewers were very friendly and focused on understanding my problem-solving approach rather than just the final answer.',
      },
    ],
    oaDetails: {
      rounds: 3,
      difficulty: 'Medium',
      topics: ['Data Structures', 'Algorithms', 'Problem Solving'],
      sampleQuestions: [
        'Implement a binary search tree with all operations',
        'Design a parking lot system',
        'Find the longest substring without repeating characters',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['DSA', 'Coding', 'Problem Solving'],
        commonQuestions: [
          'Implement a queue using stacks',
          'Find the kth largest element',
          'Serialize and deserialize a binary tree',
        ],
      },
      {
        type: 'Managerial',
        topics: ['Projects', 'Leadership', 'Initiative'],
        commonQuestions: [
          'Tell me about your most impactful project',
          'How do you prioritize tasks?',
          'Describe a situation where you showed leadership',
        ],
      },
      {
        type: 'HR',
        topics: ['Culture Fit', 'Growth Mindset'],
        commonQuestions: [
          'Why Microsoft?',
          'How do you handle feedback?',
          'What are your career goals?',
        ],
      },
    ],
    questionBank: [
      { category: 'DSA', question: 'LCA of binary tree' },
      { category: 'DSA', question: 'Merge k sorted lists' },
      { category: 'Core', question: 'Memory management in different languages' },
      { category: 'Aptitude', question: 'Pattern recognition problems' },
    ],
    suggestions: [
      {
        title: 'Understand Microsoft Culture',
        description: 'Research about growth mindset and Microsoft\'s mission. Read Satya Nadella\'s book.',
      },
      {
        title: 'Project Deep Dive',
        description: 'Be ready to discuss your projects in depth. Know every technical decision you made.',
      },
      {
        title: 'Communication Skills',
        description: 'Practice explaining complex concepts simply. Use the STAR method for behavioral questions.',
      },
    ],
  },
  {
    id: 'larsen-toubro',
    name: 'Larsen & Toubro',
    domain: 'civil',
    role: 'Graduate Engineer Trainee',
    package: '₹9.5 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '4',
        name: 'Vikash Singh',
        batch: '2024',
        branch: 'Civil Engineering',
        experience: 'L&T looks for candidates with strong fundamentals and willingness to work on challenging projects. Be prepared to discuss construction methodologies and project management basics.',
      },
    ],
    oaDetails: {
      rounds: 1,
      difficulty: 'Medium',
      topics: ['Civil Engineering Fundamentals', 'Aptitude', 'Reasoning'],
      sampleQuestions: [
        'Calculate load distribution in a beam',
        'Questions on concrete mix design',
        'Project scheduling using CPM/PERT',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['Structural Analysis', 'Construction Management', 'Materials'],
        commonQuestions: [
          'Explain different types of foundations',
          'What is RCC and its advantages?',
          'How do you ensure quality control on site?',
        ],
      },
      {
        type: 'HR',
        topics: ['Willingness to Relocate', 'Career Goals'],
        commonQuestions: [
          'Are you willing to work at remote project sites?',
          'Why civil engineering?',
          'What do you know about L&T?',
        ],
      },
    ],
    questionBank: [
      { category: 'Core', question: 'Types of cement and their uses' },
      { category: 'Core', question: 'Soil mechanics fundamentals' },
      { category: 'Aptitude', question: 'Work and time problems' },
    ],
    suggestions: [
      {
        title: 'Strong Fundamentals',
        description: 'Revise structural analysis, concrete technology, and construction management thoroughly.',
      },
      {
        title: 'Site Visit Experience',
        description: 'If possible, visit construction sites. Practical knowledge is highly valued.',
      },
      {
        title: 'Industry Awareness',
        description: 'Know about ongoing L&T projects and recent developments in construction technology.',
      },
    ],
  },
  {
    id: 'tata-motors',
    name: 'Tata Motors',
    domain: 'mechanical',
    role: 'Graduate Engineer Trainee',
    package: '₹11 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '5',
        name: 'Deepak Verma',
        batch: '2024',
        branch: 'Mechanical Engineering',
        experience: 'Tata Motors focuses on automotive knowledge and manufacturing processes. Having EV-related project experience was a major plus point during my interview.',
      },
    ],
    oaDetails: {
      rounds: 1,
      difficulty: 'Medium',
      topics: ['Mechanical Engineering', 'Automotive Basics', 'Aptitude'],
      sampleQuestions: [
        'Thermodynamics cycle analysis',
        'Manufacturing process selection',
        'Vehicle dynamics basics',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['Automotive Engineering', 'Manufacturing', 'Design'],
        commonQuestions: [
          'Explain IC engine working',
          'What are different types of gears?',
          'How does ABS work?',
        ],
      },
      {
        type: 'HR',
        topics: ['Company Fit', 'Location Preference'],
        commonQuestions: [
          'Why automotive industry?',
          'Are you open to working in any Tata plant?',
          'What do you know about Tata EV initiatives?',
        ],
      },
    ],
    questionBank: [
      { category: 'Core', question: 'Heat transfer mechanisms' },
      { category: 'Core', question: 'Types of bearings and their applications' },
      { category: 'Aptitude', question: 'Speed, distance, and time problems' },
    ],
    suggestions: [
      {
        title: 'Automotive Focus',
        description: 'Study automotive systems, especially EV technology which is Tata\'s focus area.',
      },
      {
        title: 'Manufacturing Knowledge',
        description: 'Understand production processes, quality control, and lean manufacturing.',
      },
      {
        title: 'Industry Trends',
        description: 'Follow automotive news, especially Tata\'s product launches and EV roadmap.',
      },
    ],
  },
  {
    id: 'schneider-electric',
    name: 'Schneider Electric',
    domain: 'electrical',
    role: 'Graduate Engineer',
    package: '₹12 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '6',
        name: 'Neha Gupta',
        batch: '2024',
        branch: 'Electrical Engineering',
        experience: 'Schneider values sustainability and innovation. My project on renewable energy integration was discussed extensively. They appreciate candidates who align with their green energy vision.',
      },
    ],
    oaDetails: {
      rounds: 1,
      difficulty: 'Medium',
      topics: ['Electrical Systems', 'Power Electronics', 'Aptitude'],
      sampleQuestions: [
        'Power factor correction methods',
        'Protection system design',
        'Energy efficiency calculations',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['Power Systems', 'Control Systems', 'Renewable Energy'],
        commonQuestions: [
          'Explain transformer operation',
          'What are different types of circuit breakers?',
          'How does solar inverter work?',
        ],
      },
      {
        type: 'HR',
        topics: ['Sustainability', 'Career Goals'],
        commonQuestions: [
          'Why energy sector?',
          'What do you know about Schneider\'s products?',
          'How do you contribute to sustainability?',
        ],
      },
    ],
    questionBank: [
      { category: 'Core', question: 'Types of electrical machines' },
      { category: 'Core', question: 'Power quality issues and solutions' },
      { category: 'Aptitude', question: 'Data interpretation problems' },
    ],
    suggestions: [
      {
        title: 'Sustainability Focus',
        description: 'Understand Schneider\'s sustainability initiatives and green energy solutions.',
      },
      {
        title: 'Product Knowledge',
        description: 'Study Schneider\'s product range including MCBs, MCCBs, and smart grid solutions.',
      },
      {
        title: 'Practical Projects',
        description: 'Have hands-on experience with power systems or automation projects.',
      },
    ],
  },
  {
    id: 'qualcomm',
    name: 'Qualcomm',
    domain: 'ece',
    role: 'Engineer - VLSI',
    package: '₹28 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '7',
        name: 'Rohit Joshi',
        batch: '2024',
        branch: 'Electronics & Communication',
        experience: 'Qualcomm interviews are highly technical. They go deep into VLSI fundamentals and expect you to have done relevant projects. My FPGA project experience was crucial.',
      },
    ],
    oaDetails: {
      rounds: 2,
      difficulty: 'Hard',
      topics: ['Digital Electronics', 'VLSI', 'Verilog', 'Computer Architecture'],
      sampleQuestions: [
        'Design a 4-bit counter in Verilog',
        'Timing analysis problems',
        'Cache design and optimization',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['Digital Design', 'VLSI Concepts', 'RTL Coding'],
        commonQuestions: [
          'Explain setup and hold time',
          'Design a frequency divider',
          'What is metastability?',
        ],
      },
      {
        type: 'Technical',
        topics: ['Computer Architecture', 'Communication Protocols'],
        commonQuestions: [
          'Explain pipelining in processors',
          'How does I2C protocol work?',
          'Design a FIFO',
        ],
      },
      {
        type: 'HR',
        topics: ['Career Goals', 'Problem Solving'],
        commonQuestions: [
          'Why semiconductor industry?',
          'Describe a challenging project',
          'How do you stay updated with technology?',
        ],
      },
    ],
    questionBank: [
      { category: 'Core', question: 'Clock domain crossing techniques' },
      { category: 'Core', question: 'Low power design methodologies' },
      { category: 'DSA', question: 'Basic programming problems in C' },
    ],
    suggestions: [
      {
        title: 'VLSI Fundamentals',
        description: 'Master digital design, timing analysis, and RTL coding. Practice Verilog extensively.',
      },
      {
        title: 'Hands-on Projects',
        description: 'Work on FPGA projects. Implement processors or communication protocols.',
      },
      {
        title: 'Industry Tools',
        description: 'Get familiar with Cadence, Synopsys tools through academic versions or online resources.',
      },
    ],
  },
  {
    id: 'mu-sigma',
    name: 'Mu Sigma',
    domain: 'analytics',
    role: 'Trainee Decision Scientist',
    package: '₹6.5 LPA',
    yearOfVisit: 2024,
    seniorExperiences: [
      {
        id: '8',
        name: 'Ananya Das',
        batch: '2024',
        branch: 'Mathematics',
        experience: 'Mu Sigma focuses heavily on problem-solving and case studies. The interviews are unconventional with puzzles and real business scenarios. Being open-minded and articulate helps.',
      },
    ],
    oaDetails: {
      rounds: 1,
      difficulty: 'Medium',
      topics: ['Aptitude', 'Logical Reasoning', 'Data Interpretation'],
      sampleQuestions: [
        'Complex data interpretation sets',
        'Pattern recognition puzzles',
        'Business case analysis',
      ],
    },
    interviewRounds: [
      {
        type: 'Technical',
        topics: ['Case Studies', 'Problem Solving', 'Analytics Concepts'],
        commonQuestions: [
          'How would you analyze customer churn?',
          'Estimate the number of cars in a city',
          'Explain a time you derived insights from data',
        ],
      },
      {
        type: 'HR',
        topics: ['Cultural Fit', 'Learning Ability'],
        commonQuestions: [
          'Why analytics?',
          'Tell me about a problem you solved creatively',
          'How do you handle ambiguity?',
        ],
      },
    ],
    questionBank: [
      { category: 'Aptitude', question: 'Guesstimate problems' },
      { category: 'Aptitude', question: 'Case study frameworks' },
      { category: 'Core', question: 'Basic statistics concepts' },
    ],
    suggestions: [
      {
        title: 'Case Study Practice',
        description: 'Solve consulting-style case studies. Practice structured problem-solving.',
      },
      {
        title: 'Communication Skills',
        description: 'Be articulate and structured in your responses. Practice thinking aloud.',
      },
      {
        title: 'Curiosity Mindset',
        description: 'Show genuine curiosity about business problems and data-driven decision making.',
      },
    ],
  },
];

export const getCompaniesByDomain = (domainId: string): Company[] => {
  return companies.filter(company => company.domain === domainId);
};

export const getCompanyById = (companyId: string): Company | undefined => {
  return companies.find(company => company.id === companyId);
};

export const getDomainById = (domainId: string): Domain | undefined => {
  return domains.find(domain => domain.id === domainId);
};

export const searchCompanies = (query: string): Company[] => {
  const lowerQuery = query.toLowerCase();
  return companies.filter(
    company =>
      company.name.toLowerCase().includes(lowerQuery) ||
      company.role.toLowerCase().includes(lowerQuery) ||
      company.domain.toLowerCase().includes(lowerQuery)
  );
};
