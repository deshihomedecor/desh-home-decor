import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  pgPool?: Pool;
};

const log =
  process.env.NODE_ENV === "development" ? (["query", "error", "warn"] as const) : (["error"] as const);

const pool =
  globalForPrisma.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 5000,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.pgPool = pool;

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ??
  (process.env.PRISMA_ACCELERATE_URL
    ? new PrismaClient({
        accelerateUrl: process.env.PRISMA_ACCELERATE_URL,
        log: [...log],
      })
    : new PrismaClient({
        adapter,
        log: [...log],
      }));

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


