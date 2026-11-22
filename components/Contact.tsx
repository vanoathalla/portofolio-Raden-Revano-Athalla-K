"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="bg-(--color-base) px-6 md:px-12 lg:px-24 py-[120px] max-md:py-16 relative overflow-hidden"
      aria-label="Kontak"
    >
      {/* iOS Ambient Aura */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-t from-amber-200/15 via-orange-100/10 to-transparent rounded-full blur-3xl -z-10 animate-ambient"
        aria-hidden="true"
      />

      <div className="max-w-[680px] mx-auto text-center">
        {/* iOS Card Container */}
        <div className="ios-sheen bg-white/60 backdrop-blur-xl border border-(--color-border)/80 rounded-3xl p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)] hover:border-(--color-accent)/30 transition-all duration-300">
          <p className="fade-up font-sans text-[11px] font-medium tracking-[0.18em] uppercase text-(--color-accent) mb-4">
            Kontak &amp; Komunikasi
          </p>

          <h2 className="fade-up font-display font-normal text-[clamp(2rem,4.5vw,48px)] leading-[1.12] text-(--color-text-primary) mb-5">
            Mari terhubung dan
            <br />
            berdiskusi lebih lanjut.
          </h2>

          <p className="fade-up font-sans font-light text-[15px] text-(--color-text-muted) max-w-md mx-auto mb-8 leading-relaxed">
            Terbuka untuk diskusi seputar proyek teknologi, peluang kolaborasi, maupun pertanyaan terkait karya di portofolio ini.
          </p>

          {/* Email & Telepon — iOS Pill Badges */}
          <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="mailto:revanoathalla31@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-black/[0.03] border border-(--color-border)/70 font-sans text-[14px] text-(--color-text-primary) hover:bg-black/[0.06] active:scale-[0.97] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              revanoathalla31@gmail.com
            </a>

            <a
              href="tel:088232850046"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-black/[0.03] border border-(--color-border)/70 font-sans text-[14px] text-(--color-text-muted) hover:text-(--color-text-primary) hover:bg-black/[0.06] active:scale-[0.97] transition-all duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              088232850046
            </a>
          </div>

          {/* Social links (iOS Capsule Buttons) */}
          <div className="fade-up flex items-center justify-center gap-2.5 flex-wrap pt-6 border-t border-(--color-border)/60">
            {[
              { label: "GitHub",    href: "https://github.com/vanoathalla?tab=repositories" },
              { label: "LinkedIn",  href: "https://www.linkedin.com/in/revano-athalla-357483392/" },
              { label: "Instagram", href: "https://instagram.com/vanoathalla_" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[12px] font-medium tracking-wide px-4 py-1.5 rounded-full border border-(--color-border)/70 bg-white/70 text-(--color-text-muted) hover:text-(--color-text-primary) hover:border-(--color-accent) hover:bg-white active:scale-[0.97] transition-all duration-200"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
