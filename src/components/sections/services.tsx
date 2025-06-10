"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Baby, 
  Cake, 
  GraduationCap, 
  Camera, 
  Users, 
  Building2,
  PartyPopper,
  Calendar,
  Flower2
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    { icon: Heart, name: "Gender Reveal", category: "Baby & Family" },
    { icon: Baby, name: "Baby Shower", category: "Baby & Family" },
    { icon: Baby, name: "Baby Moon", category: "Baby & Family" },
    { icon: Camera, name: "Maternity Shoot", category: "Photography" },
    { icon: Camera, name: "Newborn Shoot", category: "Photography" },
    { icon: Cake, name: "Birthday", category: "Celebrations" },
    { icon: GraduationCap, name: "Graduation Photoshoot", category: "Photography" },
    { icon: Heart, name: "Engagement", category: "Romance" },
    { icon: Camera, name: "Prewedding Shoot", category: "Romance" },
    { icon: Flower2, name: "Wedding", category: "Romance" },
    { icon: Heart, name: "Honeymoon Organizer", category: "Romance" },
    { icon: PartyPopper, name: "Khitanan dan Syukuran", category: "Traditional" },
    { icon: Calendar, name: "Anniversary", category: "Celebrations" },
    { icon: Users, name: "Family Gathering", category: "Family" },
    { icon: Building2, name: "Company Gathering", category: "Corporate" },
    { icon: Flower2, name: "Funeral Services", category: "Life Events" }
  ];

  const categories = [
    { name: "Baby & Family", color: "bg-pink-100 text-pink-700 border-pink-200" },
    { name: "Photography", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { name: "Celebrations", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { name: "Romance", color: "bg-red-100 text-red-700 border-red-200" },
    { name: "Traditional", color: "bg-green-100 text-green-700 border-green-200" },
    { name: "Family", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "Corporate", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    { name: "Life Events", color: "bg-gray-100 text-gray-700 border-gray-200" }
  ];

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-400">Services</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From the first breath to life&rsquo;s final moments, we organize every significant chapter of your story with care, creativity, and attention to detail.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(service.category)}`}>
                    {service.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Plan Your Event?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Let&rsquo;s create beautiful memories together. Contact us to discuss your vision and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-400 hover:bg-primary-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-400 text-primary-500 hover:bg-primary-400 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-500 italic">
                  &ldquo;Let&rsquo;s create precious stories together&rdquo; - &ldquo;Create events according to your budget&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
