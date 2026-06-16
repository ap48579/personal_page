import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const experiences = [
  {
    title: 'Principal Data Scientist',
    org: 'Dell Technologies',
    period: '2025 – Present',
    bullets: [
      'Building Agentic AI solutions for supply chain\'s end-to-end automation - PO automation, Fraud detection, Network optimization',
      'Building multimodal AI agents to assist with hardware repair',
    ],
  },
  {
    title: 'Senior Data Scientist',
    org: 'Dell Technologies',
    period: '2023 – Present',
    bullets: [
      'Developed a generative BI chatbot for structured data (SQL, CSV, Excel)',
      'Built supply chain forecasting models for demand planning and inventory management',
    ],
  },
  {
    title: 'Data Science Intern / Co-op',
    org: 'Dell Technologies',
    period: '2022 – 2023',
    bullets: [
      'Built an XGBoost model to forecast DFS parts return rates',
      'Developed a geospatial tool to map customer addresses to nearest service locations',
    ],
  },
  {
    title: 'Product Manager',
    org: 'ICICI Bank',
    period: '2017 – 2018',
    bullets: [
      'Co-owned strategy, roadmap, and UX for payment modules in the ICICI mobile banking app',
    ],
  }
];

const projects = [
  {
    title: 'Autonomous Self-Healing Assistant',
    stack: ['LangGraph', 'CodeLlama', 'Ollama', 'Streamlit'],
    description: 'Agent that auto-heals, researches, and solves problems autonomously.',
    github: null,
  },
  {
    title: 'Nutrition Content from Food Labels',
    stack: ['Multimodal LLM', 'Computer Vision'],
    description: 'Multimodal agent to interact with and extract nutrition data from food labels.',
    github: null,
  },
];

const skillGroups = [
  {
    label: 'AI / ML',
    icon: 'brain',
    items: ['LLMs & Gen AI', 'RAG', 'Prompt Engineering', 'Computer Vision', 'NLP', 'Time Series', 'Model Evaluation'],
  },
  {
    label: 'MLOps & Infra',
    icon: 'gear',
    items: ['Azure ML', 'Databricks', 'MLflow', 'Docker', 'Kubernetes', 'Azure Data Lake', 'CI/CD'],
  },
  {
    label: 'Languages & Frameworks',
    icon: 'code',
    items: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'FastAPI', 'SQL'],
  },
];

// ─── Typewriter hook ──────────────────────────────────────────────────────────

function useTypewriter(words, delaySpeed = 2000) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, delaySpeed);
      return () => clearTimeout(t);
    }

    const word = words[wordIdx % words.length];

    if (!deleting && charIdx < word.length) {
      const t = setTimeout(() => {
        setText(word.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 90);
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx === word.length) {
      setPaused(true);
      return;
    }

    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setText(word.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 45);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
  }, [charIdx, deleting, paused, wordIdx, words, delaySpeed]);

  return text;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const HomeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

// ─── Background Circles ───────────────────────────────────────────────────────

