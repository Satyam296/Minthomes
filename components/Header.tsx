export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <span className="font-serif text-2xl font-semibold text-charcoal">
          MintHomes
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

        <button className="rounded-full bg-maroon px-6 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-maroon/90 hover:shadow-lg hover:shadow-maroon/30 active:scale-95">
          Enquire Now
        </button>
      </div>
    </header>
  );
}
