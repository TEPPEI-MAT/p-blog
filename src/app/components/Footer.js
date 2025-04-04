import { FaGithub } from 'react-icons/fa';
import { HiOutlineAcademicCap } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a 
              href="https://github.com/TEPPEI-MAT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a 
              href="https://sites.google.com/view/bchem-ehime-top/%E7%94%9F%E7%89%A9%E5%88%86%E5%AD%90%E5%B7%A5%E5%AD%A6%E3%83%88%E3%83%83%E3%83%97" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <HiOutlineAcademicCap className="text-2xl" />
            </a>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-500 space-y-2">
            <p>© 2024 Teppei Matsuda. All rights reserved.</p>
            <p>Built with React & Next.js by Teppei Matsuda</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 