export type Link = {
  label: string
  href: string
}

export type Experience = {
  role: string
  organization: string
  location: string
  period: string
  summary: string
  points: string[]
  tags: string[]
}

export type ProjectCategory = 'Systems' | 'Software' | 'Hardware'

export type Project = {
  title: string
  period: string
  summary: string
  points: string[]
  category: ProjectCategory
  tags: string[]
  links: Link[]
}

export const profile = {
  name: 'Ethan Jinks',
  role: 'Software engineer',
  location: 'Hoboken, NJ',
  school: 'Stevens Institute of Technology',
  degree: 'B.S. Computer Science',
  graduation: 'Expected May 2027',
  gpa: '3.79',
  github: 'https://github.com/Ejinks2',
  // Add a URL here when you want LinkedIn on the site.
  linkedIn: '',
  emails: [
    { label: 'Stevens', value: 'ejinks2@stevens.edu' },
    { label: 'Personal', value: 'ethanzjinks@gmail.com' },
  ],
  lede: 'I work on low-level systems and on software that has to solve a real problem for someone else. Most of that time goes to operating systems, memory, and the path from an idea to something people can actually use.',
}

export const about = [
  'I am a computer science student at Stevens Institute of Technology in Hoboken. Coursework has covered operating systems, concurrent programming, systems programming, algorithms, data structures, deep learning, numerical methods, theory of computation, linear algebra, and database management.',
  'Outside class I am a computer science course assistant and a member of the Stevens Blueprint club. I also assemble and debug my own machines, from part selection through dual-boot firmware problems.',
]

export const experiences: Experience[] = [
  {
    role: 'Process Engineering Intern',
    organization: 'Tesla',
    location: 'Reno, NV',
    period: 'September 1, 2026 — December 15, 2026',
    summary:
      'Developed data pipelines and tools for production data analysis and reporting.',
    points: [
      'Built custom Golang logic to query data via API calls, expose an API service, and allow large scale data manipulation for process control.',
      'Automated manufacturing production reports with GitHub Actions\'s cron jobs for team to track production metrics and identify areas for improvement.',
      'Utilized Power Automate to report product quality failures and identify root causes of production issues.',
      'Developed dashboards to vizualise production trends amongst machinery and identify areas for improvement.',
      'Root caused production issues and developed solutions to improve production efficiency and quality.'
    ],
    tags: ['Golang', 'MySQL', 'Power Automate', 'Grafana', 'Excel'],
  },
  {
    role: 'Software Engineer Intern',
    organization: 'Chick-fil-A',
    location: 'Atlanta, GA',
    period: 'May 2026 — August 31, 2026',
    summary:
      'Developed DevOps tools and workflows for Chick-fil-A\'s software development staff.',
    points: [
      'Contributed Terraform code for resource management and deployment of internal tools and services.',
      'Developed an automated workflow for deploying new apps and tools within the organization.',
    ],
    tags: ['Terraform', 'Python', 'AWS', 'Cloudflare'],
  },
  {
    role: 'Junior App Developer',
    organization: 'All of Us',
    location: '',
    period: 'Feb 2025 — Present',
    summary:
      'Building a location-based skills exchange app for iOS and Android, with the booking and messaging flows people need to actually trade a session.',
    points: [
      'Shipped stakeholder-driven features, including end-to-end session booking and live chat between users.',
      'Developed with Xcode and Expo Go across macOS and Windows.',
      'Built the app with React Native, GraphQL, and AWS (AppSync, Amplify, Cognito, Lambda, and DynamoDB).',
    ],
    tags: ['React Native', 'GraphQL', 'AWS', 'Expo'],
  },
  {
    role: 'Computer Science Course Assistant',
    organization: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    period: 'Campus',
    summary:
      'Course assistant for the computer science program, alongside my own classes.',
    points: [],
    tags: ['Teaching'],
  },
  {
    role: 'Member',
    organization: 'Stevens Blueprint',
    location: 'Hoboken, NJ',
    period: 'Campus',
    summary: 'Member of the Stevens Blueprint club.',
    points: [],
    tags: ['Student org'],
  },
]

