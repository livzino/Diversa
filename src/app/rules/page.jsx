/* import "../globals.css";
import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <main className="pagemain">
      <h1 className={`${libre.className} h1rules`}>WCAG 2.0 Level A & AA Rules</h1>
      <p className="ppage">Welcome to our web accessibility project! We are using Next.js to create a web application that demonstrates the importance of accessibility and how it aligns with the Web Content Accessibility Guidelines (WCAG) 2.1. By inputting a website URL, users can generate a report highlighting any accessibility issues found, helping website owners and developers ensure their sites are usable by all.</p>
      <form action="/">
        <input name="url" type="url" className="url"></input>
        <br></br>
        <input type="submit" value="Check" className="check"></input>
      </form>
    </main>
  );
}
 */

import Link from "next/link";

export default async function Rules() {
  const url = "https://dequeuniversity.com/rules/axe/4.9";
  const res = await fetch(url);

  const dogs = await res.json();

  console.log(dogs);

  return (
    <nav className="bg-black text-white p-2">
      <ul className="md:flex gap-2">
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>
        {dogs.map((dog) => {
          const { id, description, impact, slug } = dog;
          return (
            <li key={slug}>
              <Link href={`/${slug}`} prefetch={false}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}