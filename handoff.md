# Allus AI website — rebuild handoff

Skeleton and content only. This document is enough to reconstruct the information architecture, routes, page section order, and copy. It is not a visual-design spec.

Source of truth in this prototype: `index.html` (chrome + assumptions) and `app.js` (routes + all page copy).

---

## 1. What this site is

A marketing SPA for **Allus AI**: industrial vision foundation models and model-powered solutions for physical operations.

Positioning line (site-wide):

> Industrial foundation models and model-powered solutions for the physical world

Default document title: `Allus AI — Industrial Intelligence`  
Default meta description: `Allus AI industrial foundation models and model-powered solutions prototype.`

### Prototype assumptions (preserve)

- Information architecture and supplied copy are preserved.
- Only the supplied Allus AI logo files are used from the logo package.
- Typography, scale, layout, and palette are independent prototype decisions — **do not treat them as brand-locked**.
- Original simulated industrial visuals illustrate the product concept; verified customer footage and metrics remain pending.
- Simulated scenes are clearly labeled and are **not** evidence of shipping functionality or measured outcomes.
- Hash routing keeps the prototype deployable as static files.

### Do not treat as live claims

- Customer identities and results are withheld. Case studies are anonymized.
- Media is illustrative / simulated, not customer evidence.
- The connect form validates locally and does not transmit or store data.
- Footer copyright currently includes “Prototype”.
- Assurance / certification status lives on the external Trust Center, not this site.

---

## 2. How to rebuild (technical skeleton)

### Stack of this prototype

- Static HTML + CSS + one JS file.
- Hash router: URLs look like `http://host/#/model/allusone`.
- Query strings live after the hash: `#/connect?intent=demo`.
- In-page jumps **must not** use `href="#section-id"` (that would fight the hash router). Use a `data-scroll-target` attribute (or equivalent) that scrolls to an element id.
- JavaScript is required. Noscript fallback:

  - Title: `JavaScript Is Required to View This Site.`
  - Body: `Enable JavaScript and reload the page to explore Allus AI models, solutions, resources and contact options.`

### Chrome always present

1. Skip link → `#main` (“Skip to content”)
2. Header (logo, primary nav with submenus, Connect CTA)
3. `<main>` (route content)
4. Footer (logo, lede, link groups, legal row)
5. Shared site CTA at the bottom of **every** route, including 404

### Shared site CTA (every page)

- Eyebrow: `Next step`
- Title: `Bring industrial intelligence into the physical world.` (`industrial intelligence` is the emphasized phrase)
- Body: `Talk through the workload, data boundary and deployment path.`
- Button: `Request a Demo` → `/connect?intent=demo`

### Page-hero pattern

Most interior pages use:

- Eyebrow (section label)
- H1 (often two lines; second line or a phrase is italic/emphasized)
- Intro paragraph
- Breadcrumb: `ALLUS AI / {page title}`

Two hero variants:

- **Default:** stacked copy
- **Split** (Solutions overview only): title left, intro + breadcrumb right

### Document titles

- Home: `Allus AI — Industrial Intelligence`
- Case study: `{story title without trailing period} — Allus AI`
- Everything else: `{node.title} — Allus AI`

Meta description: story dek, else node note, else site note.

---

## 3. Canonical routes (24)

Hash paths. Trailing slashes are stripped.

| Path | Type | Page |
|---|---|---|
| `/` | home | Home |
| `/model` | model | Model overview |
| `/model/allusone` | detail | AllusONE |
| `/model/allusflow` | detail | AllusFlow |
| `/model/allusedge` | detail | AllusEdge |
| `/solutions` | solutions | Solutions overview |
| `/solutions/operational-knowledge-guidance` | detail | Operational Knowledge & Guidance |
| `/solutions/production-process-intelligence` | detail | Production & Process Intelligence |
| `/solutions/equipment-asset-intelligence` | detail | Equipment & Asset Intelligence |
| `/solutions/industrial-safety-site-intelligence` | detail | Industrial Safety & Site Intelligence |
| `/industries/electronics-assembly` | detail | Electronics Assembly |
| `/industries/fmcg` | detail | FMCG |
| `/industries/food-beverage` | detail | Food & Beverage |
| `/industries/advanced-materials` | detail | Advanced Materials |
| `/industries/automotive` | detail | Automotive |
| `/resource` | resource | Redirects conceptually to Use Cases (same render as `/resource/use-cases`) |
| `/resource/use-cases` | resource-detail | Use Cases index |
| `/resource/use-cases/advanced-materials` | case-study | Case study 01 |
| `/resource/use-cases/electronics-assembly` | case-study | Case study 02 |
| `/resource/use-cases/biscuit-production` | case-study | Case study 03 |
| `/company` | company | Company |
| `/company/privacy-security` | privacy-security | Privacy and Security |
| `/connect` | connect | Connect (`?intent=` optional) |
| `/sitemap` | sitemap | Sitemap |

Unknown paths render 404.

### Connect intent query

`/connect?intent={slug}`

| Slug | Intent title |
|---|---|
| `demo` (default) | Request a Demo |
| `model-access` | Request Model Access |
| `pilot` | Start a Pilot |
| `sales` | Contact Sales |
| `partnerships` | Partnerships |
| `support` | Support |

### Legacy aliases (replace URL, do not keep as canonical)

| Old | Canonical |
|---|---|
| `/model/platform` | `/solutions` |
| `/solutions/operational-knowledge` | `/solutions/operational-knowledge-guidance` |
| `/solutions/frontline-guidance-skills` | `/solutions/operational-knowledge-guidance` |
| `/solutions/production-intelligence` | `/solutions/production-process-intelligence` |
| `/solutions/process-monitoring` | `/solutions/production-process-intelligence` |
| `/solutions/standard-work-intelligence` | `/solutions/production-process-intelligence` |
| `/solutions/time-motion-intelligence` | `/solutions/production-process-intelligence` |
| `/solutions/robotic-perception` | `/solutions` |
| `/solutions/robotic-perception-automation` | `/solutions` |
| `/solutions/industrial-safety-security` | `/solutions/industrial-safety-site-intelligence` |
| `/solutions/product-assurance` | `/solutions/production-process-intelligence` |
| `/industries/industrial-security` | `/solutions/industrial-safety-site-intelligence` |
| `/industries/robotics-automation` | `/solutions` |
| `/industries/rare-earth-advanced-materials` | `/industries/advanced-materials` |
| `/industries/home-appliances` | `/solutions` |
| `/industries/automotive-new-energy` | `/industries/automotive` |
| `/resource/evidence` | `/resource/use-cases` |
| `/resource/trust` | `/company/privacy-security` |
| `/resource/solutions` | `/solutions` |
| `/resource/solution-guides` | `/solutions` |
| `/resource/models` | `/model` |
| `/resource/deployment` | `/connect` |
| `/resource/integrations` | `/connect` |
| `/resource/platform` | `/solutions` |
| `/resource/modules` | `/solutions` |

### External

- Trust Center: `https://trust.allus.ai` (opens new tab)
- Privacy email: `mailto:contact@allus.ai`

---

## 4. Header / navigation

**Brand:** Allus AI logo → `/`  
Files: `assets/allus-logo-navy.svg` (header), `assets/allus-icon-navy.svg` (favicon), `assets/allus-logo-white.svg` (footer)

