export default function Research() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Research</h1>
        <p className="text-lg leading-relaxed mb-4">
          I investigate RNA modifications using mass spectrometry and novel sequencing techniques.
          My recent work involves pulsed-labeling analysis of tRNA dynamics and automated base
          composition prediction from MS data.
        </p>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Recent Projects</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Development of HILIC-MS pipeline for tRNA modification analysis</li>
            <li>Automated annotation software for RNA MS spectra</li>
            <li>Pulsed tRNA tracking and functional correlation</li>
          </ul>
        </div>
      </div>
    );
  }