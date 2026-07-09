import { Project } from "@/lib/data";

export default function ProjectMockup({ project }: { project: Project }) {
  const isMobile = project.category.toLowerCase().includes("mobile");
  const isDashboard = project.category.toLowerCase().includes("dashboard");

  return (
    <div
      className="relative aspect-[4/3] rounded-3xl p-6 sm:p-8 flex items-center justify-center overflow-hidden"
      style={{ background: project.gradient }}
    >
      <div
        className="absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl opacity-40"
        style={{ background: project.accent }}
        aria-hidden="true"
      />

      {isMobile ? (
        <div className="relative w-32 sm:w-36 rounded-[2rem] border-[6px] border-ink/90 bg-white shadow-2xl overflow-hidden aspect-[9/19]">
          <div className="absolute top-0 inset-x-0 h-5 bg-ink/90 rounded-b-xl mx-auto w-16" />
          <div className="p-3 pt-7 space-y-2">
            <div className="h-3 w-2/3 rounded-full" style={{ background: project.accent, opacity: 0.85 }} />
            <div className="h-16 rounded-xl bg-canvas-alt" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-lg bg-canvas-alt" />
              <div className="h-12 rounded-lg bg-canvas-alt" />
            </div>
            <div className="h-2 w-full rounded-full bg-canvas-alt" />
            <div className="h-2 w-4/5 rounded-full bg-canvas-alt" />
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-sm rounded-2xl border border-white/70 bg-white shadow-2xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line">
            <span className="h-2 w-2 rounded-full bg-coral/70" />
            <span className="h-2 w-2 rounded-full bg-violet/50" />
            <span className="h-2 w-2 rounded-full bg-indigo/50" />
          </div>
          <div className="p-4 space-y-3">
            {isDashboard ? (
              <>
                <div className="flex gap-2">
                  <div className="h-14 flex-1 rounded-lg" style={{ background: project.accent, opacity: 0.16 }} />
                  <div className="h-14 flex-1 rounded-lg bg-canvas-alt" />
                  <div className="h-14 flex-1 rounded-lg bg-canvas-alt" />
                </div>
                <div className="h-20 rounded-lg bg-canvas-alt flex items-end gap-1.5 p-3">
                  {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: `${h}%`, background: project.accent, opacity: 0.6 }}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="h-24 rounded-lg" style={{ background: project.accent, opacity: 0.14 }} />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-lg bg-canvas-alt" />
                  <div className="h-14 rounded-lg bg-canvas-alt" />
                  <div className="h-14 rounded-lg bg-canvas-alt" />
                </div>
              </>
            )}
            <div className="h-2 w-3/4 rounded-full bg-canvas-alt" />
            <div className="h-2 w-1/2 rounded-full bg-canvas-alt" />
          </div>
        </div>
      )}
    </div>
  );
}
