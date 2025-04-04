"use client";
import PageTransition from '../components/PageTransition';

export default function Publications() {
  const publications = [
    {
      type: "Journal Articles & Preprints",
      items: [
        // {
        //   title: "Identification and characterization of tRNA (Cm6) methyltransferase from Thermococcus kodakarensis",
        //   authors: "T. Matsuda, R. Yamagami, A. Ihara, T. Suzuki, A. Hirata, H. Hori",
        //   status: "Under review",
        //   journal: "bioRxiv, Nucleic Acids Research",
        //   year: "2025",
        //   date: "2025-04"
        // },
        {
          title: "Rational design of oligonucleotides for enhanced in vitro transcription of small RNA",
          authors: "T. Matsuda, H. Hori, R. Yamagami",
          journal: "RNA",
          year: "2024",
          volume: "30(6): 710-727",
          doi: "https://rnajournal.cshlp.org/content/30/6/710.long",
          date: "2024-05"
        }
      ].sort((a, b) => new Date(b.date) - new Date(a.date))
    },
    {
      type: "Conference Presentations",
      items: [
        {
          title: "Identification and characterization of tRNA (Cm6) methyltransferase from Thermococcus kodakarensis",
          authors: "T. Matsuda, R. Yamagami, A. Ihara, T. Suzuki, A. Hirata, H. Hori",
          venue: "29th tRNA Conference, Kanazawa",
          date: "Nov 2024",
          sortDate: "2024-11",
          type: "International, Poster"
        },
        {
          title: "Thermococcus kodakarensisのtRNAの6位を2'-O-メチル化する新規tRNAメチル化酵素の発見",
          authors: "松田 哲平, 山上 龍太, 鈴木 健夫, 平田 章, 堀 弘幸",
          venue: "日本Archaea研究会 第36回講演会, Kyoto",
          date: "Jul 2024",
          sortDate: "2024-07",
          type: "Domestic, Oral"
        },
        {
          title: "ROCKET: a Python tool to enhanced in vitro transcription of short RNAs",
          authors: "T. Matsuda, H. Hori, R. Yamagami",
          venue: "ISNAC2023, Miyazaki",
          date: "Nov 2023",
          sortDate: "2023-11",
          type: "International, Poster"
        },
        {
          title: "Rational design of oligonucleotides in template DNA construction for in vitro RNA transcription",
          authors: "T. Matsuda, H. Hori, R. Yamagami",
          venue: "第24回 日本RNA学会年会, Okinawa",
          date: "Jul 2023",
          sortDate: "2023-07",
          type: "Domestic, Poster"
        },
        {
          title: "tRNAの6位を2'-O-メチル化する新規酵素の発見",
          authors: "松田 哲平, 山上 龍太, 鈴木 健夫, 平田 章, 堀 弘幸",
          venue: "第64回 日本生化学会 中国・四国支部例会, Ehime",
          date: "May 2023",
          sortDate: "2023-05",
          type: "Domestic, Oral"
        }
      ].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate))
    },
    {
      type: "Invited Talks & Seminars",
      items: [
        {
          title: "Thermococcus kodakarensis tRNAのアミノアシルステムにおける修飾ネットワークの解析",
          venue: "徳島大学セミナー",
          date: "Dec 2024",
          sortDate: "2024-12",
          type: "Domestic, Oral"
          
        },
        {
          title: "Thermococcus kodakarensisのtRNAの6位を2'-O-メチル化する新規tRNAメチル化酵素の同定と解析",
          venue: "琉球大学医学部セミナー",
          date: "Apr 2024",
          sortDate: "2024-04",
          type: "Domestic, Oral"
        },
        {
          title: "短いRNAの試験管内転写を効率化するためのPythonツールの開発",
          venue: "愛媛大学合同セミナー",
          date: "Oct 2023",
          sortDate: "2023-10",
          type: "Domestic, Oral"
        }
      ].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate))
    },
    {
      type: "Software & Awards",
      items: [
        {
          category: "Awards",
          entries: [
            { name: "Sasakawa Scientific Research Grant (2025/4-2026/2)", year: 2025 },
            { name: "JST EU SPRING program (2025/4-2027/3)", year: 2025 }
          ].sort((a, b) => b.year - a.year)
        },
        {
          category: "Software",
          entries: [
            {
              name: "NuMSForge",
              description: "RNA mass spectrometry analysis tools",
              link: "https://github.com/TEPPEI-MAT/NuMSForge"
            },
            {
              name: "ROCKET",
              description: "DNA template design tool for in vitro transcription",
              link: "https://github.com/TEPPEI-MAT/ROCKET.git"
            }
          ]
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold text-emerald-600 mb-6">Publications & Resources</h1>
        
        {publications.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{section.type}</h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  {/* Journal Articles & Preprints */}
                  {section.type === "Journal Articles & Preprints" && (
                    <div className="space-y-1">
                      <div className="font-medium text-emerald-600">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.authors}</div>
                      <div className="text-sm text-gray-500">
                        {item.journal} ({item.year}) {item.volume}
                        {item.status && ` - ${item.status}`}
                        {item.doi && (
                          <a href={item.doi} target="_blank" rel="noopener noreferrer" 
                             className="ml-2 text-emerald-600 hover:text-emerald-700">
                            [Link]
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Conference Presentations */}
                  {section.type === "Conference Presentations" && (
                    <div className="space-y-1">
                      <div className="font-medium text-emerald-600">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.authors}</div>
                      <div className="text-sm text-gray-500 flex justify-between items-center">
                        <span>{item.venue}</span>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                  )}

                  {/* Invited Talks */}
                  {section.type === "Invited Talks & Seminars" && (
                    <div className="space-y-1">
                      <div className="font-medium text-emerald-600">{item.title}</div>
                      <div className="text-sm text-gray-500 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{item.venue} - {item.date}</span>
                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                            {item.type}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Software & Awards */}
                  {section.type === "Software & Awards" && (
                    <div>
                      <div className="font-medium text-emerald-600 mb-2">{item.category}</div>
                      <div className="space-y-2">
                        {item.entries.map((entry, entryIndex) => (
                          <div key={entryIndex} className="text-sm">
                            {entry.link ? (
                              <div>
                                <span className="font-medium">{entry.name}</span> - {entry.description}
                                <a href={entry.link} target="_blank" rel="noopener noreferrer" 
                                   className="ml-2 text-emerald-600 hover:text-emerald-700">[GitHub]</a>
                              </div>
                            ) : (
                              <div className="text-gray-700">{entry.name}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </PageTransition>
  );
}