"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Cake, GraduationCap, Users, Building2 } from "lucide-react";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: null },
    { name: "Wedding Receptions", icon: Heart },
    { name: "Birthday", icon: Cake },
    { name: "Graduation Photoshoot", icon: GraduationCap },
    { name: "Family Gathering", icon: Users },
    { name: "Company Gathering", icon: Building2 }
  ];

  // Placeholder images - these will be replaced with real photos later
  const galleryItems = [
    {
      id: 1,
      category: "Wedding Receptions",
      title: "Elegant Garden Wedding",
      description: "Beautiful outdoor ceremony with stunning ocean views",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Birthday",
      title: "Sweet 16 Celebration",
      description: "Colorful and vibrant birthday party setup",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Graduation Photoshoot",
      title: "University Graduation",
      description: "Professional graduation photography session",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "Family Gathering",
      title: "Annual Family Reunion",
      description: "Multi-generational family celebration",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "Company Gathering",
      title: "Corporate Annual Gala",
      description: "Professional corporate event with elegant setup",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      category: "Wedding Receptions",
      title: "Beach Wedding Ceremony",
      description: "Romantic beachside wedding celebration",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      category: "Birthday",
      title: "Milestone Birthday Party",
      description: "Sophisticated adult birthday celebration",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      category: "Family Gathering",
      title: "Holiday Family Dinner",
      description: "Festive family celebration with traditional setup",
      image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 9,
      category: "Company Gathering",
      title: "Team Building Event",
      description: "Corporate team building and networking event",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
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
              Our <span className="text-primary-400">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of memorable events. From intimate gatherings to grand celebrations, 
              each photo tells a story of joy, love, and precious moments we've helped create.
            </p>
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This gallery will be populated with our actual event photos as we complete more projects and gather client permissions.
              </p>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.name
                    ? "bg-primary-400 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-500 border border-gray-200"
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4" />}
                {filter.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Create Your Own Story?
              </h3>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Let us help you plan an unforgettable event that will become a cherished memory for years to come.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-400 hover:bg-primary-500 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg"
              >
                Start Planning Your Event
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
