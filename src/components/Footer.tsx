import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary dark:text-accent">
                LingoDeutsch
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Learn German with a fun and interactive approach. Build vocabulary, master grammar, and become conversational with our structured lessons.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="mt-4 space-y-2">
              <Link to="/lessons" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent block">
                Lessons
              </Link>
              <Link to="/flashcards" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent block">
                Flashcards
              </Link>
              <Link to="/quizzes" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent block">
                Quizzes
              </Link>
              <Link to="/daily-word" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent block">
                Daily Word
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              About
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-base text-gray-600 dark:text-gray-400">
                LingoDeutsch is designed to make learning German enjoyable and effective with interactive lessons, flashcards, and quizzes.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-secondary" /> in 2025
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; 2025 LingoDeutsch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;