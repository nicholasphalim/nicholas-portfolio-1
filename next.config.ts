import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nicholas-portfolio-1",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