**Header CTA:** `Connect →` → `/connect?intent=demo`  
Mobile nav also includes a Connect item.

### Primary items

1. **Model** → `/model`
2. **Solutions** → `/solutions`
3. **Use Cases** → `/resource`
4. **Company** → `/company`
5. **Connect** (CTA, not a labeled primary in desktop nav)

### Model submenu

- Eyebrow: `MODEL FAMILY`
- Title: `AllusONE. Time and Edge Products.`
- Overview link: `Model Overview` → `/model`
- Core: `01 AllusONE` — “Industrial perception and reasoning.” → `/model/allusone`
- Products: `02 AllusFlow`, `03 AllusEdge` — “Temporal understanding and local edge execution.”

### Solutions submenu

- Eyebrow: `SOLUTIONS & INDUSTRIES`
- Title: `Start with the Problem. Configure for the Operation.`
- Overview: `Solutions Overview` → `/solutions`
- Work & Process:
  - `01 Operational Knowledge & Guidance`
  - `02 Production & Process Intelligence`
- Assets & Sites:
  - `03 Equipment & Asset Intelligence`
  - `04 Industrial Safety & Site Intelligence`
- Industries:
  - `01 Electronics Assembly`
  - `02 FMCG`
  - `03 Food & Beverage`
  - `04 Advanced Materials`
  - `05 Automotive`

### Use Cases submenu

- Eyebrow: `USE CASES`
- Title: `Customer Stories from Industrial Operations.`
- Overview: `All Customer Stories` → `/resource/use-cases`
- `01 All Customer Stories`
  - `01.1 Advanced Materials`
  - `01.2 Electronics Assembly`
  - `01.3 Biscuit Production`

### Company submenu

- Eyebrow: `COMPANY`
- Title: `Who We Are, How We Operate.`
- Overview: `Company Overview` → `/company`
- `01 About Us` → `/company`
- `02 Trust Center` → `https://trust.allus.ai` (external)
- `03 Privacy and Security` → `/company/privacy-security`

---

## 5. Footer

**Lede:** site note + period: `Industrial foundation models and model-powered solutions for the physical world.`

**Groups**

- Models: AllusONE, AllusFlow, AllusEdge
- Solutions: the four solution titles
- Industries: the five industry titles
- Use Cases: All Customer Stories, Advanced Materials, Electronics Assembly, Biscuit Production
- Company: About Us, Trust Center (external), Privacy and Security
- Connect: Contact Us → `/connect?intent=demo`

**Bottom row**

- `© {year} Allus AI · Prototype`
- Privacy and Security
- Trust Center
- Sitemap

---

## 6. Product system (content model)

Rebuild around this tree. Titles and notes are canonical copy.

### Models

**AllusONE** — core  
Hero tagline: `Industrial Perception and Reasoning`  
Note: `The Allus core model for multimodal industrial perception and structured reasoning across image, video and approved operating context`

Spec cards (Purpose is stored but **not shown** on the detail page):

| Card | Copy |
|---|---|
| Inputs | Supported image and video formats · approved text instructions · configured terminology and system context |
| Capabilities | Configured recognition and segmentation · evidence-linked visual questions · structured outputs · supported workflow calls |
| Deployment | Edge server · on-premise · private cloud · hybrid, selected through workload and environment evaluation |

How-it-works (4 steps):

1. Perceive Scene — Locate supported people, parts, tools, equipment and regions in image or video.
2. Relate Context — Connect visible entities, spatial relationships and configured task context.
3. Ground Reasoning — Reference approved terminology, instructions and industrial knowledge.
4. Structure Output — Return supported regions, answers or structured records for review.

Heading: `One multimodal context. Reviewable structure.`  
Caption: `People, equipment, material and time are read together, then returned as structured understanding for review.`

Family-card extras (overview / unused chapter copy still useful):

- Role: Industrial perception and reasoning
- Optimized for: Configured multimodal perception and structured reasoning
- Validate: Task behavior · grounding · output structure

**AllusFlow** — product (time)  
Hero tagline: `Actions and State Across Time`  
Note: `Turn supported industrial video into structured, evidence-linked temporal records for review`

| Card | Copy |
|---|---|
| Inputs & Grounding | Supported video · timestamps · configured action and state vocabularies · optional approved operating context |
| Capabilities | Temporal segmentation · state-transition representation · sequence continuity · interruption and resume linking |
| Outputs | Timestamped segments · structured temporal records · source-linked evidence moments · reviewable summaries |

How-it-works:

1. Locate Boundaries — Locate supported start, stop and transition points across a video sequence.
2. Represent Transitions — Relate configured actions and states before, during and after each boundary.
3. Link Continuity — Connect interruptions with later resumptions when source evidence supports that relationship.
4. Anchor Evidence — Return timestamped temporal records linked to source moments that reviewers can inspect.

Heading: `Video over time. A reviewable account.`  
Caption: `AllusFlow turns supported industrial video into timestamped records of actions, state change and continuity.`  
Follow-on: `Solutions decide how those records are searched, compared and used.` + link to Production & Process Intelligence.

- Role: Actions and state across time
- Optimized for: Temporal segmentation, state transitions and sequence continuity
- Validate: Action boundaries · transition consistency · evidence traceability

**AllusEdge** — product (edge)  
Hero tagline: `Real-Time Edge Intelligence`  
Note: `Run selected workloads near cameras and machines under validated latency and compute constraints`

| Card | Copy |
|---|---|
| Targets | Qualified industrial PCs, edge boxes, smart cameras and embedded platforms for the selected workload |
| Hardware | CPU, GPU and NPU profiles subject to accelerator, memory, power and thermal validation |
| Capabilities | Latency-sensitive video · supported multi-stream configurations · local or offline execution where validated · observable runtime health |

How-it-works:

1. Profile Workload — Define the supported task, stream configuration and operating envelope.
2. Qualify Hardware — Select a target CPU, GPU, NPU or edge platform for validation.
3. Execute Locally — Adapt the supported model and runtime, then run it where validated.
4. Operate & Update — Monitor health and version state; stage updates, recovery and rollback.

Heading: `A hardware-aware path. Governed local execution.`  
Caption: `AllusEdge takes a selected workload from qualified hardware to governed execution near the process.`

- Role: Local execution near the process
- Optimized for: Qualified latency- and footprint-sensitive execution
- Validate: Target hardware · streams · memory · power

### Production capabilities (shared)

Journey (titles only on overview tracks):  
`Connect data` → `Adapt` → `Evaluate` → `Optimize` → `Deploy` → `Operate`

**PREPARE** — Ground the models for the plant.

1. Industrial Data Engine — Connect, curate and govern industrial image, video, document, event and context data.
2. Model Adaptation — Ground and adapt Allus models to customer terminology, processes, products, sites and operating conditions.
3. Evaluation & Reliability — Evaluate model behavior, uncertainty and failure modes against representative industrial workflows.
4. Hardware Optimization — Optimize models for target latency, throughput, memory, power and accelerator constraints.

**OPERATE** — Run, govern and connect the system.

