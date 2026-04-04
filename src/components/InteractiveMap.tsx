'use client';

import { useEffect, useRef } from 'react';
import type { Earthquake } from '@/lib/bmkg';

interface Props {
  earthquakes: Earthquake[];
}

export default function InteractiveMap({ earthquakes }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const initMap = async () => {
      // Dynamically import Leaflet
      const L = (await import('leaflet')).default;

      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current).setView([-2.5, 118], 5);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      earthquakes.forEach((gempa) => {
        const [lat, lng] = gempa.Coordinates.split(',').map(parseFloat);
        if (isNaN(lat) || isNaN(lng)) return;

        const mag = parseFloat(gempa.Magnitude);
        const color = mag >= 6 ? '#D32F2F' : mag >= 5 ? '#FF8C00' : '#0056D2';

        const marker = L.circleMarker([lat, lng], {
          radius: mag * 2,
          fillColor: color,
          color: '#fff',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`
          <strong>${gempa.Wilayah}</strong><br/>
          Magnitude: ${gempa.Magnitude}<br/>
          Waktu: ${gempa.Jam}<br/>
          Kedalaman: ${gempa.Kedalaman}
        `);
      });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [earthquakes]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: 'min(70vh, 500px)', 
        borderRadius: '12px', 
        overflow: 'hidden',
        border: '1px solid #DEE2E6',
        background: '#f0f0f0',
        zIndex: 1
      }} 
    />
  );
}
