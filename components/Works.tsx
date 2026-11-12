"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "sip-magang",
    title: "SIP-MAGANG — Sistem Presensi Geofencing DISPORA DIY",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Geofencing"],
    description:
      "Dibuat untuk kebutuhan operasional DISPORA DIY biar presensi ratusan anak magang nggak bisa dititip atau dipalsukan. Validasi lokasi absensi dicek otomatis menggunakan radius GPS (geofencing) langsung lewat browser HP peserta magang, lengkap dengan dashboard rekap kehadiran untuk admin.",
    year: "2025",
    link: "https://github.com/vanoathalla/presensi-magang",
    repoLink: "https://github.com/vanoathalla/presensi-magang",
    image: "/projects/sip-magang.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "aplikasi-perminyakan",
    title: "Simulasi Ekonomi & Reservoir Perminyakan",
    tags: ["Next.js", "TypeScript", "Data Analysis", "Tailwind CSS"],
    description:
      "Aplikasi kalkulator dan simulasi cash flow untuk proyek industri migas. Menghitung estimasi decline rate produksi, belanja modal (CAPEX/OPEX), sampai visualisasi grafik proyeksi keuangan dan indikator kelayakan investasi proyek selama 20 tahun ke depan.",
    year: "2024",
    link: "https://github.com/vanoathalla/aplikasi-perminyakan",
    repoLink: "https://github.com/vanoathalla/aplikasi-perminyakan",
    image: "/projects/perminyakan.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "performa-pemain",
    title: "Klasifikasi Performa Pemain Bola — Random Forest",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
    description:
      "Model machine learning klasifikasi berbasis Random Forest dengan studi kasus skuad PSS Sleman musim 2024/2025. Mengolah data statistik menit bermain, passing, dan kontribusi taktik untuk mengelompokkan tingkat performa pemain secara objektif, lengkap dengan evaluasi confusion matrix.",
    year: "2024",
    link: "https://github.com/vanoathalla/performa-pemain",
    repoLink: "https://github.com/vanoathalla/performa-pemain",
    image: "/projects/performa-pemain.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-contain p-2",
  },
  {
    id: "transjogja",
    title: "Trans Jogja Navigator — Rute & Halte Bus",
    tags: ["JavaScript", "Leaflet GIS", "Geolocation", "Web App"],
    description:
      "Web navigasi praktis buat bantu pengguna Trans Jogja keliling kota. Sistem bisa langsung mendeteksi halte terdekat dari posisi HP dan menampilkan jalur rute bus tercepat tanpa ribet login atau install aplikasi. Sudah live dan langsung siap pakai.",
    year: "2024",
    link: "https://transjogjanavigator.vercel.app",
    repoLink: "https://github.com/vanoathalla/transjogja-navigator",
    image: "/projects/transjogja.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "mykarisma",
    title: "MyKarisma — Aplikasi Mobile Komunitas",
    tags: ["Flutter", "Dart", "SQLite", "Mobile App"],
    description:
      "Aplikasi mobile berbasis Flutter yang dibuat untuk organisasi pemuda Kemirisewu. Dibikin biar pencatatan kas dan iuran organisasi transparan, jadwal kegiatan nggak hilang di grup WA, serta memudahkan anggota melihat titik kumpul lokasi acara lewat peta.",
    year: "2026",
    link: "https://github.com/vanoathalla/mykarisma",
    repoLink: "https://github.com/vanoathalla/mykarisma",
    image: "/projects/mykarisma.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-contain p-3",
  },
  {
    id: "webcraft-pos",
    title: "Webcraft POS — Kasir & Manajemen Stok Toko",
    tags: ["PHP", "MySQL", "Bootstrap", "Point of Sale"],
    description:
      "Sistem kasir toko berbasis web untuk kebutuhan usaha retail dan UMKM. Mendukung pencatatan transaksi belanja cepat, pemotongan stok otomatis saat barang terjual, cetak struk pembayaran, dan rekap mutasi pendapatan harian pemilik usaha.",
    year: "2024",
    link: "https://website-kasir.infinityfreeapp.com",
    repoLink: "https://github.com/vanoathalla/webcraft-pos",
    image: "/projects/webcraft-pos.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "counselink",
    title: "Counselink — Platform Booking Konsultasi",
    tags: ["PHP", "MySQL", "Bootstrap", "Web App"],
    description:
      "Aplikasi web konsultasi kesehatan ala Halodoc versi proyek matakuliah MPPL. Pengguna bisa browsing profil konselor profesional, booking sesi temu sesuai jadwal yang tersedia, dan mengelola riwayat konsultasi dalam satu portal yang terintegrasi.",
    year: "2024",
    link: "https://github.com/vanoathalla/counselink",
    repoLink: "https://github.com/vanoathalla/counselink",
    image: "/projects/counselink.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "aturbrat",
    title: "AturBrat Kobrat — Manajemen Kegiatan Tim",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    description:
      "Dashboard web interaktif untuk koordinasi tugas dan operasional komunitas Kobrat. Membantu anggota tim membagi jadwal kegiatan, to-do list tugas harian, dan monitoring progres acara dengan tampilan yang bersih serta responsif di HP maupun laptop.",
    year: "2024",
    link: "https://aturbrat-kobrat.vercel.app",
    repoLink: "https://github.com/vanoathalla/aturbrat-kobrat",
    image: "/projects/aturbrat.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
  {
    id: "batik-gumregah",
    title: "Batik Gumregah — Katalog Digital Produk UMKM",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Showcase"],
    description:
      "Website showcase dan katalog digital untuk mengenalkan ragam motif kain Batik Gumregah ke jangkauan pasar yang lebih luas. Tampilannya dirancang minimalis dan cepat diakses, mempermudah calon pembeli melihat foto koleksi produk kain batik khas daerah.",
    year: "2024",
    link: "https://batik-gumregah.vercel.app",
    repoLink: "https://github.com/vanoathalla/batik-gumregah",
    image: "/projects/batik-gumregah.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface)",
    imageFit: "object-cover object-top",
  },
  {
    id: "umkm-kanten",
    title: "Direktori UMKM Desa Kanten Imogiri",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Portal"],
    description:
      "Website portal informasi dan promosi usaha lokal warga Desa Kanten, Imogiri. Berisi profil desa serta etalase ragam produk UMKM binaan warga sekitar agar lebih mudah ditemukan dan dihubungi oleh pelanggan luar daerah.",
    year: "2024",
    link: "https://umkm-desa-kanten-imogiri.vercel.app",
    repoLink: "https://github.com/vanoathalla/umkm-kanten",
    image: "/projects/umkm-kanten.png",
    imageAspect: "aspect-[16/10]",
    imageBg: "bg-(--color-surface-soft)",
    imageFit: "object-cover object-top",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const isLive = project.link && !project.link.includes("github.com");

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

        {/* Deskripsi santai & manusiawi */}
        <p className="font-sans font-light text-sm text-(--color-text-muted) leading-relaxed max-w-prose">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-4 pt-1 flex-wrap">
          {isLive ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] text-(--color-accent)
                underline-offset-4 hover:underline transition-all duration-200 w-fit"
              aria-label={`Buka website live ${project.title}`}
            >
              Buka Website →
            </a>
          ) : (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] text-(--color-accent)
                underline-offset-4 hover:underline transition-all duration-200 w-fit"
              aria-label={`Lihat repository ${project.title}`}
            >
              Lihat di GitHub →
            </a>
          )}

          {isLive && project.repoLink && (
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
                setTimeout(() => node.classList.add("visible"), i * 90);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pasangkan project 2 per 2 untuk grid asimetris
  const pairs: [typeof projects[number], typeof projects[number] | undefined][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push([projects[i], projects[i + 1]]);
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Proyek pilihan"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Label Header */}
        <div className="fade-up flex items-baseline justify-between mb-12 border-b border-(--color-border) pb-6">
          <div>
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-text-muted) mb-2">
              Selected Works
            </p>
            <h2 className="font-display font-normal text-3xl md:text-4xl text-(--color-text-primary)">
              Koleksi Proyek &amp; Program
            </h2>
          </div>
          <span className="font-sans text-[12px] text-(--color-text-muted)">
            {projects.length} Proyek
          </span>
        </div>

        {/* Ghost number */}
        <span
          className="font-display font-normal text-[160px] leading-none
            text-(--color-text-primary)/[0.03]
            absolute top-[120px] right-6 md:right-12 lg:right-24
            select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </span>

        {/* Daftar project dalam grid asimetris berpasangan */}
        <div className="flex flex-col gap-12">
          {pairs.map(([itemA, itemB], rowIdx) => (
            <div
              key={itemA.id}
              className={`grid grid-cols-1 ${
                rowIdx % 2 === 0
                  ? "md:grid-cols-[55fr_45fr]"
                  : "md:grid-cols-[45fr_55fr]"
              } gap-8`}
            >
              <ProjectCard project={itemA} />
              {itemB && <ProjectCard project={itemB} />}
            </div>
          ))}
        </div>

        {/* Lihat semua */}
        <div className="fade-up flex justify-center mt-20">
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
            Lihat Repository Lainnya di GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