function BackgroundCircles() {
  return (
    <div style={{
      position: 'absolute', display: 'flex',
      justifyContent: 'center', alignItems: 'center',
      pointerEvents: 'none', zIndex: 0,
    }}>
      {[200, 300, 500, 650, 800].map((size, i) => (
        <div key={size} style={{
          position: 'absolute',
          width: size, height: size,
          borderRadius: '50%',
          border: `1px solid ${i === 3 ? 'rgba(184,69,0,0.15)' : 'rgba(34,38,45,0.15)'}`,
          animation: i === 3
            ? 'pulse 3s ease-in-out infinite'
            : `ping ${1.4 + i * 0.3}s cubic-bezier(0,0,0.2,1) ${i * 0.4}s infinite`,
        }} />
      ))}
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      padding: '16px 24px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      maxWidth: 1280, margin: '0 auto',
    }}>
      {/* Social icons — slide in from left */}
      <div className="anim-left" style={{ display: 'flex', gap: 4 }}>
        <a href="https://github.com/ap48579" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/akhilesh-paspureddi/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>

      {/* Get in Touch — slide in from right */}
      <a href="#contact" className="anim-right" style={{
        display: 'flex', alignItems: 'center', gap: 6,
        color: '#6b7280', fontSize: 13, fontWeight: 500,
        textTransform: 'uppercase', letterSpacing: '0.08em',
        transition: 'color 0.15s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#b84500'}
        onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
      >
        <MailIcon size={18} />
        <span style={{ display: 'none' }} className="md-show">Get in Touch</span>
      </a>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const typed = useTypewriter([
    "Hi, I'm Akhilesh 👋",
    "I turn ideas into product",
    "Let's build something great",
  ]);

  return (
    <section id="hero" className="snap-start" style={{
      height: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', overflow: 'hidden',
      gap: 24,
    }}>
      <BackgroundCircles />

      {/* Profile photo */}
      <div className="anim-scale" style={{
        width: 128, height: 128, borderRadius: '50%',
        overflow: 'hidden', position: 'relative', zIndex: 10,
        border: '3px solid rgba(212,98,42,0.4)',
        boxShadow: '0 0 0 6px rgba(184,69,0,0.08)',
      }}>
        <img src="/profile_pic.png" alt="Akhilesh Paspureddi"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Text */}
      <div className="anim-up" style={{ zIndex: 10, padding: '0 24px' }}>
        <p style={{
          fontSize: 13, fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: '#6b7280', marginBottom: 12,
        }}>
          AI Engineer
        </p>
        <h1 style={{
          fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 600,
          color: '#000', margin: '0 0 24px', lineHeight: 1.2,
          minHeight: '1.4em',
        }}>
          <span>{typed}</span>
          <span style={{
            display: 'inline-block', width: 2, height: '0.8em',
            background: '#d4622a', marginLeft: 4, verticalAlign: 'middle',
            animation: 'blink 1.1s step-end infinite',
          }} />
        </h1>

        {/* Nav buttons */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(label => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              <button className="hero-btn">{label}</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Agentic Illustration ─────────────────────────────────────────────────────

function AgenticIllustration() {
  return (
    <svg viewBox="0 0 440 360" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 420, height: 'auto' }}>

      {/* ── Connector lines (behind everything) ── */}
      {/* Research → laptop left */}
      <path d="M130,112 L92,112 L92,88" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="4 3" />
      {/* Analyze → laptop right */}
      <path d="M310,112 L352,112 L352,88" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="4 3" />
      {/* Code → laptop left */}
      <path d="M130,155 L60,155" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="4 3" />
      {/* Deploy → laptop right */}
      <path d="M310,155 L376,155" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="4 3" />
      {/* Orchestrate → laptop bottom */}
      <path d="M220,202 L220,268" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="4 3" />

      {/* ── Laptop ── */}
      {/* Screen bezel */}
      <rect x="130" y="55" width="180" height="130" rx="10"
        fill="white" stroke="#b84500" strokeWidth="1.5" strokeOpacity="0.45" />
      {/* Screen glass */}
      <rect x="139" y="64" width="162" height="112" rx="5" fill="rgba(184,69,0,0.035)" />
      {/* Camera dot */}
      <circle cx="220" cy="68" r="2.5" fill="rgba(184,69,0,0.22)" />
      {/* Keyboard chassis */}
      <path d="M108,188 L332,188 L342,202 L98,202 Z"
        fill="rgba(184,69,0,0.05)" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.28" />
      {/* Trackpad */}
      <rect x="192" y="191" width="56" height="7" rx="3.5" fill="rgba(184,69,0,0.08)" />

      {/* ── Robot on screen ── */}
      {/* Antenna */}
      <line x1="220" y1="86" x2="220" y2="76" stroke="#b84500" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
      <circle cx="220" cy="73" r="3" fill="#b84500" fillOpacity="0.5" />
      {/* Head */}
      <rect x="208" y="87" width="24" height="20" rx="5"
        fill="rgba(184,69,0,0.09)" stroke="#b84500" strokeWidth="1.4" strokeOpacity="0.6" />
      {/* Eyes */}
      <circle cx="215" cy="95" r="2.8" fill="#b84500" fillOpacity="0.42" />
      <circle cx="225" cy="95" r="2.8" fill="#b84500" fillOpacity="0.42" />
      {/* Mouth */}
      <path d="M214 103 Q220 108 226 103" stroke="#b84500" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
      {/* Body */}
      <rect x="211" y="110" width="18" height="15" rx="4"
        fill="rgba(184,69,0,0.09)" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.5" />
      {/* Arms */}
      <line x1="211" y1="115" x2="204" y2="122" stroke="#b84500" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.42" />
      <line x1="229" y1="115" x2="236" y2="122" stroke="#b84500" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.42" />
      {/* Label on screen */}
      <text x="220" y="145" textAnchor="middle"
        fontSize="11" fontWeight="600" fill="#b84500" fillOpacity="0.6"
        fontFamily="DM Sans, system-ui, sans-serif" letterSpacing="0.06em">
        Ai Agent
      </text>

      {/* ── Floating capability cards ── */}

      {/* Research — top left */}
      <g transform="translate(38, 38)">
        <rect width="58" height="58" rx="11" fill="white" stroke="#b84500" strokeWidth="1.5" strokeOpacity="0.36" />
        <circle cx="25" cy="22" r="9" stroke="#b84500" strokeWidth="1.4" strokeOpacity="0.6" />
        <line x1="31" y1="29" x2="40" y2="38" stroke="#b84500" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.6" />
        <text x="29" y="53" textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="DM Sans, system-ui, sans-serif">Research</text>
      </g>

      {/* Analyze — top right */}
      <g transform="translate(318, 38)">
        <rect width="58" height="58" rx="11" fill="white" stroke="#b84500" strokeWidth="1.5" strokeOpacity="0.36" />
        <rect x="10" y="30" width="8" height="10" fill="#b84500" fillOpacity="0.36" rx="1.5" />
        <rect x="22" y="20" width="8" height="20" fill="#b84500" fillOpacity="0.36" rx="1.5" />
        <rect x="34" y="24" width="8" height="16" fill="#b84500" fillOpacity="0.36" rx="1.5" />
        <text x="29" y="53" textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="DM Sans, system-ui, sans-serif">Analyze</text>
      </g>

      {/* Code — left */}
      <g transform="translate(4, 128)">
        <rect width="58" height="58" rx="11" fill="white" stroke="#b84500" strokeWidth="1.5" strokeOpacity="0.36" />
        <path d="M19 22 L12 28 L19 34" stroke="#b84500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
        <path d="M39 22 L46 28 L39 34" stroke="#b84500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
        <line x1="25" y1="36" x2="33" y2="20" stroke="#b84500" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        <text x="29" y="53" textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="DM Sans, system-ui, sans-serif">Code</text>
      </g>

      {/* Deploy — right */}
      <g transform="translate(376, 128)">
        <rect width="58" height="58" rx="11" fill="white" stroke="#b84500" strokeWidth="1.5" strokeOpacity="0.36" />
        <path d="M29 14 L22 34 L29 29 L36 34 Z" fill="#b84500" fillOpacity="0.28" stroke="#b84500" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="29" cy="22" r="3.5" fill="#b84500" fillOpacity="0.48" />
        <line x1="22" y1="33" x2="19" y2="40" stroke="#b84500" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
        <line x1="36" y1="33" x2="39" y2="40" stroke="#b84500" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
        <text x="29" y="53" textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="DM Sans, system-ui, sans-serif">Deploy</text>
      </g>

      {/* Orchestrate — bottom center */}
      <g transform="translate(192, 268)">
        <rect width="58" height="58" rx="11" fill="white" stroke="#b84500" strokeWidth="1.5" strokeOpacity="0.36" />
        {/* DAG nodes */}
        <circle cx="13" cy="22" r="5" stroke="#b84500" strokeWidth="1.3" strokeOpacity="0.55" />
        <circle cx="29" cy="13" r="5" stroke="#b84500" strokeWidth="1.3" strokeOpacity="0.55" />
        <circle cx="45" cy="22" r="5" stroke="#b84500" strokeWidth="1.3" strokeOpacity="0.55" />
        <circle cx="29" cy="33" r="5" stroke="#b84500" strokeWidth="1.3" strokeOpacity="0.55" />
        <line x1="18" y1="19" x2="24" y2="16" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="34" y1="16" x2="40" y2="19" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="16" y1="26" x2="24" y2="30" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.45" />
        <line x1="34" y1="30" x2="42" y2="26" stroke="#b84500" strokeWidth="1.2" strokeOpacity="0.45" />
        <text x="29" y="53" textAnchor="middle" fontSize="9" fill="#9ca3af" fontFamily="DM Sans, system-ui, sans-serif">Orchestrate</text>
      </g>

      {/* ── Accent dots ── */}
      <circle cx="108" cy="52" r="3" fill="#b84500" fillOpacity="0.12" />
      <circle cx="330" cy="52" r="3" fill="#b84500" fillOpacity="0.12" />
      <circle cx="104" cy="230" r="2.5" fill="#b84500" fillOpacity="0.1" />
      <circle cx="336" cy="230" r="2.5" fill="#b84500" fillOpacity="0.1" />
      <circle cx="220" cy="235" r="2" fill="#b84500" fillOpacity="0.1" />
    </svg>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="snap-center" style={{
      height: '100vh', position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '80px 48px 40px', overflow: 'hidden',
    }}>
      <span className="section-label">About</span>

      <div style={{
        maxWidth: 1000, width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 64, alignItems: 'center',
      }}
        className="about-grid"
      >
        {/* Text */}
        <div>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#d4622a', marginBottom: 16, marginTop: 0,
          }}>
            A bit about me
          </p>
          <h2 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 400,
            color: '#000', margin: '0 0 24px', lineHeight: 1.15, letterSpacing: '-0.01em',
          }}>
            Building systems that<br />think and adapt
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              I&rsquo;m a AI Engineer who went from Chemical Engineering at{' '}
              <strong style={{ color: '#b84500' }}>IIT Madras</strong> to Product Management at{' '}
              <strong style={{ color: '#b84500' }}>ICICI Bank</strong>, then research at{' '}
              <strong style={{ color: '#b84500' }}>UT Austin</strong> before finding where I
              thrive most — building intelligent systems at scale.
            </p>
            <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              At <strong style={{ color: '#b84500' }}>Dell Technologies</strong> I work on
              multimodal AI agents, generative BI tools, and forecasting pipelines that power
              real supply chain decisions. I care deeply about shipping AI that actually works
              in production.
            </p>
          </div>

          <div style={{ marginTop: 32, display: 'flex', gap: 32 }}>
            {[
              { value: '6+', label: 'Years in ML/AI' },
              { value: '3', label: 'Companies' },
              { value: 'IIT and UT', label: ' Alum' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p style={{ fontSize: 28, fontWeight: 700, color: '#b84500', margin: '0 0 2px' }}>{value}</p>
                <p style={{ fontSize: 12, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Agentic illustration */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AgenticIllustration />
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function ExperienceSection() {
  return (
    <section id="experience" className="snap-center" style={{
      height: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      <span className="section-label">Experience</span>

      <div className="cards-track" style={{ width: '100%', paddingTop: 20, paddingBottom: 20 }}>
        {experiences.map((exp, i) => (
          <article key={i} className="exp-card">
            {/* Header */}
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 400, color: '#000', margin: '0 0 4px' }}>
                {exp.title}
              </h3>
              <p style={{ fontSize: 16, fontWeight: 700, color: '#d4622a', margin: '0 0 4px' }}>
                {exp.org}
              </p>
              <p style={{ fontSize: 12, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 16px' }}>
                {exp.period}
              </p>
            </div>

            {/* Bullets */}
            {exp.bullets.length > 0 && (
              <ul style={{ paddingLeft: 16, margin: 0, color: '#374151', fontSize: 14, lineHeight: 1.65 }}>
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}

            {exp.bullets.length === 0 && (
              <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>Undergraduate degree</p>
            )}
          </article>
        ))}
      </div>

      {/* Scroll hint */}
      <p style={{ position: 'absolute', bottom: 40, fontSize: 12, color: '#9ca3af', letterSpacing: '0.05em' }}>
        scroll cards →
      </p>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function ProjectsSection() {
  return (
    <section id="projects" className="snap-start" style={{
      height: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    }}>
      <span className="section-label">Projects</span>

      {/* Diagonal teal band — Mitchell's signature */}
      <div style={{
        position: 'absolute', top: '20%', left: 0, right: 0,
        height: 480, background: 'rgba(184,69,0,0.06)',
        transform: 'skewY(-6deg)', pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="projects-track" style={{ position: 'relative', zIndex: 1 }}>
        {projects.map((p, i) => (
          <div key={i} className="project-slide">
            {/* Large project number */}
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(184,69,0,0.12) 0%, rgba(212,98,42,0.2) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36, fontWeight: 700, color: '#b84500',
            }}>
              0{i + 1}
            </div>

            {/* Content */}
            <div style={{ maxWidth: 600, textAlign: 'center' }}>
              <h3 style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 600, margin: '0 0 16px' }}>
                <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(184,69,0,0.5)', textDecorationThickness: 2 }}>
                  Project {i + 1}:
                </span>{' '}
                {p.title}
              </h3>

              {/* Stack */}
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
                {p.stack.map(s => (
                  <span key={s} style={{
                    fontSize: 12, padding: '4px 12px', borderRadius: 100,
                    background: 'rgba(184,69,0,0.1)', color: '#b84500', fontWeight: 500,
                  }}>{s}</span>
                ))}
              </div>

              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 24px' }}>
                {p.description}
              </p>

              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 20px', borderRadius: 6,
                  background: '#b84500', color: 'white',
                  fontSize: 14, fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#8b3300'}
                  onMouseLeave={e => e.currentTarget.style.background = '#b84500'}
                >
                  <GitHubIcon size={15} /> View Code <ArrowIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <p style={{ position: 'absolute', bottom: 40, fontSize: 12, color: '#9ca3af', letterSpacing: '0.05em', zIndex: 1 }}>
        scroll projects →
      </p>
    </section>
  );
}

// ─── Skill group icons ────────────────────────────────────────────────────────

const SkillIcon = ({ type, size = 22 }) => {
  if (type === 'brain') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#b84500" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2a2.5 2.5 0 0 1 5 0v.5" />
      <path d="M9 2.5C6.5 2.5 4 4.5 4 7.5c0 1.5.5 2.5 1 3.5-.5.5-1 1.5-1 2.5 0 2 1.5 3.5 3.5 3.5" />
      <path d="M15 2.5C17.5 2.5 20 4.5 20 7.5c0 1.5-.5 2.5-1 3.5.5.5 1 1.5 1 2.5 0 2-1.5 3.5-3.5 3.5" />
      <path d="M12 17v5" />
      <path d="M9 17h6" />
      <path d="M8 10.5a4 4 0 0 0 8 0" />
    </svg>
  );
  if (type === 'gear') return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#b84500" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#b84500" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
};

// ─── Skills ────────────────────────────────────────────────────────────────────

function SkillsSection() {
  return (
    <section id="skills" className="snap-start" style={{
      height: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 32px',
    }}>
      <span className="section-label">Skills</span>

      <div className="skills-groups">
        {skillGroups.map(group => (
          <div key={group.label} className="skill-group-card">
            {/* Card header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'rgba(184,69,0,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <SkillIcon type={group.icon} size={20} />
              </div>
              <h3 style={{
                fontSize: 14, fontWeight: 600, color: '#1c1c1a',
                margin: 0, letterSpacing: '-0.01em',
              }}>
                {group.label}
              </h3>
            </div>

            {/* Skill pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {group.items.map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="snap-start" style={{
      height: '100vh', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '0 32px',
    }}>
      <span className="section-label">Contact</span>

      <div style={{ maxWidth: 480 }}>
        <p style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#d4622a', marginBottom: 12,
        }}>
          Let&rsquo;s talk
        </p>
        <h2 style={{
          fontFamily: '"DM Serif Display", Georgia, serif',
          fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400,
          color: '#000', margin: '0 0 20px', lineHeight: 1.1,
        }}>
          Get in Touch
        </h2>
        <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, margin: '0 0 40px' }}>
          Open to interesting problems in AI/ML, collaboration opportunities, or
          just a good conversation.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <a href="mailto:p.akhilesh.ch13b093@gmail.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 6,
            background: '#b84500', color: 'white',
            fontSize: 15, fontWeight: 500, transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#8b3300'}
            onMouseLeave={e => e.currentTarget.style.background = '#b84500'}
          >
            <MailIcon size={17} /> p.akhilesh.ch13b093@gmail.com
          </a>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="https://github.com/ap48579" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 18px', borderRadius: 6,
              border: '1px solid rgba(184,69,0,0.3)', color: '#b84500',
              fontSize: 14, fontWeight: 500, background: 'transparent',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b84500'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#b84500'; }}
            >
              <GitHubIcon size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-paspureddi/" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '10px 18px', borderRadius: 6,
              border: '1px solid rgba(184,69,0,0.3)', color: '#b84500',
              fontSize: 14, fontWeight: 500, background: 'transparent',
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b84500'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#b84500'; }}
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Head>
        <title>Akhilesh Paspureddi — ML Engineer</title>
        <meta name="description" content="Machine Learning Engineer building AI/ML and Gen AI systems at Dell Technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap" rel="stylesheet" />
      </Head>

      {/* Snap scroll container */}
      <div className="snap-container">
        <Header />

        <Hero />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        {/* Floating home button */}
        <div className="float-home">
          <a href="#hero" title="Back to top">
            <HomeIcon size={18} />
          </a>
        </div>
      </div>
    </>
  );
}
