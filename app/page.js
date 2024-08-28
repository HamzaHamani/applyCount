import { GridBackgroundDemo } from "@/components/self/gridBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen">
        <GridBackgroundDemo />
        <div className="h-screen"></div>
      </section>
    </main>
  );
}
