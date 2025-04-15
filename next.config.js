/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'raw.githubusercontent.com', 'github.com'],
  },
};

module.exports = nextConfig;
