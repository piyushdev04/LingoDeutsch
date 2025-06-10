import { DailyWord } from '../types';

export const dailyWords: DailyWord[] = [
  {
    german: 'der Kaffee',
    english: 'coffee',
    example: 'Ich trinke jeden Morgen einen Kaffee.',
    date: '2025-01-01'
  },
  {
    german: 'das Buch',
    english: 'book',
    example: 'Ich lese ein interessantes Buch.',
    date: '2025-01-02'
  },
  {
    german: 'die Zeit',
    english: 'time',
    example: 'Hast du Zeit für einen Kaffee?',
    date: '2025-01-03'
  },
  {
    german: 'der Freund',
    english: 'friend (male)',
    example: 'Er ist mein bester Freund.',
    date: '2025-01-04'
  },
  {
    german: 'die Freundin',
    english: 'friend (female)',
    example: 'Sie ist meine beste Freundin.',
    date: '2025-01-05'
  },
  {
    german: 'das Haus',
    english: 'house',
    example: 'Mein Haus ist nicht weit von hier.',
    date: '2025-01-06'
  },
  {
    german: 'die Straße',
    english: 'street',
    example: 'Unsere Wohnung ist in der Hauptstraße.',
    date: '2025-01-07'
  }
];

export const getDailyWord = (): DailyWord => {
  // In a real app, we would choose based on the current date
  // For demo purposes, we'll choose a random word
  const randomIndex = Math.floor(Math.random() * dailyWords.length);
  return dailyWords[randomIndex];
};