5. Edge Runtime — Run supported workloads close to cameras and machines with stream management, offline operation, recovery and observability.
6. Deployment & Model Operations — Control versions, staged rollout, rollback, device configuration, model health, drift and audit history.
7. Security & Data Governance — Manage access, isolation, retention, privacy, evidence and customer-specific data policies.
8. Integrations — Connect supported cameras, industrial systems, enterprise identity, APIs and workflow systems.

Deployment path zones:

1. Industrial Sources — What feeds the models — Cameras & Video · Machines & Sensor Context · Procedures & Process Events
2. Deployment Environments — Where the models run — Edge Devices · On-Premise Systems · Private Cloud & Hybrid
3. Operations & Integration — How it is operated — Model Versions · Runtime Health & Audit History · Supported APIs & Systems

### Four solutions

Operating loop: `Capture` → `Understand` → `Ground` → `Deliver` → `Review`  
Descriptor: `One Model System. Four Solution Families.`

Each solution detail page has: hero, explanatory visual, in-page TOC + capability sections, a second narrative visual, “How this solution is powered” association list, CTA.

---

## 7. Page skeletons (section order + copy)

Italic / emphasized phrases are marked with `*...*`.

### Home `/`

1. **Hero**
   - Eyebrow: `ADVANCED VISION FOUNDATION MODELS`
   - H1: `AllusONE. *Industrial intelligence* for the physical world.`
   - Summary: `Advanced vision foundation models built for real-world latency, reliability and compute constraints.`
   - Actions: `Explore Models` → `/model` · `Request a Demo` → `/connect?intent=demo`
   - Facts: Core **AllusONE** · Products **Flow · Edge** · Runs on **Edge · Plant · Cloud**
   - Photo: industrial world-model image. Caption chips: Person · Equipment · Material · Time

2. **Model system**
   - Eyebrow: `MODEL SYSTEM`
   - H2: `AllusONE for *time and the edge.*`
   - Intro: `One core model. Two products carry that intelligence across time and onto the edge.`
   - Featured: Core model **AllusONE** — `Multimodal perception and structured reasoning for industrial work.` Link: Explore AllusONE
   - Capability rail: Visual understanding · Structured reasoning · Configured industrial context
   - Duo: **AllusFlow** (tag Time) `Actions, states and transitions across industrial video.` · **AllusEdge** (tag Edge) `Qualified local execution near cameras and machines.`

3. **Solutions**
   - Eyebrow: `SOLUTIONS`
   - H2: `Captured knowledge, *understood operations.*`
   - Intro: `Four model-powered solutions across people, processes, assets and sites.`
   - Index rows (domain / title / one-liner):
     1. PEOPLE & KNOWLEDGE — Operational Knowledge & Guidance — Turn approved work into searchable guidance people can use.
     2. PROCESS & EXECUTION — Production & Process Intelligence — Structure work video into reviewable process evidence.
     3. EQUIPMENT & ASSETS — Equipment & Asset Intelligence — Connect visible asset condition with maintenance context.
     4. SAFETY & SITES — Industrial Safety & Site Intelligence — Support governed review of configured site events.

4. **Production & deployment**
   - Eyebrow: `PRODUCTION & DEPLOYMENT`
   - H2: `Run intelligence where *decisions happen.*`
   - Intro: `Edge, on-premise, private cloud or hybrid—same controlled path into production.`
   - Modes: Edge / Next to cameras and machines · On-Premise / Inside your own facility · Private Cloud / Inside your private cloud · Hybrid / Local execution, coordinated centrally
   - Link: `See the Production Path` → `/model`

5. **Industries**
   - Eyebrow: `INDUSTRIES`
   - H2: `Industrial context is not *an afterthought.*`
   - Intro: `Configured for the markets where physical work happens.`
   - Tiles use each industry **summary** (see industry list below)

6. Shared CTA

### Model overview `/model`

1. Hero — kicker `MODELS`  
   H1: `AllusONE. *Products for Time and the Edge.*`  
   Intro: `AllusONE for industrial perception and reasoning. AllusFlow for actions across time. AllusEdge for local execution.`

2. Model system  
   Eyebrow `MODEL SYSTEM` · H2 `Choose the model *for the work.*`  
   Intro: `Choose by task complexity, latency target, footprint and deployment environment.`  
   Featured AllusONE (full note) + spec rail of child titles: Purpose · Inputs · Capabilities · Deployment  
   Duo: AllusFlow and AllusEdge with their notes

3. Production deployment  
   Eyebrow `PRODUCTION DEPLOYMENT` · H2 `A production path *from pilot to plant.*`  
   Intro: `Hardware, integrations and operating controls are qualified for each environment.`  
   Photo: production deployment context (Industrial source · Local execution · Human operations)  
   Six-step titles-only track  
   Link: `Discuss Production Deployment` → `/connect?intent=sales`

4. Shared CTA

### Model detail `/model/{allusone|allusflow|allusedge}`

1. Hero — kicker `MODEL`  
   H1: `{Name}. *{heroTagline}.*`  
   Intro: model note

2. Photo + How it works (4-step track with titles and notes)

3. Model spec  
   Eyebrow `MODEL SPEC` · H2 `{Name} in *evaluation terms.*`  
   Intro: `Written for workload evaluation, not as a catalog sheet.`  
   Grid of spec cards **excluding Purpose**

4. Compact model switcher: Core AllusONE · Product AllusFlow · Product AllusEdge

5. Shared CTA

### Solutions overview `/solutions`

1. Split hero — kicker `SOLUTIONS`  
   H1: `Industrial Intelligence Organized *Around Operational Problems.*`  
   Intro: `Allus configures AllusONE, AllusFlow, AllusEdge and the production deployment path around four operating domains: knowledge, processes, assets and governed sites.`

2. Operating loop  
   Eyebrow `MODEL-POWERED SOLUTIONS` · H2 `One Model System. Four Solution Families.`  
   Body: `Each solution is a configurable application of the same reusable model intelligence—not an isolated, one-off algorithm.`  
   Eyebrow `OPERATING LOOP` · steps Capture → Understand → Ground → Deliver → Review

3. Four domains directory  
   Eyebrow `FOUR OPERATIONAL DOMAINS` · H2 `Four Surfaces. *One Model System.*`  
   Intro: `Each solution starts from a different operational problem while drawing from the same model system and production deployment path.`  
   Rows: domain + title + atlas summary (see solution atlas below). No photo atlas.

4. Production capabilities  
   Eyebrow `PRODUCTION CAPABILITIES` · H2 `Built to Operate *In Industrial Reality.*`  
   Intro: `Allus solutions share the same model family and production capabilities. They are configurable applications of reusable industrial intelligence—not isolated, one-off algorithms.`  
   Six-step titles-only track  
   Deployment path intro (left-aligned): eyebrow `DEPLOYMENT PATH` · H3 `Sources to operations, *under your control.*` · `Wherever it runs, data controls, evaluation, versioning and audit history stay inside your production system.`  
   Three-column path strip  
   Ledger: PREPARE + OPERATE

5. Industries mosaic  
   Eyebrow `INDUSTRIES` · H2 `Priority Markets and *Solution Narratives.*`  
   Intro: `Priority markets and solution narratives.`  
   Cards: five industries (title + summary)

6. Shared CTA

### Solution detail (all four)

Shared skeleton:

