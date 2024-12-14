import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/FitGeek_Admin',  // This is the repo name
  assetPrefix: '/FitGeek_Admin/',  // This ensures that static assets are correctly loaded
  trailingSlash: true,  // Optional: Adds a trailing slash to URLs
};

export default nextConfig;
