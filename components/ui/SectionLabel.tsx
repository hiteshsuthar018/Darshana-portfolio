import Reveal from "./Reveal";

interface SectionLabelProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionLabel({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionLabelProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl font-medium text-ink text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
