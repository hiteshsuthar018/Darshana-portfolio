"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          eyebrow="Process"
          title="A repeatable path from ambiguity to shipped UI."
          description="Every project moves through the same five stages — order that keeps research grounded and design decisions accountable."
        />

        <div ref={ref} className="relative mt-20 pl-10 sm:pl-14">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-canvas-gradient"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-14">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="relative">
                  <span className="absolute -left-10 sm:-left-14 top-1 grid place-items-center h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-canvas-gradient shadow-glow">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink sm:w-40 shrink-0">
                      {step.title}
                    </h3>
                    <div className="mt-2 sm:mt-0">
                      <p className="text-muted leading-relaxed max-w-lg">{step.detail}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink/70"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
