"use client";
import {
  GridBackgroundDemo,
  LandingPage,
} from "@/components/self/gridBackground";
import { Services } from "@/sections/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen relative">
        <GridBackgroundDemo />
      </section>
      {/* moving the services section dowm, cuz the dashboard has absoulte position */}
      <section className="h-[75vh]"></section>
      <section className="relative">
        <Services />
      </section>
      <div className="h-screen"></div>
    </main>
  );
}
