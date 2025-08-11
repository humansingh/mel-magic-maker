import { Button } from "@/components/ui/button";

const PricingTeaser = () => {
  return (
    <section id="pricing" className="container mx-auto py-32 sm:py:32">
      <div className="rounded-2xl border bg-secondary p-10 text-center">
        <h2 className="font-display text-3xl lg:text-4xl mb-4">Join the Waitlist!</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Get a free demo and see how ChatMnE can help you with your day to day work.
        </p>
        
        <Button variant="hero" className="h-12 px-8">🚀 Join 400+ NGOs Already on the Waitlist</Button>
      </div>
    </section>
  );
};

export default PricingTeaser;
