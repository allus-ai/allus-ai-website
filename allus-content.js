// Canonical copy for Allus solution and industry detail pages (from app.js / handoff.md).
export const solutions = {
  'operational-knowledge-guidance': {
    kicker: 'People & knowledge', title: 'Operational Knowledge & Guidance',
    tagline: 'Turn Real Work Into Governed Knowledge People Can Use',
    v2Tagline: 'turns real work into knowledge people can use.',
    note: 'Expert demonstrations and approved procedures become searchable guidance at the point of work',
    color: '#3f7afe',
    image: 'assets/media/allus-knowledge-guidance.webp', image2: 'assets/media/allus-guided-work-handoff.webp', image3: 'assets/media/allus-completed-work-evidence.webp',
    stages: [['Capture', 'Expert demo + SOP'], ['Approve', 'Steps + evidence'], ['Guide', 'Right work context'], ['Return', 'Completion + feedback']],
    stageCaption: 'Record once. Approve. Guide. Learn.',
    visualEyebrow: 'ILLUSTRATIVE KNOWLEDGE LOOP', visualMeta: 'Fixture changeover · AX-4 · Line 04',
    sections: [
      ['Capture Expert Work', 'Record video and narration; add approved procedures and manuals'],
      ['Structure & Approve', 'Long recordings become timestamped, source-linked steps'],
      ['Search & Answer', 'Find the exact moment. Get cited answers'],
      ['Guide Work in Context', 'Approved steps for the current role, line and task'],
      ['Close the Loop', 'Completion evidence and feedback stay linked as procedures change']
    ],
    narrative: { kind: 'roi', eyebrow: 'BUSINESS VALUE', titleA: 'Measure the Time.', titleB: 'Prove the Return.', intro: 'Time to competence and time spent searching. Every assumption visible.' },
    refs: ['AllusONE multimodal reasoning', 'AllusFlow video-to-step structuring', 'Evidence-linked retrieval', 'Governed release and feedback'],
    outcome: 'Expert know-how, delivered at the station.'
  },
  'production-process-intelligence': {
    kicker: 'Process & execution', title: 'Production & Process Intelligence',
    tagline: 'Understand, Verify and Improve How Industrial Work Happens',
    v2Tagline: 'shows how work actually happens, over time.',
    note: 'Video, procedures and production context become structured events and measurable process insight',
    color: '#6eb8a9',
    image: 'assets/media/allus-temporal-process.webp', image2: 'assets/media/allus-process-evidence-review.webp', image3: 'assets/media/allus-process-sequence-context.webp',
    stages: [['Material arrives', 'Input enters the cell'], ['Action begins', 'Step boundary marked'], ['State changes', 'Transition recorded'], ['Interruption', 'Waiting linked to cause'], ['Resume & transfer', 'Handoff preserved']],
    stageCaption: 'Actions become events. Events become context.',
    visualEyebrow: 'TEMPORAL SEQUENCE', visualMeta: 'Action boundaries · process states · interruption · resume',
    sections: [
      ['Production State & Events', 'Actions, cycle states, stoppages and transitions over time'],
      ['Sequence & Cycle Understanding', 'Continuous work becomes steps, cycles and machine-readable records'],
      ['Process Search', 'Search execution history by shift, workcell or event'],
      ['Standard Work Comparison', 'Observed execution against the approved procedure'],
      ['Time & Motion', 'Cycle duration, variation, waiting and non-value-added activity'],
      ['Variation & Bottlenecks', 'Recurring constraints across stations, lines, shifts and sites'],
      ['Operational Analytics', 'Events linked to PLC, SCADA, MES and production records']
    ],
    narrative: { kind: 'steps', eyebrow: 'HUMAN REVIEW LOOP', titleA: 'Evidence in Context.', titleB: 'People Decide.', intro: 'Source moments, approved procedures and production context — together, for review.',
      steps: [['Revisit the Evidence', 'Video moment, event and timing in one view.'], ['Compare Approved Context', 'Observed sequence beside the approved procedure.'], ['Record the Decision', 'Confirm, correct or escalate — attached to the evidence.']],
      caption: 'Reviewable context, not an automatic decision.' },
    refs: ['AllusFlow step, timing and sequence analysis', 'Procedure-grounded comparison', 'Evidence-linked analytics', 'Industrial system context'],
    outcome: 'Every cycle, step and interruption — on a timeline.'
  },
  'equipment-asset-intelligence': {
    kicker: 'Equipment & assets', title: 'Equipment & Asset Intelligence',
    tagline: 'Connect Visible Asset Condition with Maintenance Action',
    v2Tagline: 'connects what equipment looks like with what to do next.',
    note: 'Visual observations, approved knowledge and system context in one maintenance workflow',
    color: '#df855d',
    image: 'assets/media/allus-equipment-intelligence.webp', image2: 'assets/media/allus-asset-service-continuity.webp', image3: 'assets/media/allus-equipment-intelligence.webp',
    stages: [['Observe State', 'Indicators, gauges, visible condition'], ['Connect Context', 'Sensor, EAM and production events'], ['Ground Service Work', 'Approved procedures and knowledge'], ['Preserve Evidence', 'Source-linked service record']],
    stageCaption: 'Visible state, approved knowledge, one service record.',
    visualEyebrow: 'ASSET CONTEXT', visualMeta: 'Configured asset · qualified review',
    sections: [
      ['Observe Equipment State', 'Indicators, gauges and visible condition, read for qualified review', [['Indicator State', 'Operating states and gauges within a validated configuration'], ['Visible Condition', 'Leakage, corrosion or damage, surfaced for review']]],
      ['Ground Maintenance Work', 'Service questions linked to approved knowledge and evidence', [['Maintenance Knowledge', 'Approved procedures, demonstrations and equipment context'], ['Guided Maintenance', 'Contextual guidance; procedures and safety rules stay authoritative'], ['Grounded Troubleshooting', 'Questions linked to procedures, observations and source evidence']]],
      ['Connect Service Context', 'System events and observations in one evidence-linked record', [['Sensor & EAM Context', 'Visual observations tied to sensor, production and maintenance events'], ['Asset Traceability', 'Observations, sources and service context, preserved']]]
    ],
    narrative: { kind: 'steps', eyebrow: 'ASSET SERVICE CONTINUITY', titleA: 'One Asset Record.', titleB: 'Context That Follows.', intro: 'Observations, service knowledge and system events stay connected to the asset.',
      steps: [['Open the Asset Record', 'Observations, sensor events and prior service in one place.'], ['Confirm the Work Context', 'Procedure, safety rules and current visible state, side by side.'], ['Preserve the Handoff', 'What was done, by whom, with which evidence.']],
      caption: 'One record, before, during and after the work.' },
    refs: ['Configured visual state understanding', 'Approved maintenance knowledge', 'Evidence-grounded guidance', 'Sensor and EAM context'],
    outcome: 'Visible condition, tied to the maintenance record.'
  },
  'industrial-safety-site-intelligence': {
    kicker: 'Safety & sites', title: 'Industrial Safety & Site Intelligence',
    tagline: 'Support Governed Review of Configured Site Events',
    v2Tagline: 'supports governed, human-reviewed site response.',
    note: 'Governed video and approved response knowledge for human-reviewed site events',
    color: '#8c7ac9',
    image: 'assets/media/allus-governed-site.webp', image2: 'assets/media/allus-governed-event-review.webp', image3: 'assets/media/allus-governed-site.webp',
    stages: [['Govern Sources', 'Access, zones, retention first'], ['Review Events', 'Configured patterns, human review'], ['Ground Response', 'Approved procedures suggested'], ['Preserve Context', 'Timeline and decision retained']],
    stageCaption: 'Governed context. Approved procedures. Human-reviewed response.',
    visualEyebrow: 'SITE CONTEXT', visualMeta: 'Permitted sources · configured zones',
    sections: [
      ['Define the Boundary', 'Permitted sources, zones, access and retention — set first', [['Privacy & Retention Controls', 'Explicit access, retention and privacy boundaries'], ['Site & Zone Awareness', 'Restricted zones, traffic and critical assets']]],
      ['Surface & Review Events', 'Configured event patterns, surfaced for human review', [['Safety Event Intelligence', 'Prioritized candidates; certified systems stay in charge'], ['Multi-Camera Search', 'Permitted event history, no identity resolution']]],
      ['Respond & Preserve', 'Reviewed events linked to approved response', [['Response Guidance', 'Approved procedures and escalation paths, for confirmation'], ['Incident Records', 'Timelines and context, within retention boundaries']]]
    ],
    narrative: { kind: 'steps', eyebrow: 'HUMAN-REVIEWED SITE CONTEXT', titleA: 'One Reviewed Event.', titleB: 'Context That Stays.', intro: 'Source moments, zone context and approved response stay linked while reviewers decide.',
      steps: [['Reconstruct the Context', 'Permitted source moments and zone context, inside the boundary.'], ['Confirm the Response', 'Approved procedures and escalation paths, for confirmation.'], ['Record the Decision', 'Attached to the event record.']],
      caption: 'From permitted evidence to human-confirmed response.' },
    refs: ['Governed video and event context', 'Human-reviewed site intelligence', 'Grounded response guidance', 'Privacy and access controls'],
    outcome: 'Site events, reviewed by people, within your rules.'
  }
};

