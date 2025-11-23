import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between container-px py-4">
        <Link href="#" aria-label="Iceem home" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#0ea5e9" />
                <stop offset="1" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="14" fill="url(#g2)" />
            <path d="M18 40l8-16 6 10 6-10 8 16" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Iceem</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" href="#services">Services</a>
          <a className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" href="#testimonials">Testimonials</a>
          <a className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary">Get a Quote</a>
        </div>
      </div>
    </header>
  );
}
