import Image from "next/image";
import { CAST } from "@/lib/content";

export function Hero() {
  const ticker = [...CAST, ...CAST, ...CAST, ...CAST];

  return (
    <section id="giris" className="relative h-[72svh] min-h-[500px] overflow-hidden md:h-[100dvh] md:min-h-[640px]">
      <Image
        src="/poster.jpg"
        alt="Arınma afişi — ters yüz, kırmızı runeler ve dişlerden oluşan başlık"
        fill
        priority
        className="object-cover object-[center_8%] md:object-[center_16%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black" />
      <div className="vignette" />

      <div className="absolute inset-x-0 bottom-11 z-10 flex flex-col items-center px-3 text-center md:bottom-20">
        <h1 className="date-title leading-none">
          <span className="block whitespace-nowrap text-[1.7rem] tracking-[0.04em] md:text-6xl lg:text-7xl">
            11 Eylül&apos;de
          </span>
          <span className="mt-2 block whitespace-nowrap text-[1.55rem] tracking-[0.14em] uppercase md:mt-3 md:text-5xl lg:text-6xl">
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
