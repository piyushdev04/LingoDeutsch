import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-1',
    title: 'Basic Greetings Quiz',
    category: 'basics',
    level: 'beginner',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in German?',
        options: ['Hallo', 'Guten Tag', 'Tschüss', 'Auf Wiedersehen'],
        correctAnswer: 'Hallo'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is the correct translation for "Good morning"?',
        options: ['Guten Abend', 'Gute Nacht', 'Guten Morgen', 'Guten Tag'],
        correctAnswer: 'Guten Morgen'
      },
      {
        id: 'q3',
        type: 'fill-in-blank',
        question: 'Complete the sentence: "_____ Wiedersehen" (Goodbye)',
        correctAnswer: 'Auf'
      },
      {
        id: 'q4',
        type: 'multiple-choice',
        question: 'Which is an informal way to say goodbye?',
        options: ['Auf Wiedersehen', 'Tschüss', 'Guten Tag', 'Bitte'],
        correctAnswer: 'Tschüss'
      },
      {
        id: 'q5',
        type: 'matching',
        question: 'Match the German greeting with its English translation',
        options: ['Guten Abend - Good evening', 'Guten Tag - Good day', 'Gute Nacht - Good night'],
        correctAnswer: ['Guten Abend - Good evening', 'Guten Tag - Good day', 'Gute Nacht - Good night']
      }
    ]
  },
  {
    id: 'quiz-2',
    title: 'Numbers 1-10 Quiz',
    category: 'basics',
    level: 'beginner',
    questions: [
      {
        id: 'q6',
        type: 'multiple-choice',
        question: 'What is "five" in German?',
        options: ['vier', 'fünf', 'sechs', 'sieben'],
        correctAnswer: 'fünf'
      },
      {
        id: 'q7',
        type: 'multiple-choice',
        question: 'Which number is "acht" in English?',
        options: ['six', 'seven', 'eight', 'nine'],
        correctAnswer: 'eight'
      },
      {
        id: 'q8',
        type: 'fill-in-blank',
        question: 'Complete the sequence: eins, zwei, ____, vier, fünf',
        correctAnswer: 'drei'
      },
      {
        id: 'q9',
        type: 'multiple-choice',
        question: 'What is the correct spelling for the number 7?',
        options: ['sieben', 'seiben', 'sibn', 'seben'],
        correctAnswer: 'sieben'
      },
      {
        id: 'q10',
        type: 'matching',
        question: 'Match the numbers with their German equivalents',
        options: ['1 - eins', '2 - zwei', '3 - drei', '4 - vier', '10 - zehn'],
        correctAnswer: ['1 - eins', '2 - zwei', '3 - drei', '4 - vier', '10 - zehn']
      }
    ]
  },
  {
    id: 'quiz-3',
    title: 'Basic Phrases Quiz',
    category: 'phrases',
    level: 'beginner',
    questions: [
      {
        id: 'q11',
        type: 'multiple-choice',
        question: 'How do you say "Excuse me" in German?',
        options: ['Bitte', 'Entschuldigung', 'Danke', 'Hilfe'],
        correctAnswer: 'Entschuldigung'
      },
      {
        id: 'q12',
        type: 'multiple-choice',
        question: 'What does "Ich verstehe nicht" mean?',
        options: ['I understand', 'I don\'t understand', 'I don\'t speak German', 'I need help'],
        correctAnswer: 'I don\'t understand'
      },
      {
        id: 'q13',
        type: 'fill-in-blank',
        question: 'Complete the phrase: "Sprechen Sie _____?" (Do you speak English?)',
        correctAnswer: 'Englisch'
      },
      {
        id: 'q14',
        type: 'multiple-choice',
        question: 'How do you ask "How are you?" in German?',
        options: ['Wie heißt du?', 'Woher kommst du?', 'Wie geht es dir?', 'Wo wohnst du?'],
        correctAnswer: 'Wie geht es dir?'
      },
      {
        id: 'q15',
        type: 'matching',
        question: 'Match the phrases with their English translations',
        options: ['Danke - Thank you', 'Bitte - Please/You\'re welcome', 'Ja - Yes', 'Nein - No'],
        correctAnswer: ['Danke - Thank you', 'Bitte - Please/You\'re welcome', 'Ja - Yes', 'Nein - No']
      }
    ]
  }
];