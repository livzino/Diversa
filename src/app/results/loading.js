"use client";

import "../globals.css";

import { MagnifyingGlass } from "react-loader-spinner";

export default function Loading() {
  return (
    <section className="loading-container">
      <div id="loading" className="loading-wrapper">
        <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="magnifying-glass-loading" wrapperStyle={{}} wrapperClass="magnifying-glass-wrapper" glassColor="#c0efff" color="#e15b64" />
        <p>Scanning page...</p>
      </div>
    </section>
  );
}
