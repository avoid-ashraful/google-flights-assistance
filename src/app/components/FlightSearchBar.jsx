// Add this at the top of FlightSearchBar.jsx
"use client";

import {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './FlightSearch.module.css';
import PassengersDropdown from "@/app/components/PassengersDropdown";
import {getUserLocation} from "@/app/api/userLocation";
import {fetchNearestAirport} from "@/app/api/nearestAirport";
import {searchAirport} from "@/app/api/searchAirport";
import AsyncSelect from "react-select/async";
import {searchFlights} from "@/app/api/searchFlights";


const FlightSearch = (props)  => {

    const { handleSearch } = props

    const [departureLocation, setDepartureLocation] = useState(null);
    const [arrivalLocation, setArrivalLocation] = useState(null);
    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [nearestAirport, setNearestAirport] = useState(null);
    const [error, setError] = useState(null);
    const [flightResults, setFlightResults] = useState([]);
    const [tripType, setTripType] = useState('one-way');
    const [classTrip, setClassTrip] = useState('economy');


    // Fetch user's location and nearest airport only on initial render
    useEffect(() => {
        getUserLocation(
            async (location) => {
                setUserLocation(location);
                try {
                    const data = await fetchNearestAirport(location.latitude, location.longitude);
                    setNearestAirport(data);
                    setDepartureLocation({
                        value: data.value,
                        label: data.label,
                        entityId: data.entityId,
                        skyId: data.value,
                    })
                } catch (err) {
                    setError(err.message);
                }
            },
            (error) => {
                setError("Failed to get user location.");
            }
        );
    }, []);

    // Swap function for switching departure and arrival locations
    const swapLocations = () => {
        const temp = departureLocation;
        setDepartureLocation(arrivalLocation);
        setArrivalLocation(temp);
    };

    const formatDate = (date)  => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    // Search button click handler
    const handleFlightSearch = async () => {

        const searchParams = {
            originSkyId: departureLocation?.value,
            destinationSkyId: arrivalLocation?.value,
            originEntityId: departureLocation?.entityId,
            destinationEntityId: arrivalLocation?.entityId,
            date: formatDate(departureDate),
            returnDate: returnDate ? formatDate(returnDate) : null,
            cabinClass: classTrip,
            adults: "1",
            childrens: "1",
            infants: "0",
            sortBy: "best",
            limit: "20"
        };

        // Filter out any parameters that are null, undefined, or empty string
        const filteredParams = Object.fromEntries(
            Object.entries(searchParams).filter(
                ([key, value]) => value !== undefined && value !== null && value !== ''
            )
        );

        try {
            const flightData = await searchFlights(filteredParams);
            handleSearch(flightData)
            setFlightResults(flightData.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const customStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: '#2c2c2e', // Black background
            color: 'white',
            borderRadius: '5px',
            border: '1px solid #555', // Light gray border
            padding: '5px',
            boxShadow: 'none',
            "&:hover": {
                border: "1px solid #888", // Change border color on hover
            }
        }),
        input: (base) => ({
            ...base,
            color: 'white', // Change the text color inside the input to white
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white', // Ensure the selected value's text is white
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#ccc', // Dropdown arrow color
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#2c2c2e', // Background for the dropdown
            color: 'white'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#555' : '#2c2c2e',
            color: 'white',
            "&:hover": {
                backgroundColor: '#444', // Hover color for dropdown options
            }
        }),
    };


    // Function to fetch airport data based on the search query
    const handleSearchChange = async (inputValue) => {
        if (inputValue.length > 3) {
            try {
                const data = await searchAirport(inputValue); // Call the search function (API)
                return data.data.map((airport) => ({
                    value: airport.skyId,
                    label: `${airport.presentation.title},  ${airport.presentation.subtitle} - (${airport.skyId})`,
                    skyId: airport.skyId, // Store additional data like skyId
                    entityId: airport.entityId // Store additional data like entityId
                }));
            } catch (err) {
                setError(err.message);
                return [];
            }
        } else {
            return [];
        }
    };

    const handleDepSearchChange = async (inputValue) => {
        if (inputValue.length > 3) {
            try {
                const data = await searchAirport(inputValue); // Call the search function (API)
                return data.data.map((airport) => ({
                    value: airport.skyId,
                    label: `${airport.presentation.title},  ${airport.presentation.subtitle} - (${airport.skyId})`,
                    skyId: airport.skyId, // Store additional data like skyId
                    entityId: airport.entityId // Store additional data like entityId
                }));
            } catch (err) {
                setError(err.message);
                return [];
            }
        } else {
            return [];
        }
    };


    // Function to handle the change event of the dropdown
    const handleTripTypeChange = (e) => {
        setTripType(e.target.value);
    };

    const handleTripClassChange = (e) => {
        setClassTrip(e.target.value);
    };

    const handleDepartSearch = (selectedOption) => {

        setDepartureLocation(selectedOption);

    }

    const handleArrivalSearch = (selectedOption) => {

        setArrivalLocation(selectedOption);

    }


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Flights</h1>
            <p className="flight-sub-title">Find the best flights for your next adventure.</p>
            <div className={styles.searchBox}>
                <div className={styles.tripOptions}>
                    <div className="flight-options-container">
                        {/*<select*/}
                        {/*    value={tripType} // Bind the value of the dropdown to state*/}
                        {/*    onChange={handleTripTypeChange}*/}
                        {/*    className="trip-dropdown">*/}
                        {/*    /!*<option value="round-trip">Round trip</option>*!/*/}
                        {/*    <option value="one-way">One way</option>*/}
                        {/*    /!*<option value="multi-city">Multi-city</option>*!/*/}
                        {/*</select>*/}

                        <PassengersDropdown />

                        <select
                            value={classTrip} // Bind the value of the dropdown to state
                            onChange={handleTripClassChange}
                            className="class-dropdown">
                            <option value="economy">Economy</option>
                            <option value="premium-economy">Premium economy</option>
                            <option value="business">Business</option>
                            <option value="first">First</option>
                        </select>
                    </div>
                </div>
                <div className={styles.locationInputs}>
                    <div className="location-date-container">
                        <div className="location-inputs">
                            <AsyncSelect
                                cacheOptions
                                value={departureLocation} // Set default value for departure
                                loadOptions={handleSearchChange} // Fetch options as user types
                                onChange={(selectedOption) => handleDepartSearch(selectedOption)}
                                placeholder="Search Departure Airport"
                                className="location-select"
                                styles={customStyles}
                            />
                            <button
                                className="swap-button"
                                onClick={() => {
                                    const temp = departureLocation;
                                    setDepartureLocation(arrivalLocation);
                                    setArrivalLocation(temp);
                                }}
                            >
                                ⇄
                            </button>
                            <AsyncSelect
                                cacheOptions
                                loadOptions={handleDepSearchChange} // Fetch options as user types
                                onChange={(selectedOption) => handleArrivalSearch(selectedOption)}
                                placeholder="Search Departure Airport"
                                className="location-select"
                                styles={customStyles}
                            />
                        </div>

                        <div className="date-inputs">
                            <div className="date-field">
                                <DatePicker
                                    selected={departureDate}
                                    onChange={(date) => setDepartureDate(date)}
                                    dateFormat="E, MMM d"
                                    className="date-input"
                                />
                            </div>
                            <div className="date-navigation">
                                <div className="date-field">
                                <DatePicker
                                    selected={returnDate}
                                    onChange={(date) => setReturnDate(date)}
                                    dateFormat="E, MMM d"
                                    className="date-input"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.searchButton} onClick={handleFlightSearch}>Search</button>
            </div>
        </div>
    );
}

export default FlightSearch;
