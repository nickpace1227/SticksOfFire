import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import HomePage from "../HomePage";
import Contact from "../Contact";
import AboutUs from "../AboutUs";
import { Wrapper } from "./styles";

export default function SticksOfFire() {
  return (
      <BrowserRouter>
        <Wrapper>
          <main>
          <Header />
            <div>
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/HomePage" exact element={<HomePage />} />
                <Route path="/ContactUs" exact element={<Contact />} />
                <Route path="/AboutUs" exact element={<AboutUs />} />
              </Routes>
            </div>
          </main>
        </Wrapper>
      </BrowserRouter>
  );
}

