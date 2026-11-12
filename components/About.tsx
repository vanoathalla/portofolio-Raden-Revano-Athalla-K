"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".fade-up")
              .forEach((node, i) => {
                setTimeout(() => node.classList.add("visible"), i * 100);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-(--color-surface) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Tentang saya"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-24 items-start">

        {/* Kiri */}
        <div>
          <p className="fade-up font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-5">
            Tentang Saya
          </p>
          <h2 className="fade-up font-display font-normal text-[clamp(2rem,3.5vw,42px)] leading-[1.15] text-(--color-text-primary) mb-8">
            Suka ngulik hal baru,<br />berkreasi, &amp; berproses.
          </h2>
          <div className="space-y-5">
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Kenalin, aku Raden Revano Athalla Kartika (biasa dipanggil Vano). Berasal dari
              Yogyakarta dan saat ini lagi menempuh masa kuliah di UPN &ldquo;Veteran&rdquo; Yogyakarta.
              Sehari-hari aku suka bereksplorasi bikin tampilan web yang enak dilihat, nyobain
              teknologi baru, dan bikin project-project kecil yang seru.
            </p>
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Nggak melulu di depan laptop, aku juga aktif di berbagai kegiatan kampus dan organisasi.
              Salah satu pengalaman yang paling berkesan adalah saat dipercaya memimpin acara
              IF CUP 2024 sebagai Ketua Pelaksana — seru banget bisa belajar ngatur tim besar,
              komunikasi bareng banyak kepala, dan bareng-bareng nyelesaiin acara sampai sukses.
            </p>
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Kalo lagi rehat dari urusan koding, biasanya aku ngisi waktu dengan main futsal,
              nongkrong bareng temen, atau sekadar jalan-jalan cari inspirasi baru.
            </p>
          </div>
        </div>

        {/* Kanan — stats card, tanpa foto */}
        <div className="fade-up">
          <div className="border border-(--color-border) px-6 py-6 bg-(--color-base)">
            <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-(--color-text-muted) mb-4">
              Sekilas
            </p>
            <ul className="space-y-3" aria-label="Info singkat">
              {[
                "Teknik Informatika, UPN 'Veteran' Yogyakarta",
                "Berbasis di Yogyakarta, Indonesia",
                "Ketua Pelaksana IF CUP 2024",
                "Suka ngulik Frontend & Mobile",
              ].map((item) => (
                <li key={item} className="font-sans text-[13px] text-(--color-text-primary) flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-(--color-accent) shrink-0 mt-[7px]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
