"use client";

import FlightSearchApp from "@/app/components/FlightSearchApp";
import 'react-datepicker/dist/react-datepicker.css';

export default function HomePage() {
    return (
        <div className="homepage-container">
            <FlightSearchApp />
        </div>
    );
}
