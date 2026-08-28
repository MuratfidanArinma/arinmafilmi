"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GALLERY } from "@/lib/content";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") {
        setActive((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="galeri" className="relative bg-ash px-3 py-12 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-2xl tracking-[0.22em] text-bone uppercase md:text-5xl md:tracking-[0.28em]">
          Galeri
        </h2>
        <div className="section-line mx-auto mt-6 max-w-xs" />

        <div className="mt-10 columns-2 gap-2 sm:mt-14 sm:columns-2 sm:gap-3 lg:columns-3">
          {GALLERY.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className="mb-2 block w-full break-inside-avoid overflow-hidden border border-[var(--line)] sm:mb-3"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1000}
                className="h-28 w-full object-cover transition duration-500 hover:scale-[1.03] sm:h-auto sm:max-h-none"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-6 text-[11px] tracking-[0.3em] text-bone-dim uppercase"
            onClick={() => setActive(null)}
          >
            Kapat
          </button>
          <Image
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            width={1400}
            height={1400}
            className="max-h-[88vh] w-auto max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
