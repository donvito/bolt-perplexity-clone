import React from 'react';
import { ExternalLink } from 'lucide-react';

const sources = [
  {
    name: 'Independent',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=faces'
  },
  {
    name: 'Servebolt',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=32&h=32&fit=crop&crop=faces'
  },
  {
    name: 'LucidityInsights',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=faces'
  },
  {
    name: 'CioAfrica',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
  }
];

export default function SourceList() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex -space-x-2">
          {sources.slice(0, 2).map((source, index) => (
            <img
              key={index}
              src={source.avatar}
              className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-[#2C2C2C]"
              alt={source.name}
            />
          ))}
        </div>
        <span className="text-gray-500 dark:text-gray-400 text-sm">4 sources</span>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {sources.map((source, index) => (
          <a
            key={index}
            href={source.url}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] transition-colors"
          >
            <img
              src={source.avatar}
              className="w-6 h-6 rounded-full"
              alt={source.name}
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">{source.name}</span>
            <ExternalLink size={14} className="text-gray-400 ml-auto" />
          </a>
        ))}
      </div>
    </div>
  );
}