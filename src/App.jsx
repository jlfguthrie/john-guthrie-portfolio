import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  Storefront,
  Truck,
  GearSix,
  UsersThree,
  DeviceMobile,
  Code,
  CheckCircle,
  GitBranch,
  Cloud,
  ListChecks,
  ShieldCheck,
  EnvelopeSimple,
  WhatsappLogo,
  GithubLogo,
  LinkedinLogo,
  ArrowDown,
  X,
} from "@phosphor-icons/react";

const cv = {
  product: "/cv/John-Guthrie-Product-and-Business-Systems.pdf",
  solutions: "/cv/John-Guthrie-Solutions-Consulting.pdf",
};
const projects = [
  {
    title: "Commerce operations",
    subtitle: "Connecting orders, suppliers and customer communication",
    problem:
      "Running several storefronts creates a coordination problem. Orders, supplier updates, documents and customer conversations need to stay connected, even when work moves between people and systems.",
    contribution:
      "I define the product priorities, business rules and acceptance criteria, and lead the development and operation of IntelliCommerce across seven WooCommerce storefronts.",
    decisions: [
      [
        "Connect the workflow",
        "Bring orders, supplier fulfilment, documents and communications into a shared operations platform. Keep the original store and customer context attached to the work.",
      ],
      [
        "Make state explicit",
        "Separate a payment confirmation, a supplier acknowledgement and a customer update. Each means something different and needs its own evidence.",
      ],
      [
        "Choose the right execution model",
        "Use Workers for APIs, D1 for operational records, R2 for documents and asynchronous processing for work that should not hold up a request.",
      ],
    ],
    stack: [
      "Cloudflare Workers",
      "D1 · R2 · Queues",
      "WooCommerce",
      "REST APIs · Webhooks",
      "WhatsApp Business",
    ],
  },
  {
    title: "Native mobile delivery",
    subtitle: "From field needs to production apps",
    problem:
      "A mobile product has to work beyond the development environment. Device behaviour, permissions, subscriptions, store requirements and release management all become part of the product.",
    contribution:
      "I own the lifecycle across web and native iOS/Android applications, from discovery and requirements through development, integration, testing, store submissions and ongoing operation.",
    decisions: [
      [
        "Start with the field use",
        "Translate practical user needs into flows, acceptance criteria and device requirements before selecting implementation details.",
      ],
      [
        "Treat release as product work",
        "Manage build configuration, test distribution, app-store submissions, subscription and payment integration as part of delivery.",
      ],
      [
        "Follow through after launch",
        "Use provider review feedback and real device behaviour to guide fixes and subsequent releases.",
      ],
    ],
    stack: [
      "React Native · Expo",
      "TypeScript",
      "App Store Connect",
      "Google Play Console",
      "Subscriptions · Payments",
    ],
  },
  {
    title: "Automation & agents",
    subtitle: "Practical automation for real business work",
    problem:
      "Business processes cross tools and teams. Useful automation needs clear inputs, controlled actions and a way to tell whether the intended result actually happened.",
    contribution:
      "I translate operating requirements into integrations and automation, and design agent workflows with reusable instructions, tool connections, context management and verification.",
    decisions: [
      [
        "Define the boundaries",
        "Specify the trigger, required information, allowed actions and situations that need a person to decide.",
      ],
      [
        "Connect existing systems",
        "Use APIs, webhooks and workflow platforms to connect the business tools already in use.",
      ],
      [
        "Verify the outcome",
        "Distinguish a request being accepted from the intended result being delivered. Preserve enough context to review what happened.",
      ],
    ],
    stack: [
      "n8n · Pabbly Connect · Zapier",
      "OpenAI · Anthropic · Gemini",
      "Google Workspace",
      "APIs · Agent harnesses",
    ],
  },
];
const career = [
  {
    company: "Intergraph UK",
    period: "2002–2004",
    title: "Application Engineer · Post Sales & Pre Sales",
    sector: "Enterprise & geospatial software",
    text: "Enterprise consulting across SmartPlant Foundation and G/Technology. Work included technical demonstrations, proposals, requirements, implementation and partner training.",
  },
  {
    company: "Astrata",
    period: "2004–2006",
    title: "Systems Analyst & Senior Product Consultant",
    sector: "Vehicle tracking & location-based systems",
    text: "International product consulting and implementation, including system specifications, UML use cases, acceptance testing and partner enablement.",
  },
  {
    company: "MiX Telematics",
    period: "2006–2008",
    title: "Product Manager",
    sector: "Fleet-management hardware & software",
    text: "Connected customer requirements with roadmap communication, technical feasibility, specification reviews and release readiness. Worked across engineering, sales, support and implementation teams.",
  },
  {
    company: "Independent product work",
    period: "2008–present",
    title: "Business Owner & Product Lead",
    sector: "Commerce, cloud applications & automation",
    text: "Build and operate commerce businesses, lead IntelliCommerce and own full-lifecycle web and native mobile delivery. Combine commercial responsibility with product priorities, integrations and technical delivery.",
  },
];
function CvChoices({ close }) {
  return (
    <div className="cv-choices">
      <span className="eyebrow">CHOOSE YOUR CV</span>
      {close && (
        <button
          className="close-button"
          onClick={close}
          aria-label="Close CV choices"
        >
          <X size={20} />
        </button>
      )}
      <a href={cv.product} download>
        Product & business systems <DownloadSimple size={19} />
      </a>
      <a href={cv.solutions} download>
        Solutions consulting <DownloadSimple size={19} />
      </a>
      <p>Two focused versions · PDF · 2 pages each</p>
    </div>
  );
}
function FlowNode({ item: [Icon, label] }) {
  return (
    <div className="flow-node">
      <Icon size={32} />
      <span>{label}</span>
    </div>
  );
}
function Flow({ project }) {
  const items = [
    [
      [Storefront, "Storefront"],
      [Truck, "Supplier"],
      [GearSix, "Operations"],
      [UsersThree, "Customer"],
    ],
    [
      [ListChecks, "Requirements"],
      [Code, "Build & integrate"],
      [DeviceMobile, "Device testing"],
      [CheckCircle, "Store release"],
    ],
    [
      [GitBranch, "Trigger"],
      [Cloud, "Connected tools"],
      [ShieldCheck, "Action checks"],
      [CheckCircle, "Verify result"],
    ],
  ][project];
  return (
    <div className="workflow">
      <span className="diagram-label">
        {project === 0
          ? "Illustrative workflow · sample data"
          : "Delivery approach · simplified view"}
      </span>
      <div className="flow-top">
        <FlowNode item={items[0]} />
      </div>
      <div className="flow-branches" aria-hidden="true">
        <ArrowDown size={22} />
      </div>
      <div className="flow-bottom">
        <FlowNode item={items[1]} />
        <span className="flow-link" aria-hidden="true">
          <ArrowRight size={20} />
        </span>
        <FlowNode item={items[2]} />
        <span className="flow-link" aria-hidden="true">
          <ArrowRight size={20} />
        </span>
        <FlowNode item={items[3]} />
      </div>
    </div>
  );
}
export function App() {
  const [selected, setSelected] = useState(0),
    [tab, setTab] = useState("system"),
    [careerIndex, setCareerIndex] = useState(0),
    [showCV, setShowCV] = useState(false),
    [scenario, setScenario] = useState("ready"),
    [trace, setTrace] = useState(null),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [demoOpen, setDemoOpen] = useState(false);
  const project = projects[selected],
    activeCareer = career[careerIndex];
  async function runTrace() {
    setBusy(true);
    setError("");
    setTrace(null);
    try {
      const r = await fetch("/api/trace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario }),
      });
      if (!r.ok)
        throw new Error(
          "The demonstration is temporarily unavailable. Please try again.",
        );
      setTrace(await r.json());
    } catch (e) {
      setError(e.message || "Please try again.");
    } finally {
      setBusy(false);
    }
  }
  function changeProject(i) {
    setSelected(i);
    setTab("system");
    setDemoOpen(false);
    setTrace(null);
    setError("");
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <header className="header">
          <a href="#" className="wordmark">
            John Guthrie
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Selected work</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </nav>
          <img
            className="portrait"
            src="/john-guthrie.jpg"
            alt="John Guthrie"
            width="60"
            height="60"
          />
        </header>
        <main id="main">
          <section className="hero" aria-labelledby="hero-heading">
            <h1 id="hero-heading">
              Product judgement.
              <br />
              Technical delivery<span className="orange">.</span>
            </h1>
            <div className="hero-summary">
              <p>
                I help organisations turn complex requirements into practical
                solutions, combining product management, enterprise consulting
                and hands-on technical delivery to build working business
                systems.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore the work <ArrowRight size={21} />
                </a>
                <div className="cv-anchor">
                  <button
                    className="button"
                    onClick={() => setShowCV(!showCV)}
                    aria-expanded={showCV}
                  >
                    Download CV <DownloadSimple size={20} />
                  </button>
                  {showCV && <CvChoices close={() => setShowCV(false)} />}
                </div>
              </div>
            </div>
            <aside className="availability">
              <p>South Africa · Open to remote work and relocation</p>
              <span>British & South African citizen</span>
            </aside>
          </section>
          <section
            id="work"
            className="work-section"
            aria-labelledby="work-label"
          >
            <div className="section-label">
              <h2 id="work-label">SELECTED WORK</h2>
              <span>PROJECT ATLAS</span>
            </div>
            <div className="work-grid">
              <div
                className="project-list"
                role="tablist"
                aria-label="Selected projects"
                aria-orientation="vertical"
              >
                {projects.map((p, i) => (
                  <button
                    key={p.title}
                    id={`project-tab-${i}`}
                    aria-controls="project-panel"
                    role="tab"
                    aria-selected={selected === i}
                    className={`project-choice ${selected === i ? "selected" : ""}`}
                    onClick={() => changeProject(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                        e.preventDefault();
                        const n = (i + (e.key === "ArrowDown" ? 1 : 2)) % 3;
                        changeProject(n);
                        document.getElementById(`project-tab-${n}`).focus();
                      }
                    }}
                  >
                    <span className="project-number">0{i + 1}</span>
                    <span>
                      <strong>{p.title}</strong>
                      <span className="project-summary">{p.subtitle}</span>
                    </span>
                    <ArrowRight className="project-arrow" size={21} />
                  </button>
                ))}
              </div>
              <article
                className="project-panel"
                id="project-panel"
                role="tabpanel"
                aria-labelledby={`project-tab-${selected}`}
                tabIndex={0}
              >
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div
                  className="detail-tabs"
                  role="tablist"
                  aria-label="Case study sections"
                >
                  {["problem", "decisions", "system"].map((t) => (
                    <button
                      key={t}
                      role="tab"
                      id={`detail-${t}`}
                      aria-selected={tab === t}
                      aria-controls="case-content"
                      onClick={() => setTab(t)}
                    >
                      The {t}
                    </button>
                  ))}
                </div>
                <div
                  id="case-content"
                  role="tabpanel"
                  aria-labelledby={`detail-${tab}`}
                >
                  {tab === "problem" && (
                    <div className="reading-panel">
                      <span className="eyebrow">THE CHALLENGE</span>
                      <p>{project.problem}</p>
                      <span className="eyebrow">MY CONTRIBUTION</span>
                      <p>{project.contribution}</p>
                    </div>
                  )}
                  {tab === "decisions" && (
                    <div className="decisions">
                      {project.decisions.map(([title, text], i) => (
                        <div key={title}>
                          <span className="decision-number">0{i + 1}</span>
                          <section>
                            <h4>{title}</h4>
                            <p>{text}</p>
                          </section>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab === "system" && (
                    <>
                      <Flow project={selected} />
                      {selected === 0 ? (
                        <button
                          className="button trace-button"
                          onClick={() => {
                            setDemoOpen(!demoOpen);
                            setTrace(null);
                          }}
                          aria-expanded={demoOpen}
                        >
                          {demoOpen ? "Close demonstration" : "Trace an order"}{" "}
                          <ArrowRight size={21} />
                        </button>
                      ) : (
                        <div className="stack-line">
                          {project.stack.join("  /  ")}
                        </div>
                      )}
                    </>
                  )}
                  {tab === "system" && demoOpen && selected === 0 && (
                    <div className="demo">
                      <div className="demo-heading">
                        <div>
                          <span className="eyebrow">TRY THE WORKFLOW</span>
                          <h4>One order. Two possible paths.</h4>
                        </div>
                        <span className="sample-badge">SAMPLE DATA</span>
                      </div>
                      <p>
                        This runs a small rules-based demonstration on a
                        Cloudflare Worker. Choose a stock scenario to see how
                        the workflow changes.
                      </p>
                      <div className="demo-controls">
                        <label>
                          Supplier stock
                          <select
                            value={scenario}
                            onChange={(e) => {
                              setScenario(e.target.value);
                              setTrace(null);
                            }}
                            disabled={busy}
                          >
                            <option value="ready">
                              Available for fulfilment
                            </option>
                            <option value="unavailable">
                              Unavailable · review required
                            </option>
                          </select>
                        </label>
                        <button
                          className="button primary"
                          disabled={busy}
                          onClick={runTrace}
                        >
                          {busy ? "Tracing…" : "Run sample order"}
                          <ArrowRight size={19} />
                        </button>
                      </div>
                      <div role="status" aria-live="polite">
                        {error && <p className="error">{error}</p>}
                        {trace && (
                          <div className="trace-result">
                            <div className="trace-result-title">
                              <strong>{trace.outcome}</strong>
                              <span>{trace.orderId}</span>
                            </div>
                            <ol>
                              {trace.events.map((event, i) => (
                                <li key={event.code}>
                                  <span className={`event-mark ${event.state}`}>
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <div>
                                    <strong>{event.label}</strong>
                                    <p>{event.detail}</p>
                                  </div>
                                </li>
                              ))}
                            </ol>
                            <p className="trace-note">
                              Simulated result · No order created, message sent
                              or external system contacted.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </div>
          </section>
          <section
            id="career"
            className="career-section"
            aria-labelledby="career-label"
          >
            <div className="section-label">
              <h2 id="career-label">CAREER</h2>
              <span>SELECTED EXPERIENCE</span>
            </div>
            <div className="timeline" role="tablist" aria-label="Career roles">
              {career.map((r, i) => (
                <button
                  key={r.company}
                  role="tab"
                  aria-selected={careerIndex === i}
                  aria-controls="career-panel"
                  id={`career-${i}`}
                  onClick={() => setCareerIndex(i)}
                >
                  <span className="timeline-dot" />
                  <strong>{r.company}</strong>
                  <span>{r.period}</span>
                </button>
              ))}
            </div>
            <div
              id="career-panel"
              className="career-detail"
              role="tabpanel"
              aria-labelledby={`career-${careerIndex}`}
            >
              <div>
                <span className="eyebrow">{activeCareer.sector}</span>
                <h3>{activeCareer.title}</h3>
              </div>
              <p>{activeCareer.text}</p>
            </div>
            <details className="earlier">
              <summary>
                Earlier experience & education <span>+</span>
              </summary>
              <div className="earlier-content">
                <div>
                  <h4>Earlier roles</h4>
                  <p>
                    <strong>Orbital Software, UK</strong>
                    <br />
                    Technical Pre Sales Consultant · Feb–Dec 2001
                    <br />
                    Knowledge and document management software.
                  </p>
                  <p>
                    <strong>Master Maths, South Africa</strong>
                    <br />
                    IT Manager, Support & Deployment · 1998–2001
                    <br />
                    IT deployment and support across a network of educational
                    institutions.
                  </p>
                  <p>
                    <strong>RAiN Digital Marketing</strong>
                    <br />
                    Founder · 2018–2021
                    <br />
                    Websites, SEO and content services for South African SMEs.
                  </p>
                </div>
                <div>
                  <h4>Technical & business foundation</h4>
                  <p>
                    Oracle Certified Professional DBA · Oracle 8i & 9i · USA ·
                    2002
                  </p>
                  <p>Business Management Diploma · Helderberg College · 1997</p>
                  <p>
                    Delphi Programming Diploma, distinction · Helderberg College
                    · 2000
                  </p>
                  <p>Management Information Systems · INTEC College · 2000</p>
                </div>
              </div>
            </details>
          </section>
          <section
            className="capabilities"
            aria-labelledby="capabilities-heading"
          >
            <div>
              <span className="eyebrow">HOW I WORK</span>
              <h2 id="capabilities-heading">
                Commercial context.
                <br />
                Connected systems.
              </h2>
              <p>
                Comfortable in the customer conversation, the product decision
                and the technical detail.
              </p>
            </div>
            <div className="capability-list">
              <div>
                <h3>Discover & define</h3>
                <p>
                  Customer discovery, demonstrations, proposals, requirements,
                  prioritisation and stakeholder alignment.
                </p>
              </div>
              <div>
                <h3>Build & integrate</h3>
                <p>
                  Cloudflare and Google Cloud, web and native apps, commerce
                  platforms, APIs, payment integrations and automation.
                </p>
              </div>
              <div>
                <h3>Release & operate</h3>
                <p>
                  Acceptance criteria, release readiness, app-store delivery,
                  partner enablement and ongoing product operation.
                </p>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="contact"
            aria-labelledby="contact-heading"
          >
            <div>
              <span className="eyebrow">LET’S TALK</span>
              <h2 id="contact-heading">
                A useful conversation
                <br />
                starts with the problem<span className="orange">.</span>
              </h2>
              <p>
                Exploring product management, solutions consulting,
                implementation and business systems opportunities.
              </p>
              <div className="contact-links">
                <a href="mailto:jlfguthrie@gmail.com">
                  <EnvelopeSimple size={21} />
                  Email John
                  <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://wa.me/27834475588"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsappLogo size={21} />
                  WhatsApp
                  <ArrowUpRight size={17} />
                </a>
              </div>
              <p className="contact-note">
                Email or WhatsApp works best · South Africa · Open to
                international remote work & relocation
              </p>
            </div>
            <CvChoices />
          </section>
        </main>
        <footer>
          <span>
            John Guthrie <span className="footer-separator">/</span> Product &
            technical delivery
          </span>
          <div>
            <a
              href="https://www.linkedin.com/in/jlfguthrie/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo size={18} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com/jlfguthrie"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={18} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://g.dev/JohnGuthrie"
              target="_blank"
              rel="noreferrer"
            >
              Google Developer
              <ArrowUpRight size={14} />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
