import Link from "next/link";
import "../app/globals.css";

export default function NotFound() {
  return (
    <main className="mainnot">
      <div className="main">
        <p className="diversa"> Diversa</p>
        <h1 className="h1not">404</h1>
        <h2 className="h2not">Not Found</h2>
        <p className="pte">Could not find requested resource</p>
        <Link href="/" className="notbutn">
          Return Home
        </Link>{" "}
      </div>
    </main>
  );
}
