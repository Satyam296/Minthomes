import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden md:h-[480px]">
      <Image
        src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop"
        alt="Warm modern living room interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-offwhite md:text-5xl">
          Your Next Address Could Be <span className="italic text-gold">Anywhere</span>
        </h2>
        <p className="max-w-md text-sm text-offwhite/90">
          Discover residences crafted for the way you want to live, in
          locations that inspire you every day.
        </p>
        <a
          href="#"
          className="mt-2 rounded-full bg-gold px-8 py-3 text-sm font-medium text-charcoal transition-all duration-300 hover:scale-105 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30 active:scale-95"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
}
