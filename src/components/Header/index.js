import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <p>
            <main>
                Sticks of Fire
            </main>
            <Link to="/homepage">HomePage</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/ContactUs">Contact Us</Link>
        </p>
    )
}