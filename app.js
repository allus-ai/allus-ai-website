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
          { id: 'home-models', title: 'Three Models', note: 'AllusONE · AllusEdge · AllusFlow' },
          { id: 'home-solutions', title: 'Solutions', note: 'Four model-powered solutions across people, processes, assets and sites' },
          { id: 'home-deployment', title: 'Deployment', note: 'Edge · On-premise · Private cloud · Hybrid' },
          { id: 'home-industries', title: 'Industries', note: 'Electronics Assembly · FMCG · Food & Beverage · Advanced Materials · Automotive' },
          { id: 'home-proof', title: 'Proof', note: 'Verified latency · throughput · footprint · reliability · deployment scale' },
          { id: 'home-cta', title: 'Primary Actions', note: 'Explore Models · Request a Demo' }
        ]
      },
      {
        id: 'model', title: 'Model', note: 'Foundation models and the production systems that bring them into industrial environments', children: [
          { id: 'model-overview', title: 'Foundation Models', note: 'Industrial perception, temporal understanding and multimodal reasoning' },
          { id: 'allus-one', title: 'AllusONE', note: 'Unified industrial foundation model', children: [
            { id: 'one-purpose', title: 'Purpose', note: 'Combine visual input, instructions and configured industrial context for task-specific perception and multimodal reasoning' },
            { id: 'one-inputs', title: 'Inputs', note: 'Supported image and video formats · approved text instructions · configured terminology and system context' },
            { id: 'one-capabilities', title: 'Capabilities', note: 'Configured recognition and segmentation · evidence-linked visual questions · structured outputs · supported workflow calls' },
            { id: 'one-deployment', title: 'Deployment', note: 'Edge server · on-premise · private cloud · hybrid, selected through workload and environment evaluation' }
          ]},
          { id: 'allus-edge', title: 'AllusEdge', note: 'Compact hardware-aware model for real-time edge intelligence', children: [
            { id: 'edge-purpose', title: 'Purpose', note: 'Run selected Allus workloads near cameras and machines under validated latency and compute constraints' },
            { id: 'edge-targets', title: 'Targets', note: 'Qualified industrial PCs, edge boxes, smart cameras and embedded platforms for the selected workload' },
            { id: 'edge-hardware', title: 'Hardware', note: 'CPU, GPU and NPU profiles subject to accelerator, memory, power and thermal validation' },
            { id: 'edge-capabilities', title: 'Capabilities', note: 'Latency-sensitive video · supported multi-stream configurations · local or offline execution where validated · observable runtime health' }
          ]},
          { id: 'allus-flow', title: 'AllusFlow', heroTagline: 'Understand actions and state transitions across time', note: 'Temporal foundation model that turns supported industrial video into structured, evidence-linked temporal records for review', children: [
            { id: 'flow-purpose', title: 'Purpose', note: 'Identify when supported actions and states begin, change, pause and continue across a video sequence' },
            { id: 'flow-inputs', title: 'Inputs & Grounding', note: 'Supported video · timestamps · configured action and state vocabularies · optional approved operating context' },
            { id: 'flow-capabilities', title: 'Capabilities', note: 'Temporal segmentation · state-transition representation · sequence continuity · interruption and resume linking' },
            { id: 'flow-output', title: 'Outputs', note: 'Timestamped segments · structured temporal records · source-linked evidence moments · reviewable summaries' }
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
        note: 'Industrial intelligence organized around operational problems',
        descriptor: 'One shared model system. Four solution families',
        description: 'Allus configures the same model roles and production deployment path around four operating domains: knowledge, processes, assets and governed sites.',
        productLoop: ['Capture', 'Understand', 'Ground', 'Deliver', 'Review'],
        children: [
          { id: 'solution-knowledge', title: 'Operational Knowledge & Guidance', heroTagline: 'Turn real work into governed knowledge people can use', note: 'Turn expert demonstrations, procedures and operational history into governed knowledge, evidence-linked answers and context-aware guidance for people across roles, lines and sites', capabilityRefs: ['AllusONE multimodal reasoning', 'AllusFlow temporal structuring', 'Evidence-linked retrieval', 'Governed workflow delivery'], children: [
            { id: 'knowledge-capture', title: 'Expert Knowledge Capture', note: 'Capture demonstrations and ingest approved video, images, procedures, manuals and operational records' },
            { id: 'knowledge-structure', title: 'Multimodal Procedure Structuring', note: 'Organize content into searchable steps, chapters, annotations and reusable work knowledge' },
            { id: 'knowledge-evidence', title: 'Searchable Operational Evidence', note: 'Retrieve the relevant video moment, image, document or procedure step instead of searching entire files' },
            { id: 'knowledge-guidance', title: 'Guided Work', note: 'Deliver role-, product-, line- and task-specific guidance through approved video, images and text' },
            { id: 'knowledge-assist', title: 'Grounded Industrial Assist', note: 'Answer operational questions with direct links to approved procedures, video moments and source evidence' },
            { id: 'knowledge-readiness', title: 'Tasks, Skills & Readiness', note: 'Manage assignments, skills matrices, completion evidence and readiness records across teams and sites' },
            { id: 'knowledge-governance', title: 'Governance & Localization', note: 'Manage ownership, versions, review, approval, audit history and supported localization workflows' }
          ]},
          { id: 'solution-production-process', title: 'Production & Process Intelligence', heroTagline: 'Understand, verify and improve how industrial work happens', note: 'Turn recorded or live video where supported, together with approved procedures and production context, into structured events, standard-work evidence and measurable process insight across stations, lines and sites', capabilityRefs: ['AllusFlow temporal understanding', 'Procedure-grounded comparison', 'Evidence-linked analytics', 'Industrial system context'], children: [
            { id: 'production-state', title: 'Production State & Event Intelligence', note: 'Understand actions, sequences, cycle states, material flow, stoppages, transitions and interruptions over time' },
            { id: 'production-sequence', title: 'Action, Sequence & Cycle Understanding', note: 'Structure continuous work into steps, phases, cycles, events and machine-readable operational records' },
            { id: 'production-search', title: 'Process Search & Summaries', note: 'Search execution history and summarize supported shifts, workcells, events and process changes' },
            { id: 'production-standard', title: 'Standard Work Comparison', note: 'Compare observed execution with approved procedures and review missing, unexpected or out-of-sequence activity' },
            { id: 'production-time', title: 'Time & Motion Intelligence', note: 'Measure task and cycle duration, variation, waiting, interruptions and non-value-added activity' },
            { id: 'production-variation', title: 'Variation & Bottleneck Analysis', note: 'Compare activity across stations, lines, shifts and sites to surface recurring constraints and improvement opportunities' },
            { id: 'production-context', title: 'Evidence & Operational Analytics', note: 'Connect reviewed evidence and structured events with supported PLC, SCADA, MES and production records' }
          ]},
          { id: 'solution-equipment', title: 'Equipment & Asset Intelligence', heroTagline: 'Connect visible asset condition with maintenance action', note: 'Combine configured visual observations, approved operational knowledge and supported system context to support maintenance decisions and service workflows', capabilityRefs: ['Configured visual state understanding', 'Approved maintenance knowledge', 'Evidence-grounded guidance', 'Sensor and EAM context'], children: [
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
          { id: 'solution-security', title: 'Industrial Safety & Site Intelligence', heroTagline: 'Support governed review of configured site events', note: 'Use governed video, approved response knowledge and operational context to help reviewers search supported site events, assess their context and connect them to relevant approved procedures', capabilityRefs: ['Governed video and event context', 'Human-reviewed site intelligence', 'Grounded response guidance', 'Privacy and access controls'], children: [
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
          { id: 'industries', title: 'Industries', note: 'Priority markets and solution narratives', children: [
            { id: 'industry-electronics', title: 'Electronics Assembly', heroTagline: 'Knowledge and process intelligence for high-mix assembly', note: 'Configure industrial intelligence for high-mix assembly across stations, lines and production events', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence'], children: [
              { id: 'electronics-knowledge', title: 'Expert Build Knowledge', note: 'Capture demonstrations, procedures, visual references and rework knowledge for complex products and variants' },
              { id: 'electronics-guidance', title: 'Station Guidance', note: 'Deliver task, product and workstation-specific instructions through video, images and text' },
              { id: 'electronics-process', title: 'Assembly Process Intelligence', note: 'Understand assembly sequence, workstation state, interruptions and material context over time' },
              { id: 'electronics-cycle', title: 'Standard Work & Cycle Analysis', note: 'Review defined sequence, timing variation, waiting and line-balance opportunities with human oversight' },
              { id: 'electronics-trace', title: 'Traceability & System Integration', note: 'Connect execution evidence with production records, equipment context and supported production or automation workflows' }
            ]},
            { id: 'industry-fmcg', title: 'FMCG', heroTagline: 'Adaptable intelligence for fast-moving production', note: 'Configure adaptable intelligence for high-speed, high-variation production and frequent changeovers', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence'], children: [
              { id: 'fmcg-knowledge', title: 'Changeover Knowledge', note: 'Preserve approved setup, cleaning, format-change and restart procedures across products and lines' },
              { id: 'fmcg-guidance', title: 'Line-side Guidance', note: 'Deliver role, line and SKU-specific instructions at the point of work where supported' },
              { id: 'fmcg-process', title: 'Line & Stoppage Intelligence', note: 'Structure production flow, changeovers, interruptions and restart events into searchable timelines' },
              { id: 'fmcg-time', title: 'Time & Motion Intelligence', note: 'Compare task and cycle variation across lines, shifts and sites to support continuous improvement' },
              { id: 'fmcg-governance', title: 'Cross-site Governance', note: 'Manage approved knowledge, assignments, evidence and reporting across distributed operations' }
            ]},
            { id: 'industry-food', title: 'Food & Beverage', heroTagline: 'Operational knowledge from sanitation to packaging', note: 'Configure operational knowledge and process intelligence from preparation and sanitation through packaging', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence', 'Industrial Safety & Site Intelligence'], children: [
              { id: 'food-knowledge', title: 'Sanitation & Changeover Knowledge', note: 'Structure approved sanitation, allergen, setup and product-change procedures with governed version history' },
              { id: 'food-guidance', title: 'Multimodal Work Guidance', note: 'Deliver visual, video and text instructions with localization where supported and appropriate' },
              { id: 'food-process', title: 'Process Sequence', note: 'Understand preparation, sanitation, filling, sealing and packaging steps in operational context' },
              { id: 'food-evidence', title: 'Completion Evidence', note: 'Connect task completion and reviewed visual evidence with approved workflows and batch context' },
              { id: 'food-cycle', title: 'Cycle & Environment', note: 'Analyze cycle variation while incorporating line, batch, cold-chain and restricted-area context' }
            ]},
            { id: 'industry-advanced-materials', title: 'Advanced Materials', heroTagline: 'Preserve expertise across complex material processes', note: 'Configure industrial intelligence for specialized materials, multi-stage processes, critical assets and demanding production environments', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence', 'Industrial Safety & Site Intelligence'], children: [
              { id: 'materials-knowledge', title: 'Expert Process Knowledge', note: 'Preserve hard-to-replace demonstrations, procedures and decision context from experienced teams' },
              { id: 'materials-process', title: 'Material Transformation Intelligence', note: 'Turn multi-stage physical processes into searchable steps, states, transitions, events and evidence' },
              { id: 'materials-guidance', title: 'Critical Procedure Guidance', note: 'Deliver approved guidance with critical-step emphasis, governed escalation and human decision boundaries' },
              { id: 'materials-context', title: 'Batch, Asset & Environment Context', note: 'Connect observed work with batch, material, equipment and environmental context from supported systems' },
              { id: 'materials-time', title: 'Long-cycle & Transition Analysis', note: 'Compare sequence, duration, transitions, interruptions and variation across extended operating cycles' }
            ]},
            { id: 'industry-automotive', title: 'Automotive', heroTagline: 'Operational intelligence across complex automotive production', note: 'Configure industrial intelligence for component and vehicle assembly, material flow, production equipment and plant operations', solutionConfig: ['Operational Knowledge & Guidance', 'Production & Process Intelligence', 'Equipment & Asset Intelligence', 'Industrial Safety & Site Intelligence'], children: [
              { id: 'automotive-knowledge', title: 'Assembly & Variant Knowledge', note: 'Structure approved build, service and changeover knowledge for components, vehicles, lines and roles' },
              { id: 'auto-process', title: 'Production & Material Flow', note: 'Understand sequence, cycle state, material movement, interruptions and production events over time' },
              { id: 'auto-standard', title: 'Standard Work & Cycle Insight', note: 'Review approved execution, cycle variation, waiting and recurring process constraints with human oversight' },
              { id: 'auto-assets', title: 'Equipment & Asset Context', note: 'Connect visible equipment state with supported production, sensor and maintenance context' },
              { id: 'auto-safety', title: 'Plant Safety & Response', note: 'Prioritize supported site events and connect reviewed evidence with approved response procedures' }
            ]}
          ]}
        ]
      },
      { id: 'resource', title: 'Resource', note: 'Industrial use cases and the trust roadmap for production deployment', children: [
        { id: 'resource-use-cases', title: 'Use Cases', heroTagline: 'Anonymous customer stories from industrial operations', note: 'Advanced Materials · Electronics Assembly · Biscuit Production', children: [
          { id: 'case-advanced-materials', title: 'Advanced Materials', note: 'Preserving source-linked process knowledge across long-cycle rare-earth materials production' },
          { id: 'case-electronics-assembly', title: 'Electronics Assembly', note: 'Connecting variant, station and rework knowledge for high-mix assembly' },
          { id: 'case-biscuit-production', title: 'Biscuit Production', note: 'Keeping changeover, sanitation and packaging knowledge connected across a food line' }
        ] },
        { id: 'resource-trust', title: 'Trust Center', heroTagline: 'Security, privacy and AI governance for production deployment', note: 'Assurance roadmap · control domains · responsible AI · industrial security' }
      ]},
      { id: 'company', title: 'Company', note: 'Allus AI builds the intelligence that powers the physical world', children: [
        { id: 'company-about', title: 'Who We Are', note: 'An AI company building the intelligence layer for machines, factories and physical operations' },
        { id: 'company-mission', title: 'Mission', note: 'Build the intelligence that powers the physical world' },
        { id: 'company-partners', title: 'Partners', note: 'Technology infrastructure · industrial systems · deployment and integration · research' },
        { id: 'company-contact', title: 'Contact', note: 'Cupertino · Atlanta · connect with the team or book a demo' }
      ]},
      { id: 'connect', title: 'Connect', note: 'Start an evaluation, pilot or partnership', children: [
        { id: 'connect-demo', title: 'Request a Demo', note: 'Company · industry · use case · environment · scale · timeline' },
        { id: 'connect-access', title: 'Request Model Access', note: 'Evaluation · SDK · benchmark · technical review' },
        { id: 'connect-pilot', title: 'Start a Pilot', note: 'Use-case review · data assessment · evaluation · pilot · production plan' },
        { id: 'connect-sales', title: 'Contact Sales', note: 'Enterprise license · private deployment · customization · support' },
        { id: 'connect-partner', title: 'Partnerships', note: 'Hardware · cameras · industrial systems · automation integrators · research' },
        { id: 'connect-support', title: 'Support', note: 'Documentation · technical support · enterprise support · security contact' }
      ]},
      { id: 'footer', title: 'Footer', note: 'Complete navigation, trust and legal information', children: [
        { id: 'footer-models', title: 'Models', note: 'AllusONE · AllusEdge · AllusFlow · Customization' },
        { id: 'footer-solutions', title: 'Solutions', note: 'Knowledge and Guidance · Production and Process · Equipment and Assets · Safety and Site Intelligence' },
        { id: 'footer-industries', title: 'Industries', note: 'Electronics Assembly · FMCG · Food & Beverage · Advanced Materials · Automotive' },
        { id: 'footer-resource', title: 'Resource', note: 'Use Cases · Trust Center' },
        { id: 'footer-company', title: 'Company', note: 'Who We Are · Mission · Partners · Contact' },
        { id: 'footer-connect', title: 'Connect', note: 'Demo · Model Access · Pilot · Sales · Support · Partnerships' },
        { id: 'footer-legal', title: 'Legal', note: 'Privacy · Terms · Cookies · Responsible AI · Security · Sitemap' }
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

  const routes = new Map([
    ['/', { type: 'home', node: home }],
    ['/model', { type: 'model', node: model }],
    ['/model/allusone', { type: 'detail', node: find('allus-one'), parent: model }],
    ['/model/allusedge', { type: 'detail', node: find('allus-edge'), parent: model }],
    ['/model/allusflow', { type: 'detail', node: find('allus-flow'), parent: model }],
    ['/solutions', { type: 'solutions', node: solutions }],
    ['/resource', { type: 'resource', node: resource }],
    ['/company', { type: 'company', node: company }],
    ['/connect', { type: 'connect', node: connect }]
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
      title: 'One changeover.',
      titleEmphasis: 'Context across people, process and equipment.',
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
      caption: 'Knowledge, sequence and line context stay connected around the same configured changeover.',
      disclosure: 'Illustrative AI-generated scene—not an Allus AI or customer facility, deployed interface or measured outcome. Supported procedures, events, integrations and changeover context depend on the configured workload and environment. Approved cleaning, start-up and safety procedures, together with authorized site responsibility, remain authoritative.'
    },
    'industry-advanced-materials': {
      eyebrow: 'ONE CONFIGURED MATERIAL RUN',
      title: 'One material run.',
      titleEmphasis: 'Context across its staged handoffs.',
      intro: 'Allus models structure supported physical stages and transitions; the solution keeps those records linked to approved process knowledge and configured batch, asset and environment context as authorized teams review a run from one handoff to the next.',
      src: './assets/media/allus-advanced-materials-run-context.jpg',
      width: 1536,
      height: 1024,
      alt: 'Two industrial operators coordinating a documented batch handoff beside an enclosed material-processing line, with source feedstock containers, the configured process vessel and prepared output totes visible in one continuous production scene.',
      frameLabel: 'ILLUSTRATIVE STAGE-TO-STAGE HANDOFF',
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
      caption: 'Supported physical stages and transitions become source-linked run context that authorized people can review.',
      disclosure: 'Illustrative AI-generated scene—not an Allus AI or customer facility, deployed interface, process record or measured outcome. Supported stages, transitions, source links and integrations depend on the evaluated model version, configured sources and operating environment. Allus does not determine material identity or composition, control equipment, predict or optimize process outcomes, or establish quality, compliance or fitness for use; approved procedures and authorized personnel remain responsible for operational decisions.'
    }
  };

  const useCaseStories = [
    {
      nodeId: 'case-advanced-materials',
      slug: 'advanced-materials',
      index: '01',
      industry: 'ADVANCED MATERIALS',
      customer: 'CONFIDENTIAL CUSTOMER',
      title: 'Preserving critical process knowledge across rare-earth materials production.',
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
      title: 'Connecting high-mix assembly knowledge to the station where work happens.',
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
      title: 'Keeping biscuit-line changeover, sanitation and packaging knowledge connected.',
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
  let routeTransitionTimer;
  let headerFrame;
  let submenuOpenTimer;
  let submenuCloseTimer;

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

  function link(path, label, className = '') {
    return `<a class="${className}" href="#${path}">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
  }

  function sectionHeader(kicker, title, note = '') {
    return `<div class="section-head reveal"><p class="eyebrow">${escapeHtml(kicker)}</p><h2>${title}</h2>${note ? `<p class="section-intro">${escapeHtml(note)}</p>` : ''}</div>`;
  }

  function fieldVisual() {
    return `
      <figure class="field-visual world-model-visual motion-sequence">
        <div class="field-toolbar"><span>SIMULATED INDUSTRIAL SCENE</span><span>PERSON · EQUIPMENT · MATERIAL · TIME</span></div>
        <div class="world-model-stage">
          <img src="./assets/media/allus-industrial-world-model.jpg" width="1586" height="992" alt="Operator assembling a component while model overlays connect the person, tool, material and machine state." decoding="async" fetchpriority="high">
          <div class="world-model-scrim" aria-hidden="true"></div>
          <ol class="perception-phases" aria-label="Allus model operating sequence">
            <li style="--phase:0"><span>01</span><strong>Observe</strong></li>
            <li style="--phase:1"><span>02</span><strong>Understand</strong></li>
            <li style="--phase:2"><span>03</span><strong>Follow time</strong></li>
            <li style="--phase:3"><span>04</span><strong>Run here</strong></li>
          </ol>
        </div>
        <div class="model-rail">
          <div><small>01</small><strong>AllusONE</strong><span>UNDERSTAND</span></div>
          <div><small>02</small><strong>AllusEdge</strong><span>RUN HERE</span></div>
          <div><small>03</small><strong>AllusFlow</strong><span>FOLLOW TIME</span></div>
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
          <div class="temporal-media-head"><span>SIMULATED TEMPORAL SEQUENCE</span><span>ONE WORK CYCLE · MULTIPLE STATES</span></div>
          <button class="media-toggle" type="button" aria-controls="${videoId}" data-media-toggle><span>Play motion</span><i aria-hidden="true"></i></button>
          <ol class="temporal-legend" aria-label="Illustrative work-cycle stages">
            <li><span>01</span>Material arrives</li><li><span>02</span>Action begins</li><li><span>03</span>State changes</li><li><span>04</span>Interruption</li><li><span>05</span>Resume &amp; transfer</li>
          </ol>
        </div>
      </div>
      <figcaption><span>AllusFlow / temporal understanding</span><strong>Actions become structured events. Events become operational context.</strong><p>Illustrative sequence showing action boundaries, process states, interruption and resume—without implying a measured customer result.</p></figcaption>
    </figure>`;
  }

  function modelNarrativeVisual(modelId) {
    const configs = {
      'allus-one': {
        src: './assets/media/allusone-industrial-reasoning.jpg',
        alt: 'Industrial workcell where an operator, machine state, material, gauge and approved procedure are connected as one multimodal context.',
        eyebrow: 'ILLUSTRATIVE MODEL ROLE',
        sequence: 'PERCEIVE → RELATE → GROUND → STRUCTURE',
        label: 'AllusONE / multimodal industrial reasoning',
        caption: 'One multimodal context—from the visible scene to reviewable structured understanding.',
        disclaimer: 'Illustrative model role. Supported inputs, tasks and outputs depend on the evaluated model version, grounding data and deployment configuration. Model responses require validation for the intended workflow.',
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
        eyebrow: 'ILLUSTRATIVE DEPLOYMENT PATH',
        sequence: 'PROFILE → QUALIFY → EXECUTE → OPERATE',
        label: 'AllusEdge / hardware-aware local intelligence',
        caption: 'A hardware-aware path from selected workload to governed local execution.',
        disclaimer: 'Illustrative deployment path. Latency, throughput, stream count, memory, power and offline behavior must be validated on the target hardware and workload. Not every platform supports every model or configuration.',
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
        eyebrow: 'ILLUSTRATIVE MODEL INFERENCE',
        sequence: 'BOUNDARY → STATE → CONTINUITY → EVIDENCE',
        label: 'AllusFlow / temporal representation',
        caption: 'Video over time becomes a structured, reviewable account of actions and state change.',
        disclaimer: 'Illustrative model behavior and AI-generated visual—not a customer or Allus facility. Supported actions, states and transitions depend on the evaluated model version, configured vocabulary, source quality and operating conditions. Outputs require human review and do not establish cause, intent or certified safety status.',
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
    const media = `<img src="${config.src}" width="${config.width || 1536}" height="${config.height || 864}" alt="${config.alt}" loading="eager" fetchpriority="high" decoding="async">`;
    return `<figure class="model-explainer model-explainer--${modelId} reveal">
      <div class="model-explainer-sequence motion-sequence">
        <div class="model-explainer-frame">
          ${media}
          <div class="model-explainer-head"><span>${config.eyebrow}</span><span>${config.sequence}</span></div>
        </div>
        <ol class="model-explainer-stages" aria-label="${config.aria}">
          ${config.stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>${config.label}</span><strong>${config.caption}</strong><p>${config.disclaimer}</p></figcaption>
    </figure>`;
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
          <div class="knowledge-media-head" aria-hidden="true"><span>ILLUSTRATIVE KNOWLEDGE FLOW</span><span>APPROVED SOURCES → WORK CONTEXT</span></div>
        </div>
        <ol class="knowledge-stages" aria-label="Knowledge-to-guidance workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span aria-hidden="true">0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Operational Knowledge &amp; Guidance</span><strong>One governed line from expert work to usable guidance.</strong><p>Illustrative AI-generated scene—not a customer facility, guidance interface or measured result. Final sources, approval states and delivery surfaces are configured around each operating environment.</p></figcaption>
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
            <h3>Guidance for this role,<br>this product and this task.</h3>
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
          <div class="knowledge-handoff-head" aria-hidden="true"><span>ILLUSTRATIVE GUIDED WORK</span><span>APPROVED SOURCE → WORK CONTEXT → REVIEW</span></div>
        </div>
      </div>
      <ol class="knowledge-handoff-steps motion-sequence" aria-label="Approved knowledge-to-guided-work handoff">
        ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span aria-hidden="true">0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
      </ol>
      <figcaption><span>Operational Knowledge &amp; Guidance / guided work handoff</span><strong>The applicable knowledge release stays linked from approved source to the point of work and back to review.</strong><p>Illustrative AI-generated scene—not a customer or Allus AI facility, guidance interface, completion record or measured result. Available task context, guidance, assignments and records depend on the configured deployment and governance process. Allus does not independently establish correct completion, readiness, qualification or certification; approved procedures and responsible site personnel remain authoritative.</p></figcaption>
    </figure>`;
  }

  function operationalEvidenceVisual(kind = 'equipment') {
    const configs = {
      equipment: {
        src: './assets/media/allus-equipment-intelligence.jpg',
        width: 1536,
        height: 864,
        alt: 'Technician reviewing an industrial equipment asset, physical indicators, approved service procedure and supporting system context.',
        eyebrow: 'ILLUSTRATIVE ASSET CONTEXT',
        sequence: 'STATE → CONTEXT → GUIDANCE → EVIDENCE',
        label: 'Equipment & Asset Intelligence',
        caption: 'Allus connects visible equipment state with approved knowledge, system context and reviewed maintenance evidence.',
        disclaimer: 'Illustrative AI-generated scene—not a customer facility, maintenance interface or measured result. Supported observations, system records and service procedures depend on the configured asset and environment.',
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
        eyebrow: 'ILLUSTRATIVE SITE CONTEXT',
        sequence: 'GOVERN → REVIEW → RESPOND → PRESERVE',
        label: 'Industrial Safety & Site Intelligence',
        caption: 'Governed site context and approved procedures support human-reviewed, evidence-linked response.',
        disclaimer: 'Illustrative AI-generated scene—not a customer facility, safety interface, certified safety system or measured result. Supported sources, event definitions, access controls and retention policies depend on the governed deployment.',
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
      <figcaption><span>${config.label}</span><strong>${config.caption}</strong><p>${config.disclaimer}</p></figcaption>
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
          <div class="evidence-media-head"><span>ILLUSTRATIVE REVIEW WORKFLOW</span><span>SOURCE EVIDENCE → APPROVED CONTEXT → HUMAN DECISION</span></div>
        </div>
        <ol class="evidence-stages evidence-stages--three motion-sequence" aria-label="Source evidence-to-human-review workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Production &amp; Process Intelligence / reviewed application workflow</span><strong>Temporal evidence becomes reviewable work context—not an automatic operational decision.</strong><p>Illustrative AI-generated scene—not a customer or Allus AI facility, production interface or measured result. Supported sources, reviews and downstream use depend on the configured environment. Authorized people remain responsible for operational decisions.</p></figcaption>
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
        <div class="asset-service-head"><span>ILLUSTRATIVE SERVICE CONTINUITY</span><span>ASSET STATE → WORK CONTEXT → HANDOFF</span></div>
      </div>
      <div class="asset-service-ledger motion-sequence">
        <p class="eyebrow">ONE CONFIGURED ASSET</p>
        <ol class="asset-service-steps" aria-label="Asset service continuity workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Equipment &amp; Asset Intelligence / service continuity</span><strong>The record stays connected to the asset before, during and after qualified maintenance work.</strong><p>Illustrative AI-generated scene—not a customer facility, maintenance interface or measured result. Supported observations, records and workflows depend on the configured asset and integration environment. Maintenance decisions remain with qualified personnel and approved site procedures.</p></figcaption>
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
        <div class="site-review-head"><span>ILLUSTRATIVE GOVERNED REVIEW</span><span>PERMITTED CONTEXT → HUMAN DECISION</span></div>
      </div>
      <div class="site-review-ledger motion-sequence">
        <p class="eyebrow">ONE REVIEWED SITE EVENT</p>
        <ol class="site-review-steps" aria-label="Governed site-event review workflow">
          ${stages.map(([title, note], index) => `<li style="--stage:${index}"><span>0${index + 1}</span><div><strong>${title}</strong><p>${note}</p></div></li>`).join('')}
        </ol>
      </div>
      <figcaption><span>Industrial Safety &amp; Site Intelligence / governed review</span><strong>The event record stays reviewable from permitted evidence through human-confirmed response context.</strong><p>Illustrative AI-generated scene—not a customer facility, safety interface, certified safety system or measured result. Supported sources, procedures, reviews and retention depend on the configured deployment. Allus does not establish cause, intent or certified safety status; authorized people remain responsible for response decisions.</p></figcaption>
    </figure>`;
  }

  function modelWorldVisual() {
    return `<figure class="model-world-media shell reveal motion-sequence">
      <div class="model-world-frame"><img src="./assets/media/allus-industrial-world-model.jpg" width="1586" height="992" alt="Industrial workcell with visual relationships connecting the operator, equipment, material and process state." loading="lazy" decoding="async"></div>
      <figcaption><p class="eyebrow">ONE SHARED INDUSTRIAL CONTEXT</p><h2>One operating world.<br><em>Three model roles.</em></h2><p>AllusONE reasons across configured industrial context, AllusFlow follows activity and state over time, and AllusEdge runs selected workloads near cameras and machines when qualified.</p></figcaption>
    </figure>`;
  }

  function industryMedia(node) {
    const media = industryMediaById[node.id] || industryMediaById['industry-electronics'];
    return `<figure class="industry-feature shell reveal">
      <div class="industry-feature-frame"><img src="${media.src}" width="${media.width}" height="${media.height}" alt="${escapeHtml(media.alt)}" loading="lazy" decoding="async"></div>
      <figcaption><span>ONE MODEL FOUNDATION / ${escapeHtml(node.title)}</span><p>The same perception, temporal understanding and deployment system is configured around this industry's people, processes, assets and operating conditions.</p><small>Illustrative AI-generated scene—not a customer facility, Allus AI interface or measured result. Industry applications, sources and workflows require deployment-specific evaluation.</small></figcaption>
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
      <header class="industry-narrative-intro reveal">
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
        <figcaption><span>${escapeHtml(captionLabel)}</span><strong>${escapeHtml(narrative.caption)}</strong><p>${escapeHtml(narrative.disclosure)}</p></figcaption>
      </figure>
    </section>`;
  }

  function homeModelContinuum() {
    const roles = [
      {
        id: 'allusone',
        model: 'AllusONE',
        role: 'Understand the scene',
        description: 'Relates supported people, parts, tools, equipment and approved context.',
        capabilities: 'VISUAL UNDERSTANDING · INDUSTRIAL REASONING',
        sequence: 'CONTEXT → RELATION → STRUCTURE',
        src: './assets/media/allus-home-context.jpg',
        alt: 'AI-generated fictional scene of a technician preparing a metal component at an industrial workcell observed by a mounted camera.'
      },
      {
        id: 'allusflow',
        model: 'AllusFlow',
        role: 'Follow actions and states',
        description: 'Structures supported steps, transitions, interruptions and resumes across video.',
        capabilities: 'VIDEO UNDERSTANDING · OPERATIONAL INTELLIGENCE',
        sequence: 'ACTION → STATE → TEMPORAL CONTEXT',
        src: './assets/media/allus-home-temporal.jpg',
        alt: 'AI-generated continuation of the same fictional work cycle, with the technician using a hand tool on the mounted component.'
      },
      {
        id: 'allusedge',
        model: 'AllusEdge',
        role: 'Run near the process',
        description: 'Adapts selected model workloads for evaluation on qualified local hardware.',
        capabilities: 'EDGE AI · LOCAL EXECUTION',
        sequence: 'PROFILE → QUALIFY → RUN LOCALLY',
        src: './assets/media/allus-home-edge.jpg',
        alt: 'AI-generated continuation of the same fictional workcell with a rugged local edge computer connected beside the mounted camera.'
      }
    ];
    return `<section class="home-model-continuum dark-section" aria-labelledby="home-model-title">
      <div class="shell">
        <header class="home-model-intro reveal">
          <p class="eyebrow">ONE OPERATION / THREE MODEL ROLES</p>
          <h2 id="home-model-title">One physical operation.<br><em>Three model roles.</em></h2>
          <p>AllusONE interprets configured context. AllusFlow follows work through time. AllusEdge brings selected, evaluated workloads close to cameras and machines.</p>
        </header>
        <div class="home-model-experience motion-sequence" data-home-model-experience>
          <div class="home-model-viewport">
            <div class="home-model-stage">
              ${roles.map((role, index) => `<figure class="home-model-panel${index === 0 ? ' is-active' : ''}" id="home-model-panel-${role.id}" role="tabpanel" aria-labelledby="home-model-tab-${role.id}" aria-hidden="${index === 0 ? 'false' : 'true'}"${index === 0 ? '' : ' inert'}>
                <img src="${role.src}" width="1536" height="865" alt="${role.alt}" loading="lazy" decoding="async">
                <div class="home-model-scrim" aria-hidden="true"></div>
                <div class="home-model-media-head"><span>SIMULATED INDUSTRIAL SEQUENCE</span><span>0${index + 1} / 03</span></div>
                <figcaption><strong>${role.model}</strong><span>${role.sequence}</span></figcaption>
              </figure>`).join('')}
            </div>
            <div class="home-model-tabs" role="tablist" aria-label="Allus model roles in one industrial operation">
              ${roles.map((role, index) => `<button class="home-model-tab${index === 0 ? ' is-active' : ''}" id="home-model-tab-${role.id}" type="button" role="tab" aria-selected="${index === 0 ? 'true' : 'false'}" aria-controls="home-model-panel-${role.id}" tabindex="${index === 0 ? '0' : '-1'}" data-home-model-tab="${role.id}">
                <span class="home-model-tab-index">0${index + 1}</span>
                <span class="home-model-tab-copy"><small>${role.model}</small><strong>${role.role}</strong><span>${role.description}</span><i>${role.capabilities}</i></span>
              </button>`).join('')}
            </div>
          </div>
          <div class="home-model-footer">
            <p>AI-generated fictional sequence—not an Allus AI team, customer, facility or measured deployment. Model behavior and hardware fit require workload-specific evaluation.</p>
            ${link('/model', 'Explore Models', 'text-link light')}
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderHome() {
    const industryNodes = industries.children;
    const solutionNodes = solutions.children.filter(node => node.id !== 'industries');
    const productionSystem = find('production-system');
    return `
      <section class="hero shell" aria-labelledby="home-title">
        <div class="hero-copy">
          <p class="eyebrow">ADVANCED VISION FOUNDATION MODELS</p>
          <div class="hero-message">
            <h1 id="home-title"><em>Industrial intelligence,</em><br> built for the<br> physical world.</h1>
            <div class="hero-support">
              <p class="hero-summary">${escapeHtml(find('home-hero').note)}.</p>
              <div class="hero-actions">${link('/model', 'Explore Models', 'button button-primary')}${link('/connect', 'Request a Demo', 'text-link')}</div>
            </div>
          </div>
        </div>
        <div class="hero-media">${fieldVisual()}</div>
        <div class="hero-facts" aria-label="Product positioning">
          <div><span>MODELS</span><strong>AllusONE<br> AllusEdge<br> AllusFlow</strong></div>
          <div><span>DEPLOYMENT</span><strong>Edge<br> On-premise<br> Hybrid</strong></div>
          <div><span>CONTEXT</span><strong>Vision<br> Video<br> Operations</strong></div>
        </div>
      </section>

      ${homeModelContinuum()}

      <section class="platform-section shell">
        ${sectionHeader('MODEL-POWERED SOLUTIONS', 'From captured knowledge<br> <em>to understood operations.</em>', find('home-solutions').note)}
        <div class="platform-product-loop motion-sequence">
          <div class="platform-statement">
            <p class="eyebrow">FOUR SOLUTIONS</p>
            <h3>${escapeHtml(solutions.descriptor)}.</h3>
            <p>${escapeHtml(solutions.description)}</p>
          </div>
          <div>
            <p class="eyebrow">OPERATING LOOP</p>
            ${solutionLoop(solutions.productLoop)}
          </div>
        </div>
        ${solutionAtlasFigure(solutionNodes, { idPrefix: 'home-solution-atlas', compact: true })}
        <div class="journey-caption reveal"><p class="eyebrow">PRODUCTION DEPLOYMENT</p><p>How Allus adapts, evaluates, optimizes and operates model-powered solutions for a real industrial environment.</p></div>
        <div class="journey" aria-label="Technical production journey">
          ${productionSystem.technicalJourney.map((step, index) => `<div class="journey-step reveal"><span>${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(step)}</strong></div>`).join('')}
        </div>
        <div class="platform-preview reveal">
          <div class="platform-preview-copy">
            <p class="eyebrow">PRODUCTION CAPABILITIES</p>
            <h3>Built for industrial deployment.</h3>
            <p>Every solution is powered by Allus models and deployment systems designed around industrial data, target hardware, operational reliability, governance and integration.</p>
            ${link('/solutions', 'Explore Solutions', 'text-link light')}
          </div>
          ${productionDiagram()}
        </div>
      </section>

      <section class="deployment-section">
        <div class="shell">
          ${sectionHeader('DEPLOYMENT', 'Run intelligence where<br> <em>industrial decisions happen.</em>')}
          <div class="deployment-grid">
            ${['Edge', 'On-premise', 'Private cloud', 'Hybrid'].map((item, index) => `<article class="deployment-cell reveal"><span>0${index + 1}</span><h3>${item}</h3><p>${['Close to cameras and machines', 'Inside controlled infrastructure', 'Centralized enterprise operation', 'Local execution, coordinated intelligence'][index]}</p></article>`).join('')}
          </div>
        </div>
      </section>

      <section class="industry-section shell">
        ${sectionHeader('INDUSTRIES', 'Industrial context is not<br> <em>an afterthought.</em>', find('home-industries').note)}
        <div class="industry-mosaic">
          ${industryNodes.map((node, index) => industryCard(node, index)).join('')}
        </div>
      </section>

      <section class="proof-section dark-section">
        <div class="shell proof-grid">
          <div>${sectionHeader('PROOF', 'Evidence before claims.', 'Verified latency · throughput · footprint · reliability · deployment scale')}</div>
          <div class="proof-ledger">
            ${['End-to-end latency', 'Video throughput', 'Model footprint', 'Continuous reliability', 'Deployment scale'].map(item => `<div><span>${item}</span><strong>PENDING VALIDATION</strong></div>`).join('')}
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

  function modelFamilyChapter(node, index) {
    const configs = {
      'allus-one': {
        slug: 'allusone',
        role: 'Reason across industrial context',
        optimized: 'Configured multimodal perception and structured reasoning',
        deployment: 'Complex image, video and instruction workloads',
        validate: 'Task behavior · grounding · output structure',
        src: './assets/media/allusone-industrial-reasoning.jpg',
        alt: 'Illustrative industrial workcell linking visual input, equipment state, material context and approved instructions.'
      },
      'allus-edge': {
        slug: 'allusedge',
        role: 'Run selected workloads locally',
        optimized: 'Qualified latency- and footprint-sensitive execution',
        deployment: 'Hardware-aware intelligence near cameras and machines',
        validate: 'Target hardware · streams · memory · power',
        src: './assets/media/allusedge-local-intelligence.jpg',
        alt: 'Illustrative rugged edge computer connected to industrial cameras, machine context and a technician-controlled interface.'
      },
      'allus-flow': {
        slug: 'allusflow',
        role: 'Understand actions and states over time',
        optimized: 'Temporal segmentation, state transitions and sequence continuity',
        deployment: 'Supported industrial video with configured action and state vocabularies',
        validate: 'Action boundaries · transition consistency · evidence traceability',
        src: './assets/media/allusflow-temporal-model.jpg',
        width: 1536,
        height: 1024,
        alt: 'Single industrial workcell with one operator and restrained temporal echoes representing actions, state transitions, interruption and resumed activity.'
      }
    };
    const config = configs[node.id];
    return `<article class="model-family-card model-family-card--${node.id} reveal">
      <div class="model-family-media motion-sequence">
        <img src="${config.src}" width="${config.width || 1536}" height="${config.height || 864}" alt="${config.alt}" loading="lazy" decoding="async">
        <div class="model-family-media-head"><span>0${index + 1} / MODEL ROLE</span><span>ILLUSTRATIVE</span></div>
        <p class="model-family-role">${config.role}</p>
      </div>
      <div class="model-family-copy">
        <p class="eyebrow">FOUNDATION MODEL</p>
        <h2>${escapeHtml(node.title)}</h2>
        <p class="model-family-summary">${escapeHtml(node.note)}.</p>
        <dl class="model-family-specs">
          <div><dt>PRIMARY ROLE</dt><dd>${config.role}</dd></div>
          <div><dt>OPTIMIZED FOR</dt><dd>${config.optimized}</dd></div>
          <div><dt>TYPICAL USE</dt><dd>${config.deployment}</dd></div>
          <div><dt>VALIDATE</dt><dd>${config.validate}</dd></div>
        </dl>
        ${link(`/model/${config.slug}`, `Explore ${node.title}`, 'text-link')}
      </div>
    </article>`;
  }

  function deploymentLifecycle(steps) {
    return `<ol class="production-lifecycle motion-sequence" aria-label="Production deployment lifecycle">
      ${steps.map((step, index) => `<li style="--step:${index}"><span>${String(index + 1).padStart(2, '0')}</span><i aria-hidden="true"></i><strong>${escapeHtml(step)}</strong></li>`).join('')}
    </ol>`;
  }

  function productionContextVisual() {
    return `<figure class="production-context reveal">
      <div class="production-context-frame motion-sequence">
        <img src="./assets/media/allus-production-deployment-context.jpg" width="1536" height="864" alt="Illustrative production environment with an industrial camera, a safely mounted local edge computer and an engineer operating a local terminal." loading="lazy" decoding="async">
        <div class="production-context-head"><span>ILLUSTRATIVE DEPLOYMENT CONTEXT</span><span>SOURCE · LOCAL RUNTIME · OPERATIONS</span></div>
        <ol class="production-context-labels" aria-hidden="true">
          <li><span>01</span>Industrial source</li><li><span>02</span>Local execution</li><li><span>03</span>Human operations</li>
        </ol>
      </div>
      <figcaption>Illustrative configuration—not a customer deployment. Hardware, integrations and operating controls are qualified for each workload and environment.</figcaption>
    </figure>`;
  }

  function modelEvaluationPath() {
    const steps = [
      ['Define the workload', 'Frame the supported task, source data, operating conditions and required human review.'],
      ['Validate model-system fit', 'Evaluate behavior and target latency, throughput, footprint and failure modes on representative data and hardware.'],
      ['Plan controlled deployment', 'Select the environment, governance boundary, integration path and operating model.']
    ];
    return `<section class="model-evaluation shell">
      ${sectionHeader('EVALUATION PATH', 'Start with the workload.<br> <em>Validate the model-system fit.</em>', 'Model choice and deployment design are evaluated together against the intended task, data, hardware and operating environment.')}
      <div class="model-evaluation-steps">${steps.map(([title, note], index) => `<article class="reveal"><span>${String(index + 1).padStart(2, '0')}</span><h3>${title}</h3><p>${note}</p></article>`).join('')}</div>
    </section>`;
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

  function solutionAtlasFigure(solutionNodes, { idPrefix = 'solution-atlas', compact = false } = {}) {
    const entries = solutionAtlasEntries(solutionNodes);
    return `<figure class="solution-atlas${compact ? ' solution-atlas--compact' : ''} motion-sequence" aria-labelledby="${idPrefix}-caption">
      <figcaption id="${idPrefix}-caption" class="sr-only">Four model-powered Allus AI solution families across people, processes, equipment and sites.</figcaption>
      <div class="solution-atlas-grid">
        ${entries.map((entry, index) => `<a class="solution-atlas-panel" href="#/solutions/${slugById[entry.node.id]}" style="--atlas-delay:${70 + index * 80}ms;--atlas-position:${entry.position}" aria-describedby="${idPrefix}-visual-${index}">
          <img src="${entry.src}" width="${entry.width}" height="${entry.height}" alt="" loading="lazy" decoding="async">
          <span class="solution-atlas-scrim" aria-hidden="true"></span>
          <span class="solution-atlas-copy"><span class="solution-atlas-index" aria-hidden="true">0${index + 1}</span><span><small>${escapeHtml(entry.domain)}</small><strong>${escapeHtml(entry.node.title)}</strong><i>${escapeHtml(entry.role)}</i></span><b aria-hidden="true">Explore ↗</b></span>
          <span class="sr-only" id="${idPrefix}-visual-${index}">${escapeHtml(entry.visual)}</span>
        </a>`).join('')}
      </div>
      <div class="solution-atlas-foundation">
        <div><span>SHARED MODEL SYSTEM</span><strong>AllusONE · AllusFlow · AllusEdge</strong></div>
        <p>Configured around the workload—not a fixed processing chain.</p>
      </div>
      <p class="solution-atlas-disclosure">Illustrative AI-generated scenes—not customer facilities, production interfaces, measured outcomes or automated control systems. Model behavior, data, integrations and deployment conditions require workload-specific evaluation; people remain responsible for operational decisions.</p>
    </figure>`;
  }

  function solutionAtlas(solutionNodes) {
    const entries = solutionAtlasEntries(solutionNodes);
    return `<section class="solution-atlas-section shell" aria-labelledby="solution-atlas-title">
      <header class="solution-atlas-intro reveal">
        <p class="eyebrow">FOUR OPERATIONAL DOMAINS</p>
        <h2 id="solution-atlas-title">Four operating surfaces.<br><em>One shared model system.</em></h2>
        <p>Each solution starts from a different operational problem while drawing from the same model roles and production deployment path.</p>
      </header>
      ${solutionAtlasFigure(solutionNodes)}
      <div class="solution-directory" aria-label="Solution family details">
        ${entries.map((entry, index) => `<a class="solution-directory-row reveal" href="#/solutions/${slugById[entry.node.id]}"><span aria-hidden="true">0${index + 1}</span><div><p class="eyebrow">${escapeHtml(entry.domain)}</p><h3>${escapeHtml(entry.node.title)}</h3><p>${escapeHtml(entry.summary)}</p></div><b aria-hidden="true">Explore ↗</b></a>`).join('')}
      </div>
    </section>`;
  }

  function productionDiagram() {
    const zones = [
      ['Industrial Sources', ['Cameras & Video', 'Machines & Sensor Context', 'Procedures & Process Events']],
      ['Deployment Environments', ['Edge Devices', 'On-premise Systems', 'Private Cloud & Hybrid']],
      ['Operations & Integration', ['Model Versions', 'Runtime Health & Audit History', 'Supported APIs & Systems']]
    ];
    return `<div class="deployment-topology motion-sequence" aria-label="Industrial sources connected through controlled deployment environments to operations and integration systems">
      <h3 class="sr-only">Controlled deployment path</h3>
      <div class="topology-head"><span>CONTROLLED DEPLOYMENT PATH</span><span>EDGE · ON-PREMISE · PRIVATE CLOUD · HYBRID</span></div>
      <div class="topology-zones">
        ${zones.map(([title, nodes], zoneIndex) => `<section class="topology-zone" style="--zone:${zoneIndex}"><span>0${zoneIndex + 1}</span><h4>${title}</h4><ul>${nodes.map((node, nodeIndex) => `<li style="--node:${nodeIndex}"><i aria-hidden="true"></i><strong>${node}</strong></li>`).join('')}</ul></section>`).join('')}
      </div>
      <div class="topology-governance"><span>GOVERNANCE BOUNDARY</span><p>Data controls, evaluation, versioning and audit context remain part of the production system.</p></div>
    </div>`;
  }

  function industryCard(node, index) {
    const path = `/industries/${slugById[node.id]}`;
    const media = industryMediaById[node.id] || industryMediaById['industry-electronics'];
    return `<a class="industry-card reveal industry-${index + 1}" href="#${path}">
      <div class="industry-visual" aria-hidden="true"><img src="${media.src}" width="${media.width}" height="${media.height}" alt="" loading="lazy" decoding="async"></div>
      <div class="industry-card-copy"><span>0${index + 1}</span><h3>${escapeHtml(node.title)}</h3><p>${escapeHtml(node.note)}</p><b>Explore ↗</b></div>
    </a>`;
  }

  function renderModel() {
    const productionSystem = find('production-system');
    const modelNodes = [find('allus-one'), find('allus-edge'), find('allus-flow')];
    return `${pageHero(model, 'MODELS', 'Foundation models for<br> <em>industrial perception and intelligence.</em>', 'Three model roles. One production deployment path—configured for the workload and environment.')}
      ${modelWorldVisual()}
      <section class="model-family shell">
        ${sectionHeader('THREE MODEL ROLES', 'Different roles.<br> <em>One shared operating context.</em>', 'These roles are not a fixed processing chain. Each can be evaluated independently or as part of a configured system for the intended workload.')}
        <div class="model-family-list">${modelNodes.map((node, index) => modelFamilyChapter(node, index)).join('')}</div>
      </section>
      <section class="platform-section dark-section model-production"><div class="shell">
        ${sectionHeader('PRODUCTION DEPLOYMENT', 'A production path<br> <em>around the models.</em>', productionSystem.note)}
        <div class="production-lifecycle-intro reveal"><p class="eyebrow">HOW IT REACHES PRODUCTION</p><p>Model behavior and the surrounding deployment system are adapted and evaluated together before operation.</p></div>
        ${deploymentLifecycle(productionSystem.technicalJourney)}
        <div class="model-production-grid">
          <div class="model-production-visuals">${productionContextVisual()}${productionDiagram()}</div>
          <div class="model-production-copy reveal"><p class="eyebrow">DEPLOYMENT IN CONTEXT</p><h3>Sources, local execution and governed operations stay connected.</h3><p>The image establishes where deployment happens; the topology below explains how sources, environments, operations and governance remain connected.</p>${link('/connect', 'Discuss Production Deployment', 'text-link light')}</div>
        </div>
      </div></section>
      ${modelEvaluationPath()}
      ${ctaSection('Model evaluation starts with your task, data and deployment target.', 'Request Model Access')}`;
  }

  function renderSolutions() {
    const solutionNodes = solutions.children.filter(node => node.id !== 'industries');
    const productionSystem = find('production-system');
    return `${pageHero(solutions, 'SOLUTIONS', 'Industrial intelligence organized<br> <em>around operational problems.</em>', solutions.note)}
      <section class="shell solution-system-intro">
        <div class="platform-product-loop motion-sequence">
          <div class="platform-statement"><p class="eyebrow">MODEL-POWERED SOLUTIONS</p><h2>${escapeHtml(solutions.descriptor)}.</h2><p>${escapeHtml(solutions.description)}</p></div>
          <div><p class="eyebrow">OPERATING LOOP</p>${solutionLoop(solutions.productLoop)}</div>
        </div>
      </section>
      ${solutionAtlas(solutionNodes)}
      <section class="platform-foundation dark-section">
        <div class="shell">
          ${sectionHeader('PRODUCTION CAPABILITIES', 'Every solution is built to operate<br> <em>in industrial reality.</em>', 'Allus solutions share the same model family and production capabilities. They are configurable applications of reusable industrial intelligence—not isolated, one-off algorithms.')}
          <div class="journey platform-technical-journey" aria-label="Production deployment journey">${productionSystem.technicalJourney.map((step, index) => `<div class="journey-step reveal"><span>${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(step)}</strong></div>`).join('')}</div>
          <div class="platform-foundation-grid">
            <div class="reveal">${productionDiagram()}</div>
            <div class="technical-ledger">${productionSystem.technicalCapabilities.map((capability, index) => `<article class="technical-row reveal"><span>${String(index + 1).padStart(2, '0')}</span><div><h3>${escapeHtml(capability.title)}</h3><p>${escapeHtml(capability.note)}</p></div></article>`).join('')}</div>
          </div>
        </div>
      </section>
      <section class="industry-section dark-section"><div class="shell">${sectionHeader('INDUSTRIES', 'Priority markets and<br> <em>solution narratives.</em>', industries.note)}<div class="industry-mosaic">${industries.children.map((node, index) => industryCard(node, index)).join('')}</div></div></section>
      ${ctaSection('Start from an operational problem. Build toward a production system.', 'Request a Demo')}`;
  }

  function renderDetail(node, parent) {
    const isIndustry = parent.id === 'industries';
    const isModel = parent.id === 'model';
    const label = isIndustry ? 'INDUSTRY' : parent.title.toUpperCase();
    const detailChildren = node.children?.length ? node.children : [{ id: `${node.id}-overview`, title: 'Overview', note: node.note }];
    const solutionItems = isIndustry ? node.solutionConfig : node.capabilityRefs;
    const solutionAssociation = solutionItems?.length ? `<section class="platform-association shell reveal"><div class="platform-association-head"><div><p class="eyebrow">${isIndustry ? 'INDUSTRY SOLUTION MIX' : 'SOLUTION FOUNDATION'}</p><h2>${isIndustry ? `Solutions configured for ${escapeHtml(node.title)}.` : 'How this solution is powered.'}</h2></div><p>${isIndustry ? 'Selected Allus solutions are configured around the knowledge, process, asset and governance realities of this operating environment.' : 'Each solution combines reusable model intelligence, operational workflows and production deployment around a defined industrial outcome.'}</p></div><div class="platform-association-list${isIndustry ? '' : ' platform-association-list--two'}">${solutionItems.map((item, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${escapeHtml(item)}</span>`).join('')}</div>${link('/solutions', 'Explore all Solutions', 'text-link')}</section>` : '';
    const modelMedia = isModel ? modelNarrativeVisual(node.id) : '';
    const explanatoryMedia = modelMedia
      ? `<section class="shell detail-media-section">${modelMedia}</section>`
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
      <header class="knowledge-handoff-intro reveal">
        <p class="eyebrow">KNOWLEDGE IN USE</p>
        <h2 id="knowledge-handoff-title">One approved source.<br><em>Guidance that stays grounded.</em></h2>
        <p>Approved demonstrations, procedure steps and source evidence are delivered for the configured role and work context, then remain linked as people complete the work and reviewers update what follows.</p>
      </header>
      ${guidedWorkHandoffVisual()}
    </section>` : node.id === 'solution-production-process' ? `<section class="shell process-review-section" aria-labelledby="process-review-title">
      <header class="process-review-intro reveal">
        <p class="eyebrow">HUMAN REVIEW LOOP</p>
        <h2 id="process-review-title">Evidence becomes work context.<br><em>People decide what follows.</em></h2>
        <p>The application brings linked source moments, approved procedures and supported production context together for authorized review before downstream use.</p>
      </header>
      ${processReviewVisual()}
    </section>` : node.id === 'solution-equipment' ? `<section class="shell asset-service-section" aria-labelledby="asset-service-title">
      <header class="asset-service-intro reveal">
        <p class="eyebrow">ASSET SERVICE CONTINUITY</p>
        <h2 id="asset-service-title">One asset record.<br><em>Context that follows the work.</em></h2>
        <p>Reviewed observations, approved service knowledge and supported system events stay connected around the configured asset, so qualified teams can understand what changed and preserve what was done.</p>
      </header>
      ${assetServiceContinuityVisual()}
    </section>` : node.id === 'solution-security' ? `<section class="shell site-review-section" aria-labelledby="site-review-title">
      <header class="site-review-intro reveal">
        <p class="eyebrow">HUMAN-REVIEWED SITE CONTEXT</p>
        <h2 id="site-review-title">One reviewed event.<br><em>Context that stays with the decision.</em></h2>
        <p>Permitted source moments, configured zone context and approved response knowledge stay linked as authorized reviewers assess what happened and record what follows.</p>
      </header>
      ${governedEventReviewVisual()}
    </section>` : '';
    const industryNarrativeMedia = isIndustry ? industryNarrative(node) : '';
    const requestLabel = isModel ? 'Request Model Access' : 'Request a Demo';
    const modelBoundary = node.id === 'allus-flow' ? `<section class="shell model-boundary reveal" aria-labelledby="allusflow-boundary-title">
      <p class="eyebrow">MODEL BOUNDARY</p>
      <div><h2 id="allusflow-boundary-title">AllusFlow structures time.<br><em>Solutions decide what happens next.</em></h2><p>AllusFlow returns timestamped, reviewable temporal records from supported video. Solutions determine how those records are searched, compared, delivered and integrated into operational workflows.</p>${link('/solutions/production-process-intelligence', 'Explore Production & Process Intelligence', 'text-link')}</div>
    </section>` : '';
    return `${pageHero(node, label, `${escapeHtml(node.title)}.<br> <em>${escapeHtml(node.heroTagline || node.note)}.</em>`, node.note)}
      ${explanatoryMedia}
      ${modelBoundary}
      <section class="shell detail-layout">
        <aside aria-label="On this page"><p class="eyebrow">IN THIS PAGE</p>${detailChildren.map((child, index) => `<button type="button" data-scroll-target="section-${child.id}" aria-controls="section-${child.id}">0${index + 1} ${escapeHtml(child.title)}</button>`).join('')}<a href="#/connect">${requestLabel} ↗</a></aside>
        <div class="detail-content">${detailChildren.map((child, index) => `<section id="section-${child.id}" class="detail-block reveal" tabindex="-1"><p class="eyebrow">0${index + 1}</p><h2>${escapeHtml(child.title)}</h2><p>${escapeHtml(child.note)}</p>${child.children ? `<div class="detail-subgrid">${child.children.map(item => `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note)}</p></article>`).join('')}</div>` : ''}</section>`).join('')}</div>
      </section>
      ${solutionNarrativeMedia}
      ${industryNarrativeMedia}
      ${solutionAssociation}
      <section class="related-section dark-section"><div class="shell"><p class="eyebrow">CONNECTED SYSTEM</p><h2>Models <span>→</span> Solutions <span>→</span> Industries</h2></div></section>
      ${ctaSection(isModel ? 'Evaluate the model for your intended workload and environment.' : undefined, requestLabel)}`;
  }

  function renderResource() {
    return `${pageHero(resource, 'RESOURCE', 'Resources for evaluating<br> <em>industrial intelligence.</em>', resource.note)}
      <section class="shell resource-gateway" aria-label="Resource pathways">
        <a class="resource-gateway-panel resource-gateway-panel--cases reveal" href="#/resource/use-cases">
          <div class="resource-gateway-copy">
            <span class="resource-gateway-index">01 / USE CASES</span>
            <h2>Start from<br><em>the operation.</em></h2>
            <p>Read three anonymized customer stories across specialized materials, high-mix assembly and biscuit production, with customer identities and measured outcomes protected.</p>
            <b>Read customer stories ↗</b>
          </div>
          <div class="resource-gateway-media" aria-hidden="true">
            <figure><img src="./assets/media/allus-advanced-materials-facility-context.jpg" width="1672" height="941" alt="" loading="lazy" decoding="async"><span>ADVANCED MATERIALS</span></figure>
            <figure><img src="./assets/media/allus-electronics-assembly-workstation.jpg" width="1672" height="941" alt="" loading="lazy" decoding="async"><span>ELECTRONICS ASSEMBLY</span></figure>
            <figure><img src="./assets/media/allus-food-beverage-production.jpg" width="1672" height="941" alt="" loading="lazy" decoding="async"><span>BISCUIT PRODUCTION</span></figure>
          </div>
        </a>
        <a class="resource-gateway-panel resource-gateway-panel--trust reveal" href="#/resource/trust">
          <div class="resource-gateway-copy">
            <span class="resource-gateway-index">02 / TRUST CENTER</span>
            <h2>Review the<br><em>trust boundary.</em></h2>
            <p>Understand the assurance roadmap, industrial security scope, AI governance references and the evidence required behind each public assurance claim.</p>
            <b>Open Trust Center ↗</b>
          </div>
          <div class="resource-assurance-preview" aria-label="Assurance roadmap preview">
            <span><b>P0</b><strong>SOC 2 Type II</strong><small>ATTESTATION TARGET</small></span>
            <span><b>P0</b><strong>ISO/IEC 27001</strong><small>CERTIFICATION TARGET</small></span>
            <span><b>P1</b><strong>ISO/IEC 42001</strong><small>AI GOVERNANCE TARGET</small></span>
            <span><b>P1</b><strong>IEC 62443-4-1</strong><small>ALIGNMENT SCOPE</small></span>
          </div>
        </a>
      </section>
      <section class="shell resource-reading-path" aria-labelledby="resource-path-title">
        <header><p class="eyebrow">EVALUATION PATH</p><h2 id="resource-path-title">Context first.<br><em>Then evidence and boundaries.</em></h2></header>
        <ol>
          <li><span>01</span><strong>Choose an operating context</strong><p>Start from work, process, equipment and deployment reality.</p></li>
          <li><span>02</span><strong>Define what must be validated</strong><p>Set representative evidence, model behavior and runtime criteria.</p></li>
          <li><span>03</span><strong>Review the trust boundary</strong><p>Confirm responsibilities, data handling, governance and assurance scope.</p></li>
        </ol>
      </section>
      ${ctaSection('Evaluate a use case and its deployment boundary together.', 'Start an Evaluation')}`;
  }

  function renderUseCases(node) {
    return `${pageHero(node, 'SUCCESS STORIES', 'Customer context from<br> <em>the physical world.</em>', 'Anonymous case studies from advanced materials, electronics assembly and biscuit production.')}
      <section class="shell case-journal-lede reveal" aria-labelledby="case-journal-title">
        <p class="eyebrow">THREE CUSTOMER STORIES</p>
        <div><h2 id="case-journal-title">Real engagements.<br><em>Protected identities.</em></h2><p>Each story describes an actual customer context while withholding the customer name, site configuration, baselines and measured outcomes. The public articles explain the operating problem, model roles, deployment path and evaluation evidence without inventing performance numbers.</p></div>
      </section>
      <section class="shell case-journal" aria-label="Customer case study articles">
        ${useCaseStories.map((story, index) => `<a class="case-journal-card${index === 0 ? ' case-journal-card--featured' : ''} reveal" href="#/resource/use-cases/${story.slug}" style="--reveal-delay:${index * 55}ms">
          <figure><img src="${story.image}" width="1672" height="941" alt="${escapeHtml(story.alt)}" loading="lazy" decoding="async"><span>${story.index}</span></figure>
          <article>
            <div class="case-journal-meta"><span>${escapeHtml(story.industry)}</span><span>${escapeHtml(story.customer)}</span></div>
            <h2>${escapeHtml(story.title)}</h2>
            <p>${escapeHtml(story.dek)}</p>
            <footer><b>Read case study ↗</b><small>IDENTITY &amp; METRICS WITHHELD</small></footer>
          </article>
        </a>`).join('')}
      </section>
      <section class="shell case-journal-disclosure">
        <p class="eyebrow">PUBLICATION NOTE</p>
        <p>Customer confidentiality governs what appears here. Numerical performance, site scale, model versions and implementation specifics should be published only when the customer approves the exact wording and evidence.</p>
      </section>
      ${ctaSection('Discuss an operating context that should become the next customer story.', 'Book a Demo')}`;
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
        <a class="case-study-back" href="#/resource/use-cases">← All use cases</a>
        <div class="case-study-kicker"><span>${escapeHtml(story.industry)}</span><span>ANONYMIZED CUSTOMER STORY</span></div>
        <h1 id="case-study-title">${escapeHtml(story.title)}</h1>
        <p class="case-study-dek">${escapeHtml(story.dek)}</p>
        <dl class="case-study-meta">
          <div><dt>INDUSTRY</dt><dd>${escapeHtml(story.industry)}</dd></div>
          <div><dt>CUSTOMER</dt><dd>IDENTITY WITHHELD</dd></div>
          <div><dt>PUBLIC RESULTS</dt><dd>METRICS WITHHELD</dd></div>
        </dl>
      </section>
      <figure class="case-study-cover shell"><img src="${story.image}" width="1672" height="941" alt="${escapeHtml(story.alt)}"><figcaption><span>ILLUSTRATIVE OPERATING CONTEXT</span><p>AI-generated image; not the customer, site or deployed interface described in this story.</p></figcaption></figure>
      <div class="case-study-layout shell">
        <aside aria-label="In this case study"><p class="eyebrow">IN THIS STORY</p>${sectionLinks.map(([label, id], index) => `<button type="button" data-scroll-target="${id}" aria-controls="${id}"><span>0${index + 1}</span>${escapeHtml(label)}</button>`).join('')}</aside>
        <div class="case-study-content">
          <section id="case-background" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">01 / CUSTOMER BACKGROUND</p><h2>Industrial knowledge lives across people, media and systems.</h2><p>${escapeHtml(story.background)}</p></section>
          <section id="case-challenge" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">02 / THE CHALLENGE</p><h2>Return to the right context without losing the source.</h2><p>${escapeHtml(story.challenge)}</p></section>
          <section id="case-approach" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">03 / MODEL APPROACH</p><h2>One model system, configured around the operation.</h2><p>${escapeHtml(story.approach)}</p><div class="case-study-models">${story.modelRoles.map(([name, note]) => `<article><strong>${escapeHtml(name)}</strong><p>${escapeHtml(note)}</p></article>`).join('')}</div></section>
          <section id="case-deployment" class="case-study-section reveal" tabindex="-1"><p class="eyebrow">04 / DEPLOYMENT PATH</p><h2>Move from scope to evidence before production claims.</h2><ol class="case-study-steps">${story.deploymentSteps.map(([title, note], index) => `<li><span>0${index + 1}</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(note)}</p></div></li>`).join('')}</ol></section>
          <section id="case-evidence" class="case-study-section case-study-evidence reveal" tabindex="-1"><p class="eyebrow">05 / EVIDENCE &amp; OUTCOMES</p><h2>Publish the evaluation frame.<br><em>Protect customer results.</em></h2><p>Customer-specific baselines, measured outcomes, site scale, model versions and implementation details are not published on this page. No numerical improvement or production-performance claim is asserted.</p><div class="case-study-evaluation"><p class="eyebrow">EVALUATION AREAS</p><ul>${story.evaluationAreas.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div><div class="case-study-result-status"><span>PUBLIC RESULT STATUS</span><strong>WITHHELD BY CUSTOMER CONFIDENTIALITY</strong></div></section>
        </div>
      </div>
      <section class="case-study-next shell"><div><p class="eyebrow">RELATED INDUSTRY</p><h2>Explore the broader ${escapeHtml(story.industry.toLowerCase())} context.</h2></div>${link(story.industryRoute, 'View Industry', 'text-link')}</section>
      ${ctaSection('Bring a confidential industrial use case into a governed evaluation.', 'Book a Demo')}
    </article>`;
  }

  function renderTrustCenter(node) {
    const assuranceRoadmap = [
      { index: '01', priority: 'P0 · PRIORITY TARGET', title: 'SOC 2 Type II', kind: 'INDEPENDENT ATTESTATION', note: 'Independent examination of service-organization controls using AICPA Trust Services Criteria. Scope should match the hosted service and the criteria customers actually require; this is not an ISO-style certification.', url: 'https://www.aicpa-cima.com/cpe-learning/publication/soc-2-reporting-on-an-examination-of-controls-at-a-service-organization-relevant-to-security-availability-processing-integrity-confidentiality-or-privacy' },
      { index: '02', priority: 'P0 · PRIORITY TARGET', title: 'ISO/IEC 27001:2022', kind: 'CERTIFIABLE MANAGEMENT SYSTEM', note: 'Organization-wide information security management across people, process and technology. The eventual certificate scope must name the actual entity, products, locations and deployment models it covers.', url: 'https://www.iso.org/standard/27001' },
      { index: '03', priority: 'P1 · AI GOVERNANCE TARGET', title: 'ISO/IEC 42001:2023', kind: 'CERTIFIABLE AI MANAGEMENT SYSTEM', note: 'A management system for responsible AI development and use, including risk, accountability, transparency and continual improvement across the AI lifecycle.', url: 'https://www.iso.org/standard/42001' },
      { index: '04', priority: 'P1 · INDUSTRIAL SCOPE', title: 'IEC 62443-4-1:2018', kind: 'SECURE DEVELOPMENT LIFECYCLE', note: 'Secure product-development lifecycle requirements for products used in industrial automation and control environments. Any future claim must identify the exact part, product or process, role and certification scheme.', url: 'https://webstore.iec.ch/en/publication/33615' },
      { index: '05', priority: 'SCOPE-DEPENDENT', title: 'ISO/IEC 27701:2025', kind: 'PRIVACY MANAGEMENT SYSTEM', note: 'Privacy information management for organizations acting as controllers or processors of personally identifiable information. Prioritize when workforce video, voice, account or other PII processing becomes material.', url: 'https://www.iso.org/standard/27701' }
    ];
    const referenceFrameworks = [
      { index: '01', title: 'NIST CSF 2.0', note: 'Cybersecurity risk-management reference for organizing and improving program outcomes.', url: 'https://www.nist.gov/cyberframework' },
      { index: '02', title: 'NIST AI RMF 1.0', note: 'Voluntary AI risk-management reference organized around Govern, Map, Measure and Manage.', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
      { index: '03', title: 'ISO/IEC 23894:2023', note: 'Guidance for integrating AI-specific risk management into organizational activities and functions.', url: 'https://www.iso.org/standard/77304.html' }
    ];
    const disclosureDomains = [
      ['Deployment boundary', 'Document cloud, customer-managed edge and on-prem responsibilities for identity, network, hosts, data, keys, logs, upgrades and support access.'],
      ['Security program', 'Publish the verified scope of risk management, access control, secure development, vulnerability handling and third-party oversight.'],
      ['Data & privacy', 'State data flows, retention, deletion, regions, subprocessors, training defaults and customer controls only when they are contractually and technically verified.'],
      ['AI governance', 'Disclose intended use, system boundaries, evaluation methods, known limitations, human review, version change and rollback practices.'],
      ['Product security', 'Provide the real security contact, supported-version policy, advisory process, patch expectations and available software-supply-chain evidence.'],
      ['Resilience & response', 'Publish incident response, continuity and recovery evidence only after the underlying plans have been tested and approved for disclosure.']
    ];
    return `${pageHero(node, 'TRUST CENTER', 'Trust is an operating system.<br> <em>Not a badge wall.</em>', 'A transparent roadmap for security assurance, privacy, AI governance and industrial deployment responsibilities.')}
      <section class="shell trust-status reveal" aria-labelledby="trust-status-title">
        <p class="eyebrow">CURRENT DISCLOSURE</p>
        <div><h2 id="trust-status-title">Roadmap,<br><em>not certification claims.</em></h2><p>No independent certification or attestation is claimed on this prototype. A report or certificate should appear here only after issue, with the exact legal entity, scope, issuer, review period and validity.</p></div>
        <span>LAST REVIEWED<br><strong>04 AUG 2026</strong></span>
      </section>
      <section class="trust-roadmap dark-section" aria-labelledby="trust-roadmap-title"><div class="shell">
        <header class="trust-section-head"><p class="eyebrow">ASSURANCE ROADMAP</p><div><h2 id="trust-roadmap-title">Build one control foundation.<br><em>Choose assurance by market and deployment.</em></h2><p>SOC 2 is an attestation report. ISO/IEC 27001, ISO/IEC 42001 and ISO/IEC 27701 are management-system standards. IEC 62443 requires a specific industrial product, process and role scope.</p></div></header>
        <div class="trust-roadmap-list">${assuranceRoadmap.map(item => `<a href="${item.url}" target="_blank" rel="noreferrer" class="trust-roadmap-row reveal"><span>${item.index}</span><div><p class="eyebrow">${escapeHtml(item.kind)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note)}</p></div><strong>${escapeHtml(item.priority)}</strong><i>OFFICIAL SOURCE ↗</i></a>`).join('')}</div>
      </div></section>
      <section class="shell trust-references" aria-labelledby="trust-reference-title">
        <header><p class="eyebrow">PROGRAM REFERENCES</p><h2 id="trust-reference-title">Useful frameworks.<br><em>Not certifications.</em></h2><p>Use these references only where Allus can show the underlying mapping and operating evidence.</p></header>
        <div>${referenceFrameworks.map(item => `<a href="${item.url}" target="_blank" rel="noreferrer"><span>${item.index}</span><p class="eyebrow">PROGRAM REFERENCE</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note)}</p><b>Official source ↗</b></a>`).join('')}</div>
      </section>
      <section class="shell trust-disclosure" aria-labelledby="trust-disclosure-title">
        <header><p class="eyebrow">CONTROL DOMAINS TO DOCUMENT</p><h2 id="trust-disclosure-title">Make the operating boundary<br><em>reviewable.</em></h2></header>
        <div>${disclosureDomains.map(([title, note], index) => `<article><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p><small>REQUIRES VERIFIED EVIDENCE</small></article>`).join('')}</div>
      </section>
      ${ctaSection('Review security, data and deployment responsibilities before the pilot.', 'Discuss Trust Requirements')}`;
  }

  function renderResourceDetail(node) {
    if (node.id === 'resource-use-cases') return renderUseCases(node);
    if (node.id === 'resource-trust') return renderTrustCenter(node);
    return renderResource();
  }

  function renderCompany() {
    const partnerAreas = [
      ['Technology & Infrastructure', 'Compute, cameras, runtime systems and data infrastructure for evaluated industrial deployments.'],
      ['Industrial Systems', 'Machine, automation and operational-technology context required around the model system.'],
      ['Deployment & Integration', 'Engineering and integration capabilities that connect customer environments to governed model workflows.'],
      ['Research', 'Collaboration around multimodal intelligence, physical-world understanding and reliable deployment.']
    ];
    return `${pageHero(company, 'COMPANY', 'Intelligence belongs in<br> <em>the physical world.</em>', company.note)}
      <nav class="company-section-nav shell" aria-label="Company page sections">
        ${[['Who We Are', 'company-who'], ['Mission', 'company-mission-section'], ['Partners', 'company-partners-section'], ['Contact', 'company-contact-section']].map(([label, id], index) => `<button type="button" data-scroll-target="${id}" aria-controls="${id}"><span>0${index + 1}</span>${label}<i aria-hidden="true">↓</i></button>`).join('')}
      </nav>
      <section id="company-who" class="company-story dark-section" aria-labelledby="company-who-title" tabindex="-1"><div class="shell">
        <p class="eyebrow">WHO WE ARE</p>
        <div class="company-story-head reveal"><h2 id="company-who-title">The next frontier of AI is not only digital.<br><em>It is physical.</em></h2><p>Allus AI was founded on a simple belief: the next great frontier of artificial intelligence is not just understanding the digital world, but understanding and transforming the physical world.</p></div>
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
      </section>
      <section id="company-partners-section" class="company-partners shell" aria-labelledby="company-partners-title" tabindex="-1">
        <header class="reveal"><p class="eyebrow">PARTNERS</p><div><h2 id="company-partners-title">Build the surrounding system<br><em>with the right collaborators.</em></h2><p>Allus AI’s partnership program is organized around the infrastructure, industrial context, deployment capability and research required to bring foundation models into physical operations.</p></div></header>
        <div class="company-partner-list">${partnerAreas.map(([title, note], index) => `<article class="reveal" style="--reveal-delay:${index * 50}ms"><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(note)}</p></article>`).join('')}</div>
      </section>
      <section id="company-contact-section" class="company-contact dark-section" aria-labelledby="company-contact-title" tabindex="-1"><div class="shell">
        <p class="eyebrow">CONTACT</p>
        <div><h2 id="company-contact-title">Bring us the operation<br><em>AI still cannot understand.</em></h2><p>Connect with the Allus AI team in Cupertino or Atlanta to discuss a customer evaluation, deployment or partnership.</p><div class="company-contact-actions">${link('/connect', 'Connect with Allus', 'button button-light')}${link('/connect', 'Book a Demo', 'text-link light')}</div></div>
      </div></section>`;
  }

  function renderConnect() {
    return `${pageHero(connect, 'CONNECT', 'Start an evaluation,<br> <em>pilot or partnership.</em>', connect.note)}
      <section class="connect-layout shell">
        <div class="connect-options" aria-label="Contact options">${connect.children.map((node, index) => `<button type="button" class="connect-option${index === 0 ? ' active' : ''}" data-connect-option="${escapeHtml(node.title)}" aria-pressed="${index === 0 ? 'true' : 'false'}"><span>0${index + 1}</span><div><h2>${escapeHtml(node.title)}</h2><p>${escapeHtml(node.note)}</p></div></button>`).join('')}</div>
        <form class="demo-form" id="demoForm">
          <p class="eyebrow" id="formEyebrow">REQUEST A DEMO</p>
          <h2>Tell us where intelligence needs to run.</h2>
          <div class="form-grid">
            <label><span>Name</span><input required name="name" autocomplete="name" placeholder="Your name"></label>
            <label><span>Work email</span><input required type="email" name="email" autocomplete="email" placeholder="name@company.com"></label>
            <label><span>Company</span><input required name="company" autocomplete="organization" placeholder="Company"></label>
            <label><span>Industry</span><select required name="industry"><option value="">Select industry</option>${industries.children.map(node => `<option>${escapeHtml(node.title)}</option>`).join('')}</select></label>
            <label class="full"><span>Use case, environment and scale</span><textarea required name="context" rows="5" placeholder="Describe the operation, available data, deployment environment and timeline."></textarea></label>
          </div>
          <fieldset class="platform-function-fieldset">
            <legend>Which solutions are relevant to your operation?</legend>
            <p>Select any operational outcomes that help define the evaluation scope.</p>
            <div class="platform-function-options">${solutions.children.filter(node => node.id !== 'industries').map(node => `<label><input type="checkbox" name="solution" value="${escapeHtml(node.title)}"><span>${escapeHtml(node.title)}</span></label>`).join('')}</div>
          </fieldset>
          <button class="button button-primary" type="submit">Send prototype request <span aria-hidden="true">↗</span></button>
          <p class="form-note">Prototype only. This form does not transmit or store data.</p>
          <div class="form-success" id="formSuccess" role="status" aria-live="polite" tabindex="-1" hidden><strong>Request captured locally.</strong><p>No data was transmitted. Connect this prototype to the approved CRM or form service before launch.</p></div>
        </form>
      </section>`;
  }

  function pageHero(node, kicker, title, intro) {
    const titleId = `page-title-${node.id}`;
    return `<section class="page-hero shell" aria-labelledby="${titleId}"><div><p class="eyebrow">${escapeHtml(kicker)}</p><h1 id="${titleId}">${title}</h1></div><div class="page-hero-intro"><p>${escapeHtml(intro)}</p><span aria-label="Breadcrumb">ALLUS AI / ${escapeHtml(node.title)}</span></div></section>`;
  }

  function detailRow(node, index) {
    return `<article class="detail-row reveal"><span>0${index + 1}</span><h2>${escapeHtml(node.title)}</h2><p>${escapeHtml(node.note)}</p></article>`;
  }

  function ctaSection(title = 'Bring industrial intelligence into the physical world.', action = 'Request a Demo') {
    const path = '/connect';
    return `<section class="cta-section"><div class="shell"><p class="eyebrow">NEXT</p><h2>${escapeHtml(title)}</h2>${link(path, action, 'button button-light')}</div></section>`;
  }

  function renderFooter() {
    const groups = [
      { title: 'Models', links: [['AllusONE', '/model/allusone'], ['AllusEdge', '/model/allusedge'], ['AllusFlow', '/model/allusflow']] },
      { title: 'Solutions', links: solutions.children.filter(node => node.id !== 'industries').map(node => [node.title, `/solutions/${slugById[node.id]}`]) },
      { title: 'Industries', links: industries.children.map(node => [node.title, `/industries/${slugById[node.id]}`]) },
      { title: 'Resource', links: resource.children.map(node => [node.title, `/resource/${node.id.replace('resource-', '')}`]) },
      { title: 'Company', links: [['Who We Are', '/company'], ['Mission', '/company'], ['Partners', '/company'], ['Contact', '/connect']] },
      { title: 'Connect', links: connect.children.map(node => [node.title, '/connect']) }
    ];
    siteFooter.innerHTML = `<div class="footer-top shell"><a class="footer-brand" href="#/" aria-label="Allus AI home"><img class="footer-brand-logo" src="./assets/allus-logo-white.svg" width="2000" height="431" alt=""><p>${escapeHtml(siteData.note)}.</p></a><div class="footer-groups">${groups.map(group => `<div><h3>${group.title}</h3>${group.links.map(([label, path]) => `<a href="#${path}">${escapeHtml(label)}</a>`).join('')}</div>`).join('')}</div></div><div class="footer-bottom shell"><span>© ${new Date().getFullYear()} ALLUS AI · PROTOTYPE</span><div><a href="#/resource/trust">Responsible AI</a><a href="#/resource/trust">Security</a><a href="#/resource/trust">Privacy</a><a href="#/">Sitemap</a></div></div>`;
  }

  function renderRoute() {
    let path = routePath();
    const canonicalPath = legacyRouteAliases.get(path);
    if (canonicalPath) {
      history.replaceState(null, '', `#${canonicalPath}`);
      path = canonicalPath;
    }
    const route = routes.get(path) || routes.get('/');
    document.body.dataset.route = route.type;
    document.title = `${route.node.title} — Allus AI`;
    updateNav(path);
    main.classList.remove('route-ready');
    main.classList.add('route-entering');
    mediaCleanup?.();
    mediaCleanup = null;
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
      connect: renderConnect
    }[route.type] || renderHome)();
    bindPageInteractions();
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      revealVisible();
      requestAnimationFrame(() => main.classList.add('route-ready'));
      window.clearTimeout(routeTransitionTimer);
      routeTransitionTimer = window.setTimeout(() => main.classList.remove('route-entering', 'route-ready'), reducedMotion.matches ? 0 : 680);
      main.focus({ preventScroll: true });
    });
  }

  function updateNav(path) {
    document.querySelectorAll('[data-nav]').forEach(anchor => {
      const section = anchor.dataset.nav;
      const active = path.startsWith(`/${section}`) || (section === 'solutions' && path.startsWith('/industries'));
      const exact = path === `/${section}`;
      anchor.classList.toggle('section-active', active);
      if (exact) anchor.setAttribute('aria-current', 'page');
      else anchor.removeAttribute('aria-current');
    });
    mainNav.querySelectorAll('[data-route]').forEach(anchor => {
      if (anchor.dataset.route === path) anchor.setAttribute('aria-current', 'page');
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
    const targetRect = (target.closest('.nav-primary') || target).getBoundingClientRect();
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
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    menuLabel.textContent = 'Menu';
    mainNav.classList.remove('open');
    document.body.classList.remove('menu-open');
    closeAllSubmenus(false);
    if (mobileNav.matches) mainNav.setAttribute('inert', '');
    else mainNav.removeAttribute('inert');
    if (restoreFocus && wasOpen) menuToggle.focus({ preventScroll: true });
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
    const focusInside = panel.contains(document.activeElement);
    item.classList.remove('submenu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', `Show ${submenuLabel(item)} pages`);
    panel.setAttribute('aria-hidden', 'true');
    panel.setAttribute('inert', '');
    if ((restoreFocus || focusInside) && document.contains(toggle)) toggle.focus({ preventScroll: true });
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

  function scrollToElement(target) {
    if (!target) return;
    target.focus({ preventScroll: true });
    const headerOffset = siteHeader?.getBoundingClientRect().height || 0;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset - 12);
    window.scrollTo({ top, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
  }

  function bindPageInteractions() {
    document.querySelectorAll('[data-scroll-target]').forEach(button => {
      button.addEventListener('click', () => {
        const target = document.getElementById(button.dataset.scrollTarget);
        if (!target) return;
        scrollToElement(target);
      });
    });
    bindHomeModelContinuum();
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
      demoForm.addEventListener('submit', event => {
        event.preventDefault();
        const success = document.getElementById('formSuccess');
        success.hidden = false;
        success.focus({ preventScroll: true });
      });
      document.querySelectorAll('[data-connect-option]').forEach(button => {
        button.addEventListener('click', () => {
          document.querySelectorAll('[data-connect-option]').forEach(item => {
            item.classList.remove('active');
            item.setAttribute('aria-pressed', 'false');
          });
          button.classList.add('active');
          button.setAttribute('aria-pressed', 'true');
          document.getElementById('formEyebrow').textContent = button.dataset.connectOption.toUpperCase();
        });
      });
    }
    bindMediaMotion();
  }

  function bindHomeModelContinuum() {
    document.querySelectorAll('[data-home-model-experience]').forEach(experience => {
      const tabs = [...experience.querySelectorAll('[data-home-model-tab]')];
      const panels = [...experience.querySelectorAll('.home-model-panel')];
      if (!tabs.length || !panels.length) return;
      const selectTab = (nextTab, focus = false) => {
        const nextId = nextTab.dataset.homeModelTab;
        tabs.forEach(tab => {
          const active = tab === nextTab;
          tab.classList.toggle('is-active', active);
          tab.setAttribute('aria-selected', String(active));
          tab.tabIndex = active ? 0 : -1;
        });
        panels.forEach(panel => {
          const active = panel.id === `home-model-panel-${nextId}`;
          panel.classList.toggle('is-active', active);
          panel.setAttribute('aria-hidden', String(!active));
          if (active) panel.removeAttribute('inert');
          else panel.setAttribute('inert', '');
        });
        if (focus) nextTab.focus({ preventScroll: true });
      };
      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectTab(tab));
        tab.addEventListener('keydown', event => {
          const last = tabs.length - 1;
          let nextIndex;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = index === last ? 0 : index + 1;
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = index === 0 ? last : index - 1;
          else if (event.key === 'Home') nextIndex = 0;
          else if (event.key === 'End') nextIndex = last;
          else return;
          event.preventDefault();
          selectTab(tabs[nextIndex], true);
        });
      });
    });
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
      if (label) label.textContent = state === 'playing' ? 'Pause motion' : state === 'ended' ? 'Replay motion' : 'Play motion';
    };

    document.querySelectorAll('[data-media-visual]').forEach(figure => {
      const frame = figure.querySelector('[data-media-viewport]');
      const video = figure.querySelector('[data-media-video]');
      const toggle = figure.querySelector('[data-media-toggle]');
      if (!frame || !video) return;
      let inViewport = visibleRatio(frame) >= .25;
      let userPaused = figure.dataset.mediaUserPaused === 'true';
      let ended = figure.dataset.mediaState === 'ended' || video.ended;
      let desiredPlaying = false;
      let playRequestId = 0;
      let pausedForDocument = false;

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
      const requestPlayback = async ({ automatic = false, restart = false } = {}) => {
        inViewport = visibleRatio(frame) >= .25;
        if (restart) {
          ended = false;
          video.currentTime = 0;
        }
        if (ended || document.hidden || !inViewport || (automatic && (reducedMotion.matches || userPaused))) return;
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
          setMediaState(figure, toggle, ended ? 'ended' : 'paused');
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
        if (video.ended || ended) return;
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

      controllers.set(frame, {
        updateIntersection(entry) {
          inViewport = entry.isIntersecting && entry.intersectionRatio >= .25;
          if (!inViewport) {
            invalidatePlayback(ended ? 'ended' : 'paused');
            return;
          }
          if (!reducedMotion.matches && !userPaused && !ended && !document.hidden) requestPlayback({ automatic: true });
        },
        suspendForDocument() {
          pausedForDocument = pausedForDocument || desiredPlaying || !video.paused;
          if (pausedForDocument) invalidatePlayback(ended ? 'ended' : 'paused');
        },
        resumeForDocument() {
          if (pausedForDocument && inViewport && !userPaused && !ended && !reducedMotion.matches) requestPlayback({ automatic: true });
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
  skipLink.addEventListener('click', () => {
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
  window.addEventListener('scroll', () => {
    if (headerFrame) return;
    headerFrame = requestAnimationFrame(() => {
      const scrolled = window.scrollY > 34;
      siteHeader.classList.toggle('is-scrolled', scrolled);
      document.body.classList.toggle('header-scrolled', scrolled);
      headerFrame = null;
    });
  }, { passive: true });
  window.addEventListener('resize', () => {
    closeMenu(false);
    requestAnimationFrame(() => positionNavIndicator(activeNavLink(), true));
  }, { passive: true });
  reducedMotion.addEventListener('change', () => {
    revealVisible();
    bindMediaMotion();
  });
  window.addEventListener('hashchange', renderRoute);
  renderFooter();
  renderRoute();
})();
