/**
 * Soft SVG wave divider. Place inside a `relative overflow-hidden` section.
 * `fill` should match the colour of the ADJACENT (outer) section so the wave
 * reads as that section spilling into this one. Colour via the `text-*` class
 * (the path uses currentColor).
 */
export default function Wave({
  position = "top",
  className = "",
}: {
  position?: "top" | "bottom";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-10 leading-[0] ${
        position === "top" ? "top-0" : "bottom-0 rotate-180"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[42px] w-full md:h-[72px]"
      >
        <path
          fill="currentColor"
          d="M0,0 H1440 V38 C1180,92 1010,18 720,46 C440,72 250,12 0,46 Z"
        />
      </svg>
    </div>
  );
}
