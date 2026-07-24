export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-cream px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-charcoal/10 bg-white/95 px-6 py-3 shadow-lg backdrop-blur md:px-8">
        <span className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-navy"
          >
            <path
              d="M5 4.5c2 1.6 4.3 2.3 7 2.3s5-.7 7-2.3V11c0 5-3 8.6-7 10.5-4-1.9-7-5.5-7-10.5V4.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-serif text-2xl font-semibold text-navy">
            MintHomes
          </span>
        </span>

        <nav className="hidden items-center gap-8 text-sm font-medium text-charcoal md:flex">
          <a href="#" className="hover:text-sage">
            About
          </a>
          <div className="flex items-center gap-1 hover:text-sage">
            <a href="#">Projects</a>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <a href="#" className="hover:text-sage">
            Blogs
          </a>
        </nav>

        <button className="group inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-maroon/90 hover:shadow-lg hover:shadow-maroon/30 active:scale-95">
          Enquire Now
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
        </button>
      </div>
    </header>
  );
}
