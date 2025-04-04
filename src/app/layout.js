import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Teppei Matsuda | Research",
  description: "Personal academic website of Teppei Matsuda, Ph.D. Student at Ehime University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow container max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