1. Hero — kicker `SOLUTIONS` · H1 `{Title}. *{heroTagline}.*` · intro = note
2. Explanatory visual (solution-specific)
3. In this page TOC + numbered capability sections (and nested children where present)
4. Narrative visual (solution-specific)
5. Solution foundation: `How this solution *is powered.*`  
   Intro: `Each solution combines reusable model intelligence, operational workflows and production deployment around a defined industrial outcome.`  
   Numbered `capabilityRefs` · link `Explore Solutions`
6. Shared CTA  
   Aside CTA label: `Request a Demo`

#### Operational Knowledge & Guidance

Hero tagline: `Turn Real Work Into Governed Knowledge People Can Use`  
Note: `Turn expert demonstrations, procedures and operational history into governed knowledge, evidence-linked answers and context-aware guidance for people across roles, lines and sites`

Capability refs: AllusONE multimodal reasoning · AllusFlow temporal structuring · Evidence-linked retrieval · Governed workflow delivery

Atlas: PEOPLE & KNOWLEDGE / Preserve know-how  
Summary: `Turn approved demonstrations, procedures and operating records into searchable knowledge, evidence-linked answers and role-aware guidance.`

Sections:

1. Expert Knowledge Capture — Capture demonstrations and ingest approved video, images, procedures, manuals and operational records
2. Multimodal Procedure Structuring — Organize content into searchable steps, chapters, annotations and reusable work knowledge
3. Searchable Operational Evidence — Retrieve the relevant video moment, image, document or procedure step instead of searching entire files
4. Guided Work — Deliver role-, product-, line- and task-specific guidance through approved video, images and text
5. Grounded Industrial Assist — Answer operational questions with direct links to approved procedures, video moments and source evidence
6. Tasks, Skills & Readiness — Manage assignments, skills matrices, completion evidence and readiness records across teams and sites
7. Governance & Localization — Manage ownership, versions, review, approval, audit history and supported localization workflows

Visual 1 — Knowledge flow  
Stages: Capture / Structure / Ground / Guide  
Caption: `One Governed Line from Expert Work to Usable Guidance.`  
Note: `Final sources, approval states and delivery surfaces are configured around each operating environment.`

Visual 2 — Knowledge in use  
Eyebrow `KNOWLEDGE IN USE` · H2 `One Approved Source. *Grounded Guidance.*`  
Intro: `Approved demonstrations, procedure steps and source evidence are delivered for the configured role and work context, then remain linked as people complete the work and reviewers update what follows.`  
Panel: `Guidance for This Role, This Product and This Task.`  
Meta: Source = Reviewed demonstration + procedure · Scope = Role · product · line · task · State = Reviewed release context  
Steps: Resolve the Approved Version · Deliver the Work Context · Return Completion Context  
Caption: `The Applicable Knowledge Release Stays Linked from Approved Source to the Point of Work and Back to Review.`

#### Production & Process Intelligence

Hero tagline: `Understand, Verify and Improve How Industrial Work Happens`  
Note: `Turn recorded or live video where supported, together with approved procedures and production context, into structured events, standard-work evidence and measurable process insight across stations, lines and sites`

Capability refs: AllusFlow temporal understanding · Procedure-grounded comparison · Evidence-linked analytics · Industrial system context

Atlas: PROCESS & EXECUTION / Understand work over time  
Summary: `Structure supported work video and production context into reviewable events, procedure comparisons and process evidence.`

Sections:

1. Production State & Event Intelligence — Understand actions, sequences, cycle states, material flow, stoppages, transitions and interruptions over time
2. Action, Sequence & Cycle Understanding — Structure continuous work into steps, phases, cycles, events and machine-readable operational records
3. Process Search & Summaries — Search execution history and summarize supported shifts, workcells, events and process changes
4. Standard Work Comparison — Compare observed execution with approved procedures and review missing, unexpected or out-of-sequence activity
5. Time & Motion Intelligence — Measure task and cycle duration, variation, waiting, interruptions and non-value-added activity
6. Variation & Bottleneck Analysis — Compare activity across stations, lines, shifts and sites to surface recurring constraints and improvement opportunities
7. Evidence & Operational Analytics — Connect reviewed evidence and structured events with supported PLC, SCADA, MES and production records

Visual 1 — Temporal sequence  
Legend: Material arrives · Action begins · State changes · Interruption · Resume & transfer  
Caption: `Actions Become Structured Events. Events Become Operational Context.`  
Note: `Action boundaries, process states, interruption and resume—structured into one reviewable timeline.`

Visual 2 — Human review loop  
Eyebrow `HUMAN REVIEW LOOP` · H2 `Evidence in Context. *People Decide.*`  
Intro: `The application brings linked source moments, approved procedures and supported production context together for authorized review before downstream use.`  
Steps: Revisit Source Evidence · Compare Approved Context · Record Human Review  
Caption: `Temporal Evidence Becomes Reviewable Work Context—Not an Automatic Operational Decision.`

#### Equipment & Asset Intelligence

Hero tagline: `Connect Visible Asset Condition with Maintenance Action`  
Note: `Combine configured visual observations, approved operational knowledge and supported system context to support maintenance decisions and service workflows`

Capability refs: Configured visual state understanding · Approved maintenance knowledge · Evidence-grounded guidance · Sensor and EAM context

Atlas: EQUIPMENT & ASSETS / Ground service context  
Summary: `Bring reviewed visual observations, approved maintenance knowledge and supported system context into one evidence-linked service workflow.`

Sections (with nested children):

1. Observe Equipment State — Interpret configured indicators, gauges and visible conditions for qualified review
   - Equipment & Indicator State — Read supported operating states, indicators and gauges within a validated asset configuration
   - Visible Condition Awareness — Surface supported visible changes such as leakage, corrosion or damage for qualified review
2. Ground Maintenance Work — Connect service questions and work context to approved knowledge and supporting evidence
   - Maintenance Knowledge — Capture and retrieve approved service procedures, demonstrations and equipment context
   - Guided Maintenance — Deliver contextual guidance for qualified teams while approved procedures and site safety rules remain authoritative
   - Grounded Troubleshooting — Link equipment questions to approved procedures, reviewed observations and source evidence
3. Connect Service Context — Bring supported system events and reviewed observations into one evidence-linked service record
   - Sensor & EAM Context — Connect visual observations with supported sensor, production and maintenance events
   - Asset Evidence & Traceability — Preserve reviewed observations, source references and evidence-linked service context

Visual 1 — Asset context  
Stages: Observe State · Connect Context · Ground Service Work · Preserve Evidence  
Caption: `Allus Connects Visible Equipment State with Approved Knowledge, System Context and Reviewed Maintenance Evidence.`

Visual 2 — Asset service continuity  
Eyebrow `ASSET SERVICE CONTINUITY` · H2 `One Asset Record. *Context That Follows.*`  
Intro: `Reviewed observations, approved service knowledge and supported system events stay connected around the configured asset, so qualified teams can understand what changed and preserve what was done.`  
Steps: Open the Asset Record · Confirm the Work Context · Preserve the Handoff  
Caption: `The Record Stays Connected to the Asset Before, During and After Qualified Maintenance Work.`

#### Industrial Safety & Site Intelligence

Hero tagline: `Support Governed Review of Configured Site Events`  
Note: `Use governed video, approved response knowledge and operational context to help reviewers search supported site events, assess their context and connect them to relevant approved procedures`

