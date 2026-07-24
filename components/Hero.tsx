"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out" },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-cream px-4 pb-2 pt-4 md:px-6">
      <div className="relative mx-auto h-[600px] max-w-7xl overflow-hidden rounded-3xl md:h-[720px]">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
          alt="Bright modern living room interior"
          fill
          priority
          className="object-cover"
        />

        <div
          ref={boxRef}
          className="absolute inset-y-6 left-6 flex w-[85%] flex-col justify-center gap-5 rounded-2xl bg-sage/90 p-8 opacity-0 shadow-xl sm:w-[60%] sm:p-10 md:inset-y-12 md:left-14 md:w-[40%] lg:w-[32%]"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-offwhite/80">
            · CELEBRATING 30 YEARS OF EXCELLENCE ·
          </p>

          <h1 className="font-serif text-4xl leading-tight text-offwhite md:text-5xl">
            Where
            <br />
            <span className="italic text-gold">Elegance</span>
            <br />
            Meets Purpose
          </h1>

          <p className="text-sm leading-relaxed text-offwhite/90">
            Mint Homes crafts community-centred residences across three
            continents — blending timeless architecture with a commitment to
            quality that never wavers.
          </p>
        </div>
      </div>
    </section>
  );
}
