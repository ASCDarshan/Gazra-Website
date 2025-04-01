/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const FormInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = true,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-lg border ${error
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
        } transition-all duration-200 shadow-sm placeholder-gray-400`}
      placeholder={placeholder}
      required={required}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const FormTextarea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  error,
  required = true,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`w-full px-4 py-3 rounded-lg border ${error
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:border-primary-500 focus:ring-primary-500"
        } transition-all duration-200 shadow-sm placeholder-gray-400`}
      placeholder={placeholder}
      required={required}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const ContactPage = () => {
  const initialFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    emailjs.init("Hgc_vj4NHJ-jIFSdG");
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formState.subject.trim()) {
      errors.subject = "Subject is required";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const result = await emailjs.send(
        "service_wmpytmm", // Replace with your service ID
        "template_t5z1kdf", // Replace with your template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          from_phone: formState.phone,
          subject: formState.subject,
          message: formState.message,
        }
      );

      console.log("Email sent successfully:", result);
      setFormStatus("success");
      setStatusMessage(
        "Your message has been sent successfully. We'll get back to you soon."
      );
      setFormState(initialFormState);
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormStatus("error");
      setStatusMessage(
        "Failed to send your message. Please try again or contact us directly by phone."
      );
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        if (formStatus === "success") {
          setFormStatus(null);
        }
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50/10 via-white to-secondary-50/10">
      <section className="relative pt-25 pb-18 sm:pt-40 sm:pb-32 overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-5 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d1a18a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center px-4 py-1.5 bg-primary-100/70 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-6 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                We&apos;re Here to Help
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-5 text-gray-900 leading-tight">
                Connect with <span className="text-primary-600">Gazra</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Whether you have a question, feedback, or just want to say
                hello, we&apos;re all ears. Reach out through your preferred
                method below.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 sm:py-20"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center p-8 bg-green-50 rounded-lg"
                >
                  <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    Thank You!
                  </h3>
                  <p className="text-green-600">{statusMessage}</p>
                </motion.div>
              ) : formStatus === "error" ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center p-8 bg-red-50 rounded-lg"
                >
                  <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-red-700">
                    Something Went Wrong
                  </h3>
                  <p className="text-red-600">{statusMessage}</p>
                  <button
                    onClick={() => setFormStatus(null)}
                    className="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormInput
                    id="name"
                    label="Your Name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleInputChange}
                    error={formErrors.name}
                  />
                  <FormInput
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                  />

                  <FormInput
                    id="subject"
                    label="Subject"
                    placeholder="How can we help you?"
                    value={formState.subject}
                    onChange={handleInputChange}
                    error={formErrors.subject}
                  />
                  <FormTextarea
                    id="message"
                    label="Your Message"
                    placeholder="Tell us more about your inquiry..."
                    value={formState.message}
                    onChange={handleInputChange}
                    error={formErrors.message}
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 ${isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary-500 to-primary-600 hover:shadow-lg"
                      } text-white font-medium rounded-lg shadow-md transition-all duration-300`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                    Visit Us
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
                    Come Experience
                    <span className="block mt-1 sm:mt-2 text-primary-600">
                      The Magic
                    </span>
                  </h2>

                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Gazra Cafe, Shri Maharani Chimnabai Stree Udyogalaya,
                          Opp. Sursagar, Mandvi, Vadodara
                        </p>
                        <a
                          href="https://maps.google.com/?q=Shri+Maharani+Chimnabai+Stree+Udyogalaya+Vadodara"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm mt-1 inline-flex items-center"
                        >
                          Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Monday - Sunday: 9:00 AM - 10:00 PM
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Kitchen closes at 9:30 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Contact
                        </h3>
                        <a
                          href="tel:+918200306871"
                          className="text-gray-600 text-sm sm:text-base hover:text-primary-600"
                        >
                          +91 82003 06871
                        </a>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-500 text-white rounded-full font-medium shadow-lg hover:bg-primary-600 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Reserve a Table
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-3xl transform rotate-3 -z-10"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 sm:border-8 border-white h-[400px] sm:h-[500px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.548806266471!2d73.19829807507117!3d22.29503642968911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5bbe3f0607b%3A0x33ac28417835816d!2sShri%20Maharani%20Chimnabai%20Stree%20Udyogalaya!5e0!3m2!1sen!2sin!4v1716886941234!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gazra Cafe Location"
                    ></iframe>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 backdrop-blur-md rounded-full p-3 sm:p-4 shadow-lg">
                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-3 sm:p-4 pointer-events-none">
                      <p className="font-medium text-center text-gray-900 text-sm sm:text-base">
                        Gazra Cafe
                      </p>
                      <p className="text-xs sm:text-sm text-center text-gray-600">
                        Opp. Sursagar, Mandvi, Vadodara
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
