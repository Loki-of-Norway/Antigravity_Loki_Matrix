export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'DEV' | 'MISSION' | 'TRANSMISSION';
  summary: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Matrix Protocol Initialized',
    date: '2025-12-30',
    category: 'DEV',
    summary: 'The new portfolio system is online. Global connectivity established.',
    content: 'The "Loki Matrix" portfolio has been successfully deployed. This system will serve as the central hub for all future operations and transmissions.'
  },
  {
    id: '2',
    title: 'New Crew Member Recruitment',
    date: '2025-12-25',
    category: 'MISSION',
    summary: 'Open call for elite developers to join the resistance.',
    content: 'We are expanding the crew. Looking for specialists in React, AI, and Cybersecurity. Contact Loki for encryption keys.'
  },
  {
    id: '3',
    title: 'DDiDDi Transmission Incoming',
    date: '2025-12-20',
    category: 'TRANSMISSION',
    summary: 'New video content detected from operative DDiDDi.',
    content: 'Latest gameplay exploits and visual hacks have been uploaded to the mainframe. Check the transmissions sector.'
  }
];
