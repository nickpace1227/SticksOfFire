import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import HomePage from "../HomePage";
import Contact from "../Contact";
import Inventory from "../Inventory";

export default function SticksOfFire() {
  return (
    <div>
      <BrowserRouter>
          <main>
          <Header />
            <div>
              <Routes>
                <Route path="/homepage" exact element={<HomePage />} />
                <Route path="/ContactUs" exact element={<Contact />} />
                <Route path="/Inventory" exact element={<Inventory />} />
              </Routes>
            </div>
          </main>
      </BrowserRouter>
    </div>
  );
}

