import { BASE_API_URL, RAPIDAPI_KEY, RAPIDAPI_HOST } from '@/config';


export async function rapidApiClient(path, options = {}) {
    const url = `${BASE_API_URL}${path}`;

    const defaultHeaders = {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
        'Content-Type': 'application/json',
    };

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Client Error:', error);
        throw error;
    }
}