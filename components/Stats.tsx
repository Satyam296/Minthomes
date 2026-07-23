"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "30+", label: "Years of Legacy", sub: "Founded 1994" },
  { value: "3", label: "Continents", sub: "Americas · Europe · Asia" },
  { value: "200+", label: "Completed Projects", sub: "Across sister group" },
  { value: "0", label: "Debt on Projects", sub: "Always debt-free" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div
        ref={containerRef}
        className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-charcoal/10 px-6 md:grid-cols-4 md:divide-y-0"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-item flex flex-col items-center gap-1 px-6 py-6 text-center opacity-0"
          >
            <p className="font-serif text-5xl text-gold md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-charcoal">
              {stat.label.toUpperCase()}
            </p>
            <p className="text-xs text-charcoal/50">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
