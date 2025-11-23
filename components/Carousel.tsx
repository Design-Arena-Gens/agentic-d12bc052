"use client";

import { useEffect, useRef, useState } from 'react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type CarouselProps = {
  items: Testimonial[];
  autoPlayMs?: number;
};

export default function Carousel({ items, autoPlayMs = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (nextIndex: number) => {
    setIndex((current) => {
      const total = items.length;
      return ((nextIndex % total) + total) % total;
    });
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => goTo(index + 1), autoPlayMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused, autoPlayMs]);

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <ul className="relative">
          {items.map((item, i) => (
            <li
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              className={`transition-opacity duration-500 ${i === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'}`}
            >
              <figure>
                <blockquote className="text-balance text-lg font-medium leading-8 text-slate-900">
                  ?{item.quote}?
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">{item.author}</span>
                  {' ? '}
                  {item.role}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2" aria-label="Slides" role="tablist">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-sky-600' : 'bg-slate-300'} focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300`}
                onClick={() => goTo(i)}
              />)
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn-secondary px-3 py-2 text-sm"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              ? Prev
            </button>
            <button
              className="btn-secondary px-3 py-2 text-sm"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              Next ?
            </button>
            <button
              className="btn-secondary px-3 py-2 text-sm"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              aria-label={paused ? 'Resume carousel' : 'Pause carousel'}
            >
              {paused ? 'Resume' : 'Pause'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
