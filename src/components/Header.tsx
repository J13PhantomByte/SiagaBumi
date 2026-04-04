import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      zIndex: 100,
      padding: 'var(--space-md) 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: 'var(--font-size-lg)',
          fontWeight: 800,
          color: 'var(--primary-blue)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)'
        }}>
          <span style={{ fontSize: '1.5rem' }}>🌍</span>
          SiagaBumi
        </Link>
        <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
          <Link href="/notifikasi" aria-label="Notifikasi" style={{ fontSize: '1.2rem' }}>🔔</Link>
        </div>
      </div>
    </header>
  );
}