// Problem-led framing (DeepHow-style Use Case → Platform split) and procurement FAQ per solution.
export const solutionProblems = {
  'operational-knowledge-guidance': { pain: 'Expert know-how leaves with the people who hold it.', cost: ['Retiring and rotating operators take undocumented methods with them', 'New starts spend weeks searching for the right procedure or moment', 'Static SOPs lag behind how work is actually done'], shift: 'From tribal knowledge to source-linked guidance at the point of work.' },
  'production-process-intelligence': { pain: 'Time studies and standard-work checks are slow, manual and periodic.', cost: ['Stopwatch studies take weeks and go stale on arrival', 'Deviations are found at inspection, after the cycle is lost', 'Line-balance and bottleneck decisions rest on anecdote'], shift: 'From periodic sampling to a continuous, reviewable process timeline.' },
  'equipment-asset-intelligence': { pain: 'Visible equipment condition and the maintenance record live apart.', cost: ['Gauges, indicators and leaks are read by whoever walks past', 'Service knowledge sits with a few technicians', 'Sensor, EAM and visual evidence never meet in one record'], shift: 'From scattered observations to one evidence-linked asset record.' },
  'industrial-safety-site-intelligence': { pain: 'Site video is abundant; governed, reviewable context is not.', cost: ['Hours of footage, no way to find the moment that matters', 'Response procedures are not connected to the event', 'Privacy, access and retention rules are applied after the fact'], shift: 'From raw footage to governed, human-reviewed site context.' }
};

