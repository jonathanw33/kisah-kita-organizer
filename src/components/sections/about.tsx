"use client";

import { motion } from "framer-motion";
import { Heart, Users, Calendar, Award } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Warm Approach",
      description: "We approach every event with warmth and respect for your values and beliefs"
    },
    {
      icon: Users,
      title: "Personal Companion",
      description: "We're here as your friend and guide throughout every important moment"
    },
    {
      icon: Calendar,
      title: "Life-Long Coverage",
      description: "From first breath to final rest, we accompany every phase of life"
    },
    {
      icon: Award,
      title: "Budget Friendly",
      description: "Professional service that can be adjusted to your budget needs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              About <span className="text-primary-400">Kisah Kita</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-primary-400">Kisah Kita Organizer</span> is an event organizing service company that exists to accompany and arrange every important moment in our lives as human beings, from the first second of life to the final rest.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that every phase of life has a story worth remembering. Therefore, we are here as a companion who will help you arrange every moment into eternal memories, with a warm approach that respects values and beliefs and certainly can be adjusted to your budget.
              </p>
              <div className="pt-4">
                <blockquote className="text-xl italic text-primary-500 font-medium border-l-4 border-primary-400 pl-6">
                  "Let's create precious stories together"
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-primary-400 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-primary-50 leading-relaxed">
                  To transform every significant moment in your life into unforgettable memories, 
                  ensuring each event reflects your unique story while staying within your budget.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
