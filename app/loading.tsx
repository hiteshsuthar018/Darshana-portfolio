export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-canvas">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-line" />
          <div className="absolute inset-0 rounded-full border-2 border-t-violet border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Loading
        </p>
      </div>
    </div>
  );
}
