import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

// --- Placeholder for your Logo component ---
const Logo = ({ size = 'large' }) => (
  <div className="flex items-center gap-2">
    <div className={`rounded-md bg-primary/10 ${size === 'large' ? 'h-12 w-12' : 'h-8 w-8'}`} />
    <span className={`font-display ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>ChatMnE</span>
  </div>
);


const Waitlist = () => {
  // A simple state management for the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    designation: '',
    meFrequency: '',
    otherFrequency: '',
    features: [],
    otherFeature: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureChange = (feature, checked) => {
    setFormData(prev => {
      const newFeatures = checked
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature);
      return { ...prev, features: newFeatures };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form Submitted", formData);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Thank you for joining the waitlist!");
    }, 2000);
  };

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 -z-10 bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 -z-10 bg-gradient-to-tl from-primary/5 to-transparent blur-3xl" />
      
      {/* --- Navigation --- */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary/10" aria-hidden />
              <span className="font-display text-xl">ChatMnE</span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/#features" className="story-link">Features</a>
              <a href="/#reviews" className="story-link">Reviews</a>
              <a href="/#pricing" className="story-link">Pricing</a>
              <a href="/#faqs" className="story-link">FAQs</a>
              <Button variant="outline">Sign In</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto grid lg:grid-cols-2 gap-16">
        {/* --- Left Fixed Column --- */}
        <div className="relative hidden lg:flex flex-col justify-center h-[calc(100vh-80px)] top-0 sticky">
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl lg:text-5xl gradient-text">
              You're one step away from transforming your MEL process.
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a growing community of non-profits who are leveraging AI to save time, enhance reporting, and scale their impact. We're excited to have you on board. Our team will get in touch with you for a free demo in the next few days.
            </p>
            <div className="border-t border-border pt-6 mt-6 text-sm text-muted-foreground">
              <p>✓ Free MEL Toolkits</p>
              <p>✓ 500+ Prompt Guides</p>
              <p>✓ Get early access</p>
              <p>✓ Receive exclusive updates</p>
              <p>✓ Help shape the future of MEL</p>
            </div>
          </div>
        </div>

        {/* --- Right Scrollable Form --- */}
        <div className="w-full max-w-lg mx-auto lg:mx-0 py-16">
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-primary/10 border border-border">
            <div className="text-center mb-8 lg:hidden">
                <h1 className="font-display text-3xl">Join the Waitlist</h1>
                <p className="mt-2 text-muted-foreground">Your AI Co-Pilot for M&E</p>
            </div>
            
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Form fields go here */}
              <div className="space-y-2">
                <Label htmlFor="name">Name <span className="text-primary">*</span></Label>
                <Input id="name" placeholder="Your full name" type="text" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} disabled={isLoading} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Id <span className="text-primary">*</span></Label>
                <Input id="email" placeholder="your.email@organization.com" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} disabled={isLoading} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organization">Organization Name <span className="text-primary">*</span></Label>
                <Input id="organization" placeholder="Your organization name" type="text" value={formData.organization} onChange={(e) => handleInputChange("organization", e.target.value)} disabled={isLoading} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="designation">Your Designation <span className="text-primary">*</span></Label>
                <Input id="designation" placeholder="Your job title/designation" type="text" value={formData.designation} onChange={(e) => handleInputChange("designation", e.target.value)} disabled={isLoading} required />
              </div>
              
              {/* M&E Frequency */}
              <div className="space-y-3">
                <Label>How often do you work on M&E tasks? <span className="text-primary">*</span></Label>
                <RadioGroup value={formData.meFrequency} onValueChange={(value) => handleInputChange("meFrequency", value)} disabled={isLoading} className="grid grid-cols-2 gap-3">
                  {["Daily", "Weekly", "Monthly", "Occasionally", "Rarely", "Other"].map(freq => (
                    <div key={freq}>
                      <RadioGroupItem value={freq} id={freq.toLowerCase()} className="peer sr-only" />
                      <Label htmlFor={freq.toLowerCase()} className="flex items-center justify-center rounded-md border-2 border-muted bg-popover p-3 text-sm hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                        {freq}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {formData.meFrequency === "Other" && (
                  <Input placeholder="Please specify..." value={formData.otherFrequency} onChange={(e) => handleInputChange("otherFrequency", e.target.value)} disabled={isLoading} />
                )}
              </div>

              {/* Features */}
              <div className="space-y-3">
                <Label>Which features would be most valuable? <span className="text-primary">*</span></Label>
                <div className="space-y-2">
                  {[ "Creating surveys easily", "Analysing data quickly", "Access to M&E best practices", "Receiving M&E advice tailored to my projects", "Generating automated reports", "Visualizing data with charts", "Other" ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox id={feature} checked={formData.features.includes(feature)} onCheckedChange={(checked) => handleFeatureChange(feature, checked)} disabled={isLoading} />
                      <Label htmlFor={feature} className="text-sm font-normal">{feature}</Label>
                    </div>
                  ))}
                </div>
                {formData.features.includes("Other") && (
                  <Input placeholder="Please specify other features..." value={formData.otherFeature} onChange={(e) => handleInputChange("otherFeature", e.target.value)} disabled={isLoading} className="ml-6" />
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={isLoading} className="w-full h-12" variant="hero">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Join Waitlist
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <a href="/" className="text-primary hover:underline font-medium">Return Home</a>
              </p>
              <p className="mt-2 text-xs text-muted-foreground/80">
                We respect your privacy. Your information will only be used to notify you about ChatMnE updates.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Waitlist;
