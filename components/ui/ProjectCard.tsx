"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Target, Lightbulb, Wrench, ListChecks } from "lucide-react";
import TiltCard from "./TiltCard";
import ProjectMockup from "./ProjectMockup";
import Reveal from "./Reveal";
import { Project } from "@/lib/data";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="group rounded-4xl border border-line bg-surface overflow-hidden transition-shadow duration-400 hover:shadow-card-hover">
        <div className="grid lg:grid-cols-[1fr,1fr]">
          <TiltCard className="p-6 sm:p-8" intensity={6}>
            <ProjectMockup project={project} />
          </TiltCard>

          <div className="p-6 sm:p-8 lg:pl-2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-violet">{project.index}</span>
              <span className="h-px flex-1 bg-line" />
              <span className="text-xs font-mono uppercase tracking-wider text-muted">
                {project.category}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink leading-tight text-balance">
              {project.title}
            </h3>
            <p className="mt-4 text-muted leading-relaxed">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-canvas-alt px-3 py-1 text-xs text-ink/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink hover:text-violet transition-colors duration-200"
            >
              {open ? "Hide case study" : "View case study"}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-line"
            >
              <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-8 bg-canvas-alt/60">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={16} className="text-violet" />
                    <h4 className="text-sm font-semibold text-ink">Problem</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={16} className="text-violet" />
                    <h4 className="text-sm font-semibold text-ink">Solution</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench size={16} className="text-violet" />
                    <h4 className="text-sm font-semibold text-ink">Design process</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.process.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink/70"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ListChecks size={16} className="text-violet" />
                    <h4 className="text-sm font-semibold text-ink">Key features</h4>
                  </div>
                  <ul className="grid grid-cols-1 gap-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-muted flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-violet" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
