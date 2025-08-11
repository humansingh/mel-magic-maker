import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Bot, User, Plus, Settings, Copy, Share2, RefreshCw, Upload, Mic, Send } from "lucide-react";
import './Hero.css';
import { Link } from "react-router-dom";

const HeroCanvas = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "'Of course. Here are three potential survey questions for your youth employment program, targeting key outcomes:";
  const [showQuestions, setShowQuestions] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const promptSuggestions = [
    "Make them more youth-friendly",
    "Add a question about confidence",
    "Translate to Hindi",
  ];

  useEffect(() => {
    setTypedText('');
    setShowQuestions(false);
    setShowActions(false);
    setShowSuggestions(false);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowQuestions(true), 300);
        setTimeout(() => setShowActions(true), 800);
        setTimeout(() => setShowSuggestions(true), 1300);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className="w-full h-full bg-card rounded-lg flex overflow-hidden border border-border">
      {/* Sidebar */}
      <div className="w-1/4 bg-muted/50 p-4 border-r border-border hidden sm:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo1.png" alt="ChatMnE Logo" className="h-6 w-16" />            
          </div>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm mb-2 bg-primary/10 text-primary">
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
          <div className="space-y-2 overflow-y-auto">
             <p className="text-xs text-muted-foreground px-3 truncate">Youth Program Survey...</p>
             <p className="text-xs text-muted-foreground px-3 truncate">Annual Report Data...</p>
          </div>
        </div>
        <div>
          <Button variant="ghost" className="w-full justify-start gap-2 text-sm text-muted-foreground">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
          <div className="flex items-center gap-3 mt-4 border-t border-border pt-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">U</div>
            <span className="text-sm font-medium text-foreground truncate">User Profile</span>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="w-full sm:w-3/4 p-6 flex flex-col">
        <div className="flex-grow space-y-6 overflow-y-auto">
          {/* User's Prompt */}
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-sm">
              <p className="text-sm">Help me create a survey for a youth employment program.</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          {/* AI's Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="bg-muted p-3 rounded-lg max-w-md">
              <p className="text-sm">{typedText}<span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" /></p>
              {showQuestions && (
                <div className="mt-4 space-y-3 border-t border-border pt-3 animate-fade-in">
                  <div className="p-3 rounded-md border bg-background/50 text-xs"><strong>1. Skill Development:</strong> "On a scale of 1-5, how much has this program improved your job-specific skills?"</div>
                  <div className="p-3 rounded-md border bg-background/50 text-xs"><strong>2. Confidence Level:</strong> "How confident do you feel about finding a job now compared to before the program?"</div>
                  <div className="p-3 rounded-md border bg-background/50 text-xs"><strong>3. Employment Status:</strong> "Have you secured employment within 3 months of completing the program?"</div>
                  {showActions && (
                    <div className="flex items-center gap-2 pt-2 animate-fade-in">
                      <Button variant="ghost" size="icon" className="h-7 w-7"><Copy className="h-4 w-4 text-muted-foreground" /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7"><Share2 className="h-4 w-4 text-muted-foreground" /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7"><RefreshCw className="h-4 w-4 text-muted-foreground" /></Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {showSuggestions && (
            <div className="flex flex-wrap gap-2 animate-fade-in">
              {promptSuggestions.map(prompt => (
                <Button key={prompt} variant="outline" size="sm" className="rounded-full text-xs">{prompt}</Button>
              ))}
            </div>
          )}
        </div>
        
        {/* Prompt Bar */}
        <div className="mt-6 relative">
          <input type="text" placeholder="Ask a follow-up question..." className="w-full bg-muted border border-border rounded-lg py-2 pl-10 pr-20 text-sm" disabled />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Upload className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
            <Mic className="h-4 w-4 text-muted-foreground" />
            <button className="p-1 rounded-full text-muted-foreground hover:text-primary transition-colors" disabled>
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <header className="relative w-full overflow-x-hidden">

      {/* Navigation - CHANGED */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto">
            <nav className="flex items-center justify-between py-6">
                <div className="flex items-center gap-2">
                    <img src="/logo1.png" alt="ChatMnE Logo" className="h-12 w-32" />
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
                    <a href="#features" className="story-link">Features</a>
                    <a href="#reviews" className="story-link">Reviews</a>
                    <a href="#pricing" className="story-link">Pricing</a>
                    <a href="#faqs" className="story-link">FAQs</a>
                    <Button variant="outline">Sign In</Button>
                    <Link to="/waitlist">
                        <Button asChild variant="hero" className="lg:h-12 lg:px-6">
                            <span>Join the Waitlist →</span>
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
      </div>

      {/* Hero Content - CHANGED */}
      <div className="relative container mx-auto flex flex-col items-center text-center pt-36 pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] -z-10 bg-primary/5 rounded-full blur-3xl" />
        <div className="shiny-pill mb-6">
          <div className="px-4 py-1 text-sm font-semibold">
            400+ Non-Profits have signed up so far 🚀
          </div>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-2">
          Your AI Co-Pilot for
        </h1>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-6xl mb-6"> <span className="gradient-text">Monitoring, Evaluation & Learning</span></h1>
        <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl">
          Expert MEL support – at less than 1% the cost. Trained on 10,000+ MEL guides, ChatMnE helps you design surveys, define indicators, analyze data, and more—instantly.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button variant="hero" className="lg:h-12 lg:px-6">Join the Waitlist →</Button>
          <Button variant="outline" className="lg:h-12 lg:px-6">See it in Action</Button>
        </div>
      </div>

      {/* Canvas Image Section */}
      <div className="relative w-full flex justify-center -mt-20 sm:-mt-24 md:-mt-28">
         {/* Subtle gradient behind canvas */}
        <div className="absolute bottom-0 w-[120%] h-[50%] -translate-x-1/2 left-1/2 bg-gradient-to-t from-background via-background to-transparent -z-10" />
        <div className="canvas-container w-[90%] max-w-6xl p-2 rounded-2xl bg-card/50 shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <HeroCanvas />
        </div>
      </div>
    </header>
  );
};

export default Hero;