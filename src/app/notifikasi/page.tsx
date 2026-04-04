'use client';

import { useState } from 'react';

export default function NotifikasiPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="container">
      <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)' }}>Pengaturan Notifikasi</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
        Dapatkan pemberitahuan langsung saat terjadi gempa bumi signifikan di wilayah Anda.
      </p>

      <section className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>Notifikasi Browser</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
            Aktifkan untuk menerima alert di desktop atau mobile browser.
          </p>
        </div>
        <button 
          onClick={() => setEnabled(!enabled)}
          style={{
            background: enabled ? 'var(--primary-blue)' : '#DEE2E6',
            width: '56px',
            height: '28px',
            borderRadius: '14px',
            position: 'relative',
            transition: 'var(--transition)'
          }}
          aria-label={enabled ? "Nonaktifkan Notifikasi" : "Aktifkan Notifikasi"}
        >
          <div style={{
            width: '20px',
            height: '20px',
            background: 'white',
            borderRadius: '50%',
            position: 'absolute',
            top: '4px',
            left: enabled ? '32px' : '4px',
            transition: 'var(--transition)'
          }} />
        </button>
      </section>

      <section className="card">
        <h2 style={{ fontSize: '1.1rem', marginBottom: 'var(--space-md)' }}>Saluran Alternatif</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <span style={{ fontSize: '1.5rem' }}>📱</span>
            <div>
              <p style={{ fontWeight: 600, margin: 0 }}>Telegram Bot</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>@InaTEWS_BMKG_Bot</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <span style={{ fontSize: '1.5rem' }}>🐦</span>
            <div>
              <p style={{ fontWeight: 600, margin: 0 }}>Twitter / X</p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>@infoBMKG</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: 'var(--space-xl) 0', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
        <p>Fitur notifikasi web sedang dalam tahap pengembangan.</p>
      </footer>
    </div>
  );
}