Capability refs: Governed video and event context · Human-reviewed site intelligence · Grounded response guidance · Privacy and access controls

Atlas: SAFETY & SITES / Govern site response  
Summary: `Support authorized review of configured site events, their context and approved response procedures within explicit access and retention controls.`

Sections:

1. Define the Governance Boundary — Set permitted sources, zones, access and retention controls before operational video is used
   - Privacy, Access & Retention Controls — Apply explicit access, retention and privacy boundaries to sensitive operational video
   - Site & Zone Awareness — Support configured restricted-zone, traffic and critical-asset awareness within governed deployments
2. Surface & Review Site Events — Surface configured event patterns from supported sources for human review
   - Safety Event Intelligence — Prioritize supported event candidates for review without replacing certified safety systems or human oversight
   - Multi-Camera Event Search — Search permitted event histories across supported video sources without implying identity resolution
3. Search, Respond & Preserve — Connect reviewed events to approved response knowledge and retain their supporting context
   - Grounded Response Guidance — Suggest relevant approved procedures and escalation paths for reviewer confirmation
   - Incident Records & Summaries — Preserve reviewed timelines, source references and response context within configured retention boundaries

Visual 1 — Site context  
Stages: Govern Sources · Review Events · Ground Response · Preserve Context  
Caption: `Governed Site Context and Approved Procedures Support Human-Reviewed, Evidence-Linked Response.`

Visual 2 — Human-reviewed site context  
Eyebrow `HUMAN-REVIEWED SITE CONTEXT` · H2 `One Reviewed Event. *Context That Stays.*`  
Intro: `Permitted source moments, configured zone context and approved response knowledge stay linked as authorized reviewers assess what happened and record what follows.`  
Steps: Reconstruct Permitted Context · Confirm Response Context · Record the Human Decision  
Caption: `The Event Record Stays Reviewable from Permitted Evidence Through Human-Confirmed Response Context.`

### Industry detail `/industries/{slug}`

Shared skeleton:

1. Hero — kicker `INDUSTRY` · H1 `{Title}. *{heroTagline}.*` · intro = note
2. Feature photo + caption `ALLUSONE / {Title}` · `AllusONE, AllusFlow and AllusEdge are configured around this industry's people, processes, assets and operating conditions.`
3. In this page TOC + numbered sections
4. Optional narrative visual (**FMCG and Advanced Materials only**)
5. Industry solution mix: `Solutions configured for *{Title}.*`  
   Intro: `Selected Allus solutions are configured around the knowledge, process, asset and governance realities of this operating environment.`  
   Numbered `solutionConfig` list · Explore Solutions
6. Shared CTA

| Industry | Hero tagline | Summary | Note | Solution mix |
|---|---|---|---|---|
| Electronics Assembly | Knowledge and Process Intelligence for High-Mix Assembly | High-mix assembly knowledge, station guidance and process insight. | Configure industrial intelligence for high-mix assembly across stations, lines and production events | Knowledge · Process · Equipment |
| FMCG | Adaptable Intelligence for Fast-Moving Production | Changeovers, line guidance and high-speed production context. | Configure adaptable intelligence for high-speed, high-variation production and frequent changeovers | Knowledge · Process · Equipment |
| Food & Beverage | Operational Knowledge from Sanitation to Packaging | Sanitation, packaging and governed process knowledge. | Configure operational knowledge and process intelligence from preparation and sanitation through packaging | All four |
| Advanced Materials | Preserve Expertise Across Complex Material Processes | Expert knowledge across multi-stage material processes. | Configure industrial intelligence for specialized materials, multi-stage processes, critical assets and demanding production environments | All four |
| Automotive | Operational Intelligence Across Complex Automotive Production | Assembly, material flow, equipment and plant operations. | Configure industrial intelligence for component and vehicle assembly, material flow, production equipment and plant operations | All four |

**Electronics Assembly sections**

1. Expert Build Knowledge — Capture demonstrations, procedures, visual references and rework knowledge for complex products and variants
2. Station Guidance — Deliver task-, product- and workstation-specific instructions through video, images and text
3. Assembly Process Intelligence — Understand assembly sequence, workstation state, interruptions and material context over time
4. Standard Work & Cycle Analysis — Review defined sequence, timing variation, waiting and line-balance opportunities with human oversight
5. Traceability & System Integration — Connect execution evidence with production records, equipment context and supported production or automation workflows

**FMCG sections**

1. Changeover Knowledge — Preserve approved setup, cleaning, format-change and restart procedures across products and lines
2. Line-Side Guidance — Deliver role-, line- and SKU-specific instructions at the point of work where supported
3. Line & Stoppage Intelligence — Structure production flow, changeovers, interruptions and restart events into searchable timelines
4. Time & Motion Intelligence — Compare task and cycle variation across lines, shifts and sites to support continuous improvement
5. Cross-site Governance — Manage approved knowledge, assignments, evidence and reporting across distributed operations

FMCG narrative:  
Eyebrow `ONE CONFIGURED CHANGEOVER` · `One Changeover. *One Connected Context.*`  
Intro: `Approved changeover knowledge, supported sequence context and reviewed line records stay connected around the intended product format and operating environment—without replacing site procedures or authorized judgment.`  
Contexts: PEOPLE / Approved Knowledge · PROCESS / Configured Sequence · EQUIPMENT / Reviewed Line Context  
Caption: `Knowledge, Sequence and Line Context Stay Connected Around the Same Configured Changeover.`

**Food & Beverage sections**

1. Sanitation & Changeover Knowledge — Structure approved sanitation, allergen, setup and product-change procedures with governed version history
2. Multimodal Work Guidance — Deliver visual, video and text instructions with localization where supported and appropriate
3. Process Sequence — Understand preparation, sanitation, filling, sealing and packaging steps in operational context
4. Completion Evidence — Connect task completion and reviewed visual evidence with approved workflows and batch context
5. Cycle & Environment — Analyze cycle variation while incorporating line, batch, cold-chain and restricted-area context

**Advanced Materials sections**

1. Expert Process Knowledge — Preserve hard-to-replace demonstrations, procedures and decision context from experienced teams
2. Material Transformation Intelligence — Turn multi-stage physical processes into searchable steps, states, transitions, events and evidence
3. Critical Procedure Guidance — Deliver approved guidance with critical-step emphasis, governed escalation and human decision boundaries
4. Batch, Asset & Environment Context — Connect observed work with batch, material, equipment and environmental context from supported systems
5. Long-cycle & Transition Analysis — Compare sequence, duration, transitions, interruptions and variation across extended operating cycles

Advanced Materials narrative:  
Eyebrow `ONE CONFIGURED MATERIAL RUN` · `One Material Run. *Context Across Handoffs.*`  
Intro: `Allus models structure supported physical stages and transitions; the solution keeps those records linked to approved process knowledge and configured batch, asset and environment context as authorized teams review a run from one handoff to the next.`  
Contexts: PHYSICAL CONTEXT / Supported Stage Evidence · TEMPORAL CONTEXT / Reviewable Handoffs · HUMAN REVIEW / Source-linked Run Record  
Caption: `Supported Physical Stages and Transitions Become Source-Linked Run Context That Authorized People Can Review.`

**Automotive sections**

