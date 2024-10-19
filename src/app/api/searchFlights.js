import { NextResponse } from 'next/server';
import { rapidApiClient } from "@/app/utils/rapidApiClient";

export async function searchFlights({
                                        originSkyId,
                                        destinationSkyId,
                                        originEntityId,
                                        destinationEntityId,
                                        date,
                                        returnDate,
                                        cabinClass,
                                        adults,
                                        childrens,
                                        infants,
                                        sortBy,
                                        limit,
                                        currency = 'USD',
                                        market = 'en-US',
                                        countryCode = 'US'
                                    }) {
    // Use URLSearchParams to dynamically build the query string and ignore undefined values

    let defaultValue = {
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        date,
        cabinClass,
        adults,
        childrens,
        infants,
        sortBy,
        limit,
        currency,
        market,
        countryCode
    }

    if (returnDate){
        defaultValue = {
            ...defaultValue,
            returnDate,
        }
    }

    const params = new URLSearchParams(defaultValue);


    // Only include non-null and non-undefined parameters
    for (const [key, value] of params.entries()) {
        if (value === undefined || value === null) {
            params.delete(key);
        }
    }

    const path = `v2/flights/searchFlights?${params.toString()}`;

    try {
        return await rapidApiClient(path);
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Failed to search for flights.' }, { status: 500 });
    }
}
