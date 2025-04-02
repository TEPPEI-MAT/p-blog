import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Researcher Name | Academic CV",
  description: "Personal academic website for Researcher Name.TEPPEPPEP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="container max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
