import { CAST } from "@/lib/content";

export function Cast() {
  return (
    <section id="oyuncular" className="relative bg-void px-5 py-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-center text-2xl tracking-[0.22em] text-bone uppercase md:text-5xl md:tracking-[0.28em]">
          Oyuncular
        </h2>
        <div className="section-line mx-auto mt-6 max-w-xs" />
        <ul className="mt-8 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {CAST.map((name) => (
            <li
              key={name}
              className="border border-[var(--line)] bg-smoke/60 px-4 py-5 text-center sm:px-8 sm:py-10"
            >
              <p className="font-display text-lg tracking-[0.08em] text-bone sm:text-2xl sm:tracking-[0.12em]">
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
