import { Poppins, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import React from "react";
import "../app/globals.css";

export const dynamic = "force-dynamic";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <main className="pagemain">
      <p className="diversa"> Diversa</p>
      <h1 className={`${libre.className} h1page`}>Product name</h1>
      <p className="ppage">Welcome to our web accessibility project! We are using Next.js to create a web application that demonstrates the importance of accessibility and how it aligns with the Web Content Accessibility Guidelines (WCAG) 2.1. By inputting a website URL, users can generate a report highlighting any accessibility issues found, helping website owners and developers ensure their sites are usable by all.</p>
      <form action="/results">
        <input name="url" type="url" className="url"></input>
        <br></br>
        <input type="submit" value="Check" className="check"></input>
      </form>
    </main>
  );
}
