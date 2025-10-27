import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/ticto-finance",
  assetPrefix: "/ticto-finance/",
};

export default nextConfig;
