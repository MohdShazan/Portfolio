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

const sentryWebpackPluginOptions = {
  org: "tech-wq", // Replace with your org
  project: "javascript-nextjs", // Replace with your project name
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
