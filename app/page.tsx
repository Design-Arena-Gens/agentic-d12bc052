import Header from '@/components/Header';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import Carousel from '@/components/Carousel';

export default function Page() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white"
        aria-labelledby="hero-title"
      >
        {/* Decorative shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-emerald-200/60 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 container-px pb-16 pt-24 sm:pt-28 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-24">
          <div className="animate-fade-in">
            <h1 id="hero-title" className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Engineering digital solutions that move business forward
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-slate-600">
              Iceem partners with organizations to design, build, and scale modern products and platforms. From strategy to delivery, we create measurable impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">Get a Quote</a>
              <a href="#services" className="btn-secondary">Our Services</a>
            </div>
            <div className="mt-6 text-sm text-slate-500">Fast ? Secure ? Accessible ? Cloud-ready</div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[16/11] w-full max-w-xl overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft">
              {/* Simple illustrative graphic */}
              <svg viewBox="0 0 600 400" className="h-full w-full" role="img" aria-label="Engineers collaborating digitally">
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="600" height="400" fill="#f0f9ff" />
                <rect x="40" y="40" width="520" height="320" rx="12" fill="#fff" stroke="#bae6fd" />
                <rect x="60" y="80" width="140" height="20" rx="6" fill="#e2e8f0" />
                <rect x="60" y="120" width="220" height="12" rx="6" fill="#e2e8f0" />
                <rect x="60" y="140" width="260" height="12" rx="6" fill="#e2e8f0" />
                <rect x="60" y="160" width="200" height="12" rx="6" fill="#e2e8f0" />
                <circle cx="470" cy="200" r="70" fill="url(#lg)" opacity="0.15" />
                <circle cx="490" cy="220" r="50" fill="url(#lg)" opacity="0.25" />
                <circle cx="450" cy="240" r="40" fill="url(#lg)" opacity="0.35" />
                <path d="M120 300 Q 160 260 220 300 T 340 300" fill="none" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        title="What we do"
        subtitle="End-to-end services to turn ideas into robust, scalable solutions."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="Product Strategy"
            description="Discovery, roadmapping, and validation to align technology with business outcomes."
          />
          <ServiceCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 6l8-2 8 2v10l-8 4-8-4V6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Cloud & DevOps"
            description="Infrastructure-as-code, CI/CD, observability, and cost-efficient cloud architectures."
          />
          <ServiceCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="Web & Mobile Apps"
            description="Accessible, responsive experiences built with modern frameworks and best practices."
          />
          <ServiceCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M8.76 18.36l-2.83 2.83m12.02 0l-2.83-2.83M8.76 5.64L5.93 2.81" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="Systems Integration"
            description="API design, data pipelines, and secure integration across platforms and vendors."
          />
          <ServiceCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 4h16v8H4z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 20l-2-4h8l-2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="UI/UX Design"
            description="Human-centered design with strong visual identity and inclusive interaction patterns."
          />
          <ServiceCard
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 10l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
            title="Support & Growth"
            description="Monitoring, performance tuning, A/B testing, and continuous improvement loops."
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="What our clients say">
        <Carousel
          items={[
            {
              quote:
                'Iceem helped us modernize our stack and ship faster than ever ? outstanding partnership.',
              author: 'Amine B.',
              role: 'CTO, Fintech'
            },
            {
              quote:
                'From discovery to launch, the team delivered with precision and care. Results speak for themselves.',
              author: 'Nadia K.',
              role: 'Product Lead, Retail'
            },
            {
              quote:
                'Exceptional engineering standards and a relentless focus on accessibility and performance.',
              author: 'Rami S.',
              role: 'Head of Digital, Public Sector'
            }
          ]}
        />
      </Section>

      {/* CTA */}
      <Section
        id="contact"
        title="Ready to build what matters?"
        subtitle="Tell us about your goals. We will get back to you within one business day."
      >
        <div className="flex flex-wrap items-center gap-3">
          <a className="btn-primary" href="mailto:contact@iceem.tn" aria-label="Email Iceem">
            Contact Us
          </a>
          <a className="btn-secondary" href="tel:+21600000000" aria-label="Call Iceem">
            +216 00 000 000
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl container-px py-10">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden>
                <defs>
                  <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <rect width="64" height="64" rx="14" fill="url(#g3)" />
                <path d="M18 40l8-16 6 10 6-10 8 16" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-base font-semibold tracking-tight text-slate-900">Iceem</span>
            </div>
            <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <li>
                <a className="hover:text-slate-900" href="mailto:contact@iceem.tn">contact@iceem.tn</a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="tel:+21600000000">+216 00 000 000</a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener">LinkedIn</a>
              </li>
              <li>
                <a className="hover:text-slate-900" href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">Facebook</a>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-xs text-slate-500">? {new Date().getFullYear()} Iceem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
