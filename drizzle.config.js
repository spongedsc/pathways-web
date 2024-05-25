import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL,
    },
    schema: "./src/lib/schema.js",
    out: "./drizzle",
});