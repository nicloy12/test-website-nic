// Edit this file to personalize your portfolio.
// Everything on the home page (name, intro, about, contact, links) reads from here.

export const site = {
  name: 'Nic Loyola',
  role: 'Product Designer',
  location: 'Irvine, California',
  availability: 'Open to full-time product design roles',
  email: 'hello@jordanlee.design',
  url: 'https://jordanlee.design',
  // Drop your resume into /public (e.g. /public/resume.pdf) and set this to '/resume.pdf'.
  resumeUrl: '',

  // `highlight` must appear inside `headline`; it receives the gold marker.
  headline: 'Product designer with a fresh Master’s in HCI & Design from UC Irvine.',
  highlight: 'UC Irvine',

  intro:
    'I design products that hold up under real use — grounded in research, shaped through prototyping, and refined with the people who depend on them.',

  about: [
    'I recently completed my Master of Human-Computer Interaction & Design at UC Irvine, where I spent a year moving between research labs, community partners, and studio critiques.',
    'My work sits where qualitative research meets interaction craft. I care about accessibility, clear systems, and the small details that make software feel considerate.',
  ],

  education: [
    {
      degree: 'M.S. Human-Computer Interaction & Design',
      school: 'University of California, Irvine',
      year: '2026',
    },
  ],

  focus: [
    'User research & synthesis',
    'Interaction design',
    'Prototyping',
    'Accessibility',
    'Design systems',
    'Usability testing',
  ],

  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Read.cv', href: 'https://read.cv/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
  ],
} as const
