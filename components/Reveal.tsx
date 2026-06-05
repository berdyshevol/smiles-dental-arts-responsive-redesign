import type { ReactNode } from "react";

/**
 * Pure-CSS entrance. Renders content at full opacity once the CSS animation
 * runs (which it always does, independent of JS hydration), so a section is
 * never left invisible by a stalled JS animation. `delay` staggers siblings.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className ?? ""}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
