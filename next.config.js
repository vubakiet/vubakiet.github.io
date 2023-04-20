/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: isProd ? 'vubakiet' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
