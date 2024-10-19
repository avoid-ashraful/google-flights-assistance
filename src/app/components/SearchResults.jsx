const SearchResults = ({ searchCriteria }) => {

    function getTimeDifference(startDate, endDate) {
        const diffInMs = endDate - startDate;
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMinutes / 60);
        const hours = diffInHours % 24;
        const minutes = diffInMinutes % 60;

        return {
            totalMilliseconds: diffInMs,
            totalMinutes: diffInMinutes,
            totalHours: diffInHours,
            hours: hours,
            minutes: minutes
        };
    }

    function formatDateTime(date) {
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    }

    let flyData = searchCriteria && searchCriteria?.data?.itineraries.map(el => {
        if (!Array.isArray(el.legs)) return null;  // Ensure legs is an array

        const legsWithStops = el.legs.map(leg => {
            const flightSegments = leg.segments.map((segment, segmentIndex) => {
                let stopDuration = null;
                if (segmentIndex < leg.segments.length - 1) {
                    const arrivalTime = new Date(segment.arrival).getTime();
                    const nextDepartureTime = new Date(leg.segments[segmentIndex + 1].departure).getTime();
                    const stopDurationMinutes = (nextDepartureTime - arrivalTime) / (1000 * 60);
                    stopDuration = `${Math.floor(stopDurationMinutes / 60)}h ${Math.floor(stopDurationMinutes % 60)}m`;
                }

                return {
                    segmentId: segment.id,
                    origin: segment.origin.name,
                    destination: segment.destination.name,
                    departure: formatDateTime(new Date(segment.departure).getTime()),
                    arrival: formatDateTime(new Date(segment.arrival).getTime()),
                    duration: `${Math.floor(segment.durationInMinutes / 60)}h ${segment.durationInMinutes % 60}m`,
                    flightNumber: segment.flightNumber,
                    airline: segment.marketingCarrier.name,
                    airlineLogo: leg.carriers.marketing[0]?.logoUrl || "/image/travelling.png",
                    stopDuration: stopDuration
                };
            });

            const legStopDurations = flightSegments
                .filter(seg => seg.stopDuration)
                .map(seg => seg.stopDuration)
                .join(", ") || "Direct Flight";

            return {
                ...leg,
                flightSegments: flightSegments,
                stopDuration: legStopDurations
            };
        });

        const timeDifference = getTimeDifference(
            new Date(el.legs[0].departure).getTime(),
            new Date(el.legs[el.legs.length - 1].arrival).getTime()
        );

        return {
            id: el.id,
            airline: el.legs[0].carriers.marketing[0]?.name || "Unknown Airline",
            logo: el.legs[0].carriers.marketing[0]?.logoUrl || "/image/travelling.png",
            departureTime: formatDateTime(new Date(el.legs[0].departure).getTime()),
            arrivalTime: formatDateTime(new Date(el.legs[el.legs.length - 1].arrival).getTime()),
            duration: `${timeDifference.hours}h ${timeDifference.minutes}m`,
            stops: el.legs.reduce((totalStops, leg) => totalStops + (leg.segments.length - 1), 0) + ' stop(s)', // Stop count logic
            legs: legsWithStops
        };
    }).filter(flight => flight !== null); // Filter out any flights that have null legs

    return (
        <div className="search-results-container">
            <h2>Top departing flights</h2>
            <div className="flight-cards">
                {flyData.map((flight) => (
                    <div key={flight.id} className="flight-card">
                        <div className="flight-details">
                            <div className="airline-info">
                                <img
                                    src={flight.logo}
                                    alt={`${flight.airline} logo`}
                                    className="airline-logo"
                                />
                                <div className="airline-name">{flight.airline}</div>
                            </div>

                            <div className="flight-info">
                                <span>{flight.departureTime} – {flight.arrivalTime}</span>
                                <span>{flight.duration}</span>
                            </div>

                            <div className="flight-legs">
                                {flight.legs.map((leg, legIndex) => (
                                    <div key={legIndex} className="flight-leg">
                                        <h4>Flight {legIndex + 1}:</h4>
                                        {leg.flightSegments.map((segment, segmentIndex) => (
                                            <div key={segment.segmentId} className="flight-segment">
                                                <span>{segment.origin} to {segment.destination}</span>
                                                <span>{segment.departure} – {segment.arrival}</span>
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

                            <div className="flight-stops">
                                <span>{flight.stops}</span>
                            </div>

                            <div className="flight-emissions">
                                <span>{flight.emissions}</span>
                                <span className={`emission-rating ${flight.emissionClass}`}>
                                    {flight.emissionRating}
                                </span>
                            </div>

                            <div className="flight-price">
                                <span>{flight.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
