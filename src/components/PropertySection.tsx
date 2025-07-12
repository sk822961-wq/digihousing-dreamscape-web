import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Bed, Bath, Square, Eye } from 'lucide-react';

const PropertySection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Buy', 'Rent', 'Commercial', 'Residential'];
  
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Gurgaon, Haryana",
      price: "₹2.5 Cr",
      type: "Buy",
      category: "Residential",
      bedrooms: 4,
      bathrooms: 3,
      area: "3200 sqft",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500",
      featured: true
    },
    {
      id: 2,
      title: "Contemporary Apartment",
      location: "Bangalore, Karnataka",
      price: "₹45,000/month",
      type: "Rent",
      category: "Residential",
      bedrooms: 2,
      bathrooms: 2,
      area: "1200 sqft",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500",
      featured: false
    },
    {
      id: 3,
      title: "Premium Office Space",
      location: "Mumbai, Maharashtra",
      price: "₹1.2 Cr",
      type: "Buy",
      category: "Commercial",
      bedrooms: 0,
      bathrooms: 4,
      area: "2500 sqft",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=500",
      featured: true
    },
    {
      id: 4,
      title: "Cozy Studio Apartment",
      location: "Pune, Maharashtra",
      price: "₹25,000/month",
      type: "Rent",
      category: "Residential",
      bedrooms: 1,
      bathrooms: 1,
      area: "600 sqft",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=500",
      featured: false
    },
    {
      id: 5,
      title: "Retail Shop Space",
      location: "Delhi, Delhi",
      price: "₹80,000/month",
      type: "Rent",
      category: "Commercial",
      bedrooms: 0,
      bathrooms: 2,
      area: "800 sqft",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=500",
      featured: false
    },
    {
      id: 6,
      title: "Luxury Penthouse",
      location: "Chennai, Tamil Nadu",
      price: "₹3.8 Cr",
      type: "Buy",
      category: "Residential",
      bedrooms: 5,
      bathrooms: 4,
      area: "4500 sqft",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500",
      featured: true
    }
  ];

  const filteredProperties = properties.filter(property => 
    activeFilter === 'All' || property.type === activeFilter || property.category === activeFilter
  );

  return (
    <section id="properties" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover your perfect home from our curated collection of premium properties
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-button shadow-glow'
                  : 'border-glass-border bg-transparent hover:bg-primary/10'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Card 
              key={property.id} 
              className="bg-gradient-card border-glass-border hover:scale-105 transition-all duration-300 shadow-card overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-button">
                    Featured
                  </Badge>
                )}
                <button className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-primary/80 transition-colors">
                  <Heart size={18} />
                </button>
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" className="bg-black/50 backdrop-blur-sm hover:bg-primary/80 border-none">
                    <Eye size={16} className="mr-1" />
                    View
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{property.title}</h3>
                  <span className="text-xl font-bold text-primary">{property.price}</span>
                </div>
                
                <div className="flex items-center text-foreground/70 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm text-foreground/80 mb-4">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms} Bed</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms} Bath</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-button hover:scale-105 transition-transform">
                    Contact Agent
                  </Button>
                  <Button variant="outline" className="border-glass-border">
                    Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-accent hover:scale-105 transition-transform px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;