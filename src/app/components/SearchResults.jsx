import React from 'react';

const flightData = [
    {
        id: 1,
        airline: "Cathay Pacific",
        logo: "/image/travelling.png", // Placeholder for airline logo
        departureTime: "11:20 PM",
        arrivalTime: "11:55 PM",
        duration: "34 hr 35 min",
        stops: "1 stop",
        stopDuration: "14 hr 5 min HKG",
        emissions: "1,127 kg CO2e",
        emissionRating: "-10% emissions",
        emissionClass: "green",
        price: "$1,893",
        roundTrip: true,
    },
    {
        id: 2,
        airline: "Qatar Airways",
        logo: "/image/travelling.png", // Placeholder for airline logo
        departureTime: "3:10 PM",
        arrivalTime: "2:55 AM",
        duration: "21 hr 45 min",
        stops: "1 stop",
        stopDuration: "1 hr 10 min DOH",
        emissions: "1,169 kg CO2e",
        emissionRating: "-7% emissions",
        emissionClass: "green",
        price: "$2,206",
        roundTrip: true,
    },
    {
        id: 3,
        airline: "Saudia",
        logo: "/image/travelling.png", // Placeholder for airline logo
        departureTime: "8:00 PM",
        arrivalTime: "11:40 AM",
        duration: "25 hr 40 min",
        stops: "1 stop",
        stopDuration: "4 hr 10 min JED",
        emissions: "1,841 kg CO2e",
        emissionRating: "+47% emissions",
        emissionClass: "red",
        price: "$2,226",
        roundTrip: true,
    },
    // Other flight data
];

const otherFlightData = [
    {
        "id": 1,
        "airline": "Saudia",
        "logo": "/image/travelling.png",
        "departureTime": "8:46 PM",
        "arrivalTime": "3:33 AM+1",
        "duration": "24 hr 24 min",
        "stops": "2 stop",
        "stopDuration": "10 hr 7 min DXB",
        "emissions": "1615 kg CO2e",
        "emissionRating": "+18% emissions",
        "emissionClass": "green",
        "price": "$1620",
        "roundTrip": true
    },
    {
        "id": 2,
        "airline": "Lufthansa",
        "logo": "/image/travelling.png",
        "departureTime": "10:04 AM",
        "arrivalTime": "6:26 AM+2",
        "duration": "38 hr 52 min",
        "stops": "0 stop",
        "stopDuration": "12 hr 16 min DOH",
        "emissions": "1261 kg CO2e",
        "emissionRating": "+7% emissions",
        "emissionClass": "red",
        "price": "$1753",
        "roundTrip": false
    },
    {
        "id": 3,
        "airline": "Delta Airlines",
        "logo": "/image/travelling.png",
        "departureTime": "5:04 PM",
        "arrivalTime": "5:41 PM+3",
        "duration": "24 hr 18 min",
        "stops": "non-stop",
        "stopDuration": "8 hr 36 min AMS",
        "emissions": "1902 kg CO2e",
        "emissionRating": "+40% emissions",
        "emissionClass": "red",
        "price": "$2680",
        "roundTrip": false
    },
    {
        "id": 4,
        "airline": "Air France",
        "logo": "/image/travelling.png",
        "departureTime": "5:40 PM",
        "arrivalTime": "6:33 PM+3",
        "duration": "37 hr 44 min",
        "stops": "1 stop",
        "stopDuration": "14 hr 14 min JED",
        "emissions": "1731 kg CO2e",
        "emissionRating": "-8% emissions",
        "emissionClass": "red",
        "price": "$2679",
        "roundTrip": true
    },
    {
        "id": 5,
        "airline": "Qatar Airways",
        "logo": "/image/travelling.png",
        "departureTime": "11:20 PM",
        "arrivalTime": "2:55 AM+2",
        "duration": "21 hr 45 min",
        "stops": "1 stop",
        "stopDuration": "1 hr 10 min DOH",
        "emissions": "1,169 kg CO2e",
        "emissionRating": "-7% emissions",
        "emissionClass": "green",
        "price": "$2,206",
        "roundTrip": true
    },
    {
        "id": 6,
        "airline": "Saudia",
        "logo": "/image/travelling.png",
        "departureTime": "8:00 PM",
        "arrivalTime": "11:40 AM+2",
        "duration": "25 hr 40 min",
        "stops": "1 stop",
        "stopDuration": "4 hr 10 min JED",
        "emissions": "1,841 kg CO2e",
        "emissionRating": "+47% emissions",
        "emissionClass": "red",
        "price": "$2,226",
        "roundTrip": true
    },
    {
        "id": 7,
        "airline": "British Airways",
        "logo": "/image/travelling.png",
        "departureTime": "6:00 PM",
        "arrivalTime": "6:30 AM+1",
        "duration": "12 hr 30 min",
        "stops": "1 stop",
        "stopDuration": "2 hr 10 min FRA",
        "emissions": "1,200 kg CO2e",
        "emissionRating": "+5% emissions",
        "emissionClass": "green",
        "price": "$1,200",
        "roundTrip": true
    },
    {
        "id": 8,
        "airline": "KLM",
        "logo": "/image/travelling.png",
        "departureTime": "7:00 PM",
        "arrivalTime": "10:30 AM+1",
        "duration": "15 hr 30 min",
        "stops": "2 stop",
        "stopDuration": "3 hr 30 min AMS",
        "emissions": "1,300 kg CO2e",
        "emissionRating": "-10% emissions",
        "emissionClass": "green",
        "price": "$1,500",
        "roundTrip": true
    },
    {
        "id": 9,
        "airline": "Emirates",
        "logo": "/image/travelling.png",
        "departureTime": "3:00 PM",
        "arrivalTime": "5:30 AM+2",
        "duration": "30 hr 30 min",
        "stops": "1 stop",
        "stopDuration": "10 hr DXB",
        "emissions": "1,700 kg CO2e",
        "emissionRating": "+15% emissions",
        "emissionClass": "red",
        "price": "$2,000",
        "roundTrip": false
    },
    {
        "id": 10,
        "airline": "American Airlines",
        "logo": "/image/travelling.png",
        "departureTime": "2:00 PM",
        "arrivalTime": "4:00 AM+1",
        "duration": "12 hr",
        "stops": "1 stop",
        "stopDuration": "2 hr 30 min ATL",
        "emissions": "1,100 kg CO2e",
        "emissionRating": "-5% emissions",
        "emissionClass": "green",
        "price": "$1,100",
        "roundTrip": true
    }
]




