import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';

const personas = [
  {
    id: 'program-managers',
    name: 'Program Managers',
    superpower: 'Build surveys in minutes.',
    description: '...who handle MEL solo and need quick, reliable support for impact measurement.',
    expandedText: 'For Program Managers, ChatMnE acts as an always-on MEL expert. It helps draft baseline surveys in minutes, suggests relevant indicators for log frames, and turns field notes into structured reports, freeing you up to focus on program delivery.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill={`url(#grad-${props.uniqueId})`}/>
        <path d="M64 76C72.8366 76 80 68.8366 80 60C80 51.1634 72.8366 44 64 44C55.1634 44 48 51.1634 48 60C48 68.8366 55.1634 76 64 76Z" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M64 96C48.536 96 36 83.464 36 68C36 61.372 39.266 56 44 56" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M84 68V92L92 84" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M84 92L100 76" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id={`grad-${props.uniqueId}`} x1="0" y1="0" x2="128" y2="128"><stop stopColor="hsl(var(--primary) / 0.7)"/><stop offset="1" stopColor="hsl(var(--primary) / 0.4)"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    id: 'me-leads',
    name: 'M&E Leads',
    superpower: 'Analyze data instantly.',
    description: '...who need faster analysis and want to focus on strategic insights.',
    expandedText: 'M&E Leads can leverage ChatMnE to accelerate data analysis. Upload raw data and ask for key insights, trends, and outliers. This allows you to shift your focus from data crunching to strategic interpretation and learning.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill={`url(#grad-${props.uniqueId})`}/>
        <path d="M69 88C82.2548 88 93 77.2548 93 64C93 50.7452 82.2548 40 69 40C55.7452 40 45 50.7452 45 64C45 77.2548 55.7452 88 69 88Z" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M88 84L100 96" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 68H78" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 48H72V36H36V48Z" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id={`grad-${props.uniqueId}`} x1="0" y1="0" x2="128" y2="128"><stop stopColor="hsl(var(--primary) / 0.7)"/><stop offset="1" stopColor="hsl(var(--primary) / 0.4)"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    id: 'small-nonprofits',
    name: 'Small Nonprofits',
    superpower: 'Measure impact effectively.',
    description: '...with no dedicated data team but big ambitions for measuring their impact.',
    expandedText: 'For small teams without a dedicated data expert, ChatMnE democratizes MEL. It provides the expertise needed to establish robust measurement systems, ensuring even nascent organizations can prove their impact effectively.',
     icon: (props) => (
      <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill={`url(#grad-${props.uniqueId})`}/>
        <path d="M96 96C96 84.9543 86.0457 76 76 76C65.9543 76 56 84.9543 56 96" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M76 76V48C76 45.7909 77.7909 44 80 44C82.2091 44 84 42.2091 84 40C84 37.7909 82.2091 36 80 36C77.7909 36 76 34.2091 76 32" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M56 56L40 64L56 72" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id={`grad-${props.uniqueId}`} x1="0" y1="0" x2="128" y2="128"><stop stopColor="hsl(var(--primary) / 0.7)"/><stop offset="1" stopColor="hsl(var(--primary) / 0.4)"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    id: 'fundraising-teams',
    name: 'Fundraising Teams',
    superpower: 'Create data-driven stories.',
    description: '...looking for compelling evidence and data-driven stories for donors.',
    expandedText: 'Fundraising teams can use ChatMnE to quickly generate data-driven narratives for proposals and donor reports. Turn impact data into compelling stories that resonate with funders and showcase your organization\'s effectiveness.',
    icon: (props) => (
      <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill={`url(#grad-${props.uniqueId})`}/>
        <path d="M56 80C56 68.9543 64.9543 60 76 60C87.0457 60 96 68.9543 96 80C96 91.0457 87.0457 100 76 100H52C45.3726 100 40 94.6274 40 88C40 81.3726 45.3726 76 52 76H84" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M76 60V44C76 39.5817 72.4183 36 68 36H64" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 52H96" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id={`grad-${props.uniqueId}`} x1="0" y1="0" x2="128" y2="128"><stop stopColor="hsl(var(--primary) / 0.7)"/><stop offset="1" stopColor="hsl(var(--primary) / 0.4)"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    id: 'founders',
    name: 'Founders',
    superpower: 'Scale impact with confidence.',
    description: '...trying to measure and scale impact while managing other priorities.',
    expandedText: 'For Founders, ChatMnE is a strategic partner. It provides the data-backed confidence needed to make key decisions, communicate impact to the board, and steer the organization towards greater scalability and success.',
    icon: (props) => (
       <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill={`url(#grad-${props.uniqueId})`}/>
        <path d="M64 68C72.8366 68 80 60.8366 80 52C80 43.1634 72.8366 36 64 36C55.1634 36 48 43.1634 48 52C48 60.8366 55.1634 68 64 68Z" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M48 92C48 84.268 55.1634 78 64 78C72.8366 78 80 84.268 80 92" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M96 52C96 38.7452 85.2548 28 72 28" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 52C32 38.7452 42.7452 28 56 28" stroke="white" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id={`grad-${props.uniqueId}`} x1="0" y1="0" x2="128" y2="128"><stop stopColor="hsl(var(--primary) / 0.7)"/><stop offset="1" stopColor="hsl(var(--primary) / 0.4)"/></linearGradient></defs>
      </svg>
    ),
  },
];

const TargetAudience = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 sm:py-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto">
        {/* START: Updated Header */}
        <header className="max-w-3xl mb-12 text-center mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            <p className="text-primary font-semibold">Built for the Social Sector</p>
            <span className="w-8 h-1 bg-primary rounded-full"></span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-0">
            Designed for every role, every mission
          </h2>
           {/*
          <p className="text-lg text-muted-foreground">
            From solo change-makers to large teams, ChatMnE adapts to how you work — helping you capture, analyze, and amplify your impact story.
          </p>
          */}
        </header>
        {/* END: Updated Header */}

        {/*
        <div className="flex flex-col items-center gap-8 mt-8">
            <div className="flex justify-center gap-4">
                <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                aria-label="Previous slide"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 text-muted-foreground disabled:opacity-50 hover:bg-muted"
                >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9.78 4.78a.75.75 0 0 0-1.06-1.06l-4 4a.75.75 0 0 0-.007 1.054l3.903 4a.75.75 0 0 0 1.073-1.048l-3.385-3.47L9.78 4.78Z"></path></svg>
                </button>
                <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                aria-label="Next slide"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/50 text-muted-foreground disabled:opacity-50 hover:bg-muted"
                >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6.47 11.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 .007-1.054l-3.903-4a.75.75 0 1 0-1.073 1.048l3.385 3.47L6.47 11.47Z"></path></svg>
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                {personas.map((persona, index) => (
                    <div key={persona.id} className={`transition-colors duration-300 ${selectedIndex === index ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                        <p>{persona.name}</p>
                        <p className={`text-xs transition-opacity duration-300 ${selectedIndex === index ? 'opacity-70' : 'opacity-0'}`}>{persona.superpower}</p>
                    </div>
                ))}
            </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default TargetAudience;