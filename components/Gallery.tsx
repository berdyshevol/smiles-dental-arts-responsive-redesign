"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + images.length - 1) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            style={{ animationDelay: `${i * 0.06}s` }}
            className={`reveal group relative overflow-hidden rounded-card shadow-soft transition hover:shadow-card ${
              i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <Image
              src={src}
              alt={`Office photo ${i + 1}`}
              width={800}
              height={600}
              className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                i === 0 ? "h-72 sm:h-full" : "h-56"
              }`}
            />
            <span className="absolute inset-0 bg-brand-deep/0 transition group-hover:bg-brand-deep/15" />
            <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-brand-deep opacity-0 transition group-hover:opacity-100">
              ⤢
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-brand-deep/90 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25"
            >
              ✕
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25 md:left-10"
            >
              ‹
            </button>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[82vh] w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[index]}
                alt={`Office photo ${index + 1}`}
                width={1400}
                height={1000}
                className="h-full w-full object-contain"
              />
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-2xl text-white hover:bg-white/25 md:right-10"
            >
              ›
            </button>
            <p className="absolute bottom-6 text-sm text-mint/80">
              {index + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
