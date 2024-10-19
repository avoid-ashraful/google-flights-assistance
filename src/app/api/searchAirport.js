import {NextResponse} from 'next/server';
import {rapidApiClient} from "@/app/utils/rapidApiClient";

export async function searchAirport(query) {
    if (!query) {
        return NextResponse.json({ error: 'Query is required.' }, { status: 400 });
    }

    const path = `v1/flights/searchAirport?query=${encodeURIComponent(query)}&locale=en-US`;

    try {
        return await rapidApiClient(path);
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Failed to search for airports.' }, { status: 500 });
    }
}
