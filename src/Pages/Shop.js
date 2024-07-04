import React from "react";
import Hero from "../Component/Navbar/Hero/Hero";
import Popular from "../Component/Popular/Popular";
import Offers from '../Component/Offers/Offers';
import NewCollections from '../Component/NewCollection/NewCollection';

function Shop() {
    return (
        <div>
            <Hero />
            <Popular/>
            <Offers/>
            <NewCollections/>
        </div>
    )
}

export default Shop;