export const solutionFaq = {
  'operational-knowledge-guidance': [['Does it replace our SOPs?', 'No. Every step and answer links back to the approved source and its video moment.'], ['What do operators need?', 'Any display or tablet already on the line.'], ['Can answers be made up?', 'No. Answers are grounded in approved sources and cited; unsupported questions go to a person.']],
  'production-process-intelligence': [['Do we need new cameras?', 'Usually not. Recorded video today; existing cameras where live analysis is evaluated.'], ['Does it make decisions?', 'No. People confirm, correct and decide before anything reaches downstream systems.'], ['How does it connect to MES or SCADA?', 'Structured events link to PLC, SCADA, MES and production records.']],
  'equipment-asset-intelligence': [['Is this predictive maintenance?', 'It is evidence-linked context: visible state, approved knowledge and system events in one record.'], ['Which assets are supported?', 'Assets with a validated visual configuration — indicators, gauges, visible conditions.'], ['How does it fit our EAM?', 'Observations and service context connect to sensor, production and maintenance systems.']],
  'industrial-safety-site-intelligence': [['Does it replace certified safety systems?', 'No. It prioritizes events for human review alongside them.'], ['Does it identify people?', 'No. Access, zone and retention boundaries are set before any video is used.'], ['Where does the video stay?', 'Inside your boundary, under your retention rules.']]
};

export const whyAllus = [
  ['One foundation model', 'Configure it, don\'t rebuild it.'],
  ['Runs inside your boundary', 'Your data never trains shared models.'],
  ['People stay in the decision', 'Source-linked evidence, not automatic action.'],
  ['Configured in weeks', 'Scope, evidence, configure, review.']
];

export const homeFaq = [
  ['What is AllusONE?', 'A vision foundation model for industrial scenes. It sees people, parts, tools and equipment, and reasons in your plant\'s terminology.'],
  ['Do we need new hardware?', 'Usually not. Recorded video and existing cameras; AllusEdge fits the servers already on site.'],
  ['Where does our data go?', 'It stays inside your boundary — edge, on-premise, private cloud or hybrid. Never used to train shared models.'],
  ['Does Allus make decisions on the floor?', 'No. It returns source-linked evidence for people to review. Procedures and certified systems remain the authority.'],
  ['How long does a first deployment take?', 'Weeks: define the boundary, build a reviewed evidence set, configure, review.']
];

