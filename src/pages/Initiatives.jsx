import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Coffee,
  Book,
  HandHeart,
  ArrowRight,
  Sparkles,
  Target,
  Smartphone,
  Building,
  GraduationCap,
  Gavel,
  HeartPulse,
  Star,
  ChevronRight,
  ChevronUp,
  Shield,
  Map,
  MessageCircle,
  User,
  Search,
} from "lucide-react";
import Gazra from "../assets/Gazra.jpg"

const Brain = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"></path>
  </svg>
);

const initiatives = [
  {
    id: "gazra-cafe",
    title: "Gazra Cafe",
    icon: Coffee,
    category: "Gender Empowerment",
    description:
      "Gujarat's first queer-led cafe, providing a safe inclusive space and employment opportunities for the LGBTQIA+ community.",
    impact: "First queer-led cafe in Gujarat",
    details: [
      "Located at MCSU premises near Sursagar Lake, Vadodara",
      "Managed entirely by members of the queer community",
      "Specializes in Gujarati and Maharashtrian cuisine",
      "Supported by the Vadodara royal family",
      "Creates livelihood opportunities for marginalized communities",
    ],
    image: "/api/placeholder/600/400",
    stats: {
      established: "August 18, 2023",
      cuisine: "Gujarati & Maharashtrian",
      management: "100% Queer-led",
    },
    status: "Completed",
  },
  {
    id: "gazra-app",
    title: "Gazra App",
    icon: Smartphone,
    category: "Resource Portal",
    description:
      "One-stop resource portal for verified support services catered to the LGBTQIA+ community and marginalized groups.",
    impact: "Comprehensive support network",
    details: [
      "Verified listing of LGBTQIA+ friendly professionals",
      "Categories include doctors, lawyers, mental health counselors",
      "Human resource professionals for workplace inclusion",
      "Soon to be available on Android and Apple app stores",
      "Vetted resources to ensure safe and supportive experiences",
    ],
    image: "/api/placeholder/600/400",
    stats: {
      resources: "50+ professionals",
      categories: "5+ service types",
      availability: "Coming Soon",
    },
    status: "Upcoming",
  },
  {
    id: "pink-line-project",
    title: "Pink Line Project",
    icon: Target,
    category: "Gender Empowerment",
    description:
      "An initiative focused on establishing boundaries, safety, and increased visibility for marginalized gender identities.",
    impact: "Creating safe spaces and awareness",
    details: [
      "Safety campaigns for vulnerable gender identities",
      "Establishing support systems and networks",
      "Awareness programs about gender-based discrimination",
      "Community outreach and education initiatives",
    ],
    image: "/api/placeholder/600/400",
    stats: {
      focus: "Safety & Visibility",
      approach: "Community-centered",
      status: "In development",
    },
    status: "Upcoming",
  },
  {
    id: "gender-sensitization",
    title: "Gender Sensitization Workshops",
    icon: GraduationCap,
    category: "Education & Awareness",
    description:
      "Workshops designed to promote understanding of gender issues, challenge stereotypes, and foster inclusivity.",
    impact: "Building a gender-sensitive community",
    details: [
      "Interactive sessions on gender identity and expression",
      "Dismantling harmful stereotypes and misconceptions",
      "Creating allies through education and empathy",
      "Providing tools for creating inclusive environments",
    ],
    image: "/api/placeholder/600/400",
    stats: {
      approach: "Interactive learning",
      targetAudience: "Community-wide",
      facilitators: "Trained professionals",
    },
    status: "Upcoming",
  },
];

const impactStats = [
  {
    number: "100%",
    label: "Queer-Managed Cafe",
    icon: Coffee,
  },
  {
    number: "5+",
    label: "Professional Categories",
    icon: Smartphone,
  },
  {
    number: "1st",
    label: "LGBTQIA+ Cafe in Gujarat",
    icon: Heart,
  },
  {
    number: "110+",
    label: "Years of MCSU Legacy",
    icon: Building,
  },
];

const supportCategories = [
  {
    title: "Medical Support",
    icon: HeartPulse,
    description: "LGBTQIA+ friendly healthcare providers",
    resourceCount: "Doctors & Specialists",
  },
  {
    title: "Legal Assistance",
    icon: Gavel,
    description: "Legal professionals specialized in LGBTQIA+ rights",
    resourceCount: "Lawyers & Advisors",
  },
  {
    title: "Mental Health",
    icon: Brain,
    description: "Counselors experienced with gender and identity issues",
    resourceCount: "Therapists & Counselors",
  },
  {
    title: "Workplace Inclusion",
    icon: Users,
    description: "HR professionals promoting inclusive workplaces",
    resourceCount: "HR Consultants",
  },
  {
    title: "Education Resources",
    icon: Book,
    description: "Learning materials about gender and sexuality",
    resourceCount: "Educational Content",
  },
  {
    title: "Community Support",
    icon: HandHeart,
    description: "Peer support groups and community spaces",
    resourceCount: "Support Networks",
  },
];

