"use client";

import FlightSearchApp from "@/app/components/FlightSearchApp";

export default function HomePage() {
    return (
        <div className="homepage-container">
            {/*<h1>Flights</h1>*/}
            {/*<p>Find the best flights for your next adventure.</p>*/}
            <FlightSearchApp />
        </div>
    );
}