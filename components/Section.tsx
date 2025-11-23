import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}>;

export default function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={title ? `${id}-title` : undefined} className={className}>
      <div className="mx-auto max-w-7xl container-px py-16 sm:py-24">
        {title && (
          <div className="max-w-2xl">
            <h2 id={`${id}-title`} className="section-title animate-fade-in">
              {title}
            </h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        <div className={title ? 'mt-10 sm:mt-12' : ''}>{children}</div>
      </div>
    </section>
  );
}
