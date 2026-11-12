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
            Dedikasi teknis, pengalaman<br />organisasi, &amp; kemauan belajar.
          </h2>
          <div className="space-y-5">
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Saya Raden Revano Athalla Kartika (akrab disapa Vano), mahasiswa Teknik Informatika
              UPN &ldquo;Veteran&rdquo; Yogyakarta angkatan 2023. Perjalanan saya di bidang teknologi
              berangkat dari ketertarikan merancang aplikasi web dan mobile yang fungsional, rapi,
              serta memberikan dampak nyata bagi penggunanya.
            </p>
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Selain kegiatan akademik dan teknis, saya aktif dalam kepanitiaan dan organisasi kampus.
              Salah satu pencapaian penting saya adalah memimpin jalannya IF CUP 2024 sebagai Ketua Pelaksana,
              di mana saya bertanggung jawab mengarahkan seluruh divisi, menyusun perencanaan kegiatan, dan memastikan
              kolaborasi tim berjalan lancar dari awal hingga akhir.
            </p>
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Saya memegang komitmen untuk terus berkembang, terbuka terhadap masukan, dan selalu antusias
              dalam menghadapi tantangan baru dalam pengembangan perangkat lunak maupun kerja sama tim.
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
