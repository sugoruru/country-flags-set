/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && "/country-flags-set",
  trailingSlash: true,
};

module.exports = nextConfig;
