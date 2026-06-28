import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';
import BlogHeader from '../../components/BlogHeader';
import { ArrowIcon } from '../../components/icons';

export default function BlogIndex() {
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
        <BlogHeader />

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
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ display: 'block' }}>
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
                  {post.series ? `${post.date} · ${post.series.length} dispatches` : `${post.date} · ${post.readTime}`}
                </p>

                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 16px' }}>
                  {post.excerpt}
                </p>

                <span className="blog-expand-btn">
                  {post.series ? 'Read the thread' : 'Read more'} <ArrowIcon size={14} />
                </span>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
