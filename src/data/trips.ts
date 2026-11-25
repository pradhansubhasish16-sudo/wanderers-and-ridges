export type TripCategory = 'Himalayan High Passes' | 'Canyons & Caves' | 'Motorcycle Trails';

export interface TripMetadata {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  destination: string;
  date: string;
  elevation: string;
  category: TripCategory;
  mode: string;
  excerpt: string;
  archiveExcerpt: string;
  keyStops: string[];
  featuredKeyStops: string[];
}

export const TRIPS: TripMetadata[] = [
  {
    id: 'arunachal-2023',
    title: 'Into the Land of Dawn-Lit Mountains: Our Himalayan Winter Road Trip',
    slug: '/trips/arunachal-pradesh-2023',
    coverImage: '/images/arunachal/PXL_20231219_074434467 sela pass.jpg',
    destination: 'Western Arunachal Pradesh (Tawang, Bum La, Dirang)',
    date: 'Dec 18 – Dec 23, 2023',
    elevation: '15,200 FT',
    category: 'Himalayan High Passes',
    mode: '4x4 Road Trip',
    excerpt:
      'An extreme winter transit across frozen high-altitude lakes, military frontier outposts, thundering cataracts at Nuranang, and ancient Buddhist sanctuaries overlooking the eastern Himalayas.',
    archiveExcerpt:
      'Sub-zero switchbacks, frozen Sela Lake, the 100-meter cataract of Nuranang Falls, the Golden Buddha of Tawang, and the remote Indo-China frontier at Bum La.',
    featuredKeyStops: [
      'Sela Pass (13,700 ft)',
      'Nuranang Falls',
      'Tawang Buddha',
      'Bum La Pass (15,200 ft)',
      'Sangetsar Lake',
      'Dirang Valley',
    ],
    keyStops: [
      'Sela Pass',
      'Nuranang Falls',
      'Tawang Buddha',
      'Bum La Pass',
      'Sangetsar Lake',
      'Dirang Valley',
    ],
  },
  {
    id: 'meghalaya-2026',
    title: 'Chasing Clouds, Craters & Crystal Waters: A Meghalaya Motorcycle Odyssey',
    slug: '/trips/meghalaya-canyons-2026',
    coverImage: '/images/meghalaya/PXL_20260120_083114682 Krem Chympe.jpg',
    destination: 'West & East Jaintia Hills, East Khasi Hills',
    date: 'Jan 17 – Jan 23, 2026',
    elevation: '4,900 FT',
    category: 'Canyons & Caves',
    mode: 'Motorcycle Touring',
    excerpt:
      'Carving through cloud-shrouded serpentine mountain tarmac, wading turquoise river canyons, and paddling bamboo rafts into the towering limestone caverns of Krem Chympe.',
    archiveExcerpt:
      'Motorcycle expedition through limestone canyons, the cobalt amphitheater of Phe Phe Falls, swimming into the cavernous arch of Krem Chympe on bamboo rafts, and transparent river currents.',
    featuredKeyStops: [
      'Phe Phe Falls',
      'Krem Chympe River Gorge',
      'Wah Umngot River',
      'Mawsmai Fossils',
      'Mawkdok Dympep Gorge',
    ],
    keyStops: [
      'Phe Phe Falls',
      'Krem Chympe Cave',
      'Wah Umngot',
      'Mawsmai Fossils',
      'Mawkdok Dympep Valley',
    ],
  },
];

export const TRIP_CATEGORIES: Array<'All' | TripCategory> = [
  'All',
  'Himalayan High Passes',
  'Canyons & Caves',
  'Motorcycle Trails',
];
