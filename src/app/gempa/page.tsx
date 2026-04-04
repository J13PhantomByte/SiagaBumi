import { getRecentEarthquakes, getFeltEarthquakes } from "@/lib/bmkg";
import EarthquakeCard from "@/components/EarthquakeCard";

export default async function GempaPage() {
  // Fetch both recent and felt earthquakes
  const [recent, felt] = await Promise.all([
    getRecentEarthquakes(),
    getFeltEarthquakes()
  ]);

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-xl)' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-lg)' }}>Daftar Gempa Terkini</h1>
      
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-md)', color: 'var(--primary-blue)' }}>
          📡 Gempa M ≥ 5.0
        </h2>
        {recent.length > 0 ? (
          recent.map((gempa, idx) => (
            <EarthquakeCard key={`${gempa.DateTime}-${idx}`} earthquake={gempa} />
          ))
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>Tidak ada data gempa signifikan baru-baru ini.</p>
        )}
      </section>

      <section>
        <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-md)', color: 'var(--alert-orange)' }}>
          〰️ Gempa Dirasakan
        </h2>
        {felt.length > 0 ? (
          felt.map((gempa, idx) => (
            <EarthquakeCard key={`${gempa.DateTime}-${idx}`} earthquake={gempa} />
          ))
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>Tidak ada data gempa dirasakan baru-baru ini.</p>
        )}
      </section>

      <footer style={{ textAlign: 'center', padding: 'var(--space-xl) 0', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
        <p>Data otomatis diperbarui dari server BMKG.</p>
      </footer>
    </div>
  );
}
