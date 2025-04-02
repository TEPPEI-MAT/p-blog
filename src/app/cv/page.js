export default function CV() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Curriculum Vitae</h1>
        <a
          href="/cv.pdf"
          download
          className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700"
        >
          Download PDF CV
        </a>
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Ph.D. in Bioinformatics, Ehime University, 202X</li>
            <li>M.Sc. in Biochemistry, Ehime University, 202X</li>
          </ul>
          {/* Additional sections: Experience, Awards, etc. */}
        </div>
      </div>
    );
  }