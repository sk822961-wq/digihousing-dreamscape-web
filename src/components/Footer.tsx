import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Properties", href: "#properties" },
        { label: "About Us", href: "#about" },
        { label: "Virtual Tours", href: "#tours" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Buy Property", href: "#" },
        { label: "Rent Property", href: "#" },
        { label: "Property Valuation", href: "#" },
        { label: "Investment Advisory", href: "#" },
        { label: "Legal Assistance", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Property Guides", href: "#blog" },
        { label: "Market Insights", href: "#blog" },
        { label: "EMI Calculator", href: "#" },
        { label: "Area Guides", href: "#" },
        { label: "Help Center", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-background border-t border-glass-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/a295c6f3-bac3-41ee-b41b-e2478852a2ac.png" 
                alt="DigiHousing Logo" 
                className="h-12 w-12 rounded-full"
              />
              <span className="text-2xl font-bold text-foreground">DigiHousing</span>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 max-w-md">
              Your trusted digital gateway to dream homes. We're revolutionizing real estate 
              with AI-powered matching, verified listings, and exceptional customer service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground/70">
                <MapPin size={18} className="text-primary" />
                <span>Sector 44, Gurgaon, Haryana 122003</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <Phone size={18} className="text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/70">
                <Mail size={18} className="text-primary" />
                <span>info@digihousing.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-card border border-glass-border rounded-2xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Market Trends
            </h3>
            <p className="text-foreground/80 mb-6">
              Get the latest property insights, market updates, and exclusive deals delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-input border border-glass-border rounded-xl focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-button rounded-xl hover:scale-105 transition-transform duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-glass-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-foreground/70 text-center md:text-left">
              <p>© {currentYear} DigiHousing Private Limited. All rights reserved.</p>
              <p className="text-sm mt-1">
                Made with <Heart size={14} className="inline text-primary mx-1" /> for dream home seekers
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-foreground/70 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card border border-glass-border rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-glass-border">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              RERA Compliance
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;