import React from 'react';
import { DailyWord } from '../types';
import { Volume as VolumeUp, Calendar } from 'lucide-react';

interface DailyWordCardProps {
  dailyWord: DailyWord;
}

const DailyWordCard: React.FC<DailyWordCardProps> = ({ dailyWord }) => {
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      window.speechSynthesis.speak(utterance);
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card max-w-lg mx-auto overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary dark:text-accent">Word of the Day</h2>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(dailyWord.date)}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{dailyWord.german}</h3>
            <button
              onClick={() => speakText(dailyWord.german)}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
              aria-label="Pronounce"
            >
              <VolumeUp className="h-5 w-5 text-primary dark:text-accent" />
            </button>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">{dailyWord.english}</p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Example:</h4>
          <p className="text-gray-800 dark:text-gray-200 italic">{dailyWord.example}</p>
          <button
            onClick={() => speakText(dailyWord.example)}
            className="mt-2 flex items-center text-primary dark:text-accent text-sm"
          >
            <VolumeUp className="h-4 w-4 mr-1" />
            <span>Listen to example</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyWordCard;