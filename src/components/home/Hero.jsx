import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Coffee, Wallet, Smartphone, Briefcase } from 'lucide-react'; // Removed unused BookOpen

const Hero = () => {
  const images = [
    { url: "/images/image-one.jpg", span: 4, height: 'h-40' },
    { url: "/images/image-two.jpg", span: 2, height: 'h-32' },
    { url: "/images/image-three.jpg", span: 3, height: 'h-28' },
    { url: "/images/image-four.jpg", span: 3, height: 'h-36' },
    { url: "/images/image-five.jpg", span: 6, height: 'h-24' }
  ];

  const serviceButtons = [
    { icon: Smartphone, title: "Gazra Connect", url: "https://sweekarme.in", isExternal: true, color: "from-green-400 to-green-600" },
    { icon: Wallet, title: "Gazra Support Fund", url: "/gazra-support", color: "from-pink-400 to-pink-600" },
    { icon: Coffee, title: "Gazra Cafe", url: "/cafe", color: "from-orange-400 to-orange-600" },
    { icon: Briefcase, title: "Gazra Skill Hub", url: "/gazra-skills", color: "from-blue-400 to-blue-600" }
  ];

  return (
    // CORRECTED: Using url() and assuming image is in public/images/background.png
    <div
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/background.jpg")' }} // <-- Make sure this path is correct relative to the public folder
    >
      {/* Semi-transparent overlay */}
      {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div> */}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute w-[500px] h-[500px] -top-32 -left-32 bg-primary-200/30 rounded-full animate-pulse-slow"></div>
        <div className="absolute w-[400px] h-[400px] -bottom-32 -right-32 bg-secondary-200/30 rounded-full animate-pulse-slow"></div> */}
        {/* Floating particles */}
        {/* <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-primary-300/40 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-secondary-300/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-accent-sage/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-accent-ochre/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div> */}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full shadow-soft animate-fade-in">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-medium text-sm">SHRI MAHARANI CHIMNABAI STREE UDYOGALAYA</span>
            </div>

            {/* Logos side by side */}
            <div className="flex space-x-6 items-center">
              <div className="w-32 h-32 animate-bounce-soft">
                <img src="https://gazra.org/logo.png" alt="Gazra Logo" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="w-32 h-32 animate-bounce-soft" style={{animationDelay: '0.5s'}}>
                <img src="https://i0.wp.com/mcsu.in/wp-content/uploads/2022/07/Logo.png?w=512&ssl=1" alt="MCSU Logo" className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"/>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl lg:text-5xl font-display font-bold leading-tight animate-slide-in">
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-2 py-1 rounded-lg">
                The Gazra Project
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-700 max-w-xl animate-slide-up">
              Join a compassionate community where authenticity thrives and every individual's journey is celebrated. Together, we create a world of acceptance and understanding.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="group flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl shadow-colored hover:shadow-glow hover:-translate-y-1 transition-all duration-300">
                Join Our Community
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="group flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50 hover:-translate-y-1 transition-all duration-300">
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Service Buttons Section */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2 animate-slide-in" style={{animationDelay: '0.3s'}}>
                Our Initiatives
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceButtons.map((service, index) => (
                  service.isExternal ? (
                    <a
                      key={index}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center gap-2 p-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                      style={{
                        animationDelay: `${0.2 * index + 0.5}s`,
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(to bottom, #e11d48, #f97316) 1',
                        borderRadius: '16px'
                      }}
                    >
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="relative font-medium text-neutral-800 text-center">{service.title}</span>
                      <div className="relative flex items-center gap-1 text-sm font-medium text-neutral-700">
                        Visit Site
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={service.url}
                      className="group relative flex flex-col items-center gap-2 p-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                      style={{
                        animationDelay: `${0.2 * index + 0.5}s`,
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderImage: 'linear-gradient(to bottom, #e11d48, #f97316) 1',
                        borderRadius: '16px'
                      }}
                    >
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="relative font-medium text-neutral-800 text-center">{service.title}</span>
                      <div className="relative flex items-center gap-1 text-sm font-medium text-neutral-700">
                        Know more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Image Grid */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in">
            <div className="grid grid-cols-6 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`col-span-${image.span} ${image.height} relative group overflow-hidden rounded-2xl shadow-medium hover:shadow-hard transition-all duration-500 animate-scale`}
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  <img src={image.url} alt={`Community ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;