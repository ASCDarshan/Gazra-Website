import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Users, Leaf, 
  Coffee, Book, HandHeart,
  ArrowRight, Globe, Sparkles,
  Lightbulb, MessageSquare, Target,
  Sprout, Calendar, Clock
} from 'lucide-react';

const InitiativesPage = () => {
  const [activeInitiative, setActiveInitiative] = useState(null);

  const initiatives = [
    {
      id: 'community-kitchen',
      title: 'Community Kitchen',
      icon: Coffee,
      category: 'Food & Culture',
      description: 'Bridging communities through food, storytelling, and shared experiences.',
      impact: '5000+ meals served',
      details: [
        'Traditional cooking workshops',
        'Cultural food festivals',
        'Community dining experiences',
        'Recipe preservation program'
      ],
      image: '/api/placeholder/600/400',
      stats: {
        events: '120+',
        participants: '2000+',
        communities: '15+'
      }
    },
    {
      id: 'youth-empowerment',
      title: 'Youth Empowerment',
      icon: Lightbulb,
      category: 'Education',
      description: 'Empowering young minds through mentorship, skills development, and creative expression.',
      impact: '1000+ youth engaged',
      details: [
        'Mentorship programs',
        'Skill-building workshops',
        'Leadership development',
        'Creative arts programs'
      ],
      image: '/api/placeholder/600/400',
      stats: {
        workshops: '200+',
        mentors: '50+',
        success: '85%'
      }
    },
    {
      id: 'eco-initiatives',
      title: 'Eco Initiatives',
      icon: Leaf,
      category: 'Sustainability',
      description: 'Creating a sustainable future through community-led environmental programs.',
      impact: '5000+ trees planted',
      details: [
        'Urban gardening',
        'Waste reduction',
        'Environmental education',
        'Green community projects'
      ],
      image: '/api/placeholder/600/400',
      stats: {
        projects: '25+',
        volunteers: '500+',
        impact: '10 tons'
      }
    },
    {
      id: 'cultural-exchange',
      title: 'Cultural Exchange',
      icon: Globe,
      category: 'Culture',
      description: 'Fostering understanding and appreciation through cultural exchange programs.',
      impact: '20+ cultures celebrated',
      details: [
        'Cultural festivals',
        'Language exchange',
        'Art exhibitions',
        'Traditional performances'
      ],
      image: '/api/placeholder/600/400',
      stats: {
        events: '100+',
        languages: '12+',
        participants: '3000+'
      }
    }
  ];

  const impactStats = [
    {
      number: '10,000+',
      label: 'Lives Impacted',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      number: '50+',
      label: 'Active Programs',
      icon: Target,
      color: 'text-primary-500'
    },
    {
      number: '100+',
      label: 'Community Partners',
      icon: HandHeart,
      color: 'text-green-500'
    },
    {
      number: '5000+',
      label: 'Volunteer Hours',
      icon: Users,
      color: 'text-blue-500'
    }
  ];

  const stories = [
    {
      title: "Growing Together",
      category: "Eco Initiatives",
      description: "How our community garden transformed an empty lot into a thriving green space.",
      image: "/api/placeholder/400/300",
      impact: "Created sustainable food source for 100+ families"
    },
    {
      title: "Youth Leadership Program",
      category: "Youth Empowerment",
      description: "Meet the young leaders shaping our community's future through innovative projects.",
      image: "/api/placeholder/400/300",
      impact: "20 youth-led community projects launched"
    },
    {
      title: "Cultural Heritage Festival",
      category: "Cultural Exchange",
      description: "Celebrating diversity through music, dance, and traditional crafts.",
      image: "/api/placeholder/400/300",
      impact: "3000+ attendees from 15 different communities"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-[250px] -left-[250px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute w-[500px] h-[500px] -bottom-[250px] -right-[250px] bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        </div>

        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-3 py-1.5 bg-white border-2 border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6">
              <HandHeart className="w-4 h-4 mr-2" />
              Our Impact
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Creating
              <span className="block mt-2 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Lasting Change
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Through our community initiatives, we're building a more inclusive, sustainable, and connected world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Key Initiatives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we're making a difference through our various programs and initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${
                  activeInitiative === initiative.id ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setActiveInitiative(initiative.id)}
              >
                <div className="w-12 h-12 mb-4 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors duration-300">
                  <initiative.icon className="w-6 h-6" />
                </div>
                <span className="inline-block px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full mb-3">
                  {initiative.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{initiative.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-primary-600">
                    <Sparkles className="w-4 h-4 mr-2" />
                    {initiative.impact}
                  </div>
                </div>

                {activeInitiative === initiative.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-primary-100"
                  >
                    <ul className="space-y-2">
                      {initiative.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 mr-2 text-primary-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-primary-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories of impact from our community initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full mb-3">
                    {story.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{story.description}</p>
                  <div className="flex items-center text-sm text-primary-600">
                    <Target className="w-4 h-4 mr-2" />
                    {story.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20" />
            </div>
            <div className="relative px-8 py-12 md:py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Be Part of the Change
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in creating meaningful impact through our community initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-xl hover:bg-primary-50 transition-colors duration-200"
                >
                  Get Involved
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors duration-200"
                >
                  Support Our Cause
                  <Heart className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                Our Impact
              </span>
              <h2 className="text-3xl font-display font-bold text-gray-900">
                Measuring Our Progress
              </h2>
              <p className="text-gray-600">
                We believe in transparency and measurable impact. Here's how our initiatives have made a difference in numbers.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Trees Planted', value: '5,000+', icon: Sprout },
                  { label: 'Youth Mentored', value: '1,000+', icon: Users },
                  { label: 'Meals Served', value: '10,000+', icon: Coffee },
                  { label: 'Workshop Hours', value: '2,500+', icon: Book }
                ].map((metric, index) => (
                  <div key={index} className="bg-primary-50/30 rounded-xl p-4">
                    <metric.icon className="w-6 h-6 text-primary-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                <img
                  src="/api/placeholder/800/600"
                  alt="Impact Visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium mb-2">Featured Project</div>
                  <div className="text-xl font-bold">Community Garden Initiative</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-16 bg-primary-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Partners in Change
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Working together with organizations that share our vision for a better community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <img
                      src={`/api/placeholder/64/64`}
                      alt={`Partner ${partner}`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Partner Organization {partner}</h3>
                    <p className="text-sm text-gray-600">Supporting our community initiatives since 2020</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm text-center"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive updates about our initiatives and impact stories.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-primary-100 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200"
                >
                  Subscribe
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Upcoming Initiative Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at these upcoming events and be part of our initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Community Garden Workshop",
                date: "November 15, 2024",
                time: "10:00 AM - 12:00 PM",
                category: "Eco Initiatives"
              },
              {
                title: "Youth Leadership Summit",
                date: "November 20, 2024",
                time: "2:00 PM - 6:00 PM",
                category: "Youth Empowerment"
              },
              {
                title: "Cultural Exchange Fair",
                date: "November 25, 2024",
                time: "11:00 AM - 4:00 PM",
                category: "Cultural Exchange"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary-50/30 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-300"
              >
                <span className="inline-block px-2 py-1 bg-white text-primary-600 text-xs rounded-full mb-4">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.a
              href="/events"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you want to volunteer, donate, or spread the word, there are many ways to support our initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/volunteer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors duration-200"
              >
                Volunteer With Us
                <Users className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-primary-200 text-primary-600 rounded-xl hover:bg-primary-50 transition-colors duration-200"
              >
                Contact Us
                <MessageSquare className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;