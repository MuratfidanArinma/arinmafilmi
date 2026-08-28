import { About } from "@/components/About";
import { Cast } from "@/components/Cast";
import { Crew } from "@/components/Crew";
import { Director } from "@/components/Director";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Trailer } from "@/components/Trailer";

export default function Home() {
  return (
    <>
      <Hero />
      <Trailer />
      <About />
      <Director />
      <Crew />
      <Cast />
      <Gallery />
    </>
  );
}
