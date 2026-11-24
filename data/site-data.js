window.PORTFOLIO_CONTENT = {
  profile: {
    initials: "SF",
    name: "Yung-Sian (Sammy) Fang",
    shortName: "Sammy Fang",
    pronouns: "He/Him",
    email: "yfang097@ucr.edu",
    location: "California, United States",
    github: "https://github.com/SammyFang",
    linkedin: "https://www.linkedin.com/in/yung-sian-fang/",
    orcid: "https://orcid.org/0009-0007-9786-2684",
    scholar: "https://scholar.google.com/citations?user=VqA6DO8AAAAJ&hl=en",
    image: "./assets/ucr-profile-768.webp",
    imageSrcSet: [
      { src: "./assets/ucr-profile-480.webp", width: 480 },
      { src: "./assets/ucr-profile-768.webp", width: 768 },
      { src: "./assets/ucr-profile-960.webp", width: 960 },
    ],
    imageBackdrop: "./assets/ucr-profile-backdrop.webp",
    resumePdf: "./assets/yung-sian-fang-public-resume.pdf?v=527c14078045",
  },
  locales: {
    en: {
      meta: {
        lang: "en",
        title: "Sammy",
        description:
          "Personal website for Yung-Sian (Sammy) Fang, connecting strategy, supply chain analytics, AI systems, research, and technical community leadership.",
      },
      brand: { lead: "Sammy", accent: "Fang" },
      displayName: "Yung-Sian (Sammy) Fang",
      nav: {
        home: "Home",
        resume: "About",
        portfolio: "Work",
        research: "Research",
        press: "Engagement",
        media: "Media",
        contact: "Contact",
      },
      ui: {
        languageLabel: "中文",
        backToTop: "Back to top",
        contactMe: "Contact",
        invite: "Invite Sammy",
        viewWork: "Selected work",
        requestResume: "View resume PDF",
        details: "Details",
        earlierExperience: "Research and earlier experience",
        selected: "Selected",
        tools: "Technologies",
        highlights: "Highlights",
        organization: "Organization",
        period: "Period",
        location: "Location",
      },
      hero: {
        eyebrow: "Operations · Analytics · AI-Assisted Decisions",
        title: "Connecting engineering and management research to improve operational decisions.",
        lede:
          "I use supply chain analytics, workflow automation, and applied AI to help teams spot operational risks, choose a next step, and follow through.",
        tags: [
          "#SupplyChainAnalytics",
          "#Automation",
          "#DecisionSupport",
          "#AppliedResearch"
        ],
      },
      about: {
        eyebrow: "About",
        title: "A cross-functional operator with a technical research foundation.",
        paragraphs: [
          "I’m pursuing an MBA at UC Riverside with concentrations in operations and supply chain management and accounting.",
          "With a background in computer science, I’ve built automation and analytics tools for engineering, procurement, logistics, and inventory at HPE and d-Matrix.",
          "At UCR’s INSPIRE Lab and BEDLab, I study how simulation and AI can support decisions under uncertainty. I also use customer interviews to test product and commercialization assumptions."
        ],
        focus: [
          {
            title: "Strategy and operations",
            description:
              "Sourcing strategy, inventory planning, procurement execution, and decision-ready reporting.",
          },
          {
            title: "Systems and automation",
            description:
              "Python, SQL, Shell Script, Perl, SAP/ERP workflows, QA automation, and reusable data tooling.",
          },
          {
            title: "AI and analytics",
            description:
              "Applied AI, event-study pipelines, supply chain simulation, and multimodal emotion analysis.",
          },
          {
            title: "Community leadership",
            description:
              "GDG organizer, UCR student leadership, I-Corps customer discovery, and technical workshops.",
          },
        ],
      },
      featured: {
        eyebrow: "Selected work",
        title: "Representative projects and public-facing work.",
        items: [
          {
            title: "DuckCard",
            type: "Product · Field testing",
            description:
              "After 50+ prospective customer interviews through UCLA NSF I-Corps, we used $2,500 in UCR INNOVAR support for 15 more interviews and focused DuckCard on post-event sales follow-up. We presented at the INNOVAR final pitch and Regional Fast Pitch, demoed in person at SBIR/STTR Con, and filed U.S. trademark and provisional patent applications.",
            tags: ["Customer Discovery", "Commercialization", "IP Strategy"],
            href: "https://duckcard.app/",
            actionLabel: "Explore DuckCard",
            image: "./assets/duckcard-sbir-sttrcon-booth-2026.png",
            imagePosition: "center 48%",
          },
          {
            title: "Ambassador Hub",
            type: "Operations · Workflow design",
            description:
              "Interviewed UC Riverside graduate ambassadors and staff, then designed, piloted, and launched a Google Cloud tool that brings event approvals, shift sign-ups, and hours review into one workflow.",
            tags: ["Workflow Automation", "Google Cloud"],
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7530839605772943360/",
            actionLabel: "View project recap",
          },
          {
            title: "1099Ready Lite",
            type: "FinOps tool · Vendor readiness",
            description:
              "Flags incomplete W-9 records for paid vendors and queues follow-up before 1099 review. A 100-vendor model estimated a drop in initial review time from 435 to 75 minutes.",
            tags: ["FinOps", "Tax Readiness", "Exception Queue"],
            href: "https://ready-lite.web.app/",
            actionLabel: "Open web app",
            image: "./assets/projects/1099ready-lite-workflow-impact.jpg",
            imageFit: "contain",
          },
          {
            title: "Rare Flora",
            type: "Commercialization · Market research",
            description:
              "At UC Riverside’s Student Innovation Sprint, I delivered a market scan, commercial brief, and workbook comparing two paths for post-harvest biomass: recovery and disposal. The workbook helps Rare Flora prioritize which paths and market assumptions to test in its first pilot.",
            tags: ["Market Research", "Pilot Planning"],
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7530838686360440832/",
            actionLabel: "View project recap",
          },
          {
            title: "AI-Assisted Supply Chain Optimization System",
            type: "Supply chain · AI decision support",
            description:
              "Combines six types of operational data and eight risk rules to flag supply chain exceptions and draft notes for human review. The simulation estimated an 83.3% reduction in decision review time.",
            tags: ["Supply Chain", "AI Operations", "Risk Monitoring"],
            href: "https://github.com/SammyFang/MGT267watchdog",
            actionLabel: "View GitHub",
            image: "./assets/research-pipeline.svg",
          },
          {
            title: "Amigo Friends",
            type: "Venture · Customer discovery",
            description:
              "Used customer interviews in the 2026 NSF I-Corps Hub West ZAP program to test who might adopt an AI companion product, why they would return, and how to position it.",
            tags: ["NSF I-Corps Hub West ZAP", "Customer Discovery"],
            image: "./assets/amigo-friends-mascot.png",
            imageFit: "contain",
          },
          {
            title: "SurplusLink",
            type: "AI product · Social impact",
            description:
              "Team prototype using AI to match available resources with community needs.",
            tags: ["AI Product", "Product Strategy", "Social Impact"],
            href: "https://lovable.dev/projects/3f59c854-2145-4da4-9d57-3e8e92f01e20",
            actionLabel: "Open prototype",
            previewTitle: "Lovable",
            previewCaption: "lovable.dev",
            image: "./assets/research-intelligence.svg",
          },
          {
            title: "HireDuck",
            type: "Career AI · Product",
            description:
              "AI job-search workspace for tailored resumes, job matching, version tracking, and application strategy.",
            tags: ["Career Tools", "Workflow Design", "AI Product"],
            href: "https://duckcard.app/HireDuck",
            previewTitle: "HireDuck",
            previewCaption: "duckcard.app",
            image: "./assets/research-pipeline.svg",
          },
          {
            title: "Supply Chain Kernel",
            type: "Supply chain · Simulation",
            description:
              "Compares service levels and tail risk across inventory policies with Monte Carlo simulation. The public demo runs on CPU, with Triton GPU benchmarks run separately.",
            tags: ["Triton", "CUDA", "Monte Carlo"],
            href: "https://github.com/SammyFang/scm-kernel",
            image: "./assets/research-battery.svg",
          },
        ],
      },
      experience: {
        eyebrow: "Experience",
        title: "Professional experience, briefly.",
        items: [
          {
            "title": "Supply Chain Analyst",
            "organization": "d-Matrix",
            "period": "2026",
            "employment": "Intern",
            "department": "Operations and supply chain",
            "summary": "Helped roll out a centralized shipment workflow from data standardization through user acceptance testing and training. Built SQL, API, and Power BI tools to track shipment exceptions and freight spend, and piloted computer-vision serial capture for inventory counts.",
            "tools": [
              "SQL & APIs",
              "Power BI",
              "Process Improvement"
            ]
          },
          {
            "title": "Procurement Operations Analyst",
            "organization": "Hewlett Packard Enterprise",
            "period": "2024 - 2025",
            "employment": "Full-time",
            "department": "Procurement operations",
            "summary": "Planned procurement for high-value server components using market, demand, and cost data. Coordinated new-product introduction with APAC suppliers and manufacturing partners, maintained SAP master data, and automated recurring work.",
            "tools": [
              "Procurement",
              "Supply Planning"
            ]
          },
          {
            "title": "Software Engineer (Systems)",
            "organization": "Hewlett Packard Enterprise",
            "period": "2023 - 2024",
            "employment": "Intern",
            "department": "Systems engineering",
            "summary": "Automated firmware version checks, visual validation, and QA data handoffs with Python, Shell, and Perl so engineering and manufacturing teams could follow a consistent validation process.",
            "tools": [
              "Automation",
              "Data Workflows"
            ]
          },
          {
            "title": "Graduate Researcher",
            "organization": "INSPIRE Lab, UC Riverside",
            "period": "2025 – Present",
            "department": "Operations research",
            "summary": "Contribute to research on the value of high-fidelity simulation in tail-risk inventory optimization. Develop a GPU-enabled simulation and optimization framework to evaluate inventory policies under volatile demand, uncertain lead times, and extreme risk scenarios.",
            "tools": [
              "Simulation",
              "Optimization",
              "GPU Computing"
            ]
          },
          {
            "title": "Research Assistant",
            "organization": "Behavioral Economics & Decision-making Lab, UC Riverside",
            "period": "2025 – Present",
            "department": "Management research",
            "summary": "Research interests include AI-assisted managerial decision-making and behavioral biases in operational settings, using experimental and quantitative methods with Python, R, and SQL.",
            "tools": [
              "Python",
              "R",
              "SQL"
            ]
          },
          {
            "title": "Research Assistant",
            "organization": "Human Resource & AI Application Lab, NTNU",
            "period": "2023 - 2024",
            "department": "Applied AI research",
            "summary": "Applied AI to education and human resources research. For an NSTC-funded project, built facial and vocal emotion-analysis models and supported experiments on instructor feedback and learner engagement.",
            "tools": [
              "Applied AI",
              "Research Coordination"
            ]
          },
          {
            "title": "Teaching Assistant",
            "organization": "National Taiwan Normal University",
            "period": "2023 - 2024",
            "summary": "Supported human resources courses and coordinated six industry talks on HR technology, digital learning, and AI in talent development."
          },
          {
            "title": "DevOps Engineer",
            "organization": "Pojen General Hospital",
            "period": "2023",
            "employment": "Part-time",
            "department": "IT operations",
            "summary": "Developed internal data tools and supported IT operations.",
            "tools": [
              "Data Tools",
              "IT Operations"
            ]
          },
          {
            "title": "R&D Engineer (HSM)",
            "organization": "Provision Information Co., Ltd.",
            "period": "2021 - 2022",
            "employment": "Intern",
            "department": "Security research",
            "summary": "Contributed to security tooling and technical documentation for product research.",
            "tools": [
              "Security Research",
              "Technical Documentation"
            ]
          }
        ],
      },
      projects: {
        eyebrow: "Projects",
        title: "A curated project library, not a wall of text.",
        note:
          "Selected projects are kept concise, with room for future case studies.",
        items: [
          {
            title: "Manufacturing Supply Chain Optimization",
            type: "Operations · HPE",
            description:
              "Connected procurement records, supply planning, and supplier coordination to support material availability and resolve execution barriers.",
            tags: ["Procurement", "Operations", "ERP"],
          },
          {
            title: "Intelligent Version Tracking and Data Automation",
            type: "Automation · HPE",
            description:
              "Automated firmware and software version checks with Python and test-data transfers with Shell and Perl, making recurring engineering review and reporting more consistent.",
            tags: ["Python", "Shell Script", "Perl"],
          },
          {
            title: "AI-EMO Expert System",
            type: "AI · Emotion analysis",
            description:
              "A multimodal emotion recognition system combining speech and image analysis with Dockerized deployment.",
            tags: ["TensorFlow", "OpenCV", "Docker"],
            href: "https://github.com/SammyFang/Multimodal-Emotion-Analysis-AI-EMO-Expert-system-",
            image: "./assets/media-coverage.svg",
          },
          {
            title: "Event Window Stock Return Pipeline",
            type: "Research tool · Finance analytics",
            description:
              "Python, Pandas, and Plotly web pipeline for event-window return analysis and visualization.",
            tags: ["Python", "Pandas", "Plotly"],
            href: "https://github.com/SammyFang/stock-analysis-app",
            actionLabel: "View GitHub",
            image: "./assets/research-pipeline.svg",
          },
          {
            title: "LSTM Stock Prediction for 0050 and TWII",
            type: "Machine learning · Financial time series",
            description:
              "Python and Keras LSTM models for Taiwan 50 ETF and Taiwan Weighted Index closing-price prediction using historical CSV data and MinMax scaling.",
            tags: ["Python", "Keras", "LSTM", "Time Series"],
            href: "https://github.com/SammyFang/ANN_Pratice_stockprediction-0050-Market-",
            actionLabel: "View GitHub",
          },
          {
            title: "Ethereum-Based Smart Contract Voting System",
            type: "Blockchain · Voting system",
            description:
              "A Solidity voting PoC on Ethereum with candidate management, MetaMask interaction, Web3.js integration, and Chart.js vote visualization.",
            tags: ["Solidity", "Ethereum", "Web3.js", "Chart.js"],
            href: "https://github.com/SammyFang/Ethereum-Voting-Smart-Contract",
            actionLabel: "View GitHub",
          },
          {
            title: "Heterogeneous Data-Aware Federated Learning for IDS",
            type: "AIoT · Information security",
            description:
              "A privacy-preserving federated learning IDS framework using meta-sampling, dynamic clustering, and FedProx for class imbalance and non-IID data.",
            tags: ["Python", "Federated Learning", "FedProx", "IDS"],
            href: "https://github.com/SammyFang/AIoT-Federated-Learning-IDS",
            actionLabel: "View GitHub",
          },
          {
            title: "Dcard Epidemic Keyword Crawler",
            type: "Public information · Data pipeline",
            description:
              "A Python crawler that monitored COVID-related campus posts and delivered real-time LINE notifications.",
            tags: ["Python", "SQL", "LINE Notify"],
            href: "https://github.com/SammyFang/Dcard-Epidemic-Keyword-Crawler-Tool",
            image: "./assets/media-coverage.svg",
          },
          {
            title: "Real-Time Vehicle Counting Recognition",
            type: "Computer vision · Campus operations",
            description:
              "An OpenCV project for simulated motorcycle traffic counting and parking availability exploration.",
            tags: ["Computer Vision", "OpenCV", "Python"],
            href: "https://github.com/SammyFang/Real-Time-Vehicle-Counting-Recognition",
            image: "./assets/research-intelligence.svg",
          },
        ],
      },
      research: {
        eyebrow: "Research",
        title: "Research, publications, and working papers.",
        publications: [
          {
            "title": "Dynamic Pricing and Markdown Optimization under Demand Uncertainty via Deep Learning and Quantum Search",
            "venue": "2026 INFORMS Revenue Management and Pricing Section Conference · University of Michigan",
            "year": "2026",
            "note": "Conference presentation · Jul 22, 2026",
            "href": "https://sammyfang.tw/dynamic-pricing-impact/",
            "actionLabel": "Show publication",
            "image": "./assets/research-pipeline.svg",
            "description": "Presented a framework integrating recurrent quantile forecasting, risk-aware mean-CVaR optimization, and QUBO-assisted search. Using the M5 dataset and 120 matched item-store-origin decisions, it identified a 9.48% model-based profit lift over historical pricing. QUBO-assisted search matched classical and exhaustive benchmarks at displayed precision; quantum-hardware and scaling advantages remain to be established."
          },
          {
            "title": "AI-Assisted Operations Intelligence in Supply Chain Decision Work: A Simulation-Based Study of Visibility, Risk Detection, and Human-AI Collaboration",
            "venue": "FUTURES 2026 · Luxembourg School of Business",
            "year": "2026",
            "note": "Extended abstract · ISEC Lisboa · p. 133",
            "href": "https://futures.researchchair.org/conference-proceedings/download#page=133",
            "actionLabel": "Read the abstract",
            "description": "Simulated how AI consolidates supply chain data and flags risks for human review. Reviewed one manuscript for Track 4, AI Ethical Frameworks."
          },
          {
            "title": "AI Reporting and Human Review",
            "venue": "Happy Research Hour · UC Riverside",
            "year": "2026",
            "note": "Research talk · Nov 13, 2026",
            "href": "https://events.ucr.edu/event/happy-research-hour-969",
            "actionLabel": "View event",
            "description": "Reanalyzed archived outputs from four AI models on an income-reporting task and proposed testing whether showing source figures helps people correct AI drafts."
          },
          {
            "title": "AI-Assisted Supply Chain Monitoring for Operations Decision Support: A Simulation-Based Study on Visibility, Risk Detection, and Benchmark Performance",
            "venue": "2026 STEM-Humanities Early Career Scientist Symposium · UC Riverside Postdoctoral Association",
            "year": "2026",
            "note": "Poster presentation · Jun 17, 2026",
            "href": "https://rpa.ucr.edu/page/Symposium-2026/",
            "actionLabel": "View symposium",
            "image": "./assets/stem-humanities-supply-chain-symposium-2026-960.webp",
            "imageLoading": "eager",
            "imagePosition": "center 38%",
            "description": "Simulation-based AI monitoring that turns fragmented procurement, inventory, production, logistics, and financial signals into structured visibility, transparent risk alerts, and reviewable decision notes."
          },
          {
            "title": "NuclearGuard AI: Agent-Assisted Radiation Anomaly Detection and Operator Decision Support Using Gamma-Ray Spectral Data",
            "venue": "UCR AI Graduate Research Brown Bag Series",
            "year": "2026",
            "note": "Research presentation · eScholarship · May 2026",
            "href": "https://escholarship.org/uc/item/0c67f27h",
            "actionLabel": "Show publication",
            "image": "./assets/research-intelligence.svg",
            "description": "Agent-assisted dashboard using public gamma-ray spectra for anomaly scoring, spatial risk visualization, and operator decision support."
          },
          {
            "title": "Quantum-Assisted Candidate Selection for High-Energy Lithium Battery Materials Using the Materials Project Database",
            "venue": "University of California, Riverside Graduate Research Symposium",
            "year": "2026",
            "note": "Poster presentation · 1st Place",
            "href": "https://graduate.ucr.edu/gradsymposium#best-presentation-awards-2026",
            "actionLabel": "View award page",
            "image": "./assets/research-battery.svg"
          },
          {
            "title": "Web-Based Pipeline for Standardized Event Window Stock Return Analysis and Research-Ready Visualization",
            "venue": "Open Research and Creative Activities Forum",
            "year": "2026",
            "note": "Publication · DOI: 10.5070/J9.63078",
            "href": "https://doi.org/10.5070/J9.63078",
            "image": "./assets/research-pipeline.svg",
            "description": "Standardizes daily stock-return analysis and visualization across the five trading days on each side of an event."
          },
          {
            "title": "A Market-Oriented Business Model and AI System Design for Multilingual Business Card Intelligence",
            "venue": "Open Research and Creative Activities Forum",
            "year": "2026",
            "note": "Publication · DOI: 10.5070/J9.63090",
            "href": "https://doi.org/10.5070/J9.63090",
            "image": "./assets/research-intelligence.svg",
            "description": "Proposes a workflow for multilingual contact extraction, human review, and follow-up after events."
          },
          {
            "title": "Progressive Behavior Patterns of Online Discussion at Different Circles of Self-Regulated Learning",
            "venue": "International Conference on Computers in Education",
            "year": "2024",
            "note": "Publication · DOI: 10.58459/icce.2024.4863",
            "href": "https://doi.org/10.58459/icce.2024.4863",
            "image": "./assets/research-pipeline.svg"
          },
          {
            "title": "Security Encryption Methods and Key Generation: Based on Biometric Authentication Passkey and Quantum Logic",
            "venue": "TANET 2023 Conference: Next-Generation AI and Digital Resilience",
            "year": "2023",
            "note": "Conference paper · Nov 2023",
            "image": "./assets/research-intelligence.svg",
            "description": "Biometric authentication passkey, quantum logic, secure encryption, and key generation."
          },
          {
            "title": "An Intelligent Emotion Feedback Assistant: Using Teachers' Dynamic Expressions and Voices Enabled with Deep Learning for Emotion Analysis and Score Evaluation",
            "venue": "TANET 2023 Conference: Next-Generation AI and Digital Resilience",
            "year": "2023",
            "note": "Conference paper · Nov 2023",
            "image": "./assets/media-coverage.svg",
            "description": "Digital education, deep learning, computer vision, voiceprint analysis, and affective computing."
          }
        ],
        workingPapers: [
          "Computational Primitives for High-Fidelity Supply Chain Simulation: A GPU Kernel Reformulation Using Triton",
          "Anonymous Reporting with Verifiable Audit Trails and AI-Assisted Incident Triage",
          "Brain-Inspired EEG Motor Imagery Decoding Using Spiking Neural Networks and Hybrid Quantum Classifiers",
        ],
      },
      speaking: {
        eyebrow: "Talks and workshops",
        title: "Prepared for talks, workshops, and public programs.",
        intro:
          "Invited talks, workshops, conference sessions, and selected public programs.",
        items: [
          {
            title: "Cutie Hack Industry Panel",
            role: "Invited Panelist",
            host: "ACM at UC Riverside",
            year: "2026",
            href: "https://cutiehack.com/",
            actionLabel: "View event",
            description:
              "Discussed hardware and operating-cost trade-offs when scaling AI, and how software skills carry across engineering and business.",
          },
          {
            title: "Introduction to Technical Project Management",
            role: "Invited Talk",
            host: "Association for Information Systems at UC Riverside",
            year: "2026",
            image: "./assets/pdf-events/intro-technical-project-management-flyer.jpg",
            imageFit: "contain",
            imagePosition: "center center",
            description:
              "Technical project framing, execution rhythm, stakeholder communication, and closeout.",
            topics: ["Project framing", "Technical execution", "Stakeholder communication"],
          },
          {
            title: "Becoming the CEO of Your Life",
            role: "Alumni Talk",
            host: "Department of Computer Science and Information Engineering, National Dong Hwa University",
            year: "2026",
            image: "./assets/pdf-events/ndhu-csie-alumni-talk-2026.jpg",
            imageFit: "contain",
            imagePosition: "center center",
            description:
              "Alumni talk on moving from computer science training into research, industry practice, systems thinking, and business exploration.",
            topics: ["Career exploration", "Research to industry", "Systems thinking"],
          },
          {
            title: "Excel for Data-Driven Supply Chain Decision-Making",
            role: "Workshop Leader",
            host: "Supply Chain Society at UC Riverside",
            year: "2026",
            description:
              "Hands-on workshop on using spreadsheets to organize assumptions, compare scenarios, and support supply chain decisions.",
            topics: ["Excel", "Supply chain analytics", "Decision support"],
          },
          {
            title: "Interview Practice Workshop",
            role: "Workshop Leader",
            host: "Supply Chain Society at UC Riverside",
            year: "2026",
            image: "./assets/pdf-events/ucr-interview-workshop-session.jpg",
            description:
              "Interview preparation, response structure, and concise project-experience examples.",
            topics: ["Interview practice", "Career communication", "Behavioral questions"],
          },
          {
            title: "Web Page Verification and Security Practices",
            role: "Invited Technical Lecture",
            host: "Google Developer Student Club, National Taiwan Normal University",
            year: "2024",
            image: "./assets/pdf-events/gdsc-ntnu-security-workshop-session.jpg",
            description:
              "Technical session covering PKI, passwordless authentication, OTP/SSO, and security tool demonstrations.",
            topics: ["PKI", "FIDO", "OTP", "SSO", "Nessus/OpenVAS"],
          },
          {
            title: "Machine Learning and Computer Vision with TensorFlow and MediaPipe",
            role: "Workshop Speaker",
            host: "Google Developer Student Clubs",
            year: "2024",
            mediaLabel: "Workshop record",
            mediaTitle: "Machine Learning and Computer Vision",
            description:
              "TensorFlow and MediaPipe workshop for computer vision demos and classroom exercises.",
            topics: ["TensorFlow", "MediaPipe", "Computer vision", "Hands-on learning"],
          },
        ],
      },
      leadership: {
        eyebrow: "Community and leadership",
        title: "Technical community, entrepreneurship, and student leadership.",
        items: [
          {
            "title": "Co-Founder / President",
            "organization": "Google Developer Groups on Campus, UC Riverside",
            "period": "2026",
            "category": "Developer community",
            "href": "https://gdg.community.dev/gdg-on-campus-university-of-california-riverside-riverside-united-states/",
            "actionLabel": "View chapter",
            "previewTitle": "GDG at UCR",
            "previewCaption": "gdg.community.dev",
            "logo": "./assets/gdg-logo.svg",
            "logoAlt": "Google Developer Groups",
            "description": "Co-founded the chapter and organized hands-on AI and computer vision workshops for students across disciplines.",
            "metrics": [
              "Community building",
              "Technical workshops"
            ]
          },
          {
            "title": "Student Leadership",
            "organization": "UC Riverside / AGSM Communities",
            "period": "2025 - 2026",
            "category": "Student leadership",
            "variant": "ucr",
            "description": "Helped run the AI Tech Venture Challenge and coordinated career programming, including a DHL Supply Chain recruiting event.",
            "affiliations": [
              {
                "name": "Product Club at UCR",
                "area": "Operations Executive",
                "href": "https://highlanderlink.ucr.edu/organization/productatucr"
              },
              {
                "name": "Supply Chain Society",
                "area": "VP of Internal Communications",
                "href": "https://linktr.ee/scs.ucr"
              },
              {
                "name": "AGSM Student Association",
                "area": "Entrepreneurial Leadership Team Lead",
                "href": "https://business.ucr.edu/graduate/student-association"
              }
            ]
          },
          {
            "title": "Vice-Chief of Internal Affairs",
            "organization": "AGSM Graduate Student Ambassadors",
            "period": "2026 - present",
            "description": "Coordinated ambassador staffing and recruitment, and represented the program at admissions and alumni events."
          },
          {
            "title": "President",
            "organization": "Taiwanese Graduate Student Association at UC Riverside",
            "period": "2025 - present",
            "description": "Reactivated the association, organized welcome events and joint programs with UTSA, and took part in regional exchanges with student associations.",
            "href": "https://www.ucrtgsa.org/"
          },
          {
            "title": "Core Team Member",
            "organization": "HPE Early Career Network",
            "period": "2024 - 2025",
            "description": "Helped structure early-career programming, booth engagement, and cross-functional professional development."
          },
          {
            "title": "Event Organizer",
            "organization": "GDG Cloud Taipei",
            "description": "Organized technical community events.",
            "href": "https://gdg.community.dev/gdg-cloud-taipei/"
          },
          {
            "title": "Core Team Member",
            "organization": "GDSC NTNU",
            "description": "Supported technical workshops at National Taiwan Normal University.",
            "href": "https://gdg.community.dev/gdg-on-campus-national-taiwan-normal-university-taipei-taiwan/"
          },
          {
            "title": "Core Team Member",
            "organization": "GDSC NDHU",
            "description": "Supported technical workshops at National Dong Hwa University.",
            "href": "https://gdsc.ndhu.dev/p/about.html"
          }
        ],
      },
      engagementGallery: {
        "title": "Event photos",
        "slides": [
          {
            "title": "UC Riverside Happy Research Hour, 2026",
            "alt": "Sammy Fang holding a microphone and presenting a slide to the audience at UC Riverside Happy Research Hour.",
            "src": "./assets/engagement/happy-research-hour-2026.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7529118261704216576/",
            "width": 1706,
            "height": 960
          },
          {
            "title": "AWS Summit Taipei 2024",
            "alt": "Sammy Fang standing in front of the AWS Summit Taipei welcome sign.",
            "src": "./assets/engagement/aws-summit-taipei-2024.webp",
            "href": "https://www.linkedin.com/posts/yung-sian-fang_aws-amazon-ai-ugcPost-7222186040818647040-hKas/",
            "width": 1152,
            "height": 1536
          },
          {
            "title": "COMPUTEX Taipei exhibition, 2024",
            "alt": "Sammy Fang and another attendee at the Cooler Master booth at COMPUTEX Taipei.",
            "src": "./assets/engagement/computex-taipei-2024.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7205240294345170944/",
            "width": 2048,
            "height": 1536
          },
          {
            "title": "Amazon fulfillment operations visit, 2025",
            "alt": "Sammy Fang wearing an orange safety vest beside warehouse racks during the Amazon visit.",
            "src": "./assets/engagement/amazon-fulfillment-visit-2025.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7392126631471108096/",
            "width": 1152,
            "height": 1536
          },
          {
            "title": "Cutie Hack industry panel, 2026",
            "alt": "Sammy Fang speaking at the Cutie Hack industry panel while seated alongside other panelists.",
            "src": "./assets/engagement/cutie-hack-panel-2026.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7530841301399949312/",
            "width": 1108,
            "height": 1477
          }
        ]
      },
      media: {
        eyebrow: "Media and features",
        title: "Coverage and public profiles.",
        items: [
          {
            title: "'Something Students Have Been Waiting For'",
            source: "UCR School of Business",
            year: "2026",
            href: "https://business.ucr.edu/news/2026/05/27/something-students-have-been-waiting",
            mediaLabel: "GDG at UCR",
            description:
              "School of Business feature on the launch of GDG at UCR, its kickoff momentum, and a student community open to coders and noncoders.",
          },
          {
            title: "Riverside County Fast Pitch regional recognition",
            source: "Riverside County Office of Economic Development",
            year: "2026",
            href: "https://www.linkedin.com/posts/rivcoed_rivcoed-rivconow-rivcoinnovation-activity-7452781398563921920-VP1X?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADKWI-UBz3qmdXAAGqS9DmdZapMryZ9UFJ0",
            description:
              "LinkedIn post featuring GoGoDuck among regional Fast Pitch startups and noting second-place advancement to the county finale.",
          },
          {
            title: "AI face recognition technology for teaching support",
            source: "National Taiwan Normal University / CNA coverage",
            year: "2024",
            href: "https://www.cna.com.tw/postwrite/chi/327041",
            image: "./assets/media-coverage.svg",
            description:
              "Industry-academia coverage of AI emotion recognition in education.",
          },
          {
            title: "Graduate Student Ambassador Profile",
            source: "A. Gary Anderson Graduate School of Management",
            year: "2026",
            href: "https://business.ucr.edu/graduate/ambassadors#yung-sian-fang-pmba-taiwan-yfa",
            description:
              "Official school profile and graduate ambassador leadership directory.",
          },
          {
            title: "UCR Graduate Research Symposium recognition",
            source: "University of California, Riverside",
            year: "2026",
            href: "https://graduate.ucr.edu/gradsymposium#best-presentation-awards-2026",
            image: "./assets/research-battery.svg",
            description:
              "Recognition for quantum-assisted battery material screening research.",
          },
          {
            title: "NDHU Student Association recognized at MOE showcase",
            source: "National Dong Hwa University",
            year: "2021",
            href: "https://www.ndhu.edu.tw/p/404-1000-179497.php?Lang=zh-tw",
            mediaLabel: "Student Leadership",
            description:
              "University coverage of the NDHU Student Association’s team award at the national showcase.",
          },
        ],
      },
      education: {
        eyebrow: "Education",
        title: "Education, awards, certifications, and affiliations.",
        schools: [
          {
            degree: "MBA, Operations and Supply Chain Management and Accounting",
            school: "University of California, Riverside - A. Gary Anderson Graduate School of Management",
            period: "Sep 2025 - Jun 2027",
            description:
              "Studies operations strategy, supply chain analytics, and accounting controls through applied research and projects.",
          },
          {
            degree: "MS, Computer Science and Information Engineering",
            school: "National Dong Hwa University",
            period: "Sep 2022 - Jun 2024",
            description:
              "Master's thesis: Quantum Logic-Enhanced Biometric Passkey Authentication for Secure Encryption and Key Generation. Implemented key generation and security evaluation with Qiskit, PyCryptodome, AES-GCM/RSA-OAEP, and NIST SP 800-22.",
          },
          {
            degree: "BS, Computer Science and Information Engineering",
            school: "National Dong Hwa University",
            period: "Sep 2018 - Jun 2022",
            description:
              "Capstone on autonomous delivery and cloud-based data integration using Arduino, RFID, ESP32-CAM, NEO-7M GPS, PHP, and SQL.",
          },
        ],
        awards: [
          {
            title: "Innovation Catalyst",
            issuer: "AGSM Graduate Ambassadors, UC Riverside School of Business",
            year: "2026",
            detail: "Interviewed ambassadors and staff, then developed and launched Ambassador Hub to simplify event staffing and service-hour reporting.",
          },
          {
            title: "1st Place Poster Presentation",
            issuer: "UC Riverside Graduate Research Symposium",
            year: "2026",
            detail:
              "Awarded for quantum-assisted high-energy lithium battery material screening.",
          },
          {
            title: "1st Place, Benefit to Community Award",
            issuer: "USC AI Buildathon",
            year: "2026",
            detail:
              "Team award for SurplusLink, an AI resource coordination prototype.",
          },
          {
            title: "2nd Place",
            issuer: "Western County of Riverside Regional Fast Pitch Competition",
            year: "2026",
            detail:
              "DuckCard placed second in the regional round and advanced to the county finale.",
          },
          {
            title: "Vision & Initiative Award",
            issuer: "AGSM Graduate Ambassadors, UC Riverside School of Business",
            year: "Winter 2025–26",
            detail:
              "Recognized for automating the Graduate Ambassadors newsletter workflow.",
          },
          {
            title: "AGSM Professional MBA Merit Scholarship",
            issuer: "A. Gary Anderson Graduate School of Management, UC Riverside",
            year: "2025",
            detail:
              "Merit-based admission scholarship for the Professional MBA program.",
          },
          {
            title: "Academic Excellence Award",
            issuer: "National Dong Hwa University",
            year: "Academic Year 111, Fall Semester",
            detail:
              "Semester-based academic award in the MS program of Computer Science and Information Engineering.",
          },
          {
            title: "Graduate Student Scholarship",
            issuer: "National Dong Hwa University",
            year: "2022 - 2023",
            detail:
              "Department scholarship for graduate admission and academic performance.",
          },
          {
            title: "Department Special Scholarship",
            issuer: "National Taiwan Normal University",
            year: "2022",
          },
        ],
        certifications: [
          {
            title: "Google Project Management Professional Certificate",
            issuer: "Google / Coursera",
            detail:
              "Project lifecycle, stakeholder communication, risk escalation, and closeout reporting.",
          },
          {
            title: "IBM Enterprise Design Thinking Practitioner",
            issuer: "IBM",
            detail:
              "Human-centered problem framing, collaborative ideation, and enterprise design thinking.",
          },
          {
            title: "NASA Open Science 101 Certification",
            issuer: "NASA Transform to Open Science",
            detail:
              "Open science principles, reproducibility, and data/software sharing.",
          },
          {
            title: "CITI Program Certification",
            issuer: "CITI Program",
            detail:
              "Social and Behavioral Research and IRB Members Training, supporting responsible research and awareness of human-subjects protections.",
          },
          {
            title: "Gemini Certified Educator",
            issuer: "Google for Education",
            detail:
              "Gemini-assisted education workflows and responsible AI use in learning contexts.",
          },
          {
            title: "CalCPA & ASCM Memberships",
            detail: "California Society of CPAs and Association for Supply Chain Management.",
          },
        ],
        memberships: [
          "ASCM - Association for Supply Chain Management",
          "CalCPA - California Society of CPAs",
        ],
        skillGroups: [
          {
            title: "Programming and data",
            skills: ["Python", "SQL", "R", "JavaScript", "Shell Script", "Pandas", "NumPy"],
          },
          {
            title: "Business and operations",
            skills: ["Supply Chain Analytics", "Procurement", "Project Management", "SAP", "Power BI", "Excel"],
          },
          {
            title: "AI and systems",
            skills: ["TensorFlow", "PyTorch", "OpenCV", "Docker", "Qiskit", "Flask", "Django"],
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Contact.",
        body:
          "For research collaboration, workshops, talks, product work, and media inquiries.",
        topics: [
          "Strategy and business analysis",
          "Supply chain analytics and procurement operations",
          "AI product and research translation",
          "Technical workshops and community programs",
          "Media features and interview requests",
        ],
      },
      podcast: {
        title: "Quak Quak Podcast",
        status: "Podcast Channel",
        body:
          "Short-form reflections on AI, product work, supply chain, research, and graduate life.",
        action: "Open YouTube Podcast",
        href: "https://www.youtube.com/playlist?list=PLNswms_yQ-p63RVQNAMARXMlto585-YJl",
        image: "./assets/podcast-quak-quak.jpg",
      },
    },
    zh: {
      meta: {
        lang: "zh-Hant",
        title: "方方/Sammy",
        description:
          "方方/Sammy 的個人專業網站，整理策略規劃、供應鏈分析、人工智慧系統、研究成果與技術社群領導經驗。",
      },
      brand: { lead: "方方/", accent: "Sammy" },
      displayName: "方方/Sammy",
      nav: {
        home: "首頁",
        resume: "關於",
        portfolio: "作品",
        research: "研究",
        press: "參與/領導",
        media: "媒體報導",
        contact: "聯絡",
      },
      ui: {
        languageLabel: "EN",
        backToTop: "回到頂端",
        contactMe: "聯絡",
        invite: "邀請合作",
        viewWork: "精選成果",
        requestResume: "查看履歷檔案",
        details: "展開細節",
        earlierExperience: "研究與其他經歷",
        selected: "精選",
        tools: "技術與工具",
        highlights: "重點",
        organization: "單位",
        period: "期間",
        location: "地點",
      },
      hero: {
        eyebrow: "營運管理 · 資料分析 · AI 輔助決策",
        title: "結合工程實作與管理研究，改善營運決策。",
        lede:
          "我用供應鏈分析、流程自動化與應用 AI，協助團隊掌握營運風險、決定下一步並追蹤執行。",
        tags: [
          "#供應鏈分析",
          "#流程自動化",
          "#決策支援",
          "#應用研究"
        ],
      },
      about: {
        eyebrow: "關於",
        title: "商業營運與技術系統整合背景。",
        paragraphs: [
          "我在加州大學河濱分校攻讀 MBA，專攻營運與供應鏈管理及會計。",
          "我有資訊工程背景，曾在 HPE 與 d-Matrix 開發自動化及資料分析工具，支援工程驗證、採購、物流與庫存管理。",
          "我在 UCR 的 INSPIRE Lab 與 BEDLab 研究如何用模擬和 AI 支援不確定情境下的決策，也透過客戶訪談驗證產品與商業化假設。"
        ],
        focus: [
          {
            title: "策略與營運",
            description:
              "策略採購、庫存規劃、採購執行與決策報告。",
          },
          {
            title: "系統與自動化",
            description:
              "Python、SQL、Shell Script、Perl、SAP/ERP 流程、品質驗證自動化與資料工具。",
          },
          {
            title: "人工智慧與分析",
            description:
              "應用人工智慧、事件研究流程、供應鏈模擬與多模態情緒分析。",
          },
          {
            title: "社群與領導",
            description:
              "開發者社群、學生領導、客戶探索與實作工作坊。",
          },
        ],
      },
      featured: {
        eyebrow: "精選成果",
        title: "代表性專案與公開成果。",
        items: [
          {
            title: "DuckCard",
            type: "產品專案 · 現場測試",
            description:
              "我透過 UCLA NSF I-Corps 帶領逾 50 場潛在客戶訪談，再以 UCR INNOVAR 的 2,500 美元經費追加 15 場訪談，將產品聚焦到活動後的業務跟進。團隊在 INNOVAR 結案及區域 Fast Pitch 簡報，並在 SBIR/STTR Con 設攤，直接向使用者展示產品。已提交美國商標及專利臨時申請。",
            tags: ["客戶探索", "產品商業化", "智慧財產策略"],
            href: "https://duckcard.app/",
            actionLabel: "了解 DuckCard",
            image: "./assets/duckcard-sbir-sttrcon-booth-2026.png",
            imagePosition: "center 48%",
          },
          {
            title: "Ambassador Hub",
            type: "營運 · 流程設計",
            description:
              "訪談 UCR 研究生大使及行政團隊，設計並試行整合活動核准、班次報名與服務時數審核的工具，隨後在 Google Cloud 上線。",
            tags: ["流程自動化", "Google Cloud"],
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7530839605772943360/",
            actionLabel: "查看專案紀錄",
          },
          {
            title: "1099Ready Lite",
            type: "財務營運工具 · 供應商資料準備",
            description:
              "在 1099 審查前標記已付款供應商的 W-9 資料缺漏，並整理追蹤清單。以 100 家供應商為例，模型估計初步檢核所需時間可從 435 分鐘降到 75 分鐘。",
            tags: ["財務營運", "稅務準備", "異常追蹤"],
            href: "https://ready-lite.web.app/",
            actionLabel: "開啟網頁工具",
            image: "./assets/projects/1099ready-lite-workflow-impact.jpg",
            imageFit: "contain",
          },
          {
            title: "Rare Flora",
            type: "商業化 · 市場研究",
            description:
              "在 UCR Student Innovation Sprint 為 Rare Flora 交付市場調查、商業摘要與比較工作簿。工作簿對照採收後生質材料的回收與處置兩條路徑，協助團隊排定首輪試點要先驗證的方案與市場假設。",
            tags: ["市場研究", "試點規劃"],
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7530838686360440832/",
            actionLabel: "查看專案紀錄",
          },
          {
            title: "AI-Assisted Supply Chain Optimization System",
            type: "供應鏈 · AI 決策支援",
            description:
              "整合六類營運資料與八項風險規則，標記供應鏈異常並產出供人工複核的行動建議。模擬估計決策複核時間縮短 83.3%。",
            tags: ["供應鏈", "AI 營運", "風險監控"],
            href: "https://github.com/SammyFang/MGT267watchdog",
            actionLabel: "查看 GitHub",
            image: "./assets/research-pipeline.svg",
          },
          {
            title: "Amigo Friends",
            type: "創業專案 · 客戶探索",
            description:
              "透過 2026 年 NSF I-Corps Hub West ZAP 計畫訪談潛在使用者，驗證 AI 陪伴產品的客群、持續使用動機與產品定位。",
            tags: ["NSF I-Corps Hub West ZAP", "客戶探索"],
            image: "./assets/amigo-friends-mascot.png",
            imageFit: "contain",
          },
          {
            title: "SurplusLink",
            type: "人工智慧產品 · 社會影響",
            description:
              "團隊以 AI 媒合可用資源與社群需求的原型。",
            tags: ["人工智慧產品", "產品策略", "社會影響"],
            href: "https://lovable.dev/projects/3f59c854-2145-4da4-9d57-3e8e92f01e20",
            actionLabel: "查看原型",
            previewTitle: "Lovable",
            previewCaption: "lovable.dev",
            image: "./assets/research-intelligence.svg",
          },
          {
            title: "HireDuck",
            type: "職涯人工智慧 · 產品",
            description:
              "整合履歷客製化、職缺配對、版本管理與申請策略的職涯工具。",
            tags: ["職涯工具", "流程設計", "人工智慧產品"],
            href: "https://duckcard.app/HireDuck",
            previewTitle: "HireDuck",
            previewCaption: "duckcard.app",
            image: "./assets/research-pipeline.svg",
          },
          {
            title: "供應鏈模擬核心",
            type: "供應鏈 · 模擬",
            description:
              "用蒙地卡羅模擬比較不同庫存策略的服務水準與尾端風險。公開展示以 CPU 執行，Triton GPU 效能另行量測。",
            tags: ["Triton", "CUDA", "蒙地卡羅模擬"],
            href: "https://github.com/SammyFang/scm-kernel",
            image: "./assets/research-battery.svg",
          },
        ],
      },
      experience: {
        eyebrow: "經歷",
        title: "專業經歷摘要。",
        items: [
          {
            "title": "供應鏈分析師",
            "organization": "d-Matrix",
            "period": "2026",
            "employment": "實習",
            "department": "營運與供應鏈",
            "summary": "協助集中式出貨流程上線，涵蓋資料標準化、使用者驗收測試與培訓。用 SQL、API 與 Power BI 追蹤物流異常及運費，並試行電腦視覺序號擷取，支援庫存盤點。",
            "tools": [
              "SQL 與 API",
              "Power BI",
              "流程改善"
            ]
          },
          {
            "title": "採購營運分析師",
            "organization": "慧與科技",
            "period": "2024 - 2025",
            "employment": "全職",
            "department": "採購營運",
            "summary": "整合市場、需求與成本資訊，規劃高價值伺服器零組件採購。協調亞太供應商與製造夥伴支援新品導入，維護 SAP 主資料並自動化例行作業。",
            "tools": [
              "採購",
              "供應規劃"
            ]
          },
          {
            "title": "軟體工程師（系統）",
            "organization": "慧與科技",
            "period": "2023 - 2024",
            "employment": "實習",
            "department": "系統工程",
            "summary": "以 Python、Shell 與 Perl 自動化韌體版本比對、視覺驗證與 QA 資料交接，協助工程與製造團隊使用一致的驗證流程。",
            "tools": [
              "自動化",
              "資料流程"
            ]
          },
          {
            "title": "研究生研究員",
            "organization": "加州大學河濱分校 INSPIRE Lab",
            "period": "2025 – 至今",
            "department": "作業研究",
            "summary": "參與高擬真模擬於尾端風險庫存最佳化的研究，開發 GPU 模擬與最佳化框架，評估需求波動、交期不確定與極端風險情境下的庫存策略。",
            "tools": [
              "模擬",
              "最佳化",
              "GPU 運算"
            ]
          },
          {
            "title": "研究助理",
            "organization": "加州大學河濱分校 Behavioral Economics & Decision-making Lab",
            "period": "2025 – 至今",
            "department": "管理研究",
            "summary": "研究興趣包括 AI 輔助管理決策與營運情境中的行為偏誤，關注以 Python、R、SQL 支援的實驗與量化研究方法。",
            "tools": [
              "Python",
              "R",
              "SQL"
            ]
          },
          {
            "title": "研究助理",
            "organization": "國立臺灣師範大學 Human Resource & AI Application Lab",
            "period": "2023 - 2024",
            "department": "應用人工智慧研究",
            "summary": "研究 AI 在教育與人力資源的應用。在國科會支持的專案中開發表情與語音情緒分析模型，並協助教師回饋與學習投入實驗。",
            "tools": [
              "應用人工智慧",
              "研究協調"
            ]
          },
          {
            "title": "教學助理",
            "organization": "國立臺灣師範大學",
            "period": "2023 - 2024",
            "summary": "協助人力資源課程教學，協調六場業界講座，涵蓋人資科技、數位學習與 AI 在人才發展的應用。"
          },
          {
            "title": "系統維運工程師",
            "organization": "博仁綜合醫院",
            "period": "2023",
            "employment": "兼職",
            "department": "資訊營運",
            "summary": "開發內部資料工具並支援資訊營運。",
            "tools": [
              "資料工具",
              "資訊營運"
            ]
          },
          {
            "title": "硬體安全模組研發工程師",
            "organization": "Provision Information Co., Ltd.",
            "period": "2021 - 2022",
            "employment": "實習",
            "department": "資訊安全研究",
            "summary": "參與安全工具與產品研究文件的開發。",
            "tools": [
              "資訊安全研究",
              "技術文件"
            ]
          }
        ],
      },
      projects: {
        eyebrow: "專案",
        title: "整理後的專案庫，而不是文字牆。",
        note:
          "精選專案保留短摘要，之後可再補充案例研究。",
        items: [
          {
            title: "製造供應鏈優化",
            type: "營運 · 慧與科技",
            description:
              "串接採購資料維護、供應規劃與供應商協調，支援物料可用性並處理執行障礙。",
            tags: ["採購", "營運", "企業資源規劃"],
          },
          {
            title: "智慧版本追蹤與資料自動化",
            type: "自動化 · 慧與科技",
            description:
              "以 Python 自動化韌體與軟體版本檢查，以 Shell、Perl 處理測試資料傳輸，提升例行工程審查與報告的一致性。",
            tags: ["Python", "Shell Script", "Perl"],
          },
          {
            title: "情緒分析專家系統",
            type: "人工智慧 · 情緒分析",
            description:
              "以 TensorFlow、OpenCV、LSTM/CNN 與 Docker 建立語音與影像分析的多模態情緒辨識系統。",
            tags: ["TensorFlow", "OpenCV", "Docker"],
            href: "https://github.com/SammyFang/Multimodal-Emotion-Analysis-AI-EMO-Expert-system-",
            image: "./assets/media-coverage.svg",
          },
          {
            title: "事件窗口股價報酬分析流程",
            type: "研究工具 · 財務分析",
            description:
              "以 Python、Pandas 與 Plotly 建立事件窗口報酬分析與視覺化流程。",
            tags: ["Python", "Pandas", "Plotly"],
            href: "https://github.com/SammyFang/stock-analysis-app",
            actionLabel: "查看 GitHub",
            image: "./assets/research-pipeline.svg",
          },
          {
            title: "0050 與加權指數 LSTM 股價預測",
            type: "機器學習 · 金融時間序列",
            description:
              "以 Python 與 Keras 建立 LSTM 模型，使用歷史 CSV 資料與 MinMaxScaler 前處理，預測元大台灣 50 ETF 與台灣加權股價指數收盤價。",
            tags: ["Python", "Keras", "LSTM", "時間序列"],
            href: "https://github.com/SammyFang/ANN_Pratice_stockprediction-0050-Market-",
            actionLabel: "查看 GitHub",
          },
          {
            title: "以太坊智慧合約投票系統",
            type: "區塊鏈 · 投票系統",
            description:
              "以 Solidity 建立部署於以太坊的投票概念驗證，支援候選人管理、MetaMask 交易互動、Web3.js 串接與 Chart.js 即時計票視覺化。",
            tags: ["Solidity", "Ethereum", "Web3.js", "Chart.js"],
            href: "https://github.com/SammyFang/Ethereum-Voting-Smart-Contract",
            actionLabel: "查看 GitHub",
          },
          {
            title: "異質資料感知聯邦學習入侵偵測系統",
            type: "AIoT · 資訊安全",
            description:
              "面向 AIoT 入侵偵測的隱私保護聯邦學習框架，結合 meta-sampling、動態分群與 FedProx，處理類別不平衡與 non-IID 資料分布。",
            tags: ["Python", "聯邦學習", "FedProx", "入侵偵測"],
            href: "https://github.com/SammyFang/AIoT-Federated-Learning-IDS",
            actionLabel: "查看 GitHub",
          },
          {
            title: "Dcard 疫情關鍵字爬蟲",
            type: "公共資訊 · 資料流程",
            description:
              "以 Python、SQL 與 LINE Notify 監測校園新冠疫情相關貼文，並透過即時通訊通知推送資訊。",
            tags: ["Python", "SQL", "LINE Notify"],
            href: "https://github.com/SammyFang/Dcard-Epidemic-Keyword-Crawler-Tool",
            image: "./assets/media-coverage.svg",
          },
          {
            title: "即時車流計數辨識",
            type: "電腦視覺 · 校園營運",
            description:
              "以 Python 與 OpenCV 模擬機車流量辨識與停車資訊探索的電腦視覺專案。",
            tags: ["Python", "OpenCV", "影像辨識"],
            href: "https://github.com/SammyFang/Real-Time-Vehicle-Counting-Recognition",
            image: "./assets/research-intelligence.svg",
          },
        ],
      },
      research: {
        eyebrow: "研究",
        title: "研究、發表與進行中論文。",
        publications: [
          {
            "title": "需求不確定下的動態定價與降價最佳化：結合深度學習與量子搜尋",
            "venue": "2026 INFORMS 收益管理與定價分會研討會 · 密西根大學",
            "year": "2026",
            "note": "會議發表 · 2026 年 7 月 22 日",
            "href": "https://sammyfang.tw/dynamic-pricing-impact/",
            "actionLabel": "查看發表",
            "image": "./assets/research-pipeline.svg",
            "description": "提出整合循環分位數預測、風險感知 mean-CVaR 最佳化與 QUBO 輔助搜尋的架構。使用 M5 資料集與 120 組品項、門市、產地配對決策，相較歷史定價辨識出 9.48% 的模型估計利潤提升。QUBO 輔助搜尋在顯示精度下與傳統及窮舉基準一致；量子硬體與規模化優勢仍待驗證。"
          },
          {
            "title": "AI 輔助供應鏈營運決策：可視性、風險偵測與人機協作的模擬研究",
            "venue": "FUTURES 2026 · 盧森堡商學院",
            "year": "2026",
            "note": "會議延伸摘要 · ISEC Lisboa · 第 133 頁",
            "href": "https://futures.researchchair.org/conference-proceedings/download#page=133",
            "actionLabel": "閱讀摘要",
            "description": "以模擬檢視 AI 如何整合供應鏈資料、標示風險並交由人員複核。另擔任第四軌 AI 倫理框架的審稿人，完成一篇稿件審查。"
          },
          {
            "title": "AI 申報與人工複核",
            "venue": "Happy Research Hour · 加州大學河濱分校",
            "year": "2026",
            "note": "研究短講 · 2026 年 11 月 13 日",
            "href": "https://events.ucr.edu/event/happy-research-hour-969",
            "actionLabel": "查看活動",
            "description": "重新分析四款 AI 模型在收入申報實驗中的既有輸出，並提出後續測試，檢視原始數字能否協助使用者修正 AI 草稿。"
          },
          {
            "title": "AI 輔助供應鏈監控與營運決策支援：以模擬研究檢視可視性、風險偵測與基準績效",
            "venue": "2026 STEM-Humanities 早期職涯科學家研討會 · UCR 博士後研究人員協會",
            "year": "2026",
            "note": "海報發表 · 2026 年 6 月 17 日",
            "href": "https://rpa.ucr.edu/page/Symposium-2026/",
            "actionLabel": "查看研討會",
            "image": "./assets/stem-humanities-supply-chain-symposium-2026-960.webp",
            "imageLoading": "eager",
            "imagePosition": "center 38%",
            "description": "以模擬研究將採購、庫存、生產、物流與財務訊號轉化為可視性、透明風險警示與可覆核的決策紀錄。"
          },
          {
            "title": "NuclearGuard AI：以伽瑪射線光譜資料進行輻射異常偵測與操作員決策支援",
            "venue": "UCR AI 研究生研究 Brown Bag 系列",
            "year": "2026",
            "note": "研究發表 · eScholarship · 2026 年 5 月",
            "href": "https://escholarship.org/uc/item/0c67f27h",
            "actionLabel": "查看出版頁",
            "image": "./assets/research-intelligence.svg",
            "description": "以公開伽瑪射線光譜建立異常評分、空間風險視覺化與操作員決策支援儀表板。"
          },
          {
            "title": "量子輔助高能量鋰電池材料候選篩選",
            "venue": "加州大學河濱分校研究生研究論壇",
            "year": "2026",
            "note": "海報發表 · 第一名",
            "href": "https://graduate.ucr.edu/gradsymposium#best-presentation-awards-2026",
            "actionLabel": "查看獲獎頁面",
            "image": "./assets/research-battery.svg"
          },
          {
            "title": "標準化事件窗口股價報酬分析與研究視覺化網頁流程",
            "venue": "開放研究與創作活動論壇",
            "year": "2026",
            "note": "數位物件識別碼：10.5070/J9.63078",
            "href": "https://doi.org/10.5070/J9.63078",
            "image": "./assets/research-pipeline.svg",
            "description": "標準化個別事件前後各五個交易日的日報酬分析與視覺化。"
          },
          {
            "title": "多語名片智慧化系統的市場導向商業模式與人工智慧系統設計",
            "venue": "開放研究與創作活動論壇",
            "year": "2026",
            "note": "數位物件識別碼：10.5070/J9.63090",
            "href": "https://doi.org/10.5070/J9.63090",
            "image": "./assets/research-intelligence.svg",
            "description": "為活動後聯繫提出多語聯絡人資料擷取、人工複核及追蹤流程。"
          },
          {
            "title": "不同自我調整學習階段之線上討論漸進行為模式",
            "venue": "國際電腦教育研討會",
            "year": "2024",
            "note": "數位物件識別碼：10.58459/icce.2024.4863",
            "href": "https://doi.org/10.58459/icce.2024.4863",
            "image": "./assets/research-pipeline.svg"
          },
          {
            "title": "安全加密方式與金鑰生成 - 以生物特徵通行密鑰結合量子邏輯為例",
            "venue": "2023 TANET 臺灣網際網路研討會：次世代 AI 與數位韌性",
            "year": "2023",
            "note": "會議論文 · 2023.11",
            "image": "./assets/research-intelligence.svg",
            "description": "生物特徵通行密鑰、量子邏輯、安全加密與金鑰生成。"
          },
          {
            "title": "運用教師動態表情與聲音結合深度學習進行情緒分析與分數評估之智慧回饋工具",
            "venue": "2023 TANET 臺灣網際網路研討會：次世代 AI 與數位韌性",
            "year": "2023",
            "note": "會議論文 · 2023.11",
            "image": "./assets/media-coverage.svg",
            "description": "數位教育、深度學習、電腦視覺、聲紋分析與情感運算。"
          }
        ],
        workingPapers: [
          "高擬真供應鏈模擬的計算基礎：以平行運算框架重新設計圖形處理器核心",
          "具可驗證稽核軌跡與人工智慧輔助事件分流的匿名通報機制",
          "結合脈衝神經網路與混合量子分類器的腦波動作想像解碼",
        ],
      },
      speaking: {
        eyebrow: "演講與工作坊",
        title: "邀請演講、工作坊與社群活動紀錄。",
        intro:
          "邀請演講、工作坊、研討會場次與公開活動紀錄。",
        items: [
          {
            title: "Cutie Hack 業界座談",
            role: "受邀與談人",
            host: "加州大學河濱分校 ACM 學生分會",
            year: "2026",
            href: "https://cutiehack.com/",
            actionLabel: "查看活動",
            description:
              "與學生討論 AI 規模化時硬體與營運成本的取捨，以及軟體技能如何運用在工程和商業工作中。",
          },
          {
            title: "技術專案管理入門",
            role: "邀請演講",
            host: "加州大學河濱分校資訊系統協會",
            year: "2026",
            image: "./assets/pdf-events/intro-technical-project-management-flyer.jpg",
            imageFit: "contain",
            imagePosition: "center center",
            description:
              "技術專案定義、執行節奏、利害關係人溝通與結案整理。",
            topics: ["專案定義", "技術執行", "利害關係人溝通"],
          },
          {
            title: "成為人生的 CEO",
            role: "校友演講",
            host: "國立東華大學資訊工程學系",
            year: "2026",
            image: "./assets/pdf-events/ndhu-csie-alumni-talk-2026.jpg",
            imageFit: "contain",
            imagePosition: "center center",
            description:
              "分享資工背景從研究、產業實務到商業與系統設計的職涯探索。",
            topics: ["職涯探索", "研究到產業", "系統思考"],
          },
          {
            title: "用試算表做資料驅動的供應鏈決策",
            role: "工作坊主講",
            host: "加州大學河濱分校供應鏈社群",
            year: "2026",
            description:
              "以試算表整理供應鏈假設、比較情境並支援營運決策的實作工作坊。",
            topics: ["試算表", "供應鏈分析", "決策支援"],
          },
          {
            title: "面試實戰工作坊",
            role: "工作坊主講",
            host: "加州大學河濱分校供應鏈社群",
            year: "2026",
            image: "./assets/pdf-events/ucr-interview-workshop-session.jpg",
            description:
              "面試準備、回答架構與專案經驗表達練習。",
            topics: ["面試實戰", "職涯溝通", "行為題回答"],
          },
          {
            title: "網頁驗證與安全實務",
            role: "邀請技術講座",
            host: "國立臺灣師範大學 Google 學生開發者社群",
            year: "2024",
            image: "./assets/pdf-events/gdsc-ntnu-security-workshop-session.jpg",
            description:
              "介紹公開金鑰基礎建設、免密碼驗證、一次性密碼、單一登入與資安工具實作。",
            topics: ["公開金鑰基礎建設", "免密碼驗證", "一次性密碼", "單一登入", "Nessus/OpenVAS"],
          },
          {
            title: "機器學習與電腦視覺實作入門",
            role: "工作坊主講",
            host: "Google 學生開發者社群",
            year: "2024",
            mediaLabel: "工作坊紀錄",
            mediaTitle: "機器學習與電腦視覺",
            description:
              "TensorFlow 與 MediaPipe 電腦視覺示範與課堂實作。",
            topics: ["機器學習", "姿態辨識", "電腦視覺", "實作學習"],
          },
        ],
      },
      leadership: {
        eyebrow: "社群與領導",
        title: "技術社群、創業探索與學生領導。",
        items: [
          {
            "title": "共同創辦人 / 會長",
            "organization": "加州大學河濱分校 Google 校園開發者社群",
            "period": "2026",
            "category": "開發者社群",
            "href": "https://gdg.community.dev/gdg-on-campus-university-of-california-riverside-riverside-united-states/",
            "actionLabel": "查看社群",
            "previewTitle": "GDG at UCR",
            "previewCaption": "gdg.community.dev",
            "logo": "./assets/gdg-logo.svg",
            "logoAlt": "Google Developer Groups",
            "description": "共同成立校園社群，籌辦 AI 與電腦視覺實作工作坊，讓不同科系的學生一起動手學習。",
            "metrics": [
              "社群建立",
              "技術工作坊"
            ]
          },
          {
            "title": "學生領導",
            "organization": "UC Riverside / AGSM 校園社群",
            "period": "2025 - 2026",
            "category": "學生領導",
            "variant": "ucr",
            "description": "協助籌辦 AI Tech Venture Challenge，並協調 DHL Supply Chain 招募說明會等職涯活動。",
            "affiliations": [
              {
                "name": "Product Club at UCR",
                "area": "營運幹部",
                "href": "https://highlanderlink.ucr.edu/organization/productatucr"
              },
              {
                "name": "Supply Chain Society",
                "area": "內部溝通副會長",
                "href": "https://linktr.ee/scs.ucr"
              },
              {
                "name": "AGSM Student Association",
                "area": "創業領導小組組長",
                "href": "https://business.ucr.edu/graduate/student-association"
              }
            ]
          },
          {
            "title": "內務副主管",
            "organization": "AGSM 研究生大使",
            "period": "2026 年至今",
            "description": "協調大使排班與招募，並代表團隊參與招生及校友活動。"
          },
          {
            "title": "會長",
            "organization": "加州大學河濱分校台灣研究生協會",
            "period": "2025 年至今",
            "description": "重啟協會、籌辦迎新、與 UTSA 合辦活動，並參與區域學生組織交流。",
            "href": "https://www.ucrtgsa.org/"
          },
          {
            "title": "核心團隊成員",
            "organization": "慧與科技早期職涯社群",
            "period": "2024 - 2025",
            "description": "協助建立早期職涯活動、展攤互動與跨職能職涯發展活動。"
          },
          {
            "title": "活動籌辦",
            "organization": "GDG Cloud Taipei",
            "description": "籌辦開發者社群的技術活動。",
            "href": "https://gdg.community.dev/gdg-cloud-taipei/"
          },
          {
            "title": "核心團隊成員",
            "organization": "GDSC NTNU",
            "description": "協助國立臺灣師範大學的開發者工作坊。",
            "href": "https://gdg.community.dev/gdg-on-campus-national-taiwan-normal-university-taipei-taiwan/"
          },
          {
            "title": "核心團隊成員",
            "organization": "GDSC NDHU",
            "description": "協助國立東華大學的開發者工作坊。",
            "href": "https://gdsc.ndhu.dev/p/about.html"
          }
        ],
      },
      engagementGallery: {
        "title": "活動照片",
        "slides": [
          {
            "title": "加州大學河濱分校 Happy Research Hour，2026",
            "alt": "方方在 UCR Happy Research Hour 手持麥克風，面向聽眾說明投影片。",
            "src": "./assets/engagement/happy-research-hour-2026.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7529118261704216576/",
            "width": 1706,
            "height": 960
          },
          {
            "title": "AWS Summit Taipei 2024",
            "alt": "方方站在 AWS Summit Taipei 的迎賓背板前。",
            "src": "./assets/engagement/aws-summit-taipei-2024.webp",
            "href": "https://www.linkedin.com/posts/yung-sian-fang_aws-amazon-ai-ugcPost-7222186040818647040-hKas/",
            "width": 1152,
            "height": 1536
          },
          {
            "title": "COMPUTEX Taipei 展場交流，2024",
            "alt": "方方和另一位參展者在 COMPUTEX Taipei 的 Cooler Master 展位合照。",
            "src": "./assets/engagement/computex-taipei-2024.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7205240294345170944/",
            "width": 2048,
            "height": 1536
          },
          {
            "title": "Amazon 物流營運參訪，2025",
            "alt": "方方在 Amazon 參訪期間身穿橘色反光背心，站在物流中心貨架旁。",
            "src": "./assets/engagement/amazon-fulfillment-visit-2025.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7392126631471108096/",
            "width": 1152,
            "height": 1536
          },
          {
            "title": "Cutie Hack 業界座談，2026",
            "alt": "方方在 Cutie Hack 業界座談中發言，身旁坐著其他與談人。",
            "src": "./assets/engagement/cutie-hack-panel-2026.webp",
            "href": "https://www.linkedin.com/feed/update/urn:li:activity:7530841301399949312/",
            "width": 1108,
            "height": 1477
          }
        ]
      },
      media: {
        eyebrow: "媒體與公開介紹",
        title: "媒體報導與公開介紹",
        items: [
          {
            title: "Something Students Have Been Waiting For",
            source: "加州大學河濱分校商學院",
            year: "2026",
            href: "https://business.ucr.edu/news/2026/05/27/something-students-have-been-waiting",
            mediaLabel: "GDG at UCR",
            description:
              "商學院專文報導 GDG at UCR 的成立、啟動活動動能，以及面向不同背景學生的技術學習社群定位。",
          },
          {
            title: "Riverside County Fast Pitch 區域賽紀錄",
            source: "Riverside County Office of Economic Development",
            year: "2026",
            href: "https://www.linkedin.com/posts/rivcoed_rivcoed-rivconow-rivcoinnovation-activity-7452781398563921920-VP1X?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADKWI-UBz3qmdXAAGqS9DmdZapMryZ9UFJ0",
            description:
              "LinkedIn 貼文介紹 GoGoDuck，並記錄 Norco/Corona 區域 Fast Pitch 第二名與晉級縣級決賽。",
          },
          {
            title: "人工智慧人臉辨識技術促進教學力",
            source: "國立臺灣師範大學 / 中央社訊息平台",
            year: "2024",
            href: "https://www.cna.com.tw/postwrite/chi/327041",
            image: "./assets/media-coverage.svg",
            description:
              "人工智慧情緒辨識產學合作報導。",
          },
          {
            title: "研究生大使公開介紹",
            source: "加州大學河濱分校商學院",
            year: "2026",
            href: "https://business.ucr.edu/graduate/ambassadors#yung-sian-fang-pmba-taiwan-yfa",
            description:
              "商學院官方介紹與研究生大使幹部名錄。",
          },
          {
            title: "加州大學河濱分校研究生研究論壇獲獎紀錄",
            source: "加州大學河濱分校",
            year: "2026",
            href: "https://graduate.ucr.edu/gradsymposium#best-presentation-awards-2026",
            image: "./assets/research-battery.svg",
            description:
              "量子輔助電池材料篩選研究獲獎紀錄。",
          },
          {
            title: "教育部大專校院學生會成果展，東華學生會榮獲優等獎",
            source: "國立東華大學",
            year: "2021",
            href: "https://www.ndhu.edu.tw/p/404-1000-179497.php?Lang=zh-tw",
            mediaLabel: "學生領導",
            description:
              "校方記錄東華學生會於全國成果展獲得團體優等獎。",
          },
        ],
      },
      education: {
        eyebrow: "學歷",
        title: "學歷、獎項、證照與專業會員。",
        schools: [
          {
            degree: "企業管理碩士，專攻營運與供應鏈管理及會計",
            school: "加州大學河濱分校商學院",
            period: "2025.09 - 2027.06",
            description:
              "透過應用研究與專案，將營運策略、供應鏈分析與會計控制用於實際決策。",
          },
          {
            degree: "資訊工程碩士",
            school: "國立東華大學",
            period: "2022.09 - 2024.06",
            description:
              "碩士論文題名：《結合量子邏輯強化的生物特徵通行密鑰認證：安全加密與金鑰生成》。使用 Qiskit、PyCryptodome、AES-GCM/RSA-OAEP 與 NIST SP 800-22 進行金鑰生成與安全性檢測。",
          },
          {
            degree: "資訊工程學士",
            school: "國立東華大學",
            period: "2018.09 - 2022.06",
            description:
              "畢業專題：自主配送與雲端資料整合系統，使用 Arduino、RFID、ESP32-CAM、NEO-7M GPS、PHP 與 SQL。",
          },
        ],
        awards: [
          {
            title: "Innovation Catalyst",
            issuer: "加州大學河濱分校商學院研究生大使",
            year: "2026",
            detail: "訪談研究生大使與行政團隊，據此開發並導入 Ambassador Hub，簡化活動排班及服務時數申報。",
          },
          {
            title: "海報發表第一名",
            issuer: "加州大學河濱分校研究生研究論壇",
            year: "2026",
            detail:
              "以量子輔助高能量鋰電池材料篩選研究獲獎。",
          },
          {
            title: "社群貢獻獎第一名",
            issuer: "南加州大學人工智慧創作馬拉松",
            year: "2026",
            detail:
              "團隊以 SurplusLink 人工智慧資源媒合原型獲獎。",
          },
          {
            title: "第二名",
            issuer: "河濱西郡區域快速提案競賽",
            year: "2026",
            detail:
              "DuckCard 獲區域賽第二名，晉級河濱郡決賽。",
          },
          {
            title: "Vision & Initiative Award",
            issuer: "加州大學河濱分校商學院研究生大使",
            year: "2025–26 年冬季",
            detail:
              "因自動化研究生大使團隊的電子報流程獲得表揚。",
          },
          {
            title: "企業管理碩士入學優秀獎學金",
            issuer: "加州大學河濱分校商學院",
            year: "2025",
            detail:
              "專業企業管理碩士入學獎學金，依入學表現授予。",
          },
          {
            title: "書卷獎",
            issuer: "國立東華大學",
            year: "111 學年度第 1 學期",
            detail:
              "資訊工程學系碩士班學期制學業表現獎項。",
          },
          {
            title: "研究生獎學金",
            issuer: "國立東華大學資訊工程學系",
            year: "2022 - 2023",
            detail:
              "依研究所入學與學業表現授予。",
          },
          {
            title: "系所特別獎學金",
            issuer: "國立臺灣師範大學",
            year: "2022",
          },
        ],
        certifications: [
          {
            title: "Google 專案管理專業證書",
            issuer: "Google / Coursera",
            detail:
              "專案生命週期、利害關係人溝通、風險升級與結案報告。",
          },
          {
            title: "IBM 企業設計思考實踐者",
            issuer: "IBM",
            detail:
              "使用者導向問題定義、協作發想與企業設計思考實務。",
          },
          {
            title: "NASA Open Science 101 認證",
            issuer: "NASA Transform to Open Science",
            detail:
              "開放科學、可重現研究、資料與軟體共享。",
          },
          {
            title: "CITI Program 研究倫理與合規訓練",
            issuer: "CITI Program",
            detail:
              "完成社會與行為研究及 IRB 成員訓練，涵蓋研究倫理與人體研究參與者保護。",
          },
          {
            title: "Gemini 認證教育者",
            issuer: "Google for Education",
            detail:
              "Gemini 輔助教學流程與負責任人工智慧使用。",
          },
          {
            title: "CalCPA 與 ASCM 專業會員",
            detail: "加州會計師協會及供應鏈管理協會。",
          },
        ],
        memberships: [
          "供應鏈管理專業協會會員",
          "加州會計師協會會員",
        ],
        skillGroups: [
          {
            title: "程式與資料",
            skills: ["Python", "SQL", "R", "JavaScript", "Shell Script", "Pandas", "NumPy"],
          },
          {
            title: "商業與營運",
            skills: ["SAP", "ERP", "Power BI", "Excel", "供應鏈分析", "採購", "專案管理"],
          },
          {
            title: "人工智慧與系統",
            skills: ["TensorFlow", "PyTorch", "OpenCV", "Docker", "Qiskit", "Flask", "Django"],
          },
        ],
      },
      contact: {
        eyebrow: "聯絡",
        title: "聯絡資訊。",
        body:
          "可聯繫研究合作、工作坊、演講、產品專案與媒體採訪。",
        topics: [
          "策略與商業分析",
          "供應鏈分析與採購營運",
          "人工智慧產品與研究轉譯",
          "技術工作坊與社群活動",
          "媒體報導與採訪邀約",
        ],
      },
      podcast: {
        title: "鴨子碎碎念",
        status: "Podcast Channel",
        body:
          "以短談與觀點整理記錄 AI、產品、供應鏈、研究與留學觀察。",
        action: "前往 YouTube Podcast",
        href: "https://www.youtube.com/playlist?list=PLNswms_yQ-p63RVQNAMARXMlto585-YJl",
        image: "./assets/podcast-quak-quak.jpg",
      },
    },
  },
};
