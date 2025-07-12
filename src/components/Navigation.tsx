import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'About', href: '#about' },
    { label: 'Virtual Tours', href: '#tours' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/90 backdrop-blur-glass border-b border-white/10 shadow-elegant' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a295c6f3-bac3-41ee-b41b-e2478852a2ac.png" 
                alt="DigiHousing Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold text-foreground">DigiHousing</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-gradient-button hover:scale-105 transition-transform duration-300 shadow-glow">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-card/95 backdrop-blur-glass border-t border-white/10">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="w-full bg-gradient-button mt-4">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <Button
          size="lg"
          className="rounded-full bg-gradient-button shadow-glow hover:scale-110 transition-transform duration-300 p-3"
          title="Call Us"
        >
          <Phone size={20} />
        </Button>
        <Button
          size="lg"
          className="rounded-full bg-accent shadow-glow hover:scale-110 transition-transform duration-300 p-3"
          title="WhatsApp"
        >
          <MessageCircle size={20} />
        </Button>
        <Button
          size="lg"
          className="rounded-full bg-secondary shadow-glow hover:scale-110 transition-transform duration-300 p-3"
          title="Book Visit"
        >
          <Calendar size={20} />
        </Button>
      </div>
    </>
  );
};

export default Navigation;