// ─── METRICS ────────────────────────────────────────────────────────────────────────
// The numbers below are PLACEHOLDERS borrowed from comparable public deployments.
// Replace them with Allus-approved figures, then set approvedMetrics: true in site-config.js.
// Until then, pages render the qualitative fallbacks defined right after each array.
const APPROVED = typeof window !== 'undefined' && window.ALLUS_CONFIG && window.ALLUS_CONFIG.approvedMetrics === true;
const sqdcRaw = [
  ['Safety', 'Verified standard work', 78, '%', 'fewer safety incidents.'],
  ['Quality', 'Deviations caught in-cycle', 32, '%', 'fewer defects.'],
  ['Delivery', 'Faster time to competence', 77, '%', 'less onboarding time.'],
  ['Cost', 'Continuous time & motion', 10, '×', 'faster than stopwatch studies.']
];
const sqdcQual = [
  ['Safety', 'Verified standard work', 'Fewer', '', 'incidents.'],
  ['Quality', 'Deviations caught in-cycle', 'Fewer', '', 'defects.'],
  ['Delivery', 'Faster time to competence', 'Faster', '', 'onboarding.'],
  ['Cost', 'Continuous time & motion', 'Less', '', 'waste.']
];
export const sqdc = APPROVED ? sqdcRaw : sqdcQual;
const solutionStatsRaw = {
  'operational-knowledge-guidance': [['77%', 'less onboarding time', 'Guidance at the point of work.'], ['60+', 'languages', 'In the operator\'s language.']],
  'production-process-intelligence': [['10×', 'faster than manual studies', 'Every station, every shift.'], ['99%', 'task-level detection accuracy', 'Across individual SOP steps.']],
  'equipment-asset-intelligence': [['Zero', 'shot state reading', 'Indicators read out of the box.'], ['Anytime', 'on-demand verification', 'Any camera already on the line.']],
  'industrial-safety-site-intelligence': [['78%', 'fewer safety incidents', 'Evidence tied to approved response.'], ['24/7', 'governed review', 'Within your retention rules.']]
};
const solutionStatsQual = {
  'operational-knowledge-guidance': [['Faster', 'onboarding', 'Guidance at the point of work.'], ['60+', 'languages', 'In the operator\'s language.']],
  'production-process-intelligence': [['Continuous', 'time & motion', 'Every station, every shift.'], ['Source-linked', 'evidence', 'Every step back to its moment.']],
  'equipment-asset-intelligence': [['Zero', 'shot state reading', 'Indicators read out of the box.'], ['Anytime', 'on-demand verification', 'Any camera already on the line.']],
  'industrial-safety-site-intelligence': [['Governed', 'review', 'Within your retention rules.'], ['Human', 'in the loop', 'People confirm every response.']]
};
export const solutionStats = APPROVED ? solutionStatsRaw : solutionStatsQual;
export const solutionIcons = { 'operational-knowledge-guidance': '▶', 'production-process-intelligence': '◔', 'equipment-asset-intelligence': '◍', 'industrial-safety-site-intelligence': '◈' };
export const solutionShort = { 'operational-knowledge-guidance': 'Knowledge & Guidance', 'production-process-intelligence': 'Process Intelligence', 'equipment-asset-intelligence': 'Asset Intelligence', 'industrial-safety-site-intelligence': 'Site Intelligence' };
export const solutionTagline = { 'operational-knowledge-guidance': 'Turn expert recordings into structured, searchable guidance.', 'production-process-intelligence': 'Structure every cycle into steps, timing and evidence.', 'equipment-asset-intelligence': 'Read visible condition into the maintenance record.', 'industrial-safety-site-intelligence': 'Governed, human-reviewed site events.' };
export const industryStory = {
  'electronics-assembly': { words: ['Yield.', 'Proficiency.', 'Compliance.', 'Throughput.'], headline: 'From high-mix complexity into verified, repeatable assembly.', sub: 'How your best operators build each variant — captured, verified, timed.' },
  'fmcg': { words: ['Uptime.', 'Changeovers.', 'Consistency.', 'Speed.'], headline: 'From frequent changeovers into fast, verified restarts.', sub: 'Setup and cleaning knowledge preserved; every changeover on a timeline.' },
  'food-beverage': { words: ['Safety.', 'Sanitation.', 'Traceability.', 'Yield.'], headline: 'From sanitation to packaging, every step verified.', sub: 'Sanitation, allergen and changeover procedures as guided, evidence-linked work.' },
  'advanced-materials': { words: ['Expertise.', 'Consistency.', 'Traceability.', 'Yield.'], headline: 'From hard-won expertise into source-linked process context.', sub: 'Specialist decisions preserved; long-cycle transitions connected across handoffs.' },
  'automotive': { words: ['Takt.', 'Quality.', 'Safety.', 'Flow.'], headline: 'From tribal knowledge into verified, optimized execution.', sub: 'Build knowledge captured, standard work verified, plant context connected.' }
};
export const proofStats = APPROVED ? [['78%', 'Decrease in safety incidents'], ['77%', 'Reduction in onboarding time'], ['32%', 'Fewer defects'], ['5%', 'Increase in productivity']] : [['Safer', 'Verified standard work'], ['Faster', 'Time to competence'], ['Fewer', 'Defects and deviations'], ['Leaner', 'Continuous time & motion']];
export const proofQuote = 'Instructions never matched the floor. Source-linked guidance fixed that — and surfaced safety issues we had missed.';
export const proofNote = APPROVED ? 'Results from Allus customer deployments' : '';
export const storyStats = APPROVED ? { 'advanced-materials': ['40+', 'years of specialist expertise, preserved'], 'electronics-assembly': ['99%', 'task-level detection accuracy'], 'biscuit-production': ['80%', 'faster upskilling across lines'] } : { 'advanced-materials': ['Preserved', 'specialist process expertise'], 'electronics-assembly': ['Verified', 'variant and rework context'], 'biscuit-production': ['Connected', 'changeover, sanitation, packaging'] };
export const solutionOrder = ['operational-knowledge-guidance', 'production-process-intelligence', 'equipment-asset-intelligence', 'industrial-safety-site-intelligence'];

