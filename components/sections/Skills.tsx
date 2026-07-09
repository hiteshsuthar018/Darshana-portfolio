"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          eyebrow="Capabilities"
          title="A toolkit shaped by real product work."
          description="From early research to pixel-level polish — the range that turns a rough idea into a shippable interface."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="h-full rounded-4xl border border-line bg-surface p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-violet">
                    0{gi + 1}
                  </span>
                  <h3 className="font-display text-xl font-medium text-ink">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + ii * 0.04, duration: 0.4 }}
                      className="rounded-full border border-line bg-canvas-alt px-3.5 py-1.5 text-sm text-ink/80 hover:border-violet hover:text-violet hover:bg-violet-soft transition-colors duration-200"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
