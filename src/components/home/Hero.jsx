import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Coffee,
  Wallet,
  Smartphone,
  Briefcase,
} from "lucide-react";

const images = [
  { url: "/images/image-one.jpg", span: 4, height: "h-96" },
  { url: "/images/image-two.jpg", span: 2, height: "h-80" },
  { url: "/images/image-three.jpg", span: 3, height: "h-80" },
  { url: "/images/image-four.jpg", span: 3, height: "h-96" },
  { url: "/images/image-five.jpg", span: 6, height: "h-72" },
];
const serviceButtons = [
  {
    icon: Smartphone,
    title: "Gazra Connect",
    url: "https://sweekarme.in",
    isExternal: true,
    color: "from-green-400 to-green-600",
  },
  {
    icon: Wallet,
    title: "Gazra Support Fund",
    url: "/gazra-support",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Coffee,
    title: "Gazra Cafe",
    url: "/cafe",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Briefcase,
    title: "Gazra Skill Hub",
    url: "/gazra-skills",
    color: "from-blue-400 to-blue-600",
  },
];
const Hero = () => {
  return (
    <div
      className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat pb-6"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      <div className="absolute inset-0 overflow-hidden"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full shadow-soft animate-fade-in">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="font-medium text-sm">
                SHRI MAHARANI CHIMNABAI STREE UDYOGALAYA
              </span>
            </div>

            <div className="flex space-x-6 items-center">
              <div className="w-32 h-32 animate-bounce-soft">
                <img
                  src="https://gazra.org/logo.png"
                  alt="Gazra Logo"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div
                className="w-32 h-32 animate-bounce-soft"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="https://i0.wp.com/mcsu.in/wp-content/uploads/2022/07/Logo.png?w=512&ssl=1"
                  alt="MCSU Logo"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-display font-bold leading-tight animate-slide-in">
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-2 py-1 rounded-lg">
                The Gazra Project
              </span>
            </h1>

            <p className="text-lg text-neutral-700 max-w-xl animate-slide-up">
              Join a compassionate community where authenticity thrives and
              every individual&apos;s journey is celebrated. Together, we create
              a world of acceptance and understanding.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl shadow-colored hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                Join Our Community
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-xl hover:bg-primary-50 hover:-translate-y-1 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="pt-4">
              <h3
                className="text-lg font-semibold text-neutral-800 mb-2 animate-slide-in"
                style={{ animationDelay: "0.3s" }}
              >
                Our Initiatives
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceButtons.map((service, index) =>
                  service.isExternal ? (
                    <a
                      key={index}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center gap-2 p-3 bg-white/70 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                      style={{
                        animationDelay: `${0.2 * index + 0.5}s`,
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderImage:
                          "linear-gradient(to bottom, #e11d48, #f97316) 1",
                        borderRadius: "16px",
                      }}
                    >
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}
                        >
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="relative font-medium text-neutral-800 text-center">
                        {service.title}
                      </span>
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
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderImage:
                          "linear-gradient(to bottom, #e11d48, #f97316) 1",
                        borderRadius: "16px",
                      }}
                    >
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white`}
                        >
                          <service.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="relative font-medium text-neutral-800 text-center">
                        {service.title}
                      </span>
                      <div className="relative flex items-center gap-1 text-sm font-medium text-neutral-700">
                        Know more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6 animate-fade-in pl-6">
            <div className="grid grid-cols-6 gap-5 overflow-visible">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`col-span-${image.span} ${image.height} relative group overflow-hidden rounded-2xl shadow-medium hover:shadow-hard transition-all duration-500 animate-scale`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <img
                    src={image.url}
                    alt={`Community ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
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