export const industries = {
  'electronics-assembly': {
    title: 'Electronics Assembly', tagline: 'Knowledge and Process Intelligence for High-Mix Assembly', v2Tagline: 'for high-mix assembly.',
    summary: 'High-mix assembly knowledge, station guidance and process insight.',
    note: 'Industrial intelligence for high-mix assembly',
    image: 'assets/media/allus-electronics-assembly-workstation.webp', image2: 'assets/media/allus-electronics-assembly.webp',
    sections: [
      ['Expert Build Knowledge', 'Demonstrations, procedures and rework knowledge for every variant'],
      ['Station Guidance', 'Task- and station-specific instructions in video, image and text'],
      ['Assembly Process Intelligence', 'Sequence, station state and interruptions over time'],
      ['Standard Work & Cycle Analysis', 'Timing variation, waiting and line balance, reviewed by people'],
      ['Traceability', 'Execution evidence linked to production records']
    ],
    mix: ['operational-knowledge-guidance', 'production-process-intelligence', 'equipment-asset-intelligence', 'industrial-safety-site-intelligence'],
    story: { title: 'Connecting High-Mix Assembly Knowledge to the Station Where Work Happens.', href: 'story.html?story=electronics-assembly' }
  },
  'fmcg': {
    title: 'FMCG', tagline: 'Adaptable Intelligence for Fast-Moving Production', v2Tagline: 'for fast-moving production.',
    summary: 'Changeovers, line guidance and high-speed production context.',
    note: 'Adaptable intelligence for fast lines and frequent changeovers',
    image: 'assets/media/allus-fmcg-packaging-line.webp', image2: 'assets/media/allus-fmcg-changeover-context.webp',
    sections: [
      ['Changeover Knowledge', 'Approved setup, cleaning and restart procedures, preserved'],
      ['Line-Side Guidance', 'Role-, line- and SKU-specific instructions at the point of work'],
      ['Line & Stoppage Intelligence', 'Changeovers, interruptions and restarts as searchable timelines'],
      ['Time & Motion', 'Cycle variation across lines, shifts and sites'],
      ['Cross-site Governance', 'Knowledge, evidence and reporting across sites']
    ],
    narrative: { eyebrow: 'ONE CONFIGURED CHANGEOVER', titleA: 'One Changeover.', titleB: 'One Connected Context.', intro: 'Knowledge, sequence and line records stay connected around the same changeover.',
      contexts: [['PEOPLE', 'Approved Knowledge', 'The procedure and its source evidence for this role, line and format.'], ['PROCESS', 'Configured Sequence', 'Steps, pauses and restarts, structured for review.'], ['EQUIPMENT', 'Line Context', 'Line, change parts and reviewer context at the handoff.']],
      caption: 'One changeover, one connected context.' },
    mix: ['operational-knowledge-guidance', 'production-process-intelligence', 'equipment-asset-intelligence', 'industrial-safety-site-intelligence']
  },
  'food-beverage': {
    title: 'Food & Beverage', tagline: 'Operational Knowledge from Sanitation to Packaging', v2Tagline: 'from sanitation to packaging.',
    summary: 'Sanitation, packaging and governed process knowledge.',
    note: 'Knowledge and process intelligence from sanitation to packaging',
    image: 'assets/media/allus-food-beverage-production.webp', image2: 'assets/media/allus-food-beverage.webp',
    sections: [
      ['Sanitation & Changeover Knowledge', 'Sanitation, allergen and changeover procedures with version history'],
      ['Work Guidance', 'Video, image and text instructions, localized'],
      ['Process Sequence', 'Preparation through packaging, in context'],
      ['Completion Evidence', 'Task completion linked to batch context'],
      ['Cycle & Environment', 'Cycle variation with line, batch and cold-chain context']
    ],
    mix: ['operational-knowledge-guidance', 'production-process-intelligence', 'equipment-asset-intelligence', 'industrial-safety-site-intelligence'],
    story: { title: 'Keeping Biscuit-Line Changeover, Sanitation and Packaging Knowledge Connected.', href: 'story.html?story=biscuit-production' }
  },
  'advanced-materials': {
    title: 'Advanced Materials', tagline: 'Preserve Expertise Across Complex Material Processes', v2Tagline: 'across complex material processes.',
    summary: 'Expert knowledge across multi-stage material processes.',
    note: 'Industrial intelligence for multi-stage material processes and critical assets',
    image: 'assets/media/allus-advanced-materials-facility-context.webp', image2: 'assets/media/allus-advanced-materials-run-context.webp',
    sections: [
      ['Expert Process Knowledge', 'Hard-to-replace demonstrations and decisions, preserved'],
      ['Material Transformation', 'Multi-stage processes as searchable steps, states and transitions'],
      ['Critical Procedure Guidance', 'Critical steps emphasized; people decide'],
      ['Batch & Environment Context', 'Work linked to batch, material and equipment data'],
      ['Long-cycle Analysis', 'Sequence, duration and variation across extended cycles']
    ],
    narrative: { eyebrow: 'ONE CONFIGURED MATERIAL RUN', titleA: 'One Material Run.', titleB: 'Context Across Handoffs.', intro: 'Stages, transitions and specialist decisions stay linked across handoffs.',
      contexts: [['PHYSICAL', 'Stage Evidence', 'Observed stages and transitions, source moments preserved.'], ['TEMPORAL', 'Reviewable Handoffs', 'Long-cycle transitions, linked across shifts.'], ['HUMAN REVIEW', 'Run Record', 'Specialist decisions recorded against the evidence.']],
      caption: 'One run, reviewable from handoff to handoff.' },
    mix: ['operational-knowledge-guidance', 'production-process-intelligence', 'equipment-asset-intelligence', 'industrial-safety-site-intelligence'],
    story: { title: 'Preserving Critical Process Knowledge Across Rare-Earth Materials Production.', href: 'story.html?story=advanced-materials' }
  },
  'automotive': {
    title: 'Automotive', tagline: 'Operational Intelligence Across Complex Automotive Production', v2Tagline: 'across complex automotive production.',
    summary: 'Assembly, material flow, equipment and plant operations.',
    note: 'Industrial intelligence for assembly, material flow, equipment and plant operations',
    image: 'assets/media/allus-automotive-body-shop.webp', image2: 'assets/media/allus-automotive.webp',
    sections: [
      ['Assembly & Variant Knowledge', 'Build, service and changeover knowledge by line and role'],
      ['Production & Material Flow', 'Sequence, cycle state and material movement over time'],
      ['Standard Work & Cycle Insight', 'Cycle variation, waiting and constraints, reviewed by people'],
      ['Equipment Context', 'Visible state linked to production, sensor and maintenance data'],
      ['Plant Safety & Response', 'Site events linked to approved response procedures']
    ],
    mix: ['operational-knowledge-guidance', 'production-process-intelligence', 'equipment-asset-intelligence', 'industrial-safety-site-intelligence']
  }
};

