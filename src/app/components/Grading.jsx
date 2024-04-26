import "./globals.css";

export default async function Grading() {
  const violationsByImpact = Object.entries(Object.groupBy(data.violations, ({ impact }) => impact)).map(([title, violations]) => ({
    title,
    count: violations.length,
    violations,
  }));

  console.log(violationsByImpact);
  return <span style={{ "--severity": `var(--${violation.impact})` }}>{violation.impact}</span>;
}
