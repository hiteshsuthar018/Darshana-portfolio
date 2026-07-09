"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-white/70 backdrop-blur-xl border border-line shadow-card"
                : "bg-transparent border border-transparent"
            }`}
          >
            <a href="#top" className="font-display text-lg font-medium tracking-tight">
              Darshana<span className="text-violet">.</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={`mailto:${profile.email}`}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink text-white text-sm font-medium px-4 py-2 hover:bg-violet transition-colors duration-300"
            >
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-canvas md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-lg font-medium">Darshana<span className="text-violet">.</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-6 mt-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="py-3.5 text-3xl font-display text-ink border-b border-line"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
