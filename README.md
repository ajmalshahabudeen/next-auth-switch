# What is this project about
- This is a Nuxt project using NuxtAuth, Prisma ORM and Postgres Database.
- It is simply a Authentication Nuxt Template for Account switching.
- After logging with multiple accounts, You can switch between them.

# Getting Started

use bun - [https://bun.sh/](https://bun.sh/) to run this project.

.env file contains:-
- AUTH_SECRET -- which is a long secret string (use "openssl rand -base64 32" to generate it)
- AUTH_ORIGIN -- project url (e.g. http://localhost:3000)
- DATABASE_URL -- database url (prisma database url - postgres)
- NODE_ENV -- development or production
- ENCRYPT_SECRET -- which is a long secret string (use "openssl rand -base64 32" to generate it)

After configuring the .env file, use `bun run dev` to run the project.