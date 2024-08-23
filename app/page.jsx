import Hero from "@/components/Hero";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <ScrollSection/>
      <Reviews/>
      <Cta/>
    </main>
  );
}