const SearchResults = ({searchCriteria}) => {

    function getTimeDifference(startDate, endDate) {
        // Calculate the time difference in milliseconds
        const diffInMs = endDate - startDate;

        // Convert time difference into different units
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        // Remaining time after extracting days
        const hours = diffInHours % 24;
        const minutes = diffInMinutes % 60;
        const seconds = diffInSeconds % 60;

        return {
            totalMilliseconds: diffInMs,
            totalSeconds: diffInSeconds,
            totalMinutes: diffInMinutes,
            totalHours: diffInHours,
            totalDays: diffInDays,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function formatDateTime(date) {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false, // Use 24-hour time (set to true for 12-hour format with AM/PM)
        };

        return new Intl.DateTimeFormat('en-GB', options).format(date); // Locale can be customized
    }


    let flyData = searchCriteria && searchCriteria?.data?.itineraries.map(el => {

        // Create an array to store multiple flight segments for each leg
        const legsWithStops = el.legs.length > 0 &&  el.legs.map((leg, legIndex) => {
            const flightSegments = leg.segments.map((segment, segmentIndex) => {
                // Calculate stopDuration between segments, if there's a next segment
                let stopDuration = null;
                if (segmentIndex < leg.segments.length - 1) {
                    const arrivalTime = new Date(segment.arrival).getTime();
                    const nextDepartureTime = new Date(leg.segments[segmentIndex + 1].departure).getTime();

                    const stopDurationMinutes = (nextDepartureTime - arrivalTime) / (1000 * 60); // Convert to minutes
                    stopDuration = `${Math.floor(stopDurationMinutes / 60)}h ${Math.floor(stopDurationMinutes % 60)}m`;
                }

                return {
                    "segmentId": segment.id,
                    "origin": segment.origin.name,
                    "destination": segment.destination.name,
                    "departure": formatDateTime(new Date(segment.departure).getTime()),
                    "arrival": formatDateTime(new Date(segment.arrival).getTime()),
                    "duration": `${Math.floor(segment.durationInMinutes / 60)}h ${segment.durationInMinutes % 60}m`,
                    "flightNumber": segment.flightNumber,
                    "airline": segment.marketingCarrier.name,
                    "airlineLogo": leg.carriers.marketing[0]?.logoUrl || "/image/travelling.png",
                    "stopDuration": stopDuration // Stop duration between segments
                };
            });

            // Aggregate stop durations within the leg
            const legStopDurations = flightSegments
                .filter(seg => seg.stopDuration)
                .map(seg => seg.stopDuration)
                .join(", ") || "Direct Flight"; // Default for direct flights

            return {
                ...leg,
                "flightSegments": flightSegments,
                "stopDuration": legStopDurations  // Add a summary of stop durations at the leg level
            };
        });

        // Calculate total journey time
        const timeDifference = getTimeDifference(
            new Date(el.legs[0].departure).getTime(),
            new Date(el.legs[el.legs.length - 1].arrival).getTime()
        );

        return {
            "id": el.id,
            "airline": el.legs[0].carriers.marketing[0]?.name || "Unknown Airline",
            "logo": el.legs[0].carriers.marketing[0]?.logoUrl || "/image/travelling.png",
            "departureTime": formatDateTime(new Date(el.legs[0].departure).getTime()),
            "arrivalTime": formatDateTime(new Date(el.legs[el.legs.length - 1].arrival).getTime()), // Last leg arrival
            "duration": `${timeDifference.hours}h ${timeDifference.minutes}m`,
            "stops": `${el.legs.length - 1} stop(s)`,  // Adjust based on number of legs
            "stopDuration": legsWithStops.map(leg => leg.stopDuration).join(", "),  // Summary of stop durations across legs
            "emissions": `${el.score ? el.score : 0} kg CO2e`,
            "emissionRating": `${((el.score / 10) * 100).toFixed(2)}% emissions`,
            "emissionClass": "green", // Hardcoded, update logic for emission class
            "price": el.price.formatted,
            "roundTrip": true,
            "tags": el.tags, // Adding hardcoded field from the JSON
            "isSelfTransfer": el.isSelfTransfer, // Adding hardcoded field from the JSON
            "isProtectedSelfTransfer": el.isProtectedSelfTransfer, // Hardcoded field
            "legs": legsWithStops // Storing the legs with segments and stop durations
        };
    });
    return (
        <div className="search-results-container">
            <h2>Top departing flights</h2>
            <div className="flight-cards">
                {flyData.map((flight) => (
                    <div key={flight.id} className="flight-card">
                        <div className="flight-details">
                            {/* Airline Info */}
                            <div className="airline-info">
                                <img
                                    src={flight.logo}
                                    alt={`${flight.airline} logo`}
                                    className="airline-logo"
                                />
                                <div className="airline-name">{flight.airline}</div>
                            </div>

                            {/* Flight Info: Departure, Arrival, Duration */}
                            <div className="flight-info">
                                <span>{flight.departureTime} – {flight.arrivalTime}</span>
                                <span>{flight.duration}</span>
                            </div>

                            {/* Flight Legs and Segments */}
                            <div className="flight-legs">
                                {flight.legs.map((leg, legIndex) => (
                                    <div key={legIndex} className="flight-leg">
                                        <h4>Flight {legIndex + 1}:</h4>
                                        {leg.flightSegments.map((segment, segmentIndex) => (
                                            <div key={segment.segmentId} className="flight-segment">
                                                <span>{segment.origin} to {segment.destination}</span>
                                                <span>
                        {segment.departure} – {segment.arrival}
                      </span>
                                                <span>Flight: {segment.flightNumber}</span>
                                                <span>Airline: {segment.airline}</span>
                                                <span>Duration: {segment.duration}</span>
                                                {segment.stopDuration && (
                                                    <span>Stop duration: {segment.stopDuration}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Stops Information */}
                            <div className="flight-stops">
                                <span>{flight.stops}</span>
                            </div>

                            {/* Emissions */}
                            <div className="flight-emissions">
                                <span>{flight.emissions}</span>
                                <span className={`emission-rating ${flight.emissionClass}`}>
                {flight.emissionRating}
              </span>
                            </div>

                            {/* Price Information */}
                            <div className="flight-price">
                                <span>{flight.price}</span>
                                {/*<span>{flight.roundTrip ? "round trip" : "one way"}</span>*/}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults
