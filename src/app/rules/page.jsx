import "../globals.css";
import "../rules/rules.js";
import { Poppins, Libre_Baskerville } from "next/font/google";
import { accordion } from "../rules/rules.js";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default async function Rules() {
  return (
    <main className="pagemain">
      <h1 className={`${libre.className} h1rules`}>WCAG 2.0 Level A & AA Rules</h1>
      <div class="accordion">
        <div class="content-box">
          <div class="label">Area-alt</div>

          <div class="content">
            <p>Ensures area elements of image maps have alternate text</p>

            <p>Critical</p>
          </div>
        </div>

        <div class="content-box">
          <div class="label">aria-braille-equivalent</div>

          <div class="content">
            <p>Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent</p>

            <p>Serious</p>
          </div>
        </div>

        <div class="content-box">
          <div class="label">form-field-multiple-labels</div>

          <div class="content">
            <p>Ensures form field does not have multiple label elements</p>

            <p>Moderate</p>
          </div>
        </div>

        <div class="content-box">
          <div class="label">server-side-image-map</div>

          <div class="content">
            <p>Ensures that server-side image maps are not used</p>

            <p>Minor</p>
          </div>
        </div>
      </div>
    </main>
  );
}
