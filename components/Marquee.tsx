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
    <div className="overflow-hidden rounded-full border border-charcoal/10 bg-offwhite py-3">
      <div className="flex w-max animate-marquee gap-3 whitespace-nowrap text-sm text-charcoal/80">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="text-gold">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
