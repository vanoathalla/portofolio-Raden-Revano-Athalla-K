"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const nodes = el.querySelectorAll<HTMLElement>(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
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
              Saya Raden Revano Athalla Kartika (biasa dipanggil Vano), mahasiswa S-1 Teknik Informatika
              di UPN &ldquo;Veteran&rdquo; Yogyakarta (angkatan 2023). Sebelum mendalami dunia pemrograman,
              sebagian besar masa kecil hingga remaja saya dihabiskan di lapangan sepak bola sebagai atlet
              muda dalam pembinaan kompetitif.
            </p>

            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Tahun-tahun berlatih dan bertanding membentuk kebiasaan yang melekat hingga hari ini:
              kedisiplinan waktu, ketenangan berpikir saat menghadapi situasi sulit, dan pentingnya
              komunikasi dalam tim. Ketika masuk kuliah Informatika, fokus saya beralih ke rekayasa
              perangkat lunak. Sepak bola yang dulunya ditekuni sebagai atlet kini tetap menjadi hobi utama
              untuk menjaga kebugaran dan menyegarkan pikiran di sela kesibukan koding.
            </p>

            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Di kampus, kebiasaan berkoordinasi membawa saya dipercaya menjadi <strong>Ketua Pelaksana IF CUP 2024</strong> —
              turnamen olahraga dan e-sport tahunan jurusan Informatika yang melibatkan lebih dari 60 panitia.
              Tanggung jawab ini berlanjut lewat peran <strong>Volunteer Guard Veteran Cup Festival 2025</strong> dan
              divisi <strong>Dekorasi &amp; Artistik Veteran Cup Festival 2026</strong>. Kecintaan pada sepak bola juga menginspirasi
              beberapa proyek saya, mulai dari riset klasifikasi performa pemain PSS Sleman hingga platform pemesanan jersey PO-in Aja.
            </p>

            <p className="fade-up font-sans font-light text-[16px] text-(--color-text-muted) leading-relaxed">
              Bagi saya, baik di lapangan maupun di hadapan baris kode, prinsipnya sederhana: konsisten,
              memperhatikan detail, dan bertanggung jawab penuh atas apa yang dikerjakan.
            </p>
          </div>
        </div>

        {/* Kanan — Kartu Kilas Perjalanan & Nilai (iOS Widget Aesthetic dengan Sheen & Lift) */}
        <div className="fade-up space-y-6">
          {/* Card 1: Sekilas Profil */}
          <div className="ios-sheen border border-(--color-border)/80 p-7 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-(--color-accent)/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-(--color-accent)" />
              <p className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-(--color-accent)">
                Sekilas Profil
              </p>
            </div>
            <ul className="space-y-4" aria-label="Info singkat profil">
              {[
                { title: "Pendidikan", desc: "S-1 Teknik Informatika, UPN 'Veteran' Yogyakarta (2023)" },
                { title: "Latar Belakang", desc: "Mantan Atlet Sepak Bola Muda · Kini Penggemar Futsal & Bola" },
                { title: "Pengalaman Utama", desc: "Ketua Pelaksana IF CUP 2024 · Panitia & Volunteer Veteran Cup 2025 & 2026" },
                { title: "Fokus Teknis", desc: "Web Development, Mobile App (Flutter), & Data Exploration" },
                { title: "Domisili", desc: "Yogyakarta, Indonesia" },
              ].map((item) => (
                <li key={item.title} className="flex flex-col gap-1 border-b border-(--color-border)/40 pb-3 last:border-none last:pb-0">
                  <span className="font-sans text-[11px] font-medium tracking-wide uppercase text-(--color-text-muted)">
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
          <div className="ios-sheen border border-(--color-border)/80 p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)] hover:border-(--color-accent)/40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <p className="font-sans text-[11px] font-medium tracking-widest uppercase text-(--color-text-muted) mb-2">
              Prinsip Kerja
            </p>
            <blockquote className="font-display text-[16px] text-(--color-text-primary) italic leading-relaxed">
              &ldquo;Disiplin dan daya juang di lapangan bola adalah modal terbaik saat menghadapi kode yang rumit dan dinamika memimpin tim.&rdquo;
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}
