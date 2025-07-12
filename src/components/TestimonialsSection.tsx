import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh & Priya Kumar",
      location: "Gurgaon",
      rating: 5,
      text: "DigiHousing made our home buying journey incredibly smooth. The virtual tours saved us so much time, and their AI recommendations were spot-on. We found our dream home in just 2 weeks!",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Amit Patel",
      location: "Mumbai",
      rating: 5,
      text: "The transparency in pricing and documentation was refreshing. No hidden costs, verified properties, and excellent customer support. Highly recommend DigiHousing for anyone looking for property investment.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sneha Sharma",
      location: "Bangalore",
      rating: 5,
      text: "As a first-time buyer, I was nervous about the process. DigiHousing's team guided me through every step, explained all the legalities, and helped me secure the best deal. Couldn't be happier!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Vikram & Anita Singh",
      location: "Delhi",
      rating: 5,
      text: "The virtual reality tours were amazing! We could explore properties from the comfort of our home. The booking process was seamless, and the site visit was perfectly organized.",
      avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Rohit Malhotra",
      location: "Pune",
      rating: 5,
      text: "DigiHousing's AI property matching is revolutionary. They understood exactly what I was looking for and showed me properties that matched my criteria perfectly. Saved months of searching!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from families who found their dream homes with DigiHousing
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="lg"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card/80 backdrop-blur-sm border-glass-border hover:bg-primary/20"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-card/80 backdrop-blur-sm border-glass-border hover:bg-primary/20"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`bg-gradient-card border-glass-border shadow-card transition-all duration-500 ${
                  index === 1 ? 'scale-105 shadow-elegant' : ''
                }`}
              >
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-foreground/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-primary fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-foreground/80 mb-6">
            Join thousands of satisfied customers who found their perfect home
          </p>
          <Button size="lg" className="bg-gradient-button hover:scale-105 transition-transform px-8">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;