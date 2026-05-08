export type Project = {
  id: string
  index: string
  name: string
  year: string
  category: string
  client: string
  role: string
  tagline: string
  problem: string
  solution: string
  whatIDesigned: string
  outcome: string
  tags: string[]
  skills: string[]
  color: string
  bgColor: string
  protected?: boolean
  nextStep?: string
  externalUrl?: string
  externalLinkLabel?: string
  problemContained?: boolean
  processEmbed?: string
  images?: {
    hero?: string
    problem?: string
    detail1?: string
    detail2?: string
    process?: string
    keyScreen?: string
    detail3?: string
    final?: string
  }
}

export const projects: Project[] = [
  {
    id: "aida",
    index: "01",
    name: "AIDA",
    year: "2024–Present",
    category: "Product Design",
    client: "Mondelēz",
    role: "Senior Experience Designer",
    tagline:
      "A 0 to 1 AI creative platform built for Mondelēz and its global agencies. From one pitch deck to 300+ screens live across five brands.",
    problem:
      "Before AIDA, every marketing asset passed through a slow and expensive agency pipeline, taking weeks and significant budget to produce. The only design reference that existed was a single pitch presentation from one Publicis agency. There was no product, no design system, and no established pattern for how generative AI could work responsibly inside a global brand organization.",
    solution:
      "AIDA gives brand teams, marketing managers, creatives and agency partners a single guided platform to generate images, videos, headlines and concept briefs in minutes. Every output passes through a Responsible AI review embedded directly into the workflow, so every asset meets Mondelēz ethical and brand safety standards before it can be used.",
    whatIDesigned:
      "I built the component system from zero, with one pitch deck as my only reference point. Starting there, I designed and documented every component through the MVP launch, then continued evolving the system as the product grew from 20 screens to over 300.\n\nThe most complex design challenge was the Responsible AI (RAI) review interface. RAI checks happen everywhere on the platform. Every image, every piece of generated text, every prompt output passes through a review process, and each one needs to communicate its status clearly to users who are not technical. The challenge was figuring out how to surface that information without cluttering an already dense interface, and then iterating as more content types and data points accumulated on screen.\n\nThe solution we landed on: a compact tag appears near each flagged asset. Users can click the tag to expand a panel explaining the specific rule that was triggered and the recommendation for how to address it. From there they can choose to proceed with the asset as is, or go back and revise based on the feedback. Designing that interaction meant making the safety layer feel like a helpful guide rather than a blocker.\n\nWhat made this project unusual was its pace. New features arrived nearly every week, often requiring us to revisit patterns already in engineering. Maintaining coherence across an expanding system and ensuring every new addition felt native to what already existed was the ongoing challenge throughout the engagement.",
    outcome:
      "Live across five brands with 40 more onboarding. What began with one pitch deck and 20 screens is now a platform of 300+ screens built on a component system designed from scratch. Version 2.0, with full design token architecture and a conversational AI interface, is in active development.",
    tags: ["AI Platform", "Design System", "Enterprise UX", "Responsible AI"],
    skills: ["0→1 Build", "Component Library", "Visual Design", "Interaction Design", "Design Tokens"],
    images: {
      hero: "/aida/Hero.png",
      problem: "/aida/problem.png",
      detail1: "/aida/detail-1.png",
      detail2: "/aida/detail-2.png",
      detail3: "/aida/detail-3.png",
      process: "/aida/process.png",
      keyScreen: "/aida/key screen.png",
      final: "/aida/final.png",
    },
    color: "#E1CAFF",
    bgColor: "#1C0F35",
    protected: true,
    nextStep: "AIDA is being redesigned as a conversational platform. The next version replaces the current flow-based model with a fixed-height workspace where an AI guides users through each journey — briefing, generating, reviewing, and iterating through natural dialogue in a single persistent environment.",
  },
  {
    id: "racetrac",
    index: "02",
    name: "RaceTrac",
    year: "2023",
    category: "UI/UX",
    client: "RaceTrac",
    role: "Experience Designer",
    tagline:
      "A 9-month ground-up redesign — I owned the core app experience, validated through 3–4 rounds of user testing, launching to a 4.9-star rating and 2–3× daily engagement.",
    problem:
      "RaceTrac's existing app was outdated and lacked the features today's on-the-go customers expect. With no rewards program, no digital ordering, and a dated interface, the app struggled to engage its core users — frequent drivers, commuters, and loyalty-driven customers who stop multiple times a week.",
    solution:
      "We redesigned the RaceTrac app from the ground up with a fully integrated rewards program at its core. The new experience introduced personalized fuel savings, digital ordering, and a tiered loyalty system — shaped by multiple rounds of user testing to ensure it worked for drivers in real conditions, not just in a prototype.",
    whatIDesigned:
      "Over 9–11 months, I owned the design of the app's core experience — including onboarding, store search, store detail pages, transaction history, fuel types, order flow, notifications, rewards details, and seasonal splash screens.\n\nOne detail I'm proud of: the fuel type icon system I added to the pricing screen. Drivers pulling up to a pump need to identify their fuel grade in seconds — so I designed a small icon set that lets users scan types at a glance rather than reading labels. It was a small addition, but it brought both clarity and personality to one of the most-used screens in the app.\n\nThe design process included 3–4 rounds of user testing throughout the project. Testing shaped how we structured onboarding, how prominently we surfaced personalized fuel savings on the home screen, and how we reduced friction in the order flow for time-pressed customers.",
    outcome:
      "The redesigned app launched to a 4.9-star rating — up from a previous version that struggled with stability and adoption — and increased daily engagement by 2–3×. By integrating rewards, fuel savings, and digital ordering into one seamless experience, the app evolved from a basic utility into a loyalty platform that gives customers a reason to return on every fuel stop.",
    tags: ["Mobile App", "Rewards & Loyalty", "Consumer UX", "Digital Ordering"],
    skills: ["Mobile Design", "User Research", "Iconography", "User Testing", "Interaction Design"],
    color: "#40C4F3",
    bgColor: "#06141F",
    externalUrl: "https://apps.apple.com/us/app/racetrac/id1011864306",
    externalLinkLabel: "↗ App Store",
    problemContained: true,
    images: {
      hero: "/racetrac/Hero.png",
      problem: "/racetrac/problem.png",
      detail1: "/racetrac/detail-1.gif",
      detail2: "/racetrac/detail-2.png",
      process: "/racetrac/process.png",
      keyScreen: "/racetrac/key screen.png",
      final: "/racetrac/Final.png",
    },
  },
  {
    id: "snackworks",
    index: "03",
    name: "Snackworks",
    year: "2024",
    category: "UI/UX",
    client: "Mondelēz International",
    role: "Experience Designer",
    tagline:
      "An 8-month full redesign of Mondelēz's snack hub — new IA, a brand new recipe platform, 50+ component library, and 23% traffic growth post-launch.",
    problem:
      "SnackWorks had grown into a content-rich platform without the design to match. The existing experience was difficult to navigate — users couldn't easily find brands, discover recipes, or connect products to the brands they loved. With OREO, RITZ, Chips Ahoy, and Sour Patch Kids all living under one roof, the site needed a structure that could hold that breadth without feeling overwhelming.",
    solution:
      "Over 8 months, we redesigned SnackWorks from the ground up — new information architecture, a modernized UI aligned with the Mondelēz brand, and an entirely new recipe platform that didn't exist before. The result gave users a reason to explore the site, not just arrive and leave.",
    whatIDesigned:
      "I led UX, UI, and design system work across the full site over an 8-month engagement.\n\nThe information architecture was rebuilt from scratch. I restructured the navigation to make brands, products, and recipes feel naturally connected — so a user browsing OREO could move fluidly into OREO recipes without hitting a dead end.\n\nThe recipe platform was entirely new — it had never existed on Snackworks before. I designed it as a destination in its own right: a browsable, filterable recipe experience tied directly to the products users already love, giving them a reason to return beyond brand lookups.\n\nTo keep the multi-brand ecosystem consistent, I built a design system of 50+ components with a documented guidebook covering typography, color usage, layout patterns, and component behavior — giving both the design and development teams a shared language to build from.",
    outcome:
      "Site traffic increased 23% following launch. The new recipe section created a content destination that didn't previously exist, and the 50+ component design system gave the platform the foundation to scale as new brands, campaigns, and content are added over time.",
    tags: ["Web Design", "Design System", "Information Architecture", "Multi-brand"],
    skills: ["Information Architecture", "Design System", "UX Strategy", "Web Design", "Multi-brand"],
    color: "#9942FF",
    bgColor: "#0D0820",
    externalUrl: "https://www.snackworks.com/",
    externalLinkLabel: "visit snackworks.com",
    images: {
      hero: "/snackworks/Hero.png",
      problem: "/snackworks/problem.png",
      detail1: "/snackworks/detail-1.png",
      detail2: "/snackworks/detail-2.png",
      process: "/snackworks/process.png",
      keyScreen: "/snackworks/key screens.png",
      detail3: "/snackworks/outcome.png",
      final: "/snackworks/Final.png",
    },
  },
  {
    id: "visa-analytics",
    index: "04",
    name: "Visa Analytics Platform",
    year: "2023",
    category: "Product Design",
    client: "Visa",
    role: "Experience Designer",
    tagline:
      "Untangling a disconnected navigation system to make complex payments data feel clear and actionable.",
    problem:
      "The existing platform's navigation felt broken — the left rail and the main content panel operated as two separate experiences. Users couldn't tell what they had clicked or what to expect next. For financial institutions working with complex payments data every day, that ambiguity created friction at every step and undermined trust in the tool itself.",
    solution:
      "We redesigned the platform with a focus on navigation clarity and visual coherence. The new left rail uses a clear icon system and connected visual states that directly drive the right panel — so users always know where they are, what they clicked, and what comes next. A new component library gave the platform the consistency it previously lacked.",
    whatIDesigned:
      "I owned two core deliverables: the component library and the dashboard UX redesign.\n\nFor the dashboard, the central problem was a broken relationship between the left rail and the right panel — they felt like two separate products. I redesigned them as a connected system. The left rail navigation now has clear icon anchors and active visual states that correspond directly to what loads in the right panel. Users always know where they are and what to expect before they click.\n\nTo support the redesign, I built the component library that underpins the entire platform — ensuring visual consistency across every screen and giving the development team reliable, documented building blocks to work from.\n\nThe dashboard serves all user types equally. Executives, managers, and analysts differ only in which applications they can access — so the design needed to work for an analyst drilling into fraud data and an executive scanning portfolio performance at a glance.",
    outcome:
      "Though not yet live, the redesign solved a foundational navigation problem that made the platform's depth inaccessible. A connected left rail and right panel, a clear icon system, and a consistent component library give the platform the structure it needs to scale.",
    tags: ["Data Dashboard", "B2B SaaS", "Role-based UX", "Fintech", "Prototype"],
    skills: ["Dashboard Design", "Navigation UX", "Component Library", "B2B SaaS", "Data Visualization", "Prototype"],
    color: "#60A5FA",
    bgColor: "#081018",
    processEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/KngnblB4L6LdB8J9DFO0ok/Snackworks-VAP?node-id=253-105472%26scaling=scale-down-width%26content-scaling=fixed%26starting-point-node-id=253%3A105472%26page-id=253%3A47762",
    images: {
      hero: "/visa/Hero.png",
      problem: "/visa/Problem.png",
      detail1: "/visa/detail-1.png",
      detail2: "/visa/detail-2.png",
      keyScreen: "/visa/key screen.png",
      final: "/visa/final.png",
    },
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
