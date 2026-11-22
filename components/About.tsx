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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-(--color-surface) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Tentang saya & perjalanan hidup"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-20 items-start">

        {/* Kiri — Narasi Perjalanan Hidup */}
        <div>
          <p className="fade-up font-sans text-[11px] tracking-[0.18em] uppercase text-(--color-accent) mb-4">
            Perjalanan Hidup &amp; Filosofi
          </p>
          <h2 className="fade-up font-display font-normal text-[clamp(2.2rem,3.8vw,44px)] leading-[1.18] text-(--color-text-primary) mb-8">
            Dari lapangan hijau,<br />ke baris kode dan kepemimpinan.
          </h2>

          <div className="space-y-6">
            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Saya Raden Revano Athalla Kartika (akrab disapa Vano), mahasiswa S-1 Teknik Informatika
              di UPN &ldquo;Veteran&rdquo; Yogyakarta angkatan 2023. Perjalanan saya punya cerita yang cukup unik:
              sebelum mendalami dunia teknologi, masa kecil hingga remaja saya dihabiskan dengan dedikasi penuh
              di lapangan sepak bola sebagai atlet muda kompetitif.
            </p>

            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Tahun-tahun berlatih keras dan bertanding di berbagai turnamen menanamkan nilai kedisiplinan yang ketat,
              mentalitas pantang menyerah di bawah tekanan, serta kepekaan bekerja sama dalam tim. Ketika memasuki bangku
              kuliah Informatika, arah langkah saya bertransformasi ke rekayasa perangkat lunak. Sepak bola yang dulunya
              dijalani sebagai atlet kompetitif kini tetap menjadi hobi utama yang sangat saya cintai — sarana menjaga kebugaran
              dan menyegarkan pikiran di sela kesibukan koding.
            </p>

            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Jiwa kepemimpinan dari lapangan hijau membawa saya dipercaya memimpin sebagai <strong>Ketua Pelaksana IF CUP 2024</strong> —
              turnamen olahraga bergengsi jurusan Informatika, mengoordinasi puluhan panitia lintas divisi, dan memastikan acara
              berjalan lancar. Bahkan, kecintaan pada sepak bola ikut menginspirasi proyek teknologi saya, seperti riset machine learning
              klasifikasi performa pemain PSS Sleman hingga platform pre-order jersey olahraga.
            </p>

            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Bagi saya, baik di lapangan sepak bola maupun di depan baris kode, kuncinya selalu sama: dedikasi, konsistensi,
              dan komitmen untuk terus memberikan yang terbaik.
            </p>
          </div>
        </div>

        {/* Kanan — Kartu Kilas Perjalanan & Nilai */}
        <div className="fade-up space-y-6">
          {/* Card 1: Sekilas Profil */}
          <div className="border border-(--color-border) p-8 bg-(--color-base) rounded-xl">
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-accent) mb-5">
              Sekilas Profil
            </p>
            <ul className="space-y-4" aria-label="Info singkat profil">
              {[
                { title: "Pendidikan", desc: "S-1 Teknik Informatika, UPN 'Veteran' Yogyakarta (2023)" },
                { title: "Latar Belakang", desc: "Mantan Atlet Sepak Bola Muda · Kini Penggemar Futsal & Bola" },
                { title: "Pengalaman Utama", desc: "Ketua Pelaksana IF CUP 2024 · Staff UKM Sepak Bola UPNVY" },
                { title: "Fokus Teknis", desc: "Web Development, Mobile App (Flutter), & Data Exploration" },
                { title: "Domisili", desc: "Yogyakarta, Indonesia" },
              ].map((item) => (
                <li key={item.title} className="flex flex-col gap-1 border-b border-(--color-border)/50 pb-3 last:border-none last:pb-0">
                  <span className="font-sans text-[11px] tracking-wider uppercase text-(--color-text-muted)">
                    {item.title}
                  </span>
                  <span className="font-sans text-[14px] text-(--color-text-primary)">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Kutipan Nilai */}
          <div className="border border-(--color-border) p-6 bg-(--color-surface-soft) rounded-xl">
            <p className="font-sans text-[11px] tracking-widest uppercase text-(--color-text-muted) mb-2">
              Prinsip Kerja
            </p>
            <blockquote className="font-display text-[17px] text-(--color-text-primary) italic leading-relaxed">
              &ldquo;Disiplin dan daya juang di lapangan bola adalah modal terbaik saat menghadapi kode yang rumit dan dinamika memimpin tim.&rdquo;
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
