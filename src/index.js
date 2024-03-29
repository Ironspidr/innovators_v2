import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import layout from "./pages/layout";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clubs from "./pages/clubs";
import NoPage from "./pages/nopage";
import Telemed from "./pages/vmm";
import MustangsApp from "./pages/mustangsApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/vmm" element={<Telemed />} />
        <Route path="/mustangsApp" element={<MustangsApp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
