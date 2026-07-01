// Renders a `series` of build-log entries as an in-order feed, like a thread.

function renderInline(text) {
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));

    if (match[1] !== undefined) {
      parts.push(<strong key={key++} style={{ color: '#1c1c1a', fontWeight: 600 }}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(<em key={key++}>{match[2]}</em>);
    } else if (match[3] !== undefined) {
      parts.push(
        <code key={key++} style={{
          fontFamily: 'monospace', fontSize: '0.88em',
          background: 'rgba(184,69,0,0.07)', color: '#b84500',
          padding: '1px 5px', borderRadius: 3,
        }}>{match[3]}</code>
      );
    } else {
      parts.push(
        <a key={key++} href={match[5]} target="_blank" rel="noopener noreferrer"
          style={{ color: '#b84500', textDecoration: 'underline', textDecorationColor: 'rgba(184,69,0,0.35)' }}>
          {match[4]}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function Block({ block }) {
  if (block.type === 'h3') {
    return (
      <h3 style={{
        fontFamily: '"DM Serif Display", Georgia, serif', fontWeight: 400,
        fontSize: 16.5, color: '#1c1c1a', margin: '20px 0 8px', lineHeight: 1.3,
      }}>
        {block.text}
      </h3>
    );
  }
  if (block.type === 'list') {
    return (
      <ul style={{ margin: '6px 0 14px', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {block.items.map((item, i) => (
          <li key={i} style={{ fontSize: 15, color: '#374151', lineHeight: 1.7 }}>
            {renderInline(item)}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'code') {
    return (
      <pre style={{
        margin: '6px 0 16px', padding: '14px 16px', borderRadius: 10,
        background: '#1c1c1a', color: '#e5e5e0',
        fontSize: 13, lineHeight: 1.65, overflowX: 'auto',
        fontFamily: 'monospace', whiteSpace: 'pre',
      }}>
        {block.text}
      </pre>
    );
  }
  if (block.type === 'table') {
    return (
      <div style={{ overflowX: 'auto', margin: '6px 0 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th key={i} style={{
                  textAlign: 'left', padding: '8px 12px',
                  borderBottom: '2px solid #e3e2dc',
                  color: '#6b7280', fontWeight: 600,
                  fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f0efea' }}>
                {row.map((cell, j) => (
                  <td key={j} style={{
                    padding: '9px 12px', color: j === 0 ? '#1c1c1a' : '#374151',
                    fontWeight: j === 0 ? 500 : 400, verticalAlign: 'top',
                  }}>
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: '0 0 14px' }}>
      {renderInline(block.text)}
    </p>
  );
}

export default function ThreadPost({ series }) {
  return (
    <div>
      <p style={{ fontSize: 13, color: '#9ca3af', fontStyle: 'italic', margin: '0 0 32px' }}>
        A running thread — {series.length} dispatches so far, in the order they were written.
      </p>

      {series.map((entry, i) => {
        const isLast = i === series.length - 1;
        return (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 44 }}>
              <img src="/profile_pic.png" alt="Akhilesh Paspureddi" style={{
                width: 44, height: 44, borderRadius: '50%', objectFit: 'cover',
                boxShadow: '0 0 0 2px #fafaf7, 0 0 0 3px #e3e2dc',
              }} />
              {!isLast && (
                <div style={{
                  flex: 1, width: 2, marginTop: 6, borderRadius: 2,
                  background: 'linear-gradient(to bottom, rgba(184,69,0,0.3), rgba(184,69,0,0.08))',
                }} />
              )}
            </div>

            <div style={{
              flex: 1, minWidth: 0,
              paddingBottom: isLast ? 4 : 32,
              marginBottom: isLast ? 0 : 4,
              borderBottom: isLast ? 'none' : '1px solid #e3e2dc',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 600, fontSize: 14.5, color: '#1c1c1a' }}>Akhilesh Paspureddi</span>
                <span style={{ fontSize: 13, color: '#9ca3af' }}>@ap48579</span>
                <span style={{ fontSize: 13, color: '#9ca3af' }}>·</span>
                <span style={{ fontSize: 13, color: '#9ca3af' }}>{entry.date}</span>
              </div>

              <span className="skill-pill" style={{ fontSize: 11, marginTop: 8, marginBottom: 10, display: 'inline-block' }}>
                {entry.label}
              </span>

              <h2 style={{
                fontFamily: '"DM Serif Display", Georgia, serif', fontWeight: 400,
                fontSize: 19, color: '#1c1c1a', margin: '2px 0 12px', lineHeight: 1.3,
              }}>
                {entry.title}
              </h2>

              {entry.blocks.map((block, j) => <Block key={j} block={block} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
