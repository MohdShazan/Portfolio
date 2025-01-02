const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Set basePath for GitHub Pages (replace with your repo name)
  basePath: '/Portfolio', // If your GitHub repository is named "Portfolio"

  images: {
    unoptimized: true, // GitHub Pages doesn't support dynamic images, so we disable optimization
  },
};

module.exports = withSentryConfig(nextConfig, {
  // Sentry configuration here as you already have
  org: "tech-wq",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
