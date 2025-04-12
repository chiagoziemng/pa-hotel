import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        port: "", // Leave empty unless specific port is needed
        pathname: "/**", // Allows all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty unless specific port is needed
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
