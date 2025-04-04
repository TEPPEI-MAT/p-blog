"use client";
import { FaGithub } from "react-icons/fa";
import PageTransition from '../components/PageTransition';

const researchAreas = [
  {
    title: "RNA Modification Analysis",
    description: "RNA modifications play crucial roles in regulating RNA function and stability. Our research combines mass spectrometry and biochemical approaches to identify and characterize novel RNA modifications.",
    details: [
      "Identification and characterization of novel tRNA modification enzymes",
      "Comprehensive analysis of RNA modifications using mass spectrometry",
      "Investigation of physiological roles of RNA modifications"
    ],
    image: "🧬"
  },
  {
    title: "Computational Tool Development",
    description: "We develop computational tools to streamline RNA research, focusing on optimizing RNA transcription experiments and analyzing RNA mass spectrometry data.",
    details: [
      "RNA transcription optimization tool (ROCKET)",
      "Mass spectrometry data analysis tool (NuMSForge)",
    ],
    image: "💻"
  },
  {
    title: "Biochemical Analysis",
    description: "Using biochemical approaches, we aim to elucidate the function and regulatory mechanisms of RNA modification enzymes.",
    details: [
      "Analysis of substrate specificity of RNA modification enzymes",
      "Structure-activity relationship studies",
      "Investigation of RNA-protein interactions"
    ],
    image: "🧪"
  }
];

// const currentProjects = [
//   {
//     title: "Functional Analysis of Novel tRNA Modification Enzymes",
//     status: "Ongoing",
//     collaboration: "International Research Collaboration",
//     funding: "Sasagawa Scientific Research Grant"
//   },
//   {
//     title: "Development of RNA Mass Spectrometry Analysis Pipeline",
//     status: "Ongoing",
//     collaboration: "Open Source Project",
//     funding: "EU SPRING"
//   }
// ];

// Updated tool data structure in English
const tools = [
  {
    name: "ROCKET",
    description: "DNA template design tool for in vitro transcription",
    url: "https://github.com/TEPPEI-MAT/ROCKET",
  },
  {
    name: "NuMSForge",
    description: "RNA mass spectrometry analysis tools",
    url: "https://github.com/TEPPEI-MAT/NuMSForge",
  }
];

export default function Research() {
  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-emerald-600 mb-4">Research</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            I focus on understanding RNA function and regulatory mechanisms through 
            the analysis of RNA modifications and development of computational tools. 
            By combining cutting-edge mass spectrometry technology with bioinformatics approaches, 
            I aim to provide new insights into RNA biology.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Areas</h2>
          <div className="grid gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{area.image}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-emerald-600 mb-2">{area.title}</h3>
                    <p className="text-gray-700 mb-4">{area.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {area.details.map((detail, i) => (
                        <li key={i} className="text-sm">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Projects</h2>
          <div className="grid gap-4">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h3 className="text-lg font-medium text-emerald-600 mb-2">{project.title}</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 font-medium">Status:</span>
                    <span className="ml-2 inline-block bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs">
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Collaboration:</span>
                    <span className="ml-2 text-gray-700">{project.collaboration}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Funding:</span>
                    <span className="ml-2 text-gray-700">{project.funding}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-600 mb-6">
            Software Tools
          </h2>
          <div className="grid gap-4">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm 
                  hover:shadow-md hover:border-emerald-300 transition-all duration-200
                  group relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-emerald-600 group-hover:text-emerald-700">
                        {tool.name}
                      </h3>
                      <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200">
                        GitHub
                      </span>
                      <span className="ml-2 text-gray-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{tool.description}</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-emerald-500 ml-4">
                    <FaGithub className="text-2xl" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-2">
              * All tools are publicly available on GitHub as open-source software.
            </p>
            <p>
              * Detailed documentation and usage instructions can be found in each GitHub repository.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}