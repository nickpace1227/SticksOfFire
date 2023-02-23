import React, { useState } from "react";

export default function Inventory() {

    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [gearType, setGearType] = useState("");

    return(
        <main>
            <div>
                Browse Our Inventory Below or Refine Your Search!
            </div>
            <div>
                <form>
                    <span>Search Term</span>
                    <input 
                    type="text" 
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm} />
                    <br />
                    <span>Price</span>
                    <input 
                    type="number" 
                    placeholder="Min" onChange={(event) => setMinPrice(event.target.value)} 
                    value={minPrice} />
                    <input 
                    type="number" 
                    placeholder="Max"
                    onChange={(event) => setMaxPrice(event.target.value)}
                    value={maxPrice} />
                    <br />
                    <select 
                    value={gearType}
                    onChange={(event) => setGearType(event.target.value)} >
                        <option value="">Gear Type</option>
                    </select>
                    <br/>
                    <button type="button">Update Results</button>
                </form>
            </div>
        </main>
    );
}