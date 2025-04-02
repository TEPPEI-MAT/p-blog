import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "CV", path: "/cv" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-700">
          Researcher Name
        </Link>
        <div className="space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}