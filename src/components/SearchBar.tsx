import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-[#2C2C2C] border border-gray-200 dark:border-[#3C3C3C] rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          placeholder="Ask anything..."
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
          <span className="text-xs text-gray-400 bg-gray-200 dark:bg-[#3C3C3C] px-2 py-1 rounded">Pro</span>
        </div>
      </div>
    </div>
  );
}