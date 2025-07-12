import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Sector 44, Gurgaon", "Haryana 122003, India"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@digihousing.com", "support@digihousing.com"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to find your dream home? Contact our expert team for personalized assistance 
            and start your journey today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-glass-border hover:scale-105 transition-all duration-300 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-card rounded-xl flex items-center justify-center ${info.color}`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-foreground/70">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card border-glass-border shadow-card overflow-hidden">
              <div className="h-64 bg-muted/30 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="relative z-10 text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Find Us Here</h3>
                  <p className="text-foreground/70">Interactive map coming soon</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-glass-border shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-input border-glass-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="bg-input border-glass-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-input border-glass-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What can we help you with?"
                    className="bg-input border-glass-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    className="bg-input border-glass-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-button hover:scale-105 transition-all duration-300 shadow-glow"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/20 rounded-xl border border-glass-border">
                <p className="text-sm text-foreground/70 text-center">
                  🚀 <strong>Quick Response Guarantee:</strong> We respond to all inquiries within 2 hours during business hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-button/10 border border-primary/20 inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Need Immediate Assistance?</h3>
              <p className="text-foreground/80 mb-4">Call our emergency helpline for urgent property queries</p>
              <Button className="bg-gradient-button hover:scale-105 transition-transform">
                <Phone size={18} className="mr-2" />
                Emergency: +91 99999 88888
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;