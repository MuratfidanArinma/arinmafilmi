import { CREW } from "@/lib/content";

export function Crew() {
  return (
    <section id="ekip" className="relative bg-ash px-5 py-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-center text-2xl tracking-[0.22em] text-bone uppercase md:text-5xl md:tracking-[0.28em]">
          Yapım Ekibi
        </h2>
        <div className="section-line mx-auto mt-6 max-w-xs" />
        <ul className="mt-14 divide-y divide-[var(--line)]">
          {CREW.map((row) => (
            <li
              key={row.role}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="text-[11px] tracking-[0.28em] text-bone-dim uppercase">
                {row.role}
              </span>
              <span className="font-display text-lg tracking-wide text-bone md:text-xl">
                {row.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
