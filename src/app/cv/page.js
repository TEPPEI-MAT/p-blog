"use client";
import PageTransition from '../components/PageTransition';

export default function CV() {
  const education = [
    {
      degree: "Ph.D. Student in Engineering",
      institution: "Ehime University",
      period: "2025 - Present",
    },
    {
      degree: "Master of Engineering",
      institution: "Ehime University",
      period: "2023 - 2025",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Ehime University",
      period: "2019 - 2023",
    },
    // {
    //   degree: "Ph.D. Student in Engineering",
    //   institution: "Ehime University",
    //   period: "2025 - Present",
    //   details: "RNA Biology and Bioinformatics"
    // },
  ];

  const skills = [
    {
      category: "Research Skills",
      items: [
        "RNA Mass Spectrometry",
        "Biochemical Analysis",
        "Bioinformatics",
        "Tool Development"
      ]
    },
    {
      category: "Programming",
      items: [
        "Python (Data Analysis, ML/DL)",
        "R (Statistical Analysis)",
        "Java (Backend, Tools)",
        "JavaScript (React, Next.js)"
      ]
    }
  ];

  const awards = [
    {
      name: "Sasakawa Scientific Research Grant (2025/4-2026/2)",
      year: "2025"
    },
    {
      name: "JST EU SPRING program (2025/4-2027/3)",
      year: "2025"
    }
  ];

  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6">
          Curriculum Vitae
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
          <div className="bg-white rounded-lg shadow border border-gray-200">
            {education.map((edu, index) => (
              <div key={index} className={`p-4 ${index !== education.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-emerald-600">{edu.degree}</h3>
                  <span className="text-gray-500 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-gray-600 text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Research Experience</h2>
          {/* ... 研究経験の内容 ... */}
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid gap-4">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {skillGroup.items.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="text-emerald-500">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Awards & Honors</h2>
          <div className="bg-white rounded-lg shadow border border-gray-200">
            {awards.map((award, index) => (
              <div key={index} className={`p-4 ${index !== awards.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-emerald-600">{award.name}</h3>
                  <span className="text-gray-500 text-sm">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}