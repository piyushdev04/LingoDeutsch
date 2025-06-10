import { FlashcardDeck } from '../types';

export const flashcardDecks: FlashcardDeck[] = [
  {
    id: 'basics-1',
    title: 'Basic Greetings',
    category: 'basics',
    cards: [
      {
        id: 'card-1',
        german: 'Hallo',
        english: 'Hello',
        example: 'Hallo! Wie geht es dir?',
        mastered: false
      },
      {
        id: 'card-2',
        german: 'Guten Morgen',
        english: 'Good morning',
        example: 'Guten Morgen! Hast du gut geschlafen?',
        mastered: false
      },
      {
        id: 'card-3',
        german: 'Guten Tag',
        english: 'Good day',
        example: 'Guten Tag! Wie kann ich Ihnen helfen?',
        mastered: false
      },
      {
        id: 'card-4',
        german: 'Guten Abend',
        english: 'Good evening',
        example: 'Guten Abend! Schön, dich zu sehen.',
        mastered: false
      },
      {
        id: 'card-5',
        german: 'Auf Wiedersehen',
        english: 'Goodbye',
        example: 'Auf Wiedersehen! Bis morgen.',
        mastered: false
      },
      {
        id: 'card-6',
        german: 'Tschüss',
        english: 'Bye (informal)',
        example: 'Tschüss! Bis später!',
        mastered: false
      }
    ]
  },
  {
    id: 'basics-2',
    title: 'Common Questions',
    category: 'basics',
    cards: [
      {
        id: 'card-7',
        german: 'Wie heißt du?',
        english: 'What is your name? (informal)',
        example: 'Hallo, wie heißt du?',
        mastered: false
      },
      {
        id: 'card-8',
        german: 'Woher kommst du?',
        english: 'Where are you from? (informal)',
        example: 'Woher kommst du? Ich komme aus Deutschland.',
        mastered: false
      },
      {
        id: 'card-9',
        german: 'Wie alt bist du?',
        english: 'How old are you? (informal)',
        example: 'Wie alt bist du? Ich bin zwanzig Jahre alt.',
        mastered: false
      },
      {
        id: 'card-10',
        german: 'Was machst du beruflich?',
        english: 'What do you do for a living? (informal)',
        example: 'Was machst du beruflich? Ich bin Lehrer.',
        mastered: false
      },
      {
        id: 'card-11',
        german: 'Wo wohnst du?',
        english: 'Where do you live? (informal)',
        example: 'Wo wohnst du? Ich wohne in Berlin.',
        mastered: false
      }
    ]
  },
  {
    id: 'vocab-1',
    title: 'Animals',
    category: 'vocabulary',
    cards: [
      {
        id: 'card-12',
        german: 'der Hund',
        english: 'the dog',
        example: 'Der Hund ist sehr freundlich.',
        mastered: false
      },
      {
        id: 'card-13',
        german: 'die Katze',
        english: 'the cat',
        example: 'Die Katze schläft auf dem Sofa.',
        mastered: false
      },
      {
        id: 'card-14',
        german: 'der Vogel',
        english: 'the bird',
        example: 'Der Vogel singt im Baum.',
        mastered: false
      },
      {
        id: 'card-15',
        german: 'das Pferd',
        english: 'the horse',
        example: 'Das Pferd läuft schnell.',
        mastered: false
      },
      {
        id: 'card-16',
        german: 'der Fisch',
        english: 'the fish',
        example: 'Der Fisch schwimmt im Wasser.',
        mastered: false
      },
      {
        id: 'card-17',
        german: 'die Maus',
        english: 'the mouse',
        example: 'Die Maus ist sehr klein.',
        mastered: false
      }
    ]
  },
  {
    id: 'phrases-1',
    title: 'Useful Phrases',
    category: 'phrases',
    cards: [
      {
        id: 'card-18',
        german: 'Entschuldigung',
        english: 'Excuse me / Sorry',
        example: 'Entschuldigung, wo ist der Bahnhof?',
        mastered: false
      },
      {
        id: 'card-19',
        german: 'Ich verstehe nicht',
        english: 'I don\'t understand',
        example: 'Entschuldigung, ich verstehe nicht. Können Sie das wiederholen?',
        mastered: false
      },
      {
        id: 'card-20',
        german: 'Sprechen Sie Englisch?',
        english: 'Do you speak English?',
        example: 'Entschuldigung, sprechen Sie Englisch?',
        mastered: false
      },
      {
        id: 'card-21',
        german: 'Wie viel kostet das?',
        english: 'How much does this cost?',
        example: 'Wie viel kostet das Buch?',
        mastered: false
      },
      {
        id: 'card-22',
        german: 'Ich hätte gern...',
        english: 'I would like...',
        example: 'Ich hätte gern eine Tasse Kaffee.',
        mastered: false
      }
    ]
  }
];