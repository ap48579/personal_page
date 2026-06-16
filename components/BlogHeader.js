import Link from 'next/link';
import { GitHubIcon, LinkedInIcon, BackArrowIcon } from './icons';

export default function BlogHeader() {
  return (
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
  );
}
