import { PrismaClient } from '@prisma/client';
import { getDatabaseUrl } from './getDatabaseUrl'; // パラメータストアからDB URLを取得する関数

let prisma: PrismaClient;

const initializePrisma = async (): Promise<void> => {
  if (process.env.IS_LOCAL === 'true') {
    // ローカル環境用
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not set in the environment variables');
    }
    prisma = new PrismaClient();
  } else {
    // 本番環境・ステージング環境用
    if (!process.env.DATABASE_URL) {
      try {
        const databaseUrl = await getDatabaseUrl();
        process.env.DATABASE_URL = databaseUrl;
      } catch (error) {
        console.error('Failed to set DATABASE_URL from Parameter Store', error);
        process.exit(1);
      }
    }
    prisma = new PrismaClient();
  }
};

const getPrismaClient = async (): Promise<PrismaClient> => {
  if (!prisma) {
    await initializePrisma();
  }
  return prisma;
};

export { getPrismaClient };
