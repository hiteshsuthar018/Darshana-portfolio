import { Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-16">
          <SectionLabel eyebrow="About" title="Building products people actually enjoy using." />

          <div>
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className="text-lg text-muted leading-relaxed mb-5 last:mb-0">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl border border-line bg-surface p-6">
                {about.highlights.map((h) => (
                  <div key={h.label}>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted mb-1.5">
                      {h.label}
                    </p>
                    <p className="text-sm font-medium text-ink">{h.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.48}>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-violet-soft px-5 py-4">
                <Sparkles size={18} className="text-violet shrink-0 mt-0.5" />
                <p className="text-sm text-ink/80 leading-relaxed">
                  Every project starts with the same question: what does the
                  person on the other side of the screen actually need — then
                  the interface follows.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
