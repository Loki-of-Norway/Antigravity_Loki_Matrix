export interface Profile {
  id: string;
  name: string;
  role: string;
  description: string;
  stats: Record<string, number>;
  image?: string;
}

export const profiles: Profile[] = [
  {
    id: 'loki',
    name: 'Theodor "Loki" Kvalem',
    role: 'System Architect / Captain',
    description: 'The creative force behind the Matrix illusion. Master of code and reality manipulation. Burdened with glorious purpose.',
    stats: { 
      'CODE_INTEGRITY': 98, 
      'LEADERSHIP': 95, 
      'ILLUSION': 100 
    }
  },
  {
    id: 'ddiddi',
    name: 'Didrik "DDiDDi"',
    role: 'Content Operative',
    description: 'Elite content creator and brother in arms. Specializes in digital transmissions and visual exploits.',
    stats: { 
      'CREATIVITY': 95, 
      'GAMING': 90, 
      'EDITING': 88 
    }
  },
  {
    id: 'crew_1',
    name: 'Recruiting...',
    role: 'Operative',
    description: 'Slot open for new crew member. Connection pending.',
    stats: { 
      'POTENTIAL': 50,
      'STATUS': 0
    }
  }
];
