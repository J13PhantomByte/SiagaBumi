import Link from "next/link";
import { getLatestEarthquake } from "@/lib/bmkg";

export default async function Home() {
  const latest = await getLatestEarthquake();

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-xl)' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'var(--primary-blue)', 
        color: 'white', 
        padding: 'var(--space-xl) var(--space-md)', 
        borderRadius: 'var(--border-radius)',
        marginBottom: 'var(--space-xl)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)'
      }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '4px 12px', 
            borderRadius: '99px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: 'var(--space-md)'
          }}>
            🔴 Peringatan Terkini
          </span>
          {latest ? (
            <div>
              <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 800, lineHeight: 1.1 }}>
                {latest.Magnitude} <span style={{ fontSize: '1rem', fontWeight: 500 }}>SR</span>
              </div>
              <h2 style={{ fontSize: 'var(--font-size-lg)', color: 'white', opacity: 0.9, marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>
                {latest.Wilayah}
              </h2>
              <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: 'var(--space-md)' }}>
                {latest.Jam} • Kedalaman: {latest.Kedalaman}
              </p>
              <Link href="/gempa" className="btn" style={{ background: 'white', color: 'var(--primary-blue)' }}>
                Lihat Info Terbaru
              </Link>
            </div>
          ) : (
            <p style={{ marginTop: 'var(--space-md)' }}>Memuat info terbaru...</p>
          )}
        </div>
        {/* Abstract decor */}
        <div style={{ 
          position: 'absolute', 
          right: '-50px', 
          bottom: '-50px', 
          width: '200px', 
          height: '200px', 
          background: 'rgba(255,255,255,0.1)', 
          borderRadius: '50%' 
        }} />
      </section>

      {/* Main Features Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
        <Link href="/peta" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--space-lg)' }}>
          <span style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>🗺️</span>
          <h3 style={{ fontSize: '1rem', margin: 0 }}>Peta Episenter</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 'var(--space-xs)', marginBottom: 0 }}>Visualisasi titik gempa</p>
        </Link>
        <Link href="/edukasi" className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 'var(--space-lg)' }}>
          <span style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>📚</span>
          <h3 style={{ fontSize: '1rem', margin: 0 }}>Edukasi</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 'var(--space-xs)', marginBottom: 0 }}>Panduan mitigasi</p>
        </Link>
      </section>

      {/* Quick Info / Tips */}
      <section className="card" style={{ background: '#FFFBE6', borderColor: '#FFE58F' }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-sm)', color: '#856404' }}>💡 Tips Cepat</h2>
        <p style={{ fontSize: '0.875rem', color: '#856404', margin: 0 }}>
          Jika terjadi gempa: <strong>Merunduk, Berlindung, dan Bertahan.</strong> Jangan gunakan lift dan jauhi jendela kaca.
        </p>
      </section>
      
      <footer style={{ textAlign: 'center', padding: 'var(--space-xl) 0', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
        <p>Data Bersumber dari BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)</p>
        <p>© 2026 SiagaBumi</p>
      </footer>
    </div>
  );
}
