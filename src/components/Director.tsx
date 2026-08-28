import Image from "next/image";
import { DIRECTOR_LEAD, DIRECTOR_PHOTOS, DIRECTOR_QUOTE } from "@/lib/content";

export function Director() {
  return (
    <section id="yonetmen" className="relative bg-void px-5 py-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-2xl tracking-[0.16em] text-bone uppercase md:text-5xl md:tracking-[0.28em]">
          Yönetmen Görüşü
        </h2>
        <div className="section-line mx-auto mt-6 max-w-xs" />

        <div className="mt-8 grid items-center gap-8 md:mt-14 md:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-ember uppercase">
              Beytullah Pekok
            </p>
            <p className="font-serif mt-5 text-xl leading-relaxed text-bone md:text-2xl">
              {DIRECTOR_LEAD}
            </p>
            <blockquote className="mt-8 border-l border-ember pl-6 text-[17px] leading-8 text-bone-dim">
              “{DIRECTOR_QUOTE}”
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {DIRECTOR_PHOTOS.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden border-2 border-[rgba(196,165,116,0.4)] ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 28vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
