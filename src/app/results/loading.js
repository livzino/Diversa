"use client";
import { Poppins, Libre_Baskerville } from "next/font/google";

import "../globals.css";

import { MagnifyingGlass } from "react-loader-spinner";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });

export default function Loading() {
  return (
    <section className="loading-container">
      <div id="loading" className="loading-wrapper">
        <MagnifyingGlass visible={true} height="100" width="100" ariaLabel="magnifying-glass-loading" wrapperStyle={{}} wrapperClass="magnifying-glass-wrapper" glassColor="#c0efff" color="#fff" />
        <p className={`${libre.className} loading-title`}>Scanning page...</p>
      </div>
    </section>
  );
}
