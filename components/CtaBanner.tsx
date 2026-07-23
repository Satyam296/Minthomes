import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden md:h-[480px]">
      <Image
        src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000&auto=format&fit=crop"
        alt="Warm living room interior with framed wall art and plants"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 px-6 text-center">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-offwhite md:text-5xl">
          Your Next Address Could Be Anywhere
        </h2>
        <p className="max-w-md text-sm text-offwhite/90">
          From serene retreats to vibrant city residences, every MintHomes
          space is designed with the same commitment to comfort, care, and
          quiet luxury.
        </p>
        <a
          href="#"
          className="group mt-2 inline-flex items-center gap-2 rounded-full bg-maroon px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-maroon/90 hover:shadow-xl hover:shadow-maroon/30 active:scale-95"
        >
          Find your Next Home
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
    </section>
  );
}
