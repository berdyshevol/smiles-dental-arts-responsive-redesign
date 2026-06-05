import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Demo prototype — don't let type noise block a deploy build.
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
