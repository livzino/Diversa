/* export default async function Grading({ data }) {
  const violationsByImpact = Object.entries(Object.groupBy(data.violations, ({ impact }) => impact)).map(([title, violations]) => ({
    title,
    count: violations.length,
    violations,
  }));

  console.log(violationsByImpact);
  return <span style={{ "--severity": `var(--${violation.impact})` }}>{violation.impact}</span>;
}
 */

export const score = (data) => {
  const newArray = data.violations.concat(data.passes);

  const critical = newArray.filter((one) => one.impact === "critical");

  const serious = newArray.filter((one) => one.impact === "serious");

  const major = critical.concat(serious);

  const moderate = newArray.filter((one) => one.impact === "moderate");

  const minor = newArray.filter((one) => one.impact === "minor");

  const p2 = major.length;

  const p1 = moderate.length;

  const p0 = minor.length;

  const total = p2 + p1 + p0;

  const res = Math.round(((0.4 * p2 + 0.8 * p1 + p0) / total) * 100);

  return [res, major, moderate, minor];
};
