/** @type {import('next').NextConfig} */
const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
  },
};

module.exports = withSentryConfig(nextConfig, {
<<<<<<< HEAD
  org: "Personal Portfolio",
  project: "Rama Krishna Kamma",
=======
  org: "ramakrishna",
  project: "javascript-nextjs",
>>>>>>> 7f8c69059cb9778cfc9ce309bc6660dd5c1b3e81
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
});
