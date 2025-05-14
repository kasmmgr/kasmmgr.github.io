/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'CasjaysDev',
    description: 'Kasm workspaces provided by CasjaysDev',
    icon: 'https://avatars.githubusercontent.com/u/126880',
    listUrl: 'https://kasmmgr.github.io/',
    contactUrl: 'https://discord.gg/YWrKVTn',
  },
  reactStrictMode: true,
  basePath: '/1.0',
  assetPrefix: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
