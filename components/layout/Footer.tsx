import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted">Designed & built with care.</p>
      </div>
    </footer>
  );
}
