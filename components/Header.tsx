"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/site";

const socials = [
  {
    label: "Facebook",
    href: site.social.facebook,
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Yelp reviews",
    href: site.social.yelp,
    path: "M12 .587l3.668 7.431 8.2 1.192-5.934 5.785 1.401 8.169L12 18.896l-7.335 3.868 1.401-8.169L.132 9.21l8.2-1.192z",
  },
];

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
            <div className="flex items-center gap-1.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-mint/85 transition hover:bg-white/20 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
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
