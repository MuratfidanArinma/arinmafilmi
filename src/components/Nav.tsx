"use client";

import { useState } from "react";
import { NAV, SITE } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-40 border-b border-[var(--line)] bg-black/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#giris" className="font-display text-[11px] tracking-[0.42em] text-bone uppercase">
          {SITE.title}
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="nav-link md:hidden"
          aria-expanded={open}
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </div>
      {open ? (
        <nav className="flex flex-col gap-4 border-t border-[var(--line)] px-5 py-5 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
