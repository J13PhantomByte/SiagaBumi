export default function EdukasiPage() {
  const sections = [
    {
      title: "Sebelum Gempa",
      icon: "🏠",
      tips: [
        "Kenali area sekitar tempat tinggal dan kerja.",
        "Pastikan perabotan berat menempel kuat ke dinding.",
        "Siapkan Tas Siaga Bencana (P3K, senter, makanan, air).",
        "Tentukan titik kumpul aman bersama keluarga."
      ]
    },
    {
      title: "Saat Gempa",
      icon: "🧘",
      tips: [
        "Merunduk, berlindung di bawah meja kuat, dan bertahan.",
        "Jauhi jendela kaca, cermin, dan benda yang mudah jatuh.",
        "Jika di luar, cari area terbuka jauh dari gedung dan tiang.",
        "Jangan gunakan lift, gunakan tangga darurat."
      ]
    },
    {
      title: "Setelah Gempa",
      icon: "🚶",
      tips: [
        "Waspada terhadap gempa susulan.",
        "Periksa kebocoran gas atau kerusakan kabel listrik.",
        "Gunakan pesan teks untuk komunikasi agar saluran telepon tidak sibuk.",
        "Ikuti instruksi dari pihak berwenang via radio atau media sosial."
      ]
    }
  ];

  return (
    <div className="container" style={{ paddingBottom: 'var(--space-xl)' }}>
      <h1 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)' }}>Edukasi Mitigasi</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
        Pengetahuan adalah perlindungan terbaik. Pelajari langkah-langkah keselamatan berikut:
      </p>

      {sections.map((section, idx) => (
        <section key={idx} className="card" style={{ marginBottom: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
            <span style={{ fontSize: '2rem' }}>{section.icon}</span>
            <h2 style={{ fontSize: 'var(--font-size-lg)', margin: 0 }}>{section.title}</h2>
          </div>
          <ul style={{ paddingLeft: 'var(--space-lg)', lineHeight: 1.6 }}>
            {section.tips.map((tip, i) => (
              <li key={i} style={{ marginBottom: 'var(--space-sm)' }}>{tip}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="card" style={{ background: 'var(--primary-blue)', color: 'white' }}>
        <h2 style={{ color: 'white', fontSize: '1.1rem' }}>🎒 Tas Siaga Bencana</h2>
        <p style={{ fontSize: '0.875rem', opacity: 0.9 }}>
          Pastikan tas Anda berisi: Air minum, makanan kering, P3K, senter + baterai cadangan, peluit, masker, dan dokumen penting dalam plastik kedap air.
        </p>
      </section>

      <footer style={{ textAlign: 'center', padding: 'var(--space-xl) 0', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
        <p>Sumber: BNPB & BMKG Indonesia</p>
      </footer>
    </div>
  );
}