export const industryOrder = ['electronics-assembly', 'fmcg', 'food-beverage', 'advanced-materials', 'automotive'];

export const stories = {
  'advanced-materials': {
    index: '01', industry: 'Advanced Materials', industrySlug: 'advanced-materials', image: 'assets/media/allus-advanced-materials-facility-context.webp',
    title: 'Preserving Critical Process Knowledge Across Rare-Earth Materials Production.',
    dek: 'Long-cycle process video, approved knowledge and specialist decisions in one source-linked context.',
    background: 'Multi-stage rare-earth processes. Knowledge spread across specialists, procedures, equipment context and hours of video. Key transitions happen far apart; the reasoning behind an intervention is hard to reconstruct after a handoff.',
    challenge: 'Return to the right source moment fast, keep decisions traceable, and stay inside the customer\'s data and deployment boundary.',
    approach: 'Approved sources and representative sequences, configured. Reusable model capability separated from customer process knowledge; each layer evaluated inside the runtime boundary.',
    roles: [['AllusONE', 'Approved video, imagery and procedures around the physical context.'], ['AllusFlow', 'Long recordings into timed phases, transitions and source-linked moments.'], ['AllusEdge', 'Validated local execution where latency or data boundaries require it.']],
    steps: [['Scope', 'Process stages, source systems, reviewer roles, boundary.'], ['Evidence', 'Customer-reviewed set of representative transitions.'], ['Configure', 'Retrieval, temporal structure, target runtime.'], ['Review', 'Relevance, traceability and recovery with specialists.']],
    evaluation: ['Source-moment retrieval', 'Phase and transition consistency', 'Evidence traceability', 'Human-review workflow', 'Runtime behavior and recovery']
  },
  'electronics-assembly': {
    index: '02', industry: 'Electronics Assembly', industrySlug: 'electronics-assembly', image: 'assets/media/allus-electronics-assembly-workstation.webp',
    title: 'Connecting High-Mix Assembly Knowledge to the Station Where Work Happens.',
    dek: 'Variant, station and rework context — from documents, demonstrations and experienced operators — at the station.',
    background: 'Many variants, station handoffs and rework paths. Approved instructions sit beside demonstrations, engineering updates and operator know-how; the right context is hard to reach at the moment it is needed.',
    challenge: 'Static instructions cannot express every variant and exception. Retrieval had to be governed, with human review for ambiguous cases.',
    approach: 'Approved multimodal sources organized by station, product and task. Source-linked guidance, supported sequence changes, execution near the workstation.',
    roles: [['AllusONE', 'Guidance grounded in approved visual and procedural sources.'], ['AllusFlow', 'Assembly recordings into timed phases, handoffs and rework sequences.'], ['AllusEdge', 'Models compressed and validated for station hardware.']],
    steps: [['Scope', 'Stations, variants, roles, approved sources.'], ['Evidence', 'Retrieval and sequence cases with engineering reviewers.'], ['Configure', 'Station context, governed sources, target runtime.'], ['Review', 'Source relevance, variant boundaries, escalation, runtime.']],
    evaluation: ['Station and variant retrieval', 'Source-linked guidance', 'Supported sequence boundaries', 'Human escalation', 'Edge latency and recovery']
  },
  'biscuit-production': {
    index: '03', industry: 'Food & Beverage', industrySlug: 'food-beverage', image: 'assets/media/allus-food-beverage-production.webp',
    title: 'Keeping Biscuit-Line Changeover, Sanitation and Packaging Knowledge Connected.',
    dek: 'Approved procedures and operating video in one reviewable context across a biscuit line.',
    background: 'Preparation, baking, cooling, sanitation, changeovers, packaging. Knowledge spans procedures, training video and line teams; the right source changes with format, station and state.',
    challenge: 'Reach the approved step and source moment without scrubbing a full recording — while food-safety procedures and operational responsibility stay with people.',
    approach: 'Approved video, imagery and procedures configured around changeover and production contexts, with a local runtime option for restricted connectivity.',
    roles: [['AllusONE', 'Approved sources connected to the current operating context.'], ['AllusFlow', 'Changeover and sanitation recordings into timed phases.'], ['AllusEdge', 'Validated local or offline operation near the line.']],
    steps: [['Scope', 'Products, stations, procedures, roles, data boundary.'], ['Evidence', 'Customer-reviewed changeover, sanitation and packaging cases.'], ['Configure', 'Approved sources, sequence context, local runtime.'], ['Review', 'Relevance, step coverage, escalation, recovery.']],
    evaluation: ['Approved-procedure retrieval', 'Source-moment traceability', 'Transition and interruption linking', 'Human-review coverage', 'Local runtime recovery']
  }
};
// Result-first leads for story cards (qualitative; customer metrics remain withheld).
export const storyLeads = { 'advanced-materials': 'Decades of specialist process knowledge, source-linked', 'electronics-assembly': 'Variant and rework context, at the station', 'biscuit-production': 'Changeover and sanitation steps, one reviewable context' };
export const storyOrder = ['advanced-materials', 'electronics-assembly', 'biscuit-production'];

