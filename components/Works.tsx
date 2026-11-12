"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "sip-magang",
    title: "SIP-MAGANG — Sistem Absensi Geofencing",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Geofencing"],
    description:
      "Sistem absensi berbasis geofencing untuk Disdikpora DIY. Memvalidasi lokasi peserta magang secara real-time dan mengelola data kehadiran ratusan mahasiswa. Proyek kolaborasi bersama tim.",
    year: "2025",
    link: "https://github.com/hafizar123/presensi-magang",
    image: "/projects/sip-magang.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "mykarisma",
    title: "MyKarisma — Aplikasi Mobile Flutter",
    tags: ["Flutter", "Dart", "Mobile Dev", "SQLite"],
    description:
      "Aplikasi mobile untuk pemuda Kemirisewu. Memudahkan manajemen acara, pencatatan keuangan, dokumentasi kegiatan, serta navigasi lokasi berbasis Flutter & Dart.",
    year: "2026",
    link: "https://github.com/vanoathalla/mykarisma",
    image: "/projects/mykarisma.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-contain p-3",
  },
  {
    id: "simdagenak",
    title: "SIMDAGENAK Sleman — Portal Data Terpadu",
    tags: ["Laravel", "MySQL", "Chart.js", "Bootstrap"],
    description:
      "Platform portal terintegrasi Kabupaten Sleman untuk mengumpulkan, mengelola, dan memvisualisasikan data statistik terpilah gender dan anak secara transparan dan akurat.",
    year: "2024",
    link: "https://github.com/vanoathalla?tab=repositories",
    image: "/projects/simdagenak.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "siraman",
    title: "Siraman Sehat Jiwa — Portal PPK Ormawa",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    description:
      "Aplikasi portal kesehatan jiwa digital terintegrasi untuk pendataan berkala warga ODDP serta fitur deteksi dini kesehatan mental mandiri yang interaktif.",
    year: "2024",
    link: "https://github.com/vanoathalla?tab=repositories",
    image: "/projects/siraman.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "futsal-if",
    title: "IF CUP & Futsal Informatika — Event & Branding",
    tags: ["Leadership", "Event Management", "Branding", "Creative"],
    description:
      "Memimpin perencanaan dan identitas visual komunitas futsal serta kepanitiaan IF CUP — mengelola strategi promosi, desain identitas, dan operasional turnamen sebagai Ketua Pelaksana.",
    year: "2024",
    link: "https://github.com/vanoathalla?tab=repositories",
    image: "/projects/futsal-if.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-cover",
  },
  {
    id: "studysync",
    title: "StudySync — Academic Dashboard",
    tags: ["Node.js", "Express", "TailwindCSS", "Chart.js"],
    description:
      "Dashboard pemantauan akademik personal mahasiswa terintegrasi untuk pelacakan jadwal kuliah, tugas, jadwal ujian, serta visualisasi progress belajar menggunakan analitik statistik.",
    year: "2024",
    link: "https://github.com/vanoathalla?tab=repositories",
    image: "/projects/studysync.png",
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

        {/* Link */}
        <a
          href={project.link}
          target={project.link !== "#" ? "_blank" : undefined}
          rel={project.link !== "#" ? "noopener noreferrer" : undefined}
          className="font-sans text-[13px] text-(--color-accent)
            underline-offset-4 hover:underline transition-all duration-200 w-fit"
          aria-label={`Lihat detail proyek ${project.title}`}
        >
          Lihat Proyek →
        </a>
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
