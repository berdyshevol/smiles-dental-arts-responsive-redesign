import Image from "next/image";
import Link from "next/link";
import { accreditations, nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-deep text-mint">
      <div className="bg-grain relative">
        {/* Accreditations strip — original colour logos on white chips */}
        <div className="border-b border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 items-stretch gap-4 px-6 py-8 sm:grid-cols-3 lg:grid-cols-6">
            {accreditations.map((a) => (
              <div
                key={a.alt}
                className="flex items-center justify-center rounded-xl bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5"
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={130}
                  height={70}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand + intro */}
          <div>
            <Image
              src="/img/smiles-dental-art.png"
              alt={site.name}
              width={150}
              height={108}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-mint/75">
              Comfortable, hi-tech dental care with a friendly, courteous touch —
              building lifelong relationships, one smile at a time.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 inline-flex items-center gap-2 rounded-pill bg-gold px-5 py-3 font-semibold text-brand-deep transition hover:brightness-105"
            >
              <span aria-hidden>📞</span> {site.phone}
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg text-white">Office Hours</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <span className="text-mint/70">{h.day}</span>
                  <span className="font-medium text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit + links */}
          <div>
            <h4 className="text-lg text-white">Visit Us</h4>
            <a
              href={site.address.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-sm text-mint/80 transition hover:text-white"
            >
              {site.address.line}
              <br />
              {site.address.city}
            </a>
            <nav className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {nav.map((n) => (
                <Link key={n.label} href={n.href} className="text-mint/75 transition hover:text-white">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-mint/60 sm:flex-row">
            <p>© 2004 – 2026 Smiles Dental Arts. All rights reserved.</p>
            <p>Responsive redesign demo — built with Next.js.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