export const connectIntents = [
  ['demo', 'Request a Demo', 'Company · industry · use case · environment · scale · timeline', 'Tell Us Where Intelligence Needs to Run.', 'Send demo request'],
  ['model-access', 'Request Model Access', 'Evaluation · SDK · benchmark · technical review', 'Describe the Model Workload You Want to Evaluate.', 'Send model access request'],
  ['pilot', 'Start a Pilot', 'Use-case review · data assessment · evaluation · pilot · production plan', 'Define the Operation and Pilot Scope.', 'Send pilot request'],
  ['sales', 'Contact Sales', 'Enterprise license · private deployment · customization · support', 'Tell Us About Your Enterprise Requirements.', 'Send sales request'],
  ['partnerships', 'Partnerships', 'Hardware · cameras · industrial systems · automation integrators · research', 'Describe the Partnership Opportunity.', 'Send partnership request'],
  ['support', 'Support', 'Documentation · technical support · enterprise support · security contact', 'Tell Us What You Need Help With.', 'Send support request']
];

export const privacy = {
  practices: [
    ['Privacy Contact', 'Allus AI Inc., Atlanta, Georgia. Questions, rights requests and concerns: contact@allus.ai.'],
    ['What We Collect', 'Name, job title, employer, work address, work email and phone — used to provide services. We do not sell personal information.'],
    ['Website Logs', 'IP address, general location, browser, OS and pages viewed, used to operate and improve the site.'],
    ['Sharing and Subprocessors', 'Data is hosted by third parties in the United States and shared only with providers acting on our behalf. Subprocessor list on request.'],
    ['International Transfers', 'Processing occurs in the United States. Where GDPR applies, we use standard contractual clauses and data processing agreements.'],
    ['Retention', 'Service data is kept for the customer relationship plus an archive period; prospect data while it has business value. Verified erasure requests are honored, subject to legal exceptions.']
  ],
  rights: ['Right to Be Informed', 'Right of Access', 'Right to Rectification', 'Right to Erasure', 'Right to Restrict Processing', 'Right of Data Portability', 'Right to Object', 'Rights Related to Automated Decision-Making'],
  security: [
    ['Infrastructure and Network', 'Isolated AWS environments, private VPC, firewalls, TLS and DDoS mitigation. Admin interfaces restricted to authorized staff.'],
    ['Identity and Access', 'Role-based access, least privilege, MFA on admin accounts, immediate revocation at offboarding. Privileged access logged and reviewed.'],
    ['Encryption and Secrets', 'TLS 1.2+ in transit, AES-256 at rest including backups. No credentials in source code.'],
    ['Customer Data and Tenants', 'Logically isolated per tenant; access logged and limited to approved support. Never used to train shared models without authorization.'],
    ['Application Security', 'Version control, peer review, automated tests, dependency scanning, controlled deploys. Critical findings fixed before release.'],
    ['Vulnerability Management', 'Continuous scanning and patching; remediation prioritized by severity and exposure, tracked to closure.'],
    ['Monitoring and Incidents', 'Audit logs for authentication, admin actions, infrastructure and security events. Built for investigation, containment, recovery and notification.'],
    ['Resilience', 'Automated backups, disaster-recovery procedures, redundancy and periodic recovery drills.'],
    ['People and Endpoints', 'Security and phishing training. Encrypted, auto-updated, protected devices with screen lock.'],
    ['AI Model and Inference', 'Controlled model infrastructure, separated tenants, monitored inference, versioned deployments with rollback.']
  ],
  principles: [
    ['Security by Design', 'Addressed at requirements and architecture, not bolted on.'],
    ['Least Privilege', 'Only the access needed, only as long as needed.'],
    ['Defense in Depth', 'No single control failure compromises the system.'],
    ['Data Protection Lifecycle', 'Protected from collection through disposal.'],
    ['Secure Defaults', 'Restrictive by default; unnecessary services and privileges avoided.'],
    ['Shared Responsibility', 'We secure the platform; customers own permissions, credentials, endpoints and integrations.']
  ]
};

