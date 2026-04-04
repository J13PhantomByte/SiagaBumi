export interface Earthquake {
  Tanggal: string;
  Jam: string;
  DateTime: string;
  Coordinates: string;
  Lintang: string;
  Bujur: string;
  Magnitude: string;
  Kedalaman: string;
  Wilayah: string;
  Potensi: string;
  Dirasakan?: string;
  Shakemap?: string;
}

export interface BMKGResponse {
  Infogempa: {
    gempa: Earthquake | Earthquake[];
  };
}

const BASE_URL = 'https://data.bmkg.go.id/DataMKG/TEWS';

export async function getLatestEarthquake(): Promise<Earthquake | null> {
  try {
    const res = await fetch(`${BASE_URL}/autogempa.json`, {
      next: { revalidate: 60 } // Revalidate every minute
    });
    if (!res.ok) throw new Error('Failed to fetch latest earthquake');
    const data: BMKGResponse = await res.json();
    return data.Infogempa.gempa as Earthquake;
  } catch (error) {
    console.error('Error fetching latest earthquake:', error);
    return null;
  }
}

export async function getRecentEarthquakes(): Promise<Earthquake[]> {
  try {
    const res = await fetch(`${BASE_URL}/gempaterkini.json`, {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    if (!res.ok) throw new Error('Failed to fetch recent earthquakes');
    const data: BMKGResponse = await res.json();
    const gempa = data.Infogempa.gempa;
    return Array.isArray(gempa) ? gempa : [gempa];
  } catch (error) {
    console.error('Error fetching recent earthquakes:', error);
    return [];
  }
}

export async function getFeltEarthquakes(): Promise<Earthquake[]> {
  try {
    const res = await fetch(`${BASE_URL}/gempadirasakan.json`, {
      next: { revalidate: 300 }
    });
    if (!res.ok) throw new Error('Failed to fetch felt earthquakes');
    const data: BMKGResponse = await res.json();
    const gempa = data.Infogempa.gempa;
    return Array.isArray(gempa) ? gempa : [gempa];
  } catch (error) {
    console.error('Error fetching felt earthquakes:', error);
    return [];
  }
}
