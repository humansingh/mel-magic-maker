import Hero from "@/components/landing/Hero";
import LogoMarquee from "@/components/landing/LogoMarquee";
import FeatureCarousel from "@/components/landing/FeatureCarousel";
import Testimonials from "@/components/landing/Testimonials";
import Problem from "@/components/landing/Problem";
import PricingTeaser from "@/components/landing/PricingTeaser";
import PricingPlans from "@/components/landing/PricingPlans";
import FAQ from "@/components/landing/FAQ";
import TargetAudience from "@/components/landing/targetAudience"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main>
        <LogoMarquee />
        <FeatureCarousel />
        <Testimonials />
        <Problem />
        <TargetAudience />
        <PricingPlans />
        <PricingTeaser />
        <FAQ />
      </main>
      <footer className="container mx-auto py-12 text-center text-sm text-muted-foreground">
        <div className="flex justify-center items-center gap-4">
          <span>© {new Date().getFullYear()} 10x Impact Labs. All rights reserved.</span>
          <span className="border-l border-border h-4"></span>
          <a href="/privacy" className="hover:text-primary hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
