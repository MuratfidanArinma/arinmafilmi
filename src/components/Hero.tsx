import Image from "next/image";
import { CAST } from "@/lib/content";

export function Hero() {
  const ticker = [...CAST, ...CAST, ...CAST, ...CAST];

  return (
    <section id="giris" className="relative h-[100dvh] max-h-[820px] min-h-[520px] overflow-hidden md:max-h-none">
      <Image
        src="/poster.jpg"
        alt="Arınma afişi — ters yüz, kırmızı runeler ve dişlerden oluşan başlık"
        fill
        priority
        className="object-cover object-[center_12%] md:object-[center_18%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      <div className="vignette" />

      <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center px-3 text-center md:bottom-20">
        <h1 className="date-title leading-[0.92]">
          <span className="block text-[2.15rem] md:text-7xl lg:text-8xl">
            11 Eylül&apos;de
          </span>
          <span className="mt-1 block text-[1.85rem] tracking-[0.18em] uppercase md:mt-3 md:text-6xl lg:text-7xl">
            sinemalarda
          </span>
        </h1>
      </div>

      <div className="absolute right-0 bottom-0 left-0 z-10 overflow-hidden border-t border-[var(--line)] bg-black/75 py-1 md:py-2">
        <div className="credit-ticker gap-6 pr-6 whitespace-nowrap md:gap-10 md:pr-10">
          {ticker.map((name, i) => (
            <span key={`${name}-${i}`} className="text-[9px] tracking-[0.22em] text-bone-dim uppercase md:text-[11px] md:tracking-[0.28em]">
              {name}
              <span className="mx-4 text-ember md:mx-8">†</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
