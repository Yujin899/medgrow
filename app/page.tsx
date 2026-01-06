import CallToAction from "@/components/call-to-action";
import FAQsThree from "@/components/faqs-3";
import Features from "@/components/features-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import WallOfLoveSection from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <WallOfLoveSection />
      <Pricing />
      <FAQsThree />
      <CallToAction />
      <FooterSection />

    </>
  );
}