1. Assembly & Variant Knowledge — Structure approved build, service and changeover knowledge for components, vehicles, lines and roles
2. Production & Material Flow — Understand sequence, cycle state, material movement, interruptions and production events over time
3. Standard Work & Cycle Insight — Review approved execution, cycle variation, waiting and recurring process constraints with human oversight
4. Equipment & Asset Context — Connect visible equipment state with supported production, sensor and maintenance context
5. Plant Safety & Response — Prioritize supported site events and connect reviewed evidence with approved response procedures

### Use Cases index `/resource` and `/resource/use-cases`

1. Hero — kicker `SUCCESS STORIES`  
   H1: `Customer Context from *the Physical World.*`  
   Intro: `Anonymous case studies from advanced materials, electronics assembly and biscuit production.`

2. Lede  
   Eyebrow `THREE CUSTOMER STORIES` · H2 `Real Engagements. *Protected Identities.*`  
   `Each story describes an actual customer engagement while protecting the customer's identity and results. The articles walk through the operating problem, the model roles, the deployment path and how the work was evaluated.`

3. Three journal cards (title, dek, industry, CONFIDENTIAL CUSTOMER, “Read Case Study”, “Identity & metrics withheld”)

4. Shared CTA

### Case study pages

Shared article skeleton:

1. Hero — eyebrow `ANONYMIZED CUSTOMER STORY` · back `← All use cases` · H1 title · dek  
   Meta: INDUSTRY · CUSTOMER `IDENTITY WITHHELD` · PUBLIC RESULTS `METRICS WITHHELD`
2. Cover image · caption `OPERATING CONTEXT` · `{INDUSTRY} · CONFIDENTIAL CUSTOMER`
3. In this story: Customer background · The challenge · Model approach · Deployment path · Evidence & outcomes
4. 01 / Customer background — H2 `Industrial Knowledge Lives Across People, Media and Systems.`
5. 02 / The challenge — H2 `Return to the Right Context Without Losing the Source.`
6. 03 / Model approach — H2 `One Model System, Configured Around the Operation.` + AllusONE / AllusFlow / AllusEdge roles
7. 04 / Deployment path — H2 `Move from Scope to Evidence Before Production Claims.` · steps Scope · Evidence · Configure · Review
8. 05 / Evidence & outcomes — H2 `Publish the Evaluation Frame. *Protect Customer Results.*`  
   `Each engagement is measured against the evaluation areas below. Customer-specific baselines and outcomes remain confidential under the engagement agreement.`
9. Related industry · Explore the broader `{industry lowercase}` context. · View Industry
10. Shared CTA

#### 01 Advanced Materials — `/resource/use-cases/advanced-materials`

Title: `Preserving Critical Process Knowledge Across Rare-Earth Materials Production.`  
Dek: `How an advanced-materials producer connected long-cycle process video, approved knowledge and specialist decisions in a source-linked operating context.`

Background: The customer operates complex, multi-stage rare-earth materials processes where production knowledge is distributed across experienced specialists, approved procedures, equipment context and long-form video. Important transitions may occur far apart in time, while the reasoning behind an intervention can be difficult to reconstruct after a shift handoff.

Challenge: The team needed a faster way to return to the relevant source moment, understand the physical and temporal context around it, and keep human decisions traceable without treating an entire recording as one undifferentiated file. The system also had to respect customer-controlled data and deployment boundaries.

Approach: Allus configured a model-powered knowledge workflow around the customer’s approved sources and representative operating sequences. The engagement separated reusable model capability from customer-specific process knowledge, then evaluated each layer inside the intended runtime boundary.

Model roles:

- AllusONE — Connect approved video, imagery and procedural knowledge around the physical operating context.
- AllusFlow — Structure supported phases, transitions, interruptions and source-linked moments across long cycles.
- AllusEdge — Support validated local execution where latency, connectivity or customer data boundaries require it.

Deployment:

- Scope — Define the supported process stages, source systems, reviewer roles and operating boundary.
- Evidence — Create a customer-reviewed evaluation set around representative transitions and interventions.
- Configure — Connect multimodal retrieval, temporal structure and the intended edge or private runtime.
- Review — Evaluate relevance, traceability, transition boundaries and recovery with authorized specialists.

Evaluation areas: Source-moment retrieval · Phase and transition consistency · Evidence traceability · Human-review workflow · Runtime behavior and recovery

Related industry: `/industries/advanced-materials`

#### 02 Electronics Assembly — `/resource/use-cases/electronics-assembly`

Title: `Connecting High-Mix Assembly Knowledge to the Station Where Work Happens.`  
Dek: `How an electronics manufacturer organized variant, station and rework context across approved documents, demonstrations and experienced operators.`

Background: The customer manufactures electronic assemblies across product variants, station handoffs and specialized rework paths. Approved instructions coexist with demonstrations, engineering updates and practical knowledge held by experienced operators, making the correct context difficult to retrieve at the exact moment it is needed.

Challenge: Static instructions could not easily express every supported variant, exception and source reference. The customer needed a governed way to retrieve the relevant procedure and demonstration context while preserving human review for ambiguous or unsupported situations.

Approach: Allus organized approved multimodal sources around station, product and task context. The model system was configured to return source-linked guidance, represent supported sequence changes and operate close to the workstation when the evaluated deployment required it.

Model roles:

- AllusONE — Ground questions and guidance in approved visual, video and procedural sources.
- AllusFlow — Represent supported assembly phases, handoffs, interruptions and rework sequence context.
- AllusEdge — Bring validated workloads closer to the station on the intended customer hardware.

Deployment:

- Scope — Select the stations, product variants, roles and approved sources included in the engagement.
- Evidence — Build representative retrieval and sequence cases with engineering and operations reviewers.
- Configure — Connect station context, governed sources, supported workflows and the target runtime.
- Review — Test source relevance, variant boundaries, human escalation and local runtime behavior.

Evaluation areas: Station and variant retrieval · Source-linked guidance · Supported sequence boundaries · Human escalation · Edge latency and recovery

Related industry: `/industries/electronics-assembly`

#### 03 Biscuit Production — `/resource/use-cases/biscuit-production`

Title: `Keeping Biscuit-Line Changeover, Sanitation and Packaging Knowledge Connected.`  
Dek: `How a food manufacturer brought approved procedures and operating video into one reviewable context across a biscuit production line.`

Background: The customer runs biscuit production through preparation, baking and cooling handoffs, sanitation, product changeovers and packaging setup. Knowledge spans approved procedures, training video and experienced line teams, while the relevant source can change with product format, station and operating state.

Challenge: Teams needed to reach the approved step and source moment without searching through an entire recording or relying on memory alone. The system had to preserve food-safety procedures, customer authorization and clear boundaries between model assistance and operational responsibility.

Approach: Allus configured approved video, imagery and procedures around supported changeover and production contexts. The engagement focused on source traceability, reviewable sequence context and a local operating option for environments with restricted connectivity or data movement.

Model roles:

- AllusONE — Connect approved video, imagery and procedures to the current operating context.
- AllusFlow — Structure supported changeover, sanitation and production phases with linked transitions.
- AllusEdge — Support validated local or offline operation near the line when required.

Deployment:

