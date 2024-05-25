import { db } from '$lib/db';
import { memoriesTable } from '$lib/schema';
import { eq } from 'drizzle-orm';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        const result = await db.select().from(memoriesTable).where(eq(memoriesTable.id, params.id));

        return {
            markdown: result[0].content,
        };
    } catch (error) {
        console.error(error);
        return {
            markdown: '# Error!',
        };
    }
};