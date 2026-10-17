import { type ReactNode, useState } from 'react';
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Cpu,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const links = {
  email: 'mailto:prarthana6710@gmail.com',
  phone: 'tel:+916364608307',
  linkedin: 'https://linkedin.com/in/prarthana-u-560833380',
  github: 'https://github.com/prarthana2031',
  leetcode: 'https://leetcode.com/u/prarthana127',
};

const skills = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'C', 'Bash'],
  },
  {
    label: 'ML systems',
    items: ['PyTorch / LoRA', 'LightGBM', 'Polars', 'Ranking / calibration'],
  },
  {
    label: 'Infrastructure & testing',
    items: ['pytest', 'Docker', 'GitHub Actions', 'AWS EC2 / S3'],
  },
  {
    label: 'Backend & browser',
    items: ['FastAPI', 'Playwright', 'PostgreSQL', 'SQLite'],
  },
];

function ExternalLink({ href, children, className = '' }: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function EvaluationSketch() {
  return (
    <div className="diagram-card" aria-label="Evaluation infrastructure concept diagram">
      <div className="diagram-top">
        <span className="eyebrow">SYSTEMS NOTE / 01</span>
        <span className="diagram-live"><span /> EVALUATION LOOP</span>
      </div>
      <svg className="eval-svg" viewBox="0 0 500 420" fill="none" role="img" aria-labelledby="diagram-title diagram-desc">
        <title id="diagram-title">A repeatable evaluation loop</title>
        <desc id="diagram-desc">Task specification flows through an agent run and a trusted oracle, then returns as a regression signal.</desc>
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" stroke="#31564D" strokeOpacity=".12" strokeWidth="1" />
          </pattern>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M1 1L6 4L1 7" stroke="#B86E50" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>
        <rect width="500" height="420" fill="url(#grid)" />
        <circle cx="254" cy="207" r="149" stroke="#31564D" strokeOpacity=".18" strokeDasharray="2 8" />
        <circle cx="254" cy="207" r="111" stroke="#31564D" strokeOpacity=".2" />
        <circle cx="254" cy="207" r="73" stroke="#B86E50" strokeOpacity=".34" strokeDasharray="4 6" />
        <path className="signal-dash" d="M254 58C336 58 403 124 403 207C403 290 337 356 254 356C171 356 105 290 105 207C105 124 171 58 254 58Z" stroke="#B86E50" strokeWidth="1.5" strokeDasharray="5 9" markerEnd="url(#arrow)" />
        <path d="M254 58V107M403 207H354M254 356V307M105 207H154" stroke="#31564D" strokeOpacity=".35" />
        <circle cx="254" cy="58" r="5" fill="#B86E50" />
        <circle cx="403" cy="207" r="5" fill="#31564D" />
        <circle cx="254" cy="356" r="5" fill="#B86E50" />
        <circle cx="105" cy="207" r="5" fill="#31564D" />
        <rect x="196" y="139" width="116" height="116" rx="58" fill="#31564D" />
        <circle className="orbit" cx="254" cy="197" r="45" stroke="#F4F0E7" strokeOpacity=".24" strokeDasharray="1 7" />
        <circle cx="254" cy="197" r="29" stroke="#D7B486" strokeOpacity=".75" />
        <path d="M241 198H267M254 185V211" stroke="#EDE5D5" strokeOpacity=".88" strokeWidth="1.2" />
        <circle cx="254" cy="198" r="4" fill="#D7B486" />
        <text x="254" y="232" fill="#F4F0E7" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="1.2" textAnchor="middle">AGENT RUN</text>
        <text x="254" y="34" fill="#263A35" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="1.2" textAnchor="middle">01 / SPECIFY</text>
        <text x="446" y="204" fill="#263A35" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="1.2">02 / RUN</text>
        <text x="254" y="389" fill="#263A35" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="1.2" textAnchor="middle">03 / VERIFY</text>
        <text x="27" y="204" fill="#263A35" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing="1.2">04 / LEARN</text>
        <g className="float-soft">
          <rect x="29" y="72" width="113" height="43" rx="2" fill="#F7F3EA" stroke="#31564D" strokeOpacity=".25" />
          <text x="42" y="90" fill="#68736B" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="1">TRUSTED</text>
          <text x="42" y="104" fill="#263A35" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing=".7">ORACLES</text>
        </g>
        <g>
          <rect x="355" y="306" width="111" height="43" rx="2" fill="#F7F3EA" stroke="#B86E50" strokeOpacity=".4" />
          <text x="368" y="324" fill="#68736B" fontFamily="DM Mono, monospace" fontSize="8" letterSpacing="1">REGRESSION</text>
          <text x="368" y="338" fill="#263A35" fontFamily="DM Mono, monospace" fontSize="9" letterSpacing=".7">SIGNAL</text>
        </g>
      </svg>
      <div className="diagram-caption">
        <span>Make behavior measurable.</span>
        <span className="eyebrow">REPEAT → TRUST</span>
      </div>
    </div>
  );
}

function App() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('prarthana6710@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = links.email;
    }
  };

  return (
    <div className="portfolio-shell min-h-screen">
      <header className="site-header">
        <div className="page-wrap nav-wrap">
          <a className="wordmark" href="#top" aria-label="Prarthana U, back to top" data-testid="link-home">
            <span className="wordmark-mark">P<span>.</span></span>
            <span className="wordmark-name">PRARTHANA U</span>
          </a>
          <nav aria-label="Main navigation" className="main-nav">
            <a className="nav-link" href="#work" data-testid="link-work">Work</a>
            <a className="nav-link" href="#approach" data-testid="link-approach">Approach</a>
            <a className="nav-link" href="#about" data-testid="link-about">About</a>
          </nav>
          <a href={links.email} className="nav-contact" data-testid="link-contact-nav">
            <span>Get in touch</span><ArrowUpRight size={14} strokeWidth={1.6} />
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="hero page-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow hero-kicker reveal">
              <span className="kicker-rule" /> COMPUTER SCIENCE · ML SYSTEMS
            </div>
            <h1 id="hero-title" className="hero-title display reveal reveal-delay-1">
              Build the<br />
              <em>proof</em> around<br />
              the model.
            </h1>
            <p className="hero-intro reveal reveal-delay-2">
              I’m Prarthana, a computer science student working at the intersection of agent evaluation infrastructure and machine learning systems.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button-primary" href="#work" data-testid="link-explore-work">
                Explore selected work <ArrowDownRight size={16} />
              </a>
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer" data-testid="link-resume">
                Resume <FileDown size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay-2">
            <div className="art-index eyebrow">FIELD NOTE&nbsp;&nbsp; / &nbsp;&nbsp;001</div>
            <EvaluationSketch />
            <div className="art-annotation">
              <span className="annotation-dot" />
              <span className="eyebrow">SYSTEMS THAT CAN EXPLAIN THEMSELVES</span>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#work" className="scroll-cue" aria-label="Scroll to selected work" data-testid="link-scroll-work">
              <span className="scroll-icon"><ArrowDown size={14} /></span>
              <span className="eyebrow">SCROLL TO EXPLORE</span>
            </a>
            <span className="hero-location eyebrow"><MapPin size={12} /> INDIA</span>
          </div>
        </section>

        <section className="signal-strip" aria-label="Portfolio highlights">
          <div className="page-wrap signal-inner">
            <div className="signal-item"><span className="signal-number">10<span>+</span></span><span className="signal-label">accepted &amp; merged PRs<br />at Handshake AI</span></div>
            <div className="signal-divider" />
            <div className="signal-item"><span className="signal-number">~20<span>M</span></span><span className="signal-label">records in an entity<br />resolution project</span></div>
            <div className="signal-divider" />
            <div className="signal-item"><span className="signal-number">2028</span><span className="signal-label">B.E. Computer Science<br />expected graduation</span></div>
            <div className="signal-note eyebrow">A PRACTICE BUILT<br />AROUND EVIDENCE</div>
          </div>
        </section>

        <section id="work" className="work-section page-wrap section-space" aria-labelledby="work-title">
          <div className="section-heading">
            <div className="section-index eyebrow"><span>01</span> / SELECTED WORK</div>
            <div>
              <h2 id="work-title" className="section-title display">Systems, under<br className="mobile-break" /> real conditions.</h2>
              <p className="section-deck">Projects shaped around a practical question: how do we know a system is doing what we asked?</p>
            </div>
          </div>

          <article className="project-feature project-entity" data-testid="project-entity-resolution">
            <div className="project-visual entity-visual">
              <div className="visual-meta eyebrow">PROJECT / ENTITY RESOLUTION</div>
              <div className="entity-network" aria-hidden="true">
                <div className="entity-ring ring-one" />
                <div className="entity-ring ring-two" />
                <div className="entity-ring ring-three" />
                <svg viewBox="0 0 520 320" className="entity-lines">
                  <path d="M75 178L153 90L236 150L337 75L430 137M75 178L170 243L260 180L354 247L430 137M153 90L170 243M236 150L337 75M236 150L260 180M337 75L354 247M430 137L354 247" />
                  <path d="M75 178L260 180L430 137" className="line-accent" />
                </svg>
                {[
                  ['a', '44', '127'], ['b', '153', '90'], ['c', '236', '150'], ['d', '337', '75'],
                  ['e', '430', '137'], ['f', '75', '178'], ['g', '170', '243'], ['h', '260', '180'],
                  ['i', '354', '247'],
                ].map(([id, x, y]) => (
                  <span key={id} className={`entity-node node-${id}`} style={{ left: `${(Number(x) / 520) * 100}%`, top: `${(Number(y) / 320) * 100}%` }} />
                ))}
                <span className="entity-tag tag-candidate eyebrow">CANDIDATE PAIRS</span>
                <span className="entity-tag tag-match eyebrow">MATCH SIGNAL</span>
              </div>
              <div className="visual-foot eyebrow"><span>BLOCK → SCORE → RESOLVE</span><span>01—04</span></div>
            </div>
            <div className="project-copy">
              <div className="project-topline eyebrow"><span>01 / PROJECT</span><span className="project-status"><i /> CHALLENGE PROJECT</span></div>
              <h3 className="project-title display">Entity resolution<br />at scale.</h3>
              <p className="project-summary">
                An Amazon ML Challenge project built to resolve entities across approximately 20 million records. Multi-view blocking targets at least 98% pair recall while keeping candidate sets to 25 or fewer per entity.
              </p>
              <div className="project-metrics">
                <div><strong>~20M</strong><span>records</span></div>
                <div><strong>≥98%</strong><span>pair recall target</span></div>
                <div><strong>≤25</strong><span>candidates / entity</span></div>
              </div>
              <div className="tag-list">
                {['Python', 'Polars', 'LightGBM', 'sentence-transformers', 'RapidFuzz', 'AWS'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>

          <article className="project-feature project-watchtower" data-testid="project-watchtower">
            <div className="project-copy">
              <div className="project-topline eyebrow"><span>02 / IN PROGRESS</span><span className="project-status status-building"><i /> CURRENTLY BUILDING</span></div>
              <h3 className="project-title display">Watchtower.</h3>
              <p className="project-summary">
                A browser automation and visual regression QA tool combining Playwright workflows, MCP, and pixel-level comparison.
              </p>
              <div className="tag-list">
                {['TypeScript', 'Playwright', 'Cheerio', 'SQLite', 'Pixelmatch', 'Node', 'MCP'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <ExternalLink href="https://github.com/prarthana2031/Watchtower" className="project-link" >
                View Watchtower on GitHub <ArrowUpRight size={15} />
              </ExternalLink>
            </div>
            <div className="project-visual watchtower-visual">
              <div className="visual-meta eyebrow">WATCHTOWER / VISUAL DIFF</div>
              <div className="watch-ui">
                <div className="watch-toolbar">
                  <span className="browser-dots"><i /><i /><i /></span>
                  <span className="browser-url">localhost / preview</span>
                  <span className="browser-run eyebrow">RUN 014</span>
                </div>
                <div className="watch-panels">
                  <div className="watch-pane">
                    <span className="pane-label eyebrow">BASELINE</span>
                    <div className="mock-page">
                      <span className="mock-heading" /><span className="mock-line long" /><span className="mock-line" />
                      <div className="mock-box"><span /><span /><span /></div><span className="mock-button" />
                    </div>
                  </div>
                  <div className="diff-seam"><span>DIFF</span></div>
                  <div className="watch-pane">
                    <span className="pane-label eyebrow">CURRENT</span>
                    <div className="mock-page page-current">
                      <span className="mock-heading" /><span className="mock-line long" /><span className="mock-line" />
                      <div className="mock-box"><span /><span /><span /></div><span className="mock-button changed" />
                    </div>
                  </div>
                </div>
                <div className="watch-footer eyebrow"><span><i /> COMPARISON READY</span><span>PIXELMATCH</span></div>
              </div>
              <div className="visual-foot eyebrow"><span>CAPTURE / COMPARE / INSPECT</span><span>02—04</span></div>
            </div>
          </article>

          <div className="project-pair">
            <article className="project-secondary" data-testid="project-trustlens">
              <div className="secondary-top">
                <span className="secondary-number eyebrow">03 / BACKEND</span>
                <span className="secondary-icon"><ShieldCheck size={19} strokeWidth={1.4} /></span>
              </div>
              <h3 className="secondary-title display">TrustLens</h3>
              <p>Resume screening backend built with a structured API and persistence layer.</p>
              <div className="tag-list compact">
                {['FastAPI', 'PostgreSQL', 'Supabase', 'Alembic', 'Pydantic'].map((item) => <span key={item}>{item}</span>)}
              </div>
              <ExternalLink href="https://github.com/Trustlens07/Trustlens" className="project-link">
                Explore the repository <ArrowUpRight size={15} />
              </ExternalLink>
            </article>
            <article className="project-secondary project-solution" data-testid="project-solution-challenge">
              <div className="secondary-top">
                <span className="secondary-number eyebrow">04 / PROTOTYPE</span>
                <span className="secondary-icon"><Workflow size={19} strokeWidth={1.4} /></span>
              </div>
              <h3 className="secondary-title display">Google Solution<br />Challenge</h3>
              <p>Built a working prototype addressing bias in AI responses.</p>
              <div className="solution-mark" aria-hidden="true">
                <span className="solution-line" /><span className="solution-node" /><span className="solution-line short" />
                <span className="solution-label eyebrow">RESPONSE → REVIEW</span>
              </div>
            </article>
          </div>
        </section>

        <section className="experience-section" aria-labelledby="experience-title">
          <div className="page-wrap experience-wrap">
            <div className="section-index eyebrow"><span>02</span> / IN PRACTICE</div>
            <div className="experience-layout">
              <div className="experience-lead">
                <h2 id="experience-title" className="section-title display">Infrastructure<br />is part of the<br /><em>answer.</em></h2>
                <p>At Handshake AI, I worked on the evaluation layer around coding agents: designing tasks, writing oracles, and making validation repeatable.</p>
                <div className="experience-organization eyebrow">HANDSHAKE AI <span>·</span> JUL–SEP 2026</div>
              </div>
              <div className="experience-detail">
                <div className="experience-role">
                  <div className="role-mark"><Cpu size={19} strokeWidth={1.5} /></div>
                  <div><span className="eyebrow">ROLE</span><h3>LLM Trainer, Agent Evaluation Infrastructure</h3></div>
                </div>
                <div className="experience-rule" />
                <ul className="experience-list">
                  <li><span className="list-marker">01</span><span>Designed multi-domain Harbor / Dynamo tasks for coding agents across LoRA fine-tuning, multi-object tracking, ETL / CDC, and CI reliability.</span></li>
                  <li><span className="list-marker">02</span><span>Wrote trusted pytest oracles with anti-bypass protections; delivered Docker and GitHub Actions validation.</span></li>
                  <li><span className="list-marker">03</span><span>Contributed 10+ accepted and merged PRs; repaired a multi-package Python CI / CD pipeline and built integration tests for distributed FastAPI-style services.</span></li>
                </ul>
                <div className="experience-tools eyebrow"><span>PYTEST</span><span>DOCKER</span><span>GITHUB ACTIONS</span><span>HARBOR / DYNAMO</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="approach-section page-wrap section-space" aria-labelledby="approach-title">
          <div className="section-heading approach-heading">
            <div className="section-index eyebrow"><span>03</span> / TECHNICAL RANGE</div>
            <div>
              <h2 id="approach-title" className="section-title display">A useful system<br />has to hold up.</h2>
              <p className="section-deck">From model-facing work to the infrastructure and tests that make behavior inspectable.</p>
            </div>
          </div>
          <div className="range-layout">
            <div className="range-note">
              <span className="range-symbol"><Database size={20} strokeWidth={1.4} /></span>
              <p>Built across evaluation, entity resolution, browser QA, and backend systems.</p>
              <span className="eyebrow range-caption">TOOLS IN PRACTICE</span>
            </div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <div className="skill-group" key={group.label}>
                  <div className="skill-heading"><span className="eyebrow">0{index + 1}</span><h3>{group.label}</h3></div>
                  <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="page-wrap about-wrap">
            <div className="section-index eyebrow"><span>04</span> / THE PERSON BEHIND THE SYSTEMS</div>
            <div className="about-content">
              <div>
                <h2 id="about-title" className="about-title display">Curious about<br />what holds up.</h2>
                <p className="about-copy">I’m studying computer science in Bengaluru and building toward a career in software and machine learning systems. The work I gravitate toward makes complex behavior easier to test, inspect, and improve.</p>
              </div>
              <div className="education-card">
                <span className="eyebrow">EDUCATION</span>
                <div className="education-icon"><span>DAIT</span><ArrowUpRight size={13} /></div>
                <h3>B.E. Computer Science</h3>
                <p>Dr. Ambedkar Institute of Technology</p>
                <div className="education-bottom"><span>BENGALURU, INDIA</span><span>EXPECTED 2028</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section page-wrap" aria-labelledby="contact-title">
          <div className="contact-topline eyebrow"><span>05 / OPEN CHANNEL</span><span>INDIA · SOFTWARE / ML SYSTEMS</span></div>
          <div className="contact-main">
            <div>
              <h2 id="contact-title" className="contact-title display">Let’s talk about<br /><em>systems.</em></h2>
              <p>For opportunities and thoughtful conversations around evaluation infrastructure and ML systems.</p>
            </div>
            <a className="contact-email" href={links.email} data-testid="link-email">
              <span className="eyebrow">WRITE TO ME</span>
              <span>prarthana6710<br className="email-break" />@gmail.com</span>
              <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="contact-links">
            <a href={links.email} data-testid="link-email-footer"><Mail size={15} /> Email</a>
            <a href={links.phone} data-testid="link-phone"><Phone size={15} /> +91 6364608307</a>
            <ExternalLink href={links.linkedin}><Linkedin size={15} /> LinkedIn</ExternalLink>
            <ExternalLink href={links.github}><Github size={15} /> GitHub</ExternalLink>
            <ExternalLink href={links.leetcode}><ArrowRight size={15} /> LeetCode</ExternalLink>
            <button type="button" className="copy-email" onClick={copyEmail} data-testid="button-copy-email" aria-label={copied ? 'Email copied' : 'Copy email address'}>
              {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-wrap footer-inner">
          <a className="footer-mark" href="#top" data-testid="link-back-top">P<span>.</span></a>
          <span className="footer-caption eyebrow">PRARTHANA U · A WORK IN PROGRESS, BY DESIGN</span>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="footer-resume" data-testid="link-footer-resume">Resume <ArrowUpRight size={13} /></a>
          <span className="footer-year eyebrow">INDIA</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
