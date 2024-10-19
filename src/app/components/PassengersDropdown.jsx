"use client";

import { useState } from 'react';

export default function PassengersDropdown() {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infantsInSeat, setInfantsInSeat] = useState(0);
    const [infantsOnLap, setInfantsOnLap] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="passenger-dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="passenger-btn">
                {adults} Passenger
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item">
                        <span>Adults</span>
                        <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                        <span>{adults}</span>
                        <button onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                    <div className="dropdown-item">
                        <span>Children (2-11)</span>
                        <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                        <span>{children}</span>
                        <button onClick={() => setChildren(children + 1)}>+</button>
                    </div>
                    <div className="dropdown-item">
                        <span>Infants (In seat)</span>
                        <button onClick={() => setInfantsInSeat(Math.max(0, infantsInSeat - 1))}>-</button>
                        <span>{infantsInSeat}</span>
                        <button onClick={() => setInfantsInSeat(infantsInSeat + 1)}>+</button>
                    </div>
                    <div className="dropdown-item">
                        <span>Infants (On lap)</span>
                        <button onClick={() => setInfantsOnLap(Math.max(0, infantsOnLap - 1))}>-</button>
                        <span>{infantsOnLap}</span>
                        <button onClick={() => setInfantsOnLap(infantsOnLap + 1)}>+</button>
                    </div>
                    <div className="dropdown-actions">
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={() => setIsOpen(false)}>Done</button>
                    </div>
                </div>
            )}
        </div>
    );
}
