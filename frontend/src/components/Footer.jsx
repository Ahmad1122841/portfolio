import { ArrowUp, ArrowUpRight, Heart, Code2 } from "lucide-react";
import { socialLinks } from "../data";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090f] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-3xl font-bold tracking-tight"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
                PM
              </span>
              <span>
                Portfolio<span className="text-accent">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Building modern, responsive, and user-friendly digital
              experiences with clean code and thoughtful design.
            </p>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Let's work together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <nav className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-accent"
                >
                  <span className="h-1 w-1 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Have an idea or opportunity? Let's connect and create something
              great.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                >
                  <social.icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {year} Your Name. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-gray-500">
            Designed & built with
            <Heart size={14} className="fill-accent text-accent" />
            <span className="text-gray-300">and React</span>
            <Code2 size={15} className="text-accent" />
          </p>

          <a
            href="#"
            aria-label="Back to top"
            title="Back to top"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20"
          >
            <ArrowUp
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;