import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Meet the Doctor — Dr. Cesar Sanchez DDS | Smiles Dental Arts",
  description:
    "Meet Dr. Cesar Sanchez DDS — gentle, multilingual dental care focused on trust and comfort, in Cudahy, CA.",
};

const credentials = [
  "California Dental Association (CDA)",
  "American Dental Association (ADA)",
  "United States Dental Institute (USDI)",
];

export default function MeetTheDoctor() {
  return (
    <>
      <PageHero crumb="About Us · Meet the Doctor" title="Meet the Doctor" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Photo + sidebar */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-mint to-gold-soft/50" />
                <div className="relative overflow-hidden rounded-[24px] shadow-card">
                  <Image
                    src="/img/dr-sanchez.jpg"
                    alt="Dr. Cesar Sanchez DDS"
                    width={620}
                    height={720}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-card border border-line bg-white p-6 shadow-soft">
                <h3 className="text-lg text-brand-deep">Visit Dr. Sanchez</h3>
                <a
                  href={site.address.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-sm text-slate transition hover:text-brand-dark"
                >
                  📍 {site.address.line}, {site.address.city}
                </a>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-sm font-semibold text-brand-dark"
                >
                  📞 {site.phone}
                </a>
                <a
                  href="/#contact"
                  className="mt-5 block rounded-pill bg-brand px-5 py-3 text-center font-semibold text-white shadow-soft transition hover:bg-brand-dark"
                >
                  Request an Appointment
                </a>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Dentist
            </span>
            <h2 className="mt-3 text-4xl text-ink">Dr. Cesar Sanchez, DDS</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate">
              <p>
                Dr. Sanchez comes from a family dental heritage and trained
                internationally, earning his initial dental credential from
                Universidad De La Salle in 2012, followed by his Doctor of Dental
                Surgery degree from the same institution in 2013.
              </p>
              <p>
                His primary concern when treating patients is the relationship he
                forms with them. As he puts it — without first gaining a patient's
                trust, they'll never be able to relax and feel as comfortable as
                possible in the chair.
              </p>
              <p>
                Naturally personable and multilingual, Dr. Sanchez connects easily
                with the diverse community he serves, making every patient feel
                genuinely at home from the very first visit.
              </p>
            </div>

            <div className="mt-10 rounded-card border border-line bg-mint/50 p-7">
              <h3 className="text-xl text-brand-deep">Memberships & Credentials</h3>
              <ul className="mt-4 space-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-slate">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-slate">
              Curious about the practice?{" "}
              <Link href="/office-tour" className="font-semibold text-brand-dark underline-offset-4 hover:underline">
                Take the office tour →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PageHero({ crumb, title }: { crumb: string; title: string }) {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-16 text-mint md:py-20">
      <div className="bg-grain absolute inset-0" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/img/review-section-overlay-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">{crumb}</p>
        <h1 className="mt-3 text-4xl text-white sm:text-5xl">{title}</h1>
      </div>
    </section>
  );
}
