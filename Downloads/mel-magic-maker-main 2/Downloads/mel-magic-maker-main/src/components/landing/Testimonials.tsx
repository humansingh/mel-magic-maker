import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I will cry!! This work (referring to menstrual health indicators response given by the bot to her query) literally took me 3 weeks to do and this (the bot) just did it in 1-2 mins!",
    authorName: "M&E Lead",
    authorTitle: "Health Non-profit",
  },
  {
    quote: "My team recently said - Professional MEL Experts bane ya na bane, Prompt Engineers to Banijayenge :))",
    authorName: "MEL Director",
    authorTitle: "Education Non-profit",
  },
  {
    quote: "This is very good…Shall I share few NGOs numbers? They will need this too...",
    authorName: "Program Director",
    authorTitle: "Livelihoods Non-profit",
  },
  {
    quote: "We just have to ask a question, and it summarizes the entire thing... We were like super impressed. We are finding a lot of value. We are sold on this.",
    authorName: "Director",
    authorTitle: "Education Non-profit",
  },
  {
    quote: "I thought the responses would be high level, but am very excited to see how deep response it gave. This makes life so much easier.",
    authorName: "Program Lead",
    authorTitle: "Disability Non-profit",
  },
  {
    quote: "Cost wise its really great & affordable.",
    authorName: "Program Lead",
    authorTitle: "Disability Non-profit",
  },
];

const Testimonials = () => {
  // Logic to distribute testimonials into columns for a masonry layout
  const numColumns = 3;
  const columns = Array.from({ length: numColumns }, () => []);
  testimonials.forEach((testimonial, i) => {
    columns[i % numColumns].push({ ...testimonial, originalIndex: i });
  });

  return (
    <section
      id="reviews"
      // Updated gradient using your theme's primary and accent colors
      className="bg-gradient-to-br from-primary to-accent py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            An AI Tool Non-Profits Love
          </h2>
          <p className="mt-4 text-lg text-zinc-200">
          ChatMnE is helping MEL Teams, Program Teams, Founders, and even teams without MEL experts measure, improve, and communicate their social impact</p>
        </header>

        {/* Masonry Grid Layout - cards will have variable heights */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="grid gap-6">
              {col.map((t) => (
                <figure
                  key={t.originalIndex}
                  className="relative h-fit animate-fade-in rounded-2xl bg-white p-6 shadow-lg"
                  style={{ animationDelay: `${t.originalIndex * 100}ms` }}
                >
                  <Quote
                    className="absolute left-6 top-6 h-5 w-5 text-zinc-200"
                    aria-hidden
                  />
                  <div className="relative">
                    <blockquote className="font-normal text-zinc-700">
                      <p>“{t.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-6 border-t border-zinc-100 pt-5">
                      <p className="font-bold text-zinc-900">{t.authorName}</p>
                      <p className="text-sm text-zinc-600">{t.authorTitle}</p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;