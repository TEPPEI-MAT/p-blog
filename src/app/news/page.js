"use client";

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import PageTransition from '../components/PageTransition';

// カテゴリーの色定義
const categoryColors = {
  Research: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    selected: 'bg-blue-600',
    hover: 'hover:bg-blue-100'
  },
  Publication: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    selected: 'bg-violet-600',
    hover: 'hover:bg-violet-100'
  },
  Conference: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    selected: 'bg-emerald-600',
    hover: 'hover:bg-emerald-100'
  },
  Award: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    selected: 'bg-amber-600',
    hover: 'hover:bg-amber-100'
  },
  Release: {
    bg: 'bg-orange-50',
    text: 'text-orange-600',
    selected: 'bg-orange-600',
    hover: 'hover:bg-orange-100'
  },
  Transitions: {
    bg: 'bg-rose-50',
    text: 'text-rose-600',
    selected: 'bg-rose-600',
    hover: 'hover:bg-rose-100'
  },
  Link: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-600',
    selected: 'bg-cyan-600',
    hover: 'hover:bg-cyan-100'
  },
  etc: {
    bg: 'bg-slate-50',
    text: 'text-slate-600',
    selected: 'bg-slate-600',
    hover: 'hover:bg-slate-100'
  }
};

const newsItems = [
  {
    date: "2025-04-04",
    categories: ["Research", "Publication", "Link"],
    title: "A preprint has been released on bioRxiv",
    description: "Our preprint is now available on bioRxiv. Please see the link below for more information.",
    link: "https://www.biorxiv.org/content/10.1101/2025.04.03.647152v1"
  },
  {
    date: "2025-04-01",
    categories: ["Research", "Award"],
    title: "Received Sasakawa Scientific Research Grant",
    description: "I received the Sasakawa Scientific Research Grant from the Japan Science Society. Thank you very much.",
  },
  {
    date: "2025-03-25",
    categories: ["Research", "Award"],
    title: "Accepted to EU SPRING Program",
    description: "I was accepted to the EU SPRING program by JST. Thank you very much.",
  },
  {
    date: "2025-04-01",
    categories: ["Transitions"],
    title: "Entered the doctoral course at Ehime University",
    description: "I entered the doctoral course at Ehime University. Research.",
  },
  {
    date: "2025-04-01",
    categories: ["Transitions"],
    title: "New Laboratory Structure Launched",
    description: "Our laboratory has been reorganized as the Biomolecular Engineering Laboratory.",
  },
  {
    date: "2025-01-21",
    categories: ["Release", "Link"],
    title: "NuMSForge Released",
    description: "Released new RNA mass spectrometry analysis tools.",
    link: "https://github.com/TEPPEI-MAT/NuMSForge"
  },

  // March 2024
  {
    date: "2024-03-25",
    categories: ["Award"],
    title: "Selected for JST Next Generation Research Program",
    description: "Our research project has been selected for the EU SPRING program by JST.",
  },
  {
    date: "2024-07-08",
    categories: ["Research"],
    title: "Experiment in Okinawa",
    description: "Experiments were conducted under the supervision of Dr. Takeo Suzuki of the University of the Ryukyus. Thank you very much.",
  },
  {
    date: "2024-11",
    categories: ["Conference"],
    title: "29th tRNA Conference",
    description: "Presented our research on novel RNA modification enzyme at 29th tRNA Conference in Kanazawa, Japan.",
  },
  {
    date: "2024-04-18",
    categories: ["Research", "Conference", "etc"],
    title: "Seminar at University of the Ryukyus",
    description: "Presented our research on novel RNA modification enzyme at University of the Ryukyus.",
  },
  {
    date: "2024-12-12",
    categories: ["Research", "Conference", "etc"],
    title: "Seminar at Tokushima University",
    description: "Presented our research on novel RNA modification enzyme at University of the Ryukyus.",
  },
  {
    date: "2024-07-04",
    categories: ["Conference"],
    title: "日本Archaea研究会 第36回講演会 in Kyoto",
    description: "Oral presentation at the 36th Annual Meeting of the Archaea Research Society of Japan held in Kyoto, Japan.",
  },
  {
    date: "2024-02-29",
    categories: ["Publication", "Link"],
    title: "Research Published in RNA",
    description: "Our work on RNA in vitro transcription has been published in RNA. Please see the link below for more information.",
    link: "https://rnajournal.cshlp.org/content/30/6/710.long"
  },
  {
    date: "2024-02-14",
    categories: ["Release", "Link"],
    title: "ROCKET Released",
    description: "DNA template design tool for in vitro transcription was released. Please see the GitHub repository for more information.",
    link: "https://github.com/TEPPEI-MAT/ROCKET"
  },

  
];

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const allCategories = [
    "Research",
    "Publication",
    "Conference",
    "Award",
    "Release",
    "Transitions",
    "Link",
    "etc"
  ];

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredNews = newsItems
    .filter(item => {
      const matchesSearch = 
        (item.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (item.description?.toLowerCase() || '').includes(searchQuery.toLowerCase());

      const matchesCategories = 
        selectedCategories.length === 0 ||
        selectedCategories.every(cat => item.categories?.includes(cat));

      const itemDate = new Date(item.date);
      const matchesDateRange = 
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);

      return matchesSearch && matchesCategories && matchesDateRange;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); 

  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6">
          News
        </h1>

        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative min-w-[200px] flex-1">
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-50 text-sm"
              />
              <svg
                className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 flex-1">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200
                    ${selectedCategories.includes(category)
                      ? `${categoryColors[category].selected} text-white shadow-sm`
                      : `${categoryColors[category].bg} ${categoryColors[category].text} ${categoryColors[category].hover}`
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => setDateRange(update)}
                isClearable={true}
                customInput={
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                }
                dateFormat="yyyy/MM/dd"
              />
              {(startDate || endDate) && (
                <div className="absolute top-[-4px] right-[-4px] h-3 w-3 bg-emerald-500 rounded-full border-2 border-white" />
              )}
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredNews.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <time className="text-sm text-gray-500 whitespace-nowrap">
                    {item.date}
                  </time>
                  <div className="flex flex-wrap gap-1.5">
                    {item.categories?.map(category => (
                      <span
                        key={category}
                        className={`px-2 py-0.5 text-xs font-medium rounded-full
                          ${categoryColors[category].bg} ${categoryColors[category].text}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold text-gray-800 group">
                  {item.title}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center text-cyan-600 hover:text-cyan-500"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </h2>
                
                {item.description && (
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}

          {filteredNews.length === 0 && (
            <div className="text-center text-gray-500 py-6 bg-white rounded-lg border border-gray-200">
              No news items found matching your search criteria.
            </div>
          )}
        </div>
      </main>
    </PageTransition>
  );
} 