import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────
// Edit this array to add, remove, or update blog posts.

const blogPosts = [
  {
    slug: 'agentic-ai-supply-chain',
    title: 'What I Learned Building Agentic AI for Supply Chain',
    date: 'March 1, 2026',
    readTime: '6 min read',
    tags: ['Agentic AI', 'LangGraph', 'Production'],
    excerpt: 'Notes from shipping multimodal agents that diagnose hardware issues in production — what worked, what broke, and what I would not do again.',
    content: [
      "Over the last year, my team at Dell has been building agentic systems that sit in the loop of real supply chain decisions — not demos, but workflows that technicians and planners depend on every day. The gap between a slick LangGraph notebook and something that survives contact with production traffic is much wider than I expected.",
      "The biggest lesson: agents fail loudly when you let them, and silently when you don't watch for it. Early versions of our hardware repair assistant would confidently hand back wrong part numbers because nothing in the loop forced it to check its own output against a source of truth. Adding a verification step — even a simple one — caught more issues than any amount of prompt tuning.",
      "The second lesson is about scope. The most reliable agents we shipped were the most boring ones: narrow tools, explicit state machines, and a human checkpoint before anything irreversible happened. The flashy fully-autonomous loop demos rarely survived their first messy real-world input.",
      "If I were starting over, I would invest in evaluation infrastructure before the agent itself. We built the eval harness halfway through and immediately found regressions we had shipped weeks earlier without knowing.",
    ],
  },
  {
    slug: 'rag-production-lessons',
    title: 'RAG in Production: Lessons from Real Deployments',
    date: 'January 12, 2026',
    readTime: '5 min read',
    tags: ['RAG', 'LLMs', 'Evaluation'],
    excerpt: 'Retrieval-augmented generation looks simple in a blog post and gets complicated fast once real documents, real users, and real edge cases show up.',
    content: [
      "Most RAG tutorials show you a clean PDF, a vector store, and a handful of well-formed questions. Production documents are none of that — they're inconsistent, half-structured, and the questions users actually ask rarely match the phrasing in the source text.",
      "The single highest-leverage change we made was investing in chunking strategy over swapping embedding models. A better-structured chunk with the right amount of surrounding context consistently beat a fancier embedding model on a worse chunk.",
      "Second, retrieval evaluation needs to be separated from generation evaluation. We wasted weeks debugging ‘bad answers’ that were actually a retrieval problem wearing a generation costume. Once we scored retrieval and generation independently, the fixes became obvious.",
      "Finally: hybrid search (keyword + vector) outperformed pure vector search on our structured business data more often than I expected going in. Don't skip the boring baseline.",
    ],
  },
  {
    slug: 'chemical-engineering-to-ml',
    title: 'From Chemical Engineering to Machine Learning',
    date: 'November 4, 2025',
    readTime: '4 min read',
    tags: ['Career', 'Personal'],
    excerpt: 'A non-linear path through IIT Madras, product management at ICICI Bank, and a PhD track at UT Austin before landing in ML — and what carried over from each stop.',
    content: [
      "I didn't set out to become a machine learning engineer. I studied Chemical Engineering at IIT Madras, spent time in product management at ICICI Bank, and started down a PhD track at UT Austin before realizing the part of research I loved most was the modeling, not the domain.",
      "Chemical engineering taught me to think in systems and feedback loops — skills that transfer surprisingly well to building ML pipelines that have to behave reliably under shifting inputs. Product management taught me to ask ‘who is this for and what happens if it's wrong’ before writing a line of code.",
      "The pivot wasn't a straight line, and I think that's fine. Most of the people I respect most in this field came in sideways from something else.",
    ],
  },
];

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

const ChevronIcon = ({ size = 14, open }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BackArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Blog() {
  const [expanded, setExpanded] = useState(new Set());

  const toggle = (slug) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug); else next.add(slug);
      return next;
    });
  };

  return (
    <>
      <Head>
        <title>Blog — Akhilesh Paspureddi</title>
        <meta name="description" content="Writing on AI/ML, agentic systems, and engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: '100vh', background: '#fafaf7' }}>
        {/* Header */}
        <header style={{
          position: 'sticky', top: 0, zIndex: 50,
          padding: '16px 24px', background: 'rgba(250,250,247,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          maxWidth: 1280, margin: '0 auto',
        }}>
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: '#6b7280', fontSize: 13, fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            transition: 'color 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#b84500'}
            onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
          >
            <BackArrowIcon size={15} />
            Back to home
          </Link>

          <div style={{ display: 'flex', gap: 4 }}>
            <a href="https://github.com/ap48579" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-paspureddi/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </header>

        {/* Content */}
        <main style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 100px' }}>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#d4622a', marginBottom: 12, marginTop: 0,
          }}>
            Writing
          </p>
          <h1 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 400,
            color: '#1c1c1a', margin: '0 0 16px', lineHeight: 1.15,
          }}>
            Thoughts on AI, ML, and building things that work
          </h1>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.7, margin: '0 0 48px' }}>
            Notes from building agentic systems, RAG pipelines, and forecasting models in production.
          </p>

          {/* Post list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {blogPosts.map(post => {
              const isOpen = expanded.has(post.slug);
              return (
                <article key={post.slug} className="blog-card">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 10 }}>
                    {post.tags.map(tag => (
                      <span key={tag} className="skill-pill" style={{ fontSize: 11.5 }}>{tag}</span>
                    ))}
                  </div>

                  <h2 style={{
                    fontSize: 20, fontWeight: 600, color: '#1c1c1a',
                    margin: '0 0 8px', lineHeight: 1.3,
                  }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: 12.5, color: '#9ca3af', margin: '0 0 14px', letterSpacing: '0.02em' }}>
                    {post.date} · {post.readTime}
                  </p>

                  <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>
                    {post.excerpt}
                  </p>

                  {isOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 16 }}>
                      {post.content.map((para, i) => (
                        <p key={i} style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  <button onClick={() => toggle(post.slug)} className="blog-expand-btn">
                    {isOpen ? 'Show less' : 'Read more'}
                    <ChevronIcon size={14} open={isOpen} />
                  </button>
                </article>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
