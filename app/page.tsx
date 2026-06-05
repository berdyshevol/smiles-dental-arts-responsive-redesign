import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { services, site, testimonials, tiles } from "@/lib/site";

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
              <h1 className="mt-6 text-balance text-4xl text-ink sm:text-5xl lg:text-[3.3rem]">
                Experience quality dental care provided by an{" "}
                <span className="text-brand">expert team</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
                We have built our office around the comfort and needs of our
                patients. All our staff members are friendly and help you with
                all information from the time you contact our dental practice.
                Our dentist is known for his sense of humour. We are equipped
                with state-of-art technological equipment, which help us in
                diagnosing a dental problem and curing the same. Our office is
                constantly upgraded with the latest equipment available on the
                market.
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
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
            <div className="mt-5 space-y-4 leading-relaxed text-slate">
              <p>
                We welcome you to our dental website and look forward to building
                a lifelong relationship with you as your family's dental care
                provider. When you visit Smiles Dental Arts, you'll be treated
                with the respect, friendliness, care and skill you expect and
                deserve from your dental care provider.
              </p>
              <p>
                Our objective as dental professionals is only to serve you and to
                make your every visit to our dental office in Cudahy a positive
                experience right from our first telephone conversation. Our
                philosophy is focused on your comfortable care, provided through
                our hi-tech, skilled service with a friendly, courteous touch.
              </p>
              <p>
                Our warm and highly skilled dental team members are committed to
                making your visit as comfortable and relaxing as possible.
                Experienced in addressing dental insurance questions, our staff
                will prepare any necessary forms on your behalf and help you
                maximize your dental insurance benefits.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── Straight / Confident smile ───────────────── */}
      <section className="mx-auto max-w-7xl space-y-20 px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Orthodontic Treatments
            </span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Straight Smile</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              A beautiful smile is the most valuable thing a person can wear
              anywhere, anytime. The beauty of a smile blooms to its fullest when
              the teeth are properly aligned. People with improperly aligned
              teeth often cover their mouth when laughing or smiling, or simply
              avoid smiling all together.
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
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Confident Smile</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Whether you need to replace one tooth or all of them, we can quickly
              give you the confident smile of your dream. Some of our
              prosthodontist treatments include Dental Veneers, Dental Crowns,
              Dental Bridges, Partials, and Dentures.
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

      {/* ───────────────── Office / Offers / Beautiful Smiles ───────────────── */}
      <section id="beautiful-smiles" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-card border border-line bg-white p-8 shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
                <h3 className="text-2xl text-brand-deep">{t.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate">{t.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read more →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Get in Touch ───────────────── */}
      <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-24">
        <div className="grid gap-12 rounded-[28px] border border-line bg-cream p-8 shadow-soft md:grid-cols-2 md:p-12">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Request an appointment
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Call us at{" "}
              <a href={site.phoneHref} className="font-semibold text-brand-dark">
                {site.phone}
              </a>{" "}
              or send a message and our team will get back to you. New patients
              are always welcome.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate">
              <p>📍 {site.address.line}, {site.address.city}</p>
              {site.hours.map((h) => (
                <p key={h.day} className="flex justify-between border-b border-line pb-1">
                  <span>{h.day}</span>
                  <span className="font-medium text-ink">{h.time}</span>
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
