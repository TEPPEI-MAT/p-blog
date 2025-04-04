"use client";

import { FaGithub } from 'react-icons/fa';
import { SiPython, SiJavascript, SiR } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { BiDna } from 'react-icons/bi';
import { TbMicroscope } from 'react-icons/tb';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-emerald-600 mb-4">
              Teppei Matsuda
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ph.D. Student at Ehime University, focusing on RNA biology and bioinformatics.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/TEPPEI-MAT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <FaGithub className="text-2xl mr-2" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="https://sites.google.com/view/bchem-ehime-top/%E7%94%9F%E7%89%A9%E5%88%86%E5%AD%90%E5%B7%A5%E5%AD%A6%E3%83%88%E3%83%83%E3%83%97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <HiOutlineAcademicCap className="text-2xl mr-2" />
                <span className="text-sm">Lab Website</span>
              </a>
            </div>
          </div>
          
          {/* News Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-emerald-600">Latest News</h2>
              <Link 
                href="/news" 
                className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                View all →
              </Link>
            </div>
            <div className="space-y-3">
              <div className="text-sm">
                <span className="text-emerald-600 font-medium">2025/4/1</span>
                <p className="text-gray-700">Received Sasakawa Scientific Research Grant</p>
              </div>
              <div className="text-sm">
                <span className="text-emerald-600 font-medium">2025/4/1</span>
                <p className="text-gray-700">Entered the doctoral course at Ehime University</p>
              </div>
              <div className="text-sm">
                <span className="text-emerald-600 font-medium">2025/4/1</span>
                <p className="text-gray-700">New Laboratory Structure Launched</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Focus */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-emerald-600 mb-4 flex items-center">
            <BiDna className="mr-2 text-2xl" /> Research Focus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Molecular Biology</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">RNA Modifications</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">tRNA Processing</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Mass Spectrometry</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Biochemistry</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Enzyme Analysis</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">RNA-Protein Interaction</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-3">Bioinformatics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">Tool Development</span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">MS Data Analysis</span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">Machine Learning</span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">Sequence Analysis</span>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Skills */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-emerald-600 mb-4 flex items-center">
            <TbMicroscope className="mr-2 text-2xl" /> Programming Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-2">
                <SiPython className="text-4xl text-blue-500 mx-auto" />
              </div>
              <h3 className="font-medium">Python</h3>
              <p className="text-sm text-gray-600">Data Analysis, ML/DL</p>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <SiR className="text-4xl text-blue-600 mx-auto" />
              </div>
              <h3 className="font-medium">R</h3>
              <p className="text-sm text-gray-600">Statistical Analysis</p>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <DiJava className="text-4xl text-red-500 mx-auto" />
              </div>
              <h3 className="font-medium">Java</h3>
              <p className="text-sm text-gray-600">Backend Development</p>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <SiJavascript className="text-4xl text-yellow-500 mx-auto" />
              </div>
              <h3 className="font-medium">JavaScript</h3>
              <p className="text-sm text-gray-600">Frontend (React)</p>
            </div>
          </div>
        </div>

        {/* Programming Skills の後に追加 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-emerald-600">Latest Publication</h2>
            <Link 
              href="/publications" 
              className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              View all →
            </Link>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Rational design of oligonucleotides for enhanced in vitro transcription of small RNA
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                <span className="underline decoration-2 decoration-emerald-600 font-medium">T. Matsuda</span>,
                H. Hori, R. Yamagami
              </p>
              <p className="text-gray-500 text-sm mb-3">RNA (2024) 30(6): 710-727</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">RNA Transcription</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Oligonucleotide Design</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">In Vitro Methods</span>
              </div>
              <div className="mt-3">
                <a 
                  href="https://rnajournal.cshlp.org/content/30/6/710.long"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Read Publication 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm text-gray-600">Published in RNA Journal</span>
                </div>
                <span className="text-sm text-gray-500">May 2024</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}