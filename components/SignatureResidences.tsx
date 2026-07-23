"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const residences = [
  {
    name: "The Reserve",
    location: "Bandera, Texas",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mint Grand Residences",
    location: "Miami, Florida",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cliffside Manor",
    location: "Malibu, California",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "The Meridian",
    location: "Aspen, Colorado",
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function SignatureResidences() {
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
          OUR PORTFOLIO
        </p>
        <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
          Signature <span className="italic text-gold">Residences</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {residences.map((residence) => (
            <div
              key={residence.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden md:h-80">
                <Image
                  src={residence.src}
                  alt={residence.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="font-serif text-lg text-charcoal transition-colors duration-300 group-hover:text-maroon">
                  {residence.name}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">
                  {residence.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
