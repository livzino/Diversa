"use client";

import "../globals.css";
import "../rules/rules.js";
import React from "react";

import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import { poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: "400" });

export default function Rules() {
  return (
    <main className="pagemain">
      <h1 className={`${libre.className} h1rules`}>WCAG 2.0 Level A & AA Rules</h1>
      <Accordion>
        <AccordionItem header="What is Lorem Ipsum?">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</AccordionItem>

        <AccordionItem header="Where does it come from?">Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.</AccordionItem>

        <AccordionItem header="Why do we use it?">Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.</AccordionItem>
      </Accordion>
    </main>
  );
}
