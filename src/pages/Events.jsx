/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Music, Coffee, Users,
  Clock, MapPin, Heart, ArrowRight,
  Filter, Tag, ExternalLink,
  X, Phone, Briefcase,
} from "lucide-react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const videoRef = useRef(null);

  const eventCategories = [
    { id: "all", name: "All Events", icon: Calendar, color: "bg-primary-500" },
    { id: "theater", name: "Theater & Dance", icon: Music, color: "bg-accent-terracotta" },
    { id: "workshop", name: "Workshops", icon: Coffee, color: "bg-accent-sage" },
    { id: "therapy", name: "Therapy", icon: Heart, color: "bg-accent-ochre" },
    { id: "community", name: "Community", icon: Users, color: "bg-accent-slate" },
  ];

  const months = [
    { id: "all", name: "All Months" },
    { id: "april", name: "April" },
    { id: "may", name: "May" },
    { id: "june", name: "June" },
  ];

  const events = [
    {
      id: 1,
      title: "SAM-AAJ",
      category: "theater",
      date: "Thursday, 10th April",
      time: "8:00 PM Onwards",
      location: "Hosted by GAZRA",
      capacity: "Limited Seats",
      image: "/images/samaaj.png",
      description: "Join us for a groundbreaking dance-theater production that challenges norms and celebrates authenticity. Two Gujarati men confront their deepest insecurities and societal expectations while navigating love and self-discovery. A powerful blend of dance, poetry, and original music by Shivansh Jindal.",
      externalLink: "https://in.bookmyshow.com/events/sam-aaj/ET00436340",
      featured: true,
      price: "Tickets on BookMyShow",
      month: "april",
      ticketsLeft: "Limited seats available",
    },
    {
      id: 2,
      title: "Sweekar Awareness Drive",
      category: "workshop",
      date: "April 1st, 2025", // Note: Year is 2025
      time: "4:00 PM To 6:00 PM",
      location: "Gazra Cafe, Shri Maharani Chimnabai Stree Udyogalaya, Opp. Sursagar, Mandvi, Vadodara",
      capacity: "50 spots",
      image: "/images/sweekar.png",
      description: "Calling all professionals committed to equality! Join us to create a holistic support network for Women and the LGBTQIA+ community through the Sweekar initiative.",
      month: "april",
      featured: true,
      price: "Free",
      ticketsLeft: "32 spots left",
      organizer: "Shri Maharani Chimnabai Stree Udyogalaya",
      contactPhone: "+91 90999 0912",
      rsvpDeadline: "31st March",
      fullDetails: {
        subtitle: "Building Safe, Inclusive Spaces Together!",
        targetAudience: [
          "Healthcare Providers (PCPs, Endocrinologists, Dermatologists, Gynecologists, Urologists)",
          "Mental Health Experts",
          "Legal Professionals",
          "HR Specialists",
          "Advocates for inclusive community support",
        ],
        highlights: [
          { // Corrected syntax here
            title: "Understanding Sensitization",
            description: "Why inclusive resource networks matter for marginalized communities.",
          },
          {
            title: "Introduction to Sweekar",
            description: "Explore the platform's verification process, features, and role in connecting users to verified legal, medical, and mental health services.",
          },
          {
            title: "Actionable Insights",
            description: "Learn how your expertise can bridge gaps in access and safety for vulnerable groups.",
          },
          {
            title: "Networking",
            description: "Collaborate with professionals committed to equity and inclusion.",
          },
        ],
        specialGuests: [
          {
            name: "Deepak Kashap",
            title: "Canadian Certified Counsellor & LGBTQ Rights Activist",
          },
        ],
        additionalInfo: "Be part of building a verified multi-disciplinary resource network that addresses the complete spectrum of needs for marginalized communities.",
        includedPerks: ["Refreshments", "Networking", "Actionable Strategies"],
        callToAction: "Together, let's turn awareness into action!",
      },
    },
    {
      id: 3,
      title: "Art Therapy Session",
      category: "therapy",
      date: "June 25, 2024",
      time: "3:00 PM",
      location: "Gazra Studio",
      capacity: "30 spots",
      image: "/images/image-five.jpg",
      description: "Express yourself through art in our therapeutic creative session led by professional art therapists.",
      month: "june",
      price: "₹500",
      ticketsLeft: "18 spots left",
    },
    {
      id: 4,
      title: "Pride Month Celebration",
      category: "community",
      date: "June 15, 2024",
      time: "4:00 PM",
      location: "Gazra Cafe",
      capacity: "200 spots",
      image: "/images/image-one.jpg",
      description: "Join us for a vibrant celebration of Pride Month with music, art, and community activities. Experience the joy of being yourself.",
      month: "june",
      price: "Free Entry",
      ticketsLeft: "120 spots left",
    },
    {
      id: 5,
      title: "Mental Health Workshop",
      category: "workshop",
      date: "May 20, 2024",
      time: "5:30 PM",
      location: "Community Center",
      capacity: "50 spots",
      image: "/images/image-two.jpg",
      description: "An interactive session focused on mental health awareness and support systems within our community.",
      month: "may",
      price: "₹300",
      ticketsLeft: "27 spots left",
    },
  ];

  const filteredEvents = events.filter(event =>
    (selectedCategory === "all" || event.category === selectedCategory) &&
    (selectedMonth === "all" || event.month === selectedMonth)
  );

  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const EventCard = ({ event }) => {
    const CategoryIcon = eventCategories.find(cat => cat.id === event.category)?.icon || Calendar;

    return (
      <motion.div
        layoutId={`event-${event.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="group"
        onClick={() => setSelectedEvent(event)}
      >
        <div className="h-full relative bg-white rounded-2xl overflow-hidden shadow-medium hover:shadow-hard transition-all duration-500 border border-neutral-100 cursor-pointer">
          {/* Event Tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-primary-600 shadow-soft">
              <CategoryIcon className="w-3 h-3 mr-1" />
              {eventCategories.find(cat => cat.id === event.category)?.name || "Event"}
            </span>
          </div>

          <div className="aspect-w-16 aspect-h-10 relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-5 space-y-3">
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-1">
                {event.title}
              </h3>
              <p className="text-neutral-600 text-sm line-clamp-2">{event.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-100">
              <div className="space-y-2">
                <div className="flex items-center text-xs text-neutral-600">
                  <Calendar className="w-3 h-3 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="truncate">{event.date}</span>
                </div>
                <div className="flex items-center text-xs text-neutral-600">
                  <Clock className="w-3 h-3 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="truncate">{event.time}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-neutral-600">
                  <MapPin className="w-3 h-3 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="truncate">{event.location.split(",")[0]}</span>
                </div>
                <div className="flex items-center text-xs text-neutral-600">
                  <Users className="w-3 h-3 mr-2 text-primary-500 flex-shrink-0" />
                  <span className="truncate">{event.capacity}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-primary-600">
                {event.price}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 bg-primary-50 text-primary-600 rounded-lg text-xs font-medium hover:bg-primary-100 transition-colors duration-300"
              >
                View Details
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const EventDetailPopup = ({ event }) => {
    if (!event) return null;

    const CategoryIcon = eventCategories.find(cat => cat.id === event.category)?.icon || Calendar;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            layoutId={`event-${event.id}`}
            className="bg-white rounded-2xl shadow-hard max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-64 sm:h-80 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors duration-300"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-primary-600 shadow-soft">
                    <CategoryIcon className="w-3 h-3 mr-1" />
                    {eventCategories.find(cat => cat.id === event.category)?.name || "Event"}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">{event.title}</h2>
                  {event.fullDetails && event.fullDetails.subtitle && (
                    <p className="text-lg text-white/90 mb-4">{event.fullDetails.subtitle}</p>
                  )}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-1">Location</h3>
                        <p className="text-neutral-600">{event.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Tag className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-1">Price</h3>
                        <p className="text-neutral-600">{event.price}</p>
                        <p className="text-sm text-primary-600 mt-1">{event.ticketsLeft}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">About This Event</h3>
                  <p className="text-neutral-600">{event.description}</p>
                </div>

                {/* Full Details for the Sweekar event */}
                {event.fullDetails && (
                  <>
                    {/* Target Audience */}
                    {event.fullDetails.targetAudience && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-neutral-800">Who Can Join?</h3>
                        <ul className="space-y-2">
                          {event.fullDetails.targetAudience.map((audience, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                              </div>
                              <span className="text-neutral-700">{audience}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Highlights */}
                    {event.fullDetails.highlights && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-neutral-800">Workshop Highlights</h3>
                        <div className="space-y-4">
                          {event.fullDetails.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0 mt-0.5">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="font-medium text-neutral-800">{highlight.title}</h4>
                                <p className="text-neutral-600 text-sm">{highlight.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Special Guests */}
                    {event.fullDetails.specialGuests && (
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-neutral-800">Special Session By</h3>
                        {event.fullDetails.specialGuests.map((guest, index) => (
                          <div key={index} className="flex items-center gap-3 bg-secondary-50 p-4 rounded-xl">
                            <div className="w-12 h-12 rounded-full bg-secondary-200 flex items-center justify-center">
                              <Users className="w-6 h-6 text-secondary-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-800">{guest.name}</h4>
                              <p className="text-neutral-600 text-sm">{guest.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Additional Info */}
                    {event.fullDetails.additionalInfo && (
                      <div className="p-5 bg-primary-50 rounded-xl">
                        <p className="text-neutral-700">{event.fullDetails.additionalInfo}</p>
                      </div>
                    )}

                    {/* Included Perks */}
                    {event.fullDetails.includedPerks && (
                      <div className="flex flex-wrap gap-2">
                        {event.fullDetails.includedPerks.map((perk, index) => (
                          <span key={index} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">
                            {perk}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Call to Action */}
                    {event.fullDetails.callToAction && (
                      <div className="text-center p-4">
                        <h3 className="text-2xl font-display font-bold text-primary-600">{event.fullDetails.callToAction}</h3>
                      </div>
                    )}
                  </>
                )}

                {/* Contact & RSVP */}
                <div className="border-t border-neutral-200 pt-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {event.organizer && (
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2">Organized By</h3>
                        <p className="text-neutral-600">{event.organizer}</p>
                      </div>
                    )}

                    {event.contactPhone && (
                      <div>
                        <h3 className="font-semibold text-neutral-800 mb-2">Contact</h3>
                        <a href={`tel:${event.contactPhone}`} className="flex items-center text-primary-600 hover:text-primary-700">
                          <Phone className="w-4 h-4 mr-2" />
                          {event.contactPhone}
                        </a>
                        {event.rsvpDeadline && (
                          <p className="text-sm text-neutral-500 mt-1">RSVP Deadline: {event.rsvpDeadline}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 justify-between items-center border-t border-neutral-200 pt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-600">Share:</span>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300">
                        <FaFacebook className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300">
                        <FaTwitter className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors duration-300">
                        <FaWhatsapp className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {event.externalLink ? (
                    <a
                      href={event.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300 flex items-center gap-2"
                    >
                      Book Tickets
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300 flex items-center gap-2">
                      RSVP Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden h-[60vh] min-h-[500px]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/event.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Upcoming Events
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our Community Events
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Connect, learn, and grow with our diverse community through these carefully curated events.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-500 text-white rounded-xl shadow-colored hover:shadow-glow transition-all duration-300"
              onClick={() => {
                const filtersSection = document.getElementById("filters-section");
                filtersSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Events
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section id="filters-section" className="py-6 sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-neutral-100 shadow-soft">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {eventCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === category.id
                    ? `${category.color} text-white`
                    : "bg-white border border-neutral-200 text-neutral-600 hover:bg-primary-50"
                    }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Month Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-500" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-white border border-neutral-200 rounded-xl px-4 py-2 text-neutral-600 focus:outline-none focus:border-primary-500"
              >
                {months.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="py-12" >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-neutral-800">Featured Events</h2>
              <span className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center cursor-pointer">
                <span>See All</span>
                <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatePresence>
                {featuredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* Regular Events Grid */}
      <section className="py-12 bg-primary-50/50" style={{ backgroundImage: 'url("/images/background.jpg")' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-display font-bold text-neutral-800">
              {selectedCategory === "all"
                ? "All Events"
                : `${eventCategories.find(cat => cat.id === selectedCategory)?.name || "Events"}`
              }
            </h2>

            {regularEvents.length > 0 && (
              <span className="text-neutral-500 text-sm">
                Showing {regularEvents.length} event{regularEvents.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {regularEvents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence>
                {regularEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-soft">
              <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-neutral-600 mb-2">No events found</h3>
              <p className="text-neutral-500 mb-6">Try changing your filters or check back later.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedMonth("all");
                }}
                className="px-6 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300"
              >
                View All Events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-300/5" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary-200/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Never Miss an Event
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Subscribe to our newsletter and stay updated with the latest events and community happenings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring focus:ring-primary-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-500 text-white rounded-xl shadow-colored hover:shadow-glow transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white" style={{ backgroundImage: 'url("/images/background.jpg")' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Event Calendar",
                description: "View our complete calendar of upcoming events",
                link: "/calendar",
              },
              {
                icon: Coffee,
                title: "Gazra Cafe",
                description: "Visit our inclusive community cafe space",
                link: "/cafe",
              },
              {
                icon: Heart,
                title: "Get Involved",
                description: "Volunteer opportunities and ways to contribute",
                link: "/volunteer",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-100"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <motion.a
                  href={item.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Popup */}
      <EventDetailPopup event={selectedEvent} />
    </div>
  );
};

export default EventsPage;