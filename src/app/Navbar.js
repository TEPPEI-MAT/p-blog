'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Publications / Resources", path: "/publications" },
    { name: "About / CV", path: "/cv" },
    { name: "News", path: "/news" },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-end items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative px-2 py-1 text-lg font-medium transition-colors duration-200
                ${isActive(item.path) 
                  ? 'text-emerald-600' 
                  : 'text-gray-700 hover:text-emerald-600'
                }
                group
              `}
            >
              {item.name}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 transform transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-emerald-600'
                    : 'bg-emerald-600 scale-x-0 group-hover:scale-x-100'
                  }
                `}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}