import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel eyebrow="Experience" title="Where the craft was earned." />

        <Reveal delay={0.15}>
          <div className="mt-16 rounded-4xl border border-line bg-surface overflow-hidden">
            <div className="grid lg:grid-cols-[1fr,1.4fr]">
              <div className="p-8 md:p-10 bg-canvas-gradient text-white flex flex-col justify-between">
                <div>
                  <span className="grid place-items-center h-11 w-11 rounded-2xl bg-white/15 mb-6">
                    <Briefcase size={18} />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                    {experience.duration}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium leading-tight">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-white/85">{experience.company}</p>
                </div>
                <p className="mt-8 text-sm text-white/70 leading-relaxed hidden lg:block">
                  Hands-on product design across web, mobile, and dashboard
                  surfaces — from first wireframe to developer handoff.
                </p>
              </div>

              <div className="p-8 md:p-10">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {experience.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={17} className="text-violet shrink-0 mt-0.5" />
                      <span className="text-sm text-muted leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
