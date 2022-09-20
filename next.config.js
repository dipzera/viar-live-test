/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['d3m15nce7ee3px.cloudfront.net', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
