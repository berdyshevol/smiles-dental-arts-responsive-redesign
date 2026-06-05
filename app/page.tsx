import Image from "next/image";
import Reveal from "@/components/Reveal";
import { services, site, testimonials } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-mint blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 top-40 h-64 w-64 rounded-full bg-gold-soft/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-2">
          <div className="relative z-10 order-2 lg:order-1">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-pill bg-mint px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-deep">
                Visit Us · Cudahy, CA
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl text-ink sm:text-5xl lg:text-[3.4rem]">
                Quality dental care, delivered by an{" "}
                <span className="text-brand">expert team</span> you can trust.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
                We've built our office around the comfort and needs of our
                patients — friendly staff, state-of-the-art technology, and a
                dentist known for his warmth (and his sense of humour).
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-pill bg-brand px-7 py-3.5 font-semibold text-white shadow-card transition hover:bg-brand-dark"
                >
                  Request an Appointment
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-pill border border-brand/25 bg-white px-7 py-3.5 font-semibold text-brand-dark transition hover:border-brand hover:shadow-soft"
                >
                  <span aria-hidden>📞</span> Click to Call
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate">
                <div>
                  <p className="font-display text-3xl text-brand-deep">20+</p>
                  <p>Years of smiles</p>
                </div>
                <span className="h-10 w-px bg-line" />
                <div>
                  <p className="font-display text-3xl text-brand-deep">5.0★</p>
                  <p>Patient rated</p>
                </div>
                <span className="h-10 w-px bg-line" />
                <div>
                  <p className="font-display text-3xl text-brand-deep">Hi-tech</p>
                  <p>Modern equipment</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-tr from-mint to-gold-soft/50 blur-[2px]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-card sm:aspect-square">
                <Image
                  src="/img/main-slider/banner.jpg"
                  alt="Smiling patient at Smiles Dental Arts"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[85%_center]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Services ───────────────── */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            What we do
          </span>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Comprehensive care for every smile
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group h-full overflow-hidden rounded-card border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2">
                    Learn more →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Welcome ───────────────── */}
      <section className="relative overflow-hidden bg-mint/60">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[24px] shadow-card">
              <Image
                src="/img/services/prosthodontics.jpg"
                alt="Inside Smiles Dental Arts"
                width={760}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Welcome
            </span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Welcome to Smiles Dental Arts
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Our objective is simple — to serve you and make every visit a
              positive experience, building a lifelong relationship along the
              way. Our philosophy is comfortable care, delivered through hi-tech,
              skilled service with a friendly, courteous touch.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Our experienced team is happy to help with any insurance questions
              and will work to maximize your benefits — so you can focus on your
              smile, not the paperwork.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Patient comfort first",
                "Latest dental technology",
                "Most insurance accepted",
                "Gentle, judgement-free care",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-slate">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Feature: Straight / Confident smile ───────────────── */}
      <section id="smiles" className="mx-auto max-w-7xl space-y-20 px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Orthodontics
            </span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">A straight smile</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              A beautiful smile is the most valuable thing a person can wear,
              anywhere, anytime. When teeth are properly aligned, you'll never
              have a reason to hold your smile back. From Invisalign to braces,
              we'll guide you to the confident smile you deserve.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="/img/services/orthodontic-treatments.jpg"
              alt="Orthodontic treatments"
              width={760}
              height={520}
              className="w-full rounded-[24px] object-cover shadow-card"
            />
          </Reveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Prosthodontics
            </span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">A confident smile</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Whether you need to replace a single tooth or restore a full smile,
              we offer dental veneers, crowns, bridges, partials and dentures —
              custom-crafted to look and feel completely natural.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <Image
              src="/img/services/invisalign_and_dental_braces.jpg"
              alt="Prosthodontics"
              width={760}
              height={520}
              className="w-full rounded-[24px] object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Testimonials ───────────────── */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-mint">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url(/img/review-section-overlay-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">
              What our patients say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-card border border-white/10 bg-white/5 p-7 backdrop-blur">
                  <div className="text-gold" aria-hidden>★★★★★</div>
                  <blockquote className="mt-4 flex-1 leading-relaxed text-mint/90">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5 font-semibold text-white">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── CTA band ───────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand to-brand-deep px-8 py-14 text-center shadow-card md:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-2xl" />
            <h2 className="text-balance text-3xl text-white sm:text-4xl">
              Ready for your best smile yet?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-mint/85">
              New patients are always welcome. Book a visit today and experience
              dental care built around your comfort.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={site.phoneHref}
                className="rounded-pill bg-gold px-8 py-3.5 font-semibold text-brand-deep transition hover:brightness-105"
              >
                Call {site.phone}
              </a>
              <a
                href="#contact"
                className="rounded-pill border border-white/40 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Request an Appointment
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
