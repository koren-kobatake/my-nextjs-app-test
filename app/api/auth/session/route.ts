import { getServerSession } from 'next-auth/next';
import { authOptions } from '../[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify(session), {
    status: 200,
  });
}
