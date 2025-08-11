import React, { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Archive, Users, Puzzle, CheckCircle } from 'lucide-react';

// --- Shared Data for all Components ---
const problems = [
  {
    icon: AlertTriangle,
    title: "A Widespread Struggle",
    description: (
      <p>
        <strong>95% of India's NGOs Struggle with MEL</strong> due to lack of dedicated expertise and resources.
      </p>
    ),
  },
  {
    icon: Users,
    title: "Lack of Experts & Budgets",
    description: "Most teams lack M&E experts or dedicated budgets for proper impact measurement and learning systems.",
  },
  {
    icon: Archive,
    title: "Inefficient Reporting",
    description: "Reporting is slow, data unused and donors want more evidence while existing processes remain inefficient.",
  },
  {
    icon: Puzzle,
    title: "Unsuitable Tools",
    description: "Existing tools are complex, expensive, or not built specifically for the social sector's unique needs.",
  },
];

const solution = {
  title: "ChatMnE changes that.",
  description: "It brings MEL expertise directly to your fingertips—with AI that understands the social sector.",
};


// --- 💡 Idea 3: The Minimalist Animated Progress List ---

const ProgressListSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleIndex((prev) => Math.max(prev, index));
          }
        },
        { threshold: 0.6 }
      );
      if (card) observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl">A Journey Through the Challenges</h2>
      </div>
      <div className="max-w-2xl mx-auto relative">
        {/* The tracker line */}
        <div className="absolute left-5 top-2 bottom-0 w-0.5 bg-border -z-10" />
        
        {problems.map((problem, index) => {
          const isVisible = index <= visibleIndex;
          const ActiveIcon = problem.icon;
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex items-start gap-8 mb-12"
            >
              {/* Dot on the tracker line */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                  ${isVisible ? 'bg-primary text-primary-foreground' : 'bg-border text-muted-foreground'}`}>
                  <ActiveIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Card Content */}
              <div className={`pt-1 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-30'}`}>
                <h3 className="font-medium text-xl mb-1">{problem.title}</h3>
                <div className="text-muted-foreground leading-relaxed">{problem.description}</div>
              </div>
            </div>
          );
        })}
        
        {/* The Solution at the end */}
        <div className="flex items-start gap-8">
            <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                  ${visibleIndex >= problems.length -1 ? 'bg-green-500 text-white' : 'bg-border text-muted-foreground'}`}>
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
              <div className={`pt-1 transition-opacity duration-700 ${visibleIndex >= problems.length -1 ? 'opacity-100' : 'opacity-30'}`}>
                <h3 className="font-medium text-xl mb-1 gradient-text">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
              </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Showcase Component ---

const ProblemShowcase = () => {
  const sectionClasses = "border-b border-border";

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto">
        <ProgressListSection />
      </div>
    </div>
  );
};

export default ProblemShowcase;