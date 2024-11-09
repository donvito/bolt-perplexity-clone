import React from 'react';
import { MessageCircle, Share2, Copy, MoreHorizontal } from 'lucide-react';
import SourceList from './SourceList';
import RelatedQuestions from './RelatedQuestions';
import FollowUpInput from './FollowUpInput';

export default function MainContent() {
  return (
    <div className="max-w-3xl mx-auto w-full mt-8 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">price plans for bolt.new</h1>
      
      <div className="bg-gray-100 dark:bg-[#2C2C2C] rounded-xl p-6 transition-colors">
        <SourceList />
        
        <div className="prose dark:prose-invert">
          <p className="text-gray-800 dark:text-gray-200">
            Based on the search results provided, there is no specific pricing information available for bolt.new
            (the web development platform). Bolt.new is a development platform by StackBlitz, but the search results
            only contain information about Bolt ride-hailing services in various African markets and Servebolt hosting
            services. These are different companies and services that are unrelated to bolt.new.
          </p>
          
          <p className="text-gray-800 dark:text-gray-200 mt-4">
            To get accurate pricing information for bolt.new:
          </p>
          
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200">
            <li>Visit the official bolt.new website</li>
            <li>Create an account to view available plans</li>
            <li>Contact their sales team for detailed pricing information</li>
          </ul>
          
          <p className="text-gray-800 dark:text-gray-200 mt-4">
            I cannot make specific claims about their pricing structure without accurate information about their
            plans and costs.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center gap-2 transition-colors">
            <MessageCircle size={18} />
            <span className="text-sm">Follow-up</span>
          </button>
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center gap-2 transition-colors">
            <Share2 size={18} />
          </button>
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center gap-2 transition-colors">
            <Copy size={18} />
          </button>
          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white ml-auto transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      <RelatedQuestions />
      <FollowUpInput />
    </div>
  );
}