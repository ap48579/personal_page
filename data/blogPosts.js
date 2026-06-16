// Edit this array to add, remove, or update blog posts.

export const blogPosts = [
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
