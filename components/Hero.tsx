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
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 md:pt-0 pb-12 md:pb-0 overflow-hidden"
      aria-label="Hero"
    >
      {/* iOS Ambient Light Aura */}
      <div
        className="pointer-events-none absolute top-1/4 right-5 sm:right-20 w-[350px] sm:w-[520px] h-[350px] sm:h-[520px] bg-gradient-to-tr from-amber-200/20 via-orange-100/15 to-transparent rounded-full blur-3xl -z-10 animate-ambient"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-5 sm:left-20 w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] bg-gradient-to-br from-amber-100/20 via-stone-200/20 to-transparent rounded-full blur-3xl -z-10 animate-ambient"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      {/* Grid: teks kiri, foto kanan */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-center">

        {/* Kiri — teks & foto mobile */}
        <div className="max-w-[680px]">
          <h1
            className="font-display font-normal leading-[1.08] text-(--color-text-primary) text-[36px] sm:text-[48px] md:text-[68px] tracking-tight"
            aria-label="Raden Revano Athalla Kartika"
          >
            <span className="hero-line block">Raden Revano</span>
            <span className="hero-line block">Athalla Kartika.</span>
          </h1>

          {/* Foto khusus Mobile (Tampil dengan bingkai squircle iOS & animasi melayang) */}
          <div className="fade-up md:hidden my-6 flex justify-center">
            <div className="animate-float relative w-[220px] sm:w-[260px] aspect-[3/4] overflow-hidden rounded-[26px] border border-(--color-border)/80 bg-white/60 p-1.5 backdrop-blur-md shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/foto-profil.jpg"
                alt="Raden Revano Athalla Kartika"
                className="w-full h-full object-cover object-top rounded-[20px]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[26px] pointer-events-none" />
            </div>
          </div>

          <p className="fade-up font-sans font-light text-[16px] md:text-[17px] text-(--color-text-muted) mt-4 md:mt-6 max-w-[520px] leading-relaxed">
            Mahasiswa Teknik Informatika di UPN &ldquo;Veteran&rdquo; Yogyakarta yang menekuni
            rekayasa web, aplikasi multiplatform, dan analisis data. Berkomitmen membangun sistem
            yang rapi, fungsional, dan dapat diandalkan.
          </p>

          <div className="fade-up flex flex-wrap items-center gap-3.5 mt-8 md:mt-10">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center font-sans text-[12px] font-medium tracking-[0.08em] uppercase rounded-full bg-(--color-text-primary) text-(--color-base) px-7 py-3.5 shadow-sm hover:opacity-90 transition-opacity duration-200"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center justify-center font-sans text-[12px] font-medium tracking-[0.08em] uppercase rounded-full border border-(--color-border) bg-white/50 backdrop-blur-md text-(--color-text-primary) px-7 py-3.5 hover:bg-white/80 transition-colors duration-200"
            >
              Hubungi Saya
              <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>

        {/* Kanan — foto (desktop view dengan bingkai squircle iOS & animasi melayang halus) */}
        <div className="fade-up hidden md:block shrink-0">
          <div className="animate-float relative w-[340px] lg:w-[420px] aspect-[3/4] overflow-hidden rounded-[32px] border border-(--color-border)/80 bg-white/60 p-2 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500">
            <img
              src="/foto-profil.jpg"
              alt="Raden Revano Athalla Kartika"
              className="w-full h-full object-cover object-top rounded-[24px]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[32px] pointer-events-none" />
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
