import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const memoriesTable = pgTable('memories_table', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
});