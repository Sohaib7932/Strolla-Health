import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    /* Next 16 serves WebP only by default. AVIF is ~20-30% smaller again on a
       photograph like the hero, and the browser picks whichever it supports
       via content negotiation, so older clients still get WebP. */
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
