import { Shield, Zap, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Complete property verification with transparent pricing and documentation"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge AI technology for smart property matching and virtual experiences"
    },
    {
      icon: Heart,
      title: "Affordability",
      description: "Making dream homes accessible with flexible payment options and best deals"
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships with personalized service and expert guidance"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">DigiHousing</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the real estate industry by combining cutting-edge technology 
            with personalized service to help you find your perfect home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground">Our Mission</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              To democratize access to quality housing by leveraging digital innovation, 
              creating a transparent and efficient platform that connects homebuyers with 
              their ideal properties while ensuring trust, affordability, and exceptional service.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Since our inception, we've helped thousands of families find their dream homes 
              through our innovative AI-powered matching system, virtual tours, and comprehensive 
              property verification process.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card rounded-3xl p-8 border border-glass-border shadow-elegant">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-foreground/70">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-foreground/70">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-foreground/70">Expert Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold text-foreground mb-4">Our Core Values</h3>
          <p className="text-lg text-foreground/80">The principles that guide everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card border-glass-border hover:scale-105 transition-all duration-300 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-gradient-button rounded-2xl flex items-center justify-center shadow-glow">
                  <value.icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;