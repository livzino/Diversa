import Image from "next/image";
import { score } from "../components/Grading";
import "../globals.css";

// Revalidate route every 30 minutes
export const revalidate = 1800;

export default async function Page({ searchParams }) {
  const params = new URLSearchParams(searchParams);

  const response = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
  const data = await response.json();
  console.log(data);

  const [scoreValue, major, moderate, minor] = score(data);

  return (
    <main className="App">
      <div className="dataCard revenueCard">
        <h1>Report for {data.url}</h1>
        <p>Found {data.violations.length} issues</p>
        {data.violations.map((violation) => {
          return <p key={data}>{violation.impact}</p>;
        })}
      </div>

      <div className="dataCard customerCard">
        <Image alt={data.url} src={data.screenshot.url} width={data.screenshot.width} height={data.screenshot.height} />
      </div>

      <div className="dataCard categoryCard">
        <p>Score: {scoreValue}%</p>
        <p>Major: {major.length}</p>
        <p>Moderate: {moderate.length}</p>
        <p>Minor: {minor.length}</p>
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
