import { SYNOPSIS } from "@/lib/content";

export function About() {
  return (
    <section id="film" className="relative bg-ash px-5 py-12 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-2xl tracking-[0.22em] text-bone uppercase md:text-5xl md:tracking-[0.28em]">
          Film Hakkında
        </h2>
        <div className="section-line mx-auto mt-6 max-w-xs" />
        <p className="font-serif mt-6 text-lg leading-relaxed text-bone-dim md:mt-10 md:text-2xl">
          {SYNOPSIS}
        </p>
      </div>
    </section>
  );
}
