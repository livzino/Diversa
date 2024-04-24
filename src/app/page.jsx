import { Poppins, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <main>
      <h1 className={libre.className}>Product name</h1>
      <p>Welcome to our web accessibility project! We are using Next.js to create a web application that demonstrates the importance of accessibility and how it aligns with the Web Content Accessibility Guidelines (WCAG) 2.1. By inputting a website URL, users can generate a report highlighting any accessibility issues found, helping website owners and developers ensure their sites are usable by all.</p>
      <input type="url"></input>
      <input type="submit" value="Check"></input>
    </main>
  );
}
