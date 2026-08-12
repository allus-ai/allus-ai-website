(() => {
  'use strict';

  const siteData = {
    id: 'root',
    title: 'Allus AI',
    note: 'Industrial foundation models and model-powered solutions for the physical world',
    children: [
      {
        id: 'home', title: 'Home', note: 'Industrial Intelligence, Built for the Physical World', children: [
          { id: 'home-hero', title: 'Hero', note: 'Advanced vision foundation models built for real-world latency, reliability and compute constraints' },
          { id: 'home-positioning', title: 'Positioning', note: 'Industrial foundation models + model-powered solutions + production deployment' },
          { id: 'home-capabilities', title: 'Core Capabilities', note: 'Five capabilities presented with equal weight', children: [
            { id: 'home-cap-vision', title: 'Visual Understanding', note: 'People · equipment · materials · products · environments' },
            { id: 'home-cap-video', title: 'Video & Process Intelligence', note: 'Continuous processes · state changes · industrial events' },
            { id: 'home-cap-reason', title: 'Industrial Reasoning', note: 'Visual context + instructions + industrial knowledge' },
            { id: 'home-cap-edge', title: 'Edge AI', note: 'Real-time intelligence close to machines and cameras' },
            { id: 'home-cap-ops', title: 'Operational Intelligence', note: 'Connect visual events to industrial operations' }
          ]},
          { id: 'home-models', title: 'Model Family', note: 'AllusONE · AllusFlow · AllusEdge' },
          { id: 'home-solutions', title: 'Solutions', note: 'Four model-powered solutions across people, processes, assets and sites' },
          { id: 'home-deployment', title: 'Deployment', note: 'Edge · On-Premise · Private Cloud · Hybrid' },
          { id: 'home-industries', title: 'Industries', note: 'Electronics Assembly · FMCG · Food & Beverage · Advanced Materials · Automotive' },
          { id: 'home-cta', title: 'Primary Actions', note: 'Explore Models · Request a Demo' }
        ]
      },
      {
        id: 'model', title: 'Model', note: 'AllusONE for industrial perception and reasoning. AllusFlow for actions across time. AllusEdge for local execution.', children: [
          { id: 'model-overview', title: 'Model Family', note: 'AllusONE with AllusFlow and AllusEdge' },
          { id: 'allus-one', title: 'AllusONE', heroTagline: 'Industrial Perception and Reasoning', note: 'The Allus core model for multimodal industrial perception and structured reasoning across image, video and approved operating context', children: [
            { id: 'one-purpose', title: 'Purpose', note: 'Combine visual input, instructions and configured industrial context for task-specific perception and multimodal reasoning' },
            { id: 'one-inputs', title: 'Inputs', note: 'Supported image and video formats · approved text instructions · configured terminology and system context' },
            { id: 'one-capabilities', title: 'Capabilities', note: 'Configured recognition and segmentation · evidence-linked visual questions · structured outputs · supported workflow calls' },
            { id: 'one-deployment', title: 'Deployment', note: 'Edge server · on-premise · private cloud · hybrid, selected through workload and environment evaluation' }
          ]},
          { id: 'allus-flow', title: 'AllusFlow', heroTagline: 'Actions and State Across Time', note: 'Turn supported industrial video into structured, evidence-linked temporal records for review', children: [
            { id: 'flow-purpose', title: 'Purpose', note: 'Identify when supported actions and states begin, change, pause and continue across a video sequence' },
            { id: 'flow-inputs', title: 'Inputs & Grounding', note: 'Supported video · timestamps · configured action and state vocabularies · optional approved operating context' },
            { id: 'flow-capabilities', title: 'Capabilities', note: 'Temporal segmentation · state-transition representation · sequence continuity · interruption and resume linking' },
            { id: 'flow-output', title: 'Outputs', note: 'Timestamped segments · structured temporal records · source-linked evidence moments · reviewable summaries' }
          ]},
          { id: 'allus-edge', title: 'AllusEdge', heroTagline: 'Real-Time Edge Intelligence', note: 'Run selected workloads near cameras and machines under validated latency and compute constraints', children: [
            { id: 'edge-targets', title: 'Targets', note: 'Qualified industrial PCs, edge boxes, smart cameras and embedded platforms for the selected workload' },
            { id: 'edge-hardware', title: 'Hardware', note: 'CPU, GPU and NPU profiles subject to accelerator, memory, power and thermal validation' },
            { id: 'edge-capabilities', title: 'Capabilities', note: 'Latency-sensitive video · supported multi-stream configurations · local or offline execution where validated · observable runtime health' }
          ]},
          {
            id: 'production-system',
            title: 'Production Deployment',
            note: 'Adapt, evaluate, optimize, deploy and operate Allus models in industrial environments',
            technicalCapabilities: [
              { id: 'production-data', title: 'Industrial Data Engine', note: 'Connect, curate and govern industrial image, video, document, event and context data.' },
              { id: 'production-adaptation', title: 'Model Adaptation', note: 'Ground and adapt Allus models to customer terminology, processes, products, sites and operating conditions.' },
              { id: 'production-evaluation', title: 'Evaluation & Reliability', note: 'Evaluate model behavior, uncertainty and failure modes against representative industrial workflows.' },
              { id: 'production-optimization', title: 'Hardware Optimization', note: 'Optimize models for target latency, throughput, memory, power and accelerator constraints.' },
              { id: 'production-runtime', title: 'Edge Runtime', note: 'Run supported workloads close to cameras and machines with stream management, offline operation, recovery and observability.' },
              { id: 'production-operations', title: 'Deployment & Model Operations', note: 'Control versions, staged rollout, rollback, device configuration, model health, drift and audit history.' },
              { id: 'production-security', title: 'Security & Data Governance', note: 'Manage access, isolation, retention, privacy, evidence and customer-specific data policies.' },
              { id: 'production-integrations', title: 'Integrations', note: 'Connect supported cameras, industrial systems, enterprise identity, APIs and workflow systems.' }
            ],
            technicalJourney: ['Connect data', 'Adapt', 'Evaluate', 'Optimize', 'Deploy', 'Operate']
          },
          { id: 'model-custom', title: 'Customization', note: 'Adapt models to private data, tasks, workflows and hardware constraints' },
          { id: 'model-select', title: 'Model Selection', note: 'Choose by task complexity, latency target, footprint and deployment environment' },
          { id: 'model-access', title: 'Request Model Access', note: 'Evaluation · SDK access · benchmark · enterprise support' }
        ]
      },
      {
        id: 'solutions',
        title: 'Solutions',
        note: 'Industrial intelligence organized around operational problems.',
        descriptor: 'One Model System. Four Solution Families.',
        description: 'Allus configures AllusONE, AllusFlow, AllusEdge and the production deployment path around four operating domains: knowledge, processes, assets and governed sites.',
        productLoop: ['Capture', 'Understand', 'Ground', 'Deliver', 'Review'],
        children: [
          { id: 'solution-knowledge', title: 'Operational Knowledge & Guidance', heroTagline: 'Turn Real Work Into Governed Knowledge People Can Use', note: 'Turn expert demonstrations, procedures and operational history into governed knowledge, evidence-linked answers and context-aware guidance for people across roles, lines and sites', capabilityRefs: ['AllusONE multimodal reasoning', 'AllusFlow temporal structuring', 'Evidence-linked retrieval', 'Governed workflow delivery'], children: [
            { id: 'knowledge-capture', title: 'Expert Knowledge Capture', note: 'Capture demonstrations and ingest approved video, images, procedures, manuals and operational records' },
            { id: 'knowledge-structure', title: 'Multimodal Procedure Structuring', note: 'Organize content into searchable steps, chapters, annotations and reusable work knowledge' },
            { id: 'knowledge-evidence', title: 'Searchable Operational Evidence', note: 'Retrieve the relevant video moment, image, document or procedure step instead of searching entire files' },
            { id: 'knowledge-guidance', title: 'Guided Work', note: 'Deliver role-, product-, line- and task-specific guidance through approved video, images and text' },
            { id: 'knowledge-assist', title: 'Grounded Industrial Assist', note: 'Answer operational questions with direct links to approved procedures, video moments and source evidence' },
            { id: 'knowledge-readiness', title: 'Tasks, Skills & Readiness', note: 'Manage assignments, skills matrices, completion evidence and readiness records across teams and sites' },
            { id: 'knowledge-governance', title: 'Governance & Localization', note: 'Manage ownership, versions, review, approval, audit history and supported localization workflows' }
          ]},
          { id: 'solution-production-process', title: 'Production & Process Intelligence', heroTagline: 'Understand, Verify and Improve How Industrial Work Happens', note: 'Turn recorded or live video where supported, together with approved procedures and production context, into structured events, standard-work evidence and measurable process insight across stations, lines and sites', capabilityRefs: ['AllusFlow temporal understanding', 'Procedure-grounded comparison', 'Evidence-linked analytics', 'Industrial system context'], children: [
            { id: 'production-state', title: 'Production State & Event Intelligence', note: 'Understand actions, sequences, cycle states, material flow, stoppages, transitions and interruptions over time' },
            { id: 'production-sequence', title: 'Action, Sequence & Cycle Understanding', note: 'Structure continuous work into steps, phases, cycles, events and machine-readable operational records' },
            { id: 'production-search', title: 'Process Search & Summaries', note: 'Search execution history and summarize supported shifts, workcells, events and process changes' },
            { id: 'production-standard', title: 'Standard Work Comparison', note: 'Compare observed execution with approved procedures and review missing, unexpected or out-of-sequence activity' },
            { id: 'production-time', title: 'Time & Motion Intelligence', note: 'Measure task and cycle duration, variation, waiting, interruptions and non-value-added activity' },
            { id: 'production-variation', title: 'Variation & Bottleneck Analysis', note: 'Compare activity across stations, lines, shifts and sites to surface recurring constraints and improvement opportunities' },
            { id: 'production-context', title: 'Evidence & Operational Analytics', note: 'Connect reviewed evidence and structured events with supported PLC, SCADA, MES and production records' }
          ]},
          { id: 'solution-equipment', title: 'Equipment & Asset Intelligence', heroTagline: 'Connect Visible Asset Condition with Maintenance Action', note: 'Combine configured visual observations, approved operational knowledge and supported system context to support maintenance decisions and service workflows', capabilityRefs: ['Configured visual state understanding', 'Approved maintenance knowledge', 'Evidence-grounded guidance', 'Sensor and EAM context'], children: [
            { id: 'asset-observe', title: 'Observe Equipment State', note: 'Interpret configured indicators, gauges and visible conditions for qualified review', children: [
              { id: 'asset-state', title: 'Equipment & Indicator State', note: 'Read supported operating states, indicators and gauges within a validated asset configuration' },
              { id: 'asset-observation', title: 'Visible Condition Awareness', note: 'Surface supported visible changes such as leakage, corrosion or damage for qualified review' }
            ]},
            { id: 'asset-ground', title: 'Ground Maintenance Work', note: 'Connect service questions and work context to approved knowledge and supporting evidence', children: [
              { id: 'asset-knowledge', title: 'Maintenance Knowledge', note: 'Capture and retrieve approved service procedures, demonstrations and equipment context' },
              { id: 'asset-guidance', title: 'Guided Maintenance', note: 'Deliver contextual guidance for qualified teams while approved procedures and site safety rules remain authoritative' },
              { id: 'asset-assist', title: 'Grounded Troubleshooting', note: 'Link equipment questions to approved procedures, reviewed observations and source evidence' }
            ]},
            { id: 'asset-integrate', title: 'Connect Service Context', note: 'Bring supported system events and reviewed observations into one evidence-linked service record', children: [
              { id: 'asset-fusion', title: 'Sensor & EAM Context', note: 'Connect visual observations with supported sensor, production and maintenance events' },
              { id: 'asset-traceability', title: 'Asset Evidence & Traceability', note: 'Preserve reviewed observations, source references and evidence-linked service context' }
            ]}
          ]},
          { id: 'solution-security', title: 'Industrial Safety & Site Intelligence', heroTagline: 'Support Governed Review of Configured Site Events', note: 'Use governed video, approved response knowledge and operational context to help reviewers search supported site events, assess their context and connect them to relevant approved procedures', capabilityRefs: ['Governed video and event context', 'Human-reviewed site intelligence', 'Grounded response guidance', 'Privacy and access controls'], children: [
            { id: 'security-governance', title: 'Define the Governance Boundary', note: 'Set permitted sources, zones, access and retention controls before operational video is used', children: [
              { id: 'security-privacy', title: 'Privacy, Access & Retention Controls', note: 'Apply explicit access, retention and privacy boundaries to sensitive operational video' },
              { id: 'security-perimeter', title: 'Site & Zone Awareness', note: 'Support configured restricted-zone, traffic and critical-asset awareness within governed deployments' }
            ]},
            { id: 'security-review', title: 'Surface & Review Site Events', note: 'Surface configured event patterns from supported sources for human review', children: [
              { id: 'security-events', title: 'Safety Event Intelligence', note: 'Prioritize supported event candidates for review without replacing certified safety systems or human oversight' },
              { id: 'security-search', title: 'Multi-Camera Event Search', note: 'Search permitted event histories across supported video sources without implying identity resolution' }
            ]},
            { id: 'security-respond', title: 'Search, Respond & Preserve', note: 'Connect reviewed events to approved response knowledge and retain their supporting context', children: [
              { id: 'security-response', title: 'Grounded Response Guidance', note: 'Suggest relevant approved procedures and escalation paths for reviewer confirmation' },
              { id: 'security-evidence', title: 'Incident Records & Summaries', note: 'Preserve reviewed timelines, source references and response context within configured retention boundaries' }
            ]}
          ]},
          { id: 'industries', title: 'Industries', note: 'Priority markets and solution narratives.', children: [
            { id: 'industry-electronics', title: 'Electronics Assembly', heroTagline: 'Knowledge and Process Intelligence for High-Mix Assembly', summary: 'High-mix assembly knowledge, station guidance and process insight.', note: 'Configure industrial intelligence for high-mix assembly across stations, lines and production events', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence'], children: [
              { id: 'electronics-knowledge', title: 'Expert Build Knowledge', note: 'Capture demonstrations, procedures, visual references and rework knowledge for complex products and variants' },
              { id: 'electronics-guidance', title: 'Station Guidance', note: 'Deliver task-, product- and workstation-specific instructions through video, images and text' },
              { id: 'electronics-process', title: 'Assembly Process Intelligence', note: 'Understand assembly sequence, workstation state, interruptions and material context over time' },
              { id: 'electronics-cycle', title: 'Standard Work & Cycle Analysis', note: 'Review defined sequence, timing variation, waiting and line-balance opportunities with human oversight' },
              { id: 'electronics-trace', title: 'Traceability & System Integration', note: 'Connect execution evidence with production records, equipment context and supported production or automation workflows' }
            ]},
            { id: 'industry-fmcg', title: 'FMCG', heroTagline: 'Adaptable Intelligence for Fast-Moving Production', summary: 'Changeovers, line guidance and high-speed production context.', note: 'Configure adaptable intelligence for high-speed, high-variation production and frequent changeovers', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence'], children: [
              { id: 'fmcg-knowledge', title: 'Changeover Knowledge', note: 'Preserve approved setup, cleaning, format-change and restart procedures across products and lines' },
              { id: 'fmcg-guidance', title: 'Line-Side Guidance', note: 'Deliver role-, line- and SKU-specific instructions at the point of work where supported' },
              { id: 'fmcg-process', title: 'Line & Stoppage Intelligence', note: 'Structure production flow, changeovers, interruptions and restart events into searchable timelines' },
              { id: 'fmcg-time', title: 'Time & Motion Intelligence', note: 'Compare task and cycle variation across lines, shifts and sites to support continuous improvement' },
              { id: 'fmcg-governance', title: 'Cross-site Governance', note: 'Manage approved knowledge, assignments, evidence and reporting across distributed operations' }
            ]},
            { id: 'industry-food', title: 'Food & Beverage', heroTagline: 'Operational Knowledge from Sanitation to Packaging', summary: 'Sanitation, packaging and governed process knowledge.', note: 'Configure operational knowledge and process intelligence from preparation and sanitation through packaging', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence', 'Industrial Safety & Site Intelligence'], children: [
              { id: 'food-knowledge', title: 'Sanitation & Changeover Knowledge', note: 'Structure approved sanitation, allergen, setup and product-change procedures with governed version history' },
              { id: 'food-guidance', title: 'Multimodal Work Guidance', note: 'Deliver visual, video and text instructions with localization where supported and appropriate' },
              { id: 'food-process', title: 'Process Sequence', note: 'Understand preparation, sanitation, filling, sealing and packaging steps in operational context' },
              { id: 'food-evidence', title: 'Completion Evidence', note: 'Connect task completion and reviewed visual evidence with approved workflows and batch context' },
              { id: 'food-cycle', title: 'Cycle & Environment', note: 'Analyze cycle variation while incorporating line, batch, cold-chain and restricted-area context' }
            ]},
            { id: 'industry-advanced-materials', title: 'Advanced Materials', heroTagline: 'Preserve Expertise Across Complex Material Processes', summary: 'Expert knowledge across multi-stage material processes.', note: 'Configure industrial intelligence for specialized materials, multi-stage processes, critical assets and demanding production environments', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence', 'Industrial Safety & Site Intelligence'], children: [
              { id: 'materials-knowledge', title: 'Expert Process Knowledge', note: 'Preserve hard-to-replace demonstrations, procedures and decision context from experienced teams' },
              { id: 'materials-process', title: 'Material Transformation Intelligence', note: 'Turn multi-stage physical processes into searchable steps, states, transitions, events and evidence' },
              { id: 'materials-guidance', title: 'Critical Procedure Guidance', note: 'Deliver approved guidance with critical-step emphasis, governed escalation and human decision boundaries' },
              { id: 'materials-context', title: 'Batch, Asset & Environment Context', note: 'Connect observed work with batch, material, equipment and environmental context from supported systems' },
              { id: 'materials-time', title: 'Long-cycle & Transition Analysis', note: 'Compare sequence, duration, transitions, interruptions and variation across extended operating cycles' }
            ]},
            { id: 'industry-automotive', title: 'Automotive', heroTagline: 'Operational Intelligence Across Complex Automotive Production', summary: 'Assembly, material flow, equipment and plant operations.', note: 'Configure industrial intelligence for component and vehicle assembly, material flow, production equipment and plant operations', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence', 'Industrial Safety & Site Intelligence'], children: [
              { id: 'automotive-knowledge', title: 'Assembly & Variant Knowledge', note: 'Structure approved build, service and changeover knowledge for components, vehicles, lines and roles' },
              { id: 'auto-process', title: 'Production & Material Flow', note: 'Understand sequence, cycle state, material movement, interruptions and production events over time' },
              { id: 'auto-standard', title: 'Standard Work & Cycle Insight', note: 'Review approved execution, cycle variation, waiting and recurring process constraints with human oversight' },
              { id: 'auto-assets', title: 'Equipment & Asset Context', note: 'Connect visible equipment state with supported production, sensor and maintenance context' },
              { id: 'auto-safety', title: 'Plant Safety & Response', note: 'Prioritize supported site events and connect reviewed evidence with approved response procedures' }
            ]}
          ]}
        ]
      },
      { id: 'resource', title: 'Use Cases', note: 'Anonymous customer stories from industrial operations.', children: [
        { id: 'resource-use-cases', title: 'Use Cases', heroTagline: 'Anonymous Customer Stories from Industrial Operations', note: 'Advanced Materials · Electronics Assembly · Biscuit Production', children: [
          { id: 'case-advanced-materials', title: 'Advanced Materials', note: 'Preserving source-linked process knowledge across long-cycle rare-earth materials production' },
          { id: 'case-electronics-assembly', title: 'Electronics Assembly', note: 'Connecting variant, station and rework knowledge for high-mix assembly' },
          { id: 'case-biscuit-production', title: 'Biscuit Production', note: 'Keeping changeover, sanitation and packaging knowledge connected across a food line' }
        ] }
      ]},
      { id: 'company', title: 'Company', note: 'Allus AI builds the intelligence that powers the physical world.', children: [
        { id: 'company-about', title: 'Who We Are', note: 'An AI company building the intelligence layer for machines, factories and physical operations' },
        { id: 'company-mission', title: 'Mission', note: 'Build the intelligence that powers the physical world' },
        { id: 'company-partners', title: 'Partners', note: 'Technology infrastructure · industrial systems · deployment and integration · research' },
        { id: 'company-contact', title: 'Contact', note: 'Cupertino · Atlanta · connect with the team or book a demo' },
        { id: 'company-privacy-security', title: 'Privacy and Security', heroTagline: 'Product Privacy Practices and Information Security Controls', note: 'Personal data handling · GDPR rights · encryption · access control · tenant isolation' }
      ]},
      { id: 'connect', title: 'Connect', note: 'Start an evaluation, pilot or partnership.', children: [
        { id: 'connect-demo', title: 'Request a Demo', note: 'Company · industry · use case · environment · scale · timeline' },
        { id: 'connect-access', title: 'Request Model Access', note: 'Evaluation · SDK · benchmark · technical review' },
        { id: 'connect-pilot', title: 'Start a Pilot', note: 'Use-case review · data assessment · evaluation · pilot · production plan' },
        { id: 'connect-sales', title: 'Contact Sales', note: 'Enterprise license · private deployment · customization · support' },
        { id: 'connect-partner', title: 'Partnerships', note: 'Hardware · cameras · industrial systems · automation integrators · research' },
        { id: 'connect-support', title: 'Support', note: 'Documentation · technical support · enterprise support · security contact' }
      ]},
      { id: 'footer', title: 'Footer', note: 'Complete navigation, trust and legal information', children: [
        { id: 'footer-models', title: 'Models', note: 'AllusONE · AllusFlow · AllusEdge · Customization' },
        { id: 'footer-solutions', title: 'Solutions', note: 'Knowledge and Guidance · Production and Process · Equipment and Assets · Safety and Site Intelligence' },
        { id: 'footer-industries', title: 'Industries', note: 'Electronics Assembly · FMCG · Food & Beverage · Advanced Materials · Automotive' },
        { id: 'footer-resource', title: 'Use Cases', note: 'Use Cases · Customer Stories' },
        { id: 'footer-company', title: 'Company', note: 'About Us · Trust Center · Privacy and Security' },
        { id: 'footer-connect', title: 'Connect', note: 'Contact Us' },
        { id: 'footer-legal', title: 'Trust & Navigation', note: 'AI governance · security program · privacy controls · sitemap', children: [
          { id: 'sitemap', title: 'Sitemap', note: 'Complete navigation for every public page in this prototype.' }
        ] }
      ]}
    ]
  };

  const model = find('model');
  const solutions = find('solutions');
  const industries = find('industries');
  const resource = find('resource');
  const company = find('company');
  const connect = find('connect');
  const footer = find('footer');
  const home = find('home');
  const sitemap = find('sitemap');

  const connectIntentSlugById = {
    'connect-demo': 'demo',
    'connect-access': 'model-access',
    'connect-pilot': 'pilot',
    'connect-sales': 'sales',
    'connect-partner': 'partnerships',
    'connect-support': 'support'
  };
  const connectIntentBySlug = new Map(connect.children.map(node => [connectIntentSlugById[node.id], node]));

  const routes = new Map([
    ['/', { type: 'home', node: home }],
    ['/model', { type: 'model', node: model }],
    ['/model/allusone', { type: 'detail', node: find('allus-one'), parent: model }],
    ['/model/allusedge', { type: 'detail', node: find('allus-edge'), parent: model }],
    ['/model/allusflow', { type: 'detail', node: find('allus-flow'), parent: model }],
    ['/solutions', { type: 'solutions', node: solutions }],
    ['/resource', { type: 'resource', node: resource }],
    ['/company', { type: 'company', node: company }],
    ['/company/privacy-security', { type: 'privacy-security', node: find('company-privacy-security'), parent: company }],
    ['/connect', { type: 'connect', node: connect }],
    ['/sitemap', { type: 'sitemap', node: sitemap }]
  ]);

  const legacyRouteAliases = new Map([
    ['/model/platform', '/solutions'],
    ['/solutions/operational-knowledge', '/solutions/operational-knowledge-guidance'],
    ['/solutions/frontline-guidance-skills', '/solutions/operational-knowledge-guidance'],
    ['/solutions/production-intelligence', '/solutions/production-process-intelligence'],
    ['/solutions/process-monitoring', '/solutions/production-process-intelligence'],
    ['/solutions/standard-work-intelligence', '/solutions/production-process-intelligence'],
    ['/solutions/time-motion-intelligence', '/solutions/production-process-intelligence'],
    ['/solutions/robotic-perception', '/solutions'],
    ['/solutions/robotic-perception-automation', '/solutions'],
    ['/solutions/industrial-safety-security', '/solutions/industrial-safety-site-intelligence'],
    ['/solutions/product-assurance', '/solutions/production-process-intelligence'],
    ['/industries/industrial-security', '/solutions/industrial-safety-site-intelligence'],
    ['/industries/robotics-automation', '/solutions'],
    ['/industries/rare-earth-advanced-materials', '/industries/advanced-materials'],
    ['/industries/home-appliances', '/solutions'],
    ['/industries/automotive-new-energy', '/industries/automotive'],
    ['/resource/evidence', '/resource/use-cases'],
    ['/resource/trust', '/company/privacy-security'],
    ['/resource/solutions', '/solutions'],
    ['/resource/solution-guides', '/solutions'],
    ['/resource/models', '/model'],
    ['/resource/deployment', '/connect'],
    ['/resource/integrations', '/connect'],
    ['/resource/platform', '/solutions'],
    ['/resource/modules', '/solutions']
  ]);

  const slugById = {
    'solution-knowledge': 'operational-knowledge-guidance',
    'solution-production-process': 'production-process-intelligence',
    'solution-equipment': 'equipment-asset-intelligence',
    'solution-security': 'industrial-safety-site-intelligence',
    'industry-electronics': 'electronics-assembly',
    'industry-fmcg': 'fmcg',
    'industry-food': 'food-beverage',
    'industry-advanced-materials': 'advanced-materials',
    'industry-automotive': 'automotive'
  };

  const industryMediaById = {
    'industry-electronics': {
      src: './assets/media/allus-electronics-assembly-workstation.jpg',
      width: 1672,
      height: 941,
      alt: 'An electronics assembly operator handles a circuit board at a workstation with component trays, precision tools, fixtures and a production monitor.'
    },
    'industry-fmcg': {
      src: './assets/media/allus-fmcg-packaging-line.jpg',
      width: 1672,
      height: 941,
      alt: 'White containers and cartons move through multiple conveyor lanes around enclosed packaging equipment in an FMCG production facility.'
    },
    'industry-food': {
      src: './assets/media/allus-food-beverage-production.jpg',
      width: 1672,
      height: 941,
      alt: 'A worker in a white coat, hair covering, gloves and boots carries a hose between stainless-steel tanks and a bottle-filling line.'
    },
    'industry-advanced-materials': {
      src: './assets/media/allus-advanced-materials-facility-context.jpg',
      width: 1672,
      height: 941,
      alt: 'Production-scale advanced-materials equipment with feedstock hoppers, a central processing vessel and an operator inside a working industrial facility.'
    },
    'industry-automotive': {
      src: './assets/media/allus-automotive-body-shop.jpg',
      width: 1672,
      height: 941,
      alt: 'An unfinished vehicle body rests on a factory fixture among parts racks and material carts, with a worker standing in the aisle behind it.'
    }
  };

  const industryNarrativeById = {
    'industry-fmcg': {
      eyebrow: 'ONE CONFIGURED CHANGEOVER',
      title: 'One Changeover.',
      titleEmphasis: 'One Connected Context.',
      intro: 'Approved changeover knowledge, supported sequence context and reviewed line records stay connected around the intended product format and operating environment—without replacing site procedures or authorized judgment.',
      src: './assets/media/allus-fmcg-changeover-context.jpg',
      width: 1536,
      height: 1024,
      alt: 'Two packaging-line operators carrying out a planned format changeover, with one adjusting a removable conveyor guide while the other follows abstract instructions on a fixed station-mounted display.',
      frameLabel: 'PLANNED FORMAT CHANGEOVER',
      frameMeta: 'FMCG / PEOPLE · PROCESS · EQUIPMENT',
      contextListLabel: 'Configured FMCG changeover context',
      captionLabel: 'FMCG / CONFIGURED CHANGEOVER CONTEXT',
      contexts: [
        {
          domain: 'PEOPLE',
          title: 'Approved Knowledge',
          note: 'Resolve the reviewed procedure and linked source evidence for the configured role, line and product format.'
        },
        {
          domain: 'PROCESS',
          title: 'Configured Sequence',
          note: 'Present the relevant steps while supported pause, restart and production-event context remain available for review.'
        },
        {
          domain: 'EQUIPMENT',
          title: 'Reviewed Line Context',
          note: 'Preserve the configured line, change parts, source references and reviewer context around the handoff.'
        }
      ],
      caption: 'Knowledge, Sequence and Line Context Stay Connected Around the Same Configured Changeover.'
    },
    'industry-advanced-materials': {
      eyebrow: 'ONE CONFIGURED MATERIAL RUN',
      title: 'One Material Run.',
      titleEmphasis: 'Context Across Handoffs.',
      intro: 'Allus models structure supported physical stages and transitions; the solution keeps those records linked to approved process knowledge and configured batch, asset and environment context as authorized teams review a run from one handoff to the next.',
      src: './assets/media/allus-advanced-materials-run-context.jpg',
      width: 1536,
      height: 1024,
      alt: 'Two industrial operators coordinating a documented batch handoff beside an enclosed material-processing line, with source feedstock containers, the configured process vessel and prepared output totes visible in one continuous production scene.',
      frameLabel: 'STAGE-TO-STAGE HANDOFF',
      frameMeta: 'ADVANCED MATERIALS / PHYSICAL · TEMPORAL · REVIEW',
      contextListLabel: 'Source-linked advanced-materials run and stage-to-stage handoff context',
      captionLabel: 'ADVANCED MATERIALS / CONFIGURED RUN CONTEXT',
      contexts: [
        {
          domain: 'PHYSICAL CONTEXT',
          title: 'Supported Stage Evidence',
          note: 'Relate configured source moments to the visible equipment, carrier and work state present at a supported process stage.'
        },
        {
          domain: 'TEMPORAL CONTEXT',
          title: 'Reviewable Handoffs',
          note: 'Structure supported starts, pauses, transitions and transfers into source-linked moments that authorized reviewers can revisit.'
        },
        {
          domain: 'HUMAN REVIEW',
          title: 'Source-linked Run Record',
          note: 'Keep approved procedure references, configured batch, asset and environment context, and reviewer notes linked around the staged handoff.'
        }
      ],
      caption: 'Supported Physical Stages and Transitions Become Source-Linked Run Context That Authorized People Can Review.'
    }
  };

  const useCaseStories = [
    {
      nodeId: 'case-advanced-materials',
      slug: 'advanced-materials',
      index: '01',
      industry: 'ADVANCED MATERIALS',
      customer: 'CONFIDENTIAL CUSTOMER',
      title: 'Preserving Critical Process Knowledge Across Rare-Earth Materials Production.',
      dek: 'How an advanced-materials producer connected long-cycle process video, approved knowledge and specialist decisions in a source-linked operating context.',
      image: './assets/media/allus-advanced-materials-facility-context.jpg',
      alt: 'Illustrative advanced-materials production environment with an operator, thermal processing equipment and industrial control context.',
      industryRoute: '/industries/advanced-materials',
      background: 'The customer operates complex, multi-stage rare-earth materials processes where production knowledge is distributed across experienced specialists, approved procedures, equipment context and long-form video. Important transitions may occur far apart in time, while the reasoning behind an intervention can be difficult to reconstruct after a shift handoff.',
      challenge: 'The team needed a faster way to return to the relevant source moment, understand the physical and temporal context around it, and keep human decisions traceable without treating an entire recording as one undifferentiated file. The system also had to respect customer-controlled data and deployment boundaries.',
      approach: 'Allus configured a model-powered knowledge workflow around the customer’s approved sources and representative operating sequences. The engagement separated reusable model capability from customer-specific process knowledge, then evaluated each layer inside the intended runtime boundary.',
      modelRoles: [
        ['AllusONE', 'Connect approved video, imagery and procedural knowledge around the physical operating context.'],
        ['AllusFlow', 'Structure supported phases, transitions, interruptions and source-linked moments across long cycles.'],
        ['AllusEdge', 'Support validated local execution where latency, connectivity or customer data boundaries require it.']
      ],
      deploymentSteps: [
        ['Scope', 'Define the supported process stages, source systems, reviewer roles and operating boundary.'],
        ['Evidence', 'Create a customer-reviewed evaluation set around representative transitions and interventions.'],
        ['Configure', 'Connect multimodal retrieval, temporal structure and the intended edge or private runtime.'],
        ['Review', 'Evaluate relevance, traceability, transition boundaries and recovery with authorized specialists.']
      ],
      evaluationAreas: ['Source-moment retrieval', 'Phase and transition consistency', 'Evidence traceability', 'Human-review workflow', 'Runtime behavior and recovery']
    },
    {
      nodeId: 'case-electronics-assembly',
      slug: 'electronics-assembly',
      index: '02',
      industry: 'ELECTRONICS ASSEMBLY',
      customer: 'CONFIDENTIAL CUSTOMER',
      title: 'Connecting High-Mix Assembly Knowledge to the Station Where Work Happens.',
      dek: 'How an electronics manufacturer organized variant, station and rework context across approved documents, demonstrations and experienced operators.',
      image: './assets/media/allus-electronics-assembly-workstation.jpg',
      alt: 'Illustrative electronics assembly workstation with an operator, components, tools and production equipment.',
      industryRoute: '/industries/electronics-assembly',
      background: 'The customer manufactures electronic assemblies across product variants, station handoffs and specialized rework paths. Approved instructions coexist with demonstrations, engineering updates and practical knowledge held by experienced operators, making the correct context difficult to retrieve at the exact moment it is needed.',
      challenge: 'Static instructions could not easily express every supported variant, exception and source reference. The customer needed a governed way to retrieve the relevant procedure and demonstration context while preserving human review for ambiguous or unsupported situations.',
      approach: 'Allus organized approved multimodal sources around station, product and task context. The model system was configured to return source-linked guidance, represent supported sequence changes and operate close to the workstation when the evaluated deployment required it.',
      modelRoles: [
        ['AllusONE', 'Ground questions and guidance in approved visual, video and procedural sources.'],
        ['AllusFlow', 'Represent supported assembly phases, handoffs, interruptions and rework sequence context.'],
        ['AllusEdge', 'Bring validated workloads closer to the station on the intended customer hardware.']
      ],
      deploymentSteps: [
        ['Scope', 'Select the stations, product variants, roles and approved sources included in the engagement.'],
        ['Evidence', 'Build representative retrieval and sequence cases with engineering and operations reviewers.'],
        ['Configure', 'Connect station context, governed sources, supported workflows and the target runtime.'],
        ['Review', 'Test source relevance, variant boundaries, human escalation and local runtime behavior.']
      ],
      evaluationAreas: ['Station and variant retrieval', 'Source-linked guidance', 'Supported sequence boundaries', 'Human escalation', 'Edge latency and recovery']
    },
    {
      nodeId: 'case-biscuit-production',
      slug: 'biscuit-production',
      index: '03',
      industry: 'FOOD & BEVERAGE',
      customer: 'CONFIDENTIAL CUSTOMER',
      title: 'Keeping Biscuit-Line Changeover, Sanitation and Packaging Knowledge Connected.',
      dek: 'How a food manufacturer brought approved procedures and operating video into one reviewable context across a biscuit production line.',
      image: './assets/media/allus-food-beverage-production.jpg',
      alt: 'Illustrative biscuit production and packaging environment with operators, conveyors and enclosed food-processing equipment.',
      industryRoute: '/industries/food-beverage',
      background: 'The customer runs biscuit production through preparation, baking and cooling handoffs, sanitation, product changeovers and packaging setup. Knowledge spans approved procedures, training video and experienced line teams, while the relevant source can change with product format, station and operating state.',
      challenge: 'Teams needed to reach the approved step and source moment without searching through an entire recording or relying on memory alone. The system had to preserve food-safety procedures, customer authorization and clear boundaries between model assistance and operational responsibility.',
      approach: 'Allus configured approved video, imagery and procedures around supported changeover and production contexts. The engagement focused on source traceability, reviewable sequence context and a local operating option for environments with restricted connectivity or data movement.',
      modelRoles: [
        ['AllusONE', 'Connect approved video, imagery and procedures to the current operating context.'],
        ['AllusFlow', 'Structure supported changeover, sanitation and production phases with linked transitions.'],
        ['AllusEdge', 'Support validated local or offline operation near the line when required.']
      ],
      deploymentSteps: [
        ['Scope', 'Define the supported products, stations, procedures, roles and data boundaries.'],
        ['Evidence', 'Create customer-reviewed cases around changeovers, sanitation and packaging transitions.'],
        ['Configure', 'Link approved sources, supported sequence context and the intended local runtime.'],
        ['Review', 'Evaluate source relevance, step coverage, transition context, escalation and recovery.']
      ],
      evaluationAreas: ['Approved-procedure retrieval', 'Source-moment traceability', 'Transition and interruption linking', 'Human-review coverage', 'Local runtime recovery']
    }
  ];

  solutions.children.filter(node => node.id !== 'industries').forEach(node => {
    routes.set(`/solutions/${slugById[node.id]}`, { type: 'detail', node, parent: solutions });
  });
  industries.children.forEach(node => {
    routes.set(`/industries/${slugById[node.id]}`, { type: 'detail', node, parent: industries });
  });
  resource.children.forEach(node => {
    routes.set(`/resource/${node.id.replace('resource-', '')}`, { type: 'resource-detail', node, parent: resource });
  });
  useCaseStories.forEach(story => {
    routes.set(`/resource/use-cases/${story.slug}`, { type: 'case-study', node: find(story.nodeId), story, parent: find('resource-use-cases') });
  });

  const main = document.getElementById('main');
  const metaDescription = document.querySelector('meta[name="description"]');
  const skipLink = document.getElementById('skipLink');
  const siteFooter = document.getElementById('siteFooter');
  const siteHeader = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const menuLabel = document.getElementById('menuLabel');
  const navBackdrop = document.getElementById('navBackdrop');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const mainNav = document.getElementById('mainNav');
  const navLinks = [...mainNav.querySelectorAll('a[data-nav]:not(.mobile-nav-cta)')];
  const submenuItems = [...mainNav.querySelectorAll('.nav-item--submenu')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileNav = window.matchMedia('(max-width: 760px)');
  const hoverNav = window.matchMedia('(hover: hover) and (pointer: fine)');
  let revealObserver;
  let motionObserver;
  let mediaObserver;
  let mediaCleanup;
  let heroGridCleanup;
  let routeTransitionTimer;
  let headerFrame;
  let submenuOpenTimer;
  let submenuCloseTimer;
  let activeRouteKey = location.hash || '#/';
  let pendingNavigationType = null;
  const routeScrollPositions = new Map();
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const notFoundNode = {
    id: 'not-found',
    title: 'Page Not Found',
    note: 'The requested page does not exist or may have moved.'
  };

  function find(id, node = siteData) {
    if (node.id === id) return node;
    for (const child of node.children || []) {
      const found = find(id, child);
      if (found) return found;
    }
    return null;
  }

  function escapeHtml(value = '') {
    return value.replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  }

  function routePath() {
    const raw = location.hash.replace(/^#/, '') || '/';
    return raw.split('?')[0].replace(/\/$/, '') || '/';
  }

  function routeParams(hash = location.hash) {
    const query = hash.split('?')[1] || '';
    return new URLSearchParams(query);
  }

  function requestedSectionId(hash = location.hash) {
    const section = routeParams(hash).get('section') || '';
    return /^[A-Za-z][\w:-]*$/.test(section) ? section : '';
  }

  function selectedConnectIntent(hash = location.hash) {
    return connectIntentBySlug.get(routeParams(hash).get('intent')) || connect.children[0];
  }

  function connectPath(intent = connect.children[0]) {
    const node = typeof intent === 'string' ? find(intent) : intent;
    const slug = connectIntentSlugById[node?.id] || 'demo';
    return `/connect?intent=${slug}`;
  }

  function connectFormCopy(slug) {
    return {
      demo: ['Tell Us Where Intelligence Needs to Run.', 'Send demo request'],
      'model-access': ['Describe the Model Workload You Want to Evaluate.', 'Send model access request'],
      pilot: ['Define the Operation and Pilot Scope.', 'Send pilot request'],
      sales: ['Tell Us About Your Enterprise Requirements.', 'Send sales request'],
      partnerships: ['Describe the Partnership Opportunity.', 'Send partnership request'],
      support: ['Tell Us What You Need Help With.', 'Send support request']
    }[slug] || ['Tell Us Where Intelligence Needs to Run.', 'Send demo request'];
  }

  function onMediaQueryChange(query, handler) {
    if (typeof query.addEventListener === 'function') query.addEventListener('change', handler);
    else query.addListener(handler);
  }

  function link(path, label, className = '') {
    return `<a class="${className}" href="#${path}">${escapeHtml(label)} <span aria-hidden="true">→</span></a>`;
  }

  function sectionHeader(kicker, title, note = '', titleId = '', variant = '') {
    const heading = `<h2${titleId ? ` id="${escapeHtml(titleId)}"` : ''}>${title}</h2>`;
    if (variant === 'editorial') {
      return `<header class="section-head reveal"><p class="eyebrow">${escapeHtml(kicker)}</p>${heading}${note ? `<p class="section-intro">${escapeHtml(note)}</p>` : ''}</header>`;
    }
    if (note) {
      return `<header class="home-split-intro reveal"><div><p class="eyebrow">${escapeHtml(kicker)}</p>${heading}</div><p>${escapeHtml(note)}</p></header>`;
    }
    return `<header class="home-stage-intro reveal"><p class="eyebrow">${escapeHtml(kicker)}</p>${heading}</header>`;
  }

  function detailNote(note) {
    if (note && note.includes(' · ')) {
      return `<ul class="detail-points">${note.split(' · ').map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    }
    return `<p>${escapeHtml(note)}</p>`;
  }

  function fieldVisual() {
    return `
      <figure class="field-visual world-model-visual motion-sequence">
        <div class="field-toolbar"><span>INDUSTRIAL WORLD MODEL</span><span>PERSON · EQUIPMENT · MATERIAL · TIME</span></div>
        <div class="world-model-stage">
          <img src="./assets/media/allus-industrial-world-model.jpg" width="1586" height="992" alt="Operator assembling a component while model overlays connect the person, tool, material and machine state." decoding="async" fetchpriority="high">
          <div class="world-model-scrim" aria-hidden="true"></div>
          <ol class="perception-phases" aria-label="Allus model operating sequence">
            <li style="--phase:0"><span>01</span><strong>Observe</strong></li>
            <li style="--phase:1"><span>02</span><strong>Understand</strong></li>
            <li style="--phase:2"><span>03</span><strong>Follow Time</strong></li>
            <li style="--phase:3"><span>04</span><strong>Run Here</strong></li>
          </ol>
        </div>
        <div class="model-rail">
          <div><small>01</small><strong>AllusONE</strong><span>CORE</span></div>
          <div><small>02</small><strong>AllusFlow</strong><span>PRODUCT · TIME</span></div>
          <div><small>03</small><strong>AllusEdge</strong><span>PRODUCT · EDGE</span></div>
        </div>
      </figure>`;
  }

  function temporalProcessVisual(context = 'solution') {
    const compact = context === 'overview' ? ' temporal-media--compact' : '';
    const videoId = `temporal-process-${context}-video`;
    return `<figure class="temporal-media${compact} reveal" data-media-visual data-media-state="paused" data-media-user-paused="false">
      <div class="temporal-media-sequence motion-sequence">
        <div class="temporal-media-frame" data-media-viewport>
           <video id="${videoId}" muted playsinline preload="metadata" poster="./assets/media/allus-temporal-process.jpg" aria-hidden="true" data-media-video>
             <source src="./assets/media/allus-temporal-process-loop.mp4" type="video/mp4">
             <source src="./assets/media/allus-temporal-process-loop.webm" type="video/webm">
           </video>
           <div class="temporal-media-head"><span>TEMPORAL SEQUENCE</span><span>ONE WORK CYCLE · MULTIPLE STATES</span></div>
           <button class="media-toggle" type="button" aria-controls="${videoId}" data-media-toggle><span>Play motion</span><i aria-hidden="true"></i></button>
           <p class="media-status" role="status" aria-live="polite" data-media-status hidden></p>
          <ol class="temporal-legend" aria-label="Work-cycle stages">
            <li><span>01</span>Material arrives</li><li><span>02</span>Action begins</li><li><span>03</span>State changes</li><li><span>04</span>Interruption</li><li><span>05</span>Resume &amp; transfer</li>
          </ol>
        </div>
      </div>
      <figcaption><span>AllusFlow / temporal understanding</span><strong>Actions Become Structured Events. Events Become Operational Context.</strong><p>Action boundaries, process states, interruption and resume—structured into one reviewable timeline.</p></figcaption>
    </figure>`;
  }

  function modelNarrativeVisual(modelId) {
    const configs = {
      'allus-one': {
        src: './assets/media/allusone-industrial-reasoning.jpg',
        alt: 'Industrial workcell where an operator, machine state, material, gauge and approved procedure are connected as one multimodal context.',
        heading: 'One multimodal context.<br> <em>Reviewable structure.</em>',
        caption: 'People, equipment, material and time are read together, then returned as structured understanding for review.',
        aria: 'AllusONE scene-to-structured-understanding sequence',
        stages: [
          ['Perceive Scene', 'Locate supported people, parts, tools, equipment and regions in image or video.'],
          ['Relate Context', 'Connect visible entities, spatial relationships and configured task context.'],
          ['Ground Reasoning', 'Reference approved terminology, instructions and industrial knowledge.'],
          ['Structure Output', 'Return supported regions, answers or structured records for review.']
        ]
      },
      'allus-edge': {
        src: './assets/media/allusedge-local-intelligence.jpg',
        alt: 'Rugged edge computer connected to industrial cameras, machine signals and a technician-controlled operating panel.',
        heading: 'A hardware-aware path.<br> <em>Governed local execution.</em>',
        caption: 'AllusEdge takes a selected workload from qualified hardware to governed execution near the process.',
        aria: 'AllusEdge workload-to-local-execution sequence',
        stages: [
          ['Profile Workload', 'Define the supported task, stream configuration and operating envelope.'],
          ['Qualify Hardware', 'Select a target CPU, GPU, NPU or edge platform for validation.'],
          ['Execute Locally', 'Adapt the supported model and runtime, then run it where validated.'],
          ['Operate & Update', 'Monitor health and version state; stage updates, recovery and rollback.']
        ]
      },
      'allus-flow': {
        src: './assets/media/allusflow-temporal-model.jpg',
        width: 1536,
        height: 1024,
        alt: 'Single industrial workcell with one operator and restrained temporal echoes linking an initial action, state transition, interruption and resumed activity.',
        heading: 'Video over time.<br> <em>A reviewable account.</em>',
        caption: 'AllusFlow turns supported industrial video into timestamped records of actions, state change and continuity.',
        aria: 'AllusFlow video-to-temporal-record sequence',
        stages: [
          ['Locate Boundaries', 'Locate supported start, stop and transition points across a video sequence.'],
          ['Represent Transitions', 'Relate configured actions and states before, during and after each boundary.'],
          ['Link Continuity', 'Connect interruptions with later resumptions when source evidence supports that relationship.'],
          ['Anchor Evidence', 'Return timestamped temporal records linked to source moments that reviewers can inspect.']
        ]
      }
    };
    const config = configs[modelId];
    if (!config) return '';
    const boundary = modelId === 'allus-flow'
      ? `<p class="model-how-note reveal">Solutions decide how those records are searched, compared and used. ${link('/solutions/production-process-intelligence', 'Explore Production & Process Intelligence', 'text-link')}</p>`
      : '';
    return `<section class="home-band" aria-labelledby="${modelId}-explainer-title">
      <div class="shell">
        <figure class="home-hero-photo reveal">
          <img src="${config.src}" width="${config.width || 1536}" height="${config.height || 864}" alt="${escapeHtml(config.alt)}" loading="eager" fetchpriority="high" decoding="async">
        </figure>
        <header class="home-split-intro reveal">
          <div>
            <p class="eyebrow">HOW IT WORKS</p>
            <h2 id="${modelId}-explainer-title">${config.heading}</h2>
          </div>
          <p>${escapeHtml(config.caption)}</p>
        </header>
        <div class="home-deploy-track motion-sequence" aria-label="${escapeHtml(config.aria)}">
          ${config.stages.map(([title, note], index) => `<article class="home-deploy-step" style="--step:${index}">
            <span>0${index + 1}</span>
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(note)}</p>
          </article>`).join('')}
        </div>
        ${boundary}
      </div>
    </section>`;
  }

  function knowledgeGuidanceVisual(context = 'detail') {
    const compact = context === 'overview' ? ' knowledge-media--compact' : '';
    const stages = [
      ['Capture', 'Ingest approved demonstrations, video, images and documents.'],
      ['Structure', 'Organize content into governed, reusable procedure steps.'],
      ['Ground', 'Link search and answers to approved evidence.'],
      ['Guide', 'Deliver context-aware instructions, assignments and readiness records.']
    ];
    return `<figure class="knowledge-media${compact} reveal">
      <div class="knowledge-media-sequence motion-sequence">
        <div class="knowledge-media-frame">
          <img src="./assets/media/allus-knowledge-guidance.jpg" width="1536" height="864" alt="Technician demonstration, approved procedure materials and contextual workstation guidance connected in one industrial workflow." loading="lazy" decoding="async">
          <div class="knowledge-media-head" aria-hidden="true"><span>KNOWLEDGE FLOW</span><span>APPROVED SOURCES → WORK CONTEXT</span></div>
        </div>
        <ol class="knowledge-stages" aria-label="Knowledge-to-guidance workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span aria-hidden="true">0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Operational Knowledge &amp; Guidance</span><strong>One Governed Line from Expert Work to Usable Guidance.</strong><p>Final sources, approval states and delivery surfaces are configured around each operating environment.</p></figcaption>
    </figure>`;
  }

  function guidedWorkHandoffVisual() {
    const stages = [
      ['Resolve the Approved Version', 'Use configured role, product, line and task context to retrieve the applicable reviewed release.'],
      ['Deliver the Work Context', 'Present relevant steps, images, source moments and supporting evidence through configured work surfaces.'],
      ['Return Completion Context', 'Link assignments, completion records and reviewer notes back to the governed knowledge record.']
    ];
    return `<figure class="knowledge-handoff-visual reveal">
      <div class="knowledge-handoff-main">
        <div class="knowledge-handoff-context motion-sequence">
          <p class="eyebrow">ONE GOVERNED PROCEDURE</p>
          <div class="knowledge-handoff-context-copy">
            <span>APPROVED SOURCE / WORK CONTEXT</span>
            <h3>Guidance for This Role,<br>This Product and This Task.</h3>
            <p>Source moments, ownership and release context stay visible where approved guidance is used.</p>
          </div>
          <dl class="knowledge-handoff-meta">
            <div><dt>Source</dt><dd>Reviewed demonstration + procedure</dd></div>
            <div><dt>Scope</dt><dd>Role · product · line · task</dd></div>
            <div><dt>State</dt><dd>Reviewed release context</dd></div>
          </dl>
        </div>
        <div class="knowledge-handoff-frame motion-sequence">
          <img src="./assets/media/allus-guided-work-handoff.jpg" width="1535" height="1025" alt="Experienced technician demonstrating a fixture setup while another operator follows approved guidance on a fixed station-mounted display at an electronics assembly workcell." loading="lazy" decoding="async">
          <div class="knowledge-handoff-head" aria-hidden="true"><span>GUIDED WORK</span><span>APPROVED SOURCE → WORK CONTEXT → REVIEW</span></div>
        </div>
      </div>
      <ol class="knowledge-handoff-steps motion-sequence" aria-label="Approved knowledge-to-guided-work handoff">
        ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span aria-hidden="true">0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
      </ol>
      <figcaption><span>Operational Knowledge &amp; Guidance / guided work handoff</span><strong>The Applicable Knowledge Release Stays Linked from Approved Source to the Point of Work and Back to Review.</strong></figcaption>
    </figure>`;
  }

  function operationalEvidenceVisual(kind = 'equipment') {
    const configs = {
      equipment: {
        src: './assets/media/allus-equipment-intelligence.jpg',
        width: 1536,
        height: 864,
        alt: 'Technician reviewing an industrial equipment asset, physical indicators, approved service procedure and supporting system context.',
        eyebrow: 'ASSET CONTEXT',
        sequence: 'STATE → CONTEXT → GUIDANCE → EVIDENCE',
        label: 'Equipment & Asset Intelligence',
        caption: 'Allus Connects Visible Equipment State with Approved Knowledge, System Context and Reviewed Maintenance Evidence.',
        aria: 'Equipment state-to-maintenance workflow',
        stages: [
          ['Observe State', 'Read configured visible conditions, indicators and operating context.'],
          ['Connect Context', 'Combine observations with supported system records.'],
          ['Ground Service Work', 'Link maintenance questions to approved procedures and evidence.'],
          ['Preserve Evidence', 'Record reviewed observations and service context.']
        ]
      },
      safety: {
        src: './assets/media/allus-governed-site.jpg',
        width: 1672,
        height: 941,
        alt: 'Authorized industrial staff reviewing a site plan beside a marked pedestrian route and separated equipment area.',
        eyebrow: 'SITE CONTEXT',
        sequence: 'GOVERN → REVIEW → RESPOND → PRESERVE',
        label: 'Industrial Safety & Site Intelligence',
        caption: 'Governed Site Context and Approved Procedures Support Human-Reviewed, Evidence-Linked Response.',
        aria: 'Governed site event-to-response workflow',
        stages: [
          ['Govern Sources', 'Apply configured source, zone, access and retention boundaries.'],
          ['Review Events', 'Present configured event context for authorized human review.'],
          ['Ground Response', 'Suggest relevant approved procedures for reviewer confirmation.'],
          ['Preserve Context', 'Retain reviewed timelines, sources and response context.']
        ]
      }
    };
    const config = configs[kind] || configs.equipment;
    return `<figure class="evidence-media evidence-media--${kind} reveal">
      <div class="evidence-media-sequence">
        <div class="evidence-media-frame motion-sequence">
          <img src="${config.src}" width="${config.width}" height="${config.height}" alt="${config.alt}" loading="lazy" decoding="async">
          <div class="evidence-media-head"><span>${config.eyebrow}</span><span>${config.sequence}</span></div>
        </div>
        <ol class="evidence-stages motion-sequence" aria-label="${config.aria}">
          ${config.stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>${config.label}</span><strong>${config.caption}</strong></figcaption>
    </figure>`;
  }

  function processReviewVisual() {
    const stages = [
      ['Revisit Source Evidence', 'Open the linked video moment and its structured event record.'],
      ['Compare Approved Context', 'Review the relevant procedure, production state and supported system context.'],
      ['Record Human Review', 'Preserve the reviewer’s decision and supporting context before another workflow uses the record.']
    ];
    return `<figure class="evidence-media evidence-media--process-review reveal">
      <div class="evidence-media-sequence">
        <div class="evidence-media-frame motion-sequence">
          <img src="./assets/media/allus-process-evidence-review.jpg" width="1672" height="941" alt="Two authorized industrial operations engineers reviewing timestamped work video and approved context, with one pointing to source evidence and the other recording the decision." loading="lazy" decoding="async">
          <div class="evidence-media-head"><span>REVIEW WORKFLOW</span><span>SOURCE EVIDENCE → APPROVED CONTEXT → HUMAN DECISION</span></div>
        </div>
        <ol class="evidence-stages evidence-stages--three motion-sequence" aria-label="Source evidence-to-human-review workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Production &amp; Process Intelligence / reviewed application workflow</span><strong>Temporal Evidence Becomes Reviewable Work Context—Not an Automatic Operational Decision.</strong></figcaption>
    </figure>`;
  }

  function assetServiceContinuityVisual() {
    const stages = [
      ['Open the Asset Record', 'Bring the qualified configuration, recent supported events and reviewed observations into one service context.'],
      ['Confirm the Work Context', 'Reference approved procedures and site-authorized guidance for the maintenance task.'],
      ['Preserve the Handoff', 'Link completed work, source references and reviewer context back to the service record.']
    ];
    return `<figure class="asset-service-visual reveal">
      <div class="asset-service-frame motion-sequence">
        <img src="./assets/media/allus-asset-service-continuity.jpg" width="1800" height="1200" alt="Qualified maintenance engineer recording an evidence-linked service handoff at a fixed industrial terminal beside the configured pump and motor asset." loading="lazy" decoding="async">
        <div class="asset-service-head"><span>SERVICE CONTINUITY</span><span>ASSET STATE → WORK CONTEXT → HANDOFF</span></div>
      </div>
      <div class="asset-service-ledger motion-sequence">
        <p class="eyebrow">ONE CONFIGURED ASSET</p>
        <ol class="asset-service-steps" aria-label="Asset service continuity workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Equipment &amp; Asset Intelligence / service continuity</span><strong>The Record Stays Connected to the Asset Before, During and After Qualified Maintenance Work.</strong></figcaption>
    </figure>`;
  }

  function governedEventReviewVisual() {
    const stages = [
      ['Reconstruct Permitted Context', 'Bring together allowed source moments, configured zones and the supported time sequence.'],
      ['Confirm Response Context', 'Reference approved procedures and escalation paths without inferring identity, intent or cause.'],
      ['Record the Human Decision', 'Preserve the review, source references and response context within configured retention boundaries.']
    ];
    return `<figure class="site-review-visual reveal">
      <div class="site-review-frame motion-sequence">
        <img src="./assets/media/allus-governed-event-review.jpg" width="1536" height="1024" alt="Authorized site-operations lead reviewing permitted event context at a fixed industrial terminal while the configured pedestrian and vehicle routes remain visible beyond the workstation." loading="lazy" decoding="async">
        <div class="site-review-head"><span>GOVERNED REVIEW</span><span>PERMITTED CONTEXT → HUMAN DECISION</span></div>
      </div>
      <div class="site-review-ledger motion-sequence">
        <p class="eyebrow">ONE REVIEWED SITE EVENT</p>
        <ol class="site-review-steps" aria-label="Governed site-event review workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Industrial Safety &amp; Site Intelligence / governed review</span><strong>The Event Record Stays Reviewable from Permitted Evidence Through Human-Confirmed Response Context.</strong></figcaption>
    </figure>`;
  }

  function industryMedia(node) {
    const media = industryMediaById[node.id] || industryMediaById['industry-electronics'];
    return `<figure class="industry-feature shell reveal">
      <div class="industry-feature-frame"><img src="${media.src}" width="${media.width}" height="${media.height}" alt="${escapeHtml(media.alt)}" loading="lazy" decoding="async"></div>
      <figcaption><span>ALLUSONE / ${escapeHtml(node.title)}</span><p>AllusONE, AllusFlow and AllusEdge are configured around this industry's people, processes, assets and operating conditions.</p></figcaption>
    </figure>`;
  }

  function industryNarrative(node) {
    const narrative = industryNarrativeById[node.id];
    if (!narrative) return '';
    const titleId = `${node.id}-narrative-title`;
    const domains = narrative.contexts.map(context => context.domain).join(' · ');
    const frameLabel = narrative.frameLabel || narrative.eyebrow;
    const frameMeta = narrative.frameMeta || `${node.title} / ${domains}`;
    const contextListLabel = narrative.contextListLabel || `Configured ${node.title} operating context`;
    const captionLabel = narrative.captionLabel || `${node.title} / CONFIGURED OPERATING CONTEXT`;
    return `<section class="shell industry-narrative-section" aria-labelledby="${titleId}">
      <header class="industry-narrative-intro home-stage-intro reveal">
        <p class="eyebrow">${escapeHtml(narrative.eyebrow)}</p>
        <h2 id="${titleId}">${escapeHtml(narrative.title)}<br><em>${escapeHtml(narrative.titleEmphasis)}</em></h2>
        <p>${escapeHtml(narrative.intro)}</p>
      </header>
      <figure class="industry-context-visual">
        <div class="industry-context-frame motion-sequence">
          <img src="${narrative.src}" width="${narrative.width}" height="${narrative.height}" alt="${escapeHtml(narrative.alt)}" loading="lazy" decoding="async">
          <div class="industry-context-head" aria-hidden="true"><span>${escapeHtml(frameLabel)}</span><span>${escapeHtml(frameMeta)}</span></div>
        </div>
        <ul class="industry-context-grid motion-sequence" aria-label="${escapeHtml(contextListLabel)}">
          ${narrative.contexts.map((context, index) => `<li style="--context-step:${index}"><span aria-hidden="true">0${index + 1}</span><div><small>${escapeHtml(context.domain)}</small><strong>${escapeHtml(context.title)}</strong><p>${escapeHtml(context.note)}</p></div></li>`).join('')}
        </ul>
        <figcaption><span>${escapeHtml(captionLabel)}</span><strong>${escapeHtml(narrative.caption)}</strong></figcaption>
      </figure>
    </section>`;
  }

  function homeHeroPhoto() {
    return `<figure class="home-hero-photo reveal">
      <img src="./assets/media/allus-industrial-world-model.jpg" width="1586" height="992" alt="Operator assembling a component while industrial context connects the person, tool, material and machine state." decoding="async" fetchpriority="high">
      <figcaption class="home-hero-photo-meta" aria-hidden="true">
        <span>Person</span><span>Equipment</span><span>Material</span><span>Time</span>
      </figcaption>
    </figure>`;
  }

  function homeModelContinuum() {
    const products = [
      {
        model: 'AllusFlow',
        tag: 'Time',
        note: 'Actions, states and transitions across industrial video.',
        path: '/model/allusflow'
      },
      {
        model: 'AllusEdge',
        tag: 'Edge',
        note: 'Qualified local execution near cameras and machines.',
        path: '/model/allusedge'
      }
    ];
    const caps = ['Visual understanding', 'Structured reasoning', 'Configured industrial context'];
    return `<section class="home-model-continuum home-band" aria-labelledby="home-model-title">
      <div class="shell">
        <header class="home-split-intro reveal">
          <div>
            <p class="eyebrow">MODEL SYSTEM</p>
            <h2 id="home-model-title">AllusONE for<br> <em>time and the edge.</em></h2>
          </div>
          <p>One core model. Two products carry that intelligence across time and onto the edge.</p>
        </header>
        <article class="home-featured-model reveal">
          <div class="home-featured-copy">
            <p class="eyebrow">Core model</p>
            <h3>AllusONE</h3>
            <p>Multimodal perception and structured reasoning for industrial work.</p>
            ${link('/model/allusone', 'Explore AllusONE', 'text-link')}
          </div>
          <ul class="home-capability-rail" aria-label="AllusONE capabilities">
            ${caps.map((cap, index) => `<li style="--cap:${index}"><span>0${index + 1}</span><strong>${cap}</strong></li>`).join('')}
          </ul>
        </article>
        <div class="home-model-duo" aria-label="Products">
          ${products.map((product, index) => `<a class="home-model-duo-item reveal" href="#${product.path}" style="--reveal-delay:${index * 90}ms">
            <span class="home-duo-tag">${product.tag}</span>
            <h3>${product.model}</h3>
            <p>${product.note}</p>
            <span class="home-duo-cta">Explore <i aria-hidden="true">→</i></span>
          </a>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function homeSolutionsBand(solutionNodes) {
    const entries = solutionAtlasEntries(solutionNodes);
    const oneLiners = {
      'solution-knowledge': 'Turn approved work into searchable guidance people can use.',
      'solution-production-process': 'Structure work video into reviewable process evidence.',
      'solution-equipment': 'Connect visible asset condition with maintenance context.',
      'solution-security': 'Support governed review of configured site events.'
    };
    return `<section class="home-solutions home-band" aria-labelledby="home-solutions-title">
      <div class="shell">
        <header class="home-stage-intro reveal">
          <p class="eyebrow">SOLUTIONS</p>
          <h2 id="home-solutions-title">Captured knowledge,<br> <em>understood operations.</em></h2>
          <p>Four model-powered solutions across people, processes, assets and sites.</p>
        </header>
        <div class="home-index home-index--solutions" aria-label="Solution families">
          ${entries.map((entry, index) => `<a class="home-index-row reveal" href="#/solutions/${slugById[entry.node.id]}" style="--reveal-delay:${index * 55}ms; --row:${index}">
            <span class="home-index-num">0${index + 1}</span>
            <div class="home-index-copy">
              <p class="eyebrow">${escapeHtml(entry.domain)}</p>
              <h3>${escapeHtml(entry.node.title)}</h3>
              <p>${escapeHtml(oneLiners[entry.node.id] || entry.summary)}</p>
            </div>
            <span class="home-index-mark" aria-hidden="true"><i></i></span>
            <b class="home-index-arrow" aria-hidden="true">→</b>
          </a>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function homeProductionBand() {
    const modes = [
      ['Edge', 'Next to cameras and machines'],
      ['On-Premise', 'Inside your own facility'],
      ['Private Cloud', 'Inside your private cloud'],
      ['Hybrid', 'Local execution, coordinated centrally']
    ];
    return `<section class="home-production home-band" aria-labelledby="home-production-title">
      <div class="shell">
        <header class="home-split-intro reveal">
          <div>
            <p class="eyebrow">PRODUCTION & DEPLOYMENT</p>
            <h2 id="home-production-title">Run intelligence where<br> <em>decisions happen.</em></h2>
          </div>
          <p>Edge, on-premise, private cloud or hybrid—same controlled path into production.</p>
        </header>
        <div class="home-deploy-track motion-sequence" aria-label="Deployment modes">
          ${modes.map(([title, note], index) => `<article class="home-deploy-step" style="--step:${index}">
            <span>0${index + 1}</span>
            <h3>${title}</h3>
            <p>${note}</p>
          </article>`).join('')}
        </div>
        <div class="home-stage-close home-stage-close--left reveal">
          ${link('/model', 'See the Production Path', 'text-link')}
        </div>
      </div>
    </section>`;
  }

  function renderHome() {
    const industryNodes = industries.children;
    const solutionNodes = solutions.children.filter(node => node.id !== 'industries');
    return `
      <section class="hero shell home-hero" aria-labelledby="home-title">
        <div class="home-hero-grid" aria-hidden="true"><canvas></canvas></div>
        <div class="hero-copy">
          <p class="eyebrow home-hero-kicker">ADVANCED VISION FOUNDATION MODELS</p>
          <h1 id="home-title">AllusONE.<br><em>Industrial intelligence</em> for the physical world.</h1>
          <p class="hero-summary">Advanced vision foundation models built for real-world latency, reliability and compute constraints.</p>
          <div class="hero-actions">
            ${link('/model', 'Explore Models', 'button button-primary')}
            ${link(connectPath(), 'Request a Demo', 'text-link')}
          </div>
          <ul class="home-hero-facts" aria-label="Product positioning">
            <li><span>Core</span><strong>AllusONE</strong></li>
            <li><span>Products</span><strong>Flow · Edge</strong></li>
            <li><span>Runs on</span><strong>Edge · Plant · Cloud</strong></li>
          </ul>
        </div>
        <div class="hero-media">${homeHeroPhoto()}</div>
      </section>

      ${homeModelContinuum()}
      ${homeSolutionsBand(solutionNodes)}
      ${homeProductionBand()}

      <section class="home-industries home-band" aria-labelledby="home-industries-title">
        <div class="shell">
          <header class="home-stage-intro reveal">
            <p class="eyebrow">INDUSTRIES</p>
            <h2 id="home-industries-title">Industrial context is not<br> <em>an afterthought.</em></h2>
            <p>Configured for the markets where physical work happens.</p>
          </header>
          <div class="home-industry-mosaic" aria-label="Industries">
            ${industryNodes.map((node, index) => `<a class="home-industry-tile reveal" href="#/industries/${slugById[node.id]}" style="--reveal-delay:${index * 50}ms; --tile:${index}">
              <span>0${index + 1}</span>
              <h3>${escapeHtml(node.title)}</h3>
              <p>${escapeHtml(node.summary || node.note)}</p>
              <b aria-hidden="true">↗</b>
            </a>`).join('')}
          </div>
        </div>
      </section>

      ${ctaSection()}`;
  }

  function modelCard(node, index) {
    const path = { 'allus-one': '/model/allusone', 'allus-edge': '/model/allusedge', 'allus-flow': '/model/allusflow' }[node.id];
    return `<article class="model-card reveal">
      <div class="model-index">0${index + 1}</div>
      <div><p class="eyebrow">FOUNDATION MODEL</p><h3>${escapeHtml(node.title)}</h3><p>${escapeHtml(node.note)}</p></div>
      <div class="model-detail-list">${node.children.map(child => `<span><b>${escapeHtml(child.title)}</b>${escapeHtml(child.note)}</span>`).join('')}</div>
      ${link(path, `Explore ${node.title}`, 'model-link')}
    </article>`;
  }

  function modelFamilyChapter(node, index, familyRole = 'product') {
    const configs = {
      'allus-one': {
        slug: 'allusone',
        role: 'Industrial perception and reasoning',
        optimized: 'Configured multimodal perception and structured reasoning',
        validate: 'Task behavior · grounding · output structure',
        src: './assets/media/allusone-industrial-reasoning.jpg',
        alt: 'Illustrative industrial workcell linking visual input, equipment state, material context and approved instructions.'
      },
      'allus-edge': {
        slug: 'allusedge',
        role: 'Local execution near the process',
        optimized: 'Qualified latency- and footprint-sensitive execution',
        validate: 'Target hardware · streams · memory · power',
        src: './assets/media/allusedge-local-intelligence.jpg',
        alt: 'Illustrative rugged edge computer connected to industrial cameras, machine context and a technician-controlled interface.'
      },
      'allus-flow': {
        slug: 'allusflow',
        role: 'Actions and state across time',
        optimized: 'Temporal segmentation, state transitions and sequence continuity',
        validate: 'Action boundaries · transition consistency · evidence traceability',
        src: './assets/media/allusflow-temporal-model.jpg',
        width: 1536,
        height: 1024,
        alt: 'Single industrial workcell with one operator and restrained temporal echoes representing actions, state transitions, interruption and resumed activity.'
      }
    };
    const config = configs[node.id];
    const isCore = familyRole === 'core';
    const eyebrow = isCore ? 'Core' : 'Product';
    const headLabel = isCore ? 'CORE' : 'PRODUCT';
    return `<article class="model-family-card model-family-card--${node.id} model-family-card--${familyRole} reveal">
      <div class="model-family-media motion-sequence">
        <img src="${config.src}" width="${config.width || 1536}" height="${config.height || 864}" alt="${config.alt}" loading="lazy" decoding="async">
        <div class="model-family-media-head"><span>0${index + 1} / ${headLabel}</span><span>MODEL SYSTEM</span></div>
        <p class="model-family-role">${config.role}</p>
      </div>
      <div class="model-family-copy">
        <p class="eyebrow">${eyebrow}</p>
        <h2>${escapeHtml(node.title)}</h2>
        <p class="model-family-summary">${escapeHtml(node.note)}.</p>
        <dl class="model-family-specs">
          <div><dt>ROLE</dt><dd>${config.role}</dd></div>
          <div><dt>OPTIMIZED FOR</dt><dd>${config.optimized}</dd></div>
          <div><dt>VALIDATE</dt><dd>${config.validate}</dd></div>
        </dl>
        ${link(`/model/${config.slug}`, `Explore ${node.title}`, 'text-link')}
      </div>
    </article>`;
  }

  function modelSystemRail(activeId = 'allus-one') {
    const items = [
      { id: 'allus-one', slug: 'allusone', title: 'AllusONE', kind: 'Core' },
      { id: 'allus-flow', slug: 'allusflow', title: 'AllusFlow', kind: 'Product' },
      { id: 'allus-edge', slug: 'allusedge', title: 'AllusEdge', kind: 'Product' }
    ];
    return `<nav class="model-system-rail reveal" aria-label="Allus model system">
      ${items.map(item => item.id === activeId
        ? `<span class="model-system-rail-item is-current" aria-current="page"><small>${item.kind}</small><strong>${item.title}</strong></span>`
        : `<a class="model-system-rail-item" href="#/model/${item.slug}"><small>${item.kind}</small><strong>${item.title}</strong></a>`
      ).join('')}
    </nav>`;
  }

  function deploymentLifecycle(steps) {
    return `<ol class="production-lifecycle motion-sequence" aria-label="Production deployment lifecycle">
      ${steps.map((step, index) => `<li style="--step:${index}"><span>${String(index + 1).padStart(2, '0')}</span><i aria-hidden="true"></i><strong>${escapeHtml(step)}</strong></li>`).join('')}
    </ol>`;
  }

  function productionContextVisual() {
    return `<figure class="home-hero-photo reveal">
      <img src="./assets/media/allus-production-deployment-context.jpg" width="1536" height="864" alt="Illustrative production environment with an industrial camera, a safely mounted local edge computer and an engineer operating a local terminal." loading="lazy" decoding="async">
      <figcaption class="home-hero-photo-meta">
        <span>Industrial source</span>
        <span>Local execution</span>
        <span>Human operations</span>
      </figcaption>
    </figure>`;
  }

  function solutionLoop(steps) {
    return `<ol class="platform-loop-track" aria-label="Solution operating loop">${steps.map((step, index) => `<li class="platform-loop-step" style="--loop-delay:${20 + index * 80}ms"><span>0${index + 1}</span><i aria-hidden="true"></i><strong>${escapeHtml(step)}</strong></li>`).join('')}</ol>`;
  }

  const solutionAtlasById = {
    'solution-knowledge': {
      domain: 'PEOPLE & KNOWLEDGE',
      role: 'Preserve know-how',
      summary: 'Turn approved demonstrations, procedures and operating records into searchable knowledge, evidence-linked answers and role-aware guidance.',
      src: './assets/media/allus-guided-work-handoff.jpg',
      width: 1535,
      height: 1025,
      position: '50% 48%',
      visual: 'Illustrative industrial knowledge handoff showing two technicians working at a fixture beside a fixed guidance display.'
    },
    'solution-production-process': {
      domain: 'PROCESS & EXECUTION',
      role: 'Understand work over time',
      summary: 'Structure supported work video and production context into reviewable events, procedure comparisons and process evidence.',
      src: './assets/media/allus-process-sequence-context.jpg',
      width: 1625,
      height: 968,
      position: '50% 47%',
      visual: 'Illustrative industrial work sequence showing input material, an active manual step and a completed handoff, with source-linked process moments available for authorized human review.'
    },
    'solution-equipment': {
      domain: 'EQUIPMENT & ASSETS',
      role: 'Ground service context',
      summary: 'Bring reviewed visual observations, approved maintenance knowledge and supported system context into one evidence-linked service workflow.',
      src: './assets/media/allus-asset-service-continuity.jpg',
      width: 1800,
      height: 1200,
      position: '50% 50%',
      visual: 'Illustrative equipment service context showing a technician consulting approved source material at a fixed terminal beside an industrial pump.'
    },
    'solution-security': {
      domain: 'SAFETY & SITES',
      role: 'Govern site response',
      summary: 'Support authorized review of configured site events, their context and approved response procedures within explicit access and retention controls.',
      src: './assets/media/allus-governed-event-review.jpg',
      width: 1536,
      height: 1024,
      position: '50% 50%',
      visual: 'Illustrative authorized site review showing an operations coordinator at a fixed station with the physical production route visible beyond it.'
    }
  };

  function solutionAtlasEntries(solutionNodes) {
    return solutionNodes.map(node => ({ node, ...solutionAtlasById[node.id] })).filter(entry => entry.src);
  }

  function solutionAtlas(solutionNodes) {
    const entries = solutionAtlasEntries(solutionNodes);
    return `<section class="solution-atlas-section shell" aria-labelledby="solution-atlas-title">
      <header class="solution-atlas-intro reveal">
        <p class="eyebrow">FOUR OPERATIONAL DOMAINS</p>
        <h2 id="solution-atlas-title">Four Surfaces.<br><em>One Model System.</em></h2>
        <p>Each solution starts from a different operational problem while drawing from the same model system and production deployment path.</p>
      </header>
      <div class="solution-directory" aria-label="Solution family details">
        ${entries.map((entry, index) => `<a class="solution-directory-row reveal" href="#/solutions/${slugById[entry.node.id]}"><span aria-hidden="true">0${index + 1}</span><div><p class="eyebrow">${escapeHtml(entry.domain)}</p><h3>${escapeHtml(entry.node.title)}</h3><p>${escapeHtml(entry.summary)}</p></div><b aria-hidden="true">Explore ↗</b></a>`).join('')}
      </div>
    </section>`;
  }

  function productionPath() {
    const zones = [
      ['Industrial Sources', 'What feeds the models', ['Cameras & Video', 'Machines & Sensor Context', 'Procedures & Process Events']],
      ['Deployment Environments', 'Where the models run', ['Edge Devices', 'On-Premise Systems', 'Private Cloud & Hybrid']],
      ['Operations & Integration', 'How it is operated', ['Model Versions', 'Runtime Health & Audit History', 'Supported APIs & Systems']]
    ];
    return `<div class="production-path reveal" aria-label="Industrial sources connected through controlled deployment environments to operations and integration systems">
      ${zones.map(([title, role, nodes], zoneIndex) => `<article class="production-path-col">
        <span>0${zoneIndex + 1}</span>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(role)}</p>
        <ul>${nodes.map(node => `<li>${escapeHtml(node)}</li>`).join('')}</ul>
      </article>`).join('')}
    </div>`;
  }

  function productionLedger(capabilities) {
    const groups = [
      { label: 'PREPARE', note: 'Ground the models for the plant.', items: capabilities.slice(0, 4) },
      { label: 'OPERATE', note: 'Run, govern and connect the system.', items: capabilities.slice(4) }
    ];
    let index = 0;
    return `<div class="production-ledger reveal" aria-label="Shared production capabilities">
      ${groups.map(group => `<div class="production-ledger-group">
        <div class="production-ledger-label">
          <p class="eyebrow">${escapeHtml(group.label)}</p>
          <p>${escapeHtml(group.note)}</p>
        </div>
        <div class="production-ledger-rows">
          ${group.items.map(item => `<article class="production-ledger-row">
            <span>${String(++index).padStart(2, '0')}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.note)}</p>
          </article>`).join('')}
        </div>
      </div>`).join('')}
    </div>`;
  }

  function industryCard(node, index) {
    const path = `/industries/${slugById[node.id]}`;
    const media = industryMediaById[node.id] || industryMediaById['industry-electronics'];
    return `<a class="industry-card reveal industry-${index + 1}" href="#${path}">
      <div class="industry-visual" aria-hidden="true"><img src="${media.src}" width="${media.width}" height="${media.height}" alt="" loading="lazy" decoding="async"></div>
      <div class="industry-card-copy"><span>0${index + 1}</span><h3>${escapeHtml(node.title)}</h3><p>${escapeHtml(node.summary || node.note)}</p><b>Explore ↗</b></div>
    </a>`;
  }

  function renderModel() {
    const productionSystem = find('production-system');
    const core = find('allus-one');
    const products = [
      { node: find('allus-flow'), tag: 'Time', path: '/model/allusflow' },
      { node: find('allus-edge'), tag: 'Edge', path: '/model/allusedge' }
    ];
    return `${pageHero(model, 'MODELS', 'AllusONE.<br> <em>Products for Time and the Edge.</em>', 'AllusONE for industrial perception and reasoning. AllusFlow for actions across time. AllusEdge for local execution.')}
      <section class="home-band" aria-labelledby="model-core-title">
        <div class="shell">
          <header class="home-split-intro reveal">
            <div>
              <p class="eyebrow">MODEL SYSTEM</p>
              <h2 id="model-core-title">Choose the model<br> <em>for the work.</em></h2>
            </div>
            <p>Choose by task complexity, latency target, footprint and deployment environment.</p>
          </header>
          <article class="home-featured-model reveal">
            <div class="home-featured-copy">
              <p class="eyebrow">Core model</p>
              <h3>${escapeHtml(core.title)}</h3>
              <p>${escapeHtml(core.note)}.</p>
              ${link('/model/allusone', 'Explore AllusONE', 'text-link')}
            </div>
            <ul class="home-capability-rail" aria-label="AllusONE specification">
              ${core.children.map((child, index) => `<li style="--cap:${index}"><span>0${index + 1}</span><strong>${escapeHtml(child.title)}</strong></li>`).join('')}
            </ul>
          </article>
          <div class="home-model-duo" aria-label="Products">
            ${products.map((product, index) => `<a class="home-model-duo-item reveal" href="#${product.path}" style="--reveal-delay:${index * 90}ms">
              <span class="home-duo-tag">${product.tag}</span>
              <h3>${escapeHtml(product.node.title)}</h3>
              <p>${escapeHtml(product.node.note)}.</p>
              <span class="home-duo-cta">Explore <i aria-hidden="true">→</i></span>
            </a>`).join('')}
          </div>
        </div>
      </section>
      <section class="home-band" aria-labelledby="model-production-title">
        <div class="shell">
          <header class="home-split-intro reveal">
            <div>
              <p class="eyebrow">PRODUCTION DEPLOYMENT</p>
              <h2 id="model-production-title">A production path<br> <em>from pilot to plant.</em></h2>
            </div>
            <p>Hardware, integrations and operating controls are qualified for each environment.</p>
          </header>
          ${productionContextVisual()}
          <div class="model-path">
            <div class="home-deploy-track home-deploy-track--six motion-sequence" aria-label="Production deployment lifecycle">
              ${productionSystem.technicalJourney.map((step, index) => `<article class="home-deploy-step" style="--step:${index}">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${escapeHtml(step)}</h3>
              </article>`).join('')}
            </div>
          </div>
          <div class="home-stage-close home-stage-close--left reveal">
            ${link(connectPath('connect-sales'), 'Discuss Production Deployment', 'text-link')}
          </div>
        </div>
      </section>
      ${ctaSection()}`;
  }

  function renderSolutions() {
    const solutionNodes = solutions.children.filter(node => node.id !== 'industries');
    const productionSystem = find('production-system');
    return `${pageHero(solutions, 'SOLUTIONS', 'Industrial Intelligence Organized<br> <em>Around Operational Problems.</em>', solutions.description, 'split')}
      <section class="shell solution-system-intro">
        <div class="platform-product-loop motion-sequence">
          <div class="platform-statement"><p class="eyebrow">MODEL-POWERED SOLUTIONS</p><h2>${escapeHtml(solutions.descriptor)}</h2><p>Each solution is a configurable application of the same reusable model intelligence—not an isolated, one-off algorithm.</p></div>
          <div><p class="eyebrow">OPERATING LOOP</p>${solutionLoop(solutions.productLoop)}</div>
        </div>
      </section>
      ${solutionAtlas(solutionNodes)}
      <section class="platform-foundation" aria-labelledby="production-capabilities-title">
        <div class="shell">
          <header class="home-split-intro reveal">
            <div>
              <p class="eyebrow">PRODUCTION CAPABILITIES</p>
              <h2 id="production-capabilities-title">Built to Operate<br> <em>In Industrial Reality.</em></h2>
            </div>
            <p>Allus solutions share the same model family and production capabilities. They are configurable applications of reusable industrial intelligence—not isolated, one-off algorithms.</p>
          </header>
          <div class="model-path">
            <div class="home-deploy-track home-deploy-track--six motion-sequence" aria-label="Production deployment journey">
              ${productionSystem.technicalJourney.map((step, index) => `<article class="home-deploy-step" style="--step:${index}">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${escapeHtml(step)}</h3>
              </article>`).join('')}
            </div>
          </div>
          <div class="production-path-stage">
            <header class="production-path-intro reveal">
              <p class="eyebrow">DEPLOYMENT PATH</p>
              <h3>Sources to operations,<br> <em>under your control.</em></h3>
              <p>Wherever it runs, data controls, evaluation, versioning and audit history stay inside your production system.</p>
            </header>
            ${productionPath()}
          </div>
          ${productionLedger(productionSystem.technicalCapabilities)}
        </div>
      </section>
      <section class="industry-section" aria-labelledby="solutions-industries-title">
        <div class="shell">
          <header class="home-split-intro reveal">
            <div>
              <p class="eyebrow">INDUSTRIES</p>
              <h2 id="solutions-industries-title">Priority Markets and<br> <em>Solution Narratives.</em></h2>
            </div>
            <p>${escapeHtml(industries.note)}</p>
          </header>
          <div class="industry-mosaic">${industries.children.map((node, index) => industryCard(node, index)).join('')}</div>
        </div>
      </section>
      ${ctaSection()}`;
  }

  function modelSpecBody(note) {
    if (note && note.includes(' · ')) {
      return `<ul class="model-spec-points">${note.split(' · ').map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    }
    return `<p>${escapeHtml(note)}</p>`;
  }

  function modelSpecSection(node, children) {
    const specItems = children.filter(child => child.title !== 'Purpose');
    return `<section class="model-spec home-band" aria-labelledby="model-spec-title">
      <div class="shell">
        <header class="home-split-intro reveal">
          <div>
            <p class="eyebrow">MODEL SPEC</p>
            <h2 id="model-spec-title">${escapeHtml(node.title)} in<br> <em>evaluation terms.</em></h2>
          </div>
          <p>Written for workload evaluation, not as a catalog sheet.</p>
        </header>
        <div class="model-spec-grid" aria-label="${escapeHtml(node.title)} specification">
          ${specItems.map((child, index) => `<article class="model-spec-card reveal" id="section-${child.id}" tabindex="-1" style="--tile:${index}; --reveal-delay:${index * 55}ms">
            <span>0${index + 1}</span>
            <h3>${escapeHtml(child.title)}</h3>
            ${modelSpecBody(child.note)}
          </article>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderDetail(node, parent) {
    const isIndustry = parent.id === 'industries';
    const isModel = parent.id === 'model';
    const label = isIndustry ? 'INDUSTRY' : parent.title.toUpperCase();
    const detailChildren = node.children?.length ? node.children : [{ id: `${node.id}-overview`, title: 'Overview', note: node.note }];
    const solutionItems = isIndustry ? node.solutionConfig : node.capabilityRefs;
    const solutionAssociation = solutionItems?.length ? `<section class="platform-association shell reveal"><div class="platform-association-head home-split-intro"><div><p class="eyebrow">${isIndustry ? 'INDUSTRY SOLUTION MIX' : 'SOLUTION FOUNDATION'}</p><h2>${isIndustry ? `Solutions configured for <em>${escapeHtml(node.title)}.</em>` : 'How this solution <em>is powered.</em>'}</h2></div><p>${isIndustry ? 'Selected Allus solutions are configured around the knowledge, process, asset and governance realities of this operating environment.' : 'Each solution combines reusable model intelligence, operational workflows and production deployment around a defined industrial outcome.'}</p></div><div class="platform-association-list${isIndustry ? '' : ' platform-association-list--two'}">${solutionItems.map((item, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${escapeHtml(item)}</span>`).join('')}</div>${link('/solutions', 'Explore Solutions', 'text-link')}</section>` : '';
    const modelMedia = isModel ? modelNarrativeVisual(node.id) : '';
    const explanatoryMedia = modelMedia
      ? modelMedia
      : node.id === 'solution-production-process'
        ? `<section class="shell detail-media-section">${temporalProcessVisual('detail')}</section>`
        : node.id === 'solution-knowledge'
          ? `<section class="shell detail-media-section">${knowledgeGuidanceVisual('detail')}</section>`
          : node.id === 'solution-equipment'
            ? `<section class="shell detail-media-section">${operationalEvidenceVisual('equipment')}</section>`
            : node.id === 'solution-security'
              ? `<section class="shell detail-media-section">${operationalEvidenceVisual('safety')}</section>`
              : (isIndustry ? industryMedia(node) : '');
    const solutionNarrativeMedia = node.id === 'solution-knowledge' ? `<section class="shell knowledge-handoff-section" aria-labelledby="knowledge-handoff-title">
      <header class="knowledge-handoff-intro home-stage-intro reveal">
        <p class="eyebrow">KNOWLEDGE IN USE</p>
        <h2 id="knowledge-handoff-title">One Approved Source.<br><em>Grounded Guidance.</em></h2>
        <p>Approved demonstrations, procedure steps and source evidence are delivered for the configured role and work context, then remain linked as people complete the work and reviewers update what follows.</p>
      </header>
      ${guidedWorkHandoffVisual()}
    </section>` : node.id === 'solution-production-process' ? `<section class="shell process-review-section" aria-labelledby="process-review-title">
      <header class="process-review-intro home-stage-intro reveal">
        <p class="eyebrow">HUMAN REVIEW LOOP</p>
        <h2 id="process-review-title">Evidence in Context.<br><em>People Decide.</em></h2>
        <p>The application brings linked source moments, approved procedures and supported production context together for authorized review before downstream use.</p>
      </header>
      ${processReviewVisual()}
    </section>` : node.id === 'solution-equipment' ? `<section class="shell asset-service-section" aria-labelledby="asset-service-title">
      <header class="asset-service-intro home-stage-intro reveal">
        <p class="eyebrow">ASSET SERVICE CONTINUITY</p>
        <h2 id="asset-service-title">One Asset Record.<br><em>Context That Follows.</em></h2>
        <p>Reviewed observations, approved service knowledge and supported system events stay connected around the configured asset, so qualified teams can understand what changed and preserve what was done.</p>
      </header>
      ${assetServiceContinuityVisual()}
    </section>` : node.id === 'solution-security' ? `<section class="shell site-review-section" aria-labelledby="site-review-title">
      <header class="site-review-intro home-stage-intro reveal">
        <p class="eyebrow">HUMAN-REVIEWED SITE CONTEXT</p>
        <h2 id="site-review-title">One Reviewed Event.<br><em>Context That Stays.</em></h2>
        <p>Permitted source moments, configured zone context and approved response knowledge stay linked as authorized reviewers assess what happened and record what follows.</p>
      </header>
      ${governedEventReviewVisual()}
    </section>` : '';
    const industryNarrativeMedia = isIndustry ? industryNarrative(node) : '';
    const requestLabel = isModel ? 'Request Model Access' : 'Request a Demo';
    const detailTitle = node.heroTagline
      ? `${escapeHtml(node.title)}.<br> <em>${escapeHtml(node.heroTagline)}.</em>`
      : `${escapeHtml(node.title)}.`;
    return `${pageHero(node, label, detailTitle, node.note)}
      ${explanatoryMedia}
      ${isModel ? modelSpecSection(node, detailChildren) : `<section class="shell detail-layout">
        <aside aria-label="On this page"><p class="eyebrow">IN THIS PAGE</p>${detailChildren.map((child, index) => `<button type="button" data-scroll-target="section-${child.id}" aria-controls="section-${child.id}">0${index + 1} ${escapeHtml(child.title)}</button>`).join('')}<a href="#${connectPath('connect-demo')}">${requestLabel} →</a></aside>
        <div class="detail-content">${detailChildren.map((child, index) => `<section id="section-${child.id}" class="detail-block reveal" tabindex="-1"><span class="detail-index" aria-hidden="true">0${index + 1}</span><p class="eyebrow">0${index + 1}</p><h2>${escapeHtml(child.title)}</h2>${detailNote(child.note)}${child.children ? `<div class="detail-subgrid">${child.children.map(item => `<article><h3>${escapeHtml(item.title)}</h3>${detailNote(item.note)}</article>`).join('')}</div>` : ''}</section>`).join('')}</div>
      </section>`}
      ${isModel ? `<section class="model-switcher-band"><div class="shell">${modelSystemRail(node.id)}</div></section>` : ''}
      ${solutionNarrativeMedia}
      ${industryNarrativeMedia}
      ${solutionAssociation}
      ${ctaSection()}`;
  }

  function renderResource() {
    return renderUseCases(find('resource-use-cases'));
  }

  function renderUseCases(node) {
    return `${pageHero(node, 'SUCCESS STORIES', 'Customer Context from<br> <em>the Physical World.</em>', 'Anonymous case studies from advanced materials, electronics assembly and biscuit production.')}
      <section class="shell case-journal-lede home-split-intro reveal" aria-labelledby="case-journal-title">
        <div>
          <p class="eyebrow">THREE CUSTOMER STORIES</p>
          <h2 id="case-journal-title">Real Engagements.<br><em>Protected Identities.</em></h2>
        </div>
        <p>Each story describes an actual customer engagement while protecting the customer's identity and results. The articles walk through the operating problem, the model roles, the deployment path and how the work was evaluated.</p>
      </section>
      <section class="shell case-journal" aria-label="Customer case study articles">
        ${useCaseStories.map((story, index) => `<a class="case-journal-card reveal" href="#/resource/use-cases/${story.slug}" style="--reveal-delay:${index * 55}ms">
          <figure><img src="${story.image}" width="1672" height="941" alt="${escapeHtml(story.alt)}" loading="lazy" decoding="async"><span>${story.index}</span></figure>
          <article>
            <div class="case-journal-meta"><span>${escapeHtml(story.industry)}</span><span>${escapeHtml(story.customer)}</span></div>
            <h2>${escapeHtml(story.title)}</h2>
            <p>${escapeHtml(story.dek)}</p>
            <footer><b>Read Case Study <span aria-hidden="true">↗</span></b><small>Identity &amp; metrics withheld</small></footer>
          </article>
        </a>`).join('')}
      </section>
      ${ctaSection()}`;
  }

  function renderCaseStudy(story) {
    const sectionLinks = [
      ['Customer background', 'case-background'],
      ['The challenge', 'case-challenge'],
      ['Model approach', 'case-approach'],
      ['Deployment path', 'case-deployment'],
      ['Evidence & outcomes', 'case-evidence']
    ];
    return `<article class="case-study">
      <section class="case-study-hero shell" aria-labelledby="case-study-title">
        <p class="eyebrow">ANONYMIZED CUSTOMER STORY</p>
        <a class="case-study-back" href="#/resource/use-cases">← All use cases</a>
        <h1 id="case-study-title">${escapeHtml(story.title)}</h1>
        <p class="case-study-dek">${escapeHtml(story.dek)}</p>
        <dl class="case-study-meta">
          <div><dt>INDUSTRY</dt><dd>${escapeHtml(story.industry)}</dd></div>
          <div><dt>CUSTOMER</dt><dd>IDENTITY WITHHELD</dd></div>
          <div><dt>PUBLIC RESULTS</dt><dd>METRICS WITHHELD</dd></div>
        </dl>
      </section>
      <figure class="case-study-cover shell"><img src="${story.image}" width="1672" height="941" alt="${escapeHtml(story.alt)}"><figcaption><span>OPERATING CONTEXT</span><p>${escapeHtml(story.industry)} · ${escapeHtml(story.customer)}</p></figcaption></figure>
      <div class="case-study-layout shell">
        <aside aria-label="In this case study"><p class="eyebrow">IN THIS STORY</p>${sectionLinks.map(([label, id], index) => `<button type="button" data-scroll-target="${id}" aria-controls="${id}"><span>0${index + 1}</span>${escapeHtml(label)}</button>`).join('')}</aside>
        <div class="case-study-content">
          <section id="case-background" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">01 / CUSTOMER BACKGROUND</p><h2>Industrial Knowledge Lives Across People, Media and Systems.</h2><p>${escapeHtml(story.background)}</p></section>
          <section id="case-challenge" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">02 / THE CHALLENGE</p><h2>Return to the Right Context Without Losing the Source.</h2><p>${escapeHtml(story.challenge)}</p></section>
          <section id="case-approach" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">03 / MODEL APPROACH</p><h2>One Model System, Configured Around the Operation.</h2><p>${escapeHtml(story.approach)}</p><div class="case-study-models">${story.modelRoles.map(([name, note]) => `<article><strong>${escapeHtml(name)}</strong><p>${escapeHtml(note)}</p></article>`).join('')}</div></section>
          <section id="case-deployment" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">04 / DEPLOYMENT PATH</p><h2>Move from Scope to Evidence Before Production Claims.</h2><ol class="case-study-steps">${story.deploymentSteps.map(([title, note], index) => `<li><span>0${index + 1}</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(note)}</p></div></li>`).join('')}</ol></section>
          <section id="case-evidence" class="case-study-section case-study-evidence reveal" tabindex="-1"><p class="eyebrow">05 / EVIDENCE &amp; OUTCOMES</p><h2>Publish the Evaluation Frame.<br><em>Protect Customer Results.</em></h2><p>Each engagement is measured against the evaluation areas below. Customer-specific baselines and outcomes remain confidential under the engagement agreement.</p><div class="case-study-evaluation"><p class="eyebrow">EVALUATION AREAS</p><ul>${story.evaluationAreas.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div></section>
        </div>
      </div>
      <section class="case-study-next home-split-intro shell"><div><p class="eyebrow">RELATED INDUSTRY</p><h2>Explore the broader <em>${escapeHtml(story.industry.toLowerCase())}</em> context.</h2></div>${link(story.industryRoute, 'View Industry', 'text-link')}</section>
      ${ctaSection()}
    </article>`;
  }

  function renderPrivacySecurity(node) {
    const privacySections = [
      ['privacy-contact', 'Privacy Contact', 'Allus AI Inc. is headquartered in Atlanta, Georgia. For privacy questions, rights requests, or concerns about personal data practices, contact contact@allus.ai.'],
      ['privacy-collection', 'Personal Information We Collect', 'Website and customer personal information is generally limited to name, job title, employer name, work address, work email, and work phone number. We use this information to provide prospects and customers with services. We do not sell personal information.'],
      ['privacy-website', 'Website and Service Use', 'Like most websites, Allus AI collects certain information automatically in log files, including IP address, general location, browser type, operating system, and pages viewed. We use this information to operate, diagnose, improve, and understand use of the website and services.'],
      ['privacy-sharing', 'Sharing and Subprocessors', 'Personal information is stored in databases hosted by third parties in the United States for cloud storage and retrieval. We may engage vendors to send product, service, or event information, and we share data with agents and service providers who perform functions on our behalf. A current subprocessor list is available on request.'],
      ['privacy-transfers', 'International Transfers', 'Information we collect is processed in the United States. Where GDPR applies, Allus AI uses appropriate safeguards such as standard contractual clauses and data processing agreements with vendors when feasible and appropriate.'],
      ['privacy-retention', 'Storage and Retention', 'Personal data is stored on Allus AI systems and cloud database services in the United States. Service data is retained for the customer relationship and a period thereafter for operations and archives. Prospect data is retained while it has business value, then purged. Verified erasure requests are honored subject to legal exceptions.']
    ];
    const securityPractices = [
      ['Infrastructure and Network', 'AWS-hosted isolated environments, private VPC architecture, firewall protection, HTTPS/TLS, and cloud-native DDoS mitigation. Production and administrative interfaces are restricted to authorized personnel and services.'],
      ['Identity and Access', 'Role-based access control, least privilege, and separation of duties. Multi-factor authentication is required for administrative accounts, with strong password practices and immediate access revocation during offboarding. Privileged access is logged and reviewed according to risk.'],
      ['Encryption and Secrets', 'TLS 1.2 or higher protects data in transit. AES-256 encryption protects data at rest, including databases and backups. Credentials, keys, and tokens are not embedded in source code and are stored through approved protected mechanisms.'],
      ['Customer Data and Tenants', 'Customer data is logically isolated between tenants. Access is limited to authorized personnel for approved support and maintenance and is logged. Collection and retention are limited to legitimate business, contractual, and operational needs. Customer data is not used to train shared foundation models without explicit authorization.'],
      ['Application Security', 'Changes use version control, peer review, automated testing, dependency vulnerability scanning, and controlled production deployments. Critical or high-risk findings are resolved before release unless residual risk is explicitly accepted by authorized management.'],
      ['Vulnerability Management', 'Continuous dependency scanning, infrastructure monitoring, patch management, and prioritized remediation based on severity, exploitability, exposure, and customer impact. Remediation is tracked to closure.'],
      ['Monitoring and Incident Readiness', 'Audit logs cover authentication, administrative actions, infrastructure changes, and security events. Systems are designed to support investigation, containment, recovery, and customer notification where applicable.'],
      ['Resilience and Continuity', 'Automated backups, disaster-recovery procedures, infrastructure redundancy where practical, and periodic recovery-procedure review support availability and recoverability.'],
      ['People and Endpoints', 'Personnel receive security-awareness and phishing training. Company devices use encryption, automatic updates, endpoint protection, and screen-lock enforcement.'],
      ['AI Model and Inference', 'Access to model infrastructure is controlled, manufacturing data is handled securely, tenants are separated, inference services are monitored, and deployments are version controlled. Model releases follow the same review, test, deployment, monitoring, and rollback expectations as other production changes.']
    ];
    const principles = [
      ['Security by Design', 'Security is addressed when requirements and architecture are formed, not added only at the end of development.'],
      ['Least Privilege', 'Users, services, and administrators receive only the access necessary for authorized responsibilities, for only as long as needed.'],
      ['Defense in Depth', 'Multiple complementary safeguards are used so failure of one control does not automatically compromise the system or protected data.'],
      ['Data Protection Lifecycle', 'Data is protected during collection, transmission, storage, use, backup, sharing, and disposal according to sensitivity and customer obligations.'],
      ['Secure Defaults', 'Systems begin in restrictive configurations; unnecessary services, access paths, privileges, data collection, and dependencies are avoided.'],
      ['Shared Responsibility', 'Allus AI secures the platform and supporting infrastructure; customers remain responsible for user permissions, credentials, endpoints, and integration configuration unless otherwise agreed.']
    ];
    return `${pageHero(node, 'PRIVACY AND SECURITY', 'How Allus Protects<br> <em>Personal and Customer Data.</em>', 'Product privacy practices for website and service personal data, together with the information-security controls that protect Allus platforms and customer deployments.')}
      <nav class="privacy-section-nav shell" aria-label="Privacy and security sections">
        ${[['Privacy', 'privacy-overview'], ['Security Practices', 'security-practices'], ['Principles', 'security-principles'], ['Contact', 'privacy-questions']].map(([label, id], index) => `<button type="button" data-scroll-target="${id}" aria-controls="${id}"><span>0${index + 1}</span>${label}<i aria-hidden="true">↓</i></button>`).join('')}
      </nav>
      <section id="privacy-overview" class="shell privacy-overview reveal" aria-labelledby="privacy-overview-title" tabindex="-1">
        <header class="home-stage-intro">
          <p class="eyebrow">Product Privacy</p>
          <h2 id="privacy-overview-title">Privacy practices for<br> <em>website visitors and customers.</em></h2>
          <p>Allus AI Inc. is a B2B company building industrial intelligence for production environments. This page describes how we collect and use personal data and the security controls that protect that data. Assurance roadmap and certification status are published separately in the <a href="https://trust.allus.ai" target="_blank" rel="noreferrer">Trust Center ↗</a>.</p>
        </header>
        <aside class="privacy-meta">
          <div><span>Effective</span><strong>July 1, 2025</strong></div>
          <div><span>Security Practices</span><strong>July 1, 2026</strong></div>
          <div><span>Headquarters</span><strong>Atlanta, Georgia</strong></div>
        </aside>
      </section>
      <section class="shell privacy-grid" aria-label="Privacy practices">
        ${privacySections.map(([id, title, note], index) => `<article id="${id}" class="reveal" tabindex="-1" style="--reveal-delay:${index * 40}ms"><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p></article>`).join('')}
      </section>
      <section class="shell privacy-rights-panel reveal" aria-labelledby="privacy-rights-detail-title">
        <div class="home-split-intro">
          <div>
            <p class="eyebrow">GDPR and Similar Laws</p>
            <h2 id="privacy-rights-detail-title">Rights you can <em>exercise.</em></h2>
          </div>
          <p>Contact us to confirm whether we process your personal data, request access or correction, ask us to erase or restrict processing where applicable, object to direct marketing, or request a portable copy when technically feasible.</p>
        </div>
        <ul>
          ${['Right to Be Informed', 'Right of Access', 'Right to Rectification', 'Right to Erasure', 'Right to Restrict Processing', 'Right of Data Portability', 'Right to Object', 'Rights Related to Automated Decision-Making'].map(item => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </section>
      <section id="security-practices" class="privacy-security-band dark-section" aria-labelledby="security-practices-title" tabindex="-1"><div class="shell">
        <header class="home-stage-intro reveal">
          <p class="eyebrow">Information Security Practices</p>
          <h2 id="security-practices-title">Controls that protect<br> <em>platform and customer data.</em></h2>
          <p>These practices summarize Allus AI’s operational security baseline for applications, cloud infrastructure, AI models, and customer-facing integrations. Depth of review scales with data sensitivity, privilege, exposure, and customer impact.</p>
        </header>
        <div class="privacy-security-grid">${securityPractices.map(([title, note], index) => `<article class="reveal" style="--reveal-delay:${index * 35}ms"><span>0${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p></article>`).join('')}</div>
      </div></section>
      <section id="security-principles" class="shell privacy-principles" aria-labelledby="security-principles-title" tabindex="-1">
        <header class="home-stage-intro reveal">
          <p class="eyebrow">Secure Engineering Principles</p>
          <h2 id="security-principles-title">Security is built into<br> <em>the engineering lifecycle.</em></h2>
        </header>
        <div>${principles.map(([title, note], index) => `<article class="reveal" style="--reveal-delay:${index * 40}ms"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p></article>`).join('')}</div>
      </section>
      <section id="privacy-questions" class="shell privacy-contact reveal" aria-labelledby="privacy-questions-title" tabindex="-1">
        <div class="home-split-intro">
          <div>
            <p class="eyebrow">Questions and Requests</p>
            <h2 id="privacy-questions-title">Contact the privacy and <em>security team.</em></h2>
          </div>
          <p>We do not knowingly solicit or receive information from children. For privacy rights, security questions, or complaints, contact the addresses below. For assurance roadmap and certification materials, visit the Trust Center.</p>
        </div>
        <div class="privacy-contact-cards">
          <a href="mailto:contact@allus.ai"><span>Privacy Requests</span><strong>contact@allus.ai</strong><small>Rights, questions, and complaints</small><i aria-hidden="true">→</i></a>
          <a href="https://trust.allus.ai" target="_blank" rel="noreferrer"><span>Assurance Roadmap</span><strong>Trust Center</strong><small>trust.allus.ai</small><i aria-hidden="true">↗</i></a>
        </div>
      </section>
      ${ctaSection()}`;
  }

  function renderResourceDetail(node) {
    if (node.id === 'resource-use-cases') return renderUseCases(node);
    return renderResource();
  }

  function renderCompany() {
    const partnerAreas = [
      ['Technology & Infrastructure', 'Compute, cameras, runtime systems and data infrastructure for evaluated industrial deployments.'],
      ['Industrial Systems', 'Machine, automation and operational-technology context required around the model system.'],
      ['Deployment & Integration', 'Engineering and integration capabilities that connect customer environments to governed model workflows.'],
      ['Research', 'Collaboration around multimodal intelligence, physical-world understanding and reliable deployment.']
    ];
    return `${pageHero(company, 'COMPANY', 'Intelligence Belongs in<br> <em>the Physical World.</em>', company.note)}
      <nav class="company-section-nav shell" aria-label="Company page sections">
        ${[['Who We Are', 'company-who'], ['Mission', 'company-mission-section'], ['Partners', 'company-partners-section'], ['Contact', 'company-contact-section']].map(([label, id], index) => `<button type="button" data-scroll-target="${id}" aria-controls="${id}"><span>0${index + 1}</span>${label}<i aria-hidden="true">↓</i></button>`).join('')}
      </nav>
      <section id="company-who" class="company-story dark-section" aria-labelledby="company-who-title" tabindex="-1"><div class="shell">
        <p class="eyebrow">WHO WE ARE</p>
        <div class="company-story-head home-split-intro reveal"><h2 id="company-who-title">The next frontier of AI is not only digital.<br><em>It is physical.</em></h2><p>Allus AI was founded on a simple belief: the next great frontier of artificial intelligence is not just understanding the digital world, but understanding and transforming the physical world.</p></div>
        <div class="company-story-body reveal">
          <p>Today’s most powerful AI systems can reason over language, software and information. Yet much of the world still runs through machines, factories, workers and physical processes that remain largely invisible to AI. Critical knowledge is trapped in video, human experience and fragmented industrial systems.</p>
          <p>We founded Allus AI to change that. We are building the intelligence layer that enables machines and industrial systems to perceive what is happening, understand its context, support better decisions and, over time, enable governed action.</p>
          <p>When machines can understand their environment, intelligence becomes part of the infrastructure of the physical world—helping factories become more adaptive while amplifying human expertise at global scale.</p>
        </div>
        <div class="company-presence" aria-label="Allus AI locations"><span>BUILDING FROM</span><strong>Cupertino</strong><strong>Atlanta</strong></div>
      </div></section>
      <section id="company-mission-section" class="company-mission shell" aria-labelledby="company-mission-title" tabindex="-1">
        <p class="eyebrow">MISSION</p>
        <h2 id="company-mission-title">Build the intelligence<br><em>that powers the physical world.</em></h2>
        <div class="company-mission-points">
          <div class="reveal"><span>01 / PERCEIVE</span><p>Understand what is happening across cameras, machines and physical work.</p></div>
          <div class="reveal" style="--reveal-delay:60ms"><span>02 / UNDERSTAND</span><p>Connect operating context and approved knowledge to support better decisions.</p></div>
          <div class="reveal" style="--reveal-delay:120ms"><span>03 / ACT</span><p>Enable governed action inside real production environments over time.</p></div>
        </div>
      </section>
      <section id="company-partners-section" class="company-partners shell" aria-labelledby="company-partners-title" tabindex="-1">
        <header class="home-split-intro reveal"><div><p class="eyebrow">PARTNERS</p><h2 id="company-partners-title">Build the surrounding system<br><em>with the right collaborators.</em></h2></div><p>Allus AI’s partnership program is organized around the infrastructure, industrial context, deployment capability and research required to bring foundation models into physical operations.</p></header>
        <div class="company-partner-list">${partnerAreas.map(([title, note], index) => `<article class="reveal" style="--reveal-delay:${index * 50}ms"><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p></article>`).join('')}</div>
      </section>
      <section id="company-contact-section" class="company-contact dark-section" aria-labelledby="company-contact-title" tabindex="-1"><div class="shell">
        <p class="eyebrow">CONTACT</p>
        <div><h2 id="company-contact-title">Bring us the operation<br><em>AI still cannot understand.</em></h2><p>Connect with the Allus AI team in Cupertino or Atlanta to discuss a customer evaluation, deployment or partnership.</p><div class="company-contact-actions">${link(connectPath(), 'Connect with Allus', 'button button-primary')}${link(connectPath(), 'Book a Demo', 'text-link')}</div></div>
      </div></section>`;
  }

  function renderConnect() {
    const activeIntent = selectedConnectIntent();
    const activeSlug = connectIntentSlugById[activeIntent.id];
    const formCopy = connectFormCopy(activeSlug);
    return `${pageHero(connect, 'CONNECT', 'Start an Evaluation,<br> <em>Pilot or Partnership.</em>', connect.note)}
      <section class="connect-layout shell">
        <div class="connect-options" role="radiogroup" aria-label="Contact request type">${connect.children.map((node, index) => {
          const selected = node === activeIntent;
          return `<button type="button" role="radio" class="connect-option${selected ? ' active' : ''}" data-connect-option="${escapeHtml(node.title)}" data-connect-intent="${connectIntentSlugById[node.id]}" aria-checked="${selected}" tabindex="${selected ? '0' : '-1'}"><span class="connect-option-index">0${index + 1}</span><span class="connect-option-copy"><strong class="connect-option-title">${escapeHtml(node.title)}</strong><span class="connect-option-note">${escapeHtml(node.note)}</span></span></button>`;
        }).join('')}</div>
        <form class="demo-form" id="demoForm" aria-describedby="formNote">
          <input type="hidden" id="formIntent" name="intent" value="${activeSlug}">
          <p class="eyebrow" id="formEyebrow">${escapeHtml(activeIntent.title).toUpperCase()}</p>
          <h2 id="formTitle">${escapeHtml(formCopy[0])}</h2>
          <div class="form-grid">
            <label><span>Name</span><input required name="name" autocomplete="name" placeholder="Your name"></label>
            <label><span>Work email</span><input required type="email" name="email" autocomplete="email" placeholder="name@company.com"></label>
            <label><span>Company</span><input required name="company" autocomplete="organization" placeholder="Company"></label>
            <label><span>Industry</span><select required name="industry"><option value="">Select industry</option>${industries.children.map(node => `<option>${escapeHtml(node.title)}</option>`).join('')}</select></label>
            <label class="full"><span>Use case, environment and scale</span><textarea required name="context" rows="5" placeholder="Describe the operation, available data, deployment environment and timeline."></textarea></label>
          </div>
          <fieldset class="platform-function-fieldset">
            <legend>Which Solutions Are Relevant to Your Operation?</legend>
            <p>Select any operational outcomes that help define the evaluation scope.</p>
            <div class="platform-function-options">${solutions.children.filter(node => node.id !== 'industries').map(node => `<label><input type="checkbox" name="solution" value="${escapeHtml(node.title)}"><span>${escapeHtml(node.title)}</span></label>`).join('')}</div>
          </fieldset>
          <button class="button button-primary" type="submit"><span id="formSubmitLabel">${escapeHtml(formCopy[1])}</span> <span aria-hidden="true">→</span></button>
          <p class="form-note" id="formNote">Prototype only. This form validates locally and does not transmit or store data.</p>
          <div class="form-success" id="formSuccess" role="status" aria-live="polite" tabindex="-1" hidden><strong>Request Captured Locally.</strong><p>No data was transmitted. Connect this prototype to the approved CRM or form service before launch.</p></div>
        </form>
      </section>
      ${ctaSection()}`;
  }

  function pageHero(node, kicker, title, intro, variant = '') {
    const titleId = `page-title-${node.id}`;
    const breadcrumb = `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/">ALLUS AI</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(node.title)}</span></nav>`;
    if (variant === 'split') {
      return `<section class="page-hero page-hero--split shell" aria-labelledby="${titleId}"><div><p class="eyebrow">${escapeHtml(kicker)}</p><h1 id="${titleId}">${title}</h1></div><div class="page-hero-intro"><p>${escapeHtml(intro)}</p>${breadcrumb}</div></section>`;
    }
    return `<section class="page-hero shell" aria-labelledby="${titleId}"><div class="page-hero-copy"><p class="eyebrow">${escapeHtml(kicker)}</p><h1 id="${titleId}">${title}</h1><p class="page-hero-summary">${escapeHtml(intro)}</p>${breadcrumb}</div></section>`;
  }

  function detailRow(node, index) {
    return `<article class="detail-row reveal"><span>0${index + 1}</span><h2>${escapeHtml(node.title)}</h2><p>${escapeHtml(node.note)}</p></article>`;
  }

  function ctaSection() {
    return `<section class="home-cta home-band" aria-labelledby="site-cta-title"><div class="shell"><div class="home-cta-stage reveal"><div class="home-cta-orb" aria-hidden="true"></div><p class="eyebrow">Next step</p><h2 id="site-cta-title">Bring <em>industrial intelligence</em> into the physical world.</h2><p>Talk through the workload, data boundary and deployment path.</p>${link(connectPath('connect-demo'), 'Request a Demo', 'button button-primary')}</div></div></section>`;
  }

  function footerNavigationGroups() {
    return [
      { title: 'Models', links: [['AllusONE', '/model/allusone'], ['AllusFlow', '/model/allusflow'], ['AllusEdge', '/model/allusedge']] },
      { title: 'Solutions', links: solutions.children.filter(node => node.id !== 'industries').map(node => [node.title, `/solutions/${slugById[node.id]}`]) },
      { title: 'Industries', links: industries.children.map(node => [node.title, `/industries/${slugById[node.id]}`]) },
      { title: 'Use Cases', links: [['All Customer Stories', '/resource/use-cases'], ...useCaseStories.map(story => [find(story.nodeId).title, `/resource/use-cases/${story.slug}`])] },
      { title: 'Company', links: [['About Us', '/company'], ['Trust Center', 'https://trust.allus.ai'], ['Privacy and Security', '/company/privacy-security']] },
      { title: 'Connect', links: [['Contact Us', connectPath()]] }
    ];
  }

  function renderSitemap() {
    const groups = [
      { title: 'Overview', links: [['Home', '/'], ['Model', '/model'], ['Solutions', '/solutions'], ['Use Cases', '/resource/use-cases'], ['Company', '/company'], ['Connect', connectPath()], ['Sitemap', '/sitemap']] },
      ...footerNavigationGroups()
    ];
    return `${pageHero(sitemap, 'SITEMAP', 'Every Public Page.<br> <em>One Clear Path.</em>', sitemap.note)}
      <section class="sitemap-grid shell" aria-label="All public site pages">${groups.map(group => `<section><h2>${escapeHtml(group.title)}</h2><ul>${group.links.map(([label, path]) => {
        const external = /^https?:\/\//.test(path);
        return external
          ? `<li><a href="${path}" target="_blank" rel="noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a></li>`
          : `<li><a href="#${path}">${escapeHtml(label)} <span aria-hidden="true">→</span></a></li>`;
      }).join('')}</ul></section>`).join('')}</section>
      ${ctaSection()}`;
  }

  function renderNotFound() {
    return `${pageHero(notFoundNode, '404', 'This Page Is Not Part of<br> <em>the Current Site.</em>', notFoundNode.note)}
      <section class="not-found-actions shell" aria-label="Page recovery options">
        ${link('/', 'Return Home', 'button button-primary')}
        ${link('/sitemap', 'Browse the Sitemap', 'text-link')}
      </section>
      ${ctaSection()}`;
  }

  function renderFooter() {
    const groups = footerNavigationGroups();
    siteFooter.innerHTML = `
      <div class="footer-inner shell">
        <div class="footer-masthead">
          <a class="footer-brand" href="#/" aria-label="Allus AI home">
            <img class="footer-brand-logo" src="./assets/allus-logo-white.svg" width="2000" height="431" alt="">
          </a>
          <p class="footer-lede">${escapeHtml(siteData.note)}.</p>
        </div>
        <nav class="footer-groups" aria-label="Footer">
          ${groups.map(group => `<div><h3>${group.title}</h3>${group.links.map(([label, path]) => {
            const external = /^https?:\/\//.test(path);
            return external
              ? `<a href="${path}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`
              : `<a href="#${path}">${escapeHtml(label)}</a>`;
          }).join('')}</div>`).join('')}
        </nav>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Allus AI · Prototype</span>
          <div>
            <a href="#/company/privacy-security">Privacy and Security</a>
            <a href="https://trust.allus.ai" target="_blank" rel="noreferrer">Trust Center</a>
            <a href="#/sitemap">Sitemap</a>
          </div>
        </div>
      </div>`;
  }

  function renderRoute({ restoreScroll = false } = {}) {
    let path = routePath();
    const canonicalPath = legacyRouteAliases.get(path);
    if (canonicalPath) {
      history.replaceState(null, '', `#${canonicalPath}`);
      path = canonicalPath;
    }
    const matchedRoute = routes.get(path);
    const route = matchedRoute || { type: 'not-found', node: notFoundNode };
    const routeKey = location.hash || '#/';
    const pageTitle = route.type === 'home'
      ? 'Allus AI — Industrial Intelligence'
      : route.type === 'case-study'
        ? `${route.story.title.replace(/\.$/, '')} — Allus AI`
        : `${route.node.title} — Allus AI`;
    const pageDescription = route.story?.dek || route.node.note || siteData.note;
    document.body.dataset.route = route.type;
    document.title = pageTitle;
    if (metaDescription) metaDescription.content = pageDescription;
    updateNav(path, Boolean(matchedRoute));
    main.classList.remove('route-ready');
    main.classList.add('route-entering');
    mediaCleanup?.();
    mediaCleanup = null;
    heroGridCleanup?.();
    heroGridCleanup = null;
    revealObserver?.disconnect();
    revealObserver = null;
    motionObserver?.disconnect();
    motionObserver = null;
    main.innerHTML = ({
      home: renderHome,
      model: renderModel,
      solutions: renderSolutions,
      detail: () => renderDetail(route.node, route.parent),
      resource: renderResource,
      'resource-detail': () => renderResourceDetail(route.node),
      'case-study': () => renderCaseStudy(route.story),
      company: renderCompany,
      'privacy-security': () => renderPrivacySecurity(route.node),
      connect: renderConnect,
      sitemap: renderSitemap,
      'not-found': renderNotFound
    }[route.type] || renderNotFound)();
    bindPageInteractions();
    activeRouteKey = routeKey;
    requestAnimationFrame(() => {
      const sectionTarget = requestedSectionId(routeKey) ? document.getElementById(requestedSectionId(routeKey)) : null;
      const restoredTop = restoreScroll ? routeScrollPositions.get(routeKey) : null;
      if (sectionTarget) scrollToElement(sectionTarget, false);
      else {
        scrollWindowTo(Number.isFinite(restoredTop) ? restoredTop : 0, false);
        main.focus({ preventScroll: true });
      }
      revealVisible();
      requestAnimationFrame(() => main.classList.add('route-ready'));
      window.clearTimeout(routeTransitionTimer);
      routeTransitionTimer = window.setTimeout(() => main.classList.remove('route-entering', 'route-ready'), reducedMotion.matches ? 0 : 680);
    });
  }

  function updateNav(path, routeExists = true) {
    const exactPrimaryRoute = routeExists && navLinks.some(anchor => path === `/${anchor.dataset.nav}`);
    document.querySelectorAll('[data-nav]').forEach(anchor => {
      const section = anchor.dataset.nav;
      const inSection = path === `/${section}` || path.startsWith(`/${section}/`);
      const inIndustry = section === 'solutions' && (path === '/industries' || path.startsWith('/industries/'));
      const inPrivacySecurity = section === 'company' && (path === '/company/privacy-security' || path.startsWith('/company/privacy-security/'));
      const active = routeExists && (inSection || inIndustry || inPrivacySecurity);
      const exact = routeExists && path === `/${section}`;
      anchor.classList.toggle('section-active', active);
      anchor.closest('.nav-primary')?.classList.toggle('section-active-parent', active);
      if (exact) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
    mainNav.querySelectorAll('[data-route]').forEach(anchor => {
      if (!exactPrimaryRoute && anchor.dataset.route === path) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
    closeMenu(false);
    requestAnimationFrame(() => positionNavIndicator(activeNavLink(), true));
  }

  function activeNavLink() {
    return navLinks.find(anchor => anchor.classList.contains('section-active')) || null;
  }

  function positionNavIndicator(target = activeNavLink(), immediate = false) {
    if (!target || mobileNav.matches) {
      mainNav.classList.remove('indicator-visible');
      return;
    }
    const navRect = mainNav.getBoundingClientRect();
    const label = target.querySelector?.('.nav-label') || target.closest('.nav-primary')?.querySelector('.nav-label');
    const targetRect = (label || target).getBoundingClientRect();
    if (immediate) mainNav.classList.add('indicator-immediate');
    mainNav.style.setProperty('--nav-x', `${targetRect.left - navRect.left}px`);
    mainNav.style.setProperty('--nav-w', `${targetRect.width}px`);
    mainNav.classList.add('indicator-visible');
    if (immediate) requestAnimationFrame(() => mainNav.classList.remove('indicator-immediate'));
  }

  function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation');
    menuLabel.textContent = 'Close';
    mainNav.classList.add('open');
    mainNav.removeAttribute('inert');
    document.body.classList.add('menu-open');
    const activeItem = activeNavLink()?.closest('.nav-item--submenu');
    if (activeItem) openSubmenu(activeItem);
    requestAnimationFrame(() => requestAnimationFrame(() => mainNav.querySelector('a')?.focus({ preventScroll: true })));
  }

  function closeMenu(restoreFocus = false) {
    const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    const focusInsideMenu = mainNav.contains(document.activeElement);
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuLabel.textContent = 'Menu';
    mainNav.classList.remove('open');
    document.body.classList.remove('menu-open');
    closeAllSubmenus(false);
    if ((restoreFocus && wasOpen) || (focusInsideMenu && mobileNav.matches)) menuToggle.focus({ preventScroll: true });
    if (mobileNav.matches) mainNav.setAttribute('inert', '');
    else mainNav.removeAttribute('inert');
  }

  function openSubmenu(item, focusFirst = false) {
    window.clearTimeout(submenuOpenTimer);
    window.clearTimeout(submenuCloseTimer);
    submenuItems.forEach(other => {
      if (other !== item) closeSubmenu(other, false);
    });
    const toggle = item.querySelector('.nav-disclosure');
    const panel = item.querySelector('.nav-submenu');
    item.classList.add('submenu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', `Hide ${submenuLabel(item)} pages`);
    panel.setAttribute('aria-hidden', 'false');
    panel.removeAttribute('inert');
    document.body.classList.add('submenu-active');
    positionNavIndicator(item.querySelector('.nav-primary-link'));
    if (focusFirst) requestAnimationFrame(() => panel.querySelector('a')?.focus({ preventScroll: true }));
  }

  function closeSubmenu(item, restoreFocus = false) {
    const toggle = item.querySelector('.nav-disclosure');
    const panel = item.querySelector('.nav-submenu');
    if (!toggle || !panel) return;
    item.classList.remove('submenu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', `Show ${submenuLabel(item)} pages`);
    panel.setAttribute('aria-hidden', 'true');
    panel.setAttribute('inert', '');
    if (restoreFocus && document.contains(toggle)) toggle.focus({ preventScroll: true });
    document.body.classList.toggle('submenu-active', submenuItems.some(candidate => candidate.classList.contains('submenu-open')));
  }

  function closeAllSubmenus(restoreFocus = false) {
    window.clearTimeout(submenuOpenTimer);
    window.clearTimeout(submenuCloseTimer);
    const openItem = submenuItems.find(item => item.classList.contains('submenu-open'));
    submenuItems.forEach(item => closeSubmenu(item, restoreFocus && item === openItem));
    document.body.classList.remove('submenu-active');
  }

  function scheduleSubmenuOpen(item) {
    window.clearTimeout(submenuCloseTimer);
    window.clearTimeout(submenuOpenTimer);
    submenuOpenTimer = window.setTimeout(() => openSubmenu(item), reducedMotion.matches ? 0 : 70);
  }

  function scheduleSubmenuClose(item) {
    window.clearTimeout(submenuOpenTimer);
    window.clearTimeout(submenuCloseTimer);
    submenuCloseTimer = window.setTimeout(() => {
      if (!item.contains(document.activeElement)) closeSubmenu(item, false);
    }, reducedMotion.matches ? 0 : 160);
  }

  function menuFocusableItems() {
    return [menuToggle, ...mainNav.querySelectorAll('a, button')].filter(element => !element.closest('[inert]'));
  }

  function submenuLabel(item) {
    return item.querySelector('.nav-primary-link')?.getAttribute('aria-label') || item.dataset.navItem;
  }

  function scrollToElement(target, smooth = true) {
    if (!target) return;
    target.focus({ preventScroll: true });
    const headerOffset = siteHeader?.getBoundingClientRect().height || 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset - 12);
    scrollWindowTo(top, smooth);
  }

  function scrollWindowTo(top, smooth = true) {
    if (smooth && !reducedMotion.matches) {
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top, behavior: 'auto' });
    document.documentElement.style.scrollBehavior = previousBehavior;
  }

  function bindPageInteractions() {
    document.querySelectorAll('[data-scroll-target]').forEach(button => {
      button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.scrollTarget);
        if (!target) return;
        scrollToElement(target);
      });
    });
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
      const success = document.getElementById('formSuccess');
      const intentField = document.getElementById('formIntent');
      const optionButtons = [...document.querySelectorAll('[data-connect-option]')];
      const clearSuccess = () => {
        success.hidden = true;
        if (demoForm.matches(':valid')) demoForm.classList.remove('form-attempted');
      };
      const selectConnectOption = (button, focus = false) => {
        const slug = button.dataset.connectIntent;
        const copy = connectFormCopy(slug);
        optionButtons.forEach(item => {
          const active = item === button;
          item.classList.toggle('active', active);
          item.setAttribute('aria-checked', String(active));
          item.tabIndex = active ? 0 : -1;
        });
        intentField.value = slug;
        document.getElementById('formEyebrow').textContent = button.dataset.connectOption.toUpperCase();
        document.getElementById('formTitle').textContent = copy[0];
        document.getElementById('formSubmitLabel').textContent = copy[1];
        history.replaceState(null, '', `#/connect?intent=${slug}`);
        activeRouteKey = location.hash;
        clearSuccess();
        if (focus) button.focus({ preventScroll: true });
      };
      demoForm.addEventListener('submit', event => {
        event.preventDefault();
        demoForm.classList.remove('form-attempted');
        success.hidden = false;
        success.focus({ preventScroll: true });
      });
      demoForm.addEventListener('invalid', () => demoForm.classList.add('form-attempted'), true);
      demoForm.addEventListener('input', clearSuccess);
      demoForm.addEventListener('change', clearSuccess);
      optionButtons.forEach((button, index) => {
        button.addEventListener('click', () => selectConnectOption(button));
        button.addEventListener('keydown', event => {
          const last = optionButtons.length - 1;
          let nextIndex;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = index === last ? 0 : index + 1;
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = index === 0 ? last : index - 1;
          else if (event.key === 'Home') nextIndex = 0;
          else if (event.key === 'End') nextIndex = last;
          else return;
          event.preventDefault();
          selectConnectOption(optionButtons[nextIndex], true);
        });
      });
    }
    bindMediaMotion();
    bindHomeHeroGrid();
  }

  function bindHomeHeroGrid() {
    heroGridCleanup?.();
    heroGridCleanup = null;
    const wrap = document.querySelector('.home-hero-grid');
    const canvas = wrap?.querySelector('canvas');
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    const SPACING = 46;
    const SAMPLE = 26;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    // Static dome viewed head-on: a radial lens bulge that magnifies the grid
    // symmetrically around the hero center and settles flat at the edges.
    const displace = (x, y) => {
      const dx = x - centerX;
      const dy = y - centerY;
      const falloff = Math.exp(-(dx * dx + dy * dy) / (2 * 440 * 440));
      const scale = 0.26 * falloff;
      return [x + dx * scale, y + dy * scale];
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(37, 78, 214, 0.22)';
      for (let x = centerX % SPACING; x <= width; x += SPACING) {
        ctx.beginPath();
        for (let y = 0; y <= height + SAMPLE; y += SAMPLE) {
          const [px, py] = displace(x, y);
          if (y === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      for (let y = centerY % SPACING; y <= height; y += SPACING) {
        ctx.beginPath();
        for (let x = 0; x <= width + SAMPLE; x += SAMPLE) {
          const [px, py] = displace(x, y);
          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      centerX = width / 2;
      // The dome sits behind the headline, roughly a third down the hero.
      centerY = height * 0.36;
      draw();
    };

    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(wrap);
    resize();

    heroGridCleanup = () => sizeObserver.disconnect();
  }

  function bindMediaMotion() {
    mediaCleanup?.();
    mediaObserver?.disconnect();
    const abortController = new AbortController();
    const { signal } = abortController;
    const controllers = new Map();
    const visibleRatio = frame => {
      const rect = frame.getBoundingClientRect();
      const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      return rect.height ? visible / rect.height : 0;
    };
    const setMediaState = (figure, toggle, state) => {
      figure.dataset.mediaState = state;
      const label = toggle?.querySelector('span');
      if (label) label.textContent = state === 'playing' ? 'Pause motion' : state === 'ended' ? 'Replay motion' : state === 'error' ? 'Motion unavailable' : 'Play motion';
    };

    document.querySelectorAll('[data-media-visual]').forEach(figure => {
      const frame = figure.querySelector('[data-media-viewport]');
      const video = figure.querySelector('[data-media-video]');
      const toggle = figure.querySelector('[data-media-toggle]');
      const status = figure.querySelector('[data-media-status]');
      if (!frame || !video) return;
      let inViewport = visibleRatio(frame) >= .25;
      let userPaused = figure.dataset.mediaUserPaused === 'true';
      let ended = figure.dataset.mediaState === 'ended' || video.ended;
      let desiredPlaying = false;
      let playRequestId = 0;
      let pausedForDocument = false;
      let mediaFailed = false;

      const rememberUserPause = value => {
        userPaused = value;
        figure.dataset.mediaUserPaused = String(value);
      };
      const invalidatePlayback = nextState => {
        playRequestId += 1;
        desiredPlaying = false;
        video.pause();
        setMediaState(figure, toggle, nextState || (ended ? 'ended' : 'paused'));
      };
      const markMediaUnavailable = () => {
        if (mediaFailed) return;
        mediaFailed = true;
        invalidatePlayback('error');
        if (toggle) {
          toggle.disabled = true;
          toggle.setAttribute('aria-disabled', 'true');
        }
        if (status) {
          status.hidden = false;
          status.textContent = 'The motion preview is unavailable. The poster image and explanatory content remain available.';
        }
      };
      const requestPlayback = async ({ automatic = false, restart = false } = {}) => {
        inViewport = visibleRatio(frame) >= .25;
        if (restart) {
          ended = false;
          video.currentTime = 0;
        }
        if (mediaFailed || ended || document.hidden || !inViewport || (automatic && (reducedMotion.matches || userPaused))) return;
        if (!automatic) rememberUserPause(false);
        desiredPlaying = true;
        const requestId = ++playRequestId;
        try {
          await video.play();
          if (requestId !== playRequestId || !desiredPlaying || document.hidden || visibleRatio(frame) < .25 || ended) {
            video.pause();
            return;
          }
          setMediaState(figure, toggle, 'playing');
        } catch {
          if (requestId !== playRequestId) return;
          desiredPlaying = false;
          if (video.error || video.networkState === 3) markMediaUnavailable();
          else setMediaState(figure, toggle, ended ? 'ended' : 'paused');
        }
      };

      setMediaState(figure, toggle, ended ? 'ended' : 'paused');
      toggle?.addEventListener('click', () => {
        const playing = figure.dataset.mediaState === 'playing' || desiredPlaying;
        if (playing) {
          rememberUserPause(true);
          invalidatePlayback('paused');
          return;
        }
        const shouldRestart = ended || video.ended || (Number.isFinite(video.duration) && video.currentTime >= video.duration - .05);
        requestPlayback({ restart: shouldRestart });
      }, { signal });
      video.addEventListener('play', () => {
        if (!desiredPlaying || document.hidden || visibleRatio(frame) < .25 || ended) {
          video.pause();
          return;
        }
        setMediaState(figure, toggle, 'playing');
      }, { signal });
      video.addEventListener('pause', () => {
        if (mediaFailed || video.ended || ended) return;
        if (desiredPlaying) desiredPlaying = false;
        setMediaState(figure, toggle, 'paused');
      }, { signal });
      video.addEventListener('ended', () => {
        playRequestId += 1;
        desiredPlaying = false;
        ended = true;
        rememberUserPause(false);
        setMediaState(figure, toggle, 'ended');
      }, { signal });
      video.addEventListener('error', markMediaUnavailable, { signal });

      controllers.set(frame, {
        updateIntersection(entry) {
          inViewport = entry.isIntersecting && entry.intersectionRatio >= .25;
          if (!inViewport) {
            invalidatePlayback(ended ? 'ended' : 'paused');
            return;
          }
          if (!mediaFailed && !reducedMotion.matches && !userPaused && !ended && !document.hidden) requestPlayback({ automatic: true });
        },
        suspendForDocument() {
          pausedForDocument = pausedForDocument || desiredPlaying || !video.paused;
          if (pausedForDocument) invalidatePlayback(ended ? 'ended' : 'paused');
        },
        resumeForDocument() {
          if (!mediaFailed && pausedForDocument && inViewport && !userPaused && !ended && !reducedMotion.matches) requestPlayback({ automatic: true });
          pausedForDocument = false;
        },
        destroy() {
          playRequestId += 1;
          desiredPlaying = false;
          video.pause();
        }
      });
    });

    if ('IntersectionObserver' in window) {
      mediaObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => controllers.get(entry.target)?.updateIntersection(entry));
      }, { threshold: [0, .25, .6] });
      controllers.forEach((controller, frame) => mediaObserver.observe(frame));
    }
    const handleVisibility = () => {
      controllers.forEach(controller => document.hidden ? controller.suspendForDocument() : controller.resumeForDocument());
    };
    document.addEventListener('visibilitychange', handleVisibility, { signal });
    window.addEventListener('pagehide', () => controllers.forEach(controller => controller.suspendForDocument()), { signal });
    window.addEventListener('pageshow', () => controllers.forEach(controller => controller.resumeForDocument()), { signal });
    mediaCleanup = () => {
      abortController.abort();
      mediaObserver?.disconnect();
      mediaObserver = null;
      controllers.forEach(controller => controller.destroy());
      controllers.clear();
    };
  }

  function revealVisible() {
    const items = [...document.querySelectorAll('.reveal')];
    const sequences = [...document.querySelectorAll('.motion-sequence')];
    revealObserver?.disconnect();
    motionObserver?.disconnect();
    const groupOrder = new Map();
    items.forEach(item => {
      const parent = item.parentElement;
      const order = groupOrder.get(parent) || 0;
      item.style.setProperty('--reveal-delay', reducedMotion.matches ? '0ms' : `${Math.min(order, 4) * 24}ms`);
      groupOrder.set(parent, order + 1);
    });
    if (reducedMotion.matches) {
      items.forEach(item => item.classList.add('visible'));
      sequences.forEach(item => item.classList.add('visible'));
      return;
    }
    if (!('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('visible'));
      sequences.forEach(item => item.classList.add('visible'));
      return;
    }
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    items.forEach(item => revealObserver.observe(item));
    motionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= .18) {
          entry.target.classList.add('visible');
          motionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -5% 0px' });
    sequences.forEach(item => motionObserver.observe(item));
  }

  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    if (open) closeMenu(false);
    else openMenu();
  });
  skipLink.addEventListener('click', event => {
    event.preventDefault();
    scrollToElement(main);
  });
  submenuItems.forEach(item => {
    const primary = item.querySelector('.nav-primary-link');
    const toggle = item.querySelector('.nav-disclosure');
    const panel = item.querySelector('.nav-submenu');
    item.addEventListener('pointerenter', () => {
      if (!mobileNav.matches && hoverNav.matches) scheduleSubmenuOpen(item);
    });
    item.addEventListener('pointerleave', () => {
      if (!mobileNav.matches && hoverNav.matches) scheduleSubmenuClose(item);
    });
    item.addEventListener('focusin', event => {
      if (!mobileNav.matches && !event.target.closest('.nav-disclosure')) openSubmenu(item);
    });
    item.addEventListener('focusout', () => requestAnimationFrame(() => {
      if (!item.contains(document.activeElement) && !mobileNav.matches) scheduleSubmenuClose(item);
    }));
    toggle.addEventListener('click', event => {
      event.stopPropagation();
      if (item.classList.contains('submenu-open')) closeSubmenu(item, false);
      else openSubmenu(item);
    });
    [primary, toggle].forEach(control => {
      control.addEventListener('keydown', event => {
        if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
        event.preventDefault();
        openSubmenu(item);
        requestAnimationFrame(() => {
          const links = [...panel.querySelectorAll('a')];
          const target = event.key === 'ArrowUp' ? links[links.length - 1] : links[0];
          target?.focus({ preventScroll: true });
        });
      });
    });
  });
  mainNav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu(false);
  });
  navBackdrop.addEventListener('click', () => closeAllSubmenus(true));
  menuBackdrop.addEventListener('click', () => closeMenu(true));
  document.querySelector('.brand').addEventListener('click', () => closeMenu(false));
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href^="#/"]');
    if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    routeScrollPositions.set(activeRouteKey, window.scrollY);
    pendingNavigationType = 'link';
    const href = anchor.getAttribute('href');
    const current = location.hash || '#/';
    if (href !== current) return;
    event.preventDefault();
    pendingNavigationType = null;
    const sectionId = requestedSectionId(href);
    const target = sectionId ? document.getElementById(sectionId) : main;
    scrollToElement(target);
  });
  document.addEventListener('pointerdown', event => {
    if (!mainNav.contains(event.target) && !event.target.closest('#menuToggle')) closeAllSubmenus(false);
  });
  navLinks.forEach(anchor => {
    anchor.addEventListener('pointerenter', () => positionNavIndicator(anchor));
    anchor.addEventListener('focus', () => positionNavIndicator(anchor));
  });
  mainNav.addEventListener('pointerleave', () => positionNavIndicator(activeNavLink()));
  mainNav.addEventListener('focusout', () => requestAnimationFrame(() => {
    if (!mainNav.contains(document.activeElement)) positionNavIndicator(activeNavLink());
  }));
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openItem = submenuItems.find(item => item.classList.contains('submenu-open'));
      if (openItem) {
        event.preventDefault();
        closeSubmenu(openItem, true);
        return;
      }
      if (document.body.classList.contains('menu-open')) closeMenu(true);
      return;
    }
    if (event.key !== 'Tab' || !document.body.classList.contains('menu-open')) return;
    const focusable = menuFocusableItems();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  let headerScrolled = siteHeader.classList.contains('is-scrolled');
  let lastScrollPersist = 0;
  window.addEventListener('scroll', () => {
    if (headerFrame) return;
    headerFrame = requestAnimationFrame(() => {
      const y = window.scrollY;
      const scrolled = y > 34;
      if (scrolled !== headerScrolled) {
        headerScrolled = scrolled;
        siteHeader.classList.toggle('is-scrolled', scrolled);
      }
      if (y === 0 || Math.abs(y - lastScrollPersist) > 120) {
        lastScrollPersist = y;
        routeScrollPositions.set(activeRouteKey, y);
      }
      headerFrame = null;
    });
  }, { passive: true });
  window.addEventListener('resize', () => {
    requestAnimationFrame(() => positionNavIndicator(activeNavLink(), true));
  }, { passive: true });
  onMediaQueryChange(mobileNav, () => {
    const focusWasInNavigation = mainNav.contains(document.activeElement);
    const menuWasOpen = document.body.classList.contains('menu-open');
    closeMenu(false);
    if (focusWasInNavigation || menuWasOpen) {
      const focusTarget = mobileNav.matches ? menuToggle : activeNavLink() || document.querySelector('.brand');
      focusTarget?.focus({ preventScroll: true });
    }
    requestAnimationFrame(() => positionNavIndicator(activeNavLink(), true));
  });
  onMediaQueryChange(reducedMotion, () => {
    revealVisible();
    bindMediaMotion();
  });
  window.addEventListener('popstate', () => {
    if (pendingNavigationType !== 'link') pendingNavigationType = 'history';
  });
  window.addEventListener('hashchange', () => {
    const restoreScroll = pendingNavigationType === 'history';
    pendingNavigationType = null;
    renderRoute({ restoreScroll });
  });
  renderFooter();
  renderRoute();
})();
