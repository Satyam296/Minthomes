"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    category: "Real Estate",
    date: "June 2025",
    readTime: "5 min read",
    title: "Home Buyer's Perception of Promoters in India",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Sustainability",
    date: "June 2025",
    readTime: "5 min read",
    title: "Building a Sustainable Lifestyle: The Zero-Carbon Homes Revolution",
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Interest Rates",
    date: "June 2025",
    readTime: "5 min read",
    title: "How Interest Rates in the United States Affect Housing Market",
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
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
          From Our <span className="italic text-gold">Desk</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal shadow">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-charcoal/50">
                  {post.date} · {post.readTime}
                </p>
                <p className="mt-2 font-serif text-lg leading-snug text-charcoal transition-colors duration-300 group-hover:text-maroon">
                  {post.title}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage text-[10px] font-semibold text-white">
                      MH
                    </span>
                    <span className="text-xs text-charcoal/60">
                      MintHomes Editorial
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-maroon transition-all duration-300 group-hover:gap-2"
                  >
                    Read more
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
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-maroon/90 hover:shadow-lg hover:shadow-maroon/30 active:scale-95"
          >
            Read more Blogs
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
    </section>
  );
}
