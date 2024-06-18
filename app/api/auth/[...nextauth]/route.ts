import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import jwt from 'jsonwebtoken';

// セッションコールバックのカスタマイズ
const authOptions: NextAuthOptions = {
  providers: [
    // 任意のプロバイダー設定
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: JWT }) {
      session.userId = token.userId;
      session.role = token.role;
      session.env = token.env;
      session.sessionId = token.jti;
      return session;
    },
  },
//   jwt: {
//     async encode({ secret, token }) {
//       // トークンがundefinedでないことを確認
//       if (!token) {
//         throw new Error('Token is undefined');
//       }
//       // JSON Web Token (JWT) をエンコード
//       return jwt.sign(token as object, secret);
//     },
//     async decode({ secret, token }) {
//       // トークンがundefinedでないことを確認
//       if (!token) {
//         throw new Error('Token is undefined');
//       }
//       // JSON Web Token (JWT) をデコード
//       return jwt.verify(token, secret) as JWT;
//     },
//   },
  secret: process.env.NEXTAUTH_SECRET,
};

export { authOptions };

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
