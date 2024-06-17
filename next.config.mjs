import path from 'path';
// import { getDatabaseUrl } from './lib/getDatabaseUrl'; // パラメータストアからDB URLを取得する関数

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.join(process.cwd(), 'app');

    // if (isServer) {
    //   config.plugins.push({
    //     apply: (compiler) => {
    //       compiler.hooks.beforeRun.tapAsync('SetDatabaseUrlPlugin', async (compilation, callback) => {
    //         if (process.env.NODE_ENV !== 'development') {
    //           try {
    //             const databaseUrl = await getDatabaseUrl();
    //             process.env.DATABASE_URL = databaseUrl;
    //           } catch (error) {
    //             console.error('Failed to set DATABASE_URL from Parameter Store', error);
    //           }
    //         }
    //         callback();
    //       });
    //     },
    //   });
    // }

    return config;
  },
  reactStrictMode: true,
  // 全ての API routes にマッチ
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

export default nextConfig;
