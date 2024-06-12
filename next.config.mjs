import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
      config.resolve.alias['@'] = path.join(process.cwd(), 'app')
      return config
    },
  }

export default nextConfig;
