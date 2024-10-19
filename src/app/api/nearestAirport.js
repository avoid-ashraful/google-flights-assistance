import {NextResponse} from 'next/server';
import {rapidApiClient} from "@/app/utils/rapidApiClient";


export function airportDataSchema(response) {
    return {
        label: response.presentation.suggestionTitle,
        subtitle: response.presentation.subtitle,
        value: response.skyId,
        entityId: response.entityId,
    };
}

export async function fetchNearestAirport(lat, lng) {

    if (!lat || !lng) {
        return NextResponse.json({ error: 'Latitude and longitude are required.' }, { status: 400 });
    }

    const path = `v1/flights/getNearByAirports?lat=${lat}&lng=${lng}&locale=en-US`;

    try {
        const apiResponse = await rapidApiClient(path);
        return airportDataSchema(apiResponse.data.current);
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Failed to fetch nearest airports.' }, { status: 500 });
    }
}
