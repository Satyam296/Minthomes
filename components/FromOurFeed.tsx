"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    category: "Architecture",
    title: "Living in Harmony: The Principles of Purposeful Architecture",
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Interior Design",
    title: "Crafting Comfort: Interior Trends Reshaping Modern Homes",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Real Estate",
    title: "Smart Investments: A Buyer's Guide to Real Estate in 2026",
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FromOurFeed() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-cream py-20 md:py-24">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-6 opacity-0">
        <p className="text-xs font-semibold tracking-[0.2em] text-sage">
          LATEST UPDATES
        </p>
        <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
          From Our <span className="italic text-gold">Feed</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wide text-sage">
                  {post.category}
                </p>
                <p className="mt-3 font-serif text-lg leading-snug text-charcoal">
                  {post.title}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-maroon transition-all duration-300 group-hover:gap-3"
                >
                  Read More
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 5H13M13 5L9 1M13 5L9 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
