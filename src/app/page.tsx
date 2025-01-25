"use client"

import Image from "next/image";
import Navbar from "./ui/navbar/navbar";
import CollapseMenu from "./ui/collapseMenu/collpase-menu";
import MainSection from "./ui/mainSection/main-section";
import AboutUs from "./ui/aboutUs/about-us";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-top justify-items-center min-h-screen pt-4 pb-10 gap-4 sm:pt-6 sm:pb-6 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col row-start-2 items-center sm:items-start w-full">
        <Navbar />
        <CollapseMenu />
        <MainSection />
        <AboutUs />
      </main>
 
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
