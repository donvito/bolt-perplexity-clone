import React from 'react';
import { Home, Compass, Library, Command, Clock, Settings } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const recentSearches = [
  'what are the price plans for bolt.new',
  'check the price',
  'what is the average for sale prices of...',
  'show nvidia, microsoft, apple and a...',
  'why is AI stocks falling?',
  'explain lora in layman',
  'twitter competitor',
  'find a one service which can do all t...'
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 dark:bg-[#1C1C1C] h-screen p-4 flex flex-col transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black dark:bg-white rounded-sm flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-sm">P</span>
          </div>
          <span className="text-gray-900 dark:text-white font-semibold">perplexity</span>
        </div>
        <ThemeToggle />
      </div>

      <button className="flex items-center gap-2 bg-gray-200 dark:bg-[#2C2C2C] text-gray-900 dark:text-white px-3 py-2 rounded-lg mb-6 transition-colors">
        <span>New Thread</span>
        <div className="flex items-center gap-1 ml-auto">
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-300 dark:bg-[#3C3C3C] rounded">⌘</kbd>
          <kbd className="px-1.5 py-0.5 text-xs bg-gray-300 dark:bg-[#3C3C3C] rounded">N</kbd>
        </div>
      </button>

      <nav className="space-y-1">
        <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] transition-colors">
          <Home size={18} />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] transition-colors">
          <Compass size={18} />
          <span>Discover</span>
        </a>
        <div className="pt-4">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 px-2 py-2">
            <Library size={18} />
            <span>Library</span>
          </div>
          <div className="mt-2 space-y-1">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-2 py-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-[#2C2C2C] text-left text-sm transition-colors"
              >
                <Clock size={14} />
                <span className="truncate">{search}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mt-auto space-y-4">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 px-2 py-2">
          <Command size={16} />
          <span className="text-sm">Shortcuts</span>
        </div>

        <div className="flex items-center justify-between px-2 py-2">
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-sm text-gray-900 dark:text-white">melvindave</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Pro</span>
            </div>
          </div>
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Settings size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;