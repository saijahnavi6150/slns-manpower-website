
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.180.121.157"],

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
