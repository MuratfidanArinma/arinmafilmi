"use client";

import { useRef, useState } from "react";

function RuneMark() {
  return (
    <svg viewBox="0 0 54 54" fill="none" aria-hidden>
      <path d="M4 4h18M4 4v18" stroke="#c43424" strokeWidth="1.4" />
      <circle cx="18" cy="18" r="6" stroke="#c4a574" strokeWidth="1" />
      <path d="M18 8v20M8 18h20" stroke="#c43424" strokeWidth="1" />
      <path d="M12 12l12 12M24 12L12 24" stroke="#c4a574" strokeWidth="0.8" opacity="0.8" />
    </svg>
  );
}

function SprocketColumn({ side }: { side: "left" | "right" }) {
  return (
    <div className={`sprockets sprockets-${side}`} aria-hidden>
      <div className="sprocket-track">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="sprocket-hole" />
        ))}
      </div>
    </div>
  );
}

export function Trailer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      await video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section id="fragman" className="relative bg-void px-3 pt-6 pb-12 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-center text-2xl tracking-[0.22em] text-bone uppercase md:text-5xl md:tracking-[0.28em]">
          Fragman
        </h2>
        <div className="section-line mx-auto mt-6 max-w-xs" />

        <div className="film-stage ember-glow relative mt-7 md:mt-12">
          <span className="rune-corner rune-tl">
            <RuneMark />
          </span>
          <span className="rune-corner rune-tr">
            <RuneMark />
          </span>
          <span className="rune-corner rune-bl">
            <RuneMark />
          </span>
          <span className="rune-corner rune-br">
            <RuneMark />
          </span>
          <SprocketColumn side="left" />
          <div className="film-window aspect-video">
            <div className="smoke-veil" />
            <video
              ref={videoRef}
              src="/video/teaser.mp4"
              poster="/poster.jpg"
              playsInline
              preload="metadata"
              controls={playing}
              className="h-full w-full object-cover"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing ? (
              <button
                type="button"
                onClick={toggle}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/45 transition hover:bg-black/30"
                aria-label="Fragmanı oynat"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-black/50 shadow-[0_0_40px_rgba(196,52,36,0.45)] md:h-20 md:w-20">
                  <span className="ml-0.5 border-y-[8px] border-l-[14px] border-y-transparent border-l-bone md:ml-1 md:border-y-[12px] md:border-l-[20px]" />
                </span>
                <span className="mt-3 text-[10px] tracking-[0.35em] text-bone uppercase md:mt-4 md:text-[11px]">
                  Teaser / Fragman
                </span>
              </button>
            ) : null}
          </div>
          <SprocketColumn side="right" />
        </div>
      </div>
    </section>
  );
}
