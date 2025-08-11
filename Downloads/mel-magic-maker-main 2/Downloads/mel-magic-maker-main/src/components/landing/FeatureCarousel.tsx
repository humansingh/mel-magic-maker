import React, { useState, useEffect } from 'react';
import { BarChart3, FileText, Landmark, Layers3, LineChart, MessagesSquare, Sparkles, Table2 } from "lucide-react";

// --- Features Data reordered for the new layout ---
const features = [
  { icon: MessagesSquare, title: "Create Questionnaires", desc: "Design surveys in seconds.", className: "" },
  { icon: Sparkles, title: "Feedback & Reflection", desc: "Draft learning agendas & workshops to improve programs.", className: "" },
  { icon: Layers3, title: "Define Indicators", desc: "Get relevant indicators based on your theory of change or goals.", className: "" },
  { icon: LineChart, title: "MEL & Research Advice", desc: "From design to interpreting trends.", className: "" },
  { icon: Table2, title: "Analyze Data", desc: "Upload Excel and ask: ‘What does this tell me?’", className: "" },
  { icon: BarChart3, title: "Visualize Data", desc: "Turn raw data into powerful, easy-to-understand visuals.", className: "" },
  { icon: FileText, title: "Generate Reports", desc: "Donor-ready reports and internal decks instantly.", className: "" },
  { icon: Landmark, title: "Theory of Change / Logframe", desc: "Auto-generate from program notes or proposals.", className: "" },
];

// --- Main Features Component ---
const FeatureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // We only want to cycle through the actual feature cards, not the header
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2500); // 2.5 seconds per card

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id="features" className="flex w-full flex-col items-center justify-center bg-background px-4 py-20 sm:px-6 md:px-8">
      <style jsx>{`
        @keyframes spin-border {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }

        .shiny-card::before {
          content: '';
          position: absolute;
          inset: -1px; /* Overlaps the border */
          border-radius: inherit;
          z-index: -1;
          background: conic-gradient(
            from var(--angle),
            var(--shine-color-1),
            var(--shine-color-2),
            var(--shine-color-1)
          );
          animation: spin-border 4s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Header Card */}
          <div
            className="shiny-card relative rounded-2xl p-6 md:col-span-2 md:row-span-2 flex flex-col justify-center border border-primary/30"
            style={{
              '--shine-color-1': 'hsl(var(--primary))',
              '--shine-color-2': 'transparent',
            }}
          >
            <div className="relative z-10 text-left">
              <h2 className="font-display text-3xl lg:text-4xl mb-4 gradient-text">
                Key Features – Save 8+ Hours a Week with ChatMnE!
              </h2>
              <p className="text-muted-foreground">An all-in-one tool designed to do 80% of your MEL tasks.</p>
            </div>
          </div>

          {/* Feature Cards */}
          {features.map((feature, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={feature.title}
                className={`
                  shiny-card relative rounded-2xl p-5 transition-all duration-500 ease-in-out border
                  ${feature.className}
                  ${isActive
                    ? 'bg-primary/10 border-primary/30 shadow-2xl shadow-primary/10'
                    : 'bg-card/50 border-transparent shadow-lg shadow-black/5'
                  }
                `}
                style={{
                  '--shine-color-1': isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.2)',
                  '--shine-color-2': isActive ? 'transparent' : 'hsl(var(--muted-foreground) / 0.1)',
                }}
              >
                <div className="relative z-10">
                  <div className={`
                    mb-3 inline-block rounded-lg p-2 transition-colors duration-500
                    ${isActive ? 'bg-primary/20 text-primary' : 'bg-muted/50 text-muted-foreground'}
                  `}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className={`
                    mb-2 text-lg font-semibold transition-colors duration-500
                    ${isActive ? 'text-foreground' : 'text-muted-foreground'}
                  `}>
                    {feature.title}
                  </h3>
                  <p className={`
                    text-sm transition-colors duration-500
                    ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/70'}
                  `}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
