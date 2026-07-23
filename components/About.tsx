"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
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
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 items-center gap-12 opacity-0 md:grid-cols-2 md:gap-16"
        >
          <div className="relative h-96">
            <div className="absolute right-0 top-0 h-80 w-[85%] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop"
                alt="Hilltop coastal town on the Adriatic"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 h-44 w-56 overflow-hidden rounded-2xl border-4 border-cream shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop"
                alt="City skyline"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sage">
              ABOUT MINT HOMES
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Three Decades of
              <br />
              <span className="italic text-gold">Uncompromising</span>
              <br />
              Quality
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/70">
              Founded by Chairman Raj Natarajan, Mint Homes has spent thirty
              years developing exceptional residences that honour both the
              land they inhabit and the communities they serve. From
              Houston&apos;s urban neighbourhoods to the Adriatic coastline
              and the hills of Coimbatore, every home carries our signature
              hallmarks.
            </p>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-maroon/90 hover:shadow-lg hover:shadow-maroon/30 active:scale-95"
            >
              About Us
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
    </section>
  );
}
