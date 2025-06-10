"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Locations",
      details: ["Bandung, West Java", "Bali, Indonesia"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["(+62) 858 8052 9488", "(+62) 81 8098 21067"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kisahkita.113@gmail.com"],
      color: "text-red-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: ["@kisahkita.organizer"],
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Get In <span className="text-primary-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start planning your special event? We'd love to hear from you. 
              Contact us to discuss your vision and let's create something beautiful together.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 ${info.color}`}>
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Planning?
              </h3>
              <p className="text-primary-50 mb-6 max-w-2xl mx-auto leading-relaxed">
                Contact us via WhatsApp for quick consultation and instant responses. 
                We're here to help bring your event vision to life!
              </p>
              <motion.a
                href="http://wa.me/6285880529488"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-primary-500 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Inspirational Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <blockquote className="text-2xl font-medium text-gray-800 mb-4 italic">
                "Mari menciptakan kisah berharga bersama kami"
              </blockquote>
              <p className="text-primary-500 font-semibold">Let's create precious stories together</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <blockquote className="text-2xl font-medium text-gray-800 mb-4 italic">
                "Buatlah acara sesuai dengan budget anda"
              </blockquote>
              <p className="text-primary-500 font-semibold">Create events according to your budget</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-20 border-t border-gray-200 pt-8"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Kisah Kita Organizer</h3>
            <p className="text-gray-600 mb-4">Organizing the Story of Your Life</p>
            <p className="text-sm text-gray-500">
              © 2024 Kisah Kita Organizer. Based in Bandung and Bali, Indonesia.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
