import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.88.52"],
};

export default nextConfig;