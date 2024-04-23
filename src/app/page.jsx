import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <main>
      <h1 className={libre.className}>And so it begins...</h1>
    </main>
  );
}
