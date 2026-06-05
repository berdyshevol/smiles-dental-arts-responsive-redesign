import { site } from "@/lib/site";

/**
 * Sticky bottom action bar — mobile only. Keeps "Call" and "Book" one tap away,
 * the single biggest conversion lever for a local dental practice on a phone.
 */
export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 gap-2 border-t border-line bg-white/95 px-3 pt-3 backdrop-blur lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 rounded-pill border border-brand/30 px-4 py-3 font-semibold text-brand-dark"
      >
        <span aria-hidden>📞</span> Call
      </a>
      <a
        href="/#contact"
        className="flex items-center justify-center gap-2 rounded-pill bg-brand px-4 py-3 font-semibold text-white shadow-soft"
      >
        Book Appointment
      </a>
    </div>
  );
}