const InitiativesPage = () => {
  const [activeInitiative, setActiveInitiative] = useState(null);

  return (
    <div className="w-full">
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-b from-white via-primary-50/50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute w-[800px] h-[800px] -bottom-[400px] -right-[400px] bg-accent-terracotta/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 via-transparent to-accent-ochre/20 animate-gradient"></div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary-200 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-accent-terracotta/30 rounded-full animate-float-delay-1"></div>
          <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-accent-ochre/30 rounded-full animate-float-delay-2"></div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-accent-sage/30 rounded-full animate-float-delay-3"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start space-y-4"
              >
                <span
                  className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm 
                  border-2 border-primary-100 rounded-full text-primary-600 text-sm font-medium"
                >
                  <Heart className="w-4 h-4 mr-2" strokeWidth={3} />
                  MCSU & Gazra
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-2xl font-display font-bold leading-tight">
                  <span className="block text-neutral-900"> Fostering</span>
                  <span
                    className="block mt-2 bg-gradient-to-r from-primary-600 via-accent-sage to-accent-terracotta 
                    bg-clip-text text-transparent"
                  >
                    Inclusive Empowerment
                  </span>
                  <span className="block mt-2 text-neutral-900">
                    Building on MCSU&apos;s century-long legacy, Gazra leads
                    innovative initiatives for the LGBTQIA+ community and
                    marginalized groups, fostering inclusivity and economic
                    independence.
                  </span>
                </h1>

                <p className="text-lg text-neutral-600 max-w-xl">
                  An initiative by Shri Maharani Chimnabai Stree Udyogalaya,
                  creating safe spaces, fostering understanding, and celebrating
                  diversity in our vibrant community.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#mission"
                    className="relative group"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-terracotta 
                      rounded-2xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    ></div>
                    <div
                      className="relative inline-flex items-center px-8 py-4 bg-white rounded-2xl
                      shadow-soft group-hover:shadow-lg transition-all duration-300"
                    >
                      <span
                        className="bg-gradient-to-r from-primary-600 to-accent-terracotta bg-clip-text text-transparent 
                        font-semibold"
                      >
                        Explore Our Initiatives
                      </span>
                      <ArrowRight className="ml-2 w-5 h-5 text-primary-500" />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-primary-50 relative overflow-hidden"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-terracotta text-white rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Our Heritage & Mission</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 leading-tight">
                Gazra: Advancing MCSU&apos;s Legacy of Empowerment
              </h2>

              <p className="text-neutral-700 text-lg leading-relaxed">
                Founded in 1914 by Maharani Chimnabai II, Shri Maharani
                Chimnabai Stree Udyogalaya (MCSU) has evolved from its original
                focus on women&apos;s vocational training to embrace a broader
                mission of inclusivity.
              </p>

              <p className="text-neutral-700 text-lg leading-relaxed">
                Today, Gazra represents MCSU&apos;s commitment to gender
                empowerment, creating safe spaces and opportunities for the
                LGBTQIA+ community while honoring the institution&apos;s
                century-old dedication to fostering independence and dignity.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 shadow-soft border border-primary-200">
                  <Building className="w-8 h-8 text-primary-700 mb-3" />
                  <div className="text-lg font-semibold text-primary-900">
                    Est. 1914
                  </div>
                  <div className="text-neutral-600">MCSU Foundation</div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 shadow-soft border border-secondary-200">
                  <HandHeart className="w-8 h-8 text-secondary-700 mb-3" />
                  <div className="text-lg font-semibold text-primary-900">
                    Gender Empowerment
                  </div>
                  <div className="text-neutral-600">Core Focus Area</div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 shadow-soft border border-accent-ochre/50">
                  <Coffee className="w-8 h-8 text-accent-ochre mb-3" />
                  <div className="text-lg font-semibold text-primary-900">
                    August 2023
                  </div>
                  <div className="text-neutral-600">Gazra Cafe Launch</div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 shadow-soft border border-accent-slate/50">
                  <Smartphone className="w-8 h-8 text-accent-slate mb-3" />
                  <div className="text-lg font-semibold text-primary-900">
                    Coming Soon
                  </div>
                  <div className="text-neutral-600">Gazra App</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-hard">
                <img
                  src="/api/placeholder/800/600"
                  alt="MCSU Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-primary-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-sm font-medium mb-2 text-primary-200">
                    Historical Institution
                  </div>
                  <div className="text-2xl font-bold">
                    MCSU Campus, Vadodara
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl border-2 border-primary-200 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl border-2 border-secondary-200 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-primary-50/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${stat.color} bg-white shadow-soft border border-neutral-200 group-hover:shadow-medium group-hover:scale-105 transition-all duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-primary-700" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent-slate bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-lg text-neutral-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-white relative"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Our Programs</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Gazra&apos;s Key Initiatives
            </h2>

            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Discover our innovative projects aimed at creating inclusive
              spaces, providing resources, and fostering understanding within
              the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives?.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-8 border border-neutral-200 shadow-soft hover:shadow-medium transition-all duration-500 cursor-pointer overflow-hidden ${activeInitiative === initiative.id
                  ? "ring-2 ring-primary-500 shadow-lg"
                  : ""
                  }`}
                onClick={() =>
                  setActiveInitiative(
                    activeInitiative === initiative.id ? null : initiative.id
                  )
                }
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-neutral-50 to-neutral-100 -z-10"></div>

                <span
                  className={`absolute top-6 right-6 text-xs px-3 py-1.5 rounded-full ${initiative.status === "Completed"
                    ? "bg-success-50 text-success-700 border border-success-200/50"
                    : "bg-info-50 text-info-700 border border-info-200/50"
                    }`}
                >
                  {initiative.status}
                </span>

                <div
                  className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${initiative?.colors?.gradient || "from-gray-500 to-gray-700"
                    } text-white shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}
                >
                  {initiative.icon && <initiative.icon className="w-8 h-8" />}
                </div>

                <span
                  className={`inline-block px-3 py-1.5 ${initiative?.colors?.light} ${initiative?.colors?.text} text-xs rounded-full mb-4`}
                >
                  {initiative.category}
                </span>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-neutral-600 mb-5">
                  {initiative.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-primary-600 to-accent-slate bg-clip-text text-transparent mb-5">
                  <Sparkles className="w-5 h-5 text-primary-500" />
                  <span>{initiative.impact}</span>
                </div>

                {activeInitiative === initiative.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-neutral-200"
                  >
                    <ul className="space-y-3 mb-6">
                      {initiative.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-neutral-700"
                        >
                          <ChevronRight
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${initiative.colors.text}`}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {Object.entries(initiative.stats).map(
                        ([key, value], idx) => (
                          <div
                            key={idx}
                            className={`${initiative.colors.light} p-3 rounded-xl`}
                          >
                            <div className="text-xs text-neutral-500 capitalize mb-1">
                              {key}
                            </div>
                            <div
                              className={`text-sm font-semibold ${initiative.colors.text}`}
                            >
                              {value}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}

                <div className="absolute bottom-6 right-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 rounded-full ${initiative?.colors?.light} ${initiative?.colors?.text} flex items-center justify-center transition-colors duration-300`}
                  >
                    {activeInitiative === initiative.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary-200 to-primary-100 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary-200 to-primary-100 opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-secondary-700 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>

              <h2 className="text-4xl font-display font-bold text-neutral-900 leading-tight">
                Gazra App:
                <span className="block mt-1 bg-gradient-to-r from-secondary-500 to-secondary-700 bg-clip-text text-transparent">
                  One-Stop Resource Portal
                </span>
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed">
                Connecting the LGBTQIA+ community with verified, supportive
                professionals across multiple categories. Our app ensures safe
                access to essential services through a carefully vetted network.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-soft border border-primary-200">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      Verified Professionals
                    </div>
                    <div className="text-sm text-neutral-600">
                      Carefully screened providers
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-soft border border-primary-200">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      Safe Experience
                    </div>
                    <div className="text-sm text-neutral-600">
                      Protected user privacy
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-soft border border-primary-200">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      Location-Based
                    </div>
                    <div className="text-sm text-neutral-600">
                      Find nearby resources
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-soft border border-primary-200">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">
                      Community Reviews
                    </div>
                    <div className="text-sm text-neutral-600">
                      Honest feedback system
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full shadow-medium hover:shadow-colored transition-all duration-300"
              >
                <span>Join the Waitlist</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto w-[280px] h-[580px] bg-neutral-900 rounded-[3rem] border-[14px] border-neutral-900 shadow-hard overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-6 bg-neutral-900 rounded-b-xl"></div>
                <div className="h-full bg-gradient-to-b from-primary-100 to-primary-50 overflow-y-auto">
                  <div className="p-4">
                    <div className="h-12 flex items-center justify-between mb-6">
                      <div className="font-bold text-lg text-neutral-900">
                        Gazra App
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-soft">
                        <User className="w-4 h-4 text-secondary-600" />
                      </div>
                    </div>

                    <div className="relative h-10 mb-6">
                      <input
                        type="text"
                        className="w-full h-full rounded-xl bg-white pl-10 pr-4 shadow-soft border border-primary-200 text-sm"
                        placeholder="Search resources..."
                        disabled
                      />
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                    </div>

                    <h3 className="font-semibold text-neutral-900 mb-3">
                      Resource Categories
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {supportCategories.slice(0, 6).map((category, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-4 shadow-soft flex flex-col items-center text-center"
                        >
                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-secondary-600 mb-2">
                            {React.createElement(category.icon, {
                              className: "w-5 h-5",
                            })}
                          </div>
                          <div className="font-medium text-sm text-neutral-900 mb-1">
                            {category.title}
                          </div>
                          <div className="text-xs text-secondary-600">
                            {category.resourceCount}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-semibold text-neutral-900 mb-3">
                      Featured Professionals
                    </h3>

                    <div className="space-y-3">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl p-4 shadow-soft flex items-center gap-3"
                        >
                          <div className="w-12 h-12 rounded-full bg-neutral-100"></div>
                          <div className="flex-1">
                            <div className="font-medium text-neutral-900">
                              Professional Name
                            </div>
                            <div className="text-xs text-neutral-500">
                              Category • Location
                            </div>
                            <div className="flex items-center mt-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className="w-3 h-3 text-accent-ochre"
                                  fill="currentColor"
                                />
                              ))}
                            </div>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-secondary-600">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full blur-3xl opacity-10"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-accent-slate to-secondary-500 rounded-full blur-3xl opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-white relative overflow-hidden"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative max-w-lg mx-auto">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-2xl overflow-hidden shadow-hard"
                >
                  <img
                    src={Gazra}
                    alt="Gazra Cafe"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-3">
                      <Coffee className="w-4 h-4" />
                      <span>Gazra Cafe</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Gujarat&apos;s First Queer-Led Cafe
                    </h3>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-1/3 right-4 md:bottom-1/2 md:right-0 bg-white rounded-xl p-6 shadow-medium max-w-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <div className="font-bold text-neutral-900">
                      Cafe Visitor
                    </div>
                    <div className="text-xs text-accent-terracotta">
                      Community Member
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 italic text-sm">
                  &quot;Gazra Cafe isn&apos;t just a place to eat - it&apos;s a
                  space where I can truly be myself without judgment. The warmth
                  and acceptance here are just as nourishing as the food.&quot;
                </p>
                <div className="mt-3 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-accent-ochre"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-secondary-700 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Spotlight Initiative</span>
              </div>

              <h2 className="text-4xl font-display font-bold text-neutral-900 leading-tight">
                Gazra Cafe:
                <span className="block mt-1 bg-gradient-to-r from-accent-terracotta to-accent-ochre bg-clip-text text-transparent">
                  Gujarat&apos;s First Queer-Led Cafe
                </span>
              </h2>

              <p className="text-neutral-600 text-lg leading-relaxed">
                Launched on August 18, 2023, at the MCSU premises near Sursagar
                Lake in Vadodara, Gazra Cafe is a groundbreaking initiative that
                offers more than just culinary delights.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-accent-terracotta to-accent-ochre flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Queer-Led Management
                    </h3>
                    <p className="text-neutral-600">
                      The cafe is managed entirely by members of the LGBTQIA+
                      community, creating meaningful employment opportunities
                      and a model for inclusive business practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-accent-terracotta to-accent-ochre flex items-center justify-center text-white">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Regional Culinary Experience
                    </h3>
                    <p className="text-neutral-600">
                      Specializing in authentic Gujarati and Maharashtrian
                      cuisine, the cafe celebrates local culinary traditions
                      while creating a unique dining experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-accent-terracotta to-accent-ochre flex items-center justify-center text-white">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Safe and Inclusive Space
                    </h3>
                    <p className="text-neutral-600">
                      A welcoming environment where everyone can feel
                      comfortable, respected, and valued regardless of their
                      identity, fostering community connections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-accent-terracotta to-accent-ochre flex items-center justify-center text-white">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      Royal Support
                    </h3>
                    <p className="text-neutral-600">
                      Proud to have received the support of the Vadodara royal
                      family, continuing MCSU&apos;s historic royal connections and
                      bringing prestigious recognition to the initiative.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-terracotta to-accent-ochre text-white rounded-full shadow-medium hover:shadow-colored transition-all duration-300"
                >
                  <span>Visit Gazra Cafe</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativesPage;
