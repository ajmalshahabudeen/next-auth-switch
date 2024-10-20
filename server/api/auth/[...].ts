import { NuxtAuthHandler } from "#auth";
import { prisma } from "~/utils/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";

export default NuxtAuthHandler({
  // your authentication configuration here!
  adapter: PrismaAdapter(prisma) as any,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    (Credentials as any).default({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        // Add logic here to look up the user from the credentials supplied
        const user = await UserFinder(credentials.email, credentials.password);

        if (user) {
          console.log("user", user);
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: useRuntimeConfig().secret,
});

const UserFinder = async(email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user) {
    // console.log("user", user);
    if (user.password === password) {
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }
};