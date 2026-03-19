import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
const googleClientId = process.env.AUTH_GOOGLE_ID as string;
const googleClientSecret = process.env.AUTH_GOOGLE_SECRET as string;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    signIn({ profile }) {
      const email = profile?.email?.toLowerCase();

      // Restrict access to one configured admin account.
      if (!adminEmail || !email) {
        return false;
      }

      return email === adminEmail;
    },
  },
});
