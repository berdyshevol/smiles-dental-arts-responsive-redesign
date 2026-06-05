"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-brand-deep text-mint md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px]">
          <a
            href={site.address.maps}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 opacity-90 transition hover:opacity-100"
          >
            <span aria-hidden>📍</span>
            {site.address.line}, {site.address.city}
          </a>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="font-semibold tracking-wide">
              {site.phone}
            </a>
            <span className="h-3 w-px bg-mint/30" />
            <div className="flex items-center gap-3 text-mint/80">
              <a href={site.social.facebook} aria-label="Facebook" className="hover:text-white">Fb</a>
              <a href={site.social.instagram} aria-label="Instagram" className="hover:text-white">Ig</a>
              <a href={site.social.linkedin} aria-label="LinkedIn" className="hover:text-white">In</a>
              <a href={site.social.yelp} aria-label="Yelp" className="hover:text-white">Yp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-line bg-cream/90 backdrop-blur-md shadow-[0_10px_30px_-20px_rgba(10,93,84,0.5)]"
            : "border-transparent bg-cream/70 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/smiles-dental-art.png"
              alt={site.name}
              width={120}
              height={86}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                className="group relative text-[15px] font-medium text-ink/80 transition hover:text-brand-dark"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="hidden rounded-pill bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark md:inline-flex"
            >
              Request Appointment
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white text-brand-dark lg:hidden"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
                <span className="block h-0.5 w-5 rounded bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-brand-deep/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-cream p-6 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
            >
              <div className="flex items-center justify-between">
                <Image src="/img/smiles-dental-art.png" alt={site.name} width={96} height={70} className="h-11 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-xl text-brand-dark"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-lg font-medium text-ink transition hover:bg-mint hover:text-brand-deep"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3 pt-6">
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-pill bg-brand px-5 py-3 text-center font-semibold text-white shadow-soft"
                >
                  Request Appointment
                </a>
                <a
                  href={site.phoneHref}
                  className="block rounded-pill border border-brand/30 px-5 py-3 text-center font-semibold text-brand-dark"
                >
                  Call {site.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
