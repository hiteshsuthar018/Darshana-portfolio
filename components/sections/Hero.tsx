"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight, Figma, Layers, MousePointerClick } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile } from "@/lib/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set(".hero-line > span", { yPercent: 120, rotate: 4 })
        .set(".hero-fade", { opacity: 0, y: 16 })
        .set(".hero-card", { opacity: 0, scale: 0.9, y: 30 })
        .to(".hero-line > span", {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          stagger: 0.09,
        })
        .to(
          ".hero-fade",
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        )
        .to(
          ".hero-card",
          { opacity: 1, scale: 1, y: 0, duration: 0.9, stagger: 0.12 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(".hero-card", {
        x: (i) => relX * (18 + i * 6),
        y: (i) => relY * (14 + i * 5),
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-canvas-gradient-soft blur-3xl animate-pulse-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute noise-overlay inset-0"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl w-full px-6 grid lg:grid-cols-[1.15fr,0.85fr] gap-16 items-center">
        <div>
          <div className="hero-fade eyebrow mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            {profile.role} · Open to work
          </div>

          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-[6.2rem] sm:leading-[0.95] font-medium tracking-tight text-ink">
            <div className="hero-line overflow-hidden">
              <span className="inline-block">Darshana</span>
            </div>
            <div className="hero-line overflow-hidden">
              <span className="inline-block gradient-text">Soni</span>
            </div>
          </h1>

          <p className="hero-fade mt-8 max-w-lg text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href="#work" variant="primary">
              View Work <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} variant="secondary">
              Get in Touch
            </MagneticButton>
          </div>

          <div className="hero-fade mt-16 hidden sm:flex items-center gap-2 text-xs text-muted">
            <ArrowDown size={14} className="animate-bounce" />
            Scroll to explore
          </div>
        </div>

        <div ref={cardsRef} className="relative h-[420px] sm:h-[480px] hidden md:block">
          <div
            className="hero-card animate-float absolute top-2 right-4 w-56 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-card p-5"
            style={{ ["--tilt" as string]: "-4deg" }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-muted">Design System</span>
              <Layers size={14} className="text-violet" />
            </div>
            <div className="space-y-2">
              <div className="h-2.5 rounded-full bg-violet-soft" />
              <div className="h-2.5 w-4/5 rounded-full bg-canvas-alt" />
              <div className="h-2.5 w-3/5 rounded-full bg-canvas-alt" />
            </div>
            <div className="mt-4 flex gap-1.5">
              <span className="h-6 w-6 rounded-full bg-violet" />
              <span className="h-6 w-6 rounded-full bg-indigo" />
              <span className="h-6 w-6 rounded-full bg-coral" />
            </div>
          </div>

          <div
            className="hero-card animate-float absolute top-40 left-0 w-48 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-card p-5"
            style={{ animationDelay: "0.4s", ["--tilt" as string]: "3deg" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Figma size={14} className="text-indigo" />
              <span className="text-xs font-mono text-muted">Prototype.fig</span>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-canvas-gradient-soft" />
          </div>

          <div
            className="hero-card animate-float absolute bottom-4 right-10 w-44 rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-card px-4 py-3.5 flex items-center gap-3"
            style={{ animationDelay: "0.8s", ["--tilt" as string]: "-2deg" }}
          >
            <span className="grid place-items-center h-8 w-8 rounded-full bg-canvas-gradient text-white">
              <MousePointerClick size={14} />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">Handoff ready</p>
              <p className="text-[11px] text-muted">Dev spec synced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
