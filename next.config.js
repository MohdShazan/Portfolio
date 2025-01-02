const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Set basePath for GitHub Pages (replace with your repo name)
  basePath: '/Portfolio', // Replace with your GitHub repository name

  images: {
    unoptimized: true, // GitHub Pages doesn't support dynamic images, so we disable optimization
  },
};

// Temporarily comment out Sentry integration to test if the error goes away
/*
const sentryWebpackPluginOptions = {
  org: "tech-wq", // Replace with your Sentry organization
  project: "javascript-nextjs", // Replace with your Sentry project name
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};
*/

// Export the config without Sentry for now
module.exports = nextConfig;

// Uncomment the line below once you have resolved the issue with Sentry
// module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
