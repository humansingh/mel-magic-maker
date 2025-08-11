import React from 'react';

const faqs = [
  {
    q: "How much technical expertise do I need to use this tool?",
    a: "Almost none. The interface is designed to be simple and user-friendly - a simple chat window - similar to using ChatGPT.",
  },
  {
    q: "Is my information private?",
    a: "We only use the information you submit to serve and improve the product, we will not sell or distribute your data.",
  },
  {
    q: "Do you train your LLM on my data?",
    a: "We use OpenAI APIs that do not train on submitted data. You can read more about these APIs here: https://openai.com/enterprise-privacy",
  },
  {
    q: "What is your privacy policy?",
    a: "You can find our privacy policy and terms of service here: https://10x-impact-labs.gitbook.io/user_guide/privacy-policy",
  },
  {
    q: "What kind of support do you offer once I start using the tool?",
    a: (
      <>
        <p className="mb-2"><strong>Email and Chat Support</strong> – Available during business hours.</p>
        <p className="mb-2"><strong>Training and Updates</strong> – We offer periodic training sessions and notify users about feature updates.</p>
        <p><strong>Community Access</strong> – You’ll have access to a community of other users for shared learning and support. [Coming soon]</p>
      </>
    ),
  },
  {
    q: "What is ChatMnE Cost? Are there any discounts",
    a: "You can find our pricing tiers and discounts here: [Link]. You can write to our team at yukti@10ximpact.in for additional discounts.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "Unlike ChatGPT, ChatMnE is purpose-built for nonprofits and MEL teams. It’s trained on 10,000+ pages of MEL expertise to help with surveys, indicators, reports, and data analysis—instantly, with simple prompts. But please do not listen to us, please kindly try for yourselves.",
  },
  {
    q: "Who is the team behind ChatMnE?",
    a: "ChatMnE was created by 10x Impact Labs - A Tech, AI and Data Social Impact Enabler org. 10x works with non-profits and philanthropies to solve complex challenges leverage Tech to scale impact. 10x works with organizations like Gates Foundation, Ashoka, Dasra, Udhyam, Nudge and more. 10x created chatmne as we realized that not every non-profit can access MEL expertise in India. We wanted to ensure every NGO has the best MEL expertise accessible at their finger tips.",
  }
];

const FAQ = () => {
  return (
 <section id="faqs" className="relative py-20 isolate" aria-labelledby="faq-heading">
      {/* Background Image Div */}
      <div
        style={{
          backgroundImage: `url('/101.png')`,
          opacity: 0.9,
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="faq-heading" className="font-display text-4xl lg:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have more questions or just wanna talk product? Talk to us at <a href="mailto:yukti@10ximpact.in" className="text-primary hover:underline font-semibold">yukti@10ximpact.in</a>.
          </p>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {faqs.map(({ q, a }) => (
            <article key={q} className="rounded-2xl border bg-card/80 backdrop-blur p-6 animate-fade-in break-inside-avoid mb-8">
              <h3 className="text-base font-medium mb-2">{q}</h3>
              <div className="text-sm text-muted-foreground leading-relaxed">{a}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;