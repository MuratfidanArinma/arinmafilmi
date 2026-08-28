import Image from "next/image";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-black px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 text-center">
        <Image
          src="/zey-medya.png"
          alt="Zey Medya Film Yapım Prodüksiyon"
          width={612}
          height={408}
          className="h-auto w-[9.5rem] md:w-52"
        />
        <p className="font-display text-sm tracking-[0.48em] text-bone uppercase">
          {SITE.title}
        </p>
        <p className="text-[11px] tracking-[0.22em] text-bone-dim uppercase">
          {SITE.production}
        </p>
        <p className="text-[11px] tracking-[0.22em] text-bone-dim uppercase">
          Dağıtım · {SITE.distribution}
        </p>
        <p className="text-[10px] tracking-[0.18em] text-bone-dim/70">
          Yönetmen Beytullah Pekok · Senaryo Bektaş Topaloğlu · {SITE.release}
        </p>
      </div>
    </footer>
  );
}
