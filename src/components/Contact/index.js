import React, { useState } from 'react';

export default function Contact() {
const [name, setName] = useState("");
const [number, setNumber] = useState("");
const [email, setEmail] = useState("");
const [inquiry, setInquiry] = useState("");

const handleInquiry = () => {
    const newInquiry = {
        name: name,
        number: number,
        email: email,
        inquiry: inquiry
    }
}

    return (
        <main>
            <div>
                If you have any inquiries, please fill out the form below and contact us.
            </div>
            <form>
                <input type="text" placeholder="Your Name" onChange={(event) => (setName(event.target.value))} />
                <br/>
                <input type="text" placeholder="Contact Number" onChange={(event) => (setNumber(event.target.value))} />
                <br/>
                <input type="text" placeholder="Your Email Address" onChange={(event) => (setEmail(event.target.value))} />
                <br/>
                <input type="text" placeholder= "Your Inquiry Here" onChange={(event) => (setInquiry(event.target.value))}/>
            </form>
            <button type="button" onClick={handleInquiry}>Submit Inquiry</button>
        </main>
    )
}