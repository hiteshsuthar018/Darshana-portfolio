import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: Mail },
  { label: "LinkedIn", value: "darshana-soni", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "Darshanasoni23", href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-radial-fade"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-5xl bg-ink text-white px-6 sm:px-14 py-16 sm:py-24 text-center relative overflow-hidden">
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo/30 blur-3xl"
            aria-hidden="true"
          />

          <Reveal>
            <span className="eyebrow text-violet">Let&apos;s build something</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-heading mt-5 text-4xl sm:text-6xl font-medium text-balance max-w-2xl mx-auto">
              Have a product that needs a thoughtful interface?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-white/70 max-w-md mx-auto">
              I&apos;m currently open to new opportunities and freelance
              collaborations. Reach out and let&apos;s talk about it.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex justify-center">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary" className="!bg-white !text-ink hover:!bg-violet hover:!text-white">
                Say hello <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2.5 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:border-violet hover:text-white transition-colors duration-300"
                >
                  <link.icon size={15} />
                  {link.value}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
