/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  assetPrefix: !debug ? '/yassine-dot-co/' : '',
  reactStrictMode: true,
}

module.exports = nextConfig
