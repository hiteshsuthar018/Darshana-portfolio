import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { whyWorkWithMe } from "@/lib/data";

export default function WhyMe() {
  return (
    <section className="relative py-28 md:py-36 bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-16 items-start">
          <SectionLabel eyebrow="Why work with me" title="What I bring to the table." />
          <div className="grid sm:grid-cols-2 gap-4">
            {whyWorkWithMe.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 hover:border-violet transition-colors duration-300">
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-violet-soft shrink-0">
                    <Check size={14} className="text-violet" />
                  </span>
                  <span className="text-sm text-ink/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
