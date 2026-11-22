"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".hero-line").forEach((node, i) => {
      setTimeout(() => node.classList.add("visible"), 100 + i * 150);
    });
    el.querySelectorAll<HTMLElement>(".fade-up").forEach((node, i) => {
      setTimeout(() => node.classList.add("visible"), 550 + i * 130);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 md:pt-0 pb-12 md:pb-0"
      aria-label="Hero"
    >
      {/* Grid: teks kiri, foto kanan */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">

        {/* Kiri — teks & foto mobile */}
        <div className="max-w-[680px]">
          <h1
            className="font-display font-normal leading-[1.1] text-(--color-text-primary) text-[36px] sm:text-[48px] md:text-[68px]"
            aria-label="Raden Revano Athalla Kartika"
          >
            <span className="hero-line block">Raden Revano</span>
            <span className="hero-line block">Athalla Kartika.</span>
          </h1>

          {/* Foto khusus Mobile (Tampil elegan di bawah nama pada layar HP) */}
          <div className="fade-up md:hidden my-6 flex justify-center">
            <div className="relative w-[220px] sm:w-[260px] aspect-[3/4] overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface-soft) shadow-2xl">
              <img
                src="/foto-profil.jpg"
                alt="Raden Revano Athalla Kartika"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

          <p className="fade-up font-sans font-light text-[16px] md:text-[17px] text-(--color-text-muted) mt-4 md:mt-6 max-w-[500px] leading-relaxed">
            Mahasiswa Teknik Informatika UPN &ldquo;Veteran&rdquo; Yogyakarta yang berfokus pada
            pengembangan web, aplikasi mobile, serta aktif dalam kepemimpinan dan pengelolaan kegiatan.
          </p>

          <div className="fade-up flex flex-wrap items-center gap-4 mt-8 md:mt-10">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block font-sans text-[12px] tracking-[0.12em] uppercase border border-(--color-text-primary) text-(--color-text-primary) px-7 sm:px-8 py-[14px] hover:bg-(--color-text-primary) hover:text-(--color-base) transition-colors duration-200"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-block font-sans text-[13px] text-(--color-accent) underline-offset-4 hover:underline transition-all duration-200"
            >
              Hubungi Saya →
            </a>
          </div>
        </div>

        {/* Kanan — foto (desktop only) */}
        <div className="fade-up hidden md:block shrink-0">
          <div className="w-[340px] lg:w-[420px] aspect-[3/4] overflow-hidden bg-(--color-surface-soft) rounded-2xl border border-(--color-border)/50 shadow-xl">
            <img
              src="/foto-profil.jpg"
              alt="Raden Revano Athalla Kartika"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>

      {/* Teks vertikal kanan bawah */}
      <div className="fade-up hidden md:flex absolute bottom-10 right-10" aria-hidden="true">
        <span
          className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted)"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Teknik Informatika · UPN Veteran YK · 2025
        </span>
      </div>
    </section>
  );
}
