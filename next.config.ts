import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
        protocol: "https",
      },
      {
        hostname: "*.vercel.com",
        protocol: "https",
      },
      {
        hostname: "*.vercel.sh",
        protocol: "https",
      },
    ],
  },
  experimental: {
    dynamicIO: true,
    ppr: "incremental",
  },
};

export default nextConfig;
