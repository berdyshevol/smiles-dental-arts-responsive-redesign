import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import { services, site } from "@/lib/site";
import Image from "next/image";

export const metadata = {
  title: "Office Tour | Smiles Dental Arts — Cudahy, CA",
  description:
    "Take a tour of Smiles Dental Arts — a modern, comfortable office equipped with state-of-the-art dental technology in Cudahy, CA.",
};

const gallery = [
  "/img/office-tour/image1.jpg",
  "/img/office-tour/image2.jpg",
  "/img/office-tour/image3.jpg",
  "/img/office-tour/image4.jpg",
];

export default function OfficeTour() {
  return (
    <>
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
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            About Us · Office Tour
          </p>
          <h1 className="mt-3 text-4xl text-white sm:text-5xl">Office Tour</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-ink sm:text-4xl">
            Built around your comfort
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            We've designed our office around the comfort and needs of our
            patients. Every staff member is friendly and ready to help from the
            moment you reach out — and yes, our dentist is known for his sense of
            humour. We're equipped with state-of-the-art technology that helps us
            diagnose and treat with precision, and we're constantly upgrading with
            the latest equipment available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="rounded-pill bg-brand px-7 py-3.5 font-semibold text-white shadow-card transition hover:bg-brand-dark"
            >
              Request an Appointment
            </a>
            <a
              href={site.phoneHref}
              className="rounded-pill border border-brand/25 bg-white px-7 py-3.5 font-semibold text-brand-dark transition hover:border-brand"
            >
              📞 Click to Call
            </a>
          </div>
        </Reveal>

        <div className="mt-14">
          <Gallery images={gallery} />
        </div>
      </section>

      {/* Service cards reuse */}
      <section className="bg-mint/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </span>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Our services</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-card border border-line bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-card">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg text-brand-deep">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
