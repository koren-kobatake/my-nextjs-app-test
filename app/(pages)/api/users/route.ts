import { NextRequest, NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next';
import { getPrismaClient } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const prisma = await getPrismaClient();

  const users = await prisma.user.findMany();
  const { name, email, age } = { name: 'aaa', email: 'bbb', age: 'ccc' };
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json({ users })
}

export async function POST(req: NextRequest) {
  const prisma = await getPrismaClient();

  const body = await req.json();
  const { name, email, age } = body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
}
