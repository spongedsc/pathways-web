import { pgTable, varchar, text } from 'drizzle-orm/pg-core';

export const memoriesTable = pgTable('memories_table', {
    id: varchar('id', { length: 10 }).primaryKey(),
    content: text('content').notNull(),
});