import type { Earthquake } from "@/lib/bmkg";

interface Props {
  earthquake: Earthquake;
  showDetails?: boolean;
}

export default function EarthquakeCard({ earthquake, showDetails = false }: Props) {
  const mag = parseFloat(earthquake.Magnitude);
  const color = mag >= 6 ? 'var(--alert-red)' : mag >= 5 ? 'var(--alert-orange)' : 'var(--primary-blue)';

  return (
    <div className="card" style={{ borderColor: showDetails ? color : 'var(--border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
        <div style={{
          background: color,
          color: 'white',
          padding: '2px 12px',
          borderRadius: '999px',
          fontSize: '0.875rem',
          fontWeight: 700
        }}>
          M {earthquake.Magnitude}
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {earthquake.Tanggal} • {earthquake.Jam}
        </div>
      </div>
      <h3 style={{ marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-lg)' }}>{earthquake.Wilayah}</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: 'var(--space-sm)',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
      }}>
        <div>📍 {earthquake.Coordinates}</div>
        <div>🌊 Kedalaman {earthquake.Kedalaman}</div>
      </div>
      {earthquake.Potensi && (
        <div style={{ 
          marginTop: 'var(--space-sm)', 
          fontWeight: 600, 
          color: earthquake.Potensi.toLowerCase().includes('tidak') ? 'var(--text-secondary)' : 'var(--alert-red)',
          fontSize: '0.875rem'
        }}>
          ⚠️ {earthquake.Potensi}
        </div>
      )}
    </div>
  );
}
