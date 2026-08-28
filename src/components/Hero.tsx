import Image from "next/image";
import { CAST } from "@/lib/content";

export function Hero() {
  const ticker = [...CAST, ...CAST, ...CAST, ...CAST];

  return (
    <section id="giris" className="relative bg-black pt-[4.75rem]">
      <div className="flex justify-center px-6 py-5 md:px-10 md:py-8">
        <div className="poster-frame w-full max-w-[20.5rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem]">
          <Image
            src="/poster.jpg"
            alt="Arınma afişi — ters yüz, kırmızı runeler ve dişlerden oluşan başlık"
            width={1080}
            height={1620}
            priority
            sizes="(max-width: 640px) 78vw, 512px"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <h1 className="date-title mt-6 px-4 pb-6 text-center leading-none md:mt-8 md:pb-8">
        <span className="block whitespace-nowrap text-[1.7rem] tracking-[0.04em] md:text-6xl lg:text-7xl">
          11 Eylül&apos;de
        </span>
        <span className="mt-2 block whitespace-nowrap text-[1.55rem] tracking-[0.14em] uppercase md:mt-3 md:text-5xl lg:text-6xl">
          sinemalarda
        </span>
      </h1>

      <div className="overflow-hidden border-t border-[var(--line)] bg-black py-1 md:py-2">
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
