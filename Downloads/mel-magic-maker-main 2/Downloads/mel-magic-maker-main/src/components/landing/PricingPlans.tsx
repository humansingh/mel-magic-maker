import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    monthlyPrice: 799,
    annualPrice: 7191,
    features: ["Single Log in", "Create Survey + Reports", "Frameworks + Advice", "Support + Community"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Pro",
    monthlyPrice: 1499,
    annualPrice: 13491,
    features: ["All Basic Features", "Data Analysis", "Data Visualization", "AI Grant Writer"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Premium",
    monthlyPrice: 2999,
    annualPrice: 26991,
    features: ["(2–5) Log ins / org", "All Basic + Pro Features", "Dedicated Support", "Custom Onboarding"],
    cta: "Contact Sales",
    highlight: false,
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="plans" className="relative w-full bg-background py-24 sm:py-32" aria-labelledby="pricing-heading">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 id="pricing-heading" className="font-display text-4xl lg:text-5xl mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to be accessible for organizations with even less than ₹10 lacs of annual budget
          </p>
        </header>

        {/* --- Billing Cycle Toggle --- */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`font-medium transition-colors ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            className="relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            role="switch"
            aria-checked={billingCycle === 'annually'}
          >
            <span
              aria-hidden="true"
              className={`inline-block h-6 w-6 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${
                billingCycle === 'annually' ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`font-medium transition-colors ${billingCycle === 'annually' ? 'text-primary' : 'text-muted-foreground'}`}>
            Annually
          </span>
          <span className="hidden sm:inline-block ml-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            3 Months Free!
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`
                relative rounded-2xl p-8 h-full transition-all duration-300 border
                ${tier.highlight
                  ? 'bg-card border-primary shadow-2xl shadow-primary/10'
                  : 'bg-card/80 border-border shadow-lg shadow-black/5'
                }
              `}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground border-2 border-background">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    ₹{billingCycle === 'monthly' ? tier.monthlyPrice.toLocaleString('en-IN') : Math.round(tier.annualPrice / 12).toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted-foreground">/ month</span>
                </div>
                
                {billingCycle === 'annually' && (
                    <p className="text-sm text-muted-foreground mb-6 -mt-4">
                        Billed as ₹{tier.annualPrice.toLocaleString('en-IN')} per year
                    </p>
                )}


                <Button
                  variant={tier.highlight ? 'hero' : 'outline'}
                  className={`w-full h-11 mb-8 ${tier.highlight ? 'shadow-glow' : ''}`}
                >
                  {tier.cta}
                </Button>

                <ul className="space-y-3 text-sm flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <footer className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            For additional discounts please reach out to us.
          </p>
          <p className="text-muted-foreground">
            Purchasing will also get you <span className="font-semibold text-foreground">free MEL toolkits</span> and <span className="font-semibold text-foreground">500+ prompt guides.</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default PricingPlans;
