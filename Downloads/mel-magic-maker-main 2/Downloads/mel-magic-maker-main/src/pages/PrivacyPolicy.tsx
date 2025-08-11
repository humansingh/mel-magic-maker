import React from 'react';
import { Button } from "@/components/ui/button";

// --- Main Privacy Policy Component ---
const PrivacyPolicy = () => {
  return (
    <div className="relative w-full min-h-screen bg-background text-foreground">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 -z-10 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 -z-10 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl" />
      
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

    <main className="container mx-auto py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-display text-4xl lg:text-5xl gradient-text">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: August 11, 2025</p>
          </header>

          <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground prose-p:mb-6 prose-h3:mb-4 prose-ul:mt-4">
            <p>
              10x Impact Labs (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use the M&E AI Expert Bot Product (“Service”).
            </p>
            
            <h3>1. Information We Collect</h3>
            <ul>
              <li><strong>Personal Information:</strong> We may collect personal details such as your name, email address, and other information you provide when creating an account.</li>
              <li><strong>Usage Data:</strong> We collect information about how you interact with the Service, including but not limited to usage patterns, logs, and device information.</li>
              <li><strong>AI-Generated Data:</strong> The Service generates data based on your interactions with the AI, which we may use to improve the Service.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the information collected to:</p>
            <ul>
              <li>Provide and improve the Service.</li>
              <li>Personalize your experience.</li>
              <li>Communicate with you regarding updates, support, and relevant information.</li>
              <li>Analyze usage patterns to enhance the performance and functionality of the Service.</li>
            </ul>

            <h3>3. Data Sharing</h3>
            <p>
              We do not sell or rent your personal data to third parties. However, we may share your information with trusted service providers who assist us in operating the Service, provided they adhere to similar privacy standards. We may also share your data if required by law or to protect our rights.
            </p>

            <h3>4. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no system is 100% secure, and we cannot guarantee the absolute security of your data.
            </p>

            <h3>5. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal data.</li>
              <li>Object to or restrict certain data processing activities.</li>
              <li>Request a copy of your personal data in a machine-readable format. To exercise these rights, please contact us at [Insert Contact Information].</li>
            </ul>

            <h3>6. Children’s Privacy</h3>
            <p>
              The Service is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such data, we will take steps to delete it.
            </p>

            <h3>7. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any material changes will be communicated to you, and continued use of the Service after such changes will signify your acceptance of the updated policy.
            </p>

            <h3>8. Contact Information</h3>
            <p>
              For any questions or concerns regarding this Privacy Policy or your personal data, please contact us at <a href="mailto:team@10ximpact.in" className="text-primary font-semibold hover:underline">team@10ximpact.in</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
