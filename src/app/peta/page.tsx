import InteractiveMap from '@/components/InteractiveMap';
import { getRecentEarthquakes } from '@/lib/bmkg';

export default async function PetaPage() {
  const earthquakes = await getRecentEarthquakes();

  return (
    <div className="container">
      <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)' }}>Peta Episenter</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', fontSize: '0.875rem' }}>
        Titik-titik di bawah ini menunjukkan lokasi pusat gempa dengan Magnitudo ≥ 5.0 terbaru.
      </p>
      
      <InteractiveMap earthquakes={earthquakes} />
      
      <footer style={{ textAlign: 'center', padding: 'var(--space-md) 0', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
        <p>Gunakan cubit (pinch) atau scroll untuk zoom. Klik titik untuk detail.</p>
      </footer>
    </div>
  );
}
