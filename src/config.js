const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;


if (!BASE_API_URL || !RAPIDAPI_KEY || !RAPIDAPI_HOST) {
    console.error("Missing environment variables:");
}

export { BASE_API_URL, RAPIDAPI_KEY, RAPIDAPI_HOST };
