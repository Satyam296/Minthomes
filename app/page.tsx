import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Stats from "@/components/Stats";
import SignatureResidences from "@/components/SignatureResidences";
import FromOurFeed from "@/components/FromOurFeed";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-cream text-charcoal">
        <Header />
        <Hero />
        <div className="mx-auto mt-8 max-w-6xl px-6 md:mt-10">
          <Marquee />
        </div>
        <About />
        <Stats />
        <SignatureResidences />
        <FromOurFeed />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