export const projects: Project[] = [
  {
    title: 'BTWN Calendars',
    period: '2026',
    summary:
      'A scheduling tool that overlays a group’s real calendars, finds a time that works, and writes the meeting back to every member.',
    points: [
      'Built with Nolan Hughes, Jake Paccione, and Lucas Vanzelli.',
      'Connects Google Calendar and Microsoft Outlook so a team can mix providers.',
      'Suggests open times and creates the event on each connected calendar.',
      'Encrypts sensitive fields at rest in Firestore with Google Cloud KMS envelope encryption.',
      'Deployed with AWS, using GitHub Actions for CI/CD pipelines and Amplify for hosting.',
    ],
    category: 'Software',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'OAuth', 'AWS', 'GitHub Actions', 'Amplify'],
    links: [
      { label: 'Live app', href: 'https://btwncalendars.com' },
      { label: 'GitHub', href: 'https://github.com/Ejinks2/btwn-calendars' },
    ],
  },
  {
    title: 'Bible Notes',
    period: '2026',
    summary:
      'Both an individual and collective tool for note-taking and Bible study.',
    points: [
      'Allows users to create notes with a rich Markdown text editor.',
      'Builds a graph of the user\'s notes and their relationships to each other for better organization and discovery.',
      'Allows thematic grouping of notes and allows users to create custom tags and scripture selections for their notes.',
      'Provides users the option to share their notes with others, inviting for collaboration and discussion.',
    ],
    category: 'Software',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'GitHub Actions', 'Docker', 'React'],
    links: []
  },
  {
    title: 'FAT12 operating system',
    period: 'Personal',
    summary:
      'A simulated bootloader and kernel on a 1.44 MB FAT12 disk, written to learn what happens before an operating system is there to help.',
    points: [
      'Reads the boot sector, file allocation table, and root directory, then loads the kernel.',
      'Custom routines for file, FAT, root-directory, and boot-sector reads.',
      'Debugged in Bochs by setting breakpoints, stepping assembly, and inspecting memory.',
    ],
    category: 'Systems',
    tags: ['Assembly', 'FAT12', 'Bochs'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Ejinks2/OperatingSystem' },
      { label: 'OSDev notes', href: 'https://github.com/Ejinks2/MyOperatingSystem' },
    ],
  },
  {
    title: 'Elementary CPU',
    period: 'Sep 2025 — Dec 2025',
    summary:
      'A small simulated processor that can run custom instructions, do arithmetic, and write results back to memory.',
    points: [
      'Designed the datapath with an MMU, ALU, multiplexers, and logic gates.',
      'Wrote a Python assembler-style instruction set the CPU could execute.',
    ],
    category: 'Systems',
    tags: ['Python', 'Computer architecture'],
    links: [],
  },
  {
    title: 'Schedulers, drivers, and kernel modules',
    period: 'Jan 2026 — Present',
    summary:
      'Coursework on how an operating system actually shares the machine: processes, memory, files, and devices.',
    points: [
      'Wrote a user-space process scheduler using preemptive Earliest Deadline First.',
      'Wrote Linux device drivers and kernel modules.',
      'Covered system calls, threads, concurrency, scheduling, virtual memory, file systems, disks, and I/O.',
    ],
    category: 'Systems',
    tags: ['C', 'Linux', 'Scheduling'],
    links: [],
  },
  {
    title: 'Memory allocator',
    period: '2026',
    summary:
      'A C allocator with the usual interface: allocate, zero, resize, and free.',
    points: [
      'Implements mm_malloc, mm_calloc, mm_realloc, and mm_free.',
    ],
    category: 'Systems',
    tags: ['C', 'Memory'],
    links: [],
  },
  {
    title: 'LifeTracker',
    period: 'Personal',
    summary: 'A personal app for keeping tasks and finances in one place.',
    points: [
      'Started as a single place to track day-to-day work and money instead of splitting them across tools.',
    ],
    category: 'Software',
    tags: ['Personal'],
    links: [{ label: 'GitHub', href: 'https://github.com/Ejinks2/LifeTracker' }],
  },
  {
    title: 'Custom desktop',
    period: 'Personal',
    summary:
      'A machine I specified, built, and still maintain, including the firmware and dual-boot setup around it.',
    points: [
      'Chose CPU, GPU, motherboard, memory, storage, and power for performance, thermals, and budget.',
      'Installed Windows and Linux, including UEFI setup, boot configuration, and drivers.',
      'Debugged boot-loader, partitioning, and dual-boot failures.',
    ],
    category: 'Hardware',
    tags: ['UEFI', 'Linux', 'Windows'],
    links: [],
  },
]

export const coursework = [
  'Operating Systems',
  'Concurrent Programming',
  'Systems Programming',
  'Algorithms',
  'Data Structures',
  'Deep Learning',
  'Numerical Methods',
  'Theory of Computation',
  'Linear Algebra',
  'Database Management',
]

export const skillGroups = [
  {
    label: 'Languages',
    items: [
      'Rust',
      'Python',
      'Golang',
      'C',
      'C++',
      'Java',
      'JavaScript',
      'TypeScript',
      'Bash',
      'Assembly',
      'HTML',
      'CSS',
    ],
  },
  {
    label: 'Software',
    items: [
      'Unix/Linux',
      'Git',
      'GitHub Actions',
      'Docker',
      'AWS',
      'Terraform',
      'MATLAB',
      'Power Automate',
      'Pandas + NumPy + Scikit-learn',
    ],
  },
  {
    label: 'Data',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'MongoDB',
      'GraphQL',
      'Supabase',
      'Firebase',
    ],
  },
]

export const projectCategories = ['All', 'Systems', 'Software', 'Hardware'] as const
