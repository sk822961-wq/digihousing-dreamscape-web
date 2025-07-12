import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground}
          alt="Modern Smart Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/a295c6f3-bac3-41ee-b41b-e2478852a2ac.png" 
              alt="DigiHousing Logo" 
              className="h-24 w-24 mx-auto rounded-full shadow-glow"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Your Digital Gateway to
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dream Homes
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Discover verified properties with AI-powered matching, virtual tours, and seamless booking. 
            Your perfect home is just a click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-button hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4 rounded-full"
            >
              Explore Properties
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary/50 bg-transparent hover:bg-secondary/10 text-foreground text-lg px-8 py-4 rounded-full transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Watch Virtual Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-foreground/70">Verified Properties</div>
            </div>
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-foreground/70">Cities Covered</div>
            </div>
            <div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-accent mb-2">10K+</div>
              <div className="text-foreground/70">Happy Families</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;