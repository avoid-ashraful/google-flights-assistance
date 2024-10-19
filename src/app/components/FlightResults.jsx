import React from 'react';

const FlightResults = ({ itineraries }) => {
    return (
        <div className="flight-results">
            {itineraries.map((itinerary) => (
                <div key={itinerary.id} className="flight-card">
                    <div className="flight-main">
                        <div className="flight-time">
                            <h4>{formatTime(itinerary.legs[0].departure)} - {formatTime(itinerary.legs[0].arrival)}</h4>
                            <span>{formatDuration(itinerary.legs[0].durationInMinutes)}</span>
                        </div>
                        <div className="flight-route">
                            <div className="origin-destination">
                                <h5>{itinerary.legs[0].origin.displayCode}</h5>
                                <span>{itinerary.legs[0].origin.city}, {itinerary.legs[0].origin.country}</span>
                            </div>
                            <div className="destination">
                                <h5>{itinerary.legs[0].destination.displayCode}</h5>
                                <span>{itinerary.legs[0].destination.city}, {itinerary.legs[0].destination.country}</span>
                            </div>
                        </div>
                        <div className="stops">
                            <span>{itinerary.legs[0].stopCount} stop</span>
                        </div>
                        <div className="airline-logo">
                            <img src={itinerary.legs[0].carriers.marketing[0].logoUrl} alt={itinerary.legs[0].carriers.marketing[0].name} />
                            <span>{itinerary.legs[0].carriers.marketing[0].name}</span>
                        </div>
                        <div className="emissions">
                            <span>{calculateEmissions(itinerary.legs[0].durationInMinutes)} kg CO2</span>
                        </div>
                        <div className="price">
                            <h3>{itinerary.price.formatted}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Utility functions for formatting time and duration
const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hr ${remainingMinutes} min`;
};

// Function to calculate CO2 emissions based on flight duration
const calculateEmissions = (duration) => {
    const baseEmissionRate = 0.63; // Sample emission rate per minute
    return Math.round(duration * baseEmissionRate);
};

export default FlightResults;
