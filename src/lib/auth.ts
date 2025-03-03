import NextAuth, { type DefaultSession } from "next-auth";

import authConfig from "~/config/auth.config";
import { User } from "~/types";

export const {
  handlers: { GET, POST },
  auth,
  unstable_update,
} = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
});

declare module "next-auth" {
  interface Session {
    user: {
      id: User["id"];
      name: User["fullname"];
      first_name: User["first_name"];
      last_name: User["last_name"];
      email: User["email"];
      image: User["avatar_url"];
      role: User["role"];
      accessToken: User["access_token"];
    } & DefaultSession["user"];
  }
}
