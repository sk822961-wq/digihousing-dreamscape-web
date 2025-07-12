import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Bot, 
  Calendar, 
  Eye, 
  Award, 
  Headphones, 
  MapPin, 
  CreditCard,
  Home,
  Users
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Every property undergoes thorough verification for authenticity and legal compliance",
      color: "text-primary"
    },
    {
      icon: Bot,
      title: "AI Property Matching",
      description: "Smart recommendations based on your preferences, budget, and lifestyle requirements",
      color: "text-secondary"
    },
    {
      icon: Calendar,
      title: "Site Visit Booking",
      description: "Schedule property visits at your convenience with our easy booking system",
      color: "text-accent"
    },
    {
      icon: Eye,
      title: "Virtual Reality Tours",
      description: "Immersive 360° property tours from the comfort of your home",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure only premium properties make it to our platform",
      color: "text-secondary"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you throughout your journey",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Location Intelligence",
      description: "Detailed neighborhood insights including amenities, connectivity, and growth prospects",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description: "Multiple payment options and loan assistance to make homeownership accessible",
      color: "text-secondary"
    },
    {
      icon: Home,
      title: "End-to-End Service",
      description: "Complete assistance from property search to final registration and handover",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Dedicated relationship managers and property experts to guide your decisions",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">DigiHousing</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Experience the future of real estate with our innovative features designed to make 
            property buying and renting seamless and trustworthy
          </p>
        </div>

        {/* Featured Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gradient-card border border-glass-border rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-card">
            <div className="w-20 h-20 bg-gradient-button rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Shield size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">100% Verified</h3>
            <p className="text-foreground/80">All properties are legally verified and documentation checked</p>
          </div>
          
          <div className="text-center bg-gradient-card border border-glass-border rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-card">
            <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Bot size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">AI Powered</h3>
            <p className="text-foreground/80">Smart matching algorithm finds your perfect property match</p>
          </div>
          
          <div className="text-center bg-gradient-card border border-glass-border rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-card">
            <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Award size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Trusted Platform</h3>
            <p className="text-foreground/80">Thousands of successful transactions and happy customers</p>
          </div>
        </div>

        {/* All Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-glass-bg border-glass-border hover:scale-105 transition-all duration-300 shadow-card backdrop-blur-glass group"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} className={feature.color} />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-foreground/70">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">15 Min</div>
            <div className="text-foreground/70">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-foreground/70">Verified Properties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground/70">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;