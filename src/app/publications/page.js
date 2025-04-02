const publications = [
  {
    title: "Title of Paper 1",
    venue: "Nature, 2023",
    link: "https://example.com/paper1",
  },
  {
    title: "Title of Paper 2",
    venue: "Conference ABC, 2022",
    link: "https://example.com/paper2",
  },
];

export default function Publications() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Publications</h1>
      <ul className="list-disc list-inside space-y-4">
        {publications.map((pub, idx) => (
          <li key={idx} className="text-lg leading-relaxed">
            <span className="font-semibold">{pub.title}</span>, {pub.venue}.{' '}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Paper
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}