- Scope — Define the supported products, stations, procedures, roles and data boundaries.
- Evidence — Create customer-reviewed cases around changeovers, sanitation and packaging transitions.
- Configure — Link approved sources, supported sequence context and the intended local runtime.
- Review — Evaluate source relevance, step coverage, transition context, escalation and recovery.

Evaluation areas: Approved-procedure retrieval · Source-moment traceability · Transition and interruption linking · Human-review coverage · Local runtime recovery

Related industry: `/industries/food-beverage`

### Company `/company`

1. Hero — kicker `COMPANY`  
   H1: `Intelligence Belongs in *the Physical World.*`  
   Intro: `Allus AI builds the intelligence that powers the physical world.`

2. Section nav: Who We Are · Mission · Partners · Contact

3. Who we are  
   Eyebrow `WHO WE ARE`  
   H2: `The next frontier of AI is not only digital. *It is physical.*`  
   Lead: `Allus AI was founded on a simple belief: the next great frontier of artificial intelligence is not just understanding the digital world, but understanding and transforming the physical world.`  
   Body:
   - Today’s most powerful AI systems can reason over language, software and information. Yet much of the world still runs through machines, factories, workers and physical processes that remain largely invisible to AI. Critical knowledge is trapped in video, human experience and fragmented industrial systems.
   - We founded Allus AI to change that. We are building the intelligence layer that enables machines and industrial systems to perceive what is happening, understand its context, support better decisions and, over time, enable governed action.
   - When machines can understand their environment, intelligence becomes part of the infrastructure of the physical world—helping factories become more adaptive while amplifying human expertise at global scale.
   - Presence: BUILDING FROM · **Cupertino** · **Atlanta**

4. Mission  
   Eyebrow `MISSION` · H2 `Build the intelligence *that powers the physical world.*`
   - 01 / PERCEIVE — Understand what is happening across cameras, machines and physical work.
   - 02 / UNDERSTAND — Connect operating context and approved knowledge to support better decisions.
   - 03 / ACT — Enable governed action inside real production environments over time.

5. Partners  
   Eyebrow `PARTNERS` · H2 `Build the surrounding system *with the right collaborators.*`  
   Intro: `Allus AI’s partnership program is organized around the infrastructure, industrial context, deployment capability and research required to bring foundation models into physical operations.`
   - Technology & Infrastructure — Compute, cameras, runtime systems and data infrastructure for evaluated industrial deployments.
   - Industrial Systems — Machine, automation and operational-technology context required around the model system.
   - Deployment & Integration — Engineering and integration capabilities that connect customer environments to governed model workflows.
   - Research — Collaboration around multimodal intelligence, physical-world understanding and reliable deployment.

6. Contact  
   Eyebrow `CONTACT` · H2 `Bring us the operation *AI still cannot understand.*`  
   `Connect with the Allus AI team in Cupertino or Atlanta to discuss a customer evaluation, deployment or partnership.`  
   Actions: Connect with Allus · Book a Demo (both → `/connect?intent=demo`)

7. Shared CTA

### Privacy and Security `/company/privacy-security`

1. Hero — kicker `PRIVACY AND SECURITY`  
   H1: `How Allus Protects *Personal and Customer Data.*`  
   Intro: `Product privacy practices for website and service personal data, together with the information-security controls that protect Allus platforms and customer deployments.`

2. Section nav: Privacy · Security Practices · Principles · Contact

3. Product privacy overview  
   Eyebrow `Product Privacy` · H2 `Privacy practices for *website visitors and customers.*`  
   `Allus AI Inc. is a B2B company building industrial intelligence for production environments. This page describes how we collect and use personal data and the security controls that protect that data. Assurance roadmap and certification status are published separately in the Trust Center.`  
   Meta: Effective **July 1, 2025** · Security Practices **July 1, 2026** · Headquarters **Atlanta, Georgia**

4. Privacy practices
   1. Privacy Contact — Allus AI Inc. is headquartered in Atlanta, Georgia. For privacy questions, rights requests, or concerns about personal data practices, contact contact@allus.ai.
   2. Personal Information We Collect — Website and customer personal information is generally limited to name, job title, employer name, work address, work email, and work phone number. We use this information to provide prospects and customers with services. We do not sell personal information.
   3. Website and Service Use — Like most websites, Allus AI collects certain information automatically in log files, including IP address, general location, browser type, operating system, and pages viewed. We use this information to operate, diagnose, improve, and understand use of the website and services.
   4. Sharing and Subprocessors — Personal information is stored in databases hosted by third parties in the United States for cloud storage and retrieval. We may engage vendors to send product, service, or event information, and we share data with agents and service providers who perform functions on our behalf. A current subprocessor list is available on request.
   5. International Transfers — Information we collect is processed in the United States. Where GDPR applies, Allus AI uses appropriate safeguards such as standard contractual clauses and data processing agreements with vendors when feasible and appropriate.
   6. Storage and Retention — Personal data is stored on Allus AI systems and cloud database services in the United States. Service data is retained for the customer relationship and a period thereafter for operations and archives. Prospect data is retained while it has business value, then purged. Verified erasure requests are honored subject to legal exceptions.

5. GDPR and similar laws  
   Eyebrow `GDPR and Similar Laws` · H2 `Rights you can *exercise.*`  
   `Contact us to confirm whether we process your personal data, request access or correction, ask us to erase or restrict processing where applicable, object to direct marketing, or request a portable copy when technically feasible.`  
   Rights: Right to Be Informed · Right of Access · Right to Rectification · Right to Erasure · Right to Restrict Processing · Right of Data Portability · Right to Object · Rights Related to Automated Decision-Making

6. Information security practices  
   Eyebrow `Information Security Practices` · H2 `Controls that protect *platform and customer data.*`  
   `These practices summarize Allus AI’s operational security baseline for applications, cloud infrastructure, AI models, and customer-facing integrations. Depth of review scales with data sensitivity, privilege, exposure, and customer impact.`
   1. Infrastructure and Network — AWS-hosted isolated environments, private VPC architecture, firewall protection, HTTPS/TLS, and cloud-native DDoS mitigation. Production and administrative interfaces are restricted to authorized personnel and services.
   2. Identity and Access — Role-based access control, least privilege, and separation of duties. Multi-factor authentication is required for administrative accounts, with strong password practices and immediate access revocation during offboarding. Privileged access is logged and reviewed according to risk.
   3. Encryption and Secrets — TLS 1.2 or higher protects data in transit. AES-256 encryption protects data at rest, including databases and backups. Credentials, keys, and tokens are not embedded in source code and are stored through approved protected mechanisms.
   4. Customer Data and Tenants — Customer data is logically isolated between tenants. Access is limited to authorized personnel for approved support and maintenance and is logged. Collection and retention are limited to legitimate business, contractual, and operational needs. Customer data is not used to train shared foundation models without explicit authorization.
   5. Application Security — Changes use version control, peer review, automated testing, dependency vulnerability scanning, and controlled production deployments. Critical or high-risk findings are resolved before release unless residual risk is explicitly accepted by authorized management.
   6. Vulnerability Management — Continuous dependency scanning, infrastructure monitoring, patch management, and prioritized remediation based on severity, exploitability, exposure, and customer impact. Remediation is tracked to closure.
   7. Monitoring and Incident Readiness — Audit logs cover authentication, administrative actions, infrastructure changes, and security events. Systems are designed to support investigation, containment, recovery, and customer notification where applicable.
   8. Resilience and Continuity — Automated backups, disaster-recovery procedures, infrastructure redundancy where practical, and periodic recovery-procedure review support availability and recoverability.
   9. People and Endpoints — Personnel receive security-awareness and phishing training. Company devices use encryption, automatic updates, endpoint protection, and screen-lock enforcement.
   10. AI Model and Inference — Access to model infrastructure is controlled, manufacturing data is handled securely, tenants are separated, inference services are monitored, and deployments are version controlled. Model releases follow the same review, test, deployment, monitoring, and rollback expectations as other production changes.

7. Secure engineering principles  
   Eyebrow `Secure Engineering Principles` · H2 `Security is built into *the engineering lifecycle.*`
   - Security by Design — Security is addressed when requirements and architecture are formed, not added only at the end of development.
   - Least Privilege — Users, services, and administrators receive only the access necessary for authorized responsibilities, for only as long as needed.
   - Defense in Depth — Multiple complementary safeguards are used so failure of one control does not automatically compromise the system or protected data.
   - Data Protection Lifecycle — Data is protected during collection, transmission, storage, use, backup, sharing, and disposal according to sensitivity and customer obligations.
   - Secure Defaults — Systems begin in restrictive configurations; unnecessary services, access paths, privileges, data collection, and dependencies are avoided.
   - Shared Responsibility — Allus AI secures the platform and supporting infrastructure; customers remain responsible for user permissions, credentials, endpoints, and integration configuration unless otherwise agreed.

8. Questions and requests  
   Eyebrow `Questions and Requests` · H2 `Contact the privacy and *security team.*`  
   `We do not knowingly solicit or receive information from children. For privacy rights, security questions, or complaints, contact the addresses below. For assurance roadmap and certification materials, visit the Trust Center.`  
   - Privacy Requests — contact@allus.ai — Rights, questions, and complaints
   - Assurance Roadmap — Trust Center — trust.allus.ai

9. Shared CTA

### Connect `/connect`

1. Hero — kicker `CONNECT`  
   H1: `Start an Evaluation, *Pilot or Partnership.*`  
   Intro: `Start an evaluation, pilot or partnership.`

2. Intent options (radio group) + form

| Intent | Note | Form title | Submit |
|---|---|---|---|
| Request a Demo | Company · industry · use case · environment · scale · timeline | Tell Us Where Intelligence Needs to Run. | Send demo request |
| Request Model Access | Evaluation · SDK · benchmark · technical review | Describe the Model Workload You Want to Evaluate. | Send model access request |
| Start a Pilot | Use-case review · data assessment · evaluation · pilot · production plan | Define the Operation and Pilot Scope. | Send pilot request |
| Contact Sales | Enterprise license · private deployment · customization · support | Tell Us About Your Enterprise Requirements. | Send sales request |
| Partnerships | Hardware · cameras · industrial systems · automation integrators · research | Describe the Partnership Opportunity. | Send partnership request |
| Support | Documentation · technical support · enterprise support · security contact | Tell Us What You Need Help With. | Send support request |

Fields:

- Name (required)
- Work email (required)
- Company (required)
- Industry (required select: the five industry titles)
- Use case, environment and scale (required textarea; placeholder `Describe the operation, available data, deployment environment and timeline.`)
- Which Solutions Are Relevant to Your Operation? — `Select any operational outcomes that help define the evaluation scope.` — checkboxes of the four solution titles

Form note: `Prototype only. This form validates locally and does not transmit or store data.`  
Success: `Request Captured Locally.` / `No data was transmitted. Connect this prototype to the approved CRM or form service before launch.`

3. Shared CTA

### Sitemap `/sitemap`

1. Hero — kicker `SITEMAP`  
   H1: `Every Public Page. *One Clear Path.*`  
   Intro: `Complete navigation for every public page in this prototype.`

2. Groups: Overview (Home, Model, Solutions, Use Cases, Company, Connect, Sitemap) plus the six footer groups

3. Shared CTA

### 404

1. Hero — kicker `404`  
   H1: `This Page Is Not Part of *the Current Site.*`  
   Intro: `The requested page does not exist or may have moved.`

2. Actions: Return Home · Browse the Sitemap

3. Shared CTA

---

## 8. Media inventory (illustrative)

Logos (real brand assets):

- `assets/allus-icon-navy.svg`
- `assets/allus-logo-navy.svg`
- `assets/allus-logo-white.svg`

Simulated industrial visuals (not shipping evidence). Paths as used in the prototype:

| File | Used on |
|---|---|
| `assets/media/allus-industrial-world-model.jpg` | Home hero |
| `assets/media/allusone-industrial-reasoning.jpg` | AllusONE |
| `assets/media/allusflow-temporal-model.jpg` | AllusFlow |
| `assets/media/allusedge-local-intelligence.jpg` | AllusEdge |
| `assets/media/allus-production-deployment-context.jpg` | Model overview production |
| `assets/media/allus-temporal-process.jpg` + `.mp4` / `.webm` loop | Process solution |
| `assets/media/allus-knowledge-guidance.jpg` | Knowledge solution |
| `assets/media/allus-guided-work-handoff.jpg` | Knowledge narrative |
| `assets/media/allus-process-sequence-context.jpg` | Process atlas (if used) |
| `assets/media/allus-process-evidence-review.jpg` | Process review |
| `assets/media/allus-equipment-intelligence.jpg` | Equipment solution |
| `assets/media/allus-asset-service-continuity.jpg` | Equipment narrative |
| `assets/media/allus-governed-site.jpg` | Safety solution |
| `assets/media/allus-governed-event-review.jpg` | Safety narrative |
| `assets/media/allus-electronics-assembly-workstation.jpg` | Electronics industry + case 02 |
| `assets/media/allus-fmcg-packaging-line.jpg` | FMCG industry |
| `assets/media/allus-fmcg-changeover-context.jpg` | FMCG narrative |
| `assets/media/allus-food-beverage-production.jpg` | Food industry + case 03 |
| `assets/media/allus-advanced-materials-facility-context.jpg` | Advanced Materials industry + case 01 |
| `assets/media/allus-advanced-materials-run-context.jpg` | Advanced Materials narrative |
| `assets/media/allus-automotive-body-shop.jpg` | Automotive industry |

If media files are missing in a checkout, rebuild with placeholders and keep the alt text above. Alts are part of the content.

---

## 9. Voice and rebuild rules

- Industrial, precise, evidence-linked. Prefer “supported”, “configured”, “reviewed”, “approved”, “governed”.
- Do not claim automatic operational decisions, identity resolution, certified safety replacement, or published customer metrics.
- Human review stays in the loop on process, asset, and site pages.
- One model system, four solution families, five industries, three anonymized stories.
- Shared CTA on every route.
- Preserve hash-safe in-page navigation.
- Do not invent extra products, industries, or case studies.

---

## 10. Files in this prototype (for reference, not required)

- `index.html` — document shell, header, assumptions comment
- `app.js` — content tree, router, all page renderers
- `styles.css` — visual system (out of scope for this handoff)
- `serve.cjs` — local static server
- `scripts/site-check.cjs` — canonical-route integrity
- Tests: `npm run check`
