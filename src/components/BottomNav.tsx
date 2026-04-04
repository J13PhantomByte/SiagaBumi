'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Beranda', href: '/', icon: '🏠' },
    { label: 'Gempa', href: '/gempa', icon: '📡' },
    { label: 'Peta', href: '/peta', icon: '🗺️' },
    { label: 'Edukasi', href: '/edukasi', icon: '📚' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: 'var(--space-sm) 0',
      zIndex: 100,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
    }}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link 
            key={item.href} 
            href={item.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '0.75rem',
              color: isActive ? 'var(--primary-blue)' : 'var(--text-secondary)',
              gap: '2px',
              flex: 1,
              fontWeight: isActive ? 700 : 500
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
