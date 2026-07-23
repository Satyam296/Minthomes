import Image from "next/image";

const locations = [
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=600&auto=format&fit=crop",
    alt: "Santorini coastal town",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop",
    alt: "City skyline at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    alt: "Aerial view of coastline",
  },
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600&auto=format&fit=crop",
    alt: "Scenic travel landscape",
  },
];

export default function LocationStrip() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6 md:gap-6">
        {locations.map((location) => (
          <div
            key={location.src}
            className="relative h-24 w-36 overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl md:h-32 md:w-52"
          >
            <Image
              src={location.src}
              alt={location.alt}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-xl px-6 text-center text-sm text-charcoal/70">
        From coastal escapes to city skylines, Mint Homes is redefining
        living across the globe.
      </p>
    </section>
  );
}
