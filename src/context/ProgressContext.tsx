import React, { createContext, useContext, useEffect, useState } from 'react';
import { Lesson, Flashcard } from '../types';

interface ProgressContextType {
  completedLessons: string[];
  masteredFlashcards: string[];
  markLessonComplete: (lessonId: string) => void;
  markFlashcardMastered: (cardId: string) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [masteredFlashcards, setMasteredFlashcards] = useState<string[]>(() => {
    const saved = localStorage.getItem('masteredFlashcards');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('masteredFlashcards', JSON.stringify(masteredFlashcards));
  }, [masteredFlashcards]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      if (prev.includes(lessonId)) return prev;
      return [...prev, lessonId];
    });
  };

  const markFlashcardMastered = (cardId: string) => {
    setMasteredFlashcards(prev => {
      if (prev.includes(cardId)) return prev;
      return [...prev, cardId];
    });
  };

  const resetProgress = () => {
    setCompletedLessons([]);
    setMasteredFlashcards([]);
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        completedLessons, 
        masteredFlashcards, 
        markLessonComplete, 
        markFlashcardMastered,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};