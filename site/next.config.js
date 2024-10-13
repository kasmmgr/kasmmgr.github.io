/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CasjaysDev',
    description: 'CasjaysDev store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasmmgr.github.io/',
    contactUrl: 'https://github.com/kasmmgr/kasmmgr.github.io/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
