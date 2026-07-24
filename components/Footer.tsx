const navigate = [
  { label: "About Us", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const projects = [
  { label: "North America", href: "#" },
  { label: "India", href: "#" },
  { label: "Europe", href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.5H16l.5-3.2h-3V8.2c0-.93.26-1.56 1.6-1.56H16.6V3.8c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.04v2.58H7.8v3.2h2.5V21h3.2Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h3v12H3V9Zm6 0h2.9v1.64h.04c.4-.76 1.4-1.64 2.9-1.64 3.1 0 3.66 2.04 3.66 4.7V21h-3v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9V9Z",
  },
  {
    label: "X",
    href: "#",
    path: "M3 3l7.5 9.6L3.4 21H6l5.7-6.4L16.5 21H21l-8-10.2L20.4 3H18l-5.3 5.9L8.4 3H3Z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 md:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-2">
            <span className="flex items-center gap-2">
              <svg
                width="22"
                height="22"
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
              <span className="font-serif text-xl font-semibold text-navy">
                MintHomes
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/60">
              Crafting exceptional residences across North America, Europe,
              and Asia for thirty years and counting.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-charcoal/15 text-charcoal transition-all duration-300 hover:border-maroon hover:bg-maroon hover:text-white"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-maroon">
              NAVIGATE
            </p>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
              {navigate.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-sage">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-maroon">
              PROJECTS
            </p>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
              {projects.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-sage">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-maroon">
              CONTACT
            </p>
            <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 shrink-0 text-sage"
                >
                  <path
                    d="M3 6h18v12H3V6Zm0 0 9 7 9-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                info@minthomes.com
              </li>
              <li className="flex items-start gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 shrink-0 text-sage"
                >
                  <path
                    d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                1451 Cornerstone Village Dr, Suite 100, Houston, Texas 77014
              </li>
            </ul>

            <p className="mt-6 text-xs font-semibold tracking-[0.15em] text-maroon">
              SISTER COMPANY
            </p>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-1 text-sm text-charcoal/70 transition-colors hover:text-maroon"
            >
              Big Development Corporation
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17 17 7M17 7H9M17 7v8"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-charcoal/10 py-6 text-xs text-charcoal/50 sm:flex-row">
          <p>© 2026 MintHomes. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-sage">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-sage">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
