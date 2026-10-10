// Add a new case study by appending an object to `projects` below.
// Put images in /public/work/<slug>/ and reference them as "/work/<slug>/file.png".
// Each case study page is generated automatically at /work/<slug>.

export type Block =
  | { type: 'text'; heading?: string; body: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; heading?: string; items: { title: string; body: string }[] }
  | { type: 'quote'; quote: string; source?: string }
  | { type: 'metrics'; heading?: string; items: { value: string; label: string }[] }

export type Section = {
  id: string
  label: string
  blocks: Block[]
}

export type CaseStudy = {
  slug: string
  title: string
  tagline: string
  summary: string
  year: string
  role: string
  timeline: string
  team: string
  tools: string[]
  tags: string[]
  cover: { src: string; alt: string }
  sections: Section[]
}

export const projects: CaseStudy[] = [
  {
    slug: 'wayfind',
    title: 'Wayfind',
    tagline: 'Transit guidance for riders with low vision',
    summary:
      'An MHCID capstone exploring how real-time transit information can be made legible, glanceable, and trustworthy for riders with low vision.',
    year: '2026',
    role: 'Lead Product Designer & Researcher',
    timeline: '20 weeks',
    team: '4 designers, 1 faculty advisor',
    tools: ['Figma', 'Dovetail', 'ProtoPie', 'VoiceOver'],
    tags: ['Capstone', 'Accessibility', 'Mobile'],
    cover: {
      src: '/work/wayfind/cover.png',
      alt: 'A phone showing a high-contrast transit app at a sunny bus stop',
    },
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        blocks: [
          {
            type: 'text',
            body: [
              'Riders with low vision told us the hardest part of taking the bus is not the ride — it is the uncertainty before it. Is this the right stop? Is that my bus? Did it already pass?',
              'Wayfind is a mobile companion that reduces that uncertainty with large, high-contrast arrival cards, haptic cues as a bus approaches, and spoken confirmations designed alongside screen reader users.',
            ],
          },
        ],
      },
      {
        id: 'research',
        label: 'Research',
        blocks: [
          {
            type: 'text',
            heading: 'Riding along',
            body: [
              'We conducted 14 contextual interviews and 6 ride-alongs with riders across Orange County, partnering with a local low-vision support group to recruit participants.',
            ],
          },
          {
            type: 'image',
            src: '/work/wayfind/research.png',
            alt: 'Affinity map of sticky notes and sketched wireframes on a wall',
            caption: 'Affinity mapping 300+ observations into five core themes.',
          },
          {
            type: 'quote',
            quote:
              'I don’t need the app to tell me everything. I need it to tell me the one thing I need, right now, loud enough.',
            source: 'Participant 07, daily rider',
          },
          {
            type: 'list',
            heading: 'Key insights',
            items: [
              {
                title: 'Confidence beats completeness',
                body: 'Riders preferred a single, confident answer over a dense list of every route.',
              },
              {
                title: 'Approach is the anxious moment',
                body: 'The 90 seconds before a bus arrives created the most stress and the most errors.',
              },
              {
                title: 'Audio needs restraint',
                body: 'Constant announcements were tuned out; well-timed cues were trusted.',
              },
            ],
          },
        ],
      },
      {
        id: 'design',
        label: 'Design',
        blocks: [
          {
            type: 'text',
            heading: 'One card, one answer',
            body: [
              'We replaced the conventional list view with a single "next bus" card that scales to 200% dynamic type without truncation. Secondary routes are one swipe away.',
              'An approach mode escalates feedback as the bus nears — a gentle pulse at two minutes, a stronger pattern at thirty seconds, and a spoken route number on arrival.',
            ],
          },
          {
            type: 'image',
            src: '/work/wayfind/cover.png',
            alt: 'Final Wayfind interface on a phone',
            caption: 'Final arrival card in approach mode.',
          },
        ],
      },
      {
        id: 'outcomes',
        label: 'Outcomes',
        blocks: [
          {
            type: 'metrics',
            heading: 'Usability testing with 10 riders',
            items: [
              { value: '9/10', label: 'Boarded the correct bus unassisted' },
              { value: '-41%', label: 'Time to confirm route vs. current app' },
              { value: '4.6/5', label: 'Average confidence rating' },
            ],
          },
          {
            type: 'text',
            heading: 'Reflection',
            body: [
              'Designing with assistive technology users from the first week changed every decision we made. Next, I would explore how Wayfind could share data with transit agencies to improve stop signage itself.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'clinic-checkin',
    title: 'Clinic Check-in',
    tagline: 'A calmer, bilingual front desk for a community clinic',
    summary:
      'Redesigning the patient check-in experience for a community health clinic to reduce wait-time confusion and front-desk load.',
    year: '2025',
    role: 'UX Designer',
    timeline: '10 weeks',
    team: '3 designers, clinic staff partners',
    tools: ['Figma', 'Miro', 'Maze'],
    tags: ['Healthcare', 'Service design', 'Kiosk'],
    cover: {
      src: '/work/clinic-checkin/cover.png',
      alt: 'A tablet check-in kiosk on a wooden counter in a bright clinic lobby',
    },
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        blocks: [
          {
            type: 'text',
            body: [
              'Front-desk staff at a partner clinic spent much of their day answering the same question: "How much longer?" We designed a bilingual self check-in kiosk and a waiting-room status display to make the process visible.',
            ],
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        blocks: [
          {
            type: 'list',
            heading: 'What we did',
            items: [
              { title: 'Service blueprint', body: 'Mapped the full patient journey from parking lot to exam room with staff.' },
              { title: 'Paper prototypes', body: 'Tested early flows in the lobby with patients in English and Spanish.' },
              { title: 'Iterative testing', body: 'Ran three rounds of usability tests, cutting the flow from 9 steps to 4.' },
            ],
          },
        ],
      },
      {
        id: 'outcomes',
        label: 'Outcomes',
        blocks: [
          {
            type: 'metrics',
            items: [
              { value: '4', label: 'Steps to check in, down from 9' },
              { value: '2', label: 'Languages supported at launch' },
            ],
          },
          {
            type: 'text',
            body: [
              'The clinic is piloting the kiosk at one location. Staff reported fewer interruptions in the first month.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tandem',
    title: 'Tandem',
    tagline: 'A shared study planner for commuter students',
    summary:
      'A collaborative planner that helps commuter students coordinate study sessions around unpredictable schedules.',
    year: '2025',
    role: 'Product Designer',
    timeline: '8 weeks',
    team: 'Solo project',
    tools: ['Figma', 'Framer'],
    tags: ['Web app', 'Collaboration', 'Concept'],
    cover: {
      src: '/work/tandem/cover.png',
      alt: 'A laptop on a concrete ledge showing a minimalist weekly planner',
    },
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        blocks: [
          {
            type: 'text',
            body: [
              'Commuter students miss out on group study because coordination happens in fragmented group chats. Tandem overlays everyone’s availability and suggests realistic windows to meet — on campus or online.',
            ],
          },
          {
            type: 'image',
            src: '/work/tandem/cover.png',
            alt: 'Tandem weekly planner interface',
            caption: 'Overlapping availability surfaces suggested study windows.',
          },
        ],
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  const next = projects[(index + 1) % projects.length]
  return { next: next.slug === slug ? undefined : next }
}