export const company = {
  body: [
    'AI can reason over language and software. Factories, machines and physical work remain largely invisible to it — critical knowledge trapped in video, experience and fragmented systems.',
    'Allus AI is the intelligence layer that lets industrial systems perceive what is happening, understand its context and, under governance, act.',
    'When machines understand their environment, intelligence becomes infrastructure — and human expertise scales.'
  ],
  mission: [['PERCEIVE', 'What is happening across cameras, machines and work.'], ['UNDERSTAND', 'Context and approved knowledge, for better decisions.'], ['ACT', 'Governed action in real production, over time.']],
  partners: [['Technology & Infrastructure', 'Compute, cameras, runtime and data infrastructure.'], ['Industrial Systems', 'Machine, automation and OT context.'], ['Deployment & Integration', 'Connecting customer environments to governed workflows.'], ['Research', 'Multimodal intelligence and reliable deployment.']]
};

export const footerGroups6 = [
  { title: 'Models', links: [['AllusONE', 'model-detail.html?model=allusone'], ['AllusFlow', 'model-detail.html?model=allusflow'], ['AllusEdge', 'model-detail.html?model=allusedge']] },
  { title: 'Solutions', links: solutionOrder.map(s => [solutions[s].title, 'solution.html?solution=' + s]) },
  { title: 'Industries', links: industryOrder.map(s => [industries[s].title, 'industry.html?industry=' + s]) },
  { title: 'Use Cases', links: [['Advanced Materials', 'story.html?story=advanced-materials'], ['Electronics Assembly', 'story.html?story=electronics-assembly'], ['Biscuit Production', 'story.html?story=biscuit-production']] },
  { title: 'Company', links: [['About Us', 'company.html'], ['Trust Center', 'https://trust.allus.ai'], ['Privacy and Security', 'privacy.html']] },
  { title: 'Connect', links: [['Contact Us', 'connect.html?intent=demo']] }
].map(g => ({ title: g.title, links: g.links.map(([label, href]) => ({ label, href })) }));

export const footerGroups4 = [
  footerGroups6[0], footerGroups6[1], footerGroups6[2],
  { title: 'Company', links: [['About Us', 'company.html'], ['Customer Stories', 'story.html?story=advanced-materials'], ['Trust Center', 'https://trust.allus.ai'], ['Privacy and Security', 'privacy.html'], ['Contact Us', 'connect.html?intent=demo']].map(([label, href]) => ({ label, href })) }
];
