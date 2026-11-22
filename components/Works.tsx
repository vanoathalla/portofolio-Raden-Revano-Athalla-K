"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: string;
  index: string;
  title: string;
  tags: string[];
  description: string;
  year: string;
  link?: string;
  repoLink?: string;
  image?: string | null;
  features?: string[];
}

const projects: ProjectItem[] = [
  {
    id: "sip-magang",
    index: "01",
    title: "SIP-MAGANG — Sistem Presensi Geofencing DISPORA DIY",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Geofencing"],
    description:
      "Dibuat untuk kebutuhan operasional DISPORA DIY agar presensi ratusan anak magang terverifikasi akurat dan tidak dapat dimanipulasi. Validasi lokasi absensi dicek otomatis menggunakan radius GPS (geofencing) langsung lewat browser HP peserta magang, dilengkapi dashboard rekap kehadiran dan panel admin terpusat.",
    year: "2025",
    link: "https://github.com/vanoathalla/presensi-magang",
    repoLink: "https://github.com/vanoathalla/presensi-magang",
    image: "/projects/sip-magang.png",
    features: ["Validasi Radius GPS Real-time", "Multi-role Admin & Peserta", "Rekapitulasi Data Kehadiran Otomatis"],
  },
  {
    id: "transjogja",
    index: "02",
    title: "Trans Jogja Navigator — Rute & Halte Bus",
    tags: ["JavaScript", "Leaflet GIS", "Geolocation", "Web App"],
    description:
      "Sistem navigasi cerdas berbasis web untuk memandu pengguna Trans Jogja keliling kota. Mendeteksi halte terdekat berdasarkan koordinat GPS perangkat secara instan dan menampilkan rute tercepat antar koridor tanpa perlu login atau instalasi aplikasi rumit. Sudah live dan digunakan publik.",
    year: "2024",
    link: "https://transjogjanavigator.vercel.app",
    repoLink: "https://github.com/vanoathalla/transjogja-navigator",
    image: null,
    features: ["Pencarian Halte Terdekat via GPS", "Navigasi Antar Koridor Cepat", "Ringan & Siap Pakai Tanpa Login"],
  },
  {
    id: "po-in-aja",
    index: "03",
    title: "PO-in Aja — Pre-Order Jersey & Merchandise Platform",
    tags: ["Laravel 11", "Livewire 3", "Tailwind CSS", "MySQL"],
    description:
      "Platform pre-order jersey dan merchandise dengan antarmuka bergaya iOS (White & Royal Blue Edition). Diciptakan dari kecintaan pada dunia olahraga dan kebutuhan kepanitiaan kampus, menyediakan sistem katalog apparel interaktif, variasi ukuran dan custom nama, serta rekapitulasi pesanan otomatis.",
    year: "2024",
    link: "https://github.com/vanoathalla/po-in-aja",
    repoLink: "https://github.com/vanoathalla/po-in-aja",
    image: null,
    features: ["Sistem Pre-order & Custom Name", "Dashboard Rekapitulasi Otomatis", "Desain Bersih iOS Aesthetic"],
  },
  {
    id: "aplikasi-perminyakan",
    index: "04",
    title: "Simulasi Ekonomi & Reservoir Perminyakan",
    tags: ["Next.js", "TypeScript", "Data Analysis", "Tailwind CSS"],
    description:
      "Aplikasi kalkulator dan simulasi cash flow teknis untuk evaluasi kelayakan proyek industri migas. Menghitung estimasi decline rate produksi, belanja modal (CAPEX/OPEX), visualisasi grafik kumulatif, serta proyeksi indikator finansial selama 20 tahun ke depan.",
    year: "2024",
    link: "https://github.com/vanoathalla/aplikasi-perminyakan",
    repoLink: "https://github.com/vanoathalla/aplikasi-perminyakan",
    image: null,
    features: ["Kalkulasi Decline Rate & Produksi", "Proyeksi Cash Flow 20 Tahun", "Visualisasi Grafik Finansial Interaktif"],
  },
  {
    id: "terserah-app",
    index: "05",
    title: "TERSERAH! — Tongkrongan Decision Roulette",
    tags: ["SvelteKit", "TypeScript", "Tailwind CSS", "Railway"],
    description:
      "Solusi pemecah kebuntuan circle tongkrongan saat bingung menentukan tempat makan atau destinasi kumpul. Dibangun menggunakan SvelteKit yang sangat ringan dan cepat, lengkap dengan animasi roulette putar acak dan opsi kustomisasi daftar pilihan.",
    year: "2024",
    link: "https://terserah-app-production.up.railway.app",
    repoLink: "https://github.com/vanoathalla/terserah-app",
    image: "/projects/terserah.png",
    features: ["Animasi Putar Roulette Dinamis", "Input Kategori Kuliner & Tongkrongan", "Deployed Live di Cloud Railway"],
  },
  {
    id: "performa-pemain",
    index: "06",
    title: "Klasifikasi Performa Pemain Sepak Bola — Random Forest",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
    description:
      "Riset machine learning menggunakan algoritma Random Forest untuk mengelompokkan tingkat performa pemain sepak bola berdasarkan data statistik pertandingan riil skuad PSS Sleman musim 2024/2025. Dilengkapi evaluasi confusion matrix dan analisis feature importance.",
    year: "2024",
    link: "https://github.com/vanoathalla/performa-pemain",
    repoLink: "https://github.com/vanoathalla/performa-pemain",
    image: "/projects/performa-pemain.png",
    features: ["Dataset Statistik PSS Sleman 2024/2025", "Klasifikasi Algoritma Random Forest", "Visualisasi Confusion Matrix & Evaluasi"],
  },
  {
    id: "mykarisma",
    index: "07",
    title: "MyKarisma — Aplikasi Mobile Komunitas",
    tags: ["Flutter", "Dart", "SQLite", "Mobile App"],
    description:
      "Aplikasi mobile lintas platform berbasis Flutter untuk organisasi pemuda Karisma Kemirisewu. Memfasilitasi pembukuan kas yang transparan, penjadwalan kegiatan agar tidak tercecer di chat grup, serta navigasi titik kumpul acara menggunakan peta.",
    year: "2026",
    link: "https://github.com/vanoathalla/mykarisma",
    repoLink: "https://github.com/vanoathalla/mykarisma",
    image: "/projects/mykarisma.png",
    features: ["Pencatatan Kas Lokal SQLite", "Jadwal & Agenda Organisasi", "Integrasi Peta Lokasi Acara"],
  },
  {
    id: "jgn-lupa-app",
    index: "08",
    title: "Jgn Lupa — Pengingat Harian Desktop & Android",
    tags: ["React", "Electron", "Capacitor", "Tailwind CSS"],
    description:
      "Aplikasi pengingat jadwal dan to-do list harian multi-platform yang dapat berjalan di komputer desktop (Electron) maupun ponsel Android (Capacitor), dengan dukungan notifikasi alarm latar belakang yang andal.",
    year: "2024",
    link: "https://github.com/vanoathalla/jgn-lupa-app",
    repoLink: "https://github.com/vanoathalla/jgn-lupa-app",
    image: null,
    features: ["Multi-platform Desktop & Android", "Background Alarm & Notifikasi", "Sinkronisasi To-Do List Harian"],
  },
  {
    id: "webcraft-pos",
    index: "09",
    title: "Webcraft POS — Sistem Kasir & Manajemen Stok Toko",
    tags: ["PHP", "MySQL", "Bootstrap", "Point of Sale"],
    description:
      "Sistem kasir toko berbasis web untuk kebutuhan usaha ritel dan UMKM. Mengakomodasi transaksi penjualan cepat, sinkronisasi stok otomatis saat produk terjual, cetak struk pembayaran, dan rekap mutasi pendapatan harian.",
    year: "2024",
    link: "https://website-kasir.infinityfreeapp.com",
    repoLink: "https://github.com/vanoathalla/webcraft-pos",
    image: "/projects/webcraft-pos.png",
    features: ["Transaksi Kasir Instan", "Manajemen Inventaris Stok Otomatis", "Pencetakan Struk Pembayaran"],
  },
  {
    id: "counselink",
    index: "10",
    title: "Counselink — Platform Konseling & Janji Temu",
    tags: ["PHP", "MySQL", "Bootstrap", "Web App"],
    description:
      "Aplikasi web konsultasi kesehatan terpadu hasil proyek matakuliah MPPL. Pengguna dapat memilih tenaga konselor profesional, memesan jadwal sesi konsultasi, dan mengelola riwayat konsultasi dalam satu portal yang terintegrasi.",
    year: "2024",
    link: "https://github.com/vanoathalla/counselink",
    repoLink: "https://github.com/vanoathalla/counselink",
    image: "/projects/counselink.png",
    features: ["Booking Jadwal Konselor Online", "Manajemen Rekam Catatan Konseling", "Portal Multi-role Pasien & Konselor"],
  },
  {
    id: "batik-gumregah",
    index: "11",
    title: "Batik Gumregah — Katalog Digital Produk UMKM",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Showcase"],
    description:
      "Website katalog digital untuk memamerkan ragam motif kain Batik Gumregah secara estetik dan responsif, memudahkan calon pelanggan dari berbagai daerah melihat koleksi produk secara daring.",
    year: "2024",
    link: "https://batik-gumregah.vercel.app",
    repoLink: "https://github.com/vanoathalla/batik-gumregah",
    image: "/projects/batik-gumregah.png",
    features: ["Katalog Visual Kain Batik", "Optimasi Tampilan Mobile-First", "Informasi Kontak Langsung Pengrajin"],
  },
  {
    id: "aturbrat",
    index: "12",
    title: "AturBrat Kobrat — Manajemen Kegiatan Tim",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    description:
      "Dashboard manajemen operasional internal untuk koordinasi kegiatan tim Kobrat. Menangani pembagian giliran piket, daftar tugas harian, dan pemantauan timeline acara secara terstruktur.",
    year: "2024",
    link: "https://aturbrat-kobrat.vercel.app",
    repoLink: "https://github.com/vanoathalla/aturbrat-kobrat",
    image: "/projects/aturbrat.png",
    features: ["Pembagian Jadwal & Piket Tim", "Pelacakan Progres Tugas Harian", "Antarmuka Ringan React + Vite"],
  },
];

export default function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>("sip-magang");

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
                setTimeout(() => node.classList.add("visible"), i * 65);
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

  const toggleProject = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Karya & Proyek Terpilih"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header Seksi */}
        <div className="fade-up flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-(--color-border) pb-8 gap-4">
          <div>
            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-(--color-accent) mb-3">
              Selected Works
            </p>
            <h2 className="font-display font-normal text-3xl md:text-5xl text-(--color-text-primary)">
              Koleksi Program &amp; Proyek
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-sans text-[12px] text-(--color-text-muted)">
              {projects.length} Proyek Terdaftar
            </span>
            <span className="hidden md:inline text-(--color-border)">·</span>
            <span className="hidden md:inline font-sans text-[11px] text-(--color-accent) tracking-wide">
              Klik judul untuk buka preview
            </span>
          </div>
        </div>

        {/* Ghost Numbering */}
        <span
          className="font-display font-normal text-[160px] leading-none
            text-(--color-text-primary)/[0.03]
            absolute top-[120px] right-6 md:right-12 lg:right-24
            select-none pointer-events-none"
          aria-hidden="true"
        >
          01
        </span>

        {/* Interactive Typography List */}
        <div className="divide-y divide-(--color-border) border-y border-(--color-border)">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const isLive = project.link && !project.link.includes("github.com");

            return (
              <div
                key={project.id}
                className="fade-up transition-colors duration-200"
              >
                {/* Baris Utama (Tipografi Bersih) */}
                <button
                  type="button"
                  onClick={() => toggleProject(project.id)}
                  className={`w-full py-5 md:py-6 text-left grid grid-cols-[36px_1fr_auto] md:grid-cols-[56px_1fr_auto_auto] items-center gap-3 sm:gap-4 md:gap-8 group active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isExpanded
                      ? "bg-white/60 backdrop-blur-md rounded-2xl px-4 -mx-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-(--color-border)/70"
                      : "hover:bg-white/40 hover:rounded-2xl hover:px-4 hover:-mx-4 hover:shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
                  }`}
                  aria-expanded={isExpanded}
                >
                  {/* Nomor Indeks */}
                  <span className="font-sans text-[12px] font-mono tracking-wider text-(--color-text-muted) group-hover:text-(--color-accent) group-hover:scale-110 transition-all duration-300">
                    {project.index}
                  </span>

                  {/* Judul & Preview Tag */}
                  <div className="group-hover:translate-x-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="font-display text-xl md:text-2xl text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-[10px] tracking-wide text-(--color-text-muted) bg-black/[0.03] border border-(--color-border)/70 px-2.5 py-0.5 rounded-full group-hover:border-(--color-accent)/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="font-sans text-[10px] text-(--color-text-muted) self-center">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tahun (Desktop) */}
                  <span className="hidden md:block font-sans text-[12px] text-(--color-text-muted) group-hover:text-(--color-text-primary) transition-colors">
                    {project.year}
                  </span>

                  {/* Tombol Toggle Aksi */}
                  <div className="flex items-center gap-2 pl-2">
                    <span className="hidden sm:inline font-sans text-[11px] tracking-wider uppercase text-(--color-text-muted) group-hover:text-(--color-text-primary) transition-colors">
                      {isExpanded ? "Tutup" : "Preview"}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-(--color-border) flex items-center justify-center text-(--color-text-muted) group-hover:scale-110 group-hover:border-(--color-accent) group-hover:text-(--color-accent) group-hover:bg-(--color-accent)/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isExpanded ? "rotate-45 bg-(--color-accent) text-black border-(--color-accent)" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Konten Terbuka (Gambar + Detail + Link) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 280, damping: 28, mass: 0.8 }}
                      className="overflow-hidden bg-white/50 backdrop-blur-md border border-(--color-border)/80 rounded-2xl my-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                    >
                      <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start">
                        {/* Kolom Visual (Gambar jika ada, atau Card Arsitektur Bersih jika null) */}
                        <div>
                          {project.image ? (
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-(--color-border)/80 bg-(--color-surface-soft) shadow-sm group/img">
                              <img
                                src={project.image}
                                alt={`Screenshot antarmuka ${project.title}`}
                                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div className="aspect-[16/10] rounded-xl border border-(--color-border) bg-(--color-base) p-6 md:p-8 flex flex-col justify-between shadow-sm">
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="w-2 h-2 rounded-full bg-(--color-accent)" />
                                  <span className="font-sans text-[11px] tracking-widest uppercase text-(--color-accent)">
                                    Arsitektur &amp; Modul Proyek
                                  </span>
                                </div>
                                <h4 className="font-display text-2xl text-(--color-text-primary) mb-3">
                                  {project.title}
                                </h4>
                                <p className="font-sans font-light text-sm text-(--color-text-muted) leading-relaxed">
                                  Proyek dibangun dengan arsitektur kode terstruktur, modular, dan teruji langsung di lingkungan produksi/studi kasus.
                                </p>
                              </div>

                              {project.features && (
                                <div className="space-y-1.5 pt-4 border-t border-(--color-border)/50">
                                  {project.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-2">
                                      <span className="text-(--color-accent) text-xs">✓</span>
                                      <span className="font-sans text-[12px] text-(--color-text-primary)">
                                        {feat}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Kolom Detail & Tautan */}
                        <div className="flex flex-col justify-between h-full gap-6">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="font-sans text-[11px] tracking-widest uppercase text-(--color-accent)">
                                Detail Teknis &amp; Solusi
                              </span>
                              <span className="text-(--color-border)">·</span>
                              <span className="font-sans text-[11px] text-(--color-text-muted)">
                                Rilis {project.year}
                              </span>
                            </div>

                            <p className="font-sans font-light text-[15px] text-(--color-text-primary)/90 leading-relaxed mb-6">
                              {project.description}
                            </p>

                            <div className="mb-6">
                              <p className="font-sans text-[11px] tracking-widest uppercase text-(--color-text-muted) mb-3">
                                Teknologi Digunakan:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="font-sans text-[11px] text-(--color-text-muted) border border-(--color-border) px-2.5 py-1 rounded bg-(--color-base)"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Tombol Akses */}
                          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-(--color-border)/70">
                            {isLive && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 font-sans text-[12px] font-medium tracking-wide uppercase bg-(--color-text-primary) text-(--color-base) px-6 py-2.5 rounded-full hover:opacity-90 active:scale-[0.97] transition-all duration-200"
                              >
                                Buka Website Live
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </a>
                            )}
                            {project.repoLink && (
                              <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 font-sans text-[12px] font-medium tracking-wide uppercase border border-(--color-border)/80 bg-white/50 backdrop-blur-sm text-(--color-text-primary) px-6 py-2.5 rounded-full hover:bg-white/80 active:scale-[0.97] transition-all duration-200"
                              >
                                Source Code GitHub
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Seksi */}
        <div className="fade-up flex justify-center mt-16">
          <a
            href="https://github.com/vanoathalla?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-[12px] tracking-[0.14em] uppercase
              border border-(--color-text-primary) text-(--color-text-primary)
              px-8 py-[14px]
              hover:bg-(--color-text-primary) hover:text-(--color-base)
              transition-colors duration-200"
          >
            Lihat Seluruh Repositori di GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
