import { Suspense } from "react";
import Marquee from "./component/Marquee";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <Marquee />
      </Suspense>
    </main>
  );
}