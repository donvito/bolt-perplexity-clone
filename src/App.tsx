import React from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <div className="flex h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <SearchBar />
          <MainContent />
        </div>
      </main>
    </div>
  );
}