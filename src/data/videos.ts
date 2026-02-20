export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string; // YouTube URL or ID
  category: 'GAMING' | 'LORE' | 'TECH';
}

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'THIS WEAPON IS ILLEGAL IN NORWAY?!',
    thumbnail: 'https://img.youtube.com/vi/k4esBwdOMRY/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=k4esBwdOMRY',
    category: 'GAMING'
  },
  {
    id: 'v2',
    title: 'I built a GIANT map of Norway!',
    thumbnail: 'https://img.youtube.com/vi/IqaNmTZuhiE/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=IqaNmTZuhiE',
    category: 'TECH'
  },
  {
    id: 'v3',
    title: "Flekkefjord's INSANE Coat Of Arms!",
    thumbnail: 'https://img.youtube.com/vi/sKuApc3s2w0/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=sKuApc3s2w0',
    category: 'LORE'
  }
];
