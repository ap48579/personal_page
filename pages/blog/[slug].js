import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';
import BlogHeader from '../../components/BlogHeader';
import ThreadPost from '../../components/ThreadPost';
import { BackArrowIcon } from '../../components/icons';

export function getStaticPaths() {
  return {
    paths: blogPosts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} — Akhilesh Paspureddi</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ minHeight: '100vh', background: '#fafaf7' }}>
        <BlogHeader />

        <main style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px 100px' }}>
          <Link href="/blog" className="blog-expand-btn" style={{ marginBottom: 32, display: 'inline-flex' }}>
            <BackArrowIcon size={14} /> All posts
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', margin: '24px 0 16px' }}>
            {post.tags.map(tag => (
              <span key={tag} className="skill-pill" style={{ fontSize: 11.5 }}>{tag}</span>
            ))}
          </div>

          <h1 style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 'clamp(28px, 4.5vw, 42px)', fontWeight: 400,
            color: '#1c1c1a', margin: '0 0 16px', lineHeight: 1.2,
          }}>
            {post.title}
          </h1>

          <p style={{ fontSize: 12.5, color: '#9ca3af', margin: '0 0 40px', letterSpacing: '0.02em' }}>
            {post.date} · {post.readTime}
          </p>

          {post.series ? (
            <ThreadPost series={post.series} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {post.content.map((para, i) => (
                <p key={i} style={{ fontSize: 16, color: '#374151', lineHeight: 1.8, margin: 0 }}>
                  {para}
                </p>
              ))}
            </div>
          )}

          <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid #e3e2dc' }}>
            <Link href="/blog" className="blog-expand-btn">
              <BackArrowIcon size={14} /> All posts
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
