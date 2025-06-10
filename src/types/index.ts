export interface Lesson {
  id: string;
  title: string;
  category: LessonCategory;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  content: string;
  imageUrl?: string;
  completed?: boolean;
}

export type LessonCategory = 'basics' | 'grammar' | 'vocabulary' | 'phrases';

export interface FlashcardDeck {
  id: string;
  title: string;
  category: LessonCategory;
  cards: Flashcard[];
}

export interface Flashcard {
  id: string;
  german: string;
  english: string;
  example?: string;
  imageUrl?: string;
  mastered: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  category: LessonCategory;
  level: 'beginner' | 'intermediate' | 'advanced';
  questions: QuizQuestion[];
}

export type QuizQuestionType = 'multiple-choice' | 'fill-in-blank' | 'matching';

export interface QuizQuestion {
  id: string;
  type: QuizQuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
}

export interface DailyWord {
  german: string;
  english: string;
  example: string;
  date: string;
}