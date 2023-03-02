import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <main>
            <div>
                Sticks of Fire
            </div>
            <Link to="/homepage">HomePage</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/ContactUs">Contact Us</Link>
        </main>
    )
}