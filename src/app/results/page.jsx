import "../globals.css";
import Image from "next/image";
import { score } from "../components/Grading";
import notfound from "../not_found.jsx";
import { Poppins, Libre_Baskerville } from "next/font/google";

// Revalidate route every 30 minutes
export const revalidate = 1800;
const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Page({ searchParams }) {
  const params = new URLSearchParams(searchParams);

  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);

  const data = await response.json();
  if (response.status !== 200) return notfound();

  console.log(data);

  const [scoreValue] = score(data);

  return (
    <main className="App">
      <div className="card textCard">
        <h1 className={libre.className}>Report for {data.url}</h1>
        {/*  <p>Found {data.violations.length} issues</p> */}
        {data.violations.map((violation) => {
          let color;

          if (violation.impact === "minor") {
            color = "RGB(153, 255, 153)";
          } else if (violation.impact === "moderate") {
            color = "RGB(255, 255, 153)";
          } else if (violation.impact === "serious") {
            color = "RGB(255, 102, 102)";
          } else {
            color = "RGB(255, 102, 102)";
          }
          return (
            <ul key={data} className={poppins.className}>
              <li>
                <p className="listTitle" style={{ backgroundColor: color, display: "inline-block", padding: "0 5px" }}>
                  {violation.impact}
                </p>
                <p>{violation.description}</p>
              </li>
            </ul>
          );
        })}
      </div>

      <div className="card imgCard">
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
      </div>

      <div className="card gradingCard ">
        <p className={`${libre.className} listTitle`}> Score: {isNaN(scoreValue) ? "Not Available" : `${scoreValue}%`}</p>{" "}
        {(() => {
          if (scoreValue >= 90) {
            return <Image className="badge" alt="A" src="/assets/grade1.png" width={50} height={50} />;
          } else if (scoreValue >= 80) {
            return <Image className="badge" alt="B" src="/assets/grade2.png" width={50} height={50} />;
          } else if (scoreValue >= 70) {
            return <Image className="badge" alt="C" src="/assets/grade3.png" width={50} height={50} />;
          } else if (scoreValue >= 60) {
            return <Image className="badge" alt="D" src="/assets/grade4.png" width={50} height={50} />;
          } else if (scoreValue <= 60) {
            return <Image className="badge" alt="F" src="/assets/grade5.png" width={50} height={50} />;
          } else {
            return <Image className="badge" alt="N/A" src="/assets/none.png" width={50} height={50} />;
          }
        })()}{" "}
        {/*   <p>Major: {major.length}</p>
        <p>Moderate: {moderate.length}</p>
        <p>Minor: {minor.length}</p> */}
        <button className="btn">Grading guidelines</button>
      </div>
    </main>
  );
}

/*
{
      id: 'heading-order',
      impact: 'moderate',
      tags: [Array],
      description: 'Ensures the order of headings is semantically correct',
      help: 'Heading levels should only increase by one',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.9/heading-order?application=axe-puppeteer',
      nodes: [Array]
    },
*/
