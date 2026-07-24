const items = [
  "Quality Without Compromise",
  "Sustainable Living",
  "30 Years of Excellence",
  "North America · Europe · Asia",
  "Community-Centered Design",
  "Debt-Free Development",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden rounded-full bg-rust py-3 shadow-lg">
      <div className="flex w-max animate-marquee gap-3 whitespace-nowrap font-serif text-sm italic text-white/90">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="not-italic text-gold">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
