import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft focus-within:shadow-soft">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-100">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
