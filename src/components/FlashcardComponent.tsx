import React, { useState } from 'react';
import { Flashcard } from '../types';
import { Volume as VolumeUp, CheckCircle } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface FlashcardProps {
  card: Flashcard;
  onMastered: (cardId: string) => void;
}

const FlashcardComponent: React.FC<FlashcardProps> = ({ card, onMastered }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { masteredFlashcards } = useProgress();
  const isMastered = masteredFlashcards.includes(card.id);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleMarkMastered = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flipping the card
    onMastered(card.id);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h3 className="text-2xl font-bold mb-4">{card.german}</h3>
          {card.example && (
            <p className="text-sm italic text-gray-600 dark:text-gray-300 mb-4">
              {card.example}
            </p>
          )}
          <div className="absolute bottom-4 left-4">
            <button 
              onClick={(e) => { 
                e.stopPropagation();
                speakText(card.german);
              }}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
              aria-label="Pronounce"
            >
              <VolumeUp className="h-5 w-5 text-primary" />
            </button>
          </div>
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleMarkMastered}
              className={`p-2 rounded-full ${
                isMastered 
                  ? 'bg-success/20 hover:bg-success/30' 
                  : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
              } transition-colors duration-200`}
              aria-label={isMastered ? 'Mastered' : 'Mark as mastered'}
            >
              <CheckCircle className={`h-5 w-5 ${
                isMastered ? 'text-success' : 'text-gray-400 dark:text-gray-500'
              }`} />
            </button>
          </div>
          <div className="absolute top-4 right-4 text-xs text-gray-500 dark:text-gray-400">
            Click to flip
          </div>
        </div>
        <div className="flashcard-back">
          <h3 className="text-2xl font-bold mb-2">{card.english}</h3>
          <p className="text-lg mb-4">{card.german}</p>
          {card.example && (
            <div className="mt-2">
              <p className="text-sm italic text-gray-600 dark:text-gray-300">
                {card.example}
              </p>
            </div>
          )}
          <div className="absolute top-4 right-4 text-xs text-gray-500 dark:text-gray-400">
            Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardComponent;