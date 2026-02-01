import { useState, useEffect } from 'react';
import { 
  Phone, MapPin, Menu, X, Home, Building2, 
  TrendingUp, Shield, Zap, TreePine, Plane, 
  CheckCircle2, Users, Award, Clock, ChevronRight,
  FileText, Landmark, Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    { name: 'RASHID KHAN', role: 'CEO', phones: ['0307 534 2385'] },
    { name: 'ZULFIQAR ALI', role: 'Senior Consultant', phones: ['0300 491 6161'] },
    { name: 'BILAL KHAN', role: 'Property Advisor', phones: ['0314 413 6840', '0303 418 3079'] },
    { name: 'IQBAL KHAN', role: 'Sales Manager', phones: ['0311 482 5135', '0309 535 3116'] },
    { name: 'MUBEEN KHAN', role: 'Investment Consultant', phones: ['0308 457 1600', '0342 578 4659'] },
    { name: 'M SARWAR NUMBERDAR', role: 'Field Expert', phones: ['0300 231 4147', '0302 461 5592'] },
    { name: 'ALI RAZA', role: 'Property Consultant', phones: ['0318 444 0035'] },
    { name: 'FARHAN ZAHEER', role: 'Client Relations', phones: ['0309 764 6201'] },
    { name: 'ARSALAN KHAN', role: 'Marketing Executive', phones: ['0300 238 4857'] },
    { name: 'MUHAMMAD ADIL', role: 'Sales Executive', phones: ['0304 143 3606'] },
    { name: 'FARHAN KHAN', role: 'Property Analyst', phones: ['0326 133 1625'] },
    { name: 'MUHAMMAD SHAFIQ', role: 'Investment Advisor', phones: ['0303 8788 897', '0309 8788 897'] },
    { name: 'M ASIM KHAN', role: 'Development Consultant', phones: ['0304 5658 509', '0323 4302 815'] },
  ];

  const plotSizes = [
    {
      size: '5 Marla',
      price: 'PKR 27.25 Lakh - 35 Lakh',
      image: '/plot-5marla.jpg',
      features: ['Ideal for Small Families', 'Affordable Investment', 'Quick ROI'],
      jinnahPrice: 'PKR 45 Lacs - 95 Lacs',
      iqbalPrice: 'PKR 25 Lacs - 50 Lacs'
    },
    {
      size: '10 Marla',
      price: 'PKR 40 Lakh - 80 Lakh',
      image: '/plot-10marla.jpg',
      features: ['Perfect Medium Size', 'Premium Location', 'High Demand'],
      jinnahPrice: 'PKR 75 Lacs - 2.1 Crore',
      iqbalPrice: 'PKR 45 Lacs - 85 Lacs'
    },
    {
      size: '1 Kanal',
      price: 'PKR 69 Lakh - 1.3 Crore',
      image: '/plot-1kanal.jpg',
      features: ['Luxury Living', 'Spacious Design', 'Elite Community'],
      jinnahPrice: 'PKR 1.1 Crore - 3.4 Crore',
      iqbalPrice: 'PKR 75 Lacs - 1.3 Crore'
    },
    {
      size: '2 Kanal',
      price: 'PKR 4.5 Crore - 6.2 Crore',
      image: '/plot-2kanal.jpg',
      features: ['Ultra Luxury', 'Exclusive Estate', 'Premium Investment'],
      jinnahPrice: 'PKR 4.5 Crore - 6.2 Crore',
      iqbalPrice: 'Limited Availability'
    }
  ];

  const amenities = [
    { icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-2xl">🛣️</div>, title: 'Wide Road Network', desc: '300ft Jhelum Road, 300ft Indus Road, 200ft Chanab Road, 150ft Pine Avenue' },
    { icon: <Zap className="w-8 h-8" />, title: 'Underground Electricity', desc: 'Modern underground wiring system for clean aesthetics and safety' },
    { icon: <Plane className="w-8 h-8" />, title: '15 Min from Airport', desc: 'Strategic location just 15 minutes from Allama Iqbal International Airport' },
    { icon: <TreePine className="w-8 h-8" />, title: 'Green Spaces', desc: '980 Kanal Fatima Jinnah Park, 250 Kanal Theme Park, numerous gardens' },
    { icon: <Landmark className="w-8 h-8" />, title: 'Education & Health', desc: '300+ Kanals dedicated to universities and state-of-the-art hospitals' },
    { icon: <Building2 className="w-8 h-8" />, title: 'CBD 2 & Business Bay', desc: '3,400 Kanal commercial district with high-rise corporate towers' },
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, text: 'LDA Approved Project' },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: 'NO TMA, NO FBR, NO Stamp Duty in Files' },
    { icon: <TrendingUp className="w-6 h-6" />, text: '80-100% Capital Gain Potential' },
    { icon: <Clock className="w-6 h-6" />, text: '4 Interchanges Connected' },
  ];

  const possessionBlocks = ['A', 'A1', 'B', 'B1', 'C', 'D', 'E', 'F', 'H', 'L'];
  const nonPossessionBlocks = ['G', 'J', 'K', 'M', 'N', 'P', 'Q', 'BB', 'CC'];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#1a1a2e] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-500" />
              0307 534 2385
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              5 Num Stop, Kahna Nau, Lahore
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-500 font-semibold">Your Future Dreamland</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1a1a2e]">IBRAHIM REAL ESTATE</h1>
                <p className="text-xs text-amber-600 font-medium">LDA CITY LAHORE</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">About</a>
              <a href="#plots" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Plots</a>
              <a href="#amenities" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Amenities</a>
              <a href="#team" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Contact</a>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t py-4 px-4">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">About</a>
              <a href="#plots" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Plots</a>
              <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Amenities</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Team</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="LDA City Lahore" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-medium">LDA Approved Project</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              LDA CITY <span className="text-amber-400">LAHORE</span>
            </h1>
            <p className="text-2xl md:text-3xl text-amber-300 font-light mb-6">
              Your Future Dreamland
            </p>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Pakistan's largest LDA-approved housing society spanning 41,000 Kanals. 
              Premium plots & files available for sale with possession and non-possession options.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center">Contact Ibrahim Real Estate</DialogTitle>
                  </DialogHeader>
                  <div className="text-center py-4">
                    <p className="text-3xl font-bold text-amber-600 mb-2">0307 534 2385</p>
                    <p className="text-gray-600 mb-4">CEO: RASHID KHAN</p>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>5 Num Stop, Kahna Nau, Lahore</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <a href="#plots">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8">
                  View Plots
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">41,000</p>
                <p className="text-sm text-gray-300">Kanals Area</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">50,000+</p>
                <p className="text-sm text-gray-300">Families</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">15+</p>
                <p className="text-sm text-gray-300">Blocks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">4</p>
                <p className="text-sm text-gray-300">Interchanges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-[#1a1a2e] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white">
                <div className="text-amber-500">{feature.icon}</div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold uppercase tracking-wider">About LDA City</span>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2 mb-6">
                Pakistan's Largest <span className="text-gradient">LDA-Approved</span> Housing Society
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                LDA City Lahore is a flagship project of the Lahore Development Authority, 
                spanning over 41,000 Kanals of prime real estate. Located on LDA Road, Off Main Ferozepur Road, 
                this mega housing project is set to become one of Lahore's largest and most prestigious communities.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With 45% of land dedicated to residential plots, 10% for commercial use, and the rest for 
                roads, parks, and open spaces, LDA City offers a perfect blend of modern living and natural beauty.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Jinnah Sector (Phase 1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Iqbal Sector</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Possession Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Files Available</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/park.jpg" alt="Park" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                <img src="/commercial.jpg" alt="Commercial" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="/sports.jpg" alt="Sports" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                <img src="/plot-10marla.jpg" alt="Residential" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Sizes Section */}
      <section id="plots" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wider">Available Plots</span>
            <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Possession & Non-Possession Plots
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of plot sizes in both Jinnah Sector (Possession) and Iqbal Sector (Non-Possession)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plotSizes.map((plot, idx) => (
              <Card key={idx} className="overflow-hidden card-hover border-0 shadow-lg">
                <div className="relative h-48">
                  <img src={plot.image} alt={plot.size} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {plot.size}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{plot.size} Plots</h3>
                  <p className="text-amber-600 font-semibold mb-3">{plot.price}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Jinnah Sector:</span>
                      <span className="font-medium">{plot.jinnahPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Iqbal Sector:</span>
                      <span className="font-medium">{plot.iqbalPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {plot.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Blocks Info */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">Possession Blocks</h3>
                  <p className="text-green-600">Ready for Construction</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {possessionBlocks.map((block) => (
                  <span key={block} className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
                    Block {block}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">Non-Possession Blocks</h3>
                  <p className="text-amber-600">Investment Opportunity</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {nonPossessionBlocks.map((block) => (
                  <span key={block} className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold">
                    Block {block}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Files Section */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-400 font-semibold uppercase tracking-wider">Fresh Files Available</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">
                Get Files with <span className="text-amber-400">NO Extra Charges</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fresh files available for 5 Marla, 10 Marla, and 1 Kanal plots in LDA City Lahore. 
                Invest now with zero additional taxes and duties.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">NO TMA</h4>
                    <p className="text-gray-400 text-sm">No Tehsil Municipal Administration charges</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">NO FBR</h4>
                    <p className="text-gray-400 text-sm">No Federal Board of Revenue taxes</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">NO Stamp Duty</h4>
                    <p className="text-gray-400 text-sm">No additional stamp duty charges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">File Prices</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">5 Marla File</p>
                    <p className="text-sm text-gray-500">Iqbal Sector</p>
                  </div>
                  <p className="text-xl font-bold text-amber-600">PKR 25-28 Lacs</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">10 Marla File</p>
                    <p className="text-sm text-gray-500">Iqbal Sector</p>
                  </div>
                  <p className="text-xl font-bold text-amber-600">PKR 38-42 Lacs</p>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">1 Kanal File</p>
                    <p className="text-sm text-gray-500">Iqbal Sector</p>
                  </div>
                  <p className="text-xl font-bold text-amber-600">PKR 68-75 Lacs</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-6">
                <Phone className="w-5 h-5 mr-2" />
                Contact for File Booking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wider">World-Class Facilities</span>
            <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Premium Amenities & Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              LDA City Lahore offers world-class amenities designed for a modern, comfortable lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <Card key={idx} className="p-6 card-hover border-0 shadow-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.desc}</p>
              </Card>
            ))}
          </div>

          {/* Additional Amenities Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '24/7 Security', 'Gated Community', 'Grand Mosque', 'Sui Gas',
              'Water Supply', 'Shopping Malls', 'Restaurants', 'Filling Station'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-600" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-semibold uppercase tracking-wider">Prime Location</span>
              <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2 mb-6">
                Strategic Location with <span className="text-gradient">Excellent Connectivity</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                LDA City Lahore is strategically located on LDA Road, Off Main Ferozepur Road, 
                with easy access to all major areas of Lahore through 4 interchanges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-lg">
                    🛣️
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">LDA City Interchange</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-lg">
                    🛣️
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">Halloki Interchange</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-lg">
                    🛣️
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">Bulleh Shah Interchange</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-lg">
                    🛣️
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a2e]">Kacha Interchange</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-6 h-6 text-amber-600" />
                  <span className="font-semibold text-[#1a1a2e]">Nearby Landmarks</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">15 Min - Airport</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">15 Min - DHA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">10 Min - Lake City</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span className="text-gray-700">Etihad Town Phase 3</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/hero-bg.jpg" 
                alt="LDA City Location" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a2e]">LDA City Lahore</p>
                    <p className="text-sm text-gray-500">LDA Road, Ferozepur Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl font-bold text-[#1a1a2e] mt-2 mb-4">
              Meet Our Professional Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced real estate professionals dedicated to helping you find your dream property
            </p>
          </div>

          {/* CEO Highlight */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12" />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-amber-200 font-semibold uppercase tracking-wider mb-1">Chief Executive Officer</p>
                    <h3 className="text-3xl font-bold mb-2">RASHID KHAN</h3>
                    <p className="flex items-center justify-center md:justify-start gap-2 text-lg">
                      <Phone className="w-5 h-5" />
                      0307 534 2385
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(1).map((member, idx) => (
              <Card key={idx} className="card-hover border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-amber-600" />
                  </div>
                  <h4 className="font-bold text-[#1a1a2e] mb-1">{member.name}</h4>
                  <p className="text-amber-600 text-sm mb-3">{member.role}</p>
                  <div className="space-y-1">
                    {member.phones.map((phone, pidx) => (
                      <p key={pidx} className="text-sm text-gray-600 flex items-center justify-center gap-2">
                        <Phone className="w-3 h-3" />
                        {phone}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-amber-400 font-semibold uppercase tracking-wider">Contact Us</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">
                Get in Touch with <span className="text-amber-400">Ibrahim Real Estate</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to invest in LDA City Lahore? Contact us today for the best deals on plots and files. 
                Our team is available to assist you with all your real estate needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Office Address</p>
                    <p className="text-white font-semibold">5 Num Stop, Kahna Nau, Lahore</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">CEO Contact</p>
                    <p className="text-white font-semibold">0307 534 2385 (RASHID KHAN)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center">
                    <Wallet className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Business Hours</p>
                    <p className="text-white font-semibold">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">For Plot Inquiries</p>
                  <p className="text-xl font-bold text-amber-600">0307 534 2385</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">For File Booking</p>
                  <p className="text-xl font-bold text-[#1a1a2e]">0300 491 6161</p>
                  <p className="text-sm text-gray-500">ZULFIQAR ALI</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Investment Consultation</p>
                  <p className="text-xl font-bold text-[#1a1a2e]">0308 457 1600</p>
                  <p className="text-sm text-gray-500">MUBEEN KHAN</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">IBRAHIM REAL ESTATE</h3>
                  <p className="text-xs text-amber-500">LDA CITY LAHORE</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner for LDA City Lahore plots and files. 
                We provide the best investment opportunities in Pakistan's largest LDA-approved housing society.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-amber-500">Home</a></li>
                <li><a href="#about" className="hover:text-amber-500">About LDA City</a></li>
                <li><a href="#plots" className="hover:text-amber-500">Available Plots</a></li>
                <li><a href="#amenities" className="hover:text-amber-500">Amenities</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Plot Sizes</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>5 Marla Plots</li>
                <li>10 Marla Plots</li>
                <li>1 Kanal Plots</li>
                <li>2 Kanal Plots</li>
                <li>Fresh Files</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  5 Num Stop, Kahna Nau, Lahore
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0307 534 2385
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  CEO: RASHID KHAN
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Ibrahim Real Estate. All rights reserved. LDA City Lahore - Your Future Dreamland
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
