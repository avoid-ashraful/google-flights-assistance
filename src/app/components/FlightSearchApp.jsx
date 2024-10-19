import { useState } from 'react';
import FlightSearch from './FlightSearchBar';
import SearchResults from './SearchResults';

export default function FlightSearchApp() {
    const [searchCriteria, setSearchCriteria] = useState(null);
    const [isSearchClicked, setIsSearchClicked] = useState(false);

    // Function to handle search from FlightSearch component
    const handleSearch = (criteria) => {
        setSearchCriteria(criteria);
        setIsSearchClicked(true);
    };

    console.log("searchCriteria", searchCriteria)

    return (
        <div>
            <FlightSearch handleSearch={handleSearch} />
            {isSearchClicked && <SearchResults searchCriteria={searchCriteria} />}
        </div>
    );
}
