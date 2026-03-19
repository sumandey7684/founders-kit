export interface Resource {
  title: string;
  link: string;
  category: string;
  description: string;
}

export const resources: Resource[] = [
  // Learning & Knowledge
  {
    title: "Paul Graham's Essays",
    link: "https://paulgraham.com/",
    category: "Learning & Knowledge",
    description:
      "Essential essays on startups, entrepreneurship, and technology",
  },
  {
    title: "Sam Altman's Blog",
    link: "https://blog.samaltman.com/",
    category: "Learning & Knowledge",
    description:
      "Insights on startups and building companies from Y Combinator's former president",
  },
  {
    title: "Startup Library",
    link: "https://www.startuplibrary.io/",
    category: "Learning & Knowledge",
    description: "Curated collection of startup resources and guides",
  },
  {
    title: "Founder Resources",
    link: "https://www.founderresources.com/",
    category: "Learning & Knowledge",
    description: "Comprehensive resource hub for startup founders",
  },
  {
    title: "The Founder Library - NFX",
    link: "https://www.nfx.com/founder-library",
    category: "Learning & Knowledge",
    description: "Essential reading and resources for founders",
  },
  {
    title: "The Four Steps to the Epiphany",
    link: "https://amzn.to/46n8bP3",
    category: "Learning & Knowledge",
    description: "Steve Blank's foundational book on customer development",
  },
  {
    title: "The Lean Startup",
    link: "https://amzn.to/4rwpzcI",
    category: "Learning & Knowledge",
    description: "Eric Ries' methodology for building successful startups",
  },
  {
    title: "Zero to One",
    link: "https://amzn.to/3ZMyWc3",
    category: "Learning & Knowledge",
    description: "Peter Thiel's guide to building the future",
  },
  {
    title: "The Hard Thing About Hard Things",
    link: "https://amzn.to/4tFyBFA",
    category: "Learning & Knowledge",
    description: "Ben Horowitz on building and running a startup",
  },
  {
    title: "Hooked",
    link: "https://www.hookedbook.com/",
    category: "Learning & Knowledge",
    description: "How to build habit-forming products",
  },
  {
    title: "Inspired",
    link: "https://www.inspiredbook.com/",
    category: "Learning & Knowledge",
    description: "Marty Cagan on creating tech products customers love",
  },
  {
    title: "Traction",
    link: "https://www.tractionbook.com/",
    category: "Learning & Knowledge",
    description: "A startup guide to getting customers",
  },
  {
    title: "The Mom Test",
    link: "https://www.momtestbook.com/",
    category: "Learning & Knowledge",
    description: "Rob Fitzpatrick's guide to customer conversations",
  },
  {
    title: "Venture Deals",
    link: "https://venturedeals.com/",
    category: "Learning & Knowledge",
    description: "Brad Feld's guide to startup fundraising and venture capital",
  },

  // Courses & Videos
  {
    title: "How to Start a Startup",
    link: "https://startupclass.co/course/how-to-start-a-startup",
    category: "Courses & Videos",
    description: "Comprehensive startup course from Y Combinator",
  },
  {
    title: "Y Combinator Startup School",
    link: "https://www.ycombinator.com/startupschool/2019",
    category: "Courses & Videos",
    description: "Free online course on building startups",
  },
  {
    title: "Mind The Product",
    link: "https://www.mindtheproduct.com/",
    category: "Courses & Videos",
    description: "Product management resources and videos",
  },
  {
    title: "DevTube",
    link: "https://www.devtube.com/",
    category: "Courses & Videos",
    description: "Developer video content aggregator",
  },
  {
    title: "Startup Talks",
    link: "http://startuptalks.tv/",
    category: "Courses & Videos",
    description: "Curated collection of startup talks and presentations",
  },

  // Podcasts
  {
    title: "Acquired",
    link: "https://www.acquired.fm/",
    category: "Podcasts",
    description: "Deep dives into company acquisitions and IPOs",
  },
  {
    title: "A16z Podcast",
    link: "https://a16z.com/podcasts/",
    category: "Podcasts",
    description: "Tech and business trends from Andreessen Horowitz",
  },
  {
    title: "Masters of Scale",
    link: "https://mastersofscale.com/",
    category: "Podcasts",
    description: "Reid Hoffman interviews founders on scaling companies",
  },
  {
    title: "Inside Intercom",
    link: "https://www.intercom.com/blog/podcasts/",
    category: "Podcasts",
    description: "Product management and customer engagement insights",
  },
  {
    title: "This is Product Management",
    link: "https://www.thisisproductmanagement.com/",
    category: "Podcasts",
    description: "Weekly interviews with product leaders",
  },
  {
    title: "Indie Hackers",
    link: "https://www.indiehackers.com/",
    category: "Podcasts",
    description: "Stories from founders building profitable businesses",
  },

  // Inspiration & Discovery
  {
    title: "Product Hunt",
    link: "https://www.producthunt.com/",
    category: "Inspiration & Discovery",
    description: "Discover new products and startups daily",
  },
  {
    title: "Hacker News",
    link: "https://news.ycombinator.com/",
    category: "Inspiration & Discovery",
    description: "Tech news and startup discussions",
  },
  {
    title: "Crunchbase",
    link: "https://www.crunchbase.com/",
    category: "Inspiration & Discovery",
    description: "Startup funding and company information database",
  },
  {
    title: "BetaList",
    link: "https://betalist.com/",
    category: "Inspiration & Discovery",
    description: "Discover and get early access to startups",
  },
  {
    title: "SaaS Pages",
    link: "https://www.saaspages.com/",
    category: "Inspiration & Discovery",
    description: "Design inspiration from SaaS landing pages",
  },
  {
    title: "Mobbin",
    link: "https://www.mobbin.com/",
    category: "Inspiration & Discovery",
    description: "Mobile and web app design inspiration",
  },
  {
    title: "Page Flows",
    link: "https://pageflows.com/",
    category: "Inspiration & Discovery",
    description: "User flow design inspiration and examples",
  },

  // Company Building
  {
    title: "Panabee",
    link: "https://panabee.com/",
    category: "Company Building",
    description: "Company name and domain name generator",
  },
  {
    title: "NameMesh",
    link: "https://www.namemesh.com/",
    category: "Company Building",
    description: "Smart business name generator",
  },
  {
    title: "Namechk",
    link: "https://namechk.com/",
    category: "Company Building",
    description: "Check username and domain availability",
  },
  {
    title: "Growthhacklist",
    link: "https://www.growthhacklist.com/",
    category: "Company Building",
    description: "Curated growth tactics and strategies",
  },

  // Customer Development
  {
    title: "Customer Development Resources",
    link: "https://www.customerdevelopmentresources.com/",
    category: "Customer Development",
    description: "Curated list of customer development tools and guides",
  },
  {
    title: "Empathy Map",
    link: "https://www.empathymap.com/",
    category: "Customer Development",
    description: "Tool for understanding customer needs and behaviors",
  },
  {
    title: "Product-Market Fit Guide",
    link: "https://www.fundamentalsofproductmarketfit.com/",
    category: "Customer Development",
    description: "Comprehensive guide to achieving PMF",
  },

  // Incubators & Accelerators
  {
    title: "Y Combinator",
    link: "https://www.ycombinator.com/",
    category: "Incubators & Accelerators",
    description: "Leading startup accelerator and investor",
  },
  {
    title: "500 Startups",
    link: "https://www.500startups.com/",
    category: "Incubators & Accelerators",
    description: "Global venture capital firm and accelerator",
  },
  {
    title: "Plug and Play",
    link: "https://www.plugandplaytechcenter.com/",
    category: "Incubators & Accelerators",
    description: "Innovation platform connecting startups and corporations",
  },

  // Communities
  {
    title: "r/Entrepreneur",
    link: "https://www.reddit.com/r/Entrepreneur/",
    category: "Communities",
    description: "Reddit community for entrepreneurs",
  },
  {
    title: "r/startups",
    link: "https://www.reddit.com/r/startups/",
    category: "Communities",
    description: "Startup discussion and advice on Reddit",
  },
  {
    title: "r/SaaS",
    link: "https://www.reddit.com/r/SaaS/",
    category: "Communities",
    description: "SaaS founders and operators community",
  },
  {
    title: "Indie Hackers Community",
    link: "https://www.indiehackers.com/",
    category: "Communities",
    description: "Community of independent founders",
  },
  {
    title: "AngelList",
    link: "https://www.angellist.com/",
    category: "Communities",
    description: "Connect with investors and startup talent",
  },

  // Fundraising
  {
    title: "A Guide to Seed Fundraising",
    link: "https://www.ycombinator.com/library/4A-a-guide-to-seed-fundraising",
    category: "Fundraising",
    description: "Y Combinator's comprehensive fundraising guide",
  },
  {
    title: "How to Raise Money",
    link: "https://www.howtoraise.money/",
    category: "Fundraising",
    description: "Step-by-step guide to startup fundraising",
  },
  {
    title: "First Round Capital",
    link: "https://firstround.com/",
    category: "Fundraising",
    description: "Seed-stage venture capital firm",
  },
  {
    title: "30 Legendary Startup Pitch Decks",
    link: "https://slidebean.com/blog/30-legendary-startup-pitch-decks",
    category: "Fundraising",
    description: "Learn from successful pitch deck examples",
  },
  {
    title: "OpenDeck",
    link: "https://www.opendeck.co/",
    category: "Fundraising",
    description: "Collection of open source pitch decks",
  },

  // Website & Hosting
  {
    title: "Vercel",
    link: "https://vercel.com/",
    category: "Website & Hosting",
    description: "Platform for frontend developers with instant deployment",
  },
  {
    title: "Netlify",
    link: "https://www.netlify.com/",
    category: "Website & Hosting",
    description: "Modern web hosting and serverless backend",
  },
  {
    title: "Webflow",
    link: "https://webflow.com/",
    category: "Website & Hosting",
    description: "Visual website builder and hosting platform",
  },
  {
    title: "Carrd",
    link: "https://carrd.co/",
    category: "Website & Hosting",
    description: "Simple, responsive one-page sites",
  },
  {
    title: "Framer",
    link: "https://www.framer.com/",
    category: "Website & Hosting",
    description: "Design and publish websites with no code",
  },
  {
    title: "Digital Ocean",
    link: "https://www.digitalocean.com/",
    category: "Website & Hosting",
    description: "Cloud infrastructure for developers",
  },
  {
    title: "Heroku",
    link: "https://www.heroku.com/",
    category: "Website & Hosting",
    description: "Cloud platform for deploying apps",
  },
  {
    title: "AWS",
    link: "https://aws.amazon.com/",
    category: "Website & Hosting",
    description: "Amazon's comprehensive cloud computing platform",
  },

  // Design Tools
  {
    title: "Figma",
    link: "https://www.figma.com/",
    category: "Design Tools",
    description: "Collaborative interface design tool",
  },
  {
    title: "Sketch",
    link: "https://www.sketch.com/",
    category: "Design Tools",
    description: "Digital design toolkit for Mac",
  },
  {
    title: "Adobe XD",
    link: "https://www.adobe.com/products/xd.html",
    category: "Design Tools",
    description: "UI/UX design and prototyping tool",
  },
  {
    title: "Canva",
    link: "https://canva.com/",
    category: "Design Tools",
    description: "Graphic design platform for non-designers",
  },
  {
    title: "Whimsical",
    link: "https://whimsical.com/",
    category: "Design Tools",
    description: "Flowcharts, wireframes, and mind maps",
  },
  {
    title: "Invision",
    link: "https://www.invisionapp.com/",
    category: "Design Tools",
    description: "Digital product design and prototyping",
  },
  {
    title: "Marvel",
    link: "https://marvelapp.com/",
    category: "Design Tools",
    description: "Design, prototype, and collaborate",
  },
  {
    title: "Looka",
    link: "https://looka.com/",
    category: "Design Tools",
    description: "AI-powered logo maker and brand kit",
  },
  {
    title: "Hatchful by Shopify",
    link: "https://hatchful.shopify.com/",
    category: "Design Tools",
    description: "Free logo maker for startups",
  },
  {
    title: "RemoveBg",
    link: "https://remove.bg/",
    category: "Design Tools",
    description: "Remove image backgrounds automatically",
  },

  // Stock Resources
  {
    title: "Unsplash",
    link: "https://unsplash.com/",
    category: "Stock Resources",
    description: "Free high-resolution stock photos",
  },
  {
    title: "Pexels",
    link: "https://www.pexels.com/",
    category: "Stock Resources",
    description: "Free stock photos and videos",
  },
  {
    title: "Pixabay",
    link: "https://pixabay.com/",
    category: "Stock Resources",
    description: "Free images and royalty-free stock",
  },
  {
    title: "Flaticon",
    link: "https://flaticon.com/",
    category: "Stock Resources",
    description: "Largest database of free icons",
  },
  {
    title: "Icons8",
    link: "https://icons8.com/",
    category: "Stock Resources",
    description: "Icons, illustrations, and photos",
  },
  {
    title: "TheNounProject",
    link: "https://thenounproject.com/",
    category: "Stock Resources",
    description: "Icons and photos for everything",
  },
  {
    title: "Undraw",
    link: "https://undraw.co/",
    category: "Stock Resources",
    description: "Open-source illustrations",
  },
  {
    title: "Blush",
    link: "https://blush.design/",
    category: "Stock Resources",
    description: "Customizable illustrations",
  },
  {
    title: "Lottie",
    link: "https://lottiefiles.com/",
    category: "Stock Resources",
    description: "Lightweight animations for web and apps",
  },

  // AI Tools
  {
    title: "ChatGPT",
    link: "https://chat.openai.com/",
    category: "AI Tools",
    description: "Advanced AI language model for various tasks",
  },
  {
    title: "Copy.ai",
    link: "https://www.copy.ai/",
    category: "AI Tools",
    description: "AI-powered copywriting assistant",
  },
  {
    title: "Jasper",
    link: "https://www.jasper.ai/",
    category: "AI Tools",
    description: "AI content creation platform",
  },
  {
    title: "Lumen5",
    link: "https://lumen5.com/",
    category: "AI Tools",
    description: "AI-powered video creation",
  },
  {
    title: "Captions",
    link: "https://www.captions.ai/",
    category: "AI Tools",
    description: "AI-generated video captions",
  },

  // Content & SEO
  {
    title: "Ahrefs",
    link: "https://ahrefs.com/",
    category: "Content & SEO",
    description: "SEO tools and resources",
  },
  {
    title: "Spyfu",
    link: "https://www.spyfu.com/",
    category: "Content & SEO",
    description: "Competitor keyword research",
  },
  {
    title: "Metatags",
    link: "https://metatags.io/",
    category: "Content & SEO",
    description: "Preview and generate meta tags",
  },
  {
    title: "Contentful",
    link: "https://www.contentful.com/",
    category: "Content & SEO",
    description: "Headless CMS platform",
  },
  {
    title: "Strapi",
    link: "https://strapi.io/",
    category: "Content & SEO",
    description: "Open-source headless CMS",
  },

  // Automation & Backend
  {
    title: "Zapier",
    link: "https://zapier.com/",
    category: "Automation & Backend",
    description: "Connect and automate your apps",
  },
  {
    title: "Make",
    link: "https://www.make.com/",
    category: "Automation & Backend",
    description: "Visual automation platform",
  },
  {
    title: "IFTTT",
    link: "https://ifttt.com/",
    category: "Automation & Backend",
    description: "Connect your apps and devices",
  },
  {
    title: "Airtable",
    link: "https://airtable.com/",
    category: "Automation & Backend",
    description: "Flexible database and collaboration tool",
  },
  {
    title: "Firebase",
    link: "https://firebase.google.com/",
    category: "Automation & Backend",
    description: "Google's app development platform",
  },
  {
    title: "Supabase",
    link: "https://supabase.com/",
    category: "Automation & Backend",
    description: "Open-source Firebase alternative",
  },

  // Payments
  {
    title: "Stripe",
    link: "https://stripe.com/",
    category: "Payments",
    description: "Online payment processing platform",
  },
  {
    title: "PayPal",
    link: "https://www.paypal.com/",
    category: "Payments",
    description: "Digital payment and money transfer service",
  },
  {
    title: "Square",
    link: "https://squareup.com/",
    category: "Payments",
    description: "Payment processing and business tools",
  },
  {
    title: "Dodo Payments",
    link: "https://app.dodopayments.com/",
    category: "Payments",
    description: "Simple payment solution for startups",
  },

  // Documentation
  {
    title: "Notion",
    link: "https://www.notion.so/",
    category: "Documentation",
    description: "All-in-one workspace for notes and docs",
  },
  {
    title: "Gitbook",
    link: "https://www.gitbook.com/",
    category: "Documentation",
    description: "Documentation platform for teams",
  },
  {
    title: "Docusaurus",
    link: "https://docusaurus.io/",
    category: "Documentation",
    description: "Open-source documentation website generator",
  },
  {
    title: "Readme",
    link: "https://readme.com/",
    category: "Documentation",
    description: "Beautiful documentation that converts users",
  },
  {
    title: "Scribe",
    link: "https://scribehow.com/",
    category: "Documentation",
    description: "Auto-generate step-by-step guides",
  },

  // Email & Newsletters
  {
    title: "MailChimp",
    link: "https://mailchimp.com/",
    category: "Email & Newsletters",
    description: "Email marketing and automation platform",
  },
  {
    title: "ConvertKit",
    link: "https://convertkit.com/",
    category: "Email & Newsletters",
    description: "Email marketing for creators",
  },
  {
    title: "Mailerlite",
    link: "https://www.mailerlite.com/",
    category: "Email & Newsletters",
    description: "Email marketing software for small businesses",
  },
  {
    title: "Substack",
    link: "https://substack.com/",
    category: "Email & Newsletters",
    description: "Newsletter platform for writers",
  },
  {
    title: "Buttondown",
    link: "https://buttondown.email/",
    category: "Email & Newsletters",
    description: "Simple newsletter tool for developers",
  },
  {
    title: "Postmark",
    link: "https://postmarkapp.com/",
    category: "Email & Newsletters",
    description: "Transactional email delivery service",
  },

  // CRM & Support
  {
    title: "HubSpot",
    link: "https://www.hubspot.com/",
    category: "CRM & Support",
    description: "CRM and marketing automation platform",
  },
  {
    title: "Intercom",
    link: "https://www.intercom.com/",
    category: "CRM & Support",
    description: "Customer messaging and support platform",
  },
  {
    title: "Zendesk",
    link: "https://www.zendesk.com/",
    category: "CRM & Support",
    description: "Customer service and support software",
  },
  {
    title: "Crisp",
    link: "https://crisp.chat/",
    category: "CRM & Support",
    description: "Customer messaging platform",
  },
  {
    title: "Groove",
    link: "https://www.groovehq.com/",
    category: "CRM & Support",
    description: "Simple helpdesk software",
  },

  // Analytics & Data
  {
    title: "Google Analytics",
    link: "https://analytics.google.com/",
    category: "Analytics & Data",
    description: "Web analytics and reporting",
  },
  {
    title: "Mixpanel",
    link: "https://mixpanel.com/",
    category: "Analytics & Data",
    description: "Product analytics for mobile and web",
  },
  {
    title: "Amplitude",
    link: "https://amplitude.com/",
    category: "Analytics & Data",
    description: "Product analytics and user behavior",
  },
  {
    title: "PostHog",
    link: "https://posthog.com/",
    category: "Analytics & Data",
    description: "Open-source product analytics",
  },
  {
    title: "Segment",
    link: "https://segment.com/",
    category: "Analytics & Data",
    description: "Customer data platform",
  },
  {
    title: "Hotjar",
    link: "https://www.hotjar.com/",
    category: "Analytics & Data",
    description: "Behavior analytics and user feedback",
  },
  {
    title: "Microsoft Clarity",
    link: "https://clarity.microsoft.com/",
    category: "Analytics & Data",
    description: "Free user behavior analytics",
  },
  {
    title: "Metabase",
    link: "https://www.metabase.com/",
    category: "Analytics & Data",
    description: "Open-source business intelligence",
  },

  // Marketing Tools
  {
    title: "Buffer",
    link: "https://buffer.com/",
    category: "Marketing Tools",
    description: "Social media management platform",
  },
  {
    title: "BuzzSumo",
    link: "https://buzzsumo.com/",
    category: "Marketing Tools",
    description: "Content research and monitoring tool",
  },
  {
    title: "Sumo",
    link: "https://sumo.com/",
    category: "Marketing Tools",
    description: "Email list growth and analytics",
  },
  {
    title: "Viral Loops",
    link: "https://www.viralloops.com/",
    category: "Marketing Tools",
    description: "Referral marketing platform",
  },

  // User Feedback
  {
    title: "Canny",
    link: "https://canny.io/",
    category: "User Feedback",
    description: "User feedback and feature request management",
  },
  {
    title: "Upvoty",
    link: "https://upvoty.com/",
    category: "User Feedback",
    description: "Customer feedback and roadmap tool",
  },
  {
    title: "Feedbear",
    link: "https://feedbear.com/",
    category: "User Feedback",
    description: "Collect and manage user feedback",
  },
  {
    title: "Testimonial",
    link: "https://testimonial.to/",
    category: "User Feedback",
    description: "Collect and display customer testimonials",
  },

  // User Engagement
  {
    title: "OneSignal",
    link: "https://onesignal.com/",
    category: "User Engagement",
    description: "Push notifications and messaging",
  },
  {
    title: "Customer.io",
    link: "https://customer.io/",
    category: "User Engagement",
    description: "Marketing automation for tech companies",
  },
  {
    title: "Optinmonster",
    link: "https://optinmonster.com/",
    category: "User Engagement",
    description: "Lead generation and conversion optimization",
  },
  {
    title: "Landbot",
    link: "https://landbot.io/",
    category: "User Engagement",
    description: "Conversational chatbot builder",
  },
  {
    title: "Twilio",
    link: "https://www.twilio.com/",
    category: "User Engagement",
    description: "Communication APIs for SMS, voice, and video",
  },

  // Team Management
  {
    title: "Slack",
    link: "https://slack.com/",
    category: "Team Management",
    description: "Team communication and collaboration",
  },
  {
    title: "Linear",
    link: "https://linear.app/",
    category: "Team Management",
    description: "Issue tracking for software teams",
  },
  {
    title: "ClickUp",
    link: "https://clickup.com/",
    category: "Team Management",
    description: "All-in-one productivity platform",
  },
  {
    title: "Asana",
    link: "https://asana.com/",
    category: "Team Management",
    description: "Project management and team collaboration",
  },
  {
    title: "Trello",
    link: "https://trello.com/",
    category: "Team Management",
    description: "Visual project management boards",
  },
  {
    title: "Calendly",
    link: "https://calendly.com/",
    category: "Team Management",
    description: "Meeting scheduling automation",
  },
  {
    title: "Loom",
    link: "https://www.loom.com/",
    category: "Team Management",
    description: "Video messaging for work",
  },

  // No-Code Tools
  {
    title: "Bubble",
    link: "https://bubble.io/",
    category: "No-Code Tools",
    description: "Visual programming platform for web apps",
  },
  {
    title: "Retool",
    link: "https://retool.com/",
    category: "No-Code Tools",
    description: "Build internal tools quickly",
  },
  {
    title: "Super",
    link: "https://super.so/",
    category: "No-Code Tools",
    description: "Turn Notion pages into websites",
  },

  // Monitoring & Logging
  {
    title: "Sentry",
    link: "https://sentry.io/",
    category: "Monitoring & Logging",
    description: "Error tracking and performance monitoring",
  },
  {
    title: "UptimeRobot",
    link: "https://uptimerobot.com/",
    category: "Monitoring & Logging",
    description: "Website monitoring and uptime tracking",
  },
  {
    title: "Datadog",
    link: "https://www.datadoghq.com/",
    category: "Monitoring & Logging",
    description: "Cloud monitoring and analytics platform",
  },
  {
    title: "Instabug",
    link: "https://instabug.com/",
    category: "Monitoring & Logging",
    description: "Bug reporting and user feedback for mobile apps",
  },

  // Miscellaneous Tools
  {
    title: "Linktree",
    link: "https://linktr.ee/",
    category: "Miscellaneous Tools",
    description: "Link-in-bio tool for social media",
  },
  {
    title: "Gumroad",
    link: "https://gumroad.com/",
    category: "Miscellaneous Tools",
    description: "Sell digital products directly to your audience",
  },
  {
    title: "Bitly",
    link: "https://bitly.com/",
    category: "Miscellaneous Tools",
    description: "URL shortener and link management",
  },
  {
    title: "Google Trends",
    link: "https://trends.google.com/",
    category: "Miscellaneous Tools",
    description: "Explore what the world is searching",
  },
  {
    title: "Similar Web",
    link: "https://www.similarweb.com/",
    category: "Miscellaneous Tools",
    description: "Website traffic and competitive analysis",
  },
  {
    title: "Teachable",
    link: "https://teachable.com/",
    category: "Miscellaneous Tools",
    description: "Create and sell online courses",
  },

  // Startup Programs & Credits
  {
    title: "AWS Activate",
    link: "https://aws.amazon.com/activate/",
    category: "Startup Programs & Credits",
    description: "AWS credits and support for startups",
  },
  {
    title: "Google Cloud for Startups",
    link: "https://cloud.google.com/developers/startups/",
    category: "Startup Programs & Credits",
    description: "Cloud credits and technical support",
  },
  {
    title: "Microsoft for Startups",
    link: "https://startups.microsoft.com/",
    category: "Startup Programs & Credits",
    description: "Azure credits and go-to-market support",
  },
  {
    title: "DigitalOcean Hatch",
    link: "https://www.digitalocean.com/hatch/",
    category: "Startup Programs & Credits",
    description: "Cloud credits for early-stage startups",
  },
  {
    title: "HubSpot for Startups",
    link: "https://www.hubspot.com/startups",
    category: "Startup Programs & Credits",
    description: "CRM and marketing tools with discounts",
  },
  {
    title: "Stripe Atlas",
    link: "https://stripe.com/atlas",
    category: "Startup Programs & Credits",
    description: "Incorporate your company and get started",
  },

  // Places to Share & Promote
  {
    title: "Product Hunt Launch",
    link: "https://www.producthunt.com/",
    category: "Places to Share & Promote",
    description: "Launch your product to the tech community",
  },
  {
    title: "Hacker News Submit",
    link: "https://news.ycombinator.com/submit",
    category: "Places to Share & Promote",
    description: "Share on the tech community's favorite site",
  },
  {
    title: "Reddit Communities",
    link: "https://www.reddit.com/",
    category: "Places to Share & Promote",
    description: "Share in relevant subreddits",
  },
  {
    title: "DEV Community",
    link: "https://dev.to/",
    category: "Places to Share & Promote",
    description: "Community for software developers",
  },
  {
    title: "Indie Hackers Share",
    link: "https://www.indiehackers.com/",
    category: "Places to Share & Promote",
    description: "Share your startup journey with indie founders",
  },
  {
    title: "BetaPage Submit",
    link: "https://betapage.co/",
    category: "Places to Share & Promote",
    description: "List your beta product for early users",
  },
  {
    title: "AlternativeTo",
    link: "https://alternativeto.net/",
    category: "Places to Share & Promote",
    description: "List your product as an alternative",
  },
  {
    title: "SaaSHub",
    link: "https://www.saashub.com/",
    category: "Places to Share & Promote",
    description: "Discover and share SaaS products",
  },
];

export const categories = Array.from(
  new Set(resources.map((r) => r.category)),
).sort();
