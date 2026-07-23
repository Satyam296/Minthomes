import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationStrip from "@/components/LocationStrip";
import About from "@/components/About";
import Stats from "@/components/Stats";
import SignatureResidences from "@/components/SignatureResidences";
import FromOurFeed from "@/components/FromOurFeed";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="bg-cream text-charcoal">
      <Header />
      <Hero />
      <LocationStrip />
      <About />
      <Stats />
      <SignatureResidences />
      <FromOurFeed />
      <CtaBanner />
    </main>
  );
}
