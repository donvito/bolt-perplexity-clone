import React from 'react';
import { Plus } from 'lucide-react';

const questions = [
  'What are the different price plans available for Bolt',
  'How do the price plans for Bolt compare to other ride-hailing services',
  'Are there any discounts for long-term commitments with Bolt',
  'How often does Bolt update its pricing plans',
  'What factors influence the pricing adjustments on Bolt'
];

export default function RelatedQuestions() {
  return (
    <div className="bg-gray-100 dark:bg-[#2C2C2C] rounded-xl p-4 transition-colors">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Related</h2>
      <div className="space-y-2">
        {questions.map((question, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-[#3C3C3C] text-left group transition-colors"
          >
            <span className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-900 dark:group-hover:text-white">{question}</span>
            <Plus size={16} className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </button>
        ))}
      </div>
    </div>
  );
}