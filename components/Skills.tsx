"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
}

const skillGroups = [
  {
    category: "Frontend & Mobile",
    items: ["Next.js", "React", "TypeScript", "Flutter & Dart", "SvelteKit", "Tailwind CSS"],
  },
  {
    category: "Backend & Database",
    items: ["Laravel", "PHP", "Node.js", "PostgreSQL", "MySQL", "Prisma ORM", "SQLite"],
  },
  {
    category: "Tools & Multiplatform",
    items: ["Git & GitHub", "Electron", "Capacitor", "Figma", "VS Code", "Postman", "Canva"],
  },
  {
    category: "Kepemimpinan & Minat",
    items: ["Event Management", "Team Leadership", "Strategic Planning", "Football & Futsal", "Public Speaking"],
  },
];

const experiences: ExperienceItem[] = [
  {
    id: "if-cup-2024",
    role: "Ketua Pelaksana",
    org: "IF CUP 2024 — Turnamen Olahraga & E-Sport",
    period: "Agu – Nov 2024",
    type: "Leadership Utama",
    summary:
      "Memimpin seluruh rangkaian perencanaan, perizinan, dan eksekusi turnamen olahraga tahunan terbesar di jurusan Informatika UPNVY.",
    highlights: [
      "Mengoordinasikan lebih dari 60 panitia lintas divisi (Acara, Perlengkapan, Humas, Medis, Wasit, Konsumsi).",
      "Mengelola alokasi anggaran, sponsorship, dan perizinan venue lapangan secara profesional.",
      "Menyelesaikan kendala taktis dan operasional secara cepat selama fase persiapan hingga hari pelaksanaan kompetisi.",
    ],
  },
  {
    id: "ukm-sepak-bola",
    role: "Staff Divisi Sepak Bola",
    org: "UKM Sepak Bola UPN &ldquo;Veteran&rdquo; Yogyakarta",
    period: "Jan 2024 – Feb 2025",
    type: "Organisasi Olahraga Kampus",
    summary:
      "Menangani operasional latihan rutin serta persiapan delegasi tim universitas dalam kejuaraan sepak bola dan turnamen antar-kampus.",
    highlights: [
      "Mengatur jadwal latihan fisik dan taktik tim sepak bola bersama tim kepelatihan.",
      "Mengoordinasikan logistik, perlengkapan pertandingan, dan akomodasi pemain saat bertanding.",
      "Memperkuat hubungan kekeluargaan dan sportivitas antar-anggota lintas fakultas.",
    ],
  },
  {
    id: "atlet-sepak-bola",
    role: "Atlet Sepak Bola Muda (Kompetisi Pembinaan)",
    org: "Karier Atletik Pembinaan Sepak Bola",
    period: "Fase Atletik Remaja",
    type: "Rekam Jejak Atletik",
    summary:
      "Masa pembinaan intensif dan kejuaraan sepak bola usia muda yang membentuk fondasi karakter, ketahanan mental, dan kedisiplinan hidup.",
    highlights: [
      "Menjalani latihan disiplin tinggi, mengasah ketahanan fisik, fokus, dan taktik bermain di lapangan hijau.",
      "Berpartisipasi dalam berbagai kejuaraan dan turnamen sepak bola usia muda.",
      "Kini nilai-nilai sportivitas dan kepemimpinan tersebut terus diterapkan dalam karier rekayasa perangkat lunak, sementara sepak bola tetap aktif ditekuni sebagai hobi utama.",
    ],
  },
  {
    id: "himatif-seni-olahraga",
    role: "Staff Seni & Olahraga",
    org: "HIMATIF (Himpunan Mahasiswa Teknik Informatika) UPNVY",
    period: "Mar 2024 – Mar 2025",
    type: "Himpunan Jurusan",
    summary:
      "Memfasilitasi dan menggerakkan kegiatan minat-bakat mahasiswa Informatika di bidang olahraga dan seni untuk mempererat kebersamaan.",
    highlights: [
      "Menyelenggarakan sesi latihan bersama futsal dan olahraga rutin bagi mahasiswa Informatika.",
      "Menjadi jembatan koordinasi atlet jurusan untuk kejuaraan tingkat fakultas dan universitas.",
      "Mendukung berbagai agenda internal himpunan dengan semangat kolaboratif.",
    ],
  },
  {
    id: "if-corner-2024",
    role: "Staff Divisi Acara",
    org: "IF Corner 2024",
    period: "Agu – Nov 2024",
    type: "Kepanitiaan Jurusan",
    summary:
      "Terlibat aktif dalam perancangan konsep rundown, penyusunan materi kegiatan, dan eksekusi teknis panggung.",
    highlights: [
      "Menyusun time schedule rundown acara agar setiap segmen berjalan tepat waktu.",
      "Berkoordinasi dengan pengisi acara dan pemateri untuk kelancaran jalannya sesi.",
      "Mengatasi dinamika perubahan jadwal di lapangan dengan komunikasi yang sigap.",
    ],
  },
  {
    id: "remaja-masjid",
    role: "Sekretaris",
    org: "Remaja Masjid Babul Choir",
    period: "Sep 2024 – Sekarang",
    type: "Pengabdian Masyarakat",
    summary:
      "Menjalankan fungsi administrasi, persuratan, dan dokumentasi kegiatan kepemudaan sosial keagamaan di lingkungan masyarakat.",
    highlights: [
      "Menyusun proposal dan laporan pertanggungjawaban (LPJ) kegiatan sosial kepemudaan.",
      "Mendokumentasikan arsip keputusan rapat serta memelihara database keanggotaan.",
      "Menggerakkan partisipasi pemuda sekitar dalam kegiatan sosial dan kemasyarakatan.",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedExpId, setExpandedExpId] = useState<string | null>("if-cup-2024");

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
                setTimeout(() => node.classList.add("visible"), i * 80);
              });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleExp = (id: string) => {
    setExpandedExpId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-(--color-surface) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16"
      aria-label="Keahlian & Pengalaman Organisasi"
    >
      <div className="max-w-[1280px] mx-auto">

        {/* Header Seksi */}
        <div className="fade-up mb-16 border-b border-(--color-border) pb-8">
          <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-(--color-accent) mb-3">
            Keahlian &amp; Pengalaman
          </p>
          <h2 className="font-display font-normal text-3xl md:text-5xl text-(--color-text-primary)">
            Teknologi &amp; Rekam Jejak
          </h2>
        </div>

        {/* Grid Skill & Tech Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-(--color-border) mb-20 rounded-xl overflow-hidden border border-(--color-border)">
          {skillGroups.map(({ category, items }) => (
            <div
              key={category}
              className="fade-up bg-(--color-surface) p-8 hover:bg-(--color-base) transition-colors duration-300"
            >
              <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-(--color-accent) mb-6">
                {category}
              </p>
              <ul className="space-y-3" role="list">
                {items.map((item) => (
                  <li
                    key={item}
                    className="font-sans font-light text-(--color-text-primary) text-sm flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Seksi Pengalaman & Jejak Organisasi (Interactive Typography List) */}
        <div className="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-(--color-text-muted)">
              Pengalaman Organisasi, Kepanitiaan &amp; Atletik
            </p>
            <span className="font-sans text-[11px] text-(--color-accent) tracking-wide">
              Klik baris untuk melihat detail kontribusi
            </span>
          </div>

          <div className="divide-y divide-(--color-border) border-y border-(--color-border)">
            {experiences.map((exp) => {
              const isExpanded = expandedExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  className="transition-colors duration-200"
                >
                  {/* Baris Tipografi Interaktif */}
                  <button
                    type="button"
                    onClick={() => toggleExp(exp.id)}
                    className={`w-full py-5 md:py-6 text-left grid grid-cols-1 md:grid-cols-[1.5fr_1fr_auto] items-center gap-3 md:gap-6 group transition-colors duration-200 ${
                      isExpanded ? "bg-(--color-surface)/70" : "hover:bg-(--color-surface)/30"
                    }`}
                    aria-expanded={isExpanded}
                  >
                    {/* Peran & Lembaga */}
                    <div className="flex items-baseline gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent) shrink-0 translate-y-[-2px]" aria-hidden="true" />
                      <div>
                        <span className="font-display text-lg md:text-xl text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors">
                          {exp.role}
                        </span>
                        <span className="text-(--color-border) mx-2">·</span>
                        <span className="font-sans font-light text-sm text-(--color-text-muted)">
                          {exp.org}
                        </span>
                      </div>
                    </div>

                    {/* Tipe & Periode */}
                    <div className="flex items-center gap-3 pl-4 md:pl-0">
                      <span className="font-sans text-[10px] tracking-wider uppercase text-(--color-text-muted) border border-(--color-border) px-2 py-0.5 rounded">
                        {exp.type}
                      </span>
                      <span className="font-sans text-[12px] text-(--color-text-muted)">
                        {exp.period}
                      </span>
                    </div>

                    {/* Indikator Expand */}
                    <div className="flex items-center justify-end pr-2">
                      <span
                        className={`w-7 h-7 rounded-full border border-(--color-border) flex items-center justify-center text-[13px] text-(--color-text-muted) group-hover:border-(--color-accent) group-hover:text-(--color-accent) transition-transform duration-300 ${
                          isExpanded ? "rotate-45 bg-(--color-accent) text-black border-(--color-accent)" : ""
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </button>

                  {/* Detail Kontribusi Terbuka */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key={`exp-detail-${exp.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-(--color-base)/50 border-t border-(--color-border)"
                      >
                        <div className="p-6 md:p-8 pl-8 md:pl-12">
                          <p className="font-sans font-light text-[15px] text-(--color-text-primary) leading-relaxed mb-4">
                            {exp.summary}
                          </p>
                          <div className="space-y-2">
                            <span className="font-sans text-[11px] tracking-wider uppercase text-(--color-accent) block mb-2">
                              Poin Kontribusi &amp; Tanggung Jawab:
                            </span>
                            {exp.highlights.map((point, idx) => (
                              <div key={idx} className="flex items-start gap-2.5">
                                <span className="text-(--color-accent) text-xs mt-0.5">▹</span>
                                <span className="font-sans font-light text-sm text-(--color-text-muted) leading-relaxed">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
