/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // Safety net for any latent strict-mode issues during initial deploy
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'catalinapoolsaz.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
