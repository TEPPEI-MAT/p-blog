export default function Home() {
  return (
    <div className="text-center">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg border"
      />
      <h1 className="text-4xl font-bold text-blue-800 mb-2">Researcher Name</h1>
      <h2 className="text-xl text-gray-600 mb-4">Title / Position</h2>
      <p className="text-lg leading-relaxed">
        Field: Computational Biology, tRNA Modifications, RNA Mass Spectrometry
      </p>
    </div>
  );
}