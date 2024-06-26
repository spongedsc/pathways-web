import { db } from '$lib/db';
import { memoriesTable } from '$lib/schema';
import { json } from '@sveltejs/kit';
import { API_TOKEN } from "$env/static/private";
import { nanoid } from 'nanoid';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { content } = await request.json();

    if (request?.headers?.get('Authorization') !== `Bearer ${API_TOKEN}`) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const result = await db.insert(memoriesTable).values({ id: nanoid(10), content: content }).returning({ insertedId: memoriesTable.id });

        return json({ id: result[0].insertedId }, { status: 200 });

    } catch (error) {
        console.error(error);
        return json({ error: 'Failed to create memory' }, { status: 500 });
    }
}