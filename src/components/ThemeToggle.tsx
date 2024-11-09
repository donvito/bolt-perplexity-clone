import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-400 hover:text-gray-200" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 hover:text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggle;