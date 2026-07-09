import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-36 bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          eyebrow="Selected Work"
          title="Four products, four different problems."
          description="Each project below expands into a short case study — the problem, the approach, and what shipped."
        />

        <div className="mt-16 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
