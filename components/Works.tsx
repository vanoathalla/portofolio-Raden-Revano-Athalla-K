"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "transjogja",
    title: "Trans Jogja Navigator — Sistem Navigasi Rute Bus",
    tags: ["JavaScript", "Web App", "Geolocation", "Leaflet"],
    description:
      "Sistem navigasi cerdas berbasis web untuk jaringan bus Trans Jogja. Membantu pengguna menemukan rute tercepat, halte terdekat, dan estimasi waktu perjalanan secara gratis tanpa perlu login.",
    year: "2024",
    link: "https://transjogjanavigator.vercel.app",
    repoLink: "https://github.com/vanoathalla/transjogja-navigator",
    image: "/projects/transjogja.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "sip-magang",
    title: "SIP-MAGANG — Sistem Presensi DISPORA DIY",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    description:
      "Aplikasi web presensi dan pelaporan magang untuk Dinas Pemuda dan Olahraga (DISPORA) DIY. Memvalidasi absensi peserta magang serta mengelola data kehadiran secara terpusat.",
    year: "2025",
    link: "https://github.com/vanoathalla/presensi-magang",
    repoLink: "https://github.com/vanoathalla/presensi-magang",
    image: "/projects/sip-magang.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "mykarisma",
    title: "MyKarisma — Aplikasi Mobile Flutter",
    tags: ["Flutter", "Dart", "Mobile App", "SQLite"],
    description:
      "Aplikasi mobile lintas platform untuk pemuda Karisma Kemirisewu. Memfasilitasi manajemen acara, pencatatan keuangan transparan, dokumentasi kegiatan, serta arah lokasi kegiatan.",
    year: "2026",
    link: "https://github.com/vanoathalla/mykarisma",
    repoLink: "https://github.com/vanoathalla/mykarisma",
    image: "/projects/mykarisma.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-contain p-3",
  },
  {
    id: "counselink",
    title: "Counselink — Platform Konseling Kesehatan",
    tags: ["PHP", "MySQL", "Bootstrap", "Web App"],
    description:
      "Aplikasi web konsultasi kesehatan mental terintegrasi yang menghubungkan pengguna dengan konselor profesional, dilengkapi manajemen jadwal konsultasi dan sistem informasi terstruktur.",
    year: "2024",
    link: "https://github.com/vanoathalla/counselink",
    repoLink: "https://github.com/vanoathalla/counselink",
    image: "/projects/counselink.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "batik-gumregah",
    title: "Batik Gumregah — Digital Catalog & Branding",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-Catalog"],
    description:
      "Website showcase dan katalog digital produk UMKM Batik Gumregah. Menampilkan visual produk kain batik khas dengan navigasi responsif, tata letak modern, dan optimasi performa cepat.",
    year: "2024",
    link: "https://batik-gumregah.vercel.app",
    repoLink: "https://github.com/vanoathalla/batik-gumregah",
    image: "/projects/batik-gumregah.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-cover object-top",
  },
  {
    id: "aturbrat",
    title: "AturBrat Kobrat — Web Manajemen Operasional",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    description:
      "Aplikasi web interaktif untuk pengelolaan kegiatan dan operasional komunitas Kobrat yang dibangun menggunakan React, Vite, dan Tailwind CSS dengan pengalaman pengguna yang cepat dan mulus.",
    year: "2024",
    link: "https://aturbrat-kobrat.vercel.app",
    repoLink: "https://github.com/vanoathalla/aturbrat-kobrat",
    image: "/projects/aturbrat.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article
      className="project-card fade-up flex flex-col gap-5 pl-4"
      data-cursor-hover
    >
      {/* Gambar project */}
      <div
        className={`w-full ${project.imageAspect} ${project.imageBg} overflow-hidden rounded-xl border border-(--color-border) relative group/img shadow-sm flex items-center justify-center`}
        role="img"
        aria-label={`Preview proyek ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Preview proyek ${project.title}`}
            className={`w-full h-full ${project.imageFit} transition-transform duration-500 ease-out group-hover/img:scale-105`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-sans text-[12px] text-(--color-text-muted)" aria-hidden="true">
              Project Preview
            </span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2">
        {/* Tags */}
        <div className="flex flex-wrap gap-2" aria-label="Teknologi yang digunakan">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[10px] tracking-[0.1em] uppercase
                text-(--color-text-muted) border border-(--color-border) px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Judul + tahun */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display font-normal text-2xl text-(--color-text-primary) leading-snug">
            {project.title}
          </h3>
          <span className="font-sans text-[12px] text-(--color-text-muted) shrink-0 mt-1">
            {project.year}
          </span>
        </div>

        {/* Deskripsi */}
        <p className="font-sans font-light text-sm text-(--color-text-muted) leading-relaxed max-w-prose">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 pt-1">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-(--color-accent)
              underline-offset-4 hover:underline transition-all duration-200 w-fit"
            aria-label={`Buka live demo ${project.title}`}
          >
            Buka Proyek →
          </a>
          {project.repoLink && project.repoLink !== project.link && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[12px] text-(--color-text-muted)
                hover:text-(--color-text-primary) transition-colors duration-200"
              aria-label={`Lihat source code ${project.title}`}
            >
              Source Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Works() {
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
                setTimeout(() => node.classList.add("visible"), i * 120);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [p1, p2, p3, p4, p5, p6] = projects;

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Proyek pilihan"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Label */}
        <p className="fade-up font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-12">
          Proyek Pilihan
        </p>

        {/* Ghost number */}
        <span
          className="font-display font-normal text-[160px] leading-none
            text-(--color-text-primary)/[0.04]
            absolute top-[120px] right-6 md:right-12 lg:right-24
            select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </span>

        {/* Baris 1 — asimetris 55/45 */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-8 mb-12">
          <ProjectCard project={p1} />
          <ProjectCard project={p2} />
        </div>

        {/* Baris 2 — asimetris dibalik 45/55 */}
        <div className="grid grid-cols-1 md:grid-cols-[45fr_55fr] gap-8 mb-12">
          <ProjectCard project={p3} />
          <ProjectCard project={p4} />
        </div>

        {/* Baris 3 — asimetris 55/45 */}
        <div className="grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-8">
          <ProjectCard project={p5} />
          <ProjectCard project={p6} />
        </div>

        {/* Lihat semua */}
        <div className="fade-up flex justify-center mt-16">
          <a
            href="https://github.com/vanoathalla?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-[12px] tracking-[0.12em] uppercase
              border border-(--color-text-primary) text-(--color-text-primary)
              px-8 py-[14px]
              hover:bg-(--color-text-primary) hover:text-(--color-base)
              transition-colors duration-200"
          >
            Lihat Semua